// Your progress toward the license, for the home screen and the Progress tab: how ready you are for each
// division (lessons finished and your best practice score), which divisions you have passed, and the numbers on the study card.
// Pure functions; the passed list and your name are saved in the browser.
import { DIVISIONS } from './are.js';
import { lessonsFor, lessonPercent } from './course/index.js';

const PASSED_KEY = 'are-prep:passed';
const NAME_KEY = 'are-prep:name';
const IDS = new Set(DIVISIONS.map(d => d.id));
const DAY = 86400000;

export function loadPassed(storage = globalThis.localStorage) {
  try {
    const raw = JSON.parse(storage?.getItem(PASSED_KEY) || '[]');
    return Array.isArray(raw) ? DIVISIONS.map(d => d.id).filter(id => raw.includes(id)) : [];
  } catch { return []; }
}

export function savePassed(ids, storage = globalThis.localStorage) {
  try { storage?.setItem(PASSED_KEY, JSON.stringify(ids)); return true; } catch { return false; }
}

/** Mark a division passed or not. Returns the new list, in division order. */
export function togglePassed(ids, id) {
  if (!IDS.has(id)) return ids;
  const out = new Set(ids);
  if (out.has(id)) out.delete(id); else out.add(id);
  return DIVISIONS.map(d => d.id).filter(x => out.has(x));
}

export function loadName(storage = globalThis.localStorage) {
  try { return String(storage?.getItem(NAME_KEY) || '').slice(0, 40); } catch { return ''; }
}

export function saveName(name, storage = globalThis.localStorage) {
  try { storage?.setItem(NAME_KEY, String(name).trim().slice(0, 40)); return true; } catch { return false; }
}

/**
 * How ready you are for one division, 0 to 100: 100 once passed; otherwise 40% for the lessons you have
 * finished and 60% for your best practice score (just the practice score if the division has no lessons).
 */
export function readiness(id, best, passed, lessons = {}) {
  if (passed.includes(id)) return 100;
  const practice = best[id]?.percent ?? 0;
  if (!lessonsFor(id).length) return practice;
  return Math.round(0.4 * lessonPercent(id, lessons) + 0.6 * practice);
}

/**
 * The study card on the home screen.
 * best: { [division]: { percent } }, passed: [division ids], goal: 'YYYY-MM-DD', today: 'YYYY-MM-DD',
 * lessons: { [lessonId]: best check percent }.
 */
export function summary(best, passed, goal, today, lessons = {}) {
  const each = DIVISIONS.map(d => ({ id: d.id, code: d.code, name: d.name, percent: readiness(d.id, best, passed, lessons), lessons: lessonPercent(d.id, lessons), passed: passed.includes(d.id), practiced: d.id in best || lessonPercent(d.id, lessons) > 0 }));
  const overall = Math.round(each.reduce((n, d) => n + d.percent, 0) / each.length);
  const scored = each.filter(d => d.id in best);
  const average = scored.length ? Math.round(scored.reduce((n, d) => n + best[d.id].percent, 0) / scored.length) : null;
  const daysToGoal = Math.max(0, Math.round((Date.parse(goal + 'T00:00:00Z') - Date.parse(today + 'T00:00:00Z')) / DAY));
  return {
    each, overall, average, daysToGoal,
    passed: passed.length,
    inProgress: each.filter(d => d.practiced && !d.passed).length,
    left: each.length - passed.length,
    total: each.length,
  };
}

/** "Good morning" / "Good afternoon" / "Good evening" for an hour of the day (0 to 23). */
export function greeting(hour) {
  return hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
}
