import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { coupons } from '@/data/coupons';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, FileText, Info, Mail, HelpCircle, Newspaper } from 'lucide-react';

export default function Sitemap() {
  const { t, language } = useLanguage();

  const activeCoupons = coupons.filter(c => c.isActive);
  const inactiveCoupons = coupons.filter(c => !c.isActive);

  const pages = [
    { name: t.nav.home, path: `/${language}`, icon: FileText },
    { name: t.nav.about, path: `/${language}/about`, icon: Info },
    { name: t.nav.contact, path: `/${language}/contact`, icon: Mail },
    { name: t.nav.faq, path: `/${language}/faq`, icon: HelpCircle },
    { name: t.nav.news, path: `/${language}/news`, icon: Newspaper },
  ];

  return (
    <>
      <SEOHead
        title={`${t.nav.sitemap || 'Sitemap'} - Fast Buds Coupons`}
        description={`Complete sitemap of Fast Buds Coupons website. Find all pages and ${coupons.length} coupon codes in ${language.toUpperCase()}.`}
        canonical={`https://fastbuds-coupon.com/${language}/sitemap`}
        robots="noindex, follow"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-hero border-b border-border">
          <div className="container py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t.nav.sitemap || 'Sitemap'}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t.meta.sitemapDescription || 'Find all pages and coupons on our website'}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container py-16">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Main Pages */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  {t.sitemap?.mainPages || 'Main Pages'}
                </h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pages.map((page) => {
                    const Icon = page.icon;
                    return (
                      <Link
                        key={page.path}
                        to={page.path}
                        className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition-colors"
                      >
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{page.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Active Coupons */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-emerald-500" />
                  {t.sitemap?.activeCoupons || 'Active Coupons'} 
                  <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    {activeCoupons.length}
                  </Badge>
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activeCoupons.map((coupon) => {
                    const content = coupon.content[language];
                    const word = language === 'es' ? 'cupon' : language === 'pt' ? 'cupom' : 'coupon';
                    const slug = content.slug.split('/').pop();
                    
                    return (
                      <Link
                        key={coupon.id}
                        to={`/${language}/${word}/${slug}`}
                        className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition-colors"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{content.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {content.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 ml-4">
                          <Badge className="bg-gradient-primary text-primary-foreground">
                            {coupon.discount}
                          </Badge>
                          <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                            {coupon.code}
                          </code>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Inactive Coupons (if any) */}
            {inactiveCoupons.length > 0 && (
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <XCircle className="h-6 w-6 text-muted-foreground" />
                    {t.sitemap?.expiredCoupons || 'Expired Coupons'}
                    <Badge variant="outline">{inactiveCoupons.length}</Badge>
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {inactiveCoupons.map((coupon) => {
                      const content = coupon.content[language];
                      const word = language === 'es' ? 'cupon' : language === 'pt' ? 'cupom' : 'coupon';
                      const slug = content.slug.split('/').pop();
                      
                      return (
                        <Link
                          key={coupon.id}
                          to={`/${language}/${word}/${slug}`}
                          className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition-colors opacity-60"
                        >
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{content.title}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-1">
                              {content.description}
                            </p>
                          </div>
                          <code className="text-sm font-mono bg-muted px-2 py-1 rounded ml-4">
                            {coupon.code}
                          </code>
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
