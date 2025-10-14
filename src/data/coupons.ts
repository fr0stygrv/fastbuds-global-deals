import { Language } from '@/i18n/languages';

export interface CouponContent {
  title: string;
  description: string;
  slug: string;
}

export interface Coupon {
  id: string;
  code: string;
  discount: string;
  expiryDate: string;
  isActive: boolean;
  content: Record<Language, CouponContent>;
}

export const coupons: Coupon[] = [
  {
    id: '1',
    code: 'FASTBUDS20',
    discount: '20%',
    expiryDate: '2025-12-31',
    isActive: true,
    content: {
      en: {
        title: '20% Off All Fast Buds Seeds',
        description: 'Get 20% discount on all Fast Buds autoflowering cannabis seeds. Premium genetics at unbeatable prices.',
        slug: 'en/coupon/20-off-all-fast-buds-seeds',
      },
      de: {
        title: '20% Rabatt auf alle Fast Buds Samen',
        description: '20% Rabatt auf alle Fast Buds autoflowering Cannabis-Samen. Premium-Genetik zu unschlagbaren Preisen.',
        slug: 'de/coupon/20-rabatt-auf-alle-fast-buds-samen',
      },
      es: {
        title: '20% de Descuento en Todas las Semillas Fast Buds',
        description: 'Obtén 20% de descuento en todas las semillas de cannabis autoflorecientes Fast Buds. Genética premium a precios inmejorables.',
        slug: 'es/cupon/20-descuento-en-todas-las-semillas-fast-buds',
      },
      pt: {
        title: '20% de Desconto em Todas as Sementes Fast Buds',
        description: 'Ganhe 20% de desconto em todas as sementes de cannabis autoflorescentes Fast Buds. Genética premium a preços imbatíveis.',
        slug: 'pt/cupom/20-desconto-em-todas-as-sementes-fast-buds',
      },
      fr: {
        title: '20% de Réduction sur Toutes les Graines Fast Buds',
        description: 'Bénéficiez de 20% de réduction sur toutes les graines de cannabis autoflorissantes Fast Buds. Génétique premium à prix imbattables.',
        slug: 'fr/coupon/20-reduction-sur-toutes-les-graines-fast-buds',
      },
      it: {
        title: '20% di Sconto su Tutti i Semi Fast Buds',
        description: 'Ottieni il 20% di sconto su tutti i semi di cannabis autofiorenti Fast Buds. Genetica premium a prezzi imbattibili.',
        slug: 'it/coupon/20-sconto-su-tutti-i-semi-fast-buds',
      },
    },
  },
  {
    id: '2',
    code: 'SUMMER2025',
    discount: '15%',
    expiryDate: '2025-11-15',
    isActive: true,
    content: {
      en: {
        title: 'Summer Special - 15% Off',
        description: 'Limited time summer offer! Save 15% on your favorite Fast Buds strains.',
        slug: 'en/coupon/summer-special-15-off',
      },
      de: {
        title: 'Sommer-Special - 15% Rabatt',
        description: 'Begrenztes Sommer-Angebot! Sparen Sie 15% auf Ihre Lieblings-Fast Buds Sorten.',
        slug: 'de/coupon/sommer-special-15-rabatt',
      },
      es: {
        title: 'Especial de Verano - 15% de Descuento',
        description: '¡Oferta de verano por tiempo limitado! Ahorra 15% en tus variedades Fast Buds favoritas.',
        slug: 'es/cupon/especial-de-verano-15-descuento',
      },
      pt: {
        title: 'Especial de Verão - 15% de Desconto',
        description: 'Oferta de verão por tempo limitado! Economize 15% nas suas variedades Fast Buds favoritas.',
        slug: 'pt/cupom/especial-de-verao-15-desconto',
      },
      fr: {
        title: 'Spécial Été - 15% de Réduction',
        description: 'Offre d\'été à durée limitée! Économisez 15% sur vos variétés Fast Buds préférées.',
        slug: 'fr/coupon/special-ete-15-reduction',
      },
      it: {
        title: 'Speciale Estate - 15% di Sconto',
        description: 'Offerta estiva a tempo limitato! Risparmia il 15% sulle tue varietà Fast Buds preferite.',
        slug: 'it/coupon/speciale-estate-15-sconto',
      },
    },
  },
  {
    id: '3',
    code: 'NEWCUSTOMER',
    discount: '25%',
    expiryDate: '2025-10-30',
    isActive: true,
    content: {
      en: {
        title: 'New Customer Exclusive - 25% Off',
        description: 'First time ordering? Get an exclusive 25% discount on your first Fast Buds purchase!',
        slug: 'en/coupon/new-customer-exclusive-25-off',
      },
      de: {
        title: 'Neukunden-Exklusiv - 25% Rabatt',
        description: 'Erste Bestellung? Erhalten Sie einen exklusiven Rabatt von 25% auf Ihren ersten Fast Buds Einkauf!',
        slug: 'de/coupon/neukunden-exklusiv-25-rabatt',
      },
      es: {
        title: 'Exclusivo Nuevos Clientes - 25% de Descuento',
        description: '¿Primera vez ordenando? ¡Obtén un descuento exclusivo del 25% en tu primera compra Fast Buds!',
        slug: 'es/cupon/exclusivo-nuevos-clientes-25-descuento',
      },
      pt: {
        title: 'Exclusivo Novos Clientes - 25% de Desconto',
        description: 'Primeira vez comprando? Ganhe um desconto exclusivo de 25% na sua primeira compra Fast Buds!',
        slug: 'pt/cupom/exclusivo-novos-clientes-25-desconto',
      },
      fr: {
        title: 'Exclusif Nouveaux Clients - 25% de Réduction',
        description: 'Première commande? Bénéficiez d\'une réduction exclusive de 25% sur votre premier achat Fast Buds!',
        slug: 'fr/coupon/exclusif-nouveaux-clients-25-reduction',
      },
      it: {
        title: 'Esclusivo Nuovi Clienti - 25% di Sconto',
        description: 'Primo ordine? Ottieni uno sconto esclusivo del 25% sul tuo primo acquisto Fast Buds!',
        slug: 'it/coupon/esclusivo-nuovi-clienti-25-sconto',
      },
    },
  },
];
