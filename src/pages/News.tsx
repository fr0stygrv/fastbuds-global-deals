import { useLanguage } from '@/i18n/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import { StructuredData } from '@/components/StructuredData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BackToTop } from '@/components/BackToTop';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { newsData } from '@/data/news';

const News = () => {
  const { t, language } = useLanguage();
  const newsItems = newsData[language];

  return (
    <>
      <SEOHead
        title={t.meta.newsTitle}
        description={t.meta.newsDescription}
        canonical={`https://fastbuds-coupon.com/${language}/news`}
        image="https://fastbuds-coupon.com/images/coupons/fastbuds.png"
        robots="index, follow"
      />
      
      <StructuredData
        type="breadcrumb"
        data={[
          { name: t.nav.home, url: `https://fastbuds-coupon.com/${language}` },
          { name: t.nav.news, url: `https://fastbuds-coupon.com/${language}/news` }
        ]}
      />
      
      <main className="min-h-screen bg-background">
        <Breadcrumbs items={[{ label: t.nav.news }]} />
        <div className="container py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {t.news.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.news.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="450"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    {item.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {item.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    asChild
                  >
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {t.news.readMore}
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <BackToTop />
    </>
  );
};

export default News;
