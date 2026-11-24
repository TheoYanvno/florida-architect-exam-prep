// PjM lessons 6 to 12. Each teaches the practice and exam questions listed for it in units.js.
export default [
  { // l6
    section: 'Resource Management', title: 'Labor budgets, hours and weeks', minutes: 11,
    intro: 'A project manager turns a fee into hours, people and weeks. This lesson works through the arithmetic and what to do when the hours start running ahead of the work.',
    parts: [
      { h: 'From fee to hours', p: [
        'Start with the architect\'s own fee: the total fee minus consultants. Split it by phase (for example 15% schematic design, 20% design development, 40% construction documents, 5% bidding, 20% construction administration).',
        'Hours = phase budget ÷ average billing rate. A $36,000 budget at $90 an hour buys 400 hours; $132,000 at $120 an hour buys 1,100.',
      ] },
      { h: 'From hours to weeks', p: [
        'Weeks = hours ÷ (people × hours each gives the project per week). 600 hours with three people at 40 hours a week is 600 ÷ 120 = 5 weeks; 1,100 hours with 2.5 people is 1,100 ÷ 100 = 11 weeks.',
        'A schedule share works the same way: if construction documents are 40% of a 30-week schedule, that is 12 weeks.',
      ] },
      { h: 'When hours outrun the work', p: [
        'If 60% of the fee is spent but only 45% of the work is done, find out why first. Then adjust the work plan, talk to firm leadership, and if the owner changed the scope, request additional services.',
        'Catching this early, by comparing hours spent with work completed every week or two, leaves time to recover.',
      ] },
    ],
    example: { title: 'Construction documents', steps: ['Fee $450,000 − consultants $120,000 = $330,000.', 'CD share 40%: $132,000.', '$132,000 ÷ $120 = 1,100 hours; 2.5 people × 40 = 100 hours a week; 11 weeks.'] },
    takeaways: ['Hours = budget ÷ billing rate.', 'Weeks = hours ÷ (people × weekly hours).', 'Compare fee spent with work done, and act early.'],
    quiz: [],
  },
  { // l7
    section: 'Resource Management', title: 'Consultants and staffing decisions', minutes: 10,
    intro: 'The architect leads a team of in-house staff and outside consultants. This lesson covers choosing consultants, writing their agreements, coordinating them and resolving staffing conflicts.',
    parts: [
      { h: 'Choosing consultants', list: [
        'Experience with the building type.',
        'Licensed where the project is located.',
        'Capacity to meet the schedule.',
        'The lowest price alone often costs more later in coordination and changes.',
      ] },
      { h: 'Their agreements', p: [
        'The standard AIA agreement between architect and consultant is C401. It should mirror the services the architect owes the owner, so nothing promised to the owner is missing from the consultant\'s scope.',
        'If the owner wants something not in a consultant\'s scope, such as attending construction meetings, agree on it (and any fee) in the consultant agreement before the work, not after.',
        'The architect is responsible to the owner for coordinating its consultants\' work.',
      ] },
      { h: 'Staffing plans and conflicts', p: [
        'A staffing (resource) plan shows who works on the project, in which roles and for how many hours in each phase. It reveals overloads and gaps early.',
        'When two projects need the same person in the same week, raise it with firm leadership. Staffing across projects is a firm-level decision based on deadlines, clients and fees.',
      ] },
    ],
    takeaways: ['Pick consultants for experience, licensure and capacity.', 'C401 should mirror the owner agreement; the architect coordinates consultants.', 'Firm leadership resolves staffing conflicts between projects.'],
    quiz: [],
  },
  { // l8
    section: 'Project Work Planning', title: 'Schedules: critical path, float and milestones', minutes: 12,
    intro: 'A schedule tells everyone what must happen when. This lesson covers work breakdown structures, the critical path, float, milestones, and ways to shorten a schedule.',
    parts: [
      { h: 'Breaking down the work', p: [
        'A work breakdown structure divides the whole scope into smaller tasks that can be staffed, scheduled and budgeted.',
        'The phases of basic services run in order: schematic design, design development, construction documents, bidding or negotiation, construction administration.',
      ] },
      { h: 'Critical path and float', p: [
        'The critical path is the longest chain of dependent activities; it sets the shortest possible project length. Add up its durations to get the project length (for example 2 + 4 + 6 + 8 + 4 = 24 weeks).',
        'Float (slack) is how long an activity off the critical path can slip without delaying the finish. If design development can\'t start until week 6 and the geotechnical report finishes in week 5, the report has one week of float.',
        'A milestone is a key point with no duration, such as the owner\'s approval of design development.',
      ] },
      { h: 'Shortening a schedule', list: [
        'Crashing: adding people or resources to critical activities, usually at extra cost.',
        'Fast-tracking: overlapping phases, at the risk of rework.',
      ] },
    ],
    takeaways: ['WBS splits the work; phases run SD, DD, CD, bidding, CA.', 'Critical path = longest dependent chain; float = slack off it.', 'Crashing adds resources; fast-tracking overlaps work.'],
    quiz: [],
  },
  { // l9
    section: 'Project Work Planning', title: 'Risk, communication and phase approvals', minutes: 10,
    intro: 'Good plans say how the team will talk, what could go wrong and when the owner must decide. This lesson covers the project management plan, the risk register, the communication plan and approvals.',
    parts: [
      { h: 'The project management plan', p: [
        'The work plan defines scope and deliverables for each phase, the schedule and milestones, the fee budget by phase and staff, and how quality and communication will be handled.',
      ] },
      { h: 'Risks and communication', p: [
        'A risk register lists each risk, how likely and serious it is, the response and who owns it. It is updated as the project moves.',
        'A communication plan names the decision makers, how information flows, how often the team meets and how documents are distributed. It prevents conflicting directions.',
      ] },
      { h: 'Approvals between phases', p: [
        'Get the owner\'s written approval of each phase before starting the next, for example design development before construction documents.',
        'If the owner wants to start the next phase before approving the last, explain the risk of rework and get the approval, or a written decision to proceed at the owner\'s risk.',
      ] },
    ],
    takeaways: ['The work plan covers scope, schedule, budget, quality and communication.', 'Keep a risk register and a communication plan.', 'Get written phase approvals before moving on.'],
    quiz: [],
  },
  { // l10
    section: 'Contracts', title: 'The AIA documents and who does what', minutes: 12,
    intro: 'The AIA documents assign duties among owner, architect and contractor. This lesson covers the main documents, who furnishes what, copyright, changes, budget overruns and disputes.',
    parts: [
      { h: 'The main documents', list: [
        'B101: owner-architect agreement.',
        'A101: owner-contractor agreement for a stipulated sum.',
        'A201: general conditions, which set the rights, duties and relationships of owner, contractor and architect during construction.',
        'C401: architect-consultant agreement.',
      ] },
      { h: 'Who furnishes what', p: [
        'The owner furnishes the site survey and the geotechnical report. The architect coordinates its consultants. Under A201 the contractor controls means and methods and, unless the documents say otherwise, secures and pays for the building permit.',
        'During construction, a change to the contract sum or time agreed and signed by owner, contractor and architect is a change order.',
      ] },
      { h: 'Copyright, budgets and disputes', p: [
        'The architect keeps the copyright in the drawings and specifications (instruments of service) and gives the owner a nonexclusive license to use them for the project. After a termination for convenience, the owner may still use them, subject to the agreement\'s terms and any licensing fee.',
        'If bids exceed the owner\'s budget, B101 lets the owner approve a higher budget, rebid or renegotiate, terminate, or work with the architect to revise the scope. It does not make the architect pay the difference.',
        'Disputes go to mediation first, then to arbitration or litigation as the parties chose.',
      ] },
    ],
    takeaways: ['B101, A101, A201, C401: know which is which.', 'Owner: survey and geotech. Contractor: means, methods and (by default) the permit.', 'The architect keeps copyright; mediation comes before arbitration or court.'],
    quiz: [],
  },
  { // l11
    section: 'Contracts', title: 'Fees, warranties and additional services', minutes: 10,
    intro: 'What the agreement promises and how it pays decide much of a project\'s risk. This lesson covers fee types, the standard of care versus warranties, and additional services.',
    parts: [
      { h: 'Fee types', list: [
        'Stipulated sum: fixed for a defined scope; the firm bears the risk of overruns, so the scope must be clear.',
        'Percentage of construction cost: 7% of a $4,000,000 cost is $280,000.',
        'Hourly, often with a not-to-exceed limit.',
      ] },
      { h: 'Standard of care, not warranties', p: [
        'A standard of care clause states the architect will perform with the skill and care ordinarily used by architects in similar circumstances. It keeps the duty from becoming a guarantee.',
        'A clause that the architect "warrants" code compliance creates liability without negligence, which insurance generally won\'t cover. Push back and use "reasonable care to comply" instead.',
      ] },
      { h: 'Additional services', p: [
        'Schematic design is a basic service. Changes the owner asks for after approving the design, extra analyses beyond basic services, and services after the construction period are additional services.',
        'A new element, such as adding a training tower to a fire station during design development, changes the scope: confirm scope, fee and schedule in writing before starting.',
      ] },
    ],
    takeaways: ['Match the fee type to how well the scope is defined.', 'Promise reasonable care, never a warranty.', 'Changes to approved scope are additional services, agreed in writing first.'],
    quiz: [],
  },
  { // l12
    section: 'Project Execution', title: 'Measuring progress and keeping records', minutes: 12,
    intro: 'A project manager reports where the project stands and keeps a record of what was decided. This lesson covers earned value, logs, minutes, owner reports and handling changes and budget problems.',
    parts: [
      { h: 'Earned value', list: [
        'Planned value (PV): the work scheduled to be done by now, in dollars.',
        'Earned value (EV): the work actually done, in dollars. Actual cost (AC): what has been spent.',
        'Schedule variance = EV − PV ($72,000 − $80,000 = −$8,000: behind). Schedule performance index = EV ÷ PV (40,000 ÷ 50,000 = 0.8: behind).',
        'Cost performance index = EV ÷ AC (45,000 ÷ 50,000 = 0.9; 48,000 ÷ 56,000 ≈ 0.86): below 1.0 means over budget.',
        'On a chart, the month the EV line drops below the PV line is when the project fell behind.',
      ] },
      { h: 'Records that protect everyone', list: [
        'Meeting minutes: sent promptly by the architect, with a request for corrections.',
        'A decision log: each decision, who made it and when.',
        'An RFI log: when each was sent and answered. If answers are due in 7 days, an RFI open 10 days is overdue.',
        'A monthly owner report: progress against schedule, decisions needed, open issues and risks (not the firm\'s internal finances).',
      ] },
      { h: 'Changes and budgets', p: [
        'If the owner asks for a new element, such as a wing that wasn\'t in the program, confirm it in writing and agree on the change in services, fee and schedule first. Requests made directly to staff go through the project manager.',
        'If the estimate comes in over the owner\'s budget, tell the owner right away and present options: reduce scope, adjust quality or raise the budget.',
      ] },
    ],
    takeaways: ['SV = EV − PV; SPI = EV ÷ PV; CPI = EV ÷ AC.', 'Minutes, decision logs and RFI logs keep the record straight.', 'Changes go through the PM and get written agreement; report budget problems at once.'],
    quiz: [],
  },
];
