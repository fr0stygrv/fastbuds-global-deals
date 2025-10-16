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
    discount: '20%',
    expiryDate: '2040-04-20',
    isActive: true,
    content: {
      en: {
        title: 'Maximum Savings - 20% Off Everything!',
        description: 'Unlock the biggest discount available! Save 20% on all Fast Buds premium autoflowering seeds. Your wallet will thank you.',
        slug: 'en/coupon/maximum-savings-20-off-everything',
      },
      de: {
        title: 'Maximale Ersparnis - 20% auf Alles!',
        description: 'Sichern Sie sich den größten verfügbaren Rabatt! Sparen Sie 20% auf alle Fast Buds Premium-Autoflowering-Samen. Ihr Geldbeutel wird es Ihnen danken.',
        slug: 'de/coupon/maximale-ersparnis-20-auf-alles',
      },
      es: {
        title: 'Ahorro Máximo - ¡20% en Todo!',
        description: '¡Desbloquea el descuento más grande disponible! Ahorra 20% en todas las semillas autoflorecientes premium de Fast Buds. Tu billetera te lo agradecerá.',
        slug: 'es/cupon/ahorro-maximo-20-en-todo',
      },
      pt: {
        title: 'Economia Máxima - 20% em Tudo!',
        description: 'Desbloqueie o maior desconto disponível! Economize 20% em todas as sementes autoflorescentes premium da Fast Buds. Sua carteira agradecerá.',
        slug: 'pt/cupom/economia-maxima-20-em-tudo',
      },
      fr: {
        title: 'Économies Maximales - 20% sur Tout!',
        description: 'Débloquez la plus grosse réduction disponible! Économisez 20% sur toutes les graines autoflorissantes premium Fast Buds. Votre portefeuille vous remerciera.',
        slug: 'fr/coupon/economies-maximales-20-sur-tout',
      },
      it: {
        title: 'Risparmio Massimo - 20% su Tutto!',
        description: 'Sblocca lo sconto più grande disponibile! Risparmia il 20% su tutti i semi autofiorenti premium Fast Buds. Il tuo portafoglio ti ringrazierà.',
        slug: 'it/coupon/risparmio-massimo-20-su-tutto',
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
  {
    id: '6',
    code: 'EARTH',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    content: {
      en: {
        title: 'Earth Day Special - 15% Off Green Growing',
        description: 'Celebrate nature with 15% off! Grow sustainably with Fast Buds premium genetics. For those who care about the planet.',
        slug: 'en/coupon/earth-day-special-15-off-green-growing',
      },
      de: {
        title: 'Tag der Erde Special - 15% auf Grünen Anbau',
        description: 'Feiern Sie die Natur mit 15% Rabatt! Wachsen Sie nachhaltig mit Fast Buds Premium-Genetik. Für diejenigen, die sich um den Planeten kümmern.',
        slug: 'de/coupon/tag-der-erde-special-15-auf-grunen-anbau',
      },
      es: {
        title: 'Especial Día de la Tierra - 15% en Cultivo Verde',
        description: '¡Celebra la naturaleza con 15% de descuento! Cultiva de manera sostenible con genética premium de Fast Buds. Para quienes cuidan el planeta.',
        slug: 'es/cupon/especial-dia-tierra-15-cultivo-verde',
      },
      pt: {
        title: 'Especial Dia da Terra - 15% em Cultivo Verde',
        description: 'Celebre a natureza com 15% de desconto! Cultive de forma sustentável com genética premium da Fast Buds. Para quem se importa com o planeta.',
        slug: 'pt/cupom/especial-dia-terra-15-cultivo-verde',
      },
      fr: {
        title: 'Spécial Jour de la Terre - 15% sur Culture Verte',
        description: 'Célébrez la nature avec 15% de réduction! Cultivez durablement avec la génétique premium Fast Buds. Pour ceux qui se soucient de la planète.',
        slug: 'fr/coupon/special-jour-terre-15-culture-verte',
      },
      it: {
        title: 'Speciale Giornata della Terra - 15% su Coltivazione Verde',
        description: 'Celebra la natura con il 15% di sconto! Coltiva in modo sostenibile con genetica premium Fast Buds. Per chi ha a cuore il pianeta.',
        slug: 'it/coupon/speciale-giornata-terra-15-coltivazione-verde',
      },
    },
  },
  {
    id: '7',
    code: 'BUMP',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    content: {
      en: {
        title: 'Bump Up Your Garden - 15% Off Premium Seeds',
        description: 'Give your grow room a serious upgrade! Get 15% off Fast Buds top-shelf genetics and bump up your yields.',
        slug: 'en/coupon/bump-up-garden-15-off-premium-seeds',
      },
      de: {
        title: 'Verbessern Sie Ihren Garten - 15% auf Premium-Samen',
        description: 'Geben Sie Ihrem Growroom ein ernsthaftes Upgrade! Erhalten Sie 15% Rabatt auf Fast Buds Spitzen-Genetik und steigern Sie Ihre Erträge.',
        slug: 'de/coupon/verbessern-sie-ihren-garten-15-premium-samen',
      },
      es: {
        title: 'Mejora Tu Jardín - 15% en Semillas Premium',
        description: '¡Dale a tu cuarto de cultivo una mejora seria! Obtén 15% de descuento en genética de primera de Fast Buds y aumenta tus cosechas.',
        slug: 'es/cupon/mejora-tu-jardin-15-semillas-premium',
      },
      pt: {
        title: 'Melhore Seu Jardim - 15% em Sementes Premium',
        description: 'Dê ao seu espaço de cultivo uma melhoria séria! Ganhe 15% de desconto na genética top da Fast Buds e aumente suas colheitas.',
        slug: 'pt/cupom/melhore-seu-jardim-15-sementes-premium',
      },
      fr: {
        title: 'Améliorez Votre Jardin - 15% sur Graines Premium',
        description: 'Donnez à votre espace de culture une sérieuse amélioration! Obtenez 15% de réduction sur la génétique haut de gamme Fast Buds et augmentez vos rendements.',
        slug: 'fr/coupon/ameliorez-votre-jardin-15-graines-premium',
      },
      it: {
        title: 'Migliora Il Tuo Giardino - 15% su Semi Premium',
        description: 'Dai al tuo spazio di coltivazione un serio upgrade! Ottieni il 15% di sconto sulla genetica top di Fast Buds e aumenta i tuoi raccolti.',
        slug: 'it/coupon/migliora-tuo-giardino-15-semi-premium',
      },
    },
  },
  {
    id: '8',
    code: '4EVA',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    content: {
      en: {
        title: 'Forever Grower Deal - 15% Off For Life',
        description: 'For growers who never stop! Enjoy 15% off Fast Buds premium seeds. Because growing is forever, and so are the savings.',
        slug: 'en/coupon/forever-grower-deal-15-off-for-life',
      },
      de: {
        title: 'Für Immer Züchter Deal - 15% Rabatt Fürs Leben',
        description: 'Für Züchter, die nie aufhören! Genießen Sie 15% Rabatt auf Fast Buds Premium-Samen. Denn Züchten ist für immer, und die Ersparnisse auch.',
        slug: 'de/coupon/fur-immer-zuchter-deal-15-rabatt-furs-leben',
      },
      es: {
        title: 'Oferta Cultivador Eterno - 15% Descuento Para Siempre',
        description: '¡Para cultivadores que nunca paran! Disfruta del 15% de descuento en semillas premium de Fast Buds. Porque cultivar es para siempre, y los ahorros también.',
        slug: 'es/cupon/oferta-cultivador-eterno-15-descuento-siempre',
      },
      pt: {
        title: 'Oferta Cultivador Eterno - 15% Desconto Para Sempre',
        description: 'Para cultivadores que nunca param! Aproveite 15% de desconto em sementes premium da Fast Buds. Porque cultivar é para sempre, e as economias também.',
        slug: 'pt/cupom/oferta-cultivador-eterno-15-desconto-sempre',
      },
      fr: {
        title: 'Offre Cultivateur Éternel - 15% de Réduction À Vie',
        description: 'Pour les cultivateurs qui ne s\'arrêtent jamais! Profitez de 15% de réduction sur les graines premium Fast Buds. Parce que cultiver c\'est pour toujours, et les économies aussi.',
        slug: 'fr/coupon/offre-cultivateur-eternel-15-reduction-vie',
      },
      it: {
        title: 'Offerta Coltivatore Eterno - 15% Sconto Per Sempre',
        description: 'Per coltivatori che non si fermano mai! Goditi il 15% di sconto sui semi premium Fast Buds. Perché coltivare è per sempre, e i risparmi anche.',
        slug: 'it/coupon/offerta-coltivatore-eterno-15-sconto-sempre',
      },
    },
  },
  {
    id: '9',
    code: 'LOLZ',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    content: {
      en: {
        title: 'Laugh Out Loud Savings - 15% Off Fun Strains',
        description: 'Why so serious? Have some fun with 15% off! Perfect for those who love to laugh and grow premium Fast Buds genetics.',
        slug: 'en/coupon/laugh-out-loud-savings-15-off-fun-strains',
      },
      de: {
        title: 'Lach-Laut-Ersparnis - 15% auf Spaß-Sorten',
        description: 'Warum so ernst? Haben Sie Spaß mit 15% Rabatt! Perfekt für diejenigen, die es lieben zu lachen und Premium Fast Buds Genetik anzubauen.',
        slug: 'de/coupon/lach-laut-ersparnis-15-spass-sorten',
      },
      es: {
        title: 'Ahorro Para Reír A Carcajadas - 15% en Variedades Divertidas',
        description: '¿Por qué tan serio? ¡Diviértete con 15% de descuento! Perfecto para quienes aman reír y cultivar genética premium de Fast Buds.',
        slug: 'es/cupon/ahorro-reir-carcajadas-15-variedades-divertidas',
      },
      pt: {
        title: 'Economia Para Rir Alto - 15% em Variedades Divertidas',
        description: 'Por que tão sério? Divirta-se com 15% de desconto! Perfeito para quem adora rir e cultivar genética premium da Fast Buds.',
        slug: 'pt/cupom/economia-rir-alto-15-variedades-divertidas',
      },
      fr: {
        title: 'Économies Pour Rire Fort - 15% sur Variétés Amusantes',
        description: 'Pourquoi si sérieux? Amusez-vous avec 15% de réduction! Parfait pour ceux qui aiment rire et cultiver la génétique premium Fast Buds.',
        slug: 'fr/coupon/economies-rire-fort-15-varietes-amusantes',
      },
      it: {
        title: 'Risparmio Per Ridere Forte - 15% su Varietà Divertenti',
        description: 'Perché così seri? Divertiti con il 15% di sconto! Perfetto per chi ama ridere e coltivare genetica premium Fast Buds.',
        slug: 'it/coupon/risparmio-ridere-forte-15-varieta-divertenti',
      },
    },
  },
  {
    id: '10',
    code: 'BUZZ',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    content: {
      en: {
        title: 'Create The Buzz - 15% Off Trending Seeds',
        description: 'Get the buzz going with 15% off! Join the hype and grow the most talked-about Fast Buds strains at an amazing price.',
        slug: 'en/coupon/create-buzz-15-off-trending-seeds',
      },
      de: {
        title: 'Sorgen Sie Für Aufsehen - 15% auf Trend-Samen',
        description: 'Bringen Sie das Gespräch in Gang mit 15% Rabatt! Steigen Sie ein in den Hype und züchten Sie die meistdiskutierten Fast Buds Sorten zu einem tollen Preis.',
        slug: 'de/coupon/sorgen-sie-aufsehen-15-trend-samen',
      },
      es: {
        title: 'Crea El Buzz - 15% en Semillas Tendencia',
        description: '¡Crea el buzz con 15% de descuento! Únete al hype y cultiva las variedades Fast Buds más comentadas a un precio increíble.',
        slug: 'es/cupon/crea-buzz-15-semillas-tendencia',
      },
      pt: {
        title: 'Crie O Buzz - 15% em Sementes Tendência',
        description: 'Crie o buzz com 15% de desconto! Junte-se ao hype e cultive as variedades Fast Buds mais comentadas a um preço incrível.',
        slug: 'pt/cupom/crie-buzz-15-sementes-tendencia',
      },
      fr: {
        title: 'Créez Le Buzz - 15% sur Graines Tendance',
        description: 'Créez le buzz avec 15% de réduction! Rejoignez le hype et cultivez les variétés Fast Buds les plus populaires à un prix incroyable.',
        slug: 'fr/coupon/creez-buzz-15-graines-tendance',
      },
      it: {
        title: 'Crea Il Buzz - 15% su Semi Di Tendenza',
        description: 'Crea il buzz con il 15% di sconto! Unisciti all\'hype e coltiva le varietà Fast Buds più discusse a un prezzo fantastico.',
        slug: 'it/coupon/crea-buzz-15-semi-tendenza',
      },
    },
  },
];
