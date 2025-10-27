import { useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { languages } from '@/i18n/languages';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  hreflangUrls?: Record<string, string>;
}

export const SEOHead = ({ title, description, keywords, canonical, image, hreflangUrls }: SEOHeadProps) => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = title;

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    
    // Open Graph
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', 'website', true);
    updateMeta('og:url', canonical || window.location.href, true);
    if (image) updateMeta('og:image', image, true);
    
    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    if (image) updateMeta('twitter:image', image);

    document.documentElement.lang = language;

    if (!canonical) {
      console.warn('⚠️ SEOHead: canonical URL not provided, using window.location.href as fallback');
    }
    
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical || window.location.href;

    // Remove old hreflang links
    document.querySelectorAll('link[rel="alternate"]').forEach(el => el.remove());

    if (hreflangUrls) {
      Object.entries(hreflangUrls).forEach(([langCode, url]) => {
        const hreflangLink = document.createElement('link');
        hreflangLink.rel = 'alternate';
        hreflangLink.hreflang = langCode;
        hreflangLink.href = url;
        document.head.appendChild(hreflangLink);
      });
    } else {
      languages.forEach(lang => {
        const hreflangLink = document.createElement('link');
        hreflangLink.rel = 'alternate';
        hreflangLink.hreflang = lang.code;
        
        const url = new URL(window.location.href);
        const pathParts = url.pathname.split('/').filter(Boolean);
        if (pathParts.length > 0 && ['en', 'de', 'es', 'pt', 'fr', 'it'].includes(pathParts[0])) {
          pathParts[0] = lang.code;
        } else {
          pathParts.unshift(lang.code);
        }
        url.pathname = '/' + pathParts.join('/');
        hreflangLink.href = url.toString();
        
        document.head.appendChild(hreflangLink);
      });
    }

    const xDefaultLink = document.createElement('link');
    xDefaultLink.rel = 'alternate';
    xDefaultLink.hreflang = 'x-default';
    xDefaultLink.href = canonical || window.location.href;
    document.head.appendChild(xDefaultLink);

  }, [title, description, keywords, canonical, image, language, hreflangUrls]);

  return null;
};
