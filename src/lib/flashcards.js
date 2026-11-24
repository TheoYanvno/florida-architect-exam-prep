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

// --- Flashcard quiz: see a definition, pick the matching term from four in the same division ---
export const CARD_QUIZ_SIZE = 10;
const QUIZ_KEY = 'are-prep:card-quiz';
const DIVS = new Set(CARDS.map((c) => c.division));

// A small seeded shuffle, so a quiz can be repeated in tests.
function mix(list, seed) {
  const out = [...list];
  let s = seed >>> 0 || 1;
  const rand = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32);
  for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; }
  return out;
}

/** Ten questions for a division: [{ id, definition, options: [4 terms], answer: index of the right term }]. */
export function cardQuiz(division, seed = Date.now()) {
  const all = cardsFor(division);
  return mix(all, seed).slice(0, CARD_QUIZ_SIZE).map((card, k) => {
    const others = mix(all.filter((c) => c.id !== card.id && c.term !== card.term), seed + k * 7919).slice(0, 3);
    const options = mix([card, ...others], seed + k * 104729);
    return { id: card.id, definition: card.definition, options: options.map((c) => c.term), answer: options.indexOf(card) };
  });
}

export function loadCardQuiz(storage = globalThis.localStorage) {
  try {
    const raw = JSON.parse(storage?.getItem(QUIZ_KEY) || '{}') || {};
    return Object.fromEntries(Object.entries(raw).filter(([id, v]) => DIVS.has(id) && Number.isInteger(v) && v >= 0 && v <= 100));
  } catch { return {}; }
}

export function saveCardQuiz(best, storage = globalThis.localStorage) {
  try { storage?.setItem(QUIZ_KEY, JSON.stringify(best)); return true; } catch { return false; }
}

/** Keep the best flashcard quiz score for each division. */
export const recordCardQuiz = (best, division, percent) => ({ ...best, [division]: Math.max(best[division] ?? 0, percent) });
