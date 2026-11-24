// PcM lessons 5 to 12. Each one teaches the practice and exam questions listed in `teaches` (see units.js), and
// its check is drawn from those questions.
export default [
  { // l5
    section: 'Business Operations', title: 'People, licenses and professional conduct', minutes: 11,
    intro: 'A firm\'s people and its license to practice come with legal duties. This lesson covers pay rules, who counts as an employee, Florida\'s firm license, sealing documents, conflicts of interest and growing staff.',
    parts: [
      { h: 'Paying people correctly', p: [
        'Under the federal Fair Labor Standards Act, non-exempt employees must be paid overtime (one and a half times their rate) for hours over 40 in a week. Salaried professionals can be exempt only if they meet the duties and salary tests; a job title alone doesn\'t make someone exempt.',
        'Whether a worker is an employee or an independent contractor depends on control. If the firm sets the hours, provides the desk and tools and directs the work, the person is legally an employee, whatever the contract says. Misclassifying people exposes the firm to back payroll taxes, benefits and penalties.',
      ] },
      { h: 'The firm\'s license and the seal', p: [
        'In Florida, a corporation, LLC or partnership that offers architectural services must hold a certificate of authorization from the Board of Architecture and Interior Design, with a Florida-licensed architect in responsible charge.',
        'An architect may sign and seal only documents prepared under his or her responsible supervision and control. Sealing drawings someone else produced without that control ("plan stamping") is a violation that can cost a license.',
      ] },
      { h: 'Conflicts of interest', p: [
        'If an architect has a financial interest that could influence advice to a client, such as owning part of a product manufacturer, the rules require full disclosure to the client in writing and the client\'s consent before going ahead.',
        'The same applies to accepting compensation from more than one party on a project: the client must know and agree.',
      ] },
      { h: 'Keeping and growing staff', list: [
        'Regular performance reviews with clear, agreed goals.',
        'Mentoring, AXP supervision and support for the ARE (study time, exam fees).',
        'A succession plan so leadership and client relationships pass on smoothly.',
        'Training saves more in turnover than it costs.',
      ] },
    ],
    takeaways: [
      'Overtime is owed to non-exempt employees for hours over 40 a week.',
      'Control of the work, not the contract\'s label, decides who is an employee.',
      'Florida firms need a certificate of authorization; architects seal only work under their responsible control.',
      'Disclose conflicts of interest in writing and get the client\'s consent.',
    ],
    quiz: [],
  },
  { // l6
    section: 'Business Operations', title: 'The numbers behind a firm', minutes: 12,
    intro: 'Principals read a handful of numbers every month. This lesson works through net operating revenue, the overhead rate, utilization, backlog and hourly billing rates with real arithmetic.',
    parts: [
      { h: 'Net operating revenue', p: [
        'Total revenue includes money that only passes through the firm: consultants\' fees and reimbursable expenses. Net operating revenue (NOR) is what the firm earned with its own staff: total revenue − consultants − reimbursables.',
        'Example: $1,200,000 total − $250,000 consultants − $50,000 reimbursables = $900,000 NOR.',
      ] },
      { h: 'Overhead rate and multipliers', p: [
        'The overhead rate is indirect expenses ÷ direct labor. $600,000 of overhead on $400,000 of direct labor is 1.5 (150%).',
        'A multiplier on direct salary turns labor into fees. $40,000 of direct salary at a 3.0 multiplier bills $120,000. To find an hourly billing rate, divide salary by 2,080 hours, then multiply: $72,800 ÷ 2,080 = $35 an hour × 3.0 = $105 an hour.',
      ] },
      { h: 'Utilization and backlog', p: [
        'Utilization = project hours ÷ total hours. 1,664 of 2,080 hours is 80%; 1,560 of 2,080 is 75%. Compare people in a table and the lowest rate stands out, often a principal who spends time marketing and managing.',
        'Backlog is signed but unearned fees. Divide it by monthly revenue to see how many months of work are booked: $1,200,000 ÷ $150,000 a month = 8 months.',
      ] },
    ],
    example: { title: 'A billing rate', steps: ['Salary $72,800 ÷ 2,080 hours = $35 an hour.', 'Multiplier 3.0: 35 × 3.0 = $105 an hour.', 'The $105 covers the salary ($35), overhead and profit.'] },
    takeaways: [
      'NOR = total revenue − consultants − reimbursables.',
      'Overhead rate = indirect ÷ direct labor; billing rate = hourly salary × multiplier.',
      'Utilization = project hours ÷ total hours; backlog months = backlog ÷ monthly revenue.',
    ],
    quiz: [],
  },
  { // l7
    section: 'Finances, Risk, & Development of Practice', title: 'Accounting, cash flow and collections', minutes: 13,
    intro: 'A profitable firm can still run out of cash. This lesson covers the financial statements, accrual and cash accounting, profit margin, collecting what clients owe and planning for gaps.',
    parts: [
      { h: 'The statements', p: [
        'The balance sheet shows what the firm owns (assets), owes (liabilities) and the owners\' equity on one date. The income statement (profit and loss) shows revenue and expenses over a period.',
        'Under accrual accounting, revenue is recorded when it is earned (work done and billed) and expenses when incurred. Cash accounting records them when money changes hands.',
        'Profit = net operating revenue − direct labor − indirect expenses. Profit margin = profit ÷ revenue: $100,000 on $1,000,000 is 10%.',
      ] },
      { h: 'Getting paid', p: [
        'An aged accounts receivable report sorts unpaid invoices into current, 31–60, 61–90 and over 90 days. The older an invoice, the less likely it is collected; anything over 90 days needs a principal\'s call.',
        'Average collection period = average receivables ÷ daily revenue. $300,000 ÷ ($2,400,000 ÷ 365) ≈ 46 days.',
        'Healthy habits: invoice monthly as soon as the period closes, take a retainer at the start, and follow up on late invoices right away. Long payment terms only push income further away.',
      ] },
      { h: 'Planning for gaps', p: [
        'A cash flow projection lists expected money in and out by month. Charting the month-end balance shows the first month it would go below zero, months ahead.',
        'Because payroll doesn\'t wait for clients, many firms keep a bank line of credit to cover short gaps and repay it as invoices are paid.',
      ] },
    ],
    takeaways: [
      'Balance sheet: one date. Income statement: a period. Accrual: record revenue when earned.',
      'Watch the aged receivables; collect faster with monthly billing, retainers and follow-up.',
      'A cash flow projection and a line of credit get the firm through slow months.',
    ],
    quiz: [],
  },
  { // l8
    section: 'Finances, Risk, & Development of Practice', title: 'Contracts, liability and claims', minutes: 13,
    intro: 'Most of an architect\'s risk is decided by the agreement and by habits of documentation. This lesson covers the standard of care, indemnities, limits on liability, insurance terms and how long claims can be brought.',
    parts: [
      { h: 'The standard of care', p: [
        'Architects are not held to perfection. The professional standard of care is the skill and care ordinarily used by other architects practicing in similar circumstances. Promising more, such as a warranty or guarantee, creates liability insurance won\'t cover.',
      ] },
      { h: 'Clauses to read closely', list: [
        'Indemnity: "any and all claims arising from the project" goes beyond negligence. Professional liability insurance generally doesn\'t cover liability taken on by contract, so limit indemnities to the architect\'s negligence.',
        'Limitation of liability: caps what the owner can recover from the architect, often at the fee or an agreed amount. It is negotiated and may not apply to gross negligence.',
        'Mutual waiver of consequential damages (in the AIA owner-architect agreement): both parties give up claims for indirect losses such as lost profits, rent or use.',
      ] },
      { h: 'Insurance and time limits', p: [
        'Most professional liability policies are claims-made: they cover claims made while the policy is in force. If a firm switches carriers or closes, it needs prior-acts coverage or an extended reporting period ("tail").',
        'A statute of limitations limits the time to sue after a claim arises or is discovered. A statute of repose cuts off claims a set number of years after the work is completed, even if a defect is found later.',
      ] },
      { h: 'Lowering the risk', list: [
        'A clear written agreement that defines scope.',
        'Documenting decisions and changes in writing, promptly.',
        'Choosing clients carefully.',
      ] },
    ],
    takeaways: [
      'The standard of care is ordinary professional skill, not perfection or a warranty.',
      'Narrow indemnities to negligence; limitation of liability and the consequential damages waiver cap exposure.',
      'Claims-made insurance must stay continuous; repose runs from completion regardless of discovery.',
    ],
    quiz: [],
  },
  { // l9
    section: 'Practice-Wide Delivery of Services', title: 'Clients, scope and fees', minutes: 11,
    intro: 'Choosing the right projects and setting the fee and scope well keeps work profitable. This lesson covers go/no-go decisions, client relationships, fee methods, scope creep and who directs the work.',
    parts: [
      { h: 'Choosing what to pursue', p: [
        'Before writing a proposal, a go/no-go review asks whether the firm has the experience, staff and a real chance of winning. Chasing every lead wastes marketing money.',
        'Check the client too: Is the project funded? How did the client treat past consultants? Does the firm have the expertise and capacity? A client who can\'t pay or invites disputes is a major risk.',
        'A client relationship management (CRM) system tracks contacts, leads, proposals and client history, so follow-ups happen on time.',
      ] },
      { h: 'Fee methods', list: [
        'Stipulated sum: a fixed fee for a defined scope; the firm carries the risk of overruns.',
        'Percentage of construction cost: rises and falls with the project\'s cost.',
        'Hourly, often with a not-to-exceed cap: best when the scope is unclear at the start, until it can be defined.',
      ] },
      { h: 'Protecting the scope', p: [
        'Scope creep is a series of small extras outside the agreement. Each one erodes the fee. Tell the client in writing that the request is an additional service and agree on fee and time before doing it.',
        'Take direction only from the owner\'s designated representative named in the agreement. Instructions from others lead to conflicts and disputes.',
      ] },
    ],
    takeaways: [
      'Go/no-go and client vetting come before the proposal.',
      'Match the fee method to how well the scope is known.',
      'Document scope changes as additional services; follow the owner\'s named representative.',
    ],
    quiz: [],
  },
  { // l10
    section: 'Practice-Wide Delivery of Services', title: 'Delivery methods in practice', minutes: 12,
    intro: 'The delivery method decides who hires whom and who carries which risks. This lesson compares design-bid-build, design-build, construction management at risk, multi-prime, integrated project delivery and fast-tracking.',
    parts: [
      { h: 'Who holds which contract', list: [
        'Design-bid-build: the owner hires the architect, then bids the finished documents to contractors.',
        'Design-build: the owner hires one design-builder for design and construction; the architect is usually the design-builder\'s consultant, so the architect\'s contract is with the builder, not the owner.',
        'Construction management at risk (CMAR): the construction manager joins during design to advise, then guarantees a maximum price and builds the project.',
        'Multi-prime: the owner holds separate contracts with several trade contractors and must coordinate them (often with a construction manager).',
      ] },
      { h: 'Integrated project delivery', p: [
        'In IPD, the owner, architect and builder sign together, set shared goals and share risk and reward tied to how the project turns out. For the architect, the benefit is early input from the builder and aligned incentives.',
      ] },
      { h: 'Fast-track', p: [
        'Fast-tracking starts construction on early packages (site work, foundations) before design is finished. It saves time, but later design decisions can force changes to work already built, so costs and coordination risk rise.',
      ] },
    ],
    takeaways: [
      'In design-build the architect usually works for the design-builder.',
      'CMAR adds a builder during design who later guarantees a maximum price.',
      'IPD shares risk and reward; fast-track trades schedule for change risk.',
    ],
    quiz: [],
  },
  { // l11
    section: 'Practice Methodologies', title: 'Planning and growing the firm', minutes: 11,
    intro: 'Firms that last plan ahead. This lesson covers strategic plans, business plans for growth, ownership transition and the choice between specializing and staying a generalist.',
    parts: [
      { h: 'Strategic plans', p: [
        'A strategic plan sets where the firm is going: its mission and vision, an honest look at strengths, weaknesses, opportunities and threats (SWOT), and goals. Goals that are measurable and dated let leaders check progress and adjust the plan.',
      ] },
      { h: 'Growth and ownership', p: [
        'Before opening a second office, write a business plan: market research, staffing, costs and the break-even point. It tests whether the market can support the office before money is committed.',
        'Owners plan for a partner leaving or dying with a buy-sell agreement: a formula for valuing the departing owner\'s share and how the buyout is funded, often with life insurance.',
      ] },
      { h: 'Specialist or generalist', p: [
        'A specialist firm wins work on deep expertise and reputation in one building type, but depends on that market. A generalist spreads risk across markets but competes with specialists. Many firms specialize in a few related markets.',
      ] },
    ],
    takeaways: [
      'Strategic plan: mission, SWOT and measurable goals.',
      'Business plan before expansion; buy-sell agreement for ownership changes.',
      'Specializing builds expertise but concentrates market risk.',
    ],
    quiz: [],
  },
  { // l12
    section: 'Practice Methodologies', title: 'Research, knowledge and building performance', minutes: 10,
    intro: 'Good firms learn from their own projects and from research. This lesson covers evidence-based design, post-occupancy evaluation and ways firms build and keep knowledge.',
    parts: [
      { h: 'Evidence-based design', p: [
        'Evidence-based design uses credible research on outcomes to guide decisions. In health care, for example, published studies of patient falls and infections shape room layouts and handwashing locations.',
      ] },
      { h: 'Post-occupancy evaluation', p: [
        'A post-occupancy evaluation (POE), often a year after move-in, surveys occupants and measures performance such as energy use and comfort. It shows what works so the next design improves.',
      ] },
      { h: 'Building the firm\'s knowledge', list: [
        'A library of standard details, reviewed and updated after each project.',
        'Lessons-learned meetings at closeout.',
        'Internal training and shared BIM standards.',
        'Never deleting project records the firm may need for claims or reuse.',
      ] },
    ],
    takeaways: [
      'Evidence-based design applies research to design decisions.',
      'A POE compares actual performance with design intent.',
      'Standard details, lessons learned and training keep knowledge in the firm.',
    ],
    quiz: [],
  },
];
