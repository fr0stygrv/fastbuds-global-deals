import { useLanguage } from '@/i18n/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout, Target, Heart } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title={t.meta.aboutTitle}
        description={t.meta.aboutDescription}
      />

      <div className="min-h-screen">
        <section className="gradient-hero border-b border-border">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                {t.about.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t.about.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <Card className="shadow-card-hover">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground">
                  {t.about.content}
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-card hover:shadow-card-hover transition-all">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Sprout className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Premium Quality</h3>
                  <p className="text-muted-foreground">
                    Only the best Fast Buds deals and verified coupon codes
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-card-hover transition-all">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Daily Updates</h3>
                  <p className="text-muted-foreground">
                    Fresh coupons and promotions added regularly
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-card-hover transition-all">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Community First</h3>
                  <p className="text-muted-foreground">
                    Built by growers, for growers worldwide
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
