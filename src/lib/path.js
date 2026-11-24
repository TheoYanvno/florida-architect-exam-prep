// Each division is a path in three steps, like CodeForge: the lessons (each with its short check), then a
// division quiz, then a practice exam. The quiz unlocks once every lesson is finished, and the exam once the
// quiz is passed. Results are saved in the browser under their own key, so older saved progress (lessons,
// best scores, flashcards) is never touched. Pure functions; storage is passed in so tests can use a fake.
import { QUESTIONS, shuffled } from './questions.js';
import { DIVISIONS } from './are.js';
import { lessonsFor, finished } from './course/index.js';

export const QUIZ_SIZE = 10;
export const QUIZ_PASS = 75;
export const EXAM_PASS = 70;

const KEY = 'are-prep:path';
const DAYS_KEY = 'are-prep:days';
const IDS = new Set(DIVISIONS.map(d => d.id));
const pct = v => Number.isInteger(v) && v >= 0 && v <= 100;

/** The quiz draws on what the lessons taught: every question for the division except the exam-only ones. */
export const quizPool = division => QUESTIONS.filter(q => q.division === division && !q.exam && !q.case);
/** The practice exam uses every question for the division, including ten never seen in a lesson or quiz. */
export const examPool = division => QUESTIONS.filter(q => q.division === division);

export const quizSet = (division, seed = Date.now()) => shuffled(quizPool(division), seed).slice(0, QUIZ_SIZE);
/** How many items a practice exam has: the real division's count, or every question if the bank is smaller. */
export const examLength = division => Math.min(DIVISIONS.find(d => d.id === division)?.items ?? 0, examPool(division).length);

/**
 * A practice exam drawn like the real one: the division's item count, spread across NCARB's sections by the
 * middle of each published weight range, with one case study's items together at the end.
 */
export function examSet(division, seed = Date.now()) {
  const d = DIVISIONS.find(x => x.id === division);
  const pool = examPool(division);
  if (!d) return [];
  const n = examLength(division);
  const cases = [...new Set(pool.filter(q => q.case).map(q => q.case))];
  const caseId = cases.length ? shuffled(cases, seed)[0] : null;
  const caseItems = pool.filter(q => q.case === caseId);
  const rest = shuffled(pool.filter(q => !q.case), seed + 1);
  const want = Math.max(0, n - caseItems.length);
  // Each section's share of the whole exam by its mid weight, less the case items already in that section,
  // then a largest-remainder split so the counts add up exactly.
  const mids = d.sections.map(s => (s.min + s.max) / 2);
  const total = mids.reduce((a, b) => a + b, 0);
  const owed = d.sections.map((s, k) => Math.max(0, (n * mids[k]) / total - caseItems.filter(q => q.section === s.name).length));
  const owedSum = owed.reduce((a, b) => a + b, 0) || 1;
  const raw = owed.map(o => (want * o) / owedSum);
  const counts = raw.map(Math.floor);
  raw.map((r, k) => [r - Math.floor(r), k]).sort((a, b) => b[0] - a[0]).slice(0, want - counts.reduce((a, b) => a + b, 0)).forEach(([, k]) => counts[k]++);
  const picked = [];
  d.sections.forEach((s, k) => picked.push(...rest.filter(q => q.section === s.name).slice(0, counts[k])));
  // A section short of questions is made up from the others.
  const ids = new Set(picked.map(q => q.id));
  picked.push(...rest.filter(q => !ids.has(q.id)).slice(0, want - picked.length));
  return [...shuffled(picked, seed + 2), ...caseItems];
}

// --- an exam in progress, saved so it can be finished later ---
const RUN_KEY = 'are-prep:exam-run';
export function loadRun(division, storage = globalThis.localStorage) {
  try {
    const r = JSON.parse(storage?.getItem(RUN_KEY) || 'null');
    return r && r.division === division && Array.isArray(r.questions) && r.questions.length ? r : null;
  } catch { return null; }
}
export function saveRun(run, storage = globalThis.localStorage) {
  try { storage?.setItem(RUN_KEY, JSON.stringify(run)); return true; } catch { return false; }
}
export function clearRun(storage = globalThis.localStorage) {
  try { storage?.removeItem(RUN_KEY); } catch { /* blocked */ }
}

