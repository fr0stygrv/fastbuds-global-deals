import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Sprout } from 'lucide-react';

export const Header = () => {
  const { t, language } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === `/${language}`) {
      return location.pathname === `/${language}` || location.pathname === `/${language}/`;
    }
    return location.pathname.startsWith(`/${language}${path}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to={`/${language}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Sprout className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl">Fast Buds Coupons</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to={`/${language}`}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive(`/${language}`) ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {t.nav.home}
          </Link>
          <Link
            to={`/${language}/faq`}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/faq') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {t.nav.faq}
          </Link>
          <Link
            to={`/${language}/about`}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/about') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {t.nav.about}
          </Link>
          <Link
            to={`/${language}/contact`}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/contact') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {t.nav.contact}
          </Link>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
};
