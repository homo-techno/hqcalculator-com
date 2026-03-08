import type { Lang } from './ui';
import { defaultLang } from './ui';
import { slugMap } from './slugs';

/** Get language from URL path */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'de') return 'de';
  return defaultLang;
}

/** Get the alternate language */
export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'de' : 'en';
}

/** Get the English slug from a German slug */
export function getEnSlugFromDe(deSlug: string): string | undefined {
  for (const [en, de] of Object.entries(slugMap)) {
    if (de === deSlug) return en;
  }
  return undefined;
}

/** Get the German slug from an English slug */
export function getDeSlugFromEn(enSlug: string): string | undefined {
  return slugMap[enSlug];
}

/**
 * Get the URL for the alternate language version of a page.
 * Used for hreflang tags and language switcher.
 */
export function getAlternateUrl(
  currentUrl: URL,
  currentLang: Lang,
  siteUrl: string
): { en: string; de: string } {
  const pathname = currentUrl.pathname.replace(/\/$/, '') || '';

  if (currentLang === 'en') {
    // English page: /percentage-calculator -> /de/prozent-rechner
    const slug = pathname.replace(/^\//, '');
    const deSlug = slug === '' ? '' : (slugMap[slug] ?? slug);
    return {
      en: `${siteUrl}${pathname || '/'}`,
      de: `${siteUrl}/de/${deSlug}`,
    };
  } else {
    // German page: /de/prozent-rechner -> /percentage-calculator
    const deSlug = pathname.replace(/^\/de\/?/, '');
    const enSlug = deSlug === '' ? '' : (getEnSlugFromDe(deSlug) ?? deSlug);
    return {
      en: `${siteUrl}/${enSlug}`,
      de: `${siteUrl}${pathname}`,
    };
  }
}
