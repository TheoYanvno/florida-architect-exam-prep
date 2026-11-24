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
import PCM2 from './pcm2.js';
import PJM2 from './pjm2.js';
import PA2 from './pa2.js';
import PPD2 from './ppd2.js';
import PDD2 from './pdd2.js';
import CE2 from './ce2.js';
import { UNITS, TEACHES } from './units.js';

const withIds = (division, lessons) => lessons.map((l, i) => ({
  ...l, id: `${division}-l${i + 1}`, division,
  quiz: l.quiz.map((q, k) => ({ ...q, id: `${division}-l${i + 1}-q${k + 1}`, division, section: l.section })),
}));

export const LESSONS = [
  ...withIds('pcm', [...PCM, ...PCM2]), ...withIds('pjm', [...PJM, ...PJM2]), ...withIds('pa', [...PA, ...PA2]),
  ...withIds('ppd', [...PPD, ...PPD2]), ...withIds('pdd', [...PDD, ...PDD2]), ...withIds('ce', [...CE, ...CE2]),
];

export const lessonById = (id) => LESSONS.find((l) => l.id === id) || null;

/** A division's units: [{ title, lessons: [lesson objects] }], four units of three lessons. */
export function unitsFor(division) {
  if (UNITS[division]) return UNITS[division].map((u) => ({ title: u.title, lessons: u.lessons.map(lessonById).filter(Boolean) }));
  const all = LESSONS.filter((l) => l.division === division);
  const out = [];
  for (let i = 0; i < all.length; i += 3) out.push({ title: all[i].section, lessons: all.slice(i, i + 3) });
  return out;
}
/** A division's lessons in course order (unit by unit). */
export const lessonsFor = (division) => unitsFor(division).flatMap((u) => u.lessons);
/** The ids of the practice and exam questions a lesson teaches. */
export const teachesFor = (lessonId) => TEACHES[lessonId] || [];
export { UNITS, TEACHES };
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
