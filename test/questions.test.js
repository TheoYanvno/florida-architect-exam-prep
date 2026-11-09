import { test } from 'node:test';
import assert from 'node:assert/strict';
import { QUESTIONS, questionsFor, isCorrect, score, shuffled } from '../src/lib/questions.js';
import { DIVISIONS } from '../src/lib/are.js';

test('every question is well formed and tied to a real NCARB section', () => {
  const ids = new Set();
  for (const q of QUESTIONS) {
    assert.ok(!ids.has(q.id), `duplicate ${q.id}`);
    ids.add(q.id);
    const d = DIVISIONS.find(x => x.id === q.division);
    assert.ok(d, q.id);
    assert.ok(d.sections.some(s => s.name === q.section), `${q.id}: ${q.section}`);
    assert.ok(q.choices.length >= 4, q.id);
    assert.ok(q.answer.length >= 1 && q.answer.every(i => i >= 0 && i < q.choices.length), q.id);
    if (q.type === 'single') assert.equal(q.answer.length, 1, q.id);
    assert.ok(q.explain.length > 30, q.id);
  }
});

test('multi-select needs exactly the right choices', () => {
  const q = QUESTIONS.find(x => x.id === 'pcm-004');
  assert.equal(isCorrect(q, [3, 2]), true);
  assert.equal(isCorrect(q, [2]), false);
  assert.equal(isCorrect(q, [1, 2, 3]), false);
});

test('scoring totals and breaks results down by section', () => {
  const qs = questionsFor('pcm');
  const answers = Object.fromEntries(qs.map(q => [q.id, q.answer]));
  answers['pcm-001'] = [0];
  const r = score(qs, answers);
  assert.equal(r.correct, qs.length - 1);
  assert.equal(r.bySection['Business Operations'].total, 3);
  assert.equal(r.bySection['Business Operations'].correct, 2);
});

test('shuffling with a seed is repeatable and keeps every item', () => {
  const a = shuffled(QUESTIONS, 42).map(q => q.id);
  assert.deepEqual(shuffled(QUESTIONS, 42).map(q => q.id), a);
  assert.deepEqual([...a].sort(), QUESTIONS.map(q => q.id).sort());
});
