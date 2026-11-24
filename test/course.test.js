import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LESSONS, lessonsFor, unitsFor, recordLesson, finished, lessonPercent, loadLessons, saveLessons, PASS_MARK } from '../src/lib/course/index.js';
import { QUESTIONS } from '../src/lib/questions.js';
import { DIVISIONS } from '../src/lib/are.js';

test('every lesson teaches one real NCARB section and is complete', () => {
  for (const l of LESSONS) {
    const d = DIVISIONS.find(x => x.id === l.division);
    assert.ok(d.sections.some(s => s.name === l.section), `${l.id}: ${l.section}`);
    assert.ok(l.title && l.intro.length > 80 && l.minutes > 0, l.id);
    assert.ok(l.parts.length >= 3 && l.parts.every(p => p.h && ((p.p && p.p.length) || (p.list && p.list.length))), l.id);
    assert.ok(l.takeaways.length >= 3, l.id);
  }
});

test('every division is four units of three lessons, covering every NCARB section', () => {
  for (const d of DIVISIONS) {
    const units = unitsFor(d.id);
    assert.equal(units.length, 4, d.id);
    assert.ok(units.every(u => u.title && u.lessons.length === 3), d.id);
    assert.equal(new Set(lessonsFor(d.id).map(l => l.id)).size, 12, d.id);
    for (const s of d.sections) assert.ok(lessonsFor(d.id).some(l => l.section === s.name), `${d.id} ${s.name}`);
  }
});

test('lesson check questions are well formed and join the practice pool', () => {
  for (const q of LESSONS.flatMap(l => l.quiz)) {
    assert.ok(q.choices.length >= 4 && q.explain.length > 30, q.id);
    assert.ok(q.answer.length >= 1 && q.answer.every(i => i >= 0 && i < q.choices.length), q.id);
    if (q.type === 'single') assert.equal(q.answer.length, 1, q.id);
    assert.ok(QUESTIONS.some(x => x.id === q.id), q.id);
  }
  assert.equal(new Set(QUESTIONS.map(q => q.id)).size, QUESTIONS.length);
});

test('finishing lessons: the best check counts and the pass mark finishes a lesson', () => {
  const id = LESSONS[0].id;
  let done = recordLesson({}, id, 50);
  assert.equal(finished(done, id), false);
  done = recordLesson(done, id, PASS_MARK);
  done = recordLesson(done, id, 25);
  assert.equal(done[id], PASS_MARK);
  assert.equal(finished(done, id), true);
  assert.equal(lessonPercent(LESSONS[0].division, done), Math.round(100 / lessonsFor(LESSONS[0].division).length));
  const m = new Map(); const store = { getItem: k => m.get(k) ?? null, setItem: (k, v) => m.set(k, v) };
  saveLessons({ [id]: 80, bogus: 90, [LESSONS[1].id]: 'x' }, store);
  assert.deepEqual(loadLessons(store), { [id]: 80 });
});

test('every question in the bank is taught by exactly one lesson in its division', async () => {
  const { lessonCheck } = await import('../src/lib/questions.js');
  const { TEACHES, LESSON_QUESTIONS, lessonById } = await import('../src/lib/course/index.js');
  const own = new Set(LESSON_QUESTIONS.map(q => q.id));
  const taught = Object.entries(TEACHES).flatMap(([lessonId, ids]) => ids.map(id => [id, lessonId]));
  const count = new Map();
  for (const [id, lessonId] of taught) {
    count.set(id, (count.get(id) || 0) + 1);
    const q = QUESTIONS.find(x => x.id === id);
    assert.ok(q, `${id} exists`);
    assert.equal(lessonById(lessonId)?.division, q.division, `${id} is taught in its own division`);
  }
  for (const q of QUESTIONS.filter(x => !own.has(x.id))) assert.equal(count.get(q.id), 1, `${q.id} taught once`);
  for (const l of LESSONS) {
    const check = lessonCheck(l);
    assert.ok(check.length >= 3 && check.length <= 8, `${l.id}: ${check.length}`);
    assert.deepEqual(check.slice(0, l.quiz.length), l.quiz);
    assert.ok(check.every(q => !q.exam && !q.case), l.id);
  }
});
