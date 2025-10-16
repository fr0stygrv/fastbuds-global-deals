import { useLanguage } from '@/i18n/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Twitter, Youtube } from 'lucide-react';

// TikTok and Pinterest custom SVG icons
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
  </svg>
);

export default function Contact() {
  const { t } = useLanguage();

  const socialMedia = [
    {
      name: 'Instagram',
      label: t.contact.instagram,
      icon: Instagram,
      url: 'https://www.instagram.com/fr0stygrv',
      color: 'hover:bg-pink-600',
    },
    {
      name: 'Twitter',
      label: t.contact.twitter,
      icon: Twitter,
      url: 'https://x.com/frostygrv',
      color: 'hover:bg-blue-500',
    },
    {
      name: 'TikTok',
      label: t.contact.tiktok,
      icon: TikTokIcon,
      url: 'https://www.tiktok.com/@fr0stygrv',
      color: 'hover:bg-black dark:hover:bg-white dark:hover:text-black',
    },
    {
      name: 'YouTube',
      label: t.contact.youtube,
      icon: Youtube,
      url: 'https://www.youtube.com/@fr0stygrv',
      color: 'hover:bg-red-600',
    },
    {
      name: 'Pinterest',
      label: t.contact.pinterest,
      icon: PinterestIcon,
      url: 'https://www.pinterest.com/fr0stygrv',
      color: 'hover:bg-red-600',
    },
  ];

  return (
    <>
      <SEOHead
        title={t.meta.contactTitle}
        description={t.meta.contactDescription}
        keywords="fast buds social media, fast buds instagram, fast buds twitter, fast buds tiktok, fast buds pinterest, fast buds contact"
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
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-card-hover">
              <CardContent className="p-8 space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">{t.contact.followUs}</h2>
                  <p className="text-muted-foreground">
                    Stay connected for exclusive deals, new coupon codes, and Fast Buds updates
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {socialMedia.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={social.name}
                        onClick={() => window.open(social.url, '_blank', 'noopener,noreferrer')}
                        variant="outline"
                        size="lg"
                        className={`h-auto py-6 flex flex-col items-center gap-3 transition-all ${social.color} hover:text-white`}
                      >
                        <IconComponent className="h-8 w-8" />
                        <span className="font-semibold text-base">{social.label}</span>
                      </Button>
                    );
                  })}
                </div>

                <div className="pt-6 border-t border-border text-center">
                  <p className="text-muted-foreground">
                    Follow us on social media to never miss a Fast Buds coupon code, special promotion, or exclusive deal!
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
