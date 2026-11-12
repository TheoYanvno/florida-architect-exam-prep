// Questions you got wrong, saved in the browser so you can practice just those. A question leaves the
// list when you answer it right. Saved ids are checked against the question bank on load.
import { QUESTIONS, isCorrect, shuffled, withDivisionLabel } from './questions.js';

const KEY = 'are-prep:missed';
const IDS = new Set(QUESTIONS.map(q => q.id));

export function loadMissed(storage = globalThis.localStorage) {
  try {
    const raw = JSON.parse(storage?.getItem(KEY) || '[]');
    return Array.isArray(raw) ? [...new Set(raw.filter(id => IDS.has(id)))] : [];
  } catch { return []; }
}

export function saveMissed(ids, storage = globalThis.localStorage) {
  try { storage?.setItem(KEY, JSON.stringify(ids)); return true; } catch { return false; }
}

// After a session: wrong answers join the list, right answers leave it. Unanswered questions (time ran
// out) count as missed, like on the exam.
export function updateMissed(ids, questions, answers) {
  const out = new Set(ids);
  for (const q of questions) {
    if (isCorrect(q, answers[q.id] || [])) out.delete(q.id);
    else out.add(q.id);
  }
  return QUESTIONS.map(q => q.id).filter(id => out.has(id));
}

export function missedSet(ids, seed = Date.now()) {
  const want = new Set(ids);
  return shuffled(QUESTIONS.filter(q => want.has(q.id)), seed).map(withDivisionLabel);
}
