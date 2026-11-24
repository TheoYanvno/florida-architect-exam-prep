// The course: one lesson for each NCARB content section of the six ARE® 5.0 divisions, written for this app.
// A lesson teaches the section in plain words, works an example where numbers matter, sums up what to
// remember, and ends with a short check. Its check questions also join that division's practice pool.
//   lesson = { id, division, section, title, minutes, intro, parts: [{ h, p: [..], list: [..] }],
//              example?: { title, steps: [..] }, takeaways: [..], quiz: [question] }
import PCM from './pcm.js';
import PJM from './pjm.js';
import PA from './pa.js';
import PPD from './ppd.js';
import PDD from './pdd.js';
import CE from './ce.js';

const withIds = (division, lessons) => lessons.map((l, i) => ({
  ...l, id: `${division}-l${i + 1}`, division,
  quiz: l.quiz.map((q, k) => ({ ...q, id: `${division}-l${i + 1}-q${k + 1}`, division, section: l.section })),
}));

export const LESSONS = [
  ...withIds('pcm', PCM), ...withIds('pjm', PJM), ...withIds('pa', PA),
  ...withIds('ppd', PPD), ...withIds('pdd', PDD), ...withIds('ce', CE),
];

export const lessonsFor = (division) => LESSONS.filter((l) => l.division === division);
export const lessonById = (id) => LESSONS.find((l) => l.id === id) || null;
export const LESSON_QUESTIONS = LESSONS.flatMap((l) => l.quiz);

// --- which lessons you have finished, saved in the browser: { [lessonId]: best check percent } ---
const KEY = 'are-prep:lessons';
export const PASS_MARK = 75;

export function loadLessons(storage = globalThis.localStorage) {
  try {
    const raw = JSON.parse(storage?.getItem(KEY) || '{}');
    const out = {};
    for (const [id, v] of Object.entries(raw && typeof raw === 'object' ? raw : {})) {
      if (lessonById(id) && Number.isInteger(v) && v >= 0 && v <= 100) out[id] = v;
    }
    return out;
  } catch { return {}; }
}

export function saveLessons(done, storage = globalThis.localStorage) {
  try { storage?.setItem(KEY, JSON.stringify(done)); return true; } catch { return false; }
}

/** Record a lesson check result, keeping the best. */
export const recordLesson = (done, id, percent) => ({ ...done, [id]: Math.max(done[id] ?? 0, percent) });

/** A lesson counts as finished once its check is passed. */
export const finished = (done, id) => (done[id] ?? -1) >= PASS_MARK;

/** Share of a division's lessons finished, 0 to 100. */
export function lessonPercent(division, done) {
  const all = lessonsFor(division);
  return all.length ? Math.round((all.filter((l) => finished(done, l.id)).length / all.length) * 100) : 0;
}
