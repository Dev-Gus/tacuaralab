export const languages = ['es', 'en'] as const;
export type Language = (typeof languages)[number];
export const pageIds = ['home', 'projects', 'services', 'about', 'contact'] as const;
export type PageId = (typeof pageIds)[number];

export const pages = {
  es: {
    home: { slug: '', title: 'Inicio' },
    projects: { slug: 'proyectos', title: 'Proyectos' },
    services: { slug: 'servicios', title: 'Servicios' },
    about: { slug: 'sobre', title: 'Acerca de' },
    contact: { slug: 'contacto', title: 'Contacto' },
  },
  en: {
    home: { slug: '', title: 'Home' },
    projects: { slug: 'projects', title: 'Projects' },
    services: { slug: 'services', title: 'Services' },
    about: { slug: 'about', title: 'About' },
    contact: { slug: 'contact', title: 'Contact' },
  },
} satisfies Record<Language, Record<PageId, { slug: string; title: string }>>;

export function pageUrl(lang: Language, page: PageId): string {
  const slug = pages[lang][page].slug;
  return `/${lang}${slug ? `/${slug}` : ''}`;
}

export const ui = {
  es: {
    placeholder: 'Contenido de ejemplo.',
    section: 'Sección de ejemplo',
    navigation: 'Navegación principal',
    skip: 'Saltar al contenido',
    switchLanguage: 'Read this page in English',
    backHome: 'Volver al inicio',
    footer: 'Página de ejemplo.',
  },
  en: {
    placeholder: 'Placeholder content.',
    section: 'Placeholder section',
    navigation: 'Main navigation',
    skip: 'Skip to content',
    switchLanguage: 'Leer esta página en español',
    backHome: 'Back to home',
    footer: 'Placeholder page.',
  },
};
