import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Sprout, Menu } from 'lucide-react';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === `/${language}`) {
      return location.pathname === `/${language}` || location.pathname === `/${language}/`;
    }
    return location.pathname.startsWith(`/${language}${path}`);
  };

  const navLinks = [
    { path: `/${language}`, label: t.nav.home, matchPath: `/${language}` },
    { path: `/${language}/faq`, label: t.nav.faq, matchPath: '/faq' },
    { path: `/${language}/about`, label: t.nav.about, matchPath: '/about' },
    { path: `/${language}/contact`, label: t.nav.contact, matchPath: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium transition-colors hover:text-primary px-2 py-2 rounded-md ${
                      isActive(link.matchPath) ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link to={`/${language}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Sprout className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">Fast Buds Coupons</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.matchPath) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
};
