import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DIVISIONS, AXP_TOTAL_HOURS, SOURCES, findDivision, formatMinutes, expectedItems } from '../src/lib/are.js';
import { FLORIDA_STEPS, checklistProgress } from '../src/lib/florida.js';

test('there are six ARE divisions, each with a source page', () => {
  assert.equal(DIVISIONS.length, 6);
  for (const d of DIVISIONS) assert.ok(SOURCES[d.source], d.id);
});

test('AXP hours by area add up to NCARB\'s 3,740 total', () => {
  assert.equal(DIVISIONS.reduce((sum, d) => sum + d.axpHours, 0), AXP_TOTAL_HOURS);
});

test('each division\'s section ranges can reach 100%', () => {
  for (const d of DIVISIONS) {
    const min = d.sections.reduce((s, x) => s + x.min, 0);
    const max = d.sections.reduce((s, x) => s + x.max, 0);
    assert.ok(min <= 100 && max >= 100, `${d.code}: ${min}-${max}`);
  }
});

test('appointment time is the test time plus breaks', () => {
  for (const d of DIVISIONS) assert.ok(d.appointmentMinutes > d.testMinutes, d.code);
});

test('helpers', () => {
  assert.equal(findDivision('ppd').items, 100);
  assert.equal(findDivision('xyz'), null);
  assert.equal(formatMinutes(245), '4 hr 5 min');
  assert.equal(formatMinutes(180), '3 hr');
  const pa = findDivision('pa');
  assert.equal(expectedItems(pa, pa.sections[3]), 30); // 40% of 75
});

test('the Florida checklist tracks progress and the next step', () => {
  const none = checklistProgress([]);
  assert.equal(none.complete, 0);
  assert.equal(none.next.id, 'degree');
  const some = checklistProgress(['degree', 'record']);
  assert.equal(some.complete, 2);
  assert.equal(some.next.id, 'axp');
  assert.equal(checklistProgress(FLORIDA_STEPS.map(s => s.id)).next, null);
});
