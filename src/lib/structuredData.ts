import { INSTAGRAM_URL, SITE_NAME, SITE_URL, TELEPHONE, absoluteUrl } from '../data/site';
import { pages, pageUrl, type Language } from './pages';

export function professionalService(lang: Language, description: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: SITE_URL,
    description,
    areaServed: 'Uruguay',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tacuarembó',
      addressCountry: 'UY',
    },
    founder: { '@type': 'Person', name: 'Gustavo González' },
    sameAs: [INSTAGRAM_URL],
    telephone: TELEPHONE,
    inLanguage: lang,
  };
}

export function caseStudyBreadcrumbs(lang: Language, path: string, name: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: pages[lang].home.title, item: absoluteUrl(pageUrl(lang, 'home')) },
      { '@type': 'ListItem', position: 2, name: pages[lang].projects.title, item: absoluteUrl(pageUrl(lang, 'projects')) },
      { '@type': 'ListItem', position: 3, name, item: absoluteUrl(path) },
    ],
  };
}
