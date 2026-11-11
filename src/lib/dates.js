// The study plan's start and goal dates, saved in the browser. Bad or missing dates fall back to
// today and about 30 weeks from today.
const KEY = 'are-prep:dates';
const ISO = /^\d{4}-\d{2}-\d{2}$/;

export function defaultDates(now = Date.now()) {
  return { start: new Date(now).toISOString().slice(0, 10), goal: new Date(now + 30 * 7 * 86400000).toISOString().slice(0, 10) };
}

export function loadDates(storage = globalThis.localStorage, now = Date.now()) {
  const d = defaultDates(now);
  try {
    const raw = JSON.parse(storage?.getItem(KEY) || 'null');
    if (!raw || !ISO.test(raw.start) || !ISO.test(raw.goal) || isNaN(Date.parse(raw.start)) || isNaN(Date.parse(raw.goal))) return d;
    return { start: raw.start, goal: raw.goal };
  } catch { return d; }
}

export function saveDates(dates, storage = globalThis.localStorage) {
  try { storage?.setItem(KEY, JSON.stringify(dates)); return true; } catch { return false; }
}
