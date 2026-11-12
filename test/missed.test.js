import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadMissed, saveMissed, updateMissed, missedSet } from '../src/lib/missed.js';
import { QUESTIONS } from '../src/lib/questions.js';

function memory(initial) {
  const m = new Map(initial === undefined ? [] : [['are-prep:missed', initial]]);
  return { getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, v) };
}

test('wrong answers join the missed list and right answers leave it', () => {
  const [a, b, c] = QUESTIONS;
  const answers = { [a.id]: a.answer, [b.id]: [99] };          // a right, b wrong, c unanswered
  const ids = updateMissed([a.id], [a, b, c], answers);
  assert.deepEqual(ids, [b.id, c.id]);
  assert.deepEqual(updateMissed(ids, [b], { [b.id]: b.answer }), [c.id]);
});

test('the missed list saves, loads, and drops ids that are not questions', () => {
  const store = memory();
  saveMissed([QUESTIONS[0].id], store);
  assert.deepEqual(loadMissed(store), [QUESTIONS[0].id]);
  assert.deepEqual(loadMissed(memory(JSON.stringify(['nope', QUESTIONS[1].id, QUESTIONS[1].id]))), [QUESTIONS[1].id]);
  assert.deepEqual(loadMissed(memory('{bad')), []);
  assert.deepEqual(loadMissed(memory('"text"')), []);
});

test('a missed set has only those questions, labeled with their division', () => {
  const ids = [QUESTIONS[0].id, QUESTIONS.at(-1).id];
  const set = missedSet(ids, 7);
  assert.deepEqual(set.map(q => q.id).sort(), [...ids].sort());
  assert.ok(set.every(q => / · /.test(q.section)));
});
