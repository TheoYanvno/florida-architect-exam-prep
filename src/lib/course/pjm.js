// Project Management (PjM): running one project from agreement to closeout. One lesson per NCARB section.
const S = (prompt, choices, answer, explain) => ({ type: 'single', prompt, choices, answer: [answer], explain });
const M = (prompt, choices, answer, explain) => ({ type: 'multi', prompt, choices, answer, explain });

export default [
  {
    section: 'Resource Management', title: 'Staffing a project and its consultants', minutes: 10,
    intro: 'A project manager decides who works on a project, how many hours they have, and which consultants join the team. Getting this right keeps the project on budget and the firm profitable.',
    parts: [
      { h: 'Building the team', p: [
        'The project manager (PM) matches people to the work: a project architect for technical coordination, designers early, production staff during construction documents, and an experienced person for construction administration. The PM also decides when each person is needed, so staff are not idle or overloaded.',
        'Consultants (structural, MEP, civil, landscape, specialty) are usually hired by the architect, who is then responsible to the owner for their work. Their scope and fee should match the architect\'s agreement with the owner, so obligations flow down.',
      ] },
      { h: 'The work plan and labor budget', p: [
        'Start with the fee. Subtract consultants\' fees and a target profit; what is left is the budget for the firm\'s own labor and expenses. Divide by the billing rate (or by salary × multiplier) to get the hours available, then spread those hours over the phases.',
        'A common split of the architect\'s fee by phase is roughly: schematic design 15%, design development 20%, construction documents 40%, bidding 5%, construction administration 20%.',
      ] },
      { h: 'Tracking against the plan', p: [
        'Each week, compare hours spent with the percentage of work actually complete. If 60% of the budget is spent but only 45% of the drawings are done, the project is over budget and the PM must act: re-plan, change staff, or talk to the client if the scope has grown.',
      ] },
    ],
    example: { title: 'Hours available for design development', steps: [
      'Total fee $300,000. Consultants $90,000. Target profit 15% of the total fee = $45,000.',
      'Left for the firm\'s labor: $300,000 − $90,000 − $45,000 = $165,000.',
      'Design development gets 20%: $33,000. At an average billing rate of $150 an hour, that is 220 hours.',
    ] },
    takeaways: [
      'Budget labor from the fee: subtract consultants and profit, then divide by the billing rate.',
      'Typical phase split: SD 15%, DD 20%, CD 40%, bidding 5%, CA 20%.',
      'Compare budget spent with work actually complete, weekly.',
      'The architect is responsible to the owner for consultants it hires; their contracts should mirror the owner agreement.',
    ],
    quiz: [
      S('A fee is $200,000. Consultants cost $60,000 and the firm targets $30,000 profit. How much is left for the firm\'s own labor and expenses?', ['$80,000', '$110,000', '$140,000', '$170,000'], 1, '$200,000 − $60,000 − $30,000 = $110,000.'),
      S('Halfway through construction documents, 70% of the CD budget is spent and about 50% of the drawings are done. What does this show?', ['The project is ahead of schedule', 'The project is over budget for the work completed', 'The fee was too high', 'Nothing until the phase ends'], 1, 'Spending runs ahead of progress, so the phase is heading over budget. The PM should act now, not at the end of the phase.'),
      S('Which phase usually takes the largest share of the architect\'s fee?', ['Schematic design', 'Design development', 'Construction documents', 'Bidding'], 2, 'Construction documents are the most labor-intensive phase, commonly about 40% of the fee.'),
      M('Which are true of consultants hired by the architect? Select all that apply.', ['The architect is responsible to the owner for their services', 'Their agreements should pass down the relevant terms of the owner-architect agreement', 'They contract directly with the owner by default', 'Their fees come out of the architect\'s fee'], [0, 1, 3], 'When the architect hires consultants, it answers to the owner for their work, flows down matching terms, and pays them from its own fee.'),
    ],
  },
  {
    section: 'Project Work Planning', title: 'Scope, schedule and the project plan', minutes: 12,
    intro: 'Before drawing starts, the project manager sets the scope of work, the schedule, and how the team will work together. A good plan prevents most of the problems a project could have.',
    parts: [
      { h: 'Defining scope', p: [
        'Scope comes from the owner-architect agreement: the basic services in each phase, plus any additional services. A work breakdown structure divides the work into tasks small enough to assign and estimate.',
        'Scope creep is the slow addition of work without added fee or time. The defense is a clear agreement and a habit of telling the client, in writing, when a request falls outside it.',
      ] },
      { h: 'Scheduling tools', list: [
        'Bar (Gantt) chart: tasks as bars along a timeline. Easy to read, but it does not show which tasks depend on others.',
        'Critical path method (CPM): a network of tasks and their dependencies. The longest chain is the critical path; any delay on it delays the whole project. Tasks off the path have float (slack).',
        'Milestones: key dates such as owner approvals, permit submission and bid opening.',
      ] },
      { h: 'The project management plan', p: [
        'A written plan records the goals, scope, team and roles, schedule, budget, communication plan (who gets what, how often), the quality plan and the BIM execution plan. It is shared with the team and updated as things change.',
      ] },
      { h: 'Early decisions with the owner', p: [
        'The owner provides the program, budget, site information (surveys and geotechnical reports) and decisions on time. The architect should confirm the owner\'s budget and schedule are realistic together: if not, one of scope, quality, budget or time has to move.',
      ] },
    ],
    example: { title: 'Finding the critical path', steps: [
      'Tasks: A survey (2 weeks), then B schematic design (6) and C geotechnical report (3), both after A; D design development (8) needs B and C.',
      'Path A-B-D = 2 + 6 + 8 = 16 weeks. Path A-C-D = 2 + 3 + 8 = 13 weeks.',
      'The critical path is A-B-D (16 weeks). C has 3 weeks of float: it can slip 3 weeks without delaying the project.',
    ] },
    takeaways: [
      'Scope is set by the agreement; requests outside it are additional services.',
      'The critical path is the longest chain of dependent tasks; float is how long other tasks can slip.',
      'Gantt charts are easy to read but hide dependencies.',
      'The owner supplies program, budget, surveys and timely decisions.',
    ],
    quiz: [
      S('Tasks: A (3 weeks) then B (5) and C (2) both after A, and D (4) after both B and C. How long is the project?', ['9 weeks', '12 weeks', '14 weeks', '10 weeks'], 1, 'Path A-B-D = 3 + 5 + 4 = 12 weeks, longer than A-C-D = 9 weeks, so the project takes 12 weeks.'),
      S('In the same network, how much float does task C have?', ['0 weeks', '2 weeks', '3 weeks', '5 weeks'], 2, 'C sits on a 9-week path against a 12-week critical path, so it can slip 3 weeks.'),
      S('Which scheduling tool shows how tasks depend on one another?', ['A bar chart', 'The critical path method', 'A milestone list', 'A cash flow chart'], 1, 'CPM networks show dependencies and identify the critical path; bar charts do not.'),
      M('Which does the owner normally provide? Select all that apply.', ['The building program', 'A site survey', 'The geotechnical report', 'The architect\'s consultants'], [0, 1, 2], 'Under standard agreements the owner furnishes the program, surveys and geotechnical information. The architect retains its own consultants.'),
    ],
  },
  {
    section: 'Contracts', title: 'Agreements and who is responsible for what', minutes: 15,
    intro: 'Contracts are the most heavily weighted part of PjM. You need to know the standard agreements, the architect\'s standard of care, how fees are set, and how risk is shifted.',
    parts: [
      { h: 'The family of standard documents', p: [
        'Professional organizations publish coordinated standard contract forms. The best known in the U.S. are the AIA® documents, grouped by letter: A for owner-contractor agreements (A101 stipulated sum, A102 cost plus fee with a guaranteed maximum price, A201 General Conditions), B for owner-architect agreements (B101), C for architect-consultant agreements, and G for forms such as change orders and certificates for payment. ConsensusDocs is another widely used family.',
        'The General Conditions (A201) are the rulebook for construction: roles of owner, contractor and architect, changes, payments, claims and closeout. Owner-architect agreements are written to match them.',
      ] },
      { h: 'Standard of care', p: [
        'Architects must perform with the skill and care ordinarily used by other architects in similar circumstances. That is the standard of care. It is not a promise of perfection, and architects should not agree to "best" or "highest" standards, warranties or guarantees, which insurance may not cover.',
      ] },
      { h: 'Ways to set the fee', list: [
        'Stipulated sum (lump sum): a fixed fee for a defined scope.',
        'Percentage of construction cost: rises with the cost of the work.',
        'Hourly (time and materials), often with a not-to-exceed limit.',
        'Multiple of direct personnel expense.',
        'Unit cost, such as per square foot or per housing unit.',
      ] },
      { h: 'Key clauses that shift risk', list: [
        'Indemnification: one party agrees to cover the other\'s losses from certain claims.',
        'Limitation of liability: caps how much the architect can owe, often at the fee or an insurance amount.',
        'Mutual waiver of consequential damages: neither party claims lost profits or similar indirect losses.',
        'Dispute resolution: usually mediation first, then arbitration or litigation as the agreement chooses.',
        'Ownership of documents: the architect keeps copyright; the owner gets a license to use the documents for that project.',
      ] },
    ],
    example: { title: 'Additional services', steps: [
      'The owner approves design development, then asks for a second floor plan option.',
      'Work on a previously approved design is outside basic services.',
      'The architect notifies the owner in writing before starting, and it is done as an additional service for added fee and time.',
    ] },
    takeaways: [
      'Standard of care = the ordinary skill and care of architects in similar circumstances, not perfection.',
      'A201 is the General Conditions; owner-architect agreements are coordinated with it.',
      'Limitation of liability caps risk; indemnification shifts it.',
      'The architect keeps copyright; the owner gets a license to use the documents for the project.',
    ],
    quiz: [
      S('An architect is sued after a design error. By what standard is the architect judged?', ['Perfection', 'The highest standard in the profession', 'The skill and care ordinarily used by architects in similar circumstances', 'Whatever the contractor expected'], 2, 'Architects are held to the standard of care: what a reasonably prudent architect would do in similar circumstances.'),
      S('Which clause caps the amount an architect could owe the owner for claims?', ['Indemnification', 'Limitation of liability', 'Ownership of documents', 'Force majeure'], 1, 'A limitation of liability clause sets a ceiling on the architect\'s exposure, often tied to the fee or insurance limits.'),
      M('Which contract terms should an architect avoid agreeing to? Select all that apply.', ['A warranty that the design will be free of errors', 'Performing to the "highest" standard of care', 'Mediation before arbitration', 'A guarantee of the contractor\'s cost'], [0, 1, 3], 'Warranties, "highest standard" language and guarantees go beyond the standard of care and may not be insured. Mediation first is normal and sensible.'),
      S('After a project is built, who owns the copyright in the architect\'s drawings under standard agreements?', ['The owner', 'The contractor', 'The architect', 'The building department'], 2, 'The architect keeps copyright; the owner receives a license to use the documents for that project.'),
    ],
  },
  {
    section: 'Project Execution', title: 'Keeping the project moving', minutes: 12,
    intro: 'Execution is the day-to-day work of running a project: meetings, decisions, communication, and keeping cost and schedule in line with the design.',
    parts: [
      { h: 'Communication', p: [
        'Good project managers write things down. Meeting minutes go out within a day or two and record decisions, action items, who is responsible and by when. Owner decisions that change scope, cost or time should be confirmed in writing.',
        'During design the architect coordinates with consultants regularly, often weekly, and tracks open questions in a log.',
      ] },
      { h: 'Managing the owner\'s budget', p: [
        'The architect estimates or reviews cost at each phase. If the estimate exceeds the owner\'s budget, the owner chooses: raise the budget, change the scope or quality, or rebid. Under standard agreements, if bids come in over a fixed budget, the architect may have to revise the documents to bring the cost down without added fee.',
        'Value engineering looks for lower-cost ways to deliver the same function, not simply cutting features.',
      ] },
      { h: 'Approvals and permits', p: [
        'The PM plans for zoning reviews, design review boards, permits and utility approvals in the schedule. Delays in approvals are among the most common causes of late projects.',
      ] },
      { h: 'Earned value', p: [
        'Earned value compares three numbers: planned value (work scheduled to date), earned value (work actually done, priced at budget) and actual cost. Cost variance = earned value − actual cost; schedule variance = earned value − planned value. Negative numbers mean over budget or behind schedule.',
      ] },
    ],
    example: { title: 'Earned value check', steps: [
      'Budget for the phase: $100,000. By now, 50% should be done (planned value $50,000).',
      'Only 40% is done (earned value $40,000), and $48,000 has been spent (actual cost).',
      'Cost variance = $40,000 − $48,000 = −$8,000 (over budget). Schedule variance = $40,000 − $50,000 = −$10,000 (behind).',
    ] },
    takeaways: [
      'Record decisions and action items in minutes; confirm scope, cost and time changes in writing.',
      'If estimates exceed the budget, the owner decides how to respond.',
      'Value engineering keeps function while lowering cost.',
      'Cost variance = EV − AC; schedule variance = EV − PV. Negative is bad.',
    ],
    quiz: [
      S('Planned value is $60,000, earned value is $50,000 and actual cost is $55,000. What is the cost variance?', ['+$5,000', '−$5,000', '−$10,000', '+$10,000'], 1, 'Cost variance = EV − AC = $50,000 − $55,000 = −$5,000, so the work is over budget.'),
      S('In the same situation, what is the schedule variance?', ['−$10,000', '+$10,000', '−$5,000', '$0'], 0, 'Schedule variance = EV − PV = $50,000 − $60,000 = −$10,000: behind schedule.'),
      S('Design development estimates come in 12% over the owner\'s budget. What should happen next?', ['The architect quietly removes features', 'The owner decides whether to raise the budget, reduce scope or quality, or take another approach', 'The contractor sets a new budget', 'Nothing until bids come in'], 1, 'The owner controls the budget and program, so the owner decides how to bring cost and budget back together, with the architect\'s advice.'),
      M('What belongs in good meeting minutes? Select all that apply.', ['Decisions made', 'Action items with who is responsible', 'Due dates', 'A word-for-word transcript'], [0, 1, 2], 'Minutes record decisions, action items, responsibility and dates. A transcript is unnecessary.'),
    ],
  },
  {
    section: 'Project Quality Control', title: 'Checking the work before it goes out', minutes: 10,
    intro: 'Quality control catches errors while they are cheap to fix. PjM expects you to know how firms review documents, coordinate disciplines and manage risk on a project.',
    parts: [
      { h: 'Quality control versus quality assurance', p: [
        'Quality assurance is the system: standards, checklists, procedures and training that make good work likely. Quality control is the checking: reviewing a specific set of documents to find and fix problems.',
      ] },
      { h: 'Reviews at milestones', list: [
        'Schedule reviews at the end of each phase (for example 50% and 95% construction documents).',
        'Use reviewers who did not draw the set: a fresh eye catches more.',
        'Check code compliance, coordination between architectural, structural and MEP drawings, consistency between drawings and specifications, and constructability.',
        'Track comments to closure so nothing is lost.',
      ] },
      { h: 'Coordination with BIM', p: [
        'Clash detection in a combined model finds conflicts such as ducts running through beams before they reach the field. It does not replace a careful human review of the documents.',
      ] },
      { h: 'Risk on the project', p: [
        'Most claims come from a few causes: poor communication, unclear scope, client expectations that were never written down, and coordination errors. Clear documentation, written confirmation of decisions, and following the firm\'s quality procedures are the best defenses.',
      ] },
    ],
    example: { title: 'Cost of a late fix', steps: [
      'A door swing conflicts with a column. Caught at a 50% CD review, the fix is an hour of drafting.',
      'Caught during construction, it becomes an RFI, a change, possibly demolition, and a delay.',
      'Early, independent reviews are the cheapest insurance a firm can buy.',
    ] },
    takeaways: [
      'QA is the system; QC is the checking of a specific set.',
      'Review at milestones, with someone who did not draw the set.',
      'Check codes, coordination, drawings against specs, and constructability.',
      'Clash detection helps but does not replace human review.',
    ],
    quiz: [
      S('What is the difference between quality assurance and quality control?', ['They are the same thing', 'QA is the firm\'s system of standards and procedures; QC is checking specific documents', 'QA is done by the contractor; QC by the architect', 'QC is only for BIM projects'], 1, 'Quality assurance sets the system that prevents errors; quality control checks the actual work.'),
      S('Who is best placed to do a quality control review of a drawing set?', ['The person who drew it', 'An experienced reviewer who did not work on the set', 'The owner', 'The building official'], 1, 'An independent reviewer brings a fresh eye and catches errors the author no longer sees.'),
      M('What should a construction documents review check? Select all that apply.', ['Code compliance', 'Coordination between disciplines', 'Consistency between drawings and specifications', 'The contractor\'s profit margin'], [0, 1, 2], 'Reviews look at codes, coordination, drawings against specs and constructability; the contractor\'s profit is not the architect\'s concern.'),
      S('A BIM clash report shows no conflicts. What should the team conclude?', ['The documents are complete and correct', 'Modeled elements don\'t collide, but the documents still need a human review', 'No more coordination is needed', 'The contractor is responsible for any errors'], 1, 'Clash detection only checks what was modeled. A careful review is still needed for everything else.'),
    ],
  },
];
