import { pageUrl, type Language } from './pages';
import type { ImageMetadata } from 'astro';
import desktop from '../assets/cero-yuyo/cero-yuyo-desktop.png';
import mobile from '../assets/cero-yuyo/cero-yuyo-mobile.png';
import beforeAfter from '../assets/cero-yuyo/cero-yuyo-antes-despues.png';

export interface CaseStudyContent {
  slug: string;
  title: string;
  description: string;
  label: string;
  heading: string;
  cardLabel: string;
  summary: string;
  intro?: string;
  images?: { src: ImageMetadata; alt: string; caption: string; phone?: boolean }[];
  sections: { heading: string; text?: string; items?: string[] }[];
}

export interface CaseStudy {
  content: Record<Language, CaseStudyContent>;
}

export const projects = {
  es: {
    title: 'Proyectos de diseño web en Uruguay | Tacuara Lab',
    description: 'Conocé Tacuara Lab y Cero Yuyo, dos proyectos propios de diseño web desde Tacuarembó, Uruguay, y cómo podés ser uno de mis primeros clientes.',
    heading: 'Proyectos',
    intro: 'Todavía no publiqué trabajos para clientes, y prefiero decírtelo de frente. Mientras tanto, acá están dos proyectos propios: este sitio y el de mi servicio de corte de pasto.',
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
    description: 'Explore Tacuara Lab and Cero Yuyo, two of my own web design projects from Tacuarembó, Uruguay, and find out how to become one of my first clients.',
    heading: 'Projects',
    intro: "I haven't published client work yet, and I'd rather say that upfront. Meanwhile, here are two projects of my own: this site and the one for my lawn care service.",
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
        slug: 'cero-yuyo',
        title: 'Caso de estudio: Cero Yuyo | Tacuara Lab, Uruguay',
        description: 'Un sitio de una página para Cero Yuyo, mi servicio de corte de pasto en Tacuarembó, Uruguay: trabajos reales y contacto por WhatsApp.',
        label: 'Caso de estudio · Proyecto propio',
        heading: 'Cero Yuyo: un sitio para mi servicio de corte de pasto',
        cardLabel: 'Proyecto propio',
        summary: 'Un sitio de una página para mi servicio de corte de pasto en Tacuarembó.',
        intro: 'Cero Yuyo es mi servicio de corte de pasto y jardinería en la ciudad de Tacuarembó. Armé el sitio para que quien necesita el servicio entienda rápido qué hago y me escriba por WhatsApp.',
        sections: [
          { heading: 'Qué necesitaba', text: 'Quien busca a alguien para cortar el pasto quiere tres cosas: saber si voy a su zona, ver trabajos reales y pedir un presupuesto sin vueltas.' },
          { heading: 'Qué hice', items: [
            'Una sola página pensada para el celular, que es desde donde la gente la va a mirar.',
            'Un solo camino para contactarme: mandar una foto del terreno por WhatsApp y recibir el presupuesto gratis.',
            'Cuatro trabajos reales con fotos de antes y después.',
            'Una zona de servicio clara: solo la ciudad de Tacuarembó.',
          ] },
          { heading: 'Cómo está hecho', text: 'Astro y Tailwind CSS. Es un sitio estático que no necesita JavaScript en el navegador, con imágenes optimizadas y alojado en Cloudflare. En Lighthouse móvil saca 100 en rendimiento, accesibilidad y buenas prácticas.' },
          { heading: 'Lo que todavía no sé', text: 'Todavía no tengo datos de consultas ni de clientes que lleguen por el sitio, así que no te prometo resultados.' },
        ],
        images: [
          { src: desktop, alt: 'Inicio de Cero Yuyo en escritorio: servicio de corte de pasto en Tacuarembó, botón de WhatsApp y retrato con una desmalezadora.', caption: 'Versión de escritorio' },
          { src: mobile, alt: 'Inicio de Cero Yuyo en el celular: título, presupuesto gratis por WhatsApp y retrato con una desmalezadora en una columna.', caption: 'Versión en el celular', phone: true },
          { src: beforeAfter, alt: 'Sección Trabajos recientes de Cero Yuyo: fotos lado a lado de un jardín con pasto alto y del mismo jardín después del corte.', caption: 'Antes y después de trabajos reales' },
        ],
      },
      en: {
        slug: 'cero-yuyo',
        title: 'Cero Yuyo case study | Tacuara Lab, Uruguay',
        description: 'A one-page site for Cero Yuyo, my lawn care service in Tacuarembó, Uruguay: real jobs and contact through WhatsApp.',
        label: 'Case study · Own project',
        heading: 'Cero Yuyo: a site for my lawn care service',
        cardLabel: 'Own project',
        summary: 'A one-page site for my lawn care service in Tacuarembó.',
        intro: 'Cero Yuyo is my lawn care and gardening service in the city of Tacuarembó. I built the site so that anyone who needs the service understands quickly what I do and can message me on WhatsApp.',
        sections: [
          { heading: 'What I needed', text: 'Someone looking for a person to cut their grass wants three things: to know if I cover their area, to see real work, and to ask for a quote without back and forth.' },
          { heading: 'What I did', items: [
            'A single page designed for phones, which is where people will look at it.',
            'One way to reach me: send a photo of the yard on WhatsApp and get a free quote.',
            'Four real jobs with before and after photos.',
            'A clear service area: only the city of Tacuarembó.',
          ] },
          { heading: "How it's built", text: "Astro and Tailwind CSS. It's a static site that needs no JavaScript in the browser, with optimized images, hosted on Cloudflare. On mobile Lighthouse it scores 100 for performance, accessibility and best practices." },
          { heading: "What I don't know yet", text: "I don't have data on inquiries or on clients coming from the site yet, so I won't promise results." },
        ],
        images: [
          { src: desktop, alt: 'Cero Yuyo desktop homepage: lawn care in Tacuarembó, a WhatsApp button and a portrait holding a brush cutter.', caption: 'Desktop version' },
          { src: mobile, alt: 'Cero Yuyo phone homepage: heading, free quote through WhatsApp and a portrait holding a brush cutter in a single column.', caption: 'Phone version', phone: true },
          { src: beforeAfter, alt: 'Cero Yuyo recent jobs section: side-by-side photos of a garden with tall grass and the same garden after mowing.', caption: 'Before and after of real jobs' },
        ],
      },
    },
  },
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
