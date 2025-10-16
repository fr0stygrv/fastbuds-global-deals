import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Coupon } from '@/data/coupons';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, ExternalLink, Calendar } from 'lucide-react';
import { toast } from 'sonner';

interface CouponCardProps {
  coupon: Coupon;
}

export const CouponCard = ({ coupon }: CouponCardProps) => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  
  const content = coupon.content[language];
  const daysUntilExpiry = Math.ceil(
    (new Date(coupon.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    toast.success(`${t.coupon.copyCode}: ${coupon.code}`);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGoToStore = () => {
    window.open('https://2fast4buds.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 shadow-card">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <Link to={`/${content.slug}`} className="flex-1">
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

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>
            {t.coupon.expires}: {new Date(coupon.expiryDate).toLocaleDateString(language)}
          </span>
          {daysUntilExpiry <= 7 && (
            <Badge variant="destructive" className="ml-auto">
              {daysUntilExpiry}d
            </Badge>
          )}
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
