import { pageUrl, type Language } from './pages';

export interface CaseStudyContent {
  slug: string;
  title: string;
  description: string;
  label: string;
  heading: string;
  cardLabel: string;
  summary: string;
  sections: { heading: string; text?: string; items?: string[] }[];
}

export interface CaseStudy {
  content: Record<Language, CaseStudyContent>;
}

export const projects = {
  es: {
    title: 'Proyectos de diseño web en Uruguay | Tacuara Lab',
    description: 'Conocé el sitio de Tacuara Lab, un proyecto propio de diseño web desde Tacuarembó, Uruguay, y cómo podés ser uno de mis primeros clientes.',
    heading: 'Proyectos',
    intro: 'Todavía no publiqué trabajos para clientes, y prefiero decírtelo de frente. Mientras tanto, acá está el primer proyecto real: este mismo sitio.',
    link: 'Ver el caso de estudio',
    back: 'Volver a Proyectos',
    invitation: {
      heading: '¿Tu negocio puede ser el próximo?',
      text: 'Estoy buscando mis primeros clientes. A cambio de un precio de lanzamiento, te pido un testimonio y permiso para mostrar el trabajo acá.',
      button: 'Escribime por WhatsApp',
      message: 'Hola Gus, vi la página de Proyectos y me interesa ser uno de tus primeros clientes.',
    },
  },
  en: {
    title: 'Web design projects in Uruguay | Tacuara Lab',
    description: "Explore Tacuara Lab's own website, a web design project from Tacuarembó, Uruguay, and find out how to become one of my first clients.",
    heading: 'Projects',
    intro: "I haven't published client work yet, and I'd rather say that upfront. Meanwhile, here's the first real project: this very site.",
    link: 'Read the case study',
    back: 'Back to Projects',
    invitation: {
      heading: 'Could your business be next?',
      text: "I'm looking for my first clients. In exchange for a launch price, I ask for a testimonial and permission to show the work here.",
      button: 'Message me on WhatsApp',
      message: "Hi Gus, I saw the Projects page and I'd like to be one of your first clients.",
    },
  },
};

export const caseStudies: CaseStudy[] = [
  {
    content: {
      es: {
        slug: 'tacuara-lab',
        title: 'Caso de estudio: Tacuara Lab | Diseño web en Uruguay',
        description: 'Cómo hice el sitio de Tacuara Lab en Uruguay: español e inglés, navegación simple en el celular, precios a la vista y contacto directo por WhatsApp.',
        label: 'Caso de estudio · Proyecto propio',
        heading: 'Tacuara Lab: el sitio que estás viendo',
        cardLabel: 'Proyecto propio',
        summary: 'El sitio de mi estudio, hecho para mostrar cómo trabajo: claro, rápido y sin vueltas.',
        sections: [
          { heading: 'Qué es', text: 'El sitio de mi estudio. Lo armé para mostrar cómo trabajo: claro, rápido y sin vueltas.' },
          { heading: 'El objetivo', text: 'Que un negocio de Tacuarembó entienda en un minuto qué hago, cuánto cuesta y cómo escribirme.' },
          { heading: 'Qué hice', items: [
            'Un sitio en español e inglés, con rutas separadas para cada idioma.',
            'Pensado primero para el celular, con navegación simple.',
            'Precios a la vista, con qué incluye cada paquete.',
            'Contacto directo por WhatsApp.',
          ] },
          { heading: 'Cómo está hecho', text: 'Astro y Tailwind, sin código innecesario, alojado en Cloudflare.' },
        ],
      },
      en: {
        slug: 'tacuara-lab',
        title: 'Tacuara Lab case study | Web design in Uruguay',
        description: 'How I built the Tacuara Lab website in Uruguay: Spanish and English, simple mobile navigation, upfront prices and direct contact through WhatsApp.',
        label: 'Case study · Own project',
        heading: "Tacuara Lab: the site you're looking at",
        cardLabel: 'Own project',
        summary: "My studio's website, built to show how I work: clear, fast, no fluff.",
        sections: [
          { heading: 'What it is', text: "My studio's website. I built it to show how I work: clear, fast, no fluff." },
          { heading: 'The goal', text: 'Let a business owner understand in a minute what I do, what it costs and how to reach me.' },
          { heading: 'What I did', items: [
            'A Spanish and English site, with separate routes per language.',
            'Mobile-first, with simple navigation.',
            'Prices upfront, with what each package includes.',
            'Direct contact through WhatsApp.',
          ] },
          { heading: "How it's built", text: 'Astro and Tailwind, no unnecessary code, hosted on Cloudflare.' },
        ],
      },
    },
  },
];

export function caseStudyUrl(lang: Language, study: CaseStudy): string {
  return `${pageUrl(lang, 'projects')}${study.content[lang].slug}/`;
}
