// Construction & Evaluation (CE): bidding, construction administration and closeout.
const S = (prompt, choices, answer, explain) => ({ type: 'single', prompt, choices, answer: [answer], explain });
const M = (prompt, choices, answer, explain) => ({ type: 'multi', prompt, choices, answer, explain });

export default [
  {
    section: 'Preconstruction Activities', title: 'Bidding, negotiation and getting started', minutes: 12,
    intro: 'Between finished documents and the first shovel, the architect helps the owner choose a contractor and set the project up for construction.',
    parts: [
      { h: 'Bidding', p: [
        'In competitive bidding, the documents go to bidders with instructions to bidders, a bid form and the bidding schedule. Public work usually must be advertised and open to all qualified bidders; private owners can invite a short list of prequalified contractors.',
        'During bidding, the architect answers questions through addenda issued to every bidder, so all bid on the same information. The architect never gives one bidder information that others don\'t get.',
      ] },
      { h: 'Bonds and security', list: [
        'Bid security (a bid bond, often 5% to 10% of the bid) guarantees the low bidder will sign the contract.',
        'Performance bond: a surety guarantees the contractor will finish the work.',
        'Payment bond: a surety guarantees subcontractors and suppliers will be paid. Florida requires both on most public projects.',
      ] },
      { h: 'Evaluating bids', p: [
        'The architect helps check bids for completeness, mistakes and responsiveness. The owner usually awards to the lowest responsive, responsible bidder. If all bids exceed the budget, the owner may increase funding, negotiate, rebid, or have the architect revise the documents.',
        'Alternates and unit prices on the bid form let the owner adjust scope and compare prices fairly.',
      ] },
      { h: 'Before work starts', p: [
        'A preconstruction conference sets procedures: lines of communication, submittal and RFI handling, payment application schedule, site use and safety. The owner issues a notice to proceed, which usually starts the contract time.',
      ] },
    ],
    example: { title: 'Lowest responsive bid with alternates', steps: [
      'Base bids: A $2,450,000, B $2,410,000, C $2,480,000. Alternate 1 (add a canopy): A +$60,000, B +$110,000, C +$40,000.',
      'Base only: B is low at $2,410,000.',
      'Base plus Alternate 1: A $2,510,000, B $2,520,000, C $2,520,000, so A becomes low. The owner must decide on alternates before comparing.',
    ] },
    takeaways: [
      'Answer bidder questions only by addenda to everyone.',
      'Bid bond: the bidder will sign; performance bond: the work will be finished; payment bond: subs will be paid.',
      'Award goes to the lowest responsive, responsible bidder.',
      'The notice to proceed usually starts the contract time.',
    ],
    quiz: [
      S('A bidder calls the architect with a question about the documents. What should the architect do?', ['Answer the bidder privately', 'Answer through an addendum issued to all bidders', 'Ignore it', 'Tell the bidder to guess'], 1, 'All bidders must get the same information, so clarifications go out by addendum.'),
      S('Which bond guarantees that subcontractors and suppliers will be paid?', ['Bid bond', 'Performance bond', 'Payment bond', 'License bond'], 2, 'A payment bond protects subcontractors and suppliers. A performance bond guarantees completion of the work.'),
      M('If all bids exceed the owner\'s budget, what can the owner do? Select all that apply.', ['Increase the budget', 'Rebid the project', 'Have the architect revise the documents to reduce cost', 'Award to the low bidder at a lower price than it bid'], [0, 1, 2], 'The owner can add funds, rebid, negotiate or revise the scope. It can\'t force a bidder to take less than its bid.'),
      S('What usually starts the contract time for construction?', ['The bid opening', 'The notice to proceed', 'The architect\'s first site visit', 'Substantial completion'], 1, 'The contract time typically runs from the date in the notice to proceed.'),
    ],
  },
  {
    section: 'Construction Observation', title: 'Site visits and what the architect sees', minutes: 13,
    intro: 'During construction the architect visits the site to learn whether the work is progressing in line with the contract documents. CE tests what that role includes and, just as important, what it doesn\'t.',
    parts: [
      { h: 'The architect\'s role on site', p: [
        'Under the standard General Conditions, the architect visits at intervals suited to the stage of construction to become familiar with the progress and quality of the work and to determine, in general, if it is being done in accordance with the contract documents. The architect is not required to make exhaustive or continuous inspections.',
        'The architect reports to the owner what is seen, including known deviations and defects, and can reject work that does not conform.',
      ] },
      { h: 'What belongs to the contractor', p: [
        'The contractor alone controls construction means, methods, techniques, sequences and procedures, and is responsible for job site safety. The architect does not direct workers and should not take on safety responsibility, even if it notices a hazard (it should tell the contractor and owner right away).',
      ] },
      { h: 'Tests and inspections', list: [
        'The owner usually hires independent testing agencies (concrete cylinders, soils compaction, special inspections).',
        'Building officials inspect for code compliance.',
        'If the architect orders a test of work that turns out to conform, the owner pays; if it doesn\'t conform, the contractor pays for the test and the correction.',
        'Work covered up before a required observation must be uncovered at the contractor\'s cost.',
      ] },
      { h: 'Field reports', p: [
        'After each visit the architect writes a field report: date, weather, work in progress, observations, nonconforming work, and actions needed. Photographs support the report.',
      ] },
    ],
    example: { title: 'Covered work', steps: [
      'The specifications require the architect to observe wall flashing before brick goes up. The contractor lays the brick first.',
      'The architect can require the brick removed so the flashing can be seen.',
      'Because the work was covered contrary to the requirement, the contractor pays to uncover and replace it, whether or not the flashing turns out right.',
    ] },
    takeaways: [
      'The architect visits periodically; it is not a continuous inspector.',
      'Means, methods, sequences and safety belong to the contractor.',
      'The architect can reject nonconforming work.',
      'Work covered before a required observation is uncovered at the contractor\'s cost.',
    ],
    quiz: [
      S('Who is responsible for job site safety under the standard General Conditions?', ['The architect', 'The owner', 'The contractor', 'The building official'], 2, 'The contractor controls means, methods and safety. The architect should report hazards it sees but does not take on safety responsibility.'),
      S('The architect orders extra testing of concrete, and the results meet the specifications. Who pays for the test?', ['The contractor', 'The owner', 'The architect', 'The testing lab'], 1, 'When additional testing shows the work conforms, the owner pays. If it fails, the contractor pays for the test and the fix.'),
      M('What should an architect\'s field report include? Select all that apply.', ['Work in progress', 'Observed nonconforming work', 'Weather and date', 'Instructions on how crews should sequence the work'], [0, 1, 2], 'Reports record progress, conditions and deviations. Sequencing is the contractor\'s means and methods.'),
      S('How often must the architect visit the site under standard agreements?', ['Continuously', 'At intervals appropriate to the stage of construction, or as agreed', 'Only at substantial completion', 'Never'], 1, 'Site visits are periodic, at intervals suited to the stage of the work, unless the agreement says otherwise.'),
    ],
  },
  {
    section: 'Administrative Procedures & Protocols', title: 'Submittals, changes and payment', minutes: 15,
    intro: 'Most of the architect\'s construction work happens at a desk: reviewing submittals, answering questions, processing changes and certifying payments. This ties with Construction Observation as CE\'s biggest section.',
    parts: [
      { h: 'Submittals', p: [
        'Shop drawings, product data and samples show how the contractor intends to meet the documents. The contractor reviews and approves them first, then sends them on. The architect reviews them only for conformance with the design concept and the information in the contract documents, not for dimensions, quantities or construction methods, and acts within the agreed time.',
        'Submittals are not contract documents, and the architect\'s approval does not authorize changes unless the change is specifically called out and approved.',
      ] },
      { h: 'Requests for information', p: [
        'An RFI is the contractor\'s written question about the documents. The architect answers promptly with an interpretation consistent with the intent of the documents. If the answer changes cost or time, it leads to a change process.',
      ] },
      { h: 'Changes in the work', list: [
        'Change order: a written change to the work, contract sum and/or time, signed by owner, contractor and architect.',
        'Construction change directive: the owner and architect direct a change before cost or time is agreed; the contractor proceeds and the price is settled later.',
        'Architect\'s supplemental instructions (minor changes): changes that don\'t affect cost or time and fit the intent of the documents, issued by the architect alone.',
      ] },
      { h: 'Payment', p: [
        'The contractor submits an application for payment, usually monthly, against the schedule of values. The architect reviews it, compares it with what was observed, and issues a certificate for payment for the amount it believes is due. Retainage (often 10%, reduced to 5% around halfway in Florida public work) is held until completion.',
        'Certifying payment is not a guarantee that the work is complete or correct; it is the architect\'s opinion, to the best of its knowledge from site visits.',
      ] },
    ],
    example: { title: 'A payment application', steps: [
      'Contract sum $1,000,000. Work completed to date: $400,000. Stored materials: $20,000. Retainage 10%.',
      'Total earned = $420,000. Less retainage $42,000 = $378,000.',
      'Less previous payments of $225,000: amount due this period = $153,000.',
    ] },
    takeaways: [
      'Submittal review is for conformance with design intent, not dimensions, quantities or methods.',
      'Change order: signed by all three. CCD: directs a change before price is agreed. ASI: no cost or time change.',
      'Payment certificates are based on the schedule of values, less retainage and previous payments.',
      'Certifying payment is the architect\'s opinion, not a guarantee.',
    ],
    quiz: [
      S('Work completed is $600,000 with $40,000 of stored materials, retainage is 10%, and previous payments total $450,000. What is due this period?', ['$126,000', '$150,000', '$190,000', '$576,000'], 0, 'Earned $640,000 − 10% retainage ($64,000) = $576,000; less $450,000 paid = $126,000.'),
      S('The owner needs a change made right away, but the contractor hasn\'t agreed to the price. Which document lets the work proceed?', ['Change order', 'Construction change directive', 'Addendum', 'Submittal'], 1, 'A construction change directive orders the change now and settles cost and time later.'),
      M('When reviewing shop drawings, what is the architect NOT responsible for checking? Select all that apply.', ['Dimensions to be confirmed in the field', 'Quantities', 'Construction means and methods', 'General conformance with the design concept'], [0, 1, 2], 'The architect checks conformance with the design concept. Dimensions, quantities and methods are the contractor\'s responsibility.'),
      S('Which change can the architect issue alone?', ['A change that adds cost', 'A change that extends the contract time', 'A minor change consistent with the documents\' intent, with no change in cost or time', 'Any change it thinks is best'], 2, 'Minor changes (architect\'s supplemental instructions) don\'t affect cost or time and can be issued by the architect alone.'),
    ],
  },
  {
    section: 'Project Closeout & Evaluation', title: 'Finishing the job and learning from it', minutes: 10,
    intro: 'Closeout turns a construction site into a building the owner can use, and evaluation looks back to see how well it works.',
    parts: [
      { h: 'Substantial completion', p: [
        'When the contractor believes the work is substantially complete, it submits a list of items still to be finished (the punch list). The architect inspects, adds items, and when the work is sufficiently complete for the owner to occupy or use it for its intended purpose, issues a certificate of substantial completion.',
        'The certificate sets the date when warranties usually begin, when the owner takes over utilities, security and insurance, and what remains to be done. It often releases part of the retainage.',
      ] },
      { h: 'Final completion', list: [
        'The contractor finishes the punch list; the architect does a final inspection.',
        'The contractor submits closeout documents: warranties, operation and maintenance manuals, record (as-built) documents, attic stock, lien releases and consent of surety to final payment.',
        'The architect issues the final certificate for payment, releasing the rest of the retainage.',
        'The building official issues a certificate of occupancy (a separate, government approval) when the building meets code.',
      ] },
      { h: 'After occupancy', p: [
        'Commissioning checks that building systems are installed and perform as designed. The architect may visit about 11 months after substantial completion, before the one-year correction period ends, so the owner can report problems the contractor must fix.',
        'A post-occupancy evaluation asks users and measures performance (energy, comfort, how spaces are used) to improve future projects.',
      ] },
    ],
    example: { title: 'Warranty dates', steps: [
      'Substantial completion: March 15. Final completion: April 30.',
      'The contractor\'s one-year correction period runs from March 15 to the following March 15 for most work.',
      'The architect schedules a walk-through in February, before that period ends.',
    ] },
    takeaways: [
      'Substantial completion = the owner can use the building for its intended purpose.',
      'The certificate of substantial completion starts warranties and shifts utilities, security and insurance to the owner.',
      'Final payment needs closeout documents: warranties, O&M manuals, record drawings, lien releases and consent of surety.',
      'Visit about 11 months after substantial completion, before the correction period ends.',
    ],
    quiz: [
      S('What generally starts the contractor\'s one-year correction period?', ['The notice to proceed', 'The date of substantial completion', 'Final payment', 'The certificate of occupancy only'], 1, 'Under standard General Conditions, warranties and the correction period typically begin at substantial completion.'),
      M('Which documents does the contractor provide before final payment? Select all that apply.', ['Warranties', 'Operation and maintenance manuals', 'Lien releases', 'The architect\'s design calculations'], [0, 1, 2], 'Warranties, O&M manuals, record documents, lien releases and consent of surety come from the contractor. Design calculations are the architect\'s.'),
      S('Who issues the certificate of occupancy?', ['The architect', 'The contractor', 'The building official', 'The owner'], 2, 'The certificate of occupancy is a government approval from the building department, separate from the architect\'s certificates.'),
      S('Why might the architect visit about 11 months after substantial completion?', ['To start the warranty', 'To find defects the contractor must correct before the one-year correction period ends', 'To approve the final payment', 'To begin a new project'], 1, 'A visit before the correction period ends lets the owner report problems the contractor is still bound to fix.'),
    ],
  },
];