/** Seconds allowed for an exam of n questions at the real division's pace. */
export function examSeconds(division, n) {
  const d = DIVISIONS.find(x => x.id === division);
  return d ? Math.round((d.testMinutes * 60 / d.items) * n) : 0;
}

// --- saved results: { quiz: { pa: best% }, exam: { pa: { percent, timed } } } ---
export function loadPath(storage = globalThis.localStorage) {
  const out = { quiz: {}, exam: {} };
  try {
    const raw = JSON.parse(storage?.getItem(KEY) || '{}') || {};
    for (const [id, v] of Object.entries(raw.quiz || {})) if (IDS.has(id) && pct(v)) out.quiz[id] = v;
    for (const [id, v] of Object.entries(raw.exam || {})) {
      if (IDS.has(id) && v && pct(v.percent)) out.exam[id] = { percent: v.percent, timed: !!v.timed };
    }
  } catch { /* bad saved data: start fresh */ }
  return out;
}

export function savePath(path, storage = globalThis.localStorage) {
  try { storage?.setItem(KEY, JSON.stringify(path)); return true; } catch { return false; }
}

/** Keep the best quiz score. */
export const recordQuiz = (path, division, percent) =>
  ({ ...path, quiz: { ...path.quiz, [division]: Math.max(path.quiz[division] ?? 0, percent) } });

/** Keep the best exam score; a passing timed run is remembered even if an untimed one scored higher. */
export function recordExam(path, division, percent, timed) {
  const old = path.exam[division];
  const best = Math.max(old?.percent ?? 0, percent);
  const passedTimed = (old?.timed && old.percent >= EXAM_PASS) || (timed && percent >= EXAM_PASS);
  return { ...path, exam: { ...path.exam, [division]: { percent: best, timed: !!passedTimed } } };
}

export const lessonsDone = (division, lessons) => lessonsFor(division).every(l => finished(lessons, l.id));
export const quizPassed = (division, path) => (path.quiz[division] ?? -1) >= QUIZ_PASS;
export const examPassed = (division, path) => (path.exam[division]?.percent ?? -1) >= EXAM_PASS;

/** Where you are on a division's path: 'lessons', 'quiz', 'exam' or 'done'. */
export function stage(division, lessons, path) {
  if (!lessonsDone(division, lessons)) return 'lessons';
  if (!quizPassed(division, path)) return 'quiz';
  if (!examPassed(division, path)) return 'exam';
  return 'done';
}

/** How many of a division's steps are done: one per lesson, plus the quiz and the exam. */
export function steps(division, lessons, path) {
  const all = lessonsFor(division);
  return {
    done: all.filter(l => finished(lessons, l.id)).length + (quizPassed(division, path) ? 1 : 0) + (examPassed(division, path) ? 1 : 0),
    total: all.length + 2,
  };
}

// --- the days you studied, for streaks: a sorted list of 'YYYY-MM-DD' ---
export const today = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export function loadDays(storage = globalThis.localStorage) {
  try {
    const raw = JSON.parse(storage?.getItem(DAYS_KEY) || '[]');
    return Array.isArray(raw) ? [...new Set(raw.filter(d => /^\d{4}-\d{2}-\d{2}$/.test(d)))].sort() : [];
  } catch { return []; }
}

/** Mark a day as studied (keeps the last 400 days). */
export function recordDay(storage = globalThis.localStorage, day = today()) {
  const days = loadDays(storage);
  if (days.includes(day)) return days;
  const next = [...days, day].sort().slice(-400);
  try { storage?.setItem(DAYS_KEY, JSON.stringify(next)); } catch { /* storage full or blocked */ }
  return next;
}

const prevDay = d => { const t = new Date(d + 'T12:00:00Z'); t.setUTCDate(t.getUTCDate() - 1); return t.toISOString().slice(0, 10); };

/** Days in a row you have studied, ending today, or yesterday if you haven't studied yet today. */
export function streak(days, day = today()) {
  const set = new Set(days);
  let d = set.has(day) ? day : prevDay(day);
  let n = 0;
  while (set.has(d)) { n++; d = prevDay(d); }
  return n;
}

/** The longest run of days in a row. */
export function bestStreak(days) {
  let best = 0, run = 0, last = null;
  for (const d of [...days].sort()) {
    run = last && prevDay(d) === last ? run + 1 : 1;
    best = Math.max(best, run); last = d;
  }
  return best;
}
