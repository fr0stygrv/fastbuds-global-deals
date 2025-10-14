import { useState, useMemo } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { coupons } from '@/data/coupons';
import { CouponCard } from '@/components/CouponCard';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type FilterType = 'all' | 'active' | 'expiring';
type SortType = 'latest' | 'expiring' | 'discount';

export default function Home() {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('latest');

  const filteredAndSortedCoupons = useMemo(() => {
    let result = coupons.filter(coupon => {
      const content = coupon.content[language];
      const matchesSearch = 
        content.title.toLowerCase().includes(search.toLowerCase()) ||
        content.description.toLowerCase().includes(search.toLowerCase()) ||
        coupon.code.toLowerCase().includes(search.toLowerCase());

      if (!matchesSearch) return false;

      if (filter === 'active') return coupon.isActive;
      if (filter === 'expiring') {
        const daysUntilExpiry = Math.ceil(
          (new Date(coupon.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
        );
        return daysUntilExpiry <= 7 && daysUntilExpiry > 0;
      }

      return true;
    });

    // Sort
    result.sort((a, b) => {
      if (sort === 'latest') {
        return b.id.localeCompare(a.id);
      }
      if (sort === 'expiring') {
        return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
      }
      if (sort === 'discount') {
        const aDiscount = parseInt(a.discount);
        const bDiscount = parseInt(b.discount);
        return bDiscount - aDiscount;
      }
      return 0;
    });

    return result;
  }, [search, filter, sort, language]);

  return (
    <>
      <SEOHead
        title={t.meta.homeTitle}
        description={t.meta.homeDescription}
        keywords={t.meta.homeKeywords}
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
                  <SelectItem value="expiring">{t.home.filter.expiring}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sort} onValueChange={(v) => setSort(v as SortType)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="latest">{t.home.sort.latest}</SelectItem>
                  <SelectItem value="expiring">{t.home.sort.expiring}</SelectItem>
                  <SelectItem value="discount">{t.home.sort.discount}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Coupons Grid */}
        <section className="container py-12">
          {filteredAndSortedCoupons.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No coupons found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedCoupons.map((coupon) => (
                <CouponCard key={coupon.id} coupon={coupon} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
