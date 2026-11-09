// A study plan: spreads the six divisions over the weeks between a start date and a goal date. Bigger
// divisions (more items, more sections) get more weeks, and each division ends with a review week before
// its exam. The order pairs divisions that share material; it's this app's suggestion, not an NCARB rule.

import { DIVISIONS } from './are.js';

export const SUGGESTED_ORDER = ['pa', 'ppd', 'pdd', 'ce', 'pjm', 'pcm'];
const DAY = 86400000;

function weight(d) {
  return d.items + d.sections.length * 5;
}

// start, goal: 'YYYY-MM-DD'. order: list of division ids. Returns one block per division with study and
// exam dates, or throws if there are fewer than 2 weeks per division.
export function buildPlan(start, goal, order = SUGGESTED_ORDER) {
  const s = Date.parse(start + 'T00:00:00Z');
  const g = Date.parse(goal + 'T00:00:00Z');
  if (Number.isNaN(s) || Number.isNaN(g)) throw new Error('Pick a start date and a goal date.');
  const weeks = Math.floor((g - s) / (7 * DAY));
  const divisions = order.map(id => DIVISIONS.find(d => d.id === id)).filter(Boolean);
  if (divisions.length === 0) throw new Error('Choose at least one division.');
  if (weeks < divisions.length * 2) throw new Error(`That's ${weeks} weeks; plan at least ${divisions.length * 2} for ${divisions.length} divisions.`);

  const total = divisions.reduce((sum, d) => sum + weight(d), 0);
  let alloc = divisions.map(d => Math.max(2, Math.floor((weeks * weight(d)) / total)));
  // Hand out leftover weeks to the biggest divisions first, or take extra weeks back from them.
  const byWeight = divisions.map((d, i) => i).sort((a, b) => weight(divisions[b]) - weight(divisions[a]));
  let diff = weeks - alloc.reduce((a, b) => a + b, 0);
  for (let k = 0; diff !== 0 && k < 100; k++) {
    const i = byWeight[k % byWeight.length];
    if (diff > 0) { alloc[i]++; diff--; }
    else if (alloc[i] > 2) { alloc[i]--; diff++; }
  }

  let cursor = s;
  return divisions.map((d, i) => {
    const begin = cursor;
    const end = begin + alloc[i] * 7 * DAY;
    cursor = end;
    return {
      id: d.id, code: d.code, name: d.name, weeks: alloc[i],
      studyFrom: iso(begin),
      reviewFrom: iso(end - 7 * DAY),
      examBy: iso(end - DAY),
    };
  });
}

function iso(ms) {
  return new Date(ms).toISOString().slice(0, 10);
}
