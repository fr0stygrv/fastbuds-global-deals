import { useEffect } from 'react';

interface OfferData {
  name: string;
  description: string;
  promoCode: string;
  validFrom?: string;
  validThrough?: string;
  url: string;
}

interface OrganizationData {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface WebSiteData {
  name: string;
  url: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ItemListItem {
  name: string;
  url: string;
  image?: string;
  description: string;
  price?: string;
}

interface StructuredDataProps {
  type: 'offer' | 'organization' | 'breadcrumb' | 'website' | 'faqpage' | 'itemlist';
  data: OfferData | OrganizationData | BreadcrumbItem[] | WebSiteData | FAQItem[] | ItemListItem[];
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    let structuredData: any = {};
    const scriptId = `structured-data-${type}`;

    // Remove existing script if present
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    if (type === 'offer' && 'promoCode' in data) {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Offer",
        "name": data.name,
        "description": data.description,
        "url": data.url,
        "category": "Discount Coupon",
        "availability": "https://schema.org/InStock",
        "validFrom": data.validFrom || "2024-01-01",
        "priceValidUntil": data.validThrough || "2040-12-31",
        "eligibleRegion": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "seller": {
          "@type": "Organization",
          "name": "Fast Buds",
          "url": "https://2fast4buds.com/"
        }
      };
    } else if (type === 'organization' && 'name' in data && 'url' in data && !('promoCode' in data)) {
      const orgData = data as OrganizationData;
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": orgData.name,
        "url": orgData.url,
        "logo": orgData.logo,
        "sameAs": orgData.sameAs || []
      };
    } else if (type === 'breadcrumb' && Array.isArray(data)) {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };
    } else if (type === 'website' && 'name' in data && 'description' in data) {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": data.name,
        "url": data.url,
        "description": data.description,
        "publisher": {
          "@type": "Organization",
          "name": "Fast Buds Coupons"
        }
      };
    } else if (type === 'faqpage' && Array.isArray(data)) {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.map((item: any) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };
    } else if (type === 'itemlist' && Array.isArray(data)) {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": data.map((item: any, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Offer",
            "name": item.name,
            "url": item.url,
            "image": item.image,
            "description": item.description,
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Fast Buds"
            }
          }
        }))
      };
    }

    // Add structured data script to head
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
};
