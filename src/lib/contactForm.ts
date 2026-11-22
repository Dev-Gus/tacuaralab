import type { Language } from './pages';

// Public form identifier, not a secret. The destination stays in the Web3Forms account.
export const WEB3FORMS_ACCESS_KEY: string = 'a5dad870-78cd-4a44-b0a8-8fe2bd8ce00a';

// Web3Forms' documented shared sitekey for the free plan:
// https://docs.web3forms.com/getting-started/customizations/spam-protection/hcaptcha
export const WEB3FORMS_HCAPTCHA_SITEKEY: string = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';

interface ContactFormContent {
  heading: string;
  name: string;
  email: string;
  message: string;
  button: string;
  sending: string;
  success: string;
  error: string;
  privacy: string;
  required: string;
  invalidEmail: string;
  tooLong: string;
  captchaRequired: string;
}

export const contactForm = {
  es: {
    heading: 'O escribime con este formulario',
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    button: 'Enviar mensaje',
    sending: 'Enviando...',
    success: 'Listo, recibí tu mensaje. Te respondo por email lo antes posible.',
    error: 'No se pudo enviar el mensaje. Probá de nuevo o escribime por WhatsApp.',
    privacy: 'Este formulario está protegido con hCaptcha.',
    required: 'Completá este campo.',
    invalidEmail: 'Escribí un email válido.',
    tooLong: 'Acortá este texto.',
    captchaRequired: 'Completá el hCaptcha antes de enviar.',
  },
  en: {
    heading: 'Or write to me with this form',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    button: 'Send message',
    sending: 'Sending...',
    success: "Done, I got your message. I'll reply by email as soon as I can.",
    error: 'The message could not be sent. Try again or message me on WhatsApp.',
    privacy: 'This form is protected by hCaptcha.',
    required: 'Fill out this field.',
    invalidEmail: 'Enter a valid email.',
    tooLong: 'Shorten this text.',
    captchaRequired: 'Complete the hCaptcha before sending.',
  },
} satisfies Record<Language, ContactFormContent>;
