import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadBest, recordBest, saveBest } from '../src/lib/scores.js';

function memory(initial) {
  const m = new Map(initial ? [['are-prep:best', initial]] : []);
  return { getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, v) };
}

test('a better score replaces the old best, a worse one does not', () => {
  let { best, isNew } = recordBest({}, 'pa', { percent: 60, total: 8 });
  assert.equal(isNew, true);
  ({ best, isNew } = recordBest(best, 'pa', { percent: 50, total: 8 }));
  assert.equal(isNew, false);
  assert.equal(best.pa.percent, 60);
  ({ best, isNew } = recordBest(best, 'pa', { percent: 88, total: 8 }));
  assert.equal(best.pa.percent, 88);
});

test('best scores save, load, and ignore bad data', () => {
  const store = memory();
  saveBest({ ce: { percent: 75, total: 8 } }, store);
  assert.deepEqual(loadBest(store), { ce: { percent: 75, total: 8 } });
  assert.deepEqual(loadBest(memory('{"pa":{"percent":900,"total":8},"x":5}')), {});
  assert.deepEqual(loadBest(memory('nope')), {});
});

test('a first score of zero is saved but not called a new best', () => {
  const { best, isNew } = recordBest({}, 'ce', { percent: 0, total: 8 });
  assert.equal(isNew, false);
  assert.equal(best.ce.percent, 0);
});
