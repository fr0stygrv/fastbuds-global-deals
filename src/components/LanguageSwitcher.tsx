import { useLanguage } from '@/i18n/LanguageContext';
import { languages, Language } from '@/i18n/languages';
import { useNavigate, useLocation } from 'react-router-dom';
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
    
    // Replace language in URL path
    const pathParts = location.pathname.split('/').filter(Boolean);
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
