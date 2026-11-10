// Best practice scores for each division, saved in the browser. Saved data is checked on load.
const KEY = 'are-prep:best';

export function loadBest(storage = globalThis.localStorage) {
  try {
    const raw = JSON.parse(storage?.getItem(KEY) || '{}');
    const out = {};
    for (const [id, v] of Object.entries(raw && typeof raw === 'object' ? raw : {})) {
      if (v && Number.isInteger(v.percent) && v.percent >= 0 && v.percent <= 100 && Number.isInteger(v.total) && v.total > 0) out[id] = { percent: v.percent, total: v.total };
    }
    return out;
  } catch { return {}; }
}

// Returns the new best list and whether this result beat the old best.
export function recordBest(best, division, result) {
  const old = best[division];
  if (!result.total || (old && old.percent >= result.percent)) return { best, isNew: false };
  // A first score of 0% is saved but not celebrated.
  return { best: { ...best, [division]: { percent: result.percent, total: result.total } }, isNew: result.percent > 0 };
}

export function saveBest(best, storage = globalThis.localStorage) {
  try { storage?.setItem(KEY, JSON.stringify(best)); return true; } catch { return false; }
}
