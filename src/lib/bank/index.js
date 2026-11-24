// The full question bank written to NCARB's published objectives for each division, with the ARE's item types
// (multiple choice, check all that apply, number fill-in, hot spot, drag-and-place) and a case study per
// division. Each division file exports { figures, cases, questions }.
//   figures: { [id]: { w, h, alt } }  (the drawings themselves are in src/components/figures.jsx)
//   cases:   [{ id, title, intro, parts: [{ h, p?: [..], list?: [..], table?: { head, rows } }], figure? }]
//   questions: items as described in questions.js, each with division and section
import PCM from './pcm.js';
import PJM from './pjm.js';
import PA from './pa.js';
import PPD from './ppd.js';
import PDD from './pdd.js';
import CE from './ce.js';

const ALL = { pcm: PCM, pjm: PJM, pa: PA, ppd: PPD, pdd: PDD, ce: CE };

export const BANK_QUESTIONS = Object.entries(ALL).flatMap(([division, b]) => b.questions.map((q) => ({ ...q, division })));
export const CASES = Object.entries(ALL).flatMap(([division, b]) => b.cases.map((c) => ({ ...c, division })));
export const FIGURES = Object.fromEntries(Object.values(ALL).flatMap((b) => Object.entries(b.figures).map(([id, f]) => [id, { ...f, id }])));
export const caseById = (id) => CASES.find((c) => c.id === id) || null;
export const figureById = (id) => FIGURES[id] || null;
