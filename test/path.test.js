import { test } from 'node:test';
import assert from 'node:assert';
import { DIVISIONS } from '../src/lib/are.js';
import { lessonsFor, PASS_MARK } from '../src/lib/course/index.js';
import { QUESTIONS } from '../src/lib/questions.js';
import { EXAM_QUESTIONS } from '../src/lib/exam-questions.js';
import {
  quizPool, examPool, quizSet, examSet, examLength, loadRun, saveRun, clearRun, examSeconds, loadPath, savePath, recordQuiz, recordExam,
  stage, steps, loadDays, recordDay, streak, bestStreak, QUIZ_SIZE, QUIZ_PASS, EXAM_PASS,
} from '../src/lib/path.js';

const store = () => { const m = new Map(); return { getItem: k => m.get(k) ?? null, setItem: (k, v) => m.set(k, String(v)), removeItem: k => m.delete(k) }; };
const allDone = div => Object.fromEntries(lessonsFor(div).map(l => [l.id, PASS_MARK]));

test('ten exam-only questions per division, well formed, in the question bank', () => {
  for (const d of DIVISIONS) {
    const mine = EXAM_QUESTIONS.filter(q => q.division === d.id);
    assert.equal(mine.length, 10, d.id);
    for (const q of mine) {
      assert.ok(d.sections.some(s => s.name === q.section), q.id);
      assert.ok(q.choices.length >= 4 && q.explain.length > 30, q.id);
      assert.ok(q.answer.length >= 1 && q.answer.every(i => i >= 0 && i < q.choices.length), q.id);
      if (q.type === 'single') assert.equal(q.answer.length, 1, q.id);
    }
  }
  assert.equal(new Set(QUESTIONS.map(q => q.id)).size, QUESTIONS.length);
});

test('the quiz never uses exam-only or case questions', () => {
  for (const d of DIVISIONS) {
    assert.ok(quizPool(d.id).length >= QUIZ_SIZE, d.id);
    assert.ok(quizPool(d.id).every(q => !q.exam && !q.case && q.division === d.id));
    assert.equal(quizSet(d.id, 7).length, QUIZ_SIZE);
    assert.equal(examPool(d.id).filter(q => q.exam).length, 10);
  }
});

test('practice exams are full length, weighted by section, with one case study at the end', () => {
  for (const d of DIVISIONS) {
    const set = examSet(d.id, 11);
    assert.equal(set.length, d.items, `${d.id} is full length`);
    assert.equal(examLength(d.id), d.items);
    assert.equal(new Set(set.map(q => q.id)).size, set.length, d.id);
    const cases = [...new Set(set.filter(q => q.case).map(q => q.case))];
    assert.equal(cases.length, 1, d.id);
    const first = set.findIndex(q => q.case);
    assert.ok(set.slice(first).every(q => q.case === cases[0]), `${d.id}: case items together at the end`);
    for (const s of d.sections) {
      const n = set.filter(q => q.section === s.name).length;
      assert.ok(n >= Math.round(d.items * s.min / 100) && n <= Math.round(d.items * s.max / 100), `${d.id} ${s.name}: ${n} within NCARB's range`);
    }
    assert.notDeepEqual(examSet(d.id, 12).map(q => q.id), set.map(q => q.id));
  }
});

test('an exam in progress is saved and resumed for its division only', () => {
  const s = store();
  assert.equal(loadRun('pa', s), null);
  saveRun({ division: 'pa', questions: [{ id: 'x' }], answers: { x: [1] }, left: 90, i: 0, flags: [] }, s);
  assert.equal(loadRun('pa', s).left, 90);
  assert.equal(loadRun('ce', s), null);
  clearRun(s);
  assert.equal(loadRun('pa', s), null);
});

test('exam time keeps the real pace', () => {
  // PcM: 65 items in 160 minutes, so 30 questions get round(160*60/65*30) seconds.
  assert.equal(examSeconds('pcm', 30), Math.round(160 * 60 / 65 * 30));
  assert.equal(examSeconds('nope', 30), 0);
});

test('the path: lessons, then the quiz, then the exam', () => {
  const empty = { quiz: {}, exam: {} };
  assert.equal(stage('pa', {}, empty), 'lessons');
  assert.equal(stage('pa', allDone('pa'), empty), 'quiz');
  let p = recordQuiz(empty, 'pa', QUIZ_PASS - 5);
  assert.equal(stage('pa', allDone('pa'), p), 'quiz');
  p = recordQuiz(p, 'pa', QUIZ_PASS);
  assert.equal(stage('pa', allDone('pa'), p), 'exam');
  p = recordExam(p, 'pa', EXAM_PASS, false);
  assert.equal(stage('pa', allDone('pa'), p), 'done');
  assert.deepEqual(steps('pa', allDone('pa'), p), { done: lessonsFor('pa').length + 2, total: lessonsFor('pa').length + 2 });
});

test('best scores are kept, and a timed pass is remembered', () => {
  let p = recordQuiz({ quiz: {}, exam: {} }, 'ce', 90);
  p = recordQuiz(p, 'ce', 60);
  assert.equal(p.quiz.ce, 90);
  p = recordExam(p, 'ce', 75, true);
  p = recordExam(p, 'ce', 95, false);
  assert.deepEqual(p.exam.ce, { percent: 95, timed: true });
  assert.deepEqual(recordExam({ quiz: {}, exam: {} }, 'ce', 50, true).exam.ce, { percent: 50, timed: false });
});

test('saved results are checked on load and older progress is untouched', () => {
  const s = store();
  s.setItem('are-prep:lessons', '{"pa-l1":80}');
  savePath({ quiz: { pa: 80, bogus: 50, ce: 140 }, exam: { pa: { percent: 72, timed: 1 }, pjm: { percent: 'x' } } }, s);
  assert.deepEqual(loadPath(s), { quiz: { pa: 80 }, exam: { pa: { percent: 72, timed: true } } });
  assert.equal(s.getItem('are-prep:lessons'), '{"pa-l1":80}');
  s.setItem('are-prep:path', '{bad');
  assert.deepEqual(loadPath(s), { quiz: {}, exam: {} });
});

test('streaks count days in a row', () => {
  const s = store();
  recordDay(s, '2026-11-22'); recordDay(s, '2026-11-23'); recordDay(s, '2026-11-23'); recordDay(s, '2026-11-24');
  const days = loadDays(s);
  assert.deepEqual(days, ['2026-11-22', '2026-11-23', '2026-11-24']);
  assert.equal(streak(days, '2026-11-24'), 3);
  assert.equal(streak(days, '2026-11-25'), 3);      // not studied yet today: yesterday's streak still counts
  assert.equal(streak(days, '2026-11-26'), 0);
  assert.equal(bestStreak(['2026-01-01', '2026-01-02', '2026-03-01', '2026-03-02', '2026-03-03']), 3);
  assert.equal(streak(['2026-02-28', '2026-03-01'], '2026-03-01'), 2);
});
