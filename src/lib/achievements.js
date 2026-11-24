// Achievements, like CodeForge's: points for everything you finish, three levels, a badge for each division
// and milestone badges. Everything is worked out from progress already saved (lessons, quizzes, exams,
// flashcards, practice scores, divisions passed and the days you studied), so there is nothing new to save.
import { DIVISIONS } from './are.js';
import { LESSONS, lessonsFor, finished } from './course/index.js';
import { CARDS } from './flashcards.js';
import { quizPassed, examPassed, lessonsDone, steps, streak, bestStreak, unitsPassed, QUIZ_PASS, EXAM_PASS } from './path.js';

export const POINTS = { lesson: 20, quiz: 25, exam: 100, card: 2 };

// Streak badges, from three days to six months (a month counted as 30 days).
export const STREAKS = [
  [3, '🔥', '3-day streak'], [7, '📅', 'Week streak'], [14, '🗓️', 'Two-week streak'],
  [30, '🌙', 'Month streak'], [60, '🌗', 'Two-month streak'], [90, '🌕', 'Three-month streak'],
  [120, '⭐', 'Four-month streak'], [150, '🌟', 'Five-month streak'], [180, '🏆', 'Six-month streak'],
];

/**
 * state = { lessons: { [lessonId]: best% }, path: { quiz, exam }, known: [cardIds], best: { [id]: { percent } },
 *           passed: [division ids], days: ['YYYY-MM-DD'], today: 'YYYY-MM-DD' }
 */
export function points({ lessons, path, known }) {
  const done = LESSONS.filter(l => finished(lessons, l.id)).length;
  const quizzes = DIVISIONS.reduce((n, d) => n + unitsPassed(d.id, path), 0);
  const exams = DIVISIONS.filter(d => examPassed(d.id, path)).length;
  return done * POINTS.lesson + quizzes * POINTS.quiz + exams * POINTS.exam + known.length * POINTS.card;
}

const count = (n, target) => ({ have: Math.min(n, target), target });

export function levels({ lessons, path }) {
  const done = LESSONS.filter(l => finished(lessons, l.id)).length;
  const exams = DIVISIONS.filter(d => examPassed(d.id, path)).length;
  return [
    { id: 'candidate', icon: '🌱', name: 'Candidate', desc: 'Finish your first 5 lessons.', ...count(done, 5) },
    { id: 'graduate', icon: '📐', name: 'Course graduate', desc: `Finish all ${LESSONS.length} lessons in the six divisions.`, ...count(done, LESSONS.length) },
    { id: 'ready', icon: '🏛️', name: 'Exam ready', desc: `Pass all six practice exams (${EXAM_PASS}% or better).`, ...count(exams, DIVISIONS.length) },
  ].map(l => ({ ...l, earned: l.have >= l.target }));
}

/** Your current level: the last one earned, or null before the first. */
export const currentLevel = state => levels(state).filter(l => l.earned).pop() || null;

/** One badge per division: every lesson, the quiz and the practice exam. */
export function divisionBadges({ lessons, path }) {
  return DIVISIONS.map(d => {
    const s = steps(d.id, lessons, path);
    return {
      id: `div-${d.id}`, division: d.id, name: d.code, title: d.name,
      desc: `Finish all ${lessonsFor(d.id).length} ${d.code} lessons, pass the four unit quizzes and pass the practice exam.`,
      have: s.done, target: s.total, earned: lessonsDone(d.id, lessons) && quizPassed(d.id, path) && examPassed(d.id, path),
    };
  });
}

export function milestoneBadges({ lessons, path, known, best, passed, days, today, cardQuiz = {} }) {
  const done = LESSONS.filter(l => finished(lessons, l.id)).length;
  const run = Math.max(streak(days, today), bestStreak(days));
  const perfectCheck = Object.values(lessons).some(v => v === 100);
  const perfectQuiz = Object.values(path.quiz).some(v => v === 100) || Object.values(path.units || {}).some(row => row.some(v => v === 100));
  const timedPass = Object.values(path.exam).some(e => e.timed);
  const yes = ok => ({ have: ok ? 1 : 0, target: 1 });
  return [
    { id: 'first-lesson', icon: '📖', name: 'First lesson', desc: 'Finish a lesson by passing its check.', ...count(done, 1) },
    { id: 'perfect-check', icon: '✔️', name: 'Spotless check', desc: 'Score 100% on a lesson check.', ...yes(perfectCheck) },
    { id: 'first-quiz', icon: '📝', name: 'Quiz passed', desc: `Pass a unit quiz (${QUIZ_PASS}% or better).`, ...count(DIVISIONS.reduce((n, d) => n + unitsPassed(d.id, path), 0) + DIVISIONS.filter(d => (path.quiz[d.id] ?? -1) >= QUIZ_PASS).length, 1) },
    { id: 'perfect-quiz', icon: '💯', name: 'Perfect quiz', desc: 'Score 100% on a unit quiz.', ...yes(perfectQuiz) },
    { id: 'first-exam', icon: '🎓', name: 'Practice exam passed', desc: `Pass a practice exam (${EXAM_PASS}% or better).`, ...count(DIVISIONS.filter(d => examPassed(d.id, path)).length, 1) },
    { id: 'beat-clock', icon: '⏱️', name: 'Beat the clock', desc: 'Pass a practice exam with the timer on.', ...yes(timedPass) },
    { id: 'mixed', icon: '🔀', name: 'All-rounder', desc: 'Score 80% or better on a 20-question mixed test.', ...yes((best.mixed?.percent ?? 0) >= 80) },
    { id: 'cards-100', icon: '🗂️', name: 'Term collector', desc: 'Mark 100 flashcards "Got it".', ...count(known.length, 100) },
    { id: 'card-quiz-70', icon: '🃏', name: 'Card sharp', desc: 'Score 70% or better on a flashcard quiz.', ...yes(Object.values(cardQuiz).some(v => v >= 70)) },
    { id: 'card-quiz-100', icon: '🎯', name: 'Total recall', desc: 'Get every term right on a flashcard quiz.', ...yes(Object.values(cardQuiz).some(v => v === 100)) },
    { id: 'cards-all', icon: '🧠', name: 'Every term', desc: `Mark all ${CARDS.length} flashcards "Got it".`, ...count(known.length, CARDS.length) },
    { id: 'halfway', icon: '⛰️', name: 'Halfway there', desc: 'Finish 3 of the 6 divisions: every lesson, the quiz and the practice exam.', ...count(DIVISIONS.filter(d => lessonsDone(d.id, lessons) && quizPassed(d.id, path) && examPassed(d.id, path)).length, 3) },
    ...STREAKS.map(([days, icon, name]) => ({ id: `streak-${days}`, icon, name, desc: `Study ${days} days in a row.`, ...count(run, days) })),
    { id: 'passed-1', icon: '✅', name: 'First division passed', desc: 'Mark a real ARE division passed on the Progress page.', ...count(passed.length, 1) },
    { id: 'passed-6', icon: '🎉', name: 'All six passed', desc: 'Mark all six ARE divisions passed.', ...count(passed.length, DIVISIONS.length) },
  ].map(b => ({ ...b, earned: b.have >= b.target }));
}

export function achievements(state) {
  const divisions = divisionBadges(state);
  const milestones = milestoneBadges(state);
  const all = [...levels(state), ...divisions, ...milestones];
  return { points: points(state), levels: levels(state), divisions, milestones, earned: all.filter(b => b.earned).length, total: all.length };
}
