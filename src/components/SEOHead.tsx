import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { languages } from '@/i18n/languages';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  hreflangUrls?: Record<string, string>;
  robots?: string;
}

export const SEOHead = ({ title, description, keywords, canonical, image, hreflangUrls, robots }: SEOHeadProps) => {
  const { language } = useLanguage();
  const location = useLocation();

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

    // Use different description for root path vs language-specific paths
    let finalDescription = description;
    
    if (location.pathname === '/') {
      finalDescription = 'Get verified Fast Buds coupon codes, discount codes & promo deals for 2025. Save on Fast Buds seeds with exclusive offers and verified coupons.';
    } else if (location.pathname.match(/^\/(en|de|es|pt|fr|it)\/?$/)) {
      finalDescription = description;
    }

    updateMeta('description', finalDescription);
    if (keywords) updateMeta('keywords', keywords);
    if (robots) updateMeta('robots', robots);
    updateMeta('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Open Graph
    updateMeta('og:title', title, true);
    updateMeta('og:description', finalDescription, true);
    updateMeta('og:type', 'website', true);
    updateMeta('og:url', canonical || window.location.href, true);
    if (image) updateMeta('og:image', image, true);
    
    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', finalDescription);
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
        let pathParts = url.pathname.split('/').filter(Boolean);
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

    // x-default should always point to the English version
    const xDefaultLink = document.createElement('link');
    xDefaultLink.rel = 'alternate';
    xDefaultLink.hreflang = 'x-default';
    
    if (canonical) {
      // Replace current language with 'en' in canonical URL
      const enUrl = canonical.replace(/\/(en|de|es|pt|fr|it)\//, '/en/').replace(/\/(en|de|es|pt|fr|it)$/, '/en');
      xDefaultLink.href = enUrl;
    } else {
      // Fallback: construct EN URL from current location
      const url = new URL(window.location.href);
      let pathParts = url.pathname.split('/').filter(Boolean);
      if (pathParts.length > 0 && ['en', 'de', 'es', 'pt', 'fr', 'it'].includes(pathParts[0])) {
        pathParts[0] = 'en';
      }
      url.pathname = '/' + pathParts.join('/');
      xDefaultLink.href = url.toString();
    }
    
    document.head.appendChild(xDefaultLink);

  }, [title, description, keywords, canonical, image, language, hreflangUrls, robots, location.pathname]);

  return null;
};
