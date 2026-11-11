import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadDates, saveDates, defaultDates } from '../src/lib/dates.js';

function memory(initial) {
  const m = new Map(initial ? [['are-prep:dates', initial]] : []);
  return { getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, v) };
}
const now = Date.UTC(2026, 10, 11);

test('dates save and load back', () => {
  const store = memory();
  saveDates({ start: '2026-12-01', goal: '2027-09-30' }, store);
  assert.deepEqual(loadDates(store, now), { start: '2026-12-01', goal: '2027-09-30' });
});

test('missing or bad dates fall back to today and 30 weeks out', () => {
  assert.deepEqual(loadDates(memory(), now), defaultDates(now));
  assert.deepEqual(loadDates(memory('{"start":"soon","goal":"2027-01-01"}'), now), defaultDates(now));
  assert.deepEqual(loadDates(memory('oops'), now), defaultDates(now));
  assert.equal(defaultDates(now).start, '2026-11-11');
});
