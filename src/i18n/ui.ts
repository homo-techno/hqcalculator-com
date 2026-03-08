export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui: Record<Lang, Record<string, string>> = {
  en: {
    // Navigation
    'nav.financial': 'Financial',
    'nav.health': 'Health',
    'nav.math': 'Math',
    'nav.fitness': 'Fitness',
    'nav.more': 'More',
    'nav.menu': 'Menu',

    // Mobile menu
    'mobile.financial': 'Financial Calculators',
    'mobile.health': 'Health Calculators',
    'mobile.math': 'Math Calculators',
    'mobile.fitness': 'Fitness Calculators',
    'mobile.construction': 'Construction Calculators',

    // Breadcrumbs
    'breadcrumb.home': 'Home',

    // Footer headings
    'footer.financial': 'Financial',
    'footer.health': 'Health',
    'footer.math': 'Math',
    'footer.about': 'About',

    // Footer links
    'footer.mortgage': 'Mortgage Calculator',
    'footer.loan': 'Loan Calculator',
    'footer.compound': 'Compound Interest',
    'footer.investment': 'Investment Calculator',
    'footer.bmi': 'BMI Calculator',
    'footer.calorie': 'Calorie Calculator',
    'footer.bodyfat': 'Body Fat Calculator',
    'footer.pregnancy': 'Pregnancy Calculator',
    'footer.percentage': 'Percentage Calculator',
    'footer.fraction': 'Fraction Calculator',
    'footer.gpa': 'GPA Calculator',
    'footer.age': 'Age Calculator',
    'footer.aboutus': 'About Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.sitemap': 'Sitemap',
    'footer.copyright': 'HQ Calculator. Free online calculators for everyone.',

    // Footer link URLs
    'footer.aboutus.url': '/about',
    'footer.privacy.url': '/privacy',
    'footer.terms.url': '/terms',

    // ShareButton
    'share.button': 'Share',
    'share.copied': 'Copied!',
    'share.copy_aria': 'Copy share link',
    'share.print': 'Print',
    'share.print_aria': 'Print results',

    // FeedbackWidget
    'feedback.question': 'Was this calculator helpful?',
    'feedback.yes': 'Yes',
    'feedback.no': 'Not really',
    'feedback.thanks': 'Thanks for your feedback!',
    'feedback.followup': 'What would make it better?',
    'feedback.missing': 'Missing a feature I need',
    'feedback.wrong': 'Results seem wrong',
    'feedback.hard': 'Hard to understand',
    'feedback.complex': 'Too complicated',
    'feedback.submit': 'Submit',

    // RelatedCalculators
    'related.title': 'Related Calculators',
  },
  de: {
    // Navigation
    'nav.financial': 'Finanzen',
    'nav.health': 'Gesundheit',
    'nav.math': 'Mathematik',
    'nav.fitness': 'Fitness',
    'nav.more': 'Mehr',
    'nav.menu': 'Menü',

    // Mobile menu
    'mobile.financial': 'Finanzrechner',
    'mobile.health': 'Gesundheitsrechner',
    'mobile.math': 'Mathematik-Rechner',
    'mobile.fitness': 'Fitness-Rechner',
    'mobile.construction': 'Baurechner',

    // Breadcrumbs
    'breadcrumb.home': 'Startseite',

    // Footer headings
    'footer.financial': 'Finanzen',
    'footer.health': 'Gesundheit',
    'footer.math': 'Mathematik',
    'footer.about': 'Info',

    // Footer links
    'footer.mortgage': 'Hypothekenrechner',
    'footer.loan': 'Kreditrechner',
    'footer.compound': 'Zinseszinsrechner',
    'footer.investment': 'Anlagerechner',
    'footer.bmi': 'BMI-Rechner',
    'footer.calorie': 'Kalorienrechner',
    'footer.bodyfat': 'Körperfettrechner',
    'footer.pregnancy': 'Schwangerschaftsrechner',
    'footer.percentage': 'Prozentrechner',
    'footer.fraction': 'Bruchrechner',
    'footer.gpa': 'Notenrechner',
    'footer.age': 'Altersrechner',
    'footer.aboutus': 'Über uns',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.sitemap': 'Sitemap',
    'footer.copyright': 'HQ Calculator. Kostenlose Online-Rechner für alle.',

    // Footer link URLs (German)
    'footer.aboutus.url': '/de/ueber-uns',
    'footer.privacy.url': '/de/datenschutz',
    'footer.terms.url': '/de/nutzungsbedingungen',

    // ShareButton
    'share.button': 'Teilen',
    'share.copied': 'Kopiert!',
    'share.copy_aria': 'Link kopieren',
    'share.print': 'Drucken',
    'share.print_aria': 'Ergebnisse drucken',

    // FeedbackWidget
    'feedback.question': 'War dieser Rechner hilfreich?',
    'feedback.yes': 'Ja',
    'feedback.no': 'Nicht wirklich',
    'feedback.thanks': 'Danke für Ihr Feedback!',
    'feedback.followup': 'Was könnten wir verbessern?',
    'feedback.missing': 'Mir fehlt eine Funktion',
    'feedback.wrong': 'Ergebnisse scheinen falsch',
    'feedback.hard': 'Schwer verständlich',
    'feedback.complex': 'Zu kompliziert',
    'feedback.submit': 'Absenden',

    // RelatedCalculators
    'related.title': 'Verwandte Rechner',
  },
};

export function t(lang: Lang, key: string): string {
  return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
}
