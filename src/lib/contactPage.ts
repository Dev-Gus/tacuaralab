import type { Language } from './pages';

interface ContactContent {
  title: string;
  description: string;
  heading: string;
  intro: string;
  button: string;
  message: string;
  note: string;
  callHeading: string;
  phone: string;
  callButton: string;
  locationHeading: string;
  location: string;
  messageHeading: string;
  items: [string, string, string];
}

export const contact = {
  es: {
    title: 'Contacto | Tacuara Lab, estudio web en Uruguay',
    description: 'Escribile a Gus por WhatsApp o llamá. Estudio web en Tacuarembó, Uruguay.',
    heading: 'Contacto',
    intro: 'Contame de tu negocio y qué necesitás. Te respondo yo, por WhatsApp o por teléfono, lo antes que pueda.',
    button: 'Escribime por WhatsApp',
    message: 'Hola Gus, quiero consultar por una página web para mi negocio.',
    note: 'Es la forma más rápida de hablar conmigo.',
    callHeading: 'Llamame',
    phone: '098 871 858',
    callButton: 'Llamar ahora',
    locationHeading: 'Dónde estoy',
    location: 'Tacuarembó, Uruguay.',
    messageHeading: 'Qué contarme en el primer mensaje',
    items: ['El nombre de tu negocio y a qué se dedica.', 'Si ya tenés sitio web o dominio.', 'Para cuándo lo necesitás.'],
  },
  en: {
    title: 'Contact | Tacuara Lab, web studio in Uruguay',
    description: 'Message Gus on WhatsApp or call. Web studio in Tacuarembó, Uruguay.',
    heading: 'Contact',
    intro: 'Tell me about your business and what you need. I answer myself, by WhatsApp or phone, as soon as I can.',
    button: 'Message me on WhatsApp',
    message: "Hi Gus, I'd like to ask about a website for my business.",
    note: 'It is the fastest way to reach me.',
    callHeading: 'Call me',
    phone: '098 871 858',
    callButton: 'Call now',
    locationHeading: 'Where I am',
    location: 'Tacuarembó, Uruguay.',
    messageHeading: 'What to tell me in your first message',
    items: ['Your business name and what it does.', 'Whether you already have a website or domain.', 'When you need it.'],
  },
} satisfies Record<Language, ContactContent>;
