import { useLanguage } from '@/i18n/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsItem {
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
}

const newsItems: NewsItem[] = [
  {
    title: "Vote For Us in The American Autoflower Cup 2026!",
    description: "Growmies, it's that time of year again! The 4th edition of the American Autoflower Cup is right around the corner, and we need your support to keep the winning streak...",
    image: "https://2fast4buds.com/temp/img_upload/m_bg_091a7459d2e81556613f62e6449906f8.jpg",
    link: "https://2fast4buds.com/news/vote-for-us-in-the-aac-2026",
    date: "3 days ago"
  },
  {
    title: "Banana Purple Punch Auto RF3: Top Of The Line Upgrade",
    description: "We're proud to unveil a completely new generation of autoflowers: the RF3 Project. This marks the start of a new chapter in our genetics, built on precision, consistency, and performance that...",
    image: "https://2fast4buds.com/temp/img_upload/m_bg_0e124dee2c41c7b6ac5998b9366b2299.jpg",
    link: "https://2fast4buds.com/news/new-breeding-project-rf3-line",
    date: "2 weeks ago"
  },
  {
    title: "Buy 3 Get 3 Free on All Our Award-Winning Strains",
    description: "It's time to celebrate the champions of the Fast Buds lineup, the strains that made history and brought home the trophies. For a limited time only, we're giving you the chance to Buy 3...",
    image: "https://2fast4buds.com/temp/img_upload/m_bg_4eca96017c0b4b0499e60905390d8970.jpg",
    link: "https://2fast4buds.com/news/buy-3-get-3-free-on-awarded-genetics",
    date: "3 weeks ago"
  },
  {
    title: "FastBuds.com Moving Back to 2fast4buds.com",
    description: "We are reverting our domain name from fastbuds.com back to 2fast4buds.com. Why to go back? While fastbuds.com was short and simple, the change created unexpected challenges. Some of our community...",
    image: "https://2fast4buds.com/temp/img_upload/m_bg_9d2d1ad6227d25d8309d3a9e88ca48eb.jpg",
    link: "https://2fast4buds.com/news/moving-back-to-2-fast-4-buds",
    date: "3 weeks ago"
  },
  {
    title: "Apple Strudel Auto Shines at the Southside Cup 2025 in Germany",
    description: "Apple Strudel Auto scored a place in the Best Autoflower 2025 category at this year's Southside Cup in Stuttgart, Germany, where 85 talented growers presented their very best. What makes this...",
    image: "https://2fast4buds.com/temp/img_upload/m_bg_0cf3b1722d2d9e44e581a1d57c23c403.jpg",
    link: "https://2fast4buds.com/news/apple-strudel-wins-at-the-southside-cup-2025",
    date: "1 month ago"
  },
  {
    title: "Win GG4 Fem on our Discord!",
    description: "Our brand-new GG4 Fem is up for grabs in the latest edition of our exclusive Discord Giveaway! Ten lucky winners will get the chance to grow one of the most iconic strains...",
    image: "https://2fast4buds.com/temp/img_upload/m_bg_818f02450ba13627685a828808930971.jpg",
    link: "https://2fast4buds.com/news/september-2025-discord-giveaway",
    date: "1 month ago"
  },
  {
    title: "Buy 5 Get 5 Free on All Gorilla Strains",
    description: "With the release of our brand-new GG4 Fem, we want to celebrate the legendary Gorilla legacy with you. For a limited time only, you can score Buy 5 Get 5 Free deal on all of our Gorilla strains...",
    image: "https://2fast4buds.com/temp/img_upload/m_bg_0de4d20ff5bfd8f35135b2d92666bf8c.jpg",
    link: "https://2fast4buds.com/news/buy-5-get-5-free-on-all-gorillas",
    date: "1 month ago"
  },
  {
    title: "EXCLUSIVE Strain Drop & Giveaway: GG4 Fem",
    description: "GG4 Fem has officially landed in our 2025 photoperiod line-up. For years, growers around the world have asked us to bring this icon into our collection, and we're proud to finally deliver. From...",
    image: "https://2fast4buds.com/temp/img_upload/m_bg_70a62939ae726b2d36142d15468d897d.jpg",
    link: "https://2fast4buds.com/news/strain-drop-gg4-fem",
    date: "2 months ago"
  },
  {
    title: "The Upgraded Photoperiodic Mix Pack",
    description: "The Mix Pack has always been one of our community's favorites, thanks to its best value, flavor diversity, and the unique chance to try top-shelf genetics at an affordable price – and now...",
    image: "https://2fast4buds.com/temp/img_upload/m_bg_696f429479ba45ac4b5c51bb167c7e2a.jpg",
    link: "https://2fast4buds.com/news/the-upgraded-photoperiodic-mix-pack-2025",
    date: "2 months ago"
  },
  {
    title: "42 Fast Buds: From Local Roots to Global Revolution",
    description: "Time flies and we keep on evolving and innovating the cannabis market. It's been one incredible ride so far: years filled with unforgettable moments, big wins, and constant evolution. From our...",
    image: "https://2fast4buds.com/temp/img_upload/m_bg_35d97cf2a9289d5e66049ed7e65b06b8.jpg",
    link: "https://2fast4buds.com/news/fast-buds-from-local-roots-to-global-revolution",
    date: "2 months ago"
  },
  {
    title: "Apricot Auto Wins Against Photoperiod Giants in Germany",
    description: "Our very own Apricot Auto has just taken 1st place in the 'Best Flower' category at the Universe Cup, the oldest and most prestigious cannabis competition in Northern Germany. Held in Hamburg during...",
    image: "https://2fast4buds.com/temp/img_upload/m_bg_6c82284833e225438ee06550f969ef33.jpg",
    link: "https://2fast4buds.com/news/apricot-auto-wins-the-universe-cup-in-germany",
    date: "3 months ago"
  },
  {
    title: "EXCLUSIVE Strain Drop & Giveaway: Biscotti Gelato Fem",
    description: "The third drop in our 2025 photoperiod line-up is here—Biscotti Gelato Fem. This one's for flavor chasers, resin lovers, and anyone looking to level up their grow with a strain that...",
    image: "https://2fast4buds.com/temp/img_upload/m_bg_9eea5cd5c9c53f11236eed44f10f813a.jpg",
    link: "https://2fast4buds.com/news/strain-drop-biscotti-gelato-fem",
    date: "3 months ago"
  }
];

const News = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead 
        title={t.meta.newsTitle}
        description={t.meta.newsDescription}
      />
      <main className="min-h-screen bg-background">
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
    </>
  );
};

export default News;
