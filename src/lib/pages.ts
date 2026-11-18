export const languages = ['es', 'en'] as const;
export type Language = (typeof languages)[number];
export const pageIds = ['home', 'projects', 'services', 'about', 'contact'] as const;
export type PageId = (typeof pageIds)[number];

export const pages = {
  es: {
    home: { slug: '', title: 'Inicio', description: 'Sitio de ejemplo de Tacuara Lab, estudio web en Uruguay.' },
    projects: { slug: 'proyectos', title: 'Proyectos', description: 'Proyectos de ejemplo de diseño web en Uruguay.' },
    services: { slug: 'servicios', title: 'Servicios', description: 'Páginas web para negocios de Uruguay, hechas en Tacuarembó. Precio fijo en dólares, plazos claros y sin letra chica.' },
    about: { slug: 'sobre', title: 'Acerca de', description: 'Conocé más sobre Tacuara Lab en Uruguay.' },
    contact: { slug: 'contacto', title: 'Contacto', description: 'Contactá a Tacuara Lab desde Uruguay.' },
  },
  en: {
    home: { slug: '', title: 'Home', description: 'A sample website from Tacuara Lab, a web studio in Uruguay.' },
    projects: { slug: 'projects', title: 'Projects', description: 'Sample web design projects from Uruguay.' },
    services: { slug: 'services', title: 'Services', description: 'Websites for Uruguayan businesses, built in Tacuarembó. Fixed prices in US dollars, clear timelines, no fine print.' },
    about: { slug: 'about', title: 'About', description: 'Learn about Tacuara Lab, based in Uruguay.' },
    contact: { slug: 'contact', title: 'Contact', description: 'Contact Tacuara Lab in Uruguay.' },
  },
} satisfies Record<Language, Record<PageId, { slug: string; title: string; description: string }>>;

export function pageUrl(lang: Language, page: PageId): string {
  const slug = pages[lang][page].slug;
  return `/${lang}${slug ? `/${slug}` : '/'}${slug ? '/' : ''}`;
}

export const ui = {
  es: {
    placeholder: 'Contenido de ejemplo.',
    section: 'Sección de ejemplo',
    navigation: 'Navegación principal',
    skip: 'Saltar al contenido',
    switchLanguage: 'Read this page in English',
    backHome: 'Volver al inicio',
    footer: 'Estudio web en Tacuarembó, Uruguay.',
  },
  en: {
    placeholder: 'Placeholder content.',
    section: 'Placeholder section',
    navigation: 'Main navigation',
    skip: 'Skip to content',
    switchLanguage: 'Leer esta página en español',
    backHome: 'Back to home',
    footer: 'Web studio in Tacuarembó, Uruguay.',
  },
};
