import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { BANK_QUESTIONS, CASES, FIGURES, caseById } from '../src/lib/bank/index.js';
import { QUESTIONS, isCorrect, isAnswered, inTarget, parseNumber, answerText, shuffleChoices } from '../src/lib/questions.js';
import { DIVISIONS } from '../src/lib/are.js';

const ART = new Set([...readFileSync(new URL('../src/components/figures.jsx', import.meta.url), 'utf8').matchAll(/^ {2}'([a-z0-9-]+)': \(\) =>/gm)].map(m => m[1]));
const centre = t => t.points ? [t.points.reduce((n, p) => n + p[0], 0) / t.points.length, t.points.reduce((n, p) => n + p[1], 0) / t.points.length] : [t.x + t.w / 2, t.y + t.h / 2];
const right = q => q.type === 'number' ? [String(q.answer)] : q.type === 'hotspot' ? centre(q.target) : q.answer;

test('every bank item is well formed for its type and its right answer scores as right', () => {
  for (const q of BANK_QUESTIONS) {
    const d = DIVISIONS.find(x => x.id === q.division);
    assert.ok(d.sections.some(s => s.name === q.section), `${q.id}: ${q.section}`);
    assert.ok(q.prompt.length > 15 && q.explain.length > 30, q.id);
    if (q.type === 'number') assert.ok(Number.isFinite(q.answer), q.id);
    if (q.type === 'drag') {
      assert.equal(q.answer.length, q.items.length, q.id);
      assert.ok(q.answer.every(s => Number.isInteger(s) && s >= 0 && s < q.slots.length), q.id);
      if (q.order) assert.equal(new Set(q.answer).size, q.answer.length, `${q.id}: one item per slot`);
    }
    if (q.type === 'hotspot') {
      const f = FIGURES[q.figure];
      assert.ok(f, `${q.id}: figure ${q.figure}`);
      const pts = q.target.points || [[q.target.x, q.target.y], [q.target.x + q.target.w, q.target.y + q.target.h]];
      assert.ok(pts.every(([x, y]) => x >= 0 && y >= 0 && x <= f.w && y <= f.h), `${q.id}: target inside the drawing`);
      assert.ok(q.targetLabel, q.id);
      assert.ok(inTarget(q.target, ...centre(q.target)), `${q.id}: target centre`);
    }
    if (q.case) assert.ok(caseById(q.case) && caseById(q.case).division === q.division, `${q.id}: case`);
    assert.ok(isAnswered(q, right(q)), q.id);
    assert.ok(isCorrect(q, right(q)), q.id);
    assert.ok(answerText(q).length > 0, q.id);
  }
});

test('every drawing is drawn, described and used', () => {
  for (const [id, f] of Object.entries(FIGURES)) {
    assert.ok(ART.has(id), `${id} has art`);
    assert.ok(f.w > 0 && f.h > 0 && f.alt.length > 30, id);
    assert.ok(BANK_QUESTIONS.some(q => q.figure === id) || CASES.some(c => c.figure === id), `${id} is used`);
  }
});

test('every case study has at least five items, all in its division', () => {
  for (const c of CASES) {
    const items = BANK_QUESTIONS.filter(q => q.case === c.id);
    assert.ok(items.length >= 5, `${c.id}: ${items.length}`);
    assert.ok(c.title && c.intro && c.parts.length >= 2, c.id);
  }
  assert.equal(new Set(QUESTIONS.map(q => q.id)).size, QUESTIONS.length);
});

test('number answers accept commas and units, and use the tolerance', () => {
  const q = { type: 'number', answer: 27333, tolerance: 2 };
  assert.equal(parseNumber('27,333'), 27333);
  assert.equal(parseNumber('$1,200'), 1200);
  assert.ok(Number.isNaN(parseNumber('about 5')));
  assert.ok(isCorrect(q, ['27,334']) && isCorrect(q, ['27331']) && !isCorrect(q, ['27,336']));
  assert.ok(!isAnswered(q, ['']) && isAnswered(q, ['0']));
});

test('hot spots, drag-and-place and polygons are scored exactly', () => {
  const hs = { type: 'hotspot', target: { x: 10, y: 10, w: 20, h: 20 } };
  assert.ok(isCorrect(hs, [15, 29]) && !isCorrect(hs, [31, 15]) && !isAnswered(hs, []));
  assert.ok(inTarget({ points: [[0, 0], [10, 0], [10, 10], [0, 10]] }, 5, 5));
  assert.ok(!inTarget({ points: [[0, 0], [10, 0], [0, 10]] }, 8, 8));
  const dq = { type: 'drag', items: ['a', 'b', 'c'], slots: ['x', 'y', 'z'], answer: [2, 0, 1], order: true };
  assert.ok(isCorrect(dq, [2, 0, 1]) && !isCorrect(dq, [2, 1, 0]) && !isAnswered(dq, [2, null, 1]));
  const dealt = shuffleChoices(dq, 3);
  assert.deepEqual(dealt.items.map((it, i) => [it, dealt.answer[i]]).sort(), [['a', 2], ['b', 0], ['c', 1]]);
});
