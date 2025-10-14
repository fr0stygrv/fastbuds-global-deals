import { useLanguage } from '@/i18n/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title={t.meta.contactTitle}
        description={t.meta.contactDescription}
      />

      <div className="min-h-screen">
        <section className="gradient-hero border-b border-border">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                {t.contact.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t.contact.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-card-hover">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                    <Mail className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email Us</h3>
                    <p className="text-lg text-muted-foreground">{t.contact.email}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-muted-foreground">
                    We're here to help! Whether you have questions about our coupons, want to submit a new deal, 
                    or just want to say hello, feel free to reach out. We typically respond within 24-48 hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
