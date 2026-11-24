// Short constructors for bank items, so each division file reads like a list of questions.
export const S = (id, section, prompt, choices, answer, explain, extra = {}) =>
  ({ id, section, type: 'single', prompt, choices, answer: [answer], explain, ...extra });
export const M = (id, section, prompt, choices, answer, explain, extra = {}) =>
  ({ id, section, type: 'multi', prompt, choices, answer, explain, ...extra });
/** Number fill-in: { unit, tolerance } are optional. */
export const N = (id, section, prompt, answer, explain, extra = {}) =>
  ({ id, section, type: 'number', prompt, answer, explain, ...extra });
/** Hot spot: tap the target on the drawing. */
export const H = (id, section, prompt, figure, target, targetLabel, explain, extra = {}) =>
  ({ id, section, type: 'hotspot', prompt, figure, target, targetLabel, explain, ...extra });
/** Drag-and-place: answer gives the slot for each item; order: true means one item per slot. */
export const D = (id, section, prompt, items, slots, answer, explain, extra = {}) =>
  ({ id, section, type: 'drag', prompt, items, slots, answer, explain, ...extra });
