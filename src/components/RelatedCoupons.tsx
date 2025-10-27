import { useMemo } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { coupons } from '@/data/coupons';
import { CouponCard } from '@/components/CouponCard';

interface RelatedCouponsProps {
  currentCouponId: string;
  maxItems?: number;
}

export const RelatedCoupons = ({ currentCouponId, maxItems = 3 }: RelatedCouponsProps) => {
  const { t } = useLanguage();

  const relatedCoupons = useMemo(() => {
    const currentCoupon = coupons.find(c => c.id === currentCouponId);
    if (!currentCoupon) return [];

    const otherCoupons = coupons.filter(c => c.id !== currentCouponId && c.isActive);
    const currentDiscount = parseInt(currentCoupon.discount);
    const sorted = otherCoupons.sort((a, b) => {
      const aDiff = Math.abs(parseInt(a.discount) - currentDiscount);
      const bDiff = Math.abs(parseInt(b.discount) - currentDiscount);
      return aDiff - bDiff;
    });

    return sorted.slice(0, maxItems);
  }, [currentCouponId, maxItems]);

  if (relatedCoupons.length === 0) return null;

  return (
    <section className="container py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {t.coupon.relatedCoupons}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCoupons.map(coupon => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>
      </div>
    </section>
  );
};
