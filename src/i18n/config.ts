export const routeLocales = ['pt-BR', 'en', 'es'] as const;

export type RouteLocale = (typeof routeLocales)[number];
export type LanguageTag = 'pt-BR' | 'en-US' | 'es-ES';

export const defaultRouteLocale: RouteLocale = 'pt-BR';

export const localeDefinitions: Record<
  RouteLocale,
  {
    routeLocale: RouteLocale;
    languageTag: LanguageTag;
    labLocale: LanguageTag;
    ogLocale: 'pt_BR' | 'en_US' | 'es_ES';
    shortLabel: string;
    label: string;
  }
> = {
  'pt-BR': {
    routeLocale: 'pt-BR',
    languageTag: 'pt-BR',
    labLocale: 'pt-BR',
    ogLocale: 'pt_BR',
    shortLabel: 'PT',
    label: 'Português (Brasil)',
  },
  en: {
    routeLocale: 'en',
    languageTag: 'en-US',
    labLocale: 'en-US',
    ogLocale: 'en_US',
    shortLabel: 'EN',
    label: 'English (US)',
  },
  es: {
    routeLocale: 'es',
    languageTag: 'es-ES',
    labLocale: 'es-ES',
    ogLocale: 'es_ES',
    shortLabel: 'ES',
    label: 'Español (España)',
  },
};

export const isRouteLocale = (value: string | null | undefined): value is RouteLocale =>
  value === 'pt-BR' || value === 'en' || value === 'es';

export const resolveRouteLocale = (value: string | null | undefined): RouteLocale => {
  if (isRouteLocale(value)) return value;

  const normalized = value?.toLowerCase();
  if (normalized?.startsWith('en')) return 'en';
  if (normalized?.startsWith('es')) return 'es';
  return defaultRouteLocale;
};

export const stripLocalePrefix = (pathname: string): string => {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;

  for (const locale of routeLocales) {
    if (locale === defaultRouteLocale) continue;
    const prefix = `/${locale}`;
    if (normalized === prefix || normalized === `${prefix}/`) return '/';
    if (normalized.startsWith(`${prefix}/`)) return normalized.slice(prefix.length);
  }

  return normalized || '/';
};

export const localizePath = (pathname: string, locale: RouteLocale): string => {
  const basePath = stripLocalePrefix(pathname);

  if (locale === defaultRouteLocale) return basePath;
  if (basePath === '/') return `/${locale}/`;
  return `/${locale}${basePath}`;
};
