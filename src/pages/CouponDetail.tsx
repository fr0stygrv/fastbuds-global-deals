import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { coupons } from '@/data/coupons';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Copy, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function CouponDetail() {
  const { language, t } = useLanguage();
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  // Find coupon by slug in current language
  const coupon = coupons.find(c => c.content[language].slug === `${language}/coupon/${slug}`);

  if (!coupon) {
    return <Navigate to={`/${language}`} replace />;
  }

  const content = coupon.content[language];
  const daysUntilExpiry = Math.ceil(
    (new Date(coupon.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(coupon.code);
    setCopied(true);
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
                {daysUntilExpiry <= 7 && (
                  <Badge variant="destructive" className="text-base px-4 py-1">
                    {t.coupon.expires} {daysUntilExpiry}d
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {content.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                {content.description}
              </p>

              <div className="flex items-center gap-3 text-muted-foreground mb-8">
                <Calendar className="h-5 w-5" />
                <span className="text-base">
                  {t.coupon.expires}: {new Date(coupon.expiryDate).toLocaleDateString(language)}
                </span>
              </div>

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
