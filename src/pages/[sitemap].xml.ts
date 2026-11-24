import type { APIRoute } from 'astro';
import { INDEXABLE, absoluteUrl } from '../data/site';
import { languages, pageIds, pageUrl } from '../lib/pages';
import { caseStudies, caseStudyUrl } from '../lib/projects';

// A dynamic route emits no sitemap file at all while indexing is disabled.
export function getStaticPaths() {
  return INDEXABLE ? [{ params: { sitemap: 'sitemap' } }] : [];
}

const xml = (value: string): string => value.replace(/[<>&"']/g, (char) => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
})[char]!);

export const GET: APIRoute = () => {
  // Use the same route helpers and case-study data as the page generator.
  const pairs = [
    ...pageIds.map((page) => ({ es: pageUrl('es', page), en: pageUrl('en', page) })),
    ...caseStudies.map((study) => ({ es: caseStudyUrl('es', study), en: caseStudyUrl('en', study) })),
  ];
  const entries = pairs.flatMap((paths) => languages.map((lang) => `<url>
  <loc>${xml(absoluteUrl(paths[lang]))}</loc>
  <xhtml:link rel="alternate" hreflang="es" href="${xml(absoluteUrl(paths.es))}" />
  <xhtml:link rel="alternate" hreflang="en" href="${xml(absoluteUrl(paths.en))}" />
  <xhtml:link rel="alternate" hreflang="x-default" href="${xml(absoluteUrl(paths.es))}" />
</url>`));
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>\n`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
