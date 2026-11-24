import { pageUrl, type Language } from './pages';
import type { ImageMetadata } from 'astro';
import desktop from '../assets/cero-yuyo/cero-yuyo-desktop.png';
import mobile from '../assets/cero-yuyo/cero-yuyo-mobile.png';
import beforeAfter from '../assets/cero-yuyo/cero-yuyo-antes-despues.png';
import homeEs from '../assets/tacuara-lab/tacuara-lab-home-es.webp';
import servicesEs from '../assets/tacuara-lab/tacuara-lab-services-es.webp';
import homeEn from '../assets/tacuara-lab/tacuara-lab-home-en.webp';
import servicesEn from '../assets/tacuara-lab/tacuara-lab-services-en.webp';

import ceroCover from '../assets/project-covers/cero-yuyo.webp';
import tacuaraCoverEs from '../assets/project-covers/tacuara-lab-es.webp';
import tacuaraCoverEn from '../assets/project-covers/tacuara-lab-en.webp';

export interface CaseStudyContent {
  cover: { src: ImageMetadata; alt: string };
  slug: string;
  title: string;
  description: string;
  label: string;
  heading: string;
  cardLabel: string;
  summary: string;
  intro?: string;
  screenshots?: { src: ImageMetadata; alt: string }[];
  facts?: { label: string; text: string }[];
  buildNote?: string;
  images?: { src: ImageMetadata; alt: string; caption: string; phone?: boolean }[];
  sections?: { heading: string; text?: string; items?: string[] }[];
}

export interface CaseStudy {
  content: Record<Language, CaseStudyContent>;
}

export const projects = {
  es: {
    title: 'Proyectos de diseño web en Uruguay | Tacuara Lab',
    description: 'Conocé Tacuara Lab y Cero Yuyo, dos proyectos propios de diseño web desde Tacuarembó, Uruguay, y cómo trabajar conmigo.',
    heading: 'Proyectos',
    intro: 'Dos proyectos hechos de punta a punta: este sitio y el de Cero Yuyo, mi servicio de corte de pasto en Tacuarembó. Así trabajo: simple, rápido y pensado para el celular.',
    link: 'Ver el caso de estudio',
    back: 'Volver a Proyectos',
    invitation: {
      heading: '¿Tu negocio es el próximo?',
      text: 'Estoy tomando mis primeros cinco proyectos con precio de lanzamiento. A cambio, te pido un testimonio y permiso para mostrar el trabajo acá.',
      button: 'Escribime por WhatsApp',
      message: 'Hola Gus, vi tus proyectos y quiero que armemos algo para mi negocio.',
    },
  },
  en: {
    title: 'Web design projects in Uruguay | Tacuara Lab',
    description: 'Explore Tacuara Lab and Cero Yuyo, two of my own web design projects from Tacuarembó, Uruguay, and find out how to work with me.',
    heading: 'Projects',
    intro: 'Two projects, built end to end: this site, and Cero Yuyo, my lawn care service in Tacuarembó. This is how I work: simple, fast and mobile-first.',
    link: 'Read the case study',
    back: 'Back to Projects',
    invitation: {
      heading: 'Could your business be next?',
      text: "I'm taking my first five projects at a launch price. In return, I ask for a testimonial and permission to show the work here.",
      button: 'Message me on WhatsApp',
      message: "Hi Gus, I saw your projects and I'd like to build something for my business.",
    },
  },
};

export const caseStudies: CaseStudy[] = [
  {
    content: {
      es: {
        cover: { src: ceroCover, alt: 'Gus con una desmalezadora al hombro, en la foto principal de Cero Yuyo.' },
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
        cover: { src: ceroCover, alt: 'Gus holding a brush cutter over his shoulder in the Cero Yuyo hero photo.' },
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
        cover: { src: tacuaraCoverEs, alt: 'Inicio de Tacuara Lab en español: sitios web claros para negocios de Uruguay.' },
        slug: 'tacuara-lab',
        title: 'Caso de estudio: Tacuara Lab | Diseño web en Uruguay',
        description: 'Cómo hice el sitio de Tacuara Lab en Uruguay: español e inglés, navegación simple en el celular, precios a la vista y contacto directo por WhatsApp.',
        label: 'Caso de estudio · Proyecto propio',
        heading: 'Tacuara Lab: el sitio que estás viendo',
        cardLabel: 'Proyecto propio',
        summary: 'El sitio de mi estudio, hecho para mostrar cómo trabajo: claro, rápido y sin vueltas.',
        intro: 'Un sitio para que un negocio de Tacuarembó entienda en un minuto qué hago, cuánto cuesta y cómo escribirme.',
        screenshots: [
          { src: homeEs, alt: 'Inicio de Tacuara Lab en español en el celular: diseño web para negocios de Tacuarembó y contacto por WhatsApp.' },
          { src: servicesEs, alt: 'Servicios y precios de Tacuara Lab en español en el celular: paquete Presencia, precio de lanzamiento y lo que incluye.' },
        ],
        facts: [
          { label: 'Español e inglés', text: 'Rutas separadas para cada idioma' },
          { label: 'Celular primero', text: 'Navegación simple' },
          { label: 'Precios a la vista', text: 'Con qué incluye cada paquete' },
          { label: 'WhatsApp directo', text: 'Un toque y escribís' },
        ],
        buildNote: 'Hecho con Astro y Tailwind, alojado en Cloudflare.',
      },
      en: {
        cover: { src: tacuaraCoverEn, alt: 'Tacuara Lab homepage in English: clear websites for businesses in Uruguay.' },
        slug: 'tacuara-lab',
        title: 'Tacuara Lab case study | Web design in Uruguay',
        description: 'How I built the Tacuara Lab website in Uruguay: Spanish and English, simple mobile navigation, upfront prices and direct contact through WhatsApp.',
        label: 'Case study · Own project',
        heading: "Tacuara Lab: the site you're looking at",
        cardLabel: 'Own project',
        summary: "My studio's website, built to show how I work: clear, fast, no fluff.",
        intro: 'A site so a business in Tacuarembó can understand in one minute what I do, what it costs and how to reach me.',
        screenshots: [
          { src: homeEn, alt: 'Tacuara Lab homepage in English on a phone: web design for businesses in Tacuarembó and contact through WhatsApp.' },
          { src: servicesEn, alt: 'Tacuara Lab services and pricing in English on a phone: the Presence package, launch price and what it includes.' },
        ],
        facts: [
          { label: 'Spanish and English', text: 'Separate routes for each language' },
          { label: 'Mobile first', text: 'Simple navigation' },
          { label: 'Prices upfront', text: 'What each package includes' },
          { label: 'Direct WhatsApp', text: "One tap and you're writing" },
        ],
        buildNote: 'Built with Astro and Tailwind, hosted on Cloudflare.',
      },
    },
  },
];

export function caseStudyUrl(lang: Language, study: CaseStudy): string {
  return `${pageUrl(lang, 'projects')}${study.content[lang].slug}/`;
}
