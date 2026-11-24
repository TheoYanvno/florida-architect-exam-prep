// PPD lessons 6 to 12. Each teaches the practice and exam questions listed for it in units.js.
export default [
  { // l6
    section: 'Environmental Conditions & Context', title: 'Designing for Florida\'s climate', minutes: 12,
    intro: 'Florida is hot, humid and stormy. This lesson covers climate zones, shading and glass by orientation, comfort, glare, ventilation, stormwater and hurricanes.',
    parts: [
      { h: 'Climate and comfort', p: [
        'Most of Florida is IECC climate zone 2A; Miami-Dade, Broward and Monroe are 1A. Both are hot and humid, so cooling and humidity drive the design.',
        'Comfort depends on air temperature, surface (radiant) temperatures, humidity and air speed, plus clothing and activity.',
        'Natural ventilation moves air but can\'t remove moisture when outdoor air is humid, so mechanical dehumidification is still needed; mixed-mode designs open windows only when conditions allow. Where ventilation is used, narrow floor plates with operable windows on opposite walls work best.',
      ] },
      { h: 'Shading and glass', list: [
        'South: horizontal overhangs block the high summer sun and admit low winter sun.',
        'West and east: vertical fins or less glass, because the low sun gets under overhangs.',
        'North: soft, steady light needs little or no exterior shading.',
        'In a cooling climate, choose glass with a low solar heat gain coefficient (SHGC).',
        'Glare comes from bright sky or sun against darker surroundings; shading, light shelves and lighter interior surfaces reduce it.',
      ] },
      { h: 'Water and wind', p: [
        'Low-impact development manages stormwater close to where it falls with rain gardens, swales and pervious paving.',
        'Coastal buildings must plan for high winds, wind-driven rain and wind-borne debris; the Florida Building Code requires impact-resistant openings or tested protection in wind-borne debris regions.',
      ] },
    ],
    takeaways: ['Florida is zone 2A (1A in the far south): plan for cooling and humidity.', 'Overhangs south, fins or less glass east and west, low-SHGC glass.', 'Manage water at the source and design for hurricanes.'],
    quiz: [],
  },
  { // l7
    section: 'Codes & Regulations', title: 'Egress, separations and building size', minutes: 13,
    intro: 'Code requirements drive plans from the first sketch. This lesson works through occupant loads, exits, egress widths, dead ends, fire-resistance separations and allowable size.',
    parts: [
      { h: 'Occupants and exits', p: [
        'Occupant load = area ÷ load factor: a 3,000 net sq ft banquet room with tables and chairs at 15 is 200 occupants; a 900 sq ft classroom at 20 is 45.',
        'Spaces with up to 49 occupants (in most occupancies, including B and E) may have one exit if travel limits are met; 50 or more need two. On a plan, the large conference room for 80 needs two doors while small offices don\'t.',
        'Stair width: 0.3 inch per occupant (200 × 0.3 = 60 inches); other egress parts 0.2 inch per occupant.',
        'Two exits must be at least one-half the overall diagonal apart, or one-third in a sprinklered building (150 ÷ 3 = 50 feet).',
        'The common path of egress travel is the part of the route before a person has a choice of two separate ways out. A dead end is a corridor that leads only one way; it is generally limited to 20 feet, or 50 feet in sprinklered B, E, F, M, R-1, R-2, S and U buildings.',
      ] },
      { h: 'Separations', list: [
        'Fire wall: divides a structure into separate buildings, from foundation through the roof, and must stay standing if one side collapses.',
        'Fire barrier: encloses exit stairs and shafts and separates occupancies.',
        'Fire partition: separates corridors, dwelling units and tenants.',
        'Separated mixed occupancies put a rated separation between uses (a store below, offices above) so each follows its own rules; nonseparated designs apply the strictest rules throughout.',
      ] },
      { h: 'Size, sprinklers and fixtures', p: [
        'An NFPA 13 sprinkler system generally allows larger allowable areas and heights and longer travel distances. Open frontage on streets or yards adds area. Atriums need sprinklers and usually smoke control.',
        'Fixture counts come from the Florida Building Code, Plumbing, by occupancy and occupant load. Accessible turning space is a 60-inch circle or a T-shape in a 60-inch square.',
      ] },
    ],
    takeaways: ['Occupant load = area ÷ factor; 50 or more needs two exits.', 'Stairs 0.3 in/occupant; exits 1/2 (or 1/3 sprinklered) of the diagonal apart; dead ends 20 or 50 feet.', 'Fire walls make separate buildings; barriers enclose exits and shafts; partitions separate corridors and tenants.'],
    quiz: [],
  },
  { // l8
    section: 'Building Systems, Materials, & Assemblies', title: 'Structure and envelope in depth', minutes: 13,
    intro: 'Choosing structure and envelope means knowing how they work. This lesson covers beams and slabs, lateral systems, long spans, foundations, construction types and envelope basics.',
    parts: [
      { h: 'How members carry load', p: [
        'A simply supported beam under uniform load has its greatest bending moment at midspan, M = wL² ÷ 8 (1 kip/ft over 20 feet = 50 foot-kips), and its greatest shear at the supports.',
        'A one-way slab (a panel about twice as long as wide or more) carries load in the short direction to the beams along the long sides.',
        'Lateral systems: shear walls resist forces in their own plane; braced frames use diagonals forming triangles; moment frames use rigid beam-column joints and keep bays open.',
        'Long spans, such as a 120-foot gym roof, suit long-span steel trusses, joist girders or space frames.',
        'Where good soil lies deep under soft clay, use deep foundations (piles or drilled piers) to reach it.',
      ] },
      { h: 'Construction type and fire', p: [
        'Type V allows combustible structure such as wood framing. Type IIB must be noncombustible but needs no fire ratings, so wood framing isn\'t allowed. Types I and II (except IIB) need rated frames, so steel gets spray-applied or intumescent fireproofing because it loses strength in fire.',
      ] },
      { h: 'Envelope basics', list: [
        'R-values in series add: R-13 cavity + R-5 continuous = R-18 nominal.',
        'U-factor measures heat flow through the whole window (lower is better).',
        'A rainscreen sheds most rain with cladding and drains a vented cavity in front of a water-resistive barrier.',
        'TPO and PVC are single-ply low-slope membranes; built-up roofing uses many plies.',
        'Heavy thermal mass helps most in hot, dry climates with large day-night swings.',
      ] },
    ],
    takeaways: ['Max moment wL²/8 at midspan; one-way slabs span short.', 'Shear walls, braces, moment frames; deep foundations for deep good soil.', 'Type V is combustible, IIB noncombustible; know R, U, rainscreens and TPO.'],
    quiz: [],
  },
  { // l9
    section: 'Building Systems, Materials, & Assemblies', title: 'HVAC and building services', minutes: 11,
    intro: 'Mechanical systems use space and energy and affect every floor. This lesson compares common HVAC systems and covers other services that shape planning.',
    parts: [
      { h: 'HVAC systems', list: [
        'VAV (variable air volume): varies airflow to each zone to match the load, saving fan energy.',
        'DOAS (dedicated outdoor air system): conditions and dries all ventilation air separately, ideal for humid climates.',
        'ERV (energy recovery ventilator): transfers heat and moisture between exhaust and incoming air.',
        'Chilled beams: cool with water in ceiling units, using little fan energy; in humid climates they need dry ventilation air to avoid condensation.',
        'VRF (variable refrigerant flow) with heat recovery: pipes refrigerant to indoor units so some zones heat while others cool.',
      ] },
      { h: 'Space for services', p: [
        'Mechanical, electrical and shaft space usually takes several percent of a building\'s gross area, roughly 5% to 10%. Plan it early.',
        'Low-rise buildings use hydraulic or machine-room-less traction elevators; high-speed traction is for tall buildings.',
        'A solar-ready roof plans structure, clear area, orientation and conduit paths now so panels are cheap to add later.',
      ] },
      { h: 'Choosing a system', list: [
        'Humid climate: separate the ventilation air (DOAS, often with an ERV) from space cooling.',
        'Many zones with different needs at once: VAV, or VRF with heat recovery.',
        'Tight floor-to-floor heights: water-based systems like chilled beams move heat in smaller pipes than air needs in ducts.',
      ] },
    ],
    takeaways: ['VAV saves fan energy; DOAS and ERV handle humid ventilation air.', 'Chilled beams need dry air; VRF can heat and cool at once.', 'Reserve mechanical space early; plan elevators and solar-ready roofs.'],
    quiz: [],
  },
  { // l10
    section: 'Project Integration of Program & Systems', title: 'Cores, grids and stacking', minutes: 13,
    intro: 'A building\'s plan has to work for the program, the structure and the systems at once. This lesson covers floor plates, cores, structural grids, heights and how uses are arranged.',
    parts: [
      { h: 'Floor plates and cores', p: [
        'Floor area = length × width: 120 × 90 = 10,800 sq ft. Office floor plates are often 40 to 45 feet deep from core to window, so daylight and views reach most workspaces.',
        'Place the core (stairs, elevators, restrooms, shafts) to keep travel short, leave flexible space and meet exit spacing, and stack it directly floor to floor so shafts and plumbing run straight. Core share = core ÷ floor area: 2,100 ÷ 15,000 = 14%.',
        'Compact forms (less surface for the volume) gain and lose less heat and cost less to enclose; thinner forms gain daylight.',
      ] },
      { h: 'Grids and heights', p: [
        'A parking bay of 18-foot stalls on each side of a 24-foot aisle needs a 60-foot span. Under an office, the grid must fit both the parking module and the office planning module, or transfer structure is needed.',
        'Floor-to-floor = ceiling height + plenum + structure: 9\'-0" + 2\'-6" + 2\'-0" = 13\'-6"; 9\'-6" + 2\'-0" + 2\'-6" = 14\'-0".',
      ] },
      { h: 'Arranging uses', list: [
        'Busy public spaces (a library\'s main rooms) near the entry; quiet spaces away from traffic.',
        'Loading docks and service entrances away from the public entrance.',
        'Some programs need separate circulation, such as public, judges and people in custody in a courthouse.',
        'Racetrack nursing units around a central station shorten walking and keep patients visible.',
        'Heavy or crowded uses high in a tower (a 12th-floor conference center) need more exits, elevators and structure.',
        'An atrium needs sprinklers and usually smoke control.',
      ] },
    ],
    takeaways: ['Keep floor plates moderate and cores stacked.', 'Grids must suit every use they pass through; add up floor-to-floor heights.', 'Arrange public, service and secure paths so they don\'t cross.'],
    quiz: [],
  },
  { // l11
    section: 'Project Integration of Program & Systems', title: 'Sound, vibration, light and coordination', minutes: 12,
    intro: 'Integration problems often show up as noise, vibration, glare or clashes. This lesson covers acoustic privacy, vibration, daylight depth, early collaboration and energy decisions.',
    parts: [
      { h: 'Sound and vibration', list: [
        'Sound privacy: run walls to the structure above, insulate the cavity, seal gaps, and use solid-core doors with seals; add sound masking in waiting areas. Shared plenums and hollow doors with big undercuts let sound through.',
        'Classrooms: quiet HVAC kept away from rooms, absorptive ceilings and walls with a high STC.',
        'Don\'t put an air handler over a recording studio: relocate it or isolate it with vibration mounts and acoustic separation.',
        'Labs with sensitive equipment need shorter spans and stiffer, heavier floors.',
      ] },
      { h: 'Daylight and energy', p: [
        'Useful side daylight reaches about 1.5 to 2 times the window head height (10-foot heads: 15 to 20 feet). A light shelf shades the lower window and bounces light off its top onto the ceiling and deeper into the room.',
        'Orientation, right-sized glazing by facade, a tight envelope and efficient systems set most energy use. In a hot, humid climate, cut cooling with exterior shading on east and west and low-SHGC glass.',
      ] },
      { h: 'Working together', p: [
        'Bring structural and mechanical engineers in during schematic design for the grid, floor-to-floor height, shafts, mechanical rooms and system type.',
        'Clash detection in BIM finds where ducts, pipes and structure collide before construction. Plan service clearances and replacement routes so equipment can be maintained.',
      ] },
    ],
    takeaways: ['Continuous, sealed separations and quiet systems give privacy.', 'Daylight reaches 1.5 to 2 times the head height; light shelves push it deeper.', 'Engineers early, clash detection and maintenance routes.'],
    quiz: [],
  },
  { // l12
    section: 'Project Costs & Budgeting', title: 'Estimates, escalation and value', minutes: 11,
    intro: 'A design must fit its budget. This lesson covers estimating methods, budgets per square foot, escalation, contingencies, soft costs, value engineering and life-cycle cost.',
    parts: [
      { h: 'Estimating', p: [
        'Early in schematic design, use cost per square foot (or per unit, such as per bed) from similar buildings. Detailed quantity take-offs come later.',
        'Budget per square foot = budget ÷ area: $12,000,000 ÷ 40,000 = $300. Budget = area × cost: 18,000 × $360 = $6,480,000.',
        'Escalation compounds: $10,000,000 × 1.04 × 1.04 = $10,816,000 two years out.',
      ] },
      { h: 'What else to budget', list: [
        'Design contingency: covers details not yet drawn and shrinks as documents develop.',
        'Soft costs: design fees, permits, testing, furniture and financing.',
      ] },
      { h: 'Value', p: [
        'Value engineering studies how to get the required function at the lowest life-cycle cost without lowering quality.',
        'Life-cycle cost analysis compares options by their total cost over time (first cost, energy, maintenance and replacement), such as two roofing systems.',
      ] },
    ],
    takeaways: ['Area-based estimates early, take-offs later.', 'Escalate with compounding; carry design contingency and soft costs.', 'Value engineering and life-cycle cost look at function and total cost.'],
    quiz: [],
  },
];
