import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* About */}
          <div>
            <h3 className="font-semibold mb-3">{t.nav.about}</h3>
            <p className="text-sm text-muted-foreground">
              {t.about.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">{t.footer?.quickLinks || 'Quick Links'}</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to={`/${language}`} className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.home}
              </Link>
              <Link to={`/${language}/faq`} className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.faq}
              </Link>
              <Link to={`/${language}/about`} className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.about}
              </Link>
              <Link to={`/${language}/contact`} className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Other */}
          <div>
            <h3 className="font-semibold mb-3">{t.footer?.other || 'Other'}</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to={`/${language}/news`} className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.news}
              </Link>
              <Link to={`/${language}/sitemap`} className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.sitemap || 'Sitemap'}
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Fast Buds Coupons. {t.footer?.rights || 'All rights reserved'}.</p>
          <p className="text-xs">
            {t.footer?.disclaimer || 'Coupon codes and offers are subject to change without notice.'}
          </p>
        </div>
      </div>
    </footer>
  );
};
