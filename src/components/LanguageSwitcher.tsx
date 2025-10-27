import { useLanguage } from '@/i18n/LanguageContext';
import { languages, Language } from '@/i18n/languages';
import { useNavigate, useLocation } from 'react-router-dom';
import { coupons } from '@/data/coupons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = languages.find(l => l.code === language);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    
    const pathParts = location.pathname.split('/').filter(Boolean);
    
    // Check if we're on a coupon detail page
    if (pathParts.length >= 3 && ['coupon', 'cupon', 'cupom'].includes(pathParts[1])) {
      const currentSlug = pathParts.slice(1).join('/');
      const fullSlug = `${language}/${currentSlug}`;
      
      // Find the current coupon
      const currentCoupon = coupons.find(c => 
        Object.values(c.content).some(content => content.slug === fullSlug)
      );
      
      if (currentCoupon && currentCoupon.content[newLang]) {
        // Navigate to the same coupon in the new language
        navigate(`/${currentCoupon.content[newLang].slug}`);
        return;
      }
    }
    
    // For other pages, just replace the language code
    if (pathParts.length > 0 && ['en', 'de', 'es', 'pt', 'fr', 'it'].includes(pathParts[0])) {
      pathParts[0] = newLang;
    } else {
      pathParts.unshift(newLang);
    }
    
    navigate(`/${pathParts.join('/')}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLang?.flag} {currentLang?.name}</span>
          <span className="sm:hidden">{currentLang?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-popover z-50">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={language === lang.code ? 'bg-accent' : ''}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
