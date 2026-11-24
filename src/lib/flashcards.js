// Key terms for each division, with short definitions written for this app (not copied from NCARB or any
// prep company). Cards you mark "Got it" are saved in the browser; "Again" puts a card back in the pile.

import PCM from './cards/pcm.js';
import PJM from './cards/pjm.js';
import PA from './cards/pa.js';
import PPD from './cards/ppd.js';
import PDD from './cards/pdd.js';
import CE from './cards/ce.js';

const deckOf = (division, rows) => rows.map(([term, definition], i) => ({ id: `${division}-t${i + 1}`, division, term, definition }));
export const CARDS = [...deckOf('pcm', PCM), ...deckOf('pjm', PJM), ...deckOf('pa', PA), ...deckOf('ppd', PPD), ...deckOf('pdd', PDD), ...deckOf('ce', CE)];

const KEY = 'are-prep:cards-known';
const IDS = new Set(CARDS.map((c) => c.id));

export function cardsFor(division) {
  return CARDS.filter((c) => c.division === division);
}

export function loadKnown(storage = globalThis.localStorage) {
  try {
    const raw = JSON.parse(storage?.getItem(KEY) || '[]');
    return Array.isArray(raw) ? [...new Set(raw.filter((id) => IDS.has(id)))] : [];
  } catch { return []; }
}

export function saveKnown(ids, storage = globalThis.localStorage) {
  try { storage?.setItem(KEY, JSON.stringify(ids)); return true; } catch { return false; }
}

/** Mark a card known ("Got it") or not ("Again"). Returns the new list. */
export function markCard(known, id, gotIt) {
  const out = new Set(known);
  if (gotIt) out.add(id); else out.delete(id);
  return CARDS.map((c) => c.id).filter((x) => out.has(x));
}

/** The cards still to learn in a division, then (when all are known) the whole deck again. */
export function deck(division, known) {
  const all = cardsFor(division);
  const left = all.filter((c) => !known.includes(c.id));
  return left.length ? left : all;
}
