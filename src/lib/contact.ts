import { WHATSAPP_URL } from '../data/site';

export const whatsappUrl = (message: string): string =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
