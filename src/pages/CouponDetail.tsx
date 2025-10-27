import { useState, useEffect, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Language, languages } from '@/i18n/languages';
import { coupons } from '@/data/coupons';
import { SEOHead } from '@/components/SEOHead';
import { StructuredData } from '@/components/StructuredData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RelatedCoupons } from '@/components/RelatedCoupons';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Copy, ExternalLink, CheckCircle2, CheckCircle, Users, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { getUsageCount, incrementUsageCount } from '@/lib/couponStorage';
import fastbudsLogo from '@/assets/fastbuds-logo.png';

export default function CouponDetail() {
  const { t } = useLanguage();
  const { slug, lang, word } = useParams();
  const [copied, setCopied] = useState(false);
  const [displayCount, setDisplayCount] = useState<number>(0);

  // Use language from URL parameter
  const language = (lang || 'en') as Language;

  // Determine correct word for language
  const correctWord = language === 'es' ? 'cupon' : language === 'pt' ? 'cupom' : 'coupon';
  
  // Redirect if word doesn't match language
  if (word !== correctWord) {
    return <Navigate to={`/${language}/${correctWord}/${slug}`} replace />;
  }

  // Find coupon by slug in current language
  const coupon = coupons.find(c => c.content[language].slug === `${language}/${word}/${slug}`);

  if (!coupon) {
    return <Navigate to={`/${language}`} replace />;
  }

  const content = coupon.content[language];

  // Generate hreflang URLs for all languages
  const hreflangUrls = useMemo(() => {
    const urls: Record<string, string> = {};
    const baseUrl = 'https://fastbuds-coupon.com';
    
    languages.forEach(lang => {
      const localizedContent = coupon.content[lang.code];
      if (localizedContent) {
        urls[lang.code] = `${baseUrl}/${localizedContent.slug}`;
      }
    });
    
    return urls;
  }, [coupon]);

  useEffect(() => {
    if (coupon) {
      const savedCount = getUsageCount(coupon.id, coupon.usageCount);
      setDisplayCount(savedCount);
    }
  }, [coupon]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    
    // Увеличить счетчик (или сбросить при достижении 999)
    const newCount = incrementUsageCount(coupon.id, coupon.usageCount);
    setDisplayCount(newCount);
    
    toast.success(`${t.coupon.copyCode}: ${coupon.code}`);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGoToStore = () => {
    window.open('https://2fast4buds.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEOHead
        title={`${content.title} - Fast Buds Coupons`}
        description={content.description}
        keywords={`${coupon.code}, ${content.title}, Fast Buds`}
        canonical={`https://fastbuds-coupon.com/${content.slug}`}
        hreflangUrls={hreflangUrls}
      />
      
      <StructuredData
        type="offer"
        data={{
          name: content.title,
          description: content.description,
          priceDiscount: coupon.discount,
          promoCode: coupon.code,
          validThrough: coupon.neverExpires ? '2040-12-31' : coupon.expiryDate,
          url: `https://fastbuds-coupon.com/${content.slug}`
        }}
      />
      
      <StructuredData
        type="organization"
        data={{
          name: 'Fast Buds Coupons',
          url: 'https://fastbuds-coupon.com',
          logo: 'https://fastbuds-coupon.com/favicon.ico',
          sameAs: [
            'https://www.instagram.com/fast_buds/',
            'https://twitter.com/FastBuds_',
            'https://www.tiktok.com/@fast_buds',
            'https://www.pinterest.com/fastbuds/'
          ]
        }}
      />
      
      <StructuredData
        type="breadcrumb"
        data={[
          { name: t.nav.home, url: `https://fastbuds-coupon.com/${language}` },
          { name: t.nav.coupons || 'Coupons', url: `https://fastbuds-coupon.com/${language}` },
          { name: content.title, url: `https://fastbuds-coupon.com/${content.slug}` }
        ]}
      />

      {/* FAQPage Structured Data */}
      {content.faq && content.faq.length > 0 && (
        <StructuredData
          type="faqpage"
          data={content.faq.map(item => ({
            question: item.question,
            answer: item.answer
          }))}
        />
      )}

      <div className="min-h-screen">
        <Breadcrumbs 
          items={[
            { label: t.nav.coupons || 'Coupons', href: `/${language}` },
            { label: content.title }
          ]} 
        />
        <section className="gradient-hero border-b border-border">
          <div className="container py-16">
            <div className="max-w-4xl mx-auto">
              {/* Coupon Card */}
              {coupon.image && (
                <div 
                  className="mb-8 rounded-lg overflow-hidden shadow-lg relative bg-cover bg-center min-h-[300px] flex items-center p-8"
                  style={{ backgroundImage: `url(${coupon.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
                  
                  <div className="relative z-10 flex items-center justify-between w-full">
                    {/* Left: Title */}
                    <div className="flex-1">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                        {content.title}
                      </h1>
                    </div>
                    
                    {/* Right: Logo and Discount */}
                    <div className="flex flex-col items-end gap-4 ml-8">
                      <img 
                        src={fastbudsLogo} 
                        alt="Fast Buds"
                        className="w-32 md:w-40 h-auto drop-shadow-lg"
                      />
                      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                        {coupon.discount}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 mb-6">
                {coupon.neverExpires && (
                  <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-base px-4 py-1 gap-2">
                    <CheckCircle className="h-4 w-4" />
                    {t.coupon.alwaysActive}
                  </Badge>
                )}
                <Badge variant="outline" className="text-base px-4 py-1 gap-2">
                  <Users className="h-4 w-4" />
                  <span>{displayCount >= 999 ? '999+' : displayCount}</span>
                </Badge>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                {content.description}
              </p>

              {/* Code Box */}
              <Card className="mb-8 shadow-card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1 w-full">
                      <p className="text-sm text-muted-foreground mb-2">
                        {t.coupon.copyCode}:
                      </p>
                      <code className="text-2xl md:text-3xl font-bold text-primary block">
                        {coupon.code}
                      </code>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                      <Button
                        onClick={handleCopy}
                        variant="outline"
                        size="lg"
                        className="gap-2 w-full md:w-auto"
                      >
                        {copied ? (
                          <>
                            <CheckCircle2 className="h-5 w-5" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-5 w-5" />
                            {t.coupon.copyCode}
                          </>
                        )}
                      </Button>
                      <Button
                        onClick={handleGoToStore}
                        size="lg"
                        className="bg-gradient-primary hover:opacity-90 transition-opacity gap-2 w-full md:w-auto"
                      >
                        {t.coupon.goToStore}
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Long Description Section */}
        {content.longDescription && (
          <section className="container py-16 border-b border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">{t.coupon.aboutDiscount}</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {content.longDescription}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Key Benefits Section */}
        {content.features && content.features.length > 0 && (
          <section className="py-16 border-b border-border bg-muted/30">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">{t.coupon.keyBenefits}</h2>
                <div className="grid gap-4">
                  {content.features.map((feature, index) => (
                    <Card key={index} className="border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary">
                              <Sparkles className="h-5 w-5 text-primary-foreground" />
                            </div>
                          </div>
                          <p className="text-base leading-relaxed">{feature}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* How to Use Section */}
        <section className="container py-16">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">{t.coupon.howToUse}</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-bold">
                    1
                  </div>
                  <div>
                    <p className="text-base">{t.coupon.instruction1}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-bold">
                    2
                  </div>
                  <div>
                    <p className="text-base">{t.coupon.instruction2}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-bold">
                    3
                  </div>
                  <div>
                    <p className="text-base">{t.coupon.instruction3}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-bold">
                    4
                  </div>
                  <div>
                    <p className="text-base">{t.coupon.instruction4}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        {content.faq && content.faq.length > 0 && (
          <section className="container py-16 border-b border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">{t.coupon.frequentlyAskedQuestions}</h2>
              <Accordion type="single" collapsible className="w-full">
                {content.faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {/* Related Coupons */}
        <RelatedCoupons currentCouponId={coupon.id} />
      </div>
    </>
  );
}
