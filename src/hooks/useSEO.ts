import { useEffect } from 'react';

const SITE_NAME = 'Hilon — AI-Powered Retail Intelligence | Aira';
const SITE_URL = 'https://hilon.ai';
const DEFAULT_DESCRIPTION =
  'Aira by Hilon brings retail billing, customer intelligence, AI insights, engagement and analytics together in one intelligent platform.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

function setMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export interface SEOOptions {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  canonicalPath?: string;
  ogImage?: string;
}

export function useSEO(options: SEOOptions | string, legacyDescription?: string) {
  useEffect(() => {
    let title: string;
    let description: string;
    let canonicalPath: string | undefined;

    if (typeof options === 'string') {
      title = options;
      description = legacyDescription || DEFAULT_DESCRIPTION;
    } else {
      title = options.title || SITE_NAME;
      description = options.description || DEFAULT_DESCRIPTION;
      canonicalPath = options.canonicalPath;
    }

    const fullTitle = title.toLowerCase().includes('hilon') || title.toLowerCase().includes('aira')
      ? title
      : `${title} | Hilon Aira`;

    document.title = fullTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      setMetaByName('description', description);
    }

    const canonicalHref = `${SITE_URL}${canonicalPath ?? window.location.pathname}`;
    setCanonical(canonicalHref);

    setMetaByProperty('og:title', fullTitle);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:url', canonicalHref);
    setMetaByProperty('og:image', DEFAULT_OG_IMAGE);
    setMetaByName('twitter:title', fullTitle);
    setMetaByName('twitter:description', description);

    return () => {
      document.title = SITE_NAME;
    };
  }, [options, legacyDescription]);
}

export default useSEO;
