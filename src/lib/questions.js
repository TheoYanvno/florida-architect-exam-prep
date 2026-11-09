// Practice questions written for this app (not copied from NCARB or any prep company). Each one is tied
// to a division and one of its NCARB sections, has one or more correct choices, and explains the answer.
// Types: 'single' (pick one) and 'multi' (pick all that apply), the two most common ARE item types.

export const QUESTIONS = [
  {
    id: 'pcm-001', division: 'pcm', section: 'Business Operations', type: 'single',
    prompt: 'A firm\'s direct salary expense for a project is $40,000. The firm bills at a 3.0 multiplier on direct salary. What fee does that labor produce?',
    choices: ['$40,000', '$80,000', '$120,000', '$160,000'], answer: [2],
    explain: 'A multiplier covers direct salary, overhead and profit: $40,000 × 3.0 = $120,000.',
  },
  {
    id: 'pcm-002', division: 'pcm', section: 'Business Operations', type: 'single',
    prompt: 'An employee works 2,080 hours in a year and charges 1,560 of them to projects. What is the employee\'s utilization rate?',
    choices: ['25%', '60%', '75%', '133%'], answer: [2],
    explain: 'Utilization is billable hours divided by total hours: 1,560 ÷ 2,080 = 0.75, or 75%.',
  },
  {
    id: 'pcm-003', division: 'pcm', section: 'Finances, Risk, & Development of Practice', type: 'single',
    prompt: 'Which insurance protects an architecture firm against claims that its own negligent acts, errors or omissions caused a client\'s loss?',
    choices: ['Commercial general liability', 'Professional liability', 'Workers\' compensation', 'Builder\'s risk'], answer: [1],
    explain: 'Professional liability (errors and omissions) insurance covers claims arising from negligent professional services. General liability covers bodily injury and property damage not tied to professional services.',
  },
  {
    id: 'pcm-004', division: 'pcm', section: 'Finances, Risk, & Development of Practice', type: 'multi',
    prompt: 'Which business structures can limit the owners\' personal liability for the firm\'s business debts? Select all that apply.',
    choices: ['Sole proprietorship', 'General partnership', 'Limited liability company (LLC)', 'Corporation'], answer: [2, 3],
    explain: 'LLCs and corporations are separate legal entities that shield owners from the firm\'s business debts. Sole proprietors and general partners are personally liable. Neither shields a licensed professional from liability for their own professional negligence.',
  },
  {
    id: 'pcm-005', division: 'pcm', section: 'Practice-Wide Delivery of Services', type: 'single',
    prompt: 'A firm wants to grow its share of health care projects. Which is the best first step in its marketing plan?',
    choices: ['Lower fees on every proposal', 'Research the health care market and the firm\'s current position in it', 'Hire a health care specialist before any planning', 'Enter every design competition available'], answer: [1],
    explain: 'A marketing plan starts with research: the target market, competitors and the firm\'s strengths. Goals, strategies and actions follow from that.',
  },
  {
    id: 'pcm-006', division: 'pcm', section: 'Practice Methodologies', type: 'single',
    prompt: 'In integrated project delivery (IPD), what most distinguishes it from design-bid-build?',
    choices: ['The contractor is chosen by lowest bid after design', 'The owner, architect and builder share risk and reward under one agreement from early design', 'The architect also acts as the contractor', 'Construction starts before the program is written'], answer: [1],
    explain: 'IPD brings the key parties together early under a multi-party agreement with shared risk and reward. Design-bid-build separates design from a competitively bid construction contract.',
  },
  {
    id: 'pcm-007', division: 'pcm', section: 'Business Operations', type: 'single',
    prompt: 'Which expense is overhead (indirect) rather than a direct project expense?',
    choices: ['Reproduction of drawings for one client', 'Travel to a project site', 'Rent for the firm\'s office', 'A structural consultant hired for one project'], answer: [2],
    explain: 'Office rent supports the whole firm and can\'t be charged to one project, so it is overhead. The others are tied to a specific project.',
  },
  {
    id: 'pcm-008', division: 'pcm', section: 'Finances, Risk, & Development of Practice', type: 'multi',
    prompt: 'Which practices reduce a firm\'s professional liability risk? Select all that apply.',
    choices: ['Written agreements that define scope', 'Documenting decisions and changes in writing', 'Starting work before the agreement is signed', 'Quality control reviews of documents before issue'], answer: [0, 1, 3],
    explain: 'Clear scope, written records and document reviews all reduce risk. Working before an agreement is signed leaves scope and responsibilities undefined.',
  },
];

export function questionsFor(division) {
  return QUESTIONS.filter(q => q.division === division);
}

// True only when exactly the right choices are picked (ARE multi-select items have no partial credit).
export function isCorrect(question, picked) {
  const a = [...question.answer].sort();
  const p = [...new Set(picked)].sort();
  return a.length === p.length && a.every((v, i) => v === p[i]);
}

// Score a set of answers: { [questionId]: [choice indexes] }. Returns totals and a per-section breakdown.
export function score(questions, answers) {
  const bySection = {};
  let correct = 0;
  for (const q of questions) {
    const ok = isCorrect(q, answers[q.id] || []);
    if (ok) correct++;
    const s = (bySection[q.section] ||= { correct: 0, total: 0 });
    s.total++;
    if (ok) s.correct++;
  }
  return { correct, total: questions.length, percent: questions.length ? Math.round((correct / questions.length) * 100) : 0, bySection };
}

// A fair shuffle with a seed, so a practice set can be repeated in the same order.
export function shuffled(list, seed = Date.now()) {
  const out = [...list];
  let s = seed >>> 0 || 1;
  const rand = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
