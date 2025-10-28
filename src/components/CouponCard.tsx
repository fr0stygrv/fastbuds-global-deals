import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Coupon } from '@/data/coupons';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, ExternalLink, Users, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { getUsageCount, incrementUsageCount } from '@/lib/couponStorage';

interface CouponCardProps {
  coupon: Coupon;
  priority?: boolean;
}

export const CouponCard = ({ coupon, priority = false }: CouponCardProps) => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [displayCount, setDisplayCount] = useState<number>(coupon.usageCount);
  
  const content = coupon.content[language];

  useEffect(() => {
    const savedCount = getUsageCount(coupon.id, coupon.usageCount);
    setDisplayCount(savedCount);
  }, [coupon.id, coupon.usageCount]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    
    // Увеличить счетчик (или сбросить при достижении 999)
    const newCount = incrementUsageCount(coupon.id, coupon.usageCount);
    setDisplayCount(newCount);
    
    toast.success(`${t.coupon.copyCode}: ${coupon.code}`);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGoToStore = () => {
    window.open('https://2fast4buds.com/', '_blank', 'noopener,noreferrer');
  };

  const couponPath = language === 'es' ? 'cupon' : language === 'pt' ? 'cupom' : 'coupon';
  // Extract just the slug part (after the last /)
  const slugPart = content.slug.split('/').pop();

  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 shadow-card">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <Link to={`/${language}/${couponPath}/${slugPart}`} className="flex-1">
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
              {content.title}
            </h3>
          </Link>
          <Badge className="bg-gradient-primary text-primary-foreground shrink-0 text-lg font-bold">
            {coupon.discount}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {content.description}
        </p>

        <div className="flex items-center justify-between gap-3 text-sm">
          {coupon.neverExpires ? (
            <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 gap-1.5">
              <CheckCircle className="h-3.5 w-3.5" />
              {t.coupon.alwaysActive}
            </Badge>
          ) : (
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>
                {t.coupon.expires}: {new Date(coupon.expiryDate).toLocaleDateString(language)}
              </span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-primary font-medium">
            <Users className="h-4 w-4" />
            <span>{displayCount >= 999 ? '999+' : displayCount}</span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-muted rounded-lg border border-border">
          <div className="flex items-center justify-between gap-2">
            <code className="text-lg font-bold text-primary">{coupon.code}</code>
            <Button
              size="sm"
              variant="outline"
              onClick={handleCopy}
              className="gap-2"
            >
              <Copy className="h-4 w-4" />
              {copied ? '✓' : t.coupon.copyCode}
            </Button>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={handleGoToStore}
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity gap-2"
        >
          {t.coupon.goToStore}
          <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
