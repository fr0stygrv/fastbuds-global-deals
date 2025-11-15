import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { coupons } from '@/data/coupons';
import { CouponCard } from '@/components/CouponCard';
import { SEOHead } from '@/components/SEOHead';
import { StructuredData } from '@/components/StructuredData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal, CheckCircle } from 'lucide-react';
import { getUsageCount, incrementUsageCount } from '@/lib/couponStorage';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type FilterType = 'all' | 'active';
type SortType = 'latest' | 'discount' | 'mostUsed';

export default function Home() {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('discount');

  const filteredAndSortedCoupons = useMemo(() => {
    let result = coupons.filter(coupon => {
      const content = coupon.content[language];
      const matchesSearch = 
        content.title.toLowerCase().includes(search.toLowerCase()) ||
        content.description.toLowerCase().includes(search.toLowerCase()) ||
        coupon.code.toLowerCase().includes(search.toLowerCase());

      if (!matchesSearch) return false;

      if (filter === 'active') return coupon.isActive;

      return true;
    });

    // Sort
    result.sort((a, b) => {
      if (sort === 'latest') {
        return b.id.localeCompare(a.id);
      }
      if (sort === 'discount') {
        const aDiscount = parseInt(a.discount);
        const bDiscount = parseInt(b.discount);
        return bDiscount - aDiscount;
      }
      if (sort === 'mostUsed') {
        // Получить счетчики из localStorage для каждого купона
        const aCount = getUsageCount(a.id, a.usageCount);
        const bCount = getUsageCount(b.id, b.usageCount);
        return bCount - aCount; // сортировка по убыванию
      }
      return 0;
    });

    return result;
  }, [search, filter, sort, language]);

  const handleQuickCopy = (coupon: typeof coupons[0]) => {
    navigator.clipboard.writeText(coupon.code);
    toast({
      title: "✅ Code copied!",
      description: `${coupon.code} is now in your clipboard`,
    });
    
    // Обновить счетчик использований
    incrementUsageCount(coupon.id, coupon.usageCount);
  };

  return (
    <>
      <SEOHead
        title={t.meta.homeTitle}
        description={t.meta.homeDescription}
        keywords={t.meta.homeKeywords}
        canonical={`https://fastbuds-coupon.com/${language}`}
        image="https://fastbuds-coupon.com/images/coupons/fastbuds.png"
        hreflangUrls={{
          en: "https://fastbuds-coupon.com/en",
          de: "https://fastbuds-coupon.com/de",
          es: "https://fastbuds-coupon.com/es",
          pt: "https://fastbuds-coupon.com/pt",
          fr: "https://fastbuds-coupon.com/fr",
          it: "https://fastbuds-coupon.com/it"
        }}
        robots="index, follow"
      />
      
      <StructuredData
        type="website"
        data={{
          name: 'Fast Buds Coupons',
          url: `https://fastbuds-coupon.com/${language}`,
          description: t.meta.homeDescription
        }}
      />
      
      <StructuredData
        type="organization"
        data={{
          name: 'Fast Buds Coupons',
          url: 'https://fastbuds-coupon.com',
          logo: 'https://fastbuds-coupon.com/favicon.ico',
          sameAs: [
            'https://www.instagram.com/fast_buds/',
            'https://twitter.com/FastBuds_',
            'https://www.tiktok.com/@fast_buds',
            'https://www.pinterest.com/fastbuds/'
          ]
        }}
      />

      <StructuredData
        type="itemlist"
        data={filteredAndSortedCoupons.map(coupon => ({
          name: coupon.content[language].title,
          url: `https://fastbuds-coupon.com/${coupon.content[language].slug}`,
          image: coupon.image ? `https://fastbuds-coupon.com${coupon.image}` : undefined,
          description: coupon.content[language].description
        }))}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-hero border-b border-border">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {t.home.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {t.home.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Coupon Strip - Минималистичная полоска */}
        {filteredAndSortedCoupons.length > 0 && (
          <section className="bg-gradient-to-r from-primary to-primary/80 py-4 animate-in fade-in duration-700">
            <div className="container">
              <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
                {/* Badge */}
                <Badge className="bg-yellow-500 text-black font-bold px-3 py-1">
                  🏆 TOP DEAL
                </Badge>
                
                {/* Separator (скрыт на мобилке) */}
                <span className="hidden md:inline text-white/40">|</span>
                
                {/* Discount */}
                <span className="text-2xl md:text-3xl font-black text-white">
                  {filteredAndSortedCoupons[0].discount} OFF
                </span>
                
                {/* Separator (скрыт на мобилке) */}
                <span className="hidden md:inline text-white/40">|</span>
                
                {/* Code */}
                <span className="text-xl md:text-2xl font-bold text-white/90 tracking-wider">
                  {filteredAndSortedCoupons[0].code}
                </span>
                
                {/* Copy Button */}
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="font-bold hover-scale"
                  onClick={() => handleQuickCopy(filteredAndSortedCoupons[0])}
                >
                  Copy Code
                  <span className="ml-2">➜</span>
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="bg-muted/30 py-8">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold mb-6">{t.home.whyChoose}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{t.home.benefits.verified}</h3>
                  </div>
                  <p className="text-muted-foreground">{t.home.benefits.verifiedDesc}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{t.home.benefits.discount}</h3>
                  </div>
                  <p className="text-muted-foreground">{t.home.benefits.discountDesc}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{t.home.benefits.updated}</h3>
                  </div>
                  <p className="text-muted-foreground">{t.home.benefits.updatedDesc}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.home.questionsLink}{' '}
                <Link to="/faq" className="text-primary hover:underline">
                  {t.nav.faq}
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="container py-8 border-b border-border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t.home.search}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2">
              <Select value={filter} onValueChange={(v) => setFilter(v as FilterType)}>
                <SelectTrigger className="w-[180px]">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="all">{t.home.filter.all}</SelectItem>
                  <SelectItem value="active">{t.home.filter.active}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sort} onValueChange={(v) => setSort(v as SortType)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="latest">{t.home.sort.latest}</SelectItem>
                  <SelectItem value="discount">{t.home.sort.discount}</SelectItem>
                  <SelectItem value="mostUsed">{t.home.sort.mostUsed}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Coupons Grid */}
        <section className="container py-12">
          <h2 className="text-3xl font-bold mb-8">{t.home.activeCoupons}</h2>
          {filteredAndSortedCoupons.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No coupons found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedCoupons.map((coupon, index) => (
                <CouponCard key={coupon.id} coupon={coupon} priority={index < 3} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
