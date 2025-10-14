import { useLanguage } from '@/i18n/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title={t.meta.faqTitle}
        description={t.meta.faqDescription}
      />

      <div className="min-h-screen">
        <section className="gradient-hero border-b border-border">
          <div className="container py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                {t.faq.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t.faq.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 shadow-card">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {t.faq.q1}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {t.faq.a1}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 shadow-card">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {t.faq.q2}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {t.faq.a2}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 shadow-card">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {t.faq.q3}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {t.faq.a3}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 shadow-card">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {t.faq.q4}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {t.faq.a4}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </>
  );
}
