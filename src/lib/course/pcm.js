// Practice Management (PcM): running an architecture firm. One lesson per NCARB content section.
const S = (prompt, choices, answer, explain) => ({ type: 'single', prompt, choices, answer: [answer], explain });
const M = (prompt, choices, answer, explain) => ({ type: 'multi', prompt, choices, answer, explain });

export default [
  {
    section: 'Business Operations', title: 'How a firm runs day to day', minutes: 12,
    intro: 'An architecture firm is a business before it is a studio. This lesson covers how firms are organized, how they track staff time, and the numbers every principal watches each month.',
    parts: [
      { h: 'Ways to organize a firm', p: [
        'Small firms are often organized by person: a principal runs each project from start to finish. Larger firms choose between a studio structure (a team owns a project from design through construction administration) and a departmental structure (design, production and construction administration are separate groups and the project is handed from one to the next).',
        'Studios keep knowledge with the project and give clients one team; departments build deep skills but risk losing information at each hand-off. Many firms mix the two, with project managers who stay with the project throughout.',
      ] },
      { h: 'People and the law', p: [
        'Employment law shapes how a firm hires and pays people. An employee works under the firm\'s control; an independent contractor controls how and when the work is done. Calling an employee a "contractor" to avoid payroll taxes is misclassification and can bring back taxes and penalties.',
        'Under the federal Fair Labor Standards Act, staff who are not exempt must be paid overtime (time and a half) for hours over 40 in a week. Interns and junior staff are usually non-exempt. Firms also must follow anti-discrimination law (Title VII, the ADA for employees, age discrimination rules) in hiring, pay and promotion.',
      ] },
      { h: 'Tracking time', p: [
        'Everything in practice management starts with timesheets. Hours charged to a project are direct (billable) labor; everything else is indirect: marketing, training, administration, holidays and vacation.',
        'Utilization (also called the chargeable ratio) is direct hours divided by total hours. A principal who markets all week may run at 40%; a production architect at 85% to 90%. Firm-wide targets of about 60% to 70% are common.',
        'Direct hours turn into fees through a multiplier on direct salary. A 3.0 multiplier on $40,000 of direct salary bills $120,000: one part pays the salary, the rest covers overhead and profit. The next lesson shows how a firm sets its multiplier.',
      ] },
      { h: 'Monthly numbers to watch', list: [
        'Utilization rate: are people working on paid projects?',
        'Backlog: fees under contract but not yet earned. Divide by the monthly fee the staff can produce to see how many months of work are booked.',
        'Accounts receivable aging: how long clients take to pay. Invoices over 60 to 90 days old signal cash trouble.',
        'Overhead rate: indirect costs divided by direct labor.',
      ] },
    ],
    example: { title: 'Utilization and backlog', steps: [
      'An architect works 2,080 hours a year and charges 1,664 to projects: 1,664 ÷ 2,080 = 0.80, so utilization is 80%.',
      'A firm has $900,000 of fees under contract that it hasn\'t earned yet. Its staff produce about $150,000 of fee a month.',
      'Backlog is $900,000 ÷ $150,000 = 6 months of work.',
    ] },
    takeaways: [
      'Utilization = direct (billable) hours ÷ total hours.',
      'Backlog tells how long current contracts will keep the staff busy.',
      'Non-exempt employees earn overtime over 40 hours a week; misclassifying employees as contractors is illegal.',
      'Studio structures keep a team with a project; departmental structures hand it from group to group.',
    ],
    quiz: [
      S('A project architect worked 2,000 hours this year and charged 1,500 to projects. What is the utilization rate?', ['25%', '60%', '75%', '133%'], 2, '1,500 ÷ 2,000 = 0.75, or 75%. Utilization is always direct hours divided by total hours worked.'),
      S('A firm has $1.2 million in unearned fees under contract and earns about $200,000 of fee a month. How large is its backlog?', ['2 months', '4 months', '6 months', '12 months'], 2, '$1,200,000 ÷ $200,000 per month = 6 months of work already under contract.'),
      M('Which of these hours are indirect (not billable to a client project)? Select all that apply.', ['Writing a proposal for a new client', 'Drawing details for a current project', 'Attending a code seminar', 'Paid vacation'], [0, 2, 3], 'Marketing, training and paid time off are indirect. Detailing a current project is direct labor charged to that project.'),
      S('A firm splits design, production and construction administration into separate groups, and projects move between them. This is a:', ['Studio structure', 'Departmental structure', 'Joint venture', 'Sole proprietorship'], 1, 'A departmental structure groups people by skill and hands projects from one department to the next. A studio keeps one team on a project from start to finish.'),
    ],
  },
  {
    section: 'Finances, Risk, & Development of Practice', title: 'Money, risk and the shape of the firm', minutes: 15,
    intro: 'Firms stay in business by pricing work above its cost, managing cash, carrying the right insurance and choosing a legal structure that fits. This is the heaviest-weighted part of PcM.',
    parts: [
      { h: 'Overhead and the multiplier', p: [
        'Direct personnel expense (DPE) is the salary of people working on projects plus their mandatory and customary benefits. Overhead is every cost of running the firm that isn\'t charged to a project: rent, utilities, insurance, software, indirect salaries, marketing.',
        'The overhead rate is overhead divided by direct labor. If a firm spends $600,000 on overhead and $400,000 on direct salaries, its overhead rate is 1.5 (150%).',
        'The break-even multiplier is 1 + the overhead rate: at 2.5 here, every dollar of direct salary must bring in $2.50 just to cover salary and overhead. The billing multiplier adds profit on top, for example 2.5 × 1.15 ≈ 2.9.',
      ] },
      { h: 'Profit, cash and accounting', p: [
        'Profit is revenue minus all expenses; cash flow is when money actually comes in and goes out. A profitable firm can still run out of cash if clients pay slowly.',
        'Cash-basis accounting records income when money arrives and expenses when they are paid. Accrual-basis accounting records income when it is earned and expenses when they are incurred, giving a truer picture of how the firm is doing. Larger firms use accrual.',
        'Key statements: the balance sheet (assets = liabilities + owners\' equity, at one moment) and the income statement or profit-and-loss (revenue and expenses over a period).',
      ] },
      { h: 'Insurance that firms carry', list: [
        'Professional liability (errors and omissions): claims that the firm\'s negligent design or services caused a loss. Usually written on a claims-made basis, so it covers claims made while the policy is in force.',
        'Commercial general liability: bodily injury and property damage not caused by professional services, such as a visitor tripping in the office.',
        'Workers\' compensation: required by state law for employees injured on the job.',
        'Property, auto and umbrella coverage round out the program.',
      ] },
      { h: 'Legal structures', p: [
        'A sole proprietorship and a general partnership are simple, but the owners are personally liable for the firm\'s debts. An LLC and a corporation (including a professional corporation) are separate legal entities that shield owners\' personal assets from business debts.',
        'No structure protects an architect from liability for his or her own professional negligence. In Florida, a business that offers architectural services must hold a certificate of authorization from the Board of Architecture and Interior Design.',
      ] },
    ],
    example: { title: 'Pricing labor', steps: [
      'Direct salaries: $400,000. Overhead: $600,000. Overhead rate = $600,000 ÷ $400,000 = 1.5.',
      'Break-even multiplier = 1 + 1.5 = 2.5.',
      'To earn a 20% profit on that cost, the billing multiplier is 2.5 × 1.20 = 3.0.',
      'A project with $50,000 of direct salary should be fee-ed at $50,000 × 3.0 = $150,000.',
    ] },
    takeaways: [
      'Overhead rate = indirect costs ÷ direct labor; break-even multiplier = 1 + overhead rate.',
      'Accrual accounting records income when earned; cash accounting when received.',
      'Professional liability covers negligent professional services; general liability covers non-professional injuries and damage.',
      'LLCs and corporations shield owners from business debts, never from their own malpractice.',
    ],
    quiz: [
      S('A firm\'s overhead is $750,000 and its direct salary expense is $500,000. What is its break-even multiplier?', ['1.5', '2.0', '2.5', '3.0'], 2, 'Overhead rate = $750,000 ÷ $500,000 = 1.5. Break-even multiplier = 1 + 1.5 = 2.5.'),
      S('A visitor slips on a wet floor in the firm\'s lobby and sues. Which policy responds?', ['Professional liability', 'Commercial general liability', 'Workers\' compensation', 'Builder\'s risk'], 1, 'Injuries to the public that have nothing to do with professional services fall under commercial general liability.'),
      S('Which accounting method records a fee as income when the work is done, even if the client hasn\'t paid yet?', ['Cash basis', 'Accrual basis', 'Tax basis', 'Percentage basis'], 1, 'Accrual accounting records revenue when it is earned and expenses when they are incurred.'),
      M('Which statements about firm structures are true? Select all that apply.', ['A corporation shields its owners\' personal assets from the firm\'s business debts', 'An LLC protects an architect from claims about his or her own negligent design', 'General partners are personally liable for partnership debts', 'A sole proprietorship is a separate legal entity from its owner'], [0, 2], 'Corporations and LLCs limit liability for business debts, not for one\'s own negligence. General partners are personally liable, and a sole proprietorship is not a separate entity.'),
    ],
  },
  {
    section: 'Practice-Wide Delivery of Services', title: 'Winning and delivering work', minutes: 12,
    intro: 'Firms need a steady flow of the right projects and a consistent way to deliver them. This lesson covers marketing, selection by qualifications, proposals and quality across the whole practice.',
    parts: [
      { h: 'Marketing starts with research', p: [
        'A marketing plan begins with research: the markets the firm wants, the clients in them, competitors, and the firm\'s own strengths and weaknesses. Goals, strategies and specific actions (and a budget) follow. Many firms spend roughly 5% to 10% of revenue on marketing.',
        'Most new work comes from repeat clients and referrals, so client relationships and service on current projects are the best marketing.',
      ] },
      { h: 'How public clients choose architects', p: [
        'Federal agencies and many states, including Florida, select design professionals by qualifications, not by price. Under the federal Brooks Act and Florida\'s Consultants\' Competitive Negotiation Act (CCNA), the agency ranks firms on qualifications, negotiates a fair fee with the top-ranked firm, and moves to the next firm only if they can\'t agree.',
        'Firms answer with a statement of qualifications or an RFQ response, and often an interview. Price may come in only after selection.',
      ] },
      { h: 'Proposals and scope', p: [
        'A proposal describes the project as the architect understands it, the scope of services, the schedule, the team, and the fee and how it will be billed. A clear scope protects both sides: services outside it become additional services.',
        'Go/no-go decisions keep firms from chasing work they can\'t win or can\'t do profitably: weigh the client, the fee, the risk, the firm\'s experience and its capacity.',
      ] },
      { h: 'Quality across the firm', p: [
        'Firm-wide quality management includes standard details and specification masters, drawing checklists, peer reviews at milestones, and lessons-learned sessions after projects. It reduces errors, which reduces claims and redesign that the firm pays for itself.',
      ] },
    ],
    example: { title: 'A qualifications-based selection', steps: [
      'A Florida county advertises for a library architect. Six firms submit qualifications.',
      'A committee short-lists three, interviews them, and ranks them 1 to 3.',
      'The county negotiates scope and fee with firm 1. If they can\'t agree on a fair fee, the county formally ends talks and negotiates with firm 2.',
    ] },
    takeaways: [
      'Marketing plans start with research, then goals, strategies, actions and a budget.',
      'Public agencies (Brooks Act, Florida CCNA) select architects on qualifications first and negotiate fee after.',
      'A clear scope in the proposal defines what counts as additional services later.',
      'Firm-wide quality control lowers risk and the cost of fixing mistakes.',
    ],
    quiz: [
      S('Under Florida\'s CCNA, how does a public agency choose an architect for a major project?', ['Lowest fee wins', 'It ranks firms by qualifications, then negotiates a fee with the top-ranked firm', 'It picks any licensed firm in the county', 'It holds a design competition every time'], 1, 'Qualifications-based selection ranks firms first and negotiates a fair fee with the highest-ranked firm, moving down the list only if talks fail.'),
      S('What should come first in a firm\'s marketing plan?', ['A new website', 'Research into target markets, clients and competitors', 'Lowering fees', 'Hiring a business developer'], 1, 'Research comes first; goals, strategies and actions are built on it.'),
      M('Which belong in a proposal for architectural services? Select all that apply.', ['Scope of services', 'Schedule', 'Fee and how it will be billed', 'The contractor\'s bid amount'], [0, 1, 2], 'A proposal covers scope, schedule, team and fee. The contractor\'s bid comes much later in a design-bid-build project.'),
      S('Where does most new work for an established firm usually come from?', ['Cold calls', 'Repeat clients and referrals', 'Public advertising only', 'Design awards'], 1, 'Repeat clients and referrals bring most work, which is why service on current projects matters so much.'),
    ],
  },
  {
    section: 'Practice Methodologies', title: 'Delivery methods and how firms work', minutes: 12,
    intro: 'How a project is delivered decides who is under contract with whom, when the builder joins, and who carries which risks. PcM asks you to recommend the right method and to explain the tools a firm uses to practice well.',
    parts: [
      { h: 'Project delivery methods', list: [
        'Design-bid-build: the owner hires the architect, then the drawings are bid and the owner signs a separate contract with the low or best bidder. Clear roles and price competition, but the longest schedule and no builder input during design.',
        'Construction manager as constructor (CM at-risk): the CM joins during design, gives cost and constructability advice, then guarantees a maximum price (GMP) and builds. Allows early pricing and phased (fast-track) construction.',
        'Construction manager as adviser (agency CM): the CM advises the owner for a fee but holds no trade contracts and takes no cost risk.',
        'Design-build: one contract with one entity for design and construction. Single point of responsibility and fast, but the owner gives up some control of design, and the architect often works for the builder.',
        'Integrated project delivery (IPD): owner, architect and builder (and key trades) sign one multi-party agreement and share risk and reward from early design.',
      ] },
      { h: 'Fast-track and phasing', p: [
        'Fast-track construction starts building early phases (site work, foundations) while later phases are still being designed. It shortens the schedule but raises the risk of changes, because work begins before the whole design is set.',
      ] },
      { h: 'Building information modeling', p: [
        'BIM is a shared, data-rich 3D model. Firms use it to coordinate disciplines and catch clashes, take off quantities, and hand over information for facility management. A BIM execution plan sets who models what, to what level of development (LOD), and who owns the model.',
      ] },
      { h: 'Sustainability and research in practice', p: [
        'Firms increasingly set firm-wide goals (for example the AIA 2030 Commitment for energy) and track results across projects. Evidence-based design uses research and post-occupancy evaluations to inform decisions.',
      ] },
    ],
    example: { title: 'Choosing a method', steps: [
      'An owner must open a clinic in 14 months, wants a guaranteed price early, and wants to keep a direct contract with the architect.',
      'Design-bid-build is too slow and gives a price only after design is done; design-build would put the architect under the builder.',
      'CM at-risk fits: the CM joins in design, gives a GMP, and can start site work early while the owner keeps its own architect.',
    ] },
    takeaways: [
      'Design-bid-build: separate contracts, price after design, longest schedule.',
      'CM at-risk gives builder input during design and a guaranteed maximum price.',
      'Design-build is one contract for design and construction.',
      'IPD is a multi-party agreement with shared risk and reward.',
      'Fast-track overlaps design and construction to save time, with more risk of change.',
    ],
    quiz: [
      S('An owner wants a single contract for both design and construction. Which method fits?', ['Design-bid-build', 'Design-build', 'Agency construction management', 'Multiple prime contracts'], 1, 'Design-build gives the owner one contract and one point of responsibility for design and construction.'),
      S('Which method has the builder give a guaranteed maximum price and take cost risk after advising during design?', ['CM as adviser', 'CM at-risk', 'Design-bid-build', 'Owner-builder'], 1, 'A CM at-risk joins during design, then guarantees a maximum price and holds the trade contracts.'),
      M('Which are true of fast-track construction? Select all that apply.', ['Construction begins before the whole design is finished', 'It shortens the overall schedule', 'It removes the risk of changes', 'It is often used with a construction manager'], [0, 1, 3], 'Fast-track overlaps design and construction to save time and often uses a CM, but it raises the risk of changes rather than removing it.'),
      S('What does a BIM execution plan set out?', ['The contractor\'s profit', 'Who models what, to what level of development, and who owns the model', 'The owner\'s financing', 'Zoning approvals'], 1, 'A BIM execution plan defines responsibilities, levels of development and model ownership among the team.'),
    ],
  },
];
