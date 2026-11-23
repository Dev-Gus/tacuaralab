import type { Language } from './pages';

interface HomeContent {
  title: string;
  description: string;
  heading: string;
  subtitle: string;
  button: string;
  servicesButton: string;
  message: string;
  trust: string[];
  benefits: { heading: string; items: { heading: string; text: string }[] };
  packages: { heading: string; items: { heading: string; text: string }[]; link: string };
  process: { heading: string; items: { heading: string; text: string }[] };
  proof: { heading: string; text: string; button: string };
  closing: string;
}

export const home = {
  es: {
    title: 'Tacuara Lab | Sitios web para negocios en Uruguay',
    description: 'Estudio web en Tacuarembó, Uruguay. Sitios claros, rápidos y pensados para el celular, con WhatsApp a mano.',
    heading: 'Sitios web claros para negocios de Uruguay',
    subtitle: 'Tu negocio se ve bien en el celular, se puede encontrar en Google y te escriben por WhatsApp. Lo hago yo, Gus, desde Tacuarembó.',
    button: 'Escribime por WhatsApp',
    servicesButton: 'Ver servicios',
    message: 'Hola Gus, vi el sitio de Tacuara Lab y quiero consultar por una página web para mi negocio.',
    trust: ['Hecho en Tacuarembó', 'Dominio y hosting incluidos el primer año', 'Entrega en 7 a 15 días hábiles', 'El dominio y el contenido son tuyos'],
    benefits: { heading: 'Lo que tenés', items: [
      { heading: 'Se ve bien en el celular', text: 'Diseño pensado primero para el teléfono, que es donde te busca la gente.' },
      { heading: 'Te pueden encontrar', text: 'Lo básico de Google resuelto: título, descripción, mapa y datos de tu negocio.' },
      { heading: 'Te escriben fácil', text: 'Botón de WhatsApp y de llamada siempre a mano.' },
    ] },
    packages: { heading: 'Dos formas de empezar', items: [
      { heading: 'Presencia', text: 'Una página con quién sos, qué hacés, horarios, mapa y WhatsApp.' },
      { heading: 'Sitio completo', text: 'Hasta cinco páginas, formulario de contacto y versión en inglés opcional.' },
    ], link: 'Ver servicios y detalles' },
    process: { heading: 'Cómo trabajamos', items: [
      { heading: 'Hablamos', text: 'Me contás de tu negocio en una charla corta.' },
      { heading: 'Te muestro el diseño', text: 'Te muestro cómo va a quedar tu sitio.' },
      { heading: 'Ajustamos juntos', text: 'Hacemos las rondas de cambios incluidas en tu paquete.' },
      { heading: 'Publicamos', text: 'Lo publico en tu dominio y lo dejo funcionando.' },
    ] },
    proof: { heading: 'Dos proyectos propios', text: 'Todavía no tengo trabajos para clientes. Acá podés ver mi propio sitio y el de mi servicio de corte de pasto. Busco mis primeros 5 clientes: precio de lanzamiento a cambio de un testimonio y de poder mostrar el trabajo.', button: 'Ver proyectos' },
    closing: '¿Tenés un negocio y querés que te encuentren?',
  },
  en: {
    title: 'Tacuara Lab | Websites for businesses in Uruguay',
    description: 'Web studio in Tacuarembó, Uruguay. Clear, fast, mobile-first websites with WhatsApp always within reach.',
    heading: 'Clear websites for businesses in Uruguay',
    subtitle: 'Your business looks good on a phone, shows up on Google, and people reach you on WhatsApp. I build it myself, Gus, from Tacuarembó.',
    button: 'Message me on WhatsApp',
    servicesButton: 'See services',
    message: "Hi Gus, I saw the Tacuara Lab site and I'd like to ask about a website for my business.",
    trust: ['Made in Tacuarembó', 'Domain and hosting included the first year', 'Delivered in 7 to 15 business days', 'You own your domain and content'],
    benefits: { heading: 'What you get', items: [
      { heading: 'Looks good on mobile', text: 'Designed phone-first, because that is where people look for you.' },
      { heading: 'Easy to find', text: 'Google basics covered: title, description, map and your business details.' },
      { heading: 'Easy to reach', text: 'WhatsApp and call buttons always within reach.' },
    ] },
    packages: { heading: 'Two ways to start', items: [
      { heading: 'Presence', text: 'One page with who you are, what you do, hours, map and WhatsApp.' },
      { heading: 'Full site', text: 'Up to five pages, a contact form and an optional English version.' },
    ], link: 'See services and details' },
    process: { heading: 'How we work', items: [
      { heading: 'We talk', text: 'You tell me about your business in a short chat.' },
      { heading: 'I show you the design', text: 'I show you how your site will look.' },
      { heading: 'We adjust together', text: 'We do the revision rounds included in your package.' },
      { heading: 'We publish', text: 'I put it live on your domain and make sure it works.' },
    ] },
    proof: { heading: 'Two projects of my own', text: "I don't have client work yet. Here are my own site and the one for my lawn care service. I'm looking for my first 5 clients: launch price in exchange for a testimonial and permission to show the work.", button: 'See projects' },
    closing: 'Got a business and want to be found?',
  },
} satisfies Record<Language, HomeContent>;
