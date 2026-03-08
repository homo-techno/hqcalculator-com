/**
 * Mapping of English slugs to German slugs.
 * Used for hreflang tags, language switcher, and RelatedCalculators.
 * Populated incrementally as German pages are created.
 */
export const slugMap: Record<string, string> = {
  // Static pages
  'about': 'ueber-uns',
  'privacy': 'datenschutz',
  'terms': 'nutzungsbedingungen',

  // Calculator pages
  'percentage-calculator': 'prozentrechner',
  'bmi-calculator': 'bmi-rechner',
  'age-calculator': 'altersrechner',
  'mortgage-calculator': 'hypothekenrechner',
  'calorie-calculator': 'kalorienrechner',
  'loan-calculator': 'kreditrechner',
  'tip-calculator': 'trinkgeldrechner',
  'body-fat-calculator': 'koerperfettrechner',
  'compound-interest-calculator': 'zinseszinsrechner',
  'salary-calculator': 'gehaltsrechner',
  'gpa-calculator': 'notenrechner',
  'bmr-calculator': 'grundumsatzrechner',
  'tdee-calculator': 'energieverbrauchsrechner',
  'fraction-calculator': 'bruchrechner',
  'auto-loan-calculator': 'autofinanzierungsrechner',
  'investment-calculator': 'anlagerechner',
  'savings-calculator': 'sparrechner',
  'weight-loss-calculator': 'abnehmenrechner',
  'pregnancy-calculator': 'schwangerschaftsrechner',
  'sales-tax-calculator': 'mehrwertsteuerrechner',
  'scientific-calculator': 'wissenschaftlicher-rechner',
};
