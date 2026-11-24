// Programming & Analysis (PA): understanding the site, the rules and what the client needs before design.
const S = (prompt, choices, answer, explain) => ({ type: 'single', prompt, choices, answer: [answer], explain });
const M = (prompt, choices, answer, explain) => ({ type: 'multi', prompt, choices, answer, explain });

export default [
  {
    section: 'Environmental & Contextual Conditions', title: 'Reading the site and its surroundings', minutes: 13,
    intro: 'Every project starts with a place: its climate, sun, wind, soil, water, ecology and neighbors. PA tests whether you can read those conditions and let them shape the design.',
    parts: [
      { h: 'Climate and the sun', p: [
        'In the northern hemisphere the sun is always in the southern sky at noon, higher in summer and lower in winter. South-facing glass is easy to shade with horizontal overhangs; east and west glass gets low morning and afternoon sun that overhangs can\'t stop, so vertical fins or limited glazing work better there.',
        'Hot-humid climates like Florida\'s call for shade, cross-ventilation, light colors and raised, well-drained floors. Hot-dry climates use thermal mass and courtyards; cold climates use compact forms and south glass for winter sun.',
      ] },
      { h: 'Wind, water and soil', p: [
        'Prevailing winds bring cooling breezes (and in Florida, hurricanes). Orient openings to catch breezes; use buildings or planting to block winter winds.',
        'Water flows downhill: contours show where it will go. Avoid building in floodplains, keep buildings above the base flood elevation, and plan for stormwater to be held or absorbed on site.',
        'Soils decide foundations. A geotechnical report describes soil bearing capacity, water table and problems such as expansive clay or, in Florida, sinkholes in limestone areas.',
      ] },
      { h: 'Ecology and context', list: [
        'Wetlands, protected species and mature trees can limit where you build.',
        'Neighboring buildings set height, scale, material and street patterns that a new building should respond to.',
        'Historic districts may require design review.',
        'Transit, walking routes and views are part of the site\'s value.',
        'Hard, dark surfaces soak up sun and make cities hotter than the land around them (the urban heat island). Reflective roofs, green roofs, shade trees and light-colored paving reduce it.',
      ] },
      { h: 'Reading topography', p: [
        'Contour lines join points at the same elevation. Closely spaced lines mean steep slopes; widely spaced lines mean gentle slopes. Slope is rise over run: a 5-foot rise over 100 feet is 5%. Slopes up to about 5% are easy to build on and walk; ramps for accessibility max out at 1:12 (8.33%).',
      ] },
    ],
    example: { title: 'Slope between two contours', steps: [
      'Two contours are 2 feet apart in elevation (100 and 102) and 40 feet apart on the plan.',
      'Slope = rise ÷ run = 2 ÷ 40 = 0.05, or 5%.',
      'A path along this line could be a walk without handrails; it is gentler than a 1:12 ramp.',
    ] },
    takeaways: [
      'Shade south glass with overhangs; use vertical fins or less glass on east and west.',
      'Hot-humid design: shade, cross-ventilation, light colors, and stay above flood elevations.',
      'Slope = rise ÷ run; close contours mean steep ground.',
      'A geotechnical report tells you what the soil can carry and where the water table is.',
    ],
    quiz: [
      S('Which facade is easiest to shade with a horizontal overhang in the northern hemisphere?', ['North', 'South', 'East', 'West'], 1, 'The sun is high in the southern sky at midday, so a horizontal overhang on south glass blocks it well. East and west sun is low and needs vertical shading.'),
      S('Contours of 50 and 54 feet are 80 feet apart. What is the slope?', ['2%', '4%', '5%', '8%'], 2, 'Rise 4 feet over 80 feet = 0.05, or 5%.'),
      M('Which strategies suit a hot-humid climate like coastal Florida? Select all that apply.', ['Deep overhangs and shade', 'Cross-ventilation', 'Large unshaded west windows', 'Light-colored roofs'], [0, 1, 3], 'Shade, breezes and reflective roofs reduce heat gain; unshaded west glass makes it worse.'),
      S('Which document tells the design team the soil bearing capacity and depth to groundwater?', ['The boundary survey', 'The geotechnical report', 'The title report', 'The zoning map'], 1, 'The geotechnical report covers soils, bearing capacity, groundwater and recommendations for foundations.'),
    ],
  },
  {
    section: 'Codes & Regulations', title: 'Zoning and the rules that shape a site', minutes: 13,
    intro: 'Before a building is designed, zoning and land-use rules decide what can go on a site and how big it can be. PA asks you to apply those rules to real numbers.',
    parts: [
      { h: 'Zoning basics', p: [
        'A zoning ordinance divides a city into districts and sets, for each, the allowed uses, maximum height, setbacks, lot coverage, floor area ratio (FAR), and parking. A comprehensive plan sets the long-range vision the zoning carries out.',
        'Setbacks are minimum distances from property lines. The buildable area is what is left after setbacks and easements are taken out.',
      ] },
      { h: 'Floor area ratio and coverage', p: [
        'FAR = gross floor area ÷ lot area. A FAR of 2.0 on a 20,000 sq ft lot allows 40,000 sq ft of floor area, whether as two floors covering the whole lot or four floors covering half of it (if coverage and height allow).',
        'Lot coverage limits the building footprint as a share of the lot. Coverage and FAR together decide how tall a building must go to use its allowed area.',
      ] },
      { h: 'Relief from the rules', list: [
        'Variance: permission to depart from a dimensional rule (like a setback) because of a hardship particular to the property.',
        'Special exception or conditional use: a use allowed in a district only after review and with conditions.',
        'Rezoning: changing the district itself, a legislative decision.',
        'Planned unit development (PUD): a negotiated set of rules for a large site, trading flexibility for public benefits.',
        'Nonconforming use: an existing use that was legal before the rules changed; it may usually continue but not expand.',
      ] },
      { h: 'Other rules on the land', p: [
        'Easements give others rights to use part of a site (utilities, access). Deed restrictions and covenants are private limits recorded with the property. Environmental rules protect wetlands and floodplains, and in Florida, coastal construction control lines limit building near beaches.',
      ] },
      { h: 'The building code and accessibility', p: [
        'Zoning decides what may go on a site; the building code decides how it is built. Early in programming, classify the building by occupancy under the International Building Code (IBC), because the group drives exits, fire protection and allowable size. Assembly is group A: restaurants and bars with 50 or more occupants are A-2 (smaller ones may be classified as B, Business). Offices are B, schools through 12th grade E, stores M, and hotels and apartments R.',
        'Accessibility rules shape the site too. Under the 2010 ADA Standards, an accessible route steeper than 1:20 is a ramp, and a ramp may be no steeper than 1:12 (one inch of rise per foot of run), so the grades between parking, entrances and walks matter from the start.',
      ] },
    ],
    example: { title: 'How tall must it be?', steps: [
      'Lot: 30,000 sq ft. FAR 1.5, maximum lot coverage 40%.',
      'Allowed floor area: 30,000 × 1.5 = 45,000 sq ft. Largest footprint: 30,000 × 0.40 = 12,000 sq ft.',
      'Floors needed to use the full FAR: 45,000 ÷ 12,000 = 3.75, so at least 4 stories (if the height limit allows).',
    ] },
    takeaways: [
      'FAR = gross floor area ÷ lot area.',
      'Buildable area = the lot minus setbacks and easements.',
      'A variance relaxes a dimensional rule for a hardship; a rezoning changes the district.',
      'Nonconforming uses can continue but usually can\'t expand.',
    ],
    quiz: [
      S('A 25,000 sq ft lot has a FAR of 2.4. What is the maximum gross floor area?', ['10,417 sq ft', '27,400 sq ft', '60,000 sq ft', '62,500 sq ft'], 2, '25,000 × 2.4 = 60,000 sq ft of gross floor area.'),
      S('A lot is 40,000 sq ft with a FAR of 1.2 and 30% maximum coverage. What is the fewest number of stories needed to build the full FAR?', ['2', '3', '4', '5'], 2, 'Floor area 48,000 sq ft; footprint up to 12,000 sq ft; 48,000 ÷ 12,000 = 4 stories.'),
      S('An owner\'s narrow lot can\'t meet a side setback without making the building unusable. What should the owner seek?', ['A rezoning', 'A variance', 'A building permit only', 'A certificate of occupancy'], 1, 'A variance relaxes a dimensional requirement because of a hardship unique to the property.'),
      M('Which can limit where a building is placed on a site? Select all that apply.', ['Setbacks', 'Utility easements', 'Deed restrictions', 'The architect\'s fee'], [0, 1, 2], 'Setbacks, easements and recorded restrictions all limit the buildable area.'),
    ],
  },
  {
    section: 'Site Analysis & Programming', title: 'Turning a site into a plan', minutes: 12,
    intro: 'Site analysis gathers what is on and around the site; site programming decides what has to go there. Together they produce a site plan that works.',
    parts: [
      { h: 'Surveys and site information', list: [
        'Boundary survey: property lines, area and easements.',
        'Topographic survey: contours, spot elevations, trees, utilities and existing structures.',
        'Geotechnical report: soils, groundwater and foundation advice.',
        'Utility information: where water, sewer, storm, power, gas and data can connect.',
        'Flood maps (FEMA FIRMs): flood zones and base flood elevation.',
      ] },
      { h: 'Site program', p: [
        'The site program lists everything outdoors the project needs: parking and drives, service and loading, entries and drop-off, outdoor spaces, stormwater areas, and future expansion room.',
        'Parking is a large area: plan roughly 300 to 350 sq ft per space including drive aisles. Accessible spaces are required by the ADA Standards, with at least one van-accessible space.',
      ] },
      { h: 'Placing the building', p: [
        'Put the building where the land is easiest to build (gentle slopes, good soil), away from floodplains and wetlands, oriented for sun and breezes, and with clear, separate routes for cars, service trucks and people on foot. Keep pedestrians from crossing truck routes.',
        'Grade so water flows away from the building: a common guideline is at least 5% slope for the first 10 feet away from foundations.',
      ] },
      { h: 'Stormwater', p: [
        'New pavement and roofs increase runoff. Retention ponds hold water and let it soak in or evaporate; detention ponds hold it and release it slowly. Pervious paving, bioswales and rain gardens reduce runoff at the source.',
      ] },
    ],
    example: { title: 'Sizing a parking lot', steps: [
      'Zoning requires 1 space per 300 sq ft of a 24,000 sq ft office: 24,000 ÷ 300 = 80 spaces.',
      'At about 325 sq ft per space with aisles: 80 × 325 = 26,000 sq ft of paving.',
      'The ADA Standards require 4 accessible spaces for 76 to 100 total spaces, at least one of them van-accessible.',
    ] },
    takeaways: [
      'Boundary survey = property lines; topographic survey = contours, trees and utilities.',
      'Plan roughly 300 to 350 sq ft per parking space with aisles.',
      'Separate pedestrians, cars and service trucks.',
      'Retention holds stormwater on site; detention releases it slowly.',
    ],
    quiz: [
      S('Which survey shows contours, trees and existing utilities?', ['Boundary survey', 'Topographic survey', 'Title survey only', 'Traffic study'], 1, 'A topographic survey records elevations, contours, trees, utilities and structures. A boundary survey shows property lines.'),
      S('A 30,000 sq ft retail building needs 1 space per 250 sq ft. How many spaces are required?', ['75', '100', '120', '150'], 2, 'Required spaces = floor area ÷ area per space = 30,000 ÷ 250 = 120 spaces.'),
      S('Which stormwater feature holds water and releases it slowly to the storm system?', ['Retention pond', 'Detention pond', 'Septic field', 'Swimming pool'], 1, 'Detention ponds temporarily hold runoff and release it at a controlled rate. Retention ponds hold it to soak in or evaporate.'),
      M('Which are good site planning principles? Select all that apply.', ['Keep pedestrian routes from crossing truck service routes', 'Slope the ground away from the building', 'Place the building in the floodplain to save the high ground for parking', 'Orient the building for sun and breezes'], [0, 1, 3], 'Separate circulation, drain away from the building and orient well. Never put the building in the floodplain to save high ground for parking.'),
    ],
  },
  {
    section: 'Building Analysis & Programming', title: 'Programming the building', minutes: 14,
    intro: 'Programming defines what the building must contain and how its parts relate. It is the biggest section of PA, and it decides whether a design will work for the people who use it.',
    parts: [
      { h: 'What a program contains', p: [
        'A building program states the client\'s goals, the spaces needed with their sizes, how spaces relate to each other, special requirements (security, acoustics, equipment), budget and schedule. Information comes from interviews, surveys, observing how people work, and studying similar buildings.',
        'Architects often organize programming around four questions: function (people, activities, relationships), form (site, environment, quality), economy (budget, operating costs) and time (past, present, future growth).',
      ] },
      { h: 'Net and gross area', p: [
        'Net (assignable) area is the space people actually use. Gross area adds walls, corridors, stairs, elevators, restrooms, mechanical rooms and shafts.',
        'Efficiency = net ÷ gross. An office building might be 75% to 85% efficient; a hospital or laboratory much less. To find gross area, divide net area by efficiency.',
      ] },
      { h: 'Relationships', p: [
        'An adjacency matrix rates how closely each pair of spaces must be connected. Bubble diagrams turn those relationships into rough plans. Stacking diagrams decide which spaces go on which floor.',
      ] },
      { h: 'Existing buildings', p: [
        'Renovation and adaptive reuse start with an assessment of the existing building: structure, envelope, systems, hazardous materials such as asbestos or lead paint, accessibility and code compliance. Historic buildings follow the Secretary of the Interior\'s Standards: repair before replacing, and make new work compatible but distinguishable.',
      ] },
    ],
    example: { title: 'From net to gross', steps: [
      'The program lists 34,000 sq ft of net assignable area.',
      'The building type typically runs at 68% efficiency.',
      'Gross area = 34,000 ÷ 0.68 = 50,000 sq ft. The 16,000 sq ft difference is walls, circulation, restrooms and building services.',
    ] },
    takeaways: [
      'Program = goals, spaces and sizes, relationships, special needs, budget and schedule.',
      'Gross area = net area ÷ efficiency.',
      'Adjacency matrix and bubble diagrams show how spaces relate.',
      'Historic work: repair before replacing; new work compatible but distinguishable.',
    ],
    quiz: [
      S('A program needs 42,000 net sq ft and the building type is about 70% efficient. What gross area should be planned?', ['29,400 sq ft', '49,000 sq ft', '56,000 sq ft', '60,000 sq ft'], 3, 'Gross = net ÷ efficiency = 42,000 ÷ 0.70 = 60,000 sq ft.'),
      S('Which tool rates how closely each pair of spaces must be connected?', ['Stacking diagram', 'Adjacency matrix', 'Gantt chart', 'Section'], 1, 'An adjacency matrix records the required relationship between each pair of spaces.'),
      M('Which spaces count toward gross but not net assignable area? Select all that apply.', ['Corridors', 'Mechanical rooms', 'Private offices', 'Stairs'], [0, 1, 3], 'Circulation, mechanical space and stairs are non-assignable. Offices are assignable (net) area.'),
      S('Under the Secretary of the Interior\'s Standards, how should a new addition to a historic building look?', ['An exact copy of the historic building', 'Compatible with the historic building but distinguishable from it', 'As different as possible', 'Hidden underground'], 1, 'New work should be compatible in scale and materials but clearly of its own time, so the historic building stays legible.'),
    ],
  },
];
