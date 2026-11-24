// Achievements, like CodeForge's: points for everything you finish, three levels, a badge for each division
// and milestone badges. Everything is worked out from progress already saved (lessons, quizzes, exams,
// flashcards, practice scores, divisions passed and the days you studied), so there is nothing new to save.
import { DIVISIONS } from './are.js';
import { LESSONS, lessonsFor, finished } from './course/index.js';
import { CARDS } from './flashcards.js';
import { quizPassed, examPassed, lessonsDone, steps, streak, bestStreak, QUIZ_PASS, EXAM_PASS } from './path.js';

export const POINTS = { lesson: 20, quiz: 50, exam: 100, card: 2 };

/**
 * state = { lessons: { [lessonId]: best% }, path: { quiz, exam }, known: [cardIds], best: { [id]: { percent } },
 *           passed: [division ids], days: ['YYYY-MM-DD'], today: 'YYYY-MM-DD' }
 */
export function points({ lessons, path, known }) {
  const done = LESSONS.filter(l => finished(lessons, l.id)).length;
  const quizzes = DIVISIONS.filter(d => quizPassed(d.id, path)).length;
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
      desc: `Finish all ${lessonsFor(d.id).length} ${d.code} lessons, pass the quiz and pass the practice exam.`,
      have: s.done, target: s.total, earned: lessonsDone(d.id, lessons) && quizPassed(d.id, path) && examPassed(d.id, path),
    };
  });
}

export function milestoneBadges({ lessons, path, known, best, passed, days, today }) {
  const done = LESSONS.filter(l => finished(lessons, l.id)).length;
  const run = Math.max(streak(days, today), bestStreak(days));
  const perfectCheck = Object.values(lessons).some(v => v === 100);
  const perfectQuiz = Object.values(path.quiz).some(v => v === 100);
  const timedPass = Object.values(path.exam).some(e => e.timed);
  const yes = ok => ({ have: ok ? 1 : 0, target: 1 });
  return [
    { id: 'first-lesson', icon: '📖', name: 'First lesson', desc: 'Finish a lesson by passing its check.', ...count(done, 1) },
    { id: 'perfect-check', icon: '✔️', name: 'Spotless check', desc: 'Score 100% on a lesson check.', ...yes(perfectCheck) },
    { id: 'first-quiz', icon: '📝', name: 'Quiz passed', desc: `Pass a division quiz (${QUIZ_PASS}% or better).`, ...count(DIVISIONS.filter(d => quizPassed(d.id, path)).length, 1) },
    { id: 'perfect-quiz', icon: '💯', name: 'Perfect quiz', desc: 'Score 100% on a division quiz.', ...yes(perfectQuiz) },
    { id: 'first-exam', icon: '🎓', name: 'Practice exam passed', desc: `Pass a practice exam (${EXAM_PASS}% or better).`, ...count(DIVISIONS.filter(d => examPassed(d.id, path)).length, 1) },
    { id: 'beat-clock', icon: '⏱️', name: 'Beat the clock', desc: 'Pass a practice exam with the timer on.', ...yes(timedPass) },
    { id: 'mixed', icon: '🔀', name: 'All-rounder', desc: 'Score 80% or better on a 20-question mixed test.', ...yes((best.mixed?.percent ?? 0) >= 80) },
    { id: 'cards-100', icon: '🗂️', name: 'Term collector', desc: 'Mark 100 flashcards "Got it".', ...count(known.length, 100) },
    { id: 'cards-all', icon: '🧠', name: 'Every term', desc: `Mark all ${CARDS.length} flashcards "Got it".`, ...count(known.length, CARDS.length) },
    { id: 'streak-3', icon: '🔥', name: '3-day streak', desc: 'Study 3 days in a row.', ...count(run, 3) },
    { id: 'streak-7', icon: '📅', name: 'Week streak', desc: 'Study 7 days in a row.', ...count(run, 7) },
    { id: 'streak-30', icon: '🏆', name: 'Month streak', desc: 'Study 30 days in a row.', ...count(run, 30) },
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
