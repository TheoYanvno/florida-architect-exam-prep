import { test } from 'node:test';
import assert from 'node:assert';
import { readiness, summary, togglePassed, greeting, loadPassed, savePassed, loadName, saveName } from '../src/lib/progress.js';

const store = () => { const m = new Map(); return { getItem: k => m.get(k) ?? null, setItem: (k, v) => m.set(k, String(v)) }; };

test('readiness is 100 once passed, otherwise the best practice score', () => {
  assert.strictEqual(readiness('pa', { pa: { percent: 62, total: 8 } }, []), 62);
  assert.strictEqual(readiness('pa', { pa: { percent: 62, total: 8 } }, ['pa']), 100);
  assert.strictEqual(readiness('ce', {}, []), 0);
});

test('the study card numbers', () => {
  const s = summary({ pa: { percent: 75, total: 8 }, ppd: { percent: 50, total: 8 } }, ['pcm'], '2027-04-01', '2026-11-24');
  assert.strictEqual(s.total, 6);
  assert.strictEqual(s.left, 5);
  assert.strictEqual(s.inProgress, 2);
  assert.strictEqual(s.average, 63);
  assert.strictEqual(s.overall, Math.round((75 + 50 + 100) / 6));
  assert.strictEqual(s.daysToGoal, 128);
  assert.strictEqual(summary({}, [], '2020-01-01', '2026-11-24').daysToGoal, 0);
  assert.strictEqual(summary({}, [], '2027-01-01', '2026-11-24').average, null);
});

test('passing a division toggles, keeps division order and ignores unknown ids', () => {
  let p = togglePassed([], 'ce');
  p = togglePassed(p, 'pcm');
  assert.deepStrictEqual(p, ['pcm', 'ce']);
  assert.deepStrictEqual(togglePassed(p, 'ce'), ['pcm']);
  assert.deepStrictEqual(togglePassed(p, 'nope'), p);
});

test('saved passes and names are checked on load', () => {
  const s = store();
  savePassed(['pa', 'bogus'], s);
  assert.deepStrictEqual(loadPassed(s), ['pa']);
  s.setItem('are-prep:passed', '{bad json');
  assert.deepStrictEqual(loadPassed(s), []);
  saveName('  Theo  ', s);
  assert.strictEqual(loadName(s), 'Theo');
});

test('greeting by the hour', () => {
  assert.strictEqual(greeting(8), 'Good morning');
  assert.strictEqual(greeting(13), 'Good afternoon');
  assert.strictEqual(greeting(21), 'Good evening');
});
