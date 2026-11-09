// The six divisions of the Architect Registration Examination (ARE 5.0) and the Architectural Experience
// Program (AXP), taken from NCARB's own pages (checked November 9, 2026). Section weights are NCARB's
// "typical form" ranges, as a share of exam items. Every fact here lists where it came from.

export const SOURCES = {
  ncarbPcM: 'https://www.ncarb.org/pass-the-are/prepare/practice-management',
  ncarbPjM: 'https://www.ncarb.org/pass-the-are/prepare/project-management',
  ncarbPA: 'https://www.ncarb.org/pass-the-are/prepare/programming-analysis',
  ncarbPPD: 'https://www.ncarb.org/pass-the-are/prepare/project-planning-design',
  ncarbPDD: 'https://www.ncarb.org/pass-the-are/prepare/project-development-documentation',
  ncarbCE: 'https://www.ncarb.org/pass-the-are/prepare/construction-evaluation',
  ncarbScheduling: 'https://www.ncarb.org/pass-the-are/start/scheduling',
  ncarbAXP: 'https://www.ncarb.org/gain-axp-experience/experience-requirements',
  flFaq: 'https://www2.myfloridalicense.com/architecture-and-interior-design/faqs/',
};

export const DIVISIONS = [
  {
    id: 'pcm', code: 'PcM', name: 'Practice Management', items: 65, caseStudies: 2,
    testMinutes: 160, appointmentMinutes: 200, axpHours: 160, source: 'ncarbPcM',
    sections: [
      { name: 'Business Operations', min: 20, max: 26 },
      { name: 'Finances, Risk, & Development of Practice', min: 29, max: 35 },
      { name: 'Practice-Wide Delivery of Services', min: 22, max: 28 },
      { name: 'Practice Methodologies', min: 17, max: 23 },
    ],
  },
  {
    id: 'pjm', code: 'PjM', name: 'Project Management', items: 75,
    testMinutes: 180, appointmentMinutes: 220, axpHours: 360, source: 'ncarbPjM',
    sections: [
      { name: 'Resource Management', min: 7, max: 13 },
      { name: 'Project Work Planning', min: 17, max: 23 },
      { name: 'Contracts', min: 25, max: 31 },
      { name: 'Project Execution', min: 17, max: 23 },
      { name: 'Project Quality Control', min: 19, max: 25 },
    ],
  },
  {
    id: 'pa', code: 'PA', name: 'Programming & Analysis', items: 75,
    testMinutes: 180, appointmentMinutes: 220, axpHours: 260, source: 'ncarbPA',
    sections: [
      { name: 'Environmental & Contextual Conditions', min: 14, max: 21 },
      { name: 'Codes & Regulations', min: 16, max: 22 },
      { name: 'Site Analysis & Programming', min: 21, max: 27 },
      { name: 'Building Analysis & Programming', min: 37, max: 43 },
    ],
  },
  {
    id: 'ppd', code: 'PPD', name: 'Project Planning & Design', items: 100,
    testMinutes: 245, appointmentMinutes: 300, axpHours: 1080, source: 'ncarbPPD',
    sections: [
      { name: 'Environmental Conditions & Context', min: 10, max: 16 },
      { name: 'Codes & Regulations', min: 16, max: 22 },
      { name: 'Building Systems, Materials, & Assemblies', min: 19, max: 25 },
      { name: 'Project Integration of Program & Systems', min: 32, max: 38 },
      { name: 'Project Costs & Budgeting', min: 8, max: 14 },
    ],
  },
  {
    id: 'pdd', code: 'PDD', name: 'Project Development & Documentation', items: 100,
    testMinutes: 245, appointmentMinutes: 300, axpHours: 1520, source: 'ncarbPDD',
    sections: [
      { name: 'Integration of Building Materials & Systems', min: 31, max: 37 },
      { name: 'Construction Documentation', min: 32, max: 38 },
      { name: 'Project Manual & Specifications', min: 12, max: 18 },
      { name: 'Codes & Regulations', min: 8, max: 14 },
      { name: 'Construction Cost Estimates', min: 2, max: 8 },
    ],
  },
  {
    id: 'ce', code: 'CE', name: 'Construction & Evaluation', items: 75,
    testMinutes: 180, appointmentMinutes: 220, axpHours: 360, source: 'ncarbCE',
    sections: [
      { name: 'Preconstruction Activities', min: 17, max: 23 },
      { name: 'Construction Observation', min: 32, max: 38 },
      { name: 'Administrative Procedures & Protocols', min: 32, max: 38 },
      { name: 'Project Closeout & Evaluation', min: 7, max: 13 },
    ],
  },
];

export const AXP_TOTAL_HOURS = 3740;

export function findDivision(id) {
  return DIVISIONS.find(d => d.id === id) || null;
}

// "4 hr 5 min" style label for a number of minutes.
export function formatMinutes(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return [h ? `${h} hr` : '', m ? `${m} min` : ''].filter(Boolean).join(' ') || '0 min';
}

// Roughly how many items a section is worth on a full exam, using the middle of its weight range.
export function expectedItems(division, section) {
  return Math.round(division.items * ((section.min + section.max) / 2) / 100);
}
