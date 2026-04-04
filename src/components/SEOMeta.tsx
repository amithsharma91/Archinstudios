import { useEffect } from 'react';

interface SEOMetaProps {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  schema?: object[];
}

/** The single authoritative domain — no trailing slash, always https, no www variation */
const CANONICAL_DOMAIN = 'https://archinstudios.in';

/** Builds a clean canonical URL — no double slashes */
function buildCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Root path: keep trailing slash; other paths: strip trailing slash
  const normPath = cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '');
  return `${CANONICAL_DOMAIN}${normPath}`;
}

/** Upserts a <meta> tag in <head> by property or name attribute */
function upsertMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

/** Upserts the <link rel="canonical"> tag in <head> */
function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function SEOMeta({
  title,
  description,
  keywords,
  canonicalPath,
  schema,
}: SEOMetaProps) {
  const canonicalUrl = buildCanonicalUrl(canonicalPath);
  const lastMod = new Date().toISOString().split('T')[0];

  /* ── Imperatively manage canonical + og:url so they always reflect
        the current route and override the static fallback in index.html ── */
  useEffect(() => {
    upsertCanonical(canonicalUrl);
    upsertMeta('property', 'og:url', canonicalUrl);
  }, [canonicalUrl]);

  /* ── JSON-LD injection ── */
  useEffect(() => {
    if (!schema || schema.length === 0) return;
    const inserted: HTMLScriptElement[] = schema.map((s) => {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.textContent = JSON.stringify(s);
      document.head.appendChild(el);
      return el;
    });
    return () => {
      inserted.forEach((el) => {
        if (document.head.contains(el)) document.head.removeChild(el);
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="last-modified" content={lastMod} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="ARCHIN Studio" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Geo — Jakkur, Yelahanka, Bengaluru */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Jakkur, Yelahanka, Bengaluru" />
      <meta name="geo.position" content="13.0868386;77.6037512" />
      <meta name="ICBM" content="13.0868386, 77.6037512" />
    </>
  );
}
