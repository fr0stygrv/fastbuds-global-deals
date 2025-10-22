import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/languages';
import { coupons } from '@/data/coupons';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Copy, ExternalLink, CheckCircle2, CheckCircle, Users } from 'lucide-react';
import { toast } from 'sonner';
import { getUsageCount, incrementUsageCount } from '@/lib/couponStorage';

export default function CouponDetail() {
  const { t } = useLanguage();
  const { slug, lang } = useParams();
  const [copied, setCopied] = useState(false);
  const [displayCount, setDisplayCount] = useState<number>(0);

  // Use language from URL parameter
  const language = (lang || 'en') as Language;

  // Find coupon by slug in current language
  const coupon = coupons.find(c => c.content[language].slug.split('/').pop() === slug);

  if (!coupon) {
    return <Navigate to={`/${language}`} replace />;
  }

  const content = coupon.content[language];

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
        canonical={`${window.location.origin}/${content.slug}`}
      />

      <div className="min-h-screen">
        <section className="gradient-hero border-b border-border">
          <div className="container py-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge className="bg-gradient-primary text-primary-foreground text-xl px-4 py-1 font-bold">
                  {coupon.discount}
                </Badge>
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

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {content.title}
              </h1>

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
      </div>
    </>
  );
}
