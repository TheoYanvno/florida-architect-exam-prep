import { test } from 'node:test';
import assert from 'node:assert';
import { cardsFor, cardQuiz, loadCardQuiz, saveCardQuiz, recordCardQuiz, CARD_QUIZ_SIZE } from '../src/lib/flashcards.js';
import { achievements } from '../src/lib/achievements.js';

const store = () => { const m = new Map(); return { getItem: k => m.get(k) ?? null, setItem: (k, v) => m.set(k, String(v)) }; };

test('a flashcard quiz has ten definitions, each with four different terms and the right one among them', () => {
  for (const div of ['pcm', 'pjm', 'pa', 'ppd', 'pdd', 'ce']) {
    const qs = cardQuiz(div, 42);
    assert.equal(qs.length, CARD_QUIZ_SIZE);
    assert.equal(new Set(qs.map(q => q.id)).size, CARD_QUIZ_SIZE);
    for (const q of qs) {
      const card = cardsFor(div).find(c => c.id === q.id);
      assert.equal(q.options.length, 4);
      assert.equal(new Set(q.options).size, 4);
      assert.equal(q.options[q.answer], card.term);
      assert.equal(q.definition, card.definition);
    }
  }
  assert.deepEqual(cardQuiz('pa', 7), cardQuiz('pa', 7));
});

test('the best flashcard quiz score is kept and checked on load', () => {
  const s = store();
  let best = recordCardQuiz({}, 'pa', 80);
  best = recordCardQuiz(best, 'pa', 60);
  saveCardQuiz({ ...best, nope: 90, ce: 140 }, s);
  assert.deepEqual(loadCardQuiz(s), { pa: 80 });
  s.setItem('are-prep:card-quiz', '{bad');
  assert.deepEqual(loadCardQuiz(s), {});
});

test('Card sharp at 70%, Total recall at 100%', () => {
  const blank = { lessons: {}, path: { quiz: {}, exam: {} }, known: [], best: {}, passed: [], days: [], today: '2026-11-24' };
  const got = cardQuiz => new Set(achievements({ ...blank, cardQuiz }).milestones.filter(b => b.earned).map(b => b.id));
  assert.ok(!got({ pa: 60 }).has('card-quiz-70'));
  assert.ok(got({ pa: 70 }).has('card-quiz-70') && !got({ pa: 90 }).has('card-quiz-100'));
  assert.ok(got({ ce: 100 }).has('card-quiz-100'));
});
