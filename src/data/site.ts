export const INDEXABLE = false;

export const SITE_URL = 'https://tacuaralab.com';
export const SITE_NAME = 'Tacuara Lab';
export const SITEMAP_PATH = '/sitemap.xml';
export const TELEPHONE = '+59898871858';
export const WHATSAPP_URL = `https://wa.me/${TELEPHONE.slice(1)}`;
export const INSTAGRAM_URL = 'https://www.instagram.com/tacuara.lab';

export const absoluteUrl = (path: string): string => new URL(path, SITE_URL).href;
