// The path to a Florida architect license by examination, from the Florida Board of Architecture and
// Interior Design FAQ (DBPR), checked November 9, 2026: https://www2.myfloridalicense.com/architecture-and-interior-design/faqs/

export const FLORIDA_STEPS = [
  { id: 'degree', title: 'Earn a NAAB-accredited professional degree', detail: 'Florida requires a professional bachelor\'s or master\'s degree in architecture from a program accredited by the National Architectural Accrediting Board (NAAB). Foreign degrees are evaluated by NCARB.' },
  { id: 'record', title: 'Open an NCARB Record', detail: 'You register for the ARE and report AXP experience through NCARB, not through the Florida board.' },
  { id: 'axp', title: 'Complete the AXP (3,740 hours)', detail: 'Report experience in all six areas through NCARB. About half of the hours must come from work at an architecture firm under a licensed architect.' },
  { id: 'are', title: 'Pass all six ARE divisions', detail: 'You can start testing after high school once you have an NCARB Record and are active in the AXP. Florida does not accept divisions exempted through education or experience. Tests are taken at Prometric centers.' },
  { id: 'transmit', title: 'Send your NCARB Record to Florida', detail: 'Ask NCARB to transmit your Record to the Florida board. The board says this can take 7 to 10 days.' },
  { id: 'apply', title: 'Apply: Initial Licensure by Examination (NCARB Direct Registration)', detail: 'Submit the application from the board\'s "Apply For A License" page with the $35 non-refundable fee, mailed to the DBPR Central Intake Unit in Tallahassee.' },
  { id: 'renew', title: 'Keep it current', detail: 'Licenses renew by February 28 of every odd-numbered year. Each renewal needs 24 continuing education hours: 22 in health, safety and welfare and 2 in advanced Florida Building Code courses. Architects first licensed less than 24 months before the cycle ends need none for their first renewal.' },
];

export const FLORIDA_FACTS = {
  applicationFee: 35,
  ceHours: 24,
  ceHswHours: 22,
  ceBuildingCodeHours: 2,
  renewalDeadline: 'February 28 of every odd-numbered year',
  reciprocity: 'Florida has no reciprocity and no grandfathering; foreign licenses are not recognized.',
};

// Progress through the checklist: done is a list of step ids.
export function checklistProgress(done = []) {
  const set = new Set(done);
  const complete = FLORIDA_STEPS.filter(s => set.has(s.id)).length;
  const next = FLORIDA_STEPS.find(s => !set.has(s.id)) || null;
  return { complete, total: FLORIDA_STEPS.length, percent: Math.round((complete / FLORIDA_STEPS.length) * 100), next };
}
