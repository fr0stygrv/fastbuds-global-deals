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
    code: 'SAVEMAX',
    discount: '18%',
    expiryDate: '2040-04-20',
    isActive: true,
    content: {
      en: {
        title: 'Maximum Savings - 18% Off Everything!',
        description: 'Unlock the biggest discount available! Save 18% on all Fast Buds premium autoflowering seeds. Your wallet will thank you.',
        slug: 'en/coupon/maximum-savings-18-off-everything',
      },
      de: {
        title: 'Maximale Ersparnis - 18% auf Alles!',
        description: 'Sichern Sie sich den größten verfügbaren Rabatt! Sparen Sie 18% auf alle Fast Buds Premium-Autoflowering-Samen. Ihr Geldbeutel wird es Ihnen danken.',
        slug: 'de/coupon/maximale-ersparnis-18-auf-alles',
      },
      es: {
        title: 'Ahorro Máximo - ¡18% en Todo!',
        description: '¡Desbloquea el descuento más grande disponible! Ahorra 18% en todas las semillas autoflorecientes premium de Fast Buds. Tu billetera te lo agradecerá.',
        slug: 'es/cupon/ahorro-maximo-18-en-todo',
      },
      pt: {
        title: 'Economia Máxima - 18% em Tudo!',
        description: 'Desbloqueie o maior desconto disponível! Economize 18% em todas as sementes autoflorescentes premium da Fast Buds. Sua carteira agradecerá.',
        slug: 'pt/cupom/economia-maxima-18-em-tudo',
      },
      fr: {
        title: 'Économies Maximales - 18% sur Tout!',
        description: 'Débloquez la plus grosse réduction disponible! Économisez 18% sur toutes les graines autoflorissantes premium Fast Buds. Votre portefeuille vous remerciera.',
        slug: 'fr/coupon/economies-maximales-18-sur-tout',
      },
      it: {
        title: 'Risparmio Massimo - 18% su Tutto!',
        description: 'Sblocca lo sconto più grande disponibile! Risparmia il 18% su tutti i semi autofiorenti premium Fast Buds. Il tuo portafoglio ti ringrazierà.',
        slug: 'it/coupon/risparmio-massimo-18-su-tutto',
      },
    },
  },
  {
    id: '2',
    code: 'SAVE4U',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    content: {
      en: {
        title: 'Personal Discount Just For You - 15% Off',
        description: 'This exclusive deal was made with you in mind! Enjoy 15% off on your favorite Fast Buds strains. Because you deserve it.',
        slug: 'en/coupon/personal-discount-just-for-you-15-off',
      },
      de: {
        title: 'Persönlicher Rabatt Nur für Sie - 15% Rabatt',
        description: 'Dieses exklusive Angebot wurde speziell für Sie gemacht! Genießen Sie 15% Rabatt auf Ihre Lieblings-Fast Buds Sorten. Weil Sie es verdienen.',
        slug: 'de/coupon/personlicher-rabatt-nur-fur-sie-15-rabatt',
      },
      es: {
        title: 'Descuento Personal Solo Para Ti - 15% de Descuento',
        description: '¡Esta oferta exclusiva fue hecha pensando en ti! Disfruta del 15% de descuento en tus variedades favoritas de Fast Buds. Porque te lo mereces.',
        slug: 'es/cupon/descuento-personal-solo-para-ti-15-descuento',
      },
      pt: {
        title: 'Desconto Pessoal Só Para Você - 15% de Desconto',
        description: 'Esta oferta exclusiva foi feita pensando em você! Aproveite 15% de desconto nas suas variedades favoritas da Fast Buds. Porque você merece.',
        slug: 'pt/cupom/desconto-pessoal-so-para-voce-15-desconto',
      },
      fr: {
        title: 'Réduction Personnelle Rien que Pour Vous - 15% de Réduction',
        description: 'Cette offre exclusive a été créée en pensant à vous! Profitez de 15% de réduction sur vos variétés Fast Buds préférées. Parce que vous le méritez.',
        slug: 'fr/coupon/reduction-personnelle-rien-que-pour-vous-15-reduction',
      },
      it: {
        title: 'Sconto Personale Solo Per Te - 15% di Sconto',
        description: 'Questa offerta esclusiva è stata pensata per te! Goditi il 15% di sconto sulle tue varietà Fast Buds preferite. Perché te lo meriti.',
        slug: 'it/coupon/sconto-personale-solo-per-te-15-sconto',
      },
    },
  },
  {
    id: '3',
    code: 'STONER',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    content: {
      en: {
        title: 'Stoner Special - 15% Off Premium Strains',
        description: 'For true cannabis enthusiasts! Get 15% off the finest Fast Buds genetics. Elevate your garden with legendary strains.',
        slug: 'en/coupon/stoner-special-15-off-premium-strains',
      },
      de: {
        title: 'Stoner-Special - 15% Rabatt auf Premium-Sorten',
        description: 'Für echte Cannabis-Enthusiasten! Erhalten Sie 15% Rabatt auf die besten Fast Buds Genetiken. Verbessern Sie Ihren Garten mit legendären Sorten.',
        slug: 'de/coupon/stoner-special-15-rabatt-auf-premium-sorten',
      },
      es: {
        title: 'Especial Stoner - 15% en Variedades Premium',
        description: '¡Para verdaderos entusiastas del cannabis! Obtén 15% de descuento en la mejor genética de Fast Buds. Eleva tu jardín con variedades legendarias.',
        slug: 'es/cupon/especial-stoner-15-en-variedades-premium',
      },
      pt: {
        title: 'Especial Stoner - 15% em Variedades Premium',
        description: 'Para verdadeiros entusiastas da cannabis! Ganhe 15% de desconto na melhor genética da Fast Buds. Eleve seu jardim com variedades lendárias.',
        slug: 'pt/cupom/especial-stoner-15-em-variedades-premium',
      },
      fr: {
        title: 'Spécial Stoner - 15% sur les Variétés Premium',
        description: 'Pour les vrais passionnés de cannabis! Obtenez 15% de réduction sur la meilleure génétique Fast Buds. Élevez votre jardin avec des variétés légendaires.',
        slug: 'fr/coupon/special-stoner-15-sur-les-varietes-premium',
      },
      it: {
        title: 'Speciale Stoner - 15% su Varietà Premium',
        description: 'Per veri appassionati di cannabis! Ottieni il 15% di sconto sulla migliore genetica Fast Buds. Eleva il tuo giardino con varietà leggendarie.',
        slug: 'it/coupon/speciale-stoner-15-su-varieta-premium',
      },
    },
  },
  {
    id: '4',
    code: 'SLOWDAY',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    content: {
      en: {
        title: 'Slow Day Savings - 15% Off to Relax',
        description: 'Take it easy with 15% off! Perfect for those chill days when you want to slow down and grow something special.',
        slug: 'en/coupon/slow-day-savings-15-off-to-relax',
      },
      de: {
        title: 'Entspannungstag-Ersparnis - 15% zum Relaxen',
        description: 'Entspannen Sie sich mit 15% Rabatt! Perfekt für gemütliche Tage, an denen Sie es ruhig angehen und etwas Besonderes anbauen möchten.',
        slug: 'de/coupon/entspannungstag-ersparnis-15-zum-relaxen',
      },
      es: {
        title: 'Ahorro de Día Tranquilo - 15% para Relajarte',
        description: '¡Tómatelo con calma con 15% de descuento! Perfecto para esos días relajados cuando quieres ir despacio y cultivar algo especial.',
        slug: 'es/cupon/ahorro-de-dia-tranquilo-15-para-relajarte',
      },
      pt: {
        title: 'Economia de Dia Tranquilo - 15% para Relaxar',
        description: 'Vá com calma com 15% de desconto! Perfeito para aqueles dias tranquilos quando você quer desacelerar e cultivar algo especial.',
        slug: 'pt/cupom/economia-de-dia-tranquilo-15-para-relaxar',
      },
      fr: {
        title: 'Économies Journée Tranquille - 15% pour se Détendre',
        description: 'Prenez votre temps avec 15% de réduction! Parfait pour ces journées chill quand vous voulez ralentir et cultiver quelque chose de spécial.',
        slug: 'fr/coupon/economies-journee-tranquille-15-pour-se-detendre',
      },
      it: {
        title: 'Risparmio Giornata Tranquilla - 15% per Rilassarsi',
        description: 'Prendila con calma con il 15% di sconto! Perfetto per quelle giornate rilassanti quando vuoi rallentare e coltivare qualcosa di speciale.',
        slug: 'it/coupon/risparmio-giornata-tranquilla-15-per-rilassarsi',
      },
    },
  },
  {
    id: '5',
    code: '42015',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    content: {
      en: {
        title: '420 Celebration Code - 15% Off All Seeds',
        description: 'Celebrate the culture with 15% off! A special code for those who know what 420 really means. Premium genetics at a great price.',
        slug: 'en/coupon/420-celebration-code-15-off-all-seeds',
      },
      de: {
        title: '420-Feier-Code - 15% auf alle Samen',
        description: 'Feiern Sie die Kultur mit 15% Rabatt! Ein spezieller Code für diejenigen, die wissen, was 420 wirklich bedeutet. Premium-Genetik zu einem tollen Preis.',
        slug: 'de/coupon/420-feier-code-15-auf-alle-samen',
      },
      es: {
        title: 'Código Celebración 420 - 15% en Todas las Semillas',
        description: '¡Celebra la cultura con 15% de descuento! Un código especial para quienes saben qué significa realmente 420. Genética premium a un precio excelente.',
        slug: 'es/cupon/codigo-celebracion-420-15-en-todas-las-semillas',
      },
      pt: {
        title: 'Código Celebração 420 - 15% em Todas as Sementes',
        description: 'Celebre a cultura com 15% de desconto! Um código especial para quem sabe o que 420 realmente significa. Genética premium a um ótimo preço.',
        slug: 'pt/cupom/codigo-celebracao-420-15-em-todas-as-sementes',
      },
      fr: {
        title: 'Code Célébration 420 - 15% sur Toutes les Graines',
        description: 'Célébrez la culture avec 15% de réduction! Un code spécial pour ceux qui savent ce que 420 signifie vraiment. Génétique premium à un excellent prix.',
        slug: 'fr/coupon/code-celebration-420-15-sur-toutes-les-graines',
      },
      it: {
        title: 'Codice Celebrazione 420 - 15% su Tutti i Semi',
        description: 'Celebra la cultura con il 15% di sconto! Un codice speciale per chi sa cosa significa davvero 420. Genetica premium a un prezzo fantastico.',
        slug: 'it/coupon/codice-celebrazione-420-15-su-tutti-i-semi',
      },
    },
  },
];
