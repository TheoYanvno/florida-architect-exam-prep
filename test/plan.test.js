import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildPlan, SUGGESTED_ORDER } from '../src/lib/plan.js';

test('a 30-week plan uses every week, in the suggested order, with no gaps', () => {
  const plan = buildPlan('2027-01-04', '2027-08-02');
  assert.deepEqual(plan.map(b => b.id), SUGGESTED_ORDER);
  assert.equal(plan.reduce((s, b) => s + b.weeks, 0), 30);
  for (let i = 1; i < plan.length; i++) {
    const prevEnd = Date.parse(plan[i - 1].examBy) + 86400000;
    assert.equal(Date.parse(plan[i].studyFrom), prevEnd);
  }
});

test('bigger divisions get at least as many weeks as smaller ones', () => {
  const plan = buildPlan('2027-01-04', '2027-08-02');
  const w = Object.fromEntries(plan.map(b => [b.id, b.weeks]));
  assert.ok(w.ppd >= w.pcm && w.pdd >= w.pcm);
});

test('each block ends with a review week and an exam date', () => {
  const [first] = buildPlan('2027-01-04', '2027-08-02');
  assert.equal(Date.parse(first.examBy) - Date.parse(first.reviewFrom), 6 * 86400000);
});

test('too little time or bad dates are refused with a clear message', () => {
  assert.throws(() => buildPlan('2027-01-04', '2027-02-01'), /at least 12/);
  assert.throws(() => buildPlan('', '2027-02-01'), /Pick a start date/);
});

test('a custom order with fewer divisions works', () => {
  const plan = buildPlan('2027-01-04', '2027-03-01', ['pcm', 'pjm']);
  assert.deepEqual(plan.map(b => b.code), ['PcM', 'PjM']);
  assert.equal(plan.reduce((s, b) => s + b.weeks, 0), 8);
});
