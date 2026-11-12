import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CARDS, cardsFor, loadKnown, saveKnown, markCard, deck } from '../src/lib/flashcards.js';
import { DIVISIONS } from '../src/lib/are.js';

function memory(initial) {
  const m = new Map(initial === undefined ? [] : [['are-prep:cards-known', initial]]);
  return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, v) };
}

test('every division has at least 6 cards, each with a term and a real definition', () => {
  const ids = new Set();
  for (const c of CARDS) {
    assert.ok(!ids.has(c.id), c.id); ids.add(c.id);
    assert.ok(DIVISIONS.some((d) => d.id === c.division), c.id);
    assert.ok(c.term.length > 2 && c.definition.length > 40, c.id);
  }
  for (const d of DIVISIONS) assert.ok(cardsFor(d.id).length >= 6, d.id);
});

test('known cards save, load, and drop ids that are not cards', () => {
  const store = memory();
  saveKnown(['pa-t1'], store);
  assert.deepEqual(loadKnown(store), ['pa-t1']);
  assert.deepEqual(loadKnown(memory(JSON.stringify(['nope', 'ce-t2', 'ce-t2']))), ['ce-t2']);
  assert.deepEqual(loadKnown(memory('{bad')), []);
});

test('Got it takes a card out of the pile, Again keeps it, and a finished pile starts over', () => {
  let known = markCard([], 'pa-t1', true);
  known = markCard(known, 'pa-t2', true);
  assert.equal(deck('pa', known).length, cardsFor('pa').length - 2);
  known = markCard(known, 'pa-t1', false);
  assert.ok(deck('pa', known).some((c) => c.id === 'pa-t1'));
  const all = cardsFor('pa').map((c) => c.id);
  assert.equal(deck('pa', all).length, all.length);
});
