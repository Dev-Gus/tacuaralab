import type { APIRoute } from 'astro';
import { INDEXABLE, SITEMAP_PATH, absoluteUrl } from '../data/site';

export const GET: APIRoute = () => new Response(
  INDEXABLE
    ? `User-agent: *\nAllow: /\nSitemap: ${absoluteUrl(SITEMAP_PATH)}\n`
    : 'User-agent: *\nDisallow: /\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
