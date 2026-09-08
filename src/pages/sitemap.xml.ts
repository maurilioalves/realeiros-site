import type { APIRoute } from 'astro';
import { indexableBasePaths } from '../seo/routes';
import {
  defaultRouteLocale,
  localizePath,
  localeDefinitions,
  routeLocales,
} from '../i18n/config';
import { site } from '../data/site';

export const prerender = true;

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const absoluteUrl = (path: string) => new URL(path, site.domain).href;

const renderUrl = (basePath: string, routeLocale: (typeof routeLocales)[number]) => {
  const localizedPath = localizePath(basePath, routeLocale);
  const loc = absoluteUrl(localizedPath);
  const alternates = routeLocales
    .map((targetLocale) => {
      const languageTag = localeDefinitions[targetLocale].languageTag;
      const href = absoluteUrl(localizePath(basePath, targetLocale));
      return `    <xhtml:link rel="alternate" hreflang="${escapeXml(languageTag)}" href="${escapeXml(href)}" />`;
    })
    .join('\n');
  const xDefault = absoluteUrl(localizePath(basePath, defaultRouteLocale));

  return [
    '  <url>',
    `    <loc>${escapeXml(loc)}</loc>`,
    alternates,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(xDefault)}" />`,
    '  </url>',
  ].join('\n');
};

export const GET: APIRoute = () => {
  const urls = indexableBasePaths
    .flatMap((basePath) => routeLocales.map((routeLocale) => renderUrl(basePath, routeLocale)))
    .join('\n');

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
