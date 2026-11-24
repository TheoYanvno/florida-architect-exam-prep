import { test } from 'node:test';
import assert from 'node:assert';
import { LESSONS, lessonsFor, PASS_MARK } from '../src/lib/course/index.js';
import { CARDS } from '../src/lib/flashcards.js';
import { achievements, points, levels, currentLevel, POINTS } from '../src/lib/achievements.js';

const blank = { lessons: {}, path: { quiz: {}, exam: {} }, known: [], best: {}, passed: [], days: [], today: '2026-11-24' };

test('nothing is earned on a fresh start', () => {
  const a = achievements(blank);
  assert.equal(a.points, 0);
  assert.equal(a.earned, 0);
  assert.equal(a.total, 3 + 6 + a.milestones.length);
  assert.equal(currentLevel(blank), null);
});

test('points add up', () => {
  const lessons = Object.fromEntries(lessonsFor('pa').map(l => [l.id, PASS_MARK]));
  const state = { ...blank, lessons, path: { quiz: { pa: 80 }, exam: { pa: { percent: 70, timed: false } } }, known: CARDS.slice(0, 5).map(c => c.id) };
  assert.equal(points(state), lessonsFor('pa').length * POINTS.lesson + POINTS.quiz + POINTS.exam + 5 * POINTS.card);
});

test('finishing a division earns its badge and the first milestones', () => {
  const lessons = Object.fromEntries(lessonsFor('pa').map(l => [l.id, 100]));
  const state = { ...blank, lessons, path: { quiz: { pa: 100 }, exam: { pa: { percent: 80, timed: true } } }, days: ['2026-11-22', '2026-11-23', '2026-11-24'] };
  const a = achievements(state);
  assert.equal(a.divisions.find(b => b.division === 'pa').earned, true);
  assert.equal(a.divisions.find(b => b.division === 'ce').earned, false);
  const got = new Set(a.milestones.filter(b => b.earned).map(b => b.id));
  for (const id of ['first-lesson', 'perfect-check', 'first-quiz', 'perfect-quiz', 'first-exam', 'beat-clock', 'streak-3']) assert.ok(got.has(id), id);
  assert.ok(!got.has('streak-7') && !got.has('cards-100'));
});

test('levels go Candidate, Course graduate, Exam ready', () => {
  const all = Object.fromEntries(LESSONS.map(l => [l.id, PASS_MARK]));
  assert.equal(currentLevel({ ...blank, lessons: all }).id, 'graduate');
  const five = Object.fromEntries(LESSONS.slice(0, 5).map(l => [l.id, PASS_MARK]));
  assert.equal(currentLevel({ ...blank, lessons: five }).id, 'candidate');
  const exams = { quiz: {}, exam: Object.fromEntries(['pcm', 'pjm', 'pa', 'ppd', 'pdd', 'ce'].map(id => [id, { percent: 70, timed: false }])) };
  assert.deepEqual(levels({ ...blank, lessons: all, path: exams }).map(l => l.earned), [true, true, true]);
});

test('streak badges run from 3 days to six months, and Halfway there needs 3 divisions', () => {
  const days = Array.from({ length: 60 }, (_, i) => new Date(Date.UTC(2026, 8, 26 + i)).toISOString().slice(0, 10));
  const a = achievements({ ...blank, days, today: days.at(-1) });
  const streaks = a.milestones.filter(b => b.id.startsWith('streak-'));
  assert.deepEqual(streaks.map(b => b.target), [3, 7, 14, 30, 60, 90, 120, 150, 180]);
  assert.deepEqual(streaks.map(b => b.earned), [true, true, true, true, true, false, false, false, false]);

  const ids = ['pa', 'ce', 'pcm'];
  const lessons = Object.fromEntries(LESSONS.filter(l => ids.includes(l.division)).map(l => [l.id, PASS_MARK]));
  const path = { quiz: Object.fromEntries(ids.map(id => [id, 80])), exam: Object.fromEntries(ids.map(id => [id, { percent: 75, timed: false }])) };
  const half = s => achievements(s).milestones.find(b => b.id === 'halfway');
  assert.equal(half({ ...blank, lessons, path }).earned, true);
  assert.deepEqual([half({ ...blank, lessons }).have, half(blank).have], [0, 0]);
});
