// CE lessons 5 to 12. Each teaches the practice and exam questions listed for it in units.js.
export default [
  { // l5
    section: 'Preconstruction Activities', title: 'Comparing bids and choosing a contractor', minutes: 12,
    intro: 'Opening bids is only the start. This lesson covers alternates, allowances and unit prices, responsive and responsible bidders, bid mistakes, prequalification and cost cutting after bids.',
    parts: [
      { h: 'Bid items', list: [
        'Alternate: a defined change the owner may accept, priced as an add or deduct.',
        'Allowance: a stated sum every bidder carries for something not yet chosen, such as carpet.',
        'Unit price: a price per unit for work whose quantity is unknown, such as removing unsuitable soil per cubic yard.',
        'Compare bids with the accepted alternates: A $2,450,000 + $60,000 = $2,510,000 beats B $2,400,000 + $120,000 = $2,520,000.',
      ] },
      { h: 'Who can win', p: [
        'A responsive bid follows the bidding requirements and documents without material changes (forms, bond, acknowledged addenda). A responsible bidder is able to do the work. Public owners award to the lowest responsive, responsible bidder.',
        'Public owners may prequalify contractors on experience, bonding capacity and finances before bidding a complex project.',
        'A bidder who finds a clear clerical error after opening may usually ask to withdraw, with evidence; it can\'t raise its price and stay in.',
      ] },
      { h: 'Changing documents and costs', p: [
        'Before bids or the contract, changes are issued by addendum; after the contract is signed, by change order.',
        'If bids exceed the budget and the owner asks the low bidder for savings (value engineering), the architect checks each proposal for function, quality, code compliance and effects on other systems.',
      ] },
    ],
    takeaways: ['Compare bids including accepted alternates.', 'Award to the lowest responsive, responsible bidder.', 'Addenda before the contract, change orders after; review value engineering carefully.'],
    quiz: [],
  },
  { // l6
    section: 'Preconstruction Activities', title: 'Bonds, retainage and getting started', minutes: 10,
    intro: 'Bonds and retainage protect the owner, and the first meetings set the rules of the road. This lesson covers the three bonds, retainage, the pre-bid conference, the notice to proceed and the preconstruction meeting.',
    parts: [
      { h: 'Bonds', list: [
        'Bid bond: guarantees the bidder will sign the contract and provide the required bonds if awarded.',
        'Performance bond: guarantees the work will be completed.',
        'Payment bond: guarantees subcontractors and suppliers are paid, which also protects the owner\'s property from liens.',
      ] },
      { h: 'Retainage', p: [
        'Retainage is part of each progress payment (often 5% or 10%) held back until the work is complete, as security for finishing and correcting it.',
      ] },
      { h: 'Meetings and the start', p: [
        'A pre-bid conference explains the project and bidding requirements; any changes or clarifications go out in writing by addendum so every bidder has them.',
        'The notice to proceed tells the contractor to start and usually starts the contract time, which drives completion dates and liquidated damages.',
        'The preconstruction meeting sets contacts and communication, procedures for submittals, RFIs, changes and payment, and site use, safety and schedule.',
      ] },
    ],
    takeaways: ['Bid, performance and payment bonds each protect a different thing.', 'Retainage is held back until completion.', 'The notice to proceed starts the clock; the preconstruction meeting sets procedures.'],
    quiz: [],
  },
  { // l7
    section: 'Construction Observation', title: 'Testing, inspections and mockups', minutes: 12,
    intro: 'Tests and inspections show whether the work meets the documents. This lesson covers concrete tests, who hires the testing agency, Florida\'s threshold inspections, mockups, slab moisture and delegated design.',
    parts: [
      { h: 'Concrete', p: [
        'A slump test on site checks the workability (consistency) of fresh concrete. Strength is checked with cylinders, usually at 28 days.',
        'ACI 318 accepts concrete when every average of three consecutive strength tests meets the specified strength and no single test is more than 500 psi below it (for strengths up to 5,000 psi). Tests of 3,800, 4,100 and 4,200 psi average 4,033 and pass for 4,000 psi concrete.',
      ] },
      { h: 'Who tests and inspects', p: [
        'Under A201 the owner usually hires and pays the testing agency, so results are independent of the builder.',
        'Florida threshold buildings (for example more than three stories or 50 feet tall) need a special inspector (threshold inspector) to inspect the structural work under an approved inspection plan.',
      ] },
      { h: 'Standards and specialties', list: [
        'Mockups set the standard for materials and workmanship before the full work proceeds.',
        'Before vinyl flooring goes on a new slab, moisture testing (such as relative humidity probes) checks that adhesives won\'t fail.',
        'Delegated design: the contractor\'s licensed engineer designs a system such as fire sprinklers; the architect reviews it for general conformance and may rely on it.',
      ] },
    ],
    takeaways: ['Slump = workability; cylinders = strength; know the ACI acceptance rule.', 'The owner hires the testing agency; Florida threshold buildings need a special inspector.', 'Mockups set the standard; test slabs for moisture; delegated design is the contractor\'s engineer\'s.'],
    quiz: [],
  },
  { // l8
    section: 'Construction Observation', title: 'Nonconforming work, covered work and safety', minutes: 12,
    intro: 'Site visits find problems. This lesson covers what the architect does about nonconforming work, who pays to uncover work, what to do about safety hazards and what to record.',
    parts: [
      { h: 'The purpose of site visits', p: [
        'Under A201 the architect visits to become familiar with the progress and quality of the work and to determine whether it generally follows the documents. Visits are not exhaustive or continuous inspections, and the architect doesn\'t direct means and methods.',
      ] },
      { h: 'When the work doesn\'t conform', list: [
        'The architect may reject work that doesn\'t conform and informs the owner and contractor; how to fix it is up to the contractor.',
        'Wrong products (windows that aren\'t the approved ones): notify the contractor the work doesn\'t conform and may be rejected; substitutions follow the specified procedure.',
        'Structural work that doesn\'t match the approved shop drawings, such as steel connections, goes to the structural engineer for review.',
        'Check built work against code: commercial stairs need risers of 7 inches or less, treads of 11 inches or more, handrails at 34 to 38 inches and guards at least 42 inches. A 36-inch guard fails.',
        'Ponding after rain shows an area that doesn\'t slope to a drain or scupper; report it so the design team can resolve it.',
      ] },
      { h: 'Covered work and safety', p: [
        'Work covered after the architect asked to see it must be uncovered and replaced at the contractor\'s expense. If the architect didn\'t ask and the uncovered work conforms, the owner pays by change order; if it doesn\'t conform, the contractor pays.',
        'The contractor is responsible for site safety. An architect who sees an imminent danger, such as workers in an unshored trench, warns the superintendent at once, notifies the owner and records it.',
        'Field reports record the date, weather, work in progress, nonconforming work and photographs, never directions on how to do the work.',
      ] },
    ],
    takeaways: ['Visits check general conformance; the architect may reject nonconforming work.', 'Who pays to uncover work depends on whether the architect asked first and whether it conforms.', 'The contractor owns safety, but warn of imminent danger and document it.'],
    quiz: [],
  },
  { // l9
    section: 'Administrative Procedures & Protocols', title: 'Payment applications', minutes: 13,
    intro: 'Every month the contractor asks to be paid and the architect certifies how much. This lesson covers the schedule of values, the arithmetic, what certification means and when to withhold.',
    parts: [
      { h: 'The schedule of values', p: [
        'Before the first payment the contractor divides the contract sum among parts of the work. Each application reports progress against these lines. No line may exceed its scheduled value without a change order: masonry billed at $198,000 against $180,000 must be questioned.',
      ] },
      { h: 'The arithmetic', list: [
        'Completed and stored to date, less retainage, less previous payments = payment due.',
        '$400,000 + $20,000 stored = $420,000; less 10% = $378,000; less $250,000 paid = $128,000.',
        '$600,000 less 5% = $570,000; less $500,000 = $70,000.',
        'Percent complete = completed and stored ÷ contract sum: $2,520,000 ÷ $4,200,000 = 60%.',
      ] },
      { h: 'Certifying and withholding', p: [
        'The architect reviews and certifies payment applications. Certification represents that, based on site visits and the application, the work has progressed as stated and generally conforms; it is not an exhaustive inspection or a check of how the contractor uses the money.',
        'The architect may withhold for reasons tied to the contractor\'s performance: defective work not fixed, failure to pay subcontractors, third-party claims, damage, or reasonable evidence the work can\'t be finished for the unpaid balance. The owner\'s cash problems aren\'t a reason.',
        'Paying for materials stored off site needs the owner\'s prior approval and protection such as insurance and transfer of title.',
      ] },
    ],
    takeaways: ['Payment due = completed and stored − retainage − previous payments.', 'No line may exceed its scheduled value.', 'Certification is based on observation; withhold only for listed reasons.'],
    quiz: [],
  },
  { // l10
    section: 'Administrative Procedures & Protocols', title: 'Changes, claims and time', minutes: 13,
    intro: 'Changes are normal; disputes come from handling them badly. This lesson covers change documents, contract sum and time arithmetic, claims, delays and liquidated damages, substitutions and logs.',
    parts: [
      { h: 'The change documents', list: [
        'Change order: changes the sum or time, signed by owner, contractor and architect.',
        'Construction change directive: signed by owner and architect, directs a change before the sum or time is agreed.',
        'Minor change in the work (often by architect\'s supplemental instructions): ordered by the architect alone when it doesn\'t affect sum or time and fits the documents\' intent.',
        'RFI response: clarifies or interprets the documents. If it changes cost or time, follow up with a change order or directive.',
      ] },
      { h: 'Sum, time and delays', p: [
        'New contract sum = original ± change orders: $2,000,000 + $35,000 − $10,000 + $18,500 = $2,043,500. New contract time = original + added days: 365 + 10 + 5 = 380.',
        'Abnormal weather, like an unusually severe hurricane season, can justify more time if it actually delayed critical work and is documented.',
        'Liquidated damages are an agreed daily amount the contractor owes for finishing late: 12 days late at $1,000 a day is $12,000.',
      ] },
      { h: 'Claims, substitutions and logs', p: [
        'Under A201, claims must be made within 21 days of the event (or of first recognizing it). The architect is the default Initial Decision Maker.',
        'A substitution after the contract follows the Division 01 procedure: the contractor shows the product is equal, the architect evaluates it, and acceptance is documented, often by change order.',
        'A submittal log tracks each submittal\'s dates, reviewer and status, keeping long-lead items moving.',
      ] },
    ],
    takeaways: ['CO = agreed; CCD = directed first; minor change = architect alone.', 'Add change orders to get the new sum and time; LDs = days late × daily rate.', 'Claims within 21 days; the architect is the default Initial Decision Maker.'],
    quiz: [],
  },
  { // l11
    section: 'Project Closeout & Evaluation', title: 'Closeout and final payment', minutes: 11,
    intro: 'The last steps of a project transfer the building to the owner and settle accounts. This lesson covers the punch list, the certificate of substantial completion, closeout documents and final payment.',
    parts: [
      { h: 'Substantial completion', p: [
        'The contractor prepares a punch list of items to finish or correct; the architect inspects and adds items.',
        'The certificate of substantial completion establishes the date (which stops liquidated damages and starts warranties), who is responsible for security, maintenance, utilities and insurance, and the time to finish the punch list. Payment then is the balance less amounts held for incomplete work, not all retainage at once.',
      ] },
      { h: 'Closeout documents', list: [
        'Record drawings, kept up to date on site by the contractor, showing changes made in the field.',
        'Warranties, and operation and maintenance manuals with training for the owner\'s staff.',
        'Final lien releases or waivers.',
      ] },
      { h: 'Final payment', p: [
        'After the final inspection finds the work complete and the closeout documents are in, the architect issues the final certificate for payment. A201 requires an affidavit that payrolls and bills are paid, consent of surety (if bonded) and evidence that required insurance remains in force.',
      ] },
    ],
    takeaways: ['The contractor writes the punch list; the architect inspects.', 'The substantial completion certificate sets the date and responsibilities.', 'Final payment follows the final inspection, closeout documents and proof bills are paid.'],
    quiz: [],
  },
  { // l12
    section: 'Project Closeout & Evaluation', title: 'Warranties and learning from the project', minutes: 9,
    intro: 'The architect\'s role continues after move-in. This lesson covers the one-year correction period, the 11-month walkthrough and evaluating the finished project.',
    parts: [
      { h: 'The correction period', p: [
        'Under A201 the contractor must correct defective work found within one year of substantial completion (longer warranties may apply to particular products).',
        'An 11-month walkthrough with owner and contractor catches problems while the contractor still must fix them.',
      ] },
      { h: 'Running the building', p: [
        'O&M manuals and training help the owner\'s staff run the building as designed; commissioning reports confirm systems perform.',
      ] },
      { h: 'Learning from it', list: [
        'Post-occupancy evaluation: survey occupants and measure performance.',
        'Lessons-learned meetings with the team.',
        'Updating standard details and checklists.',
      ] },
    ],
    takeaways: ['The one-year correction period starts at substantial completion.', 'Walk the building at 11 months.', 'Evaluate and record lessons for the next project.'],
    quiz: [],
  },
];
