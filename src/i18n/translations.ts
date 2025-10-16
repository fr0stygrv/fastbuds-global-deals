import { Language } from './languages';

export interface Translations {
  nav: {
    home: string;
    faq: string;
    about: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
    search: string;
    filter: {
      all: string;
      active: string;
      expiring: string;
    };
    sort: {
      latest: string;
      expiring: string;
      discount: string;
    };
  };
  coupon: {
    copyCode: string;
    goToStore: string;
    expires: string;
    discount: string;
    howToUse: string;
    instruction1: string;
    instruction2: string;
    instruction3: string;
    instruction4: string;
  };
  faq: {
    title: string;
    subtitle: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
  };
  about: {
    title: string;
    subtitle: string;
    content: string;
  };
  contact: {
    title: string;
    subtitle: string;
    followUs: string;
    instagram: string;
    twitter: string;
    tiktok: string;
    youtube: string;
    pinterest: string;
  };
  meta: {
    homeTitle: string;
    homeDescription: string;
    homeKeywords: string;
    faqTitle: string;
    faqDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      faq: 'FAQ',
      about: 'About',
      contact: 'Contact',
    },
    home: {
      title: 'Fast Buds Coupons & Promo Codes',
      subtitle: 'Save on premium cannabis seeds with exclusive Fast Buds discount codes',
      search: 'Search coupons...',
      filter: {
        all: 'All Coupons',
        active: 'Active',
        expiring: 'Expiring Soon',
      },
      sort: {
        latest: 'Latest',
        expiring: 'Expiring Soon',
        discount: 'Best Discount',
      },
    },
    coupon: {
      copyCode: 'Copy Code',
      goToStore: 'Go to Store',
      expires: 'Expires',
      discount: 'Discount',
      howToUse: 'How to use this coupon',
      instruction1: 'Click "Copy Code" to copy the promo code to your clipboard',
      instruction2: 'Click "Go to Store" to visit Fast Buds official store',
      instruction3: 'Add your favorite seeds to the cart',
      instruction4: 'Paste the code at checkout and enjoy your savings',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about Fast Buds coupons',
      q1: 'How do I use a Fast Buds coupon code?',
      a1: 'Simply click "Copy Code" on any coupon, visit the Fast Buds store, add items to your cart, and paste the code at checkout.',
      q2: 'Do Fast Buds coupons expire?',
      a2: 'Yes, each coupon has an expiration date. We display the expiry date clearly on each coupon card.',
      q3: 'Can I use multiple coupons at once?',
      a3: 'Typically, only one coupon code can be used per order. Check the specific terms for each promotion.',
      q4: 'Where can I find the latest Fast Buds deals?',
      a4: 'This website is updated regularly with the latest Fast Buds coupons and promotions. Bookmark us for easy access!',
    },
    about: {
      title: 'About Fast Buds Coupons',
      subtitle: 'Your trusted source for Fast Buds discount codes',
      content: 'We are dedicated to helping cannabis growers save money on premium Fast Buds autoflowering seeds. Our team scours the web daily to bring you the latest and most valuable Fast Buds coupon codes, promo offers, and exclusive deals. Fast Buds is renowned for their high-quality genetics and exceptional autoflowering strains, and we believe everyone should have access to these premium seeds at the best possible prices.',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Follow us on social media for the latest deals',
      followUs: 'Follow Us',
      instagram: 'Follow on Instagram',
      twitter: 'Follow on Twitter',
      tiktok: 'Follow on TikTok',
      youtube: 'Follow on YouTube',
      pinterest: 'Follow on Pinterest',
    },
    meta: {
      homeTitle: 'Fast Buds Coupon Code 2025 - Active Fast Buds Promo Codes & Deals',
      homeDescription: 'Get verified Fast Buds coupon codes, discount codes & promo deals for 2025. Save on Fast Buds seeds with exclusive offers, BOGO deals & free shipping codes.',
      homeKeywords: 'fast buds coupon, fast buds promo code, fast buds discount, fast buds seed coupon, fast buds seeds discount code, buy fast buds seeds cheap, fast buds offers, fast buds legit promo code, active fast buds coupon, verified fast buds code, fast buds cannabis discounts, fast buds autoflower coupon, fast buds sale 2025, fast buds special offer, fast buds gift, fast buds BOGO, fast buds free shipping, best fast buds coupon, latest fast buds deals, october 2025 fast buds coupon, save money fast buds, exclusive fast buds deal, fast buds feminized seeds discount, fast buds online deals, official fast buds code, trusted fast buds coupon site',
      faqTitle: 'FAQ - Fast Buds Coupon Codes & Promo Deals 2025',
      faqDescription: 'Find answers about Fast Buds coupon codes, promo codes, discount deals, and how to save on premium cannabis seeds with verified codes.',
      aboutTitle: 'About - Fast Buds Coupons & Discount Codes Site',
      aboutDescription: 'Trusted source for Fast Buds coupon codes and promo deals. Save on premium autoflower cannabis seeds with verified discount codes.',
      contactTitle: 'Contact - Fast Buds Coupons & Deals',
      contactDescription: 'Connect with us on social media for the latest Fast Buds coupon codes, promo deals, and exclusive discounts.',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      faq: 'FAQ',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    home: {
      title: 'Fast Buds Gutscheine & Rabattcodes',
      subtitle: 'Sparen Sie bei Premium-Cannabis-Samen mit exklusiven Fast Buds Gutscheincodes',
      search: 'Gutscheine suchen...',
      filter: {
        all: 'Alle Gutscheine',
        active: 'Aktiv',
        expiring: 'Läuft bald ab',
      },
      sort: {
        latest: 'Neueste',
        expiring: 'Läuft bald ab',
        discount: 'Bester Rabatt',
      },
    },
    coupon: {
      copyCode: 'Code kopieren',
      goToStore: 'Zum Shop',
      expires: 'Läuft ab',
      discount: 'Rabatt',
      howToUse: 'So verwenden Sie diesen Gutschein',
      instruction1: 'Klicken Sie auf "Code kopieren", um den Promo-Code in die Zwischenablage zu kopieren',
      instruction2: 'Klicken Sie auf "Zum Shop", um den offiziellen Fast Buds Shop zu besuchen',
      instruction3: 'Fügen Sie Ihre Lieblingssamen zum Warenkorb hinzu',
      instruction4: 'Fügen Sie den Code beim Bezahlen ein und genießen Sie Ihre Ersparnis',
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      subtitle: 'Alles, was Sie über Fast Buds Gutscheine wissen müssen',
      q1: 'Wie verwende ich einen Fast Buds Gutscheincode?',
      a1: 'Klicken Sie einfach auf "Code kopieren" bei jedem Gutschein, besuchen Sie den Fast Buds Shop, fügen Sie Artikel zum Warenkorb hinzu und fügen Sie den Code beim Bezahlen ein.',
      q2: 'Laufen Fast Buds Gutscheine ab?',
      a2: 'Ja, jeder Gutschein hat ein Ablaufdatum. Wir zeigen das Ablaufdatum deutlich auf jeder Gutscheinkarte an.',
      q3: 'Kann ich mehrere Gutscheine gleichzeitig verwenden?',
      a3: 'In der Regel kann nur ein Gutscheincode pro Bestellung verwendet werden. Überprüfen Sie die spezifischen Bedingungen für jede Aktion.',
      q4: 'Wo finde ich die neuesten Fast Buds Angebote?',
      a4: 'Diese Website wird regelmäßig mit den neuesten Fast Buds Gutscheinen und Aktionen aktualisiert. Setzen Sie ein Lesezeichen für einfachen Zugriff!',
    },
    about: {
      title: 'Über Fast Buds Gutscheine',
      subtitle: 'Ihre vertrauenswürdige Quelle für Fast Buds Rabattcodes',
      content: 'Wir helfen Cannabis-Züchtern, bei Premium Fast Buds autoflowering Samen zu sparen. Unser Team durchsucht täglich das Internet, um Ihnen die neuesten und wertvollsten Fast Buds Gutscheincodes, Promo-Angebote und exklusive Deals zu bringen. Fast Buds ist bekannt für hochwertige Genetik und außergewöhnliche Autoflower-Sorten, und wir glauben, dass jeder Zugang zu diesen Premium-Samen zu den besten Preisen haben sollte.',
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Folgen Sie uns in den sozialen Medien für die neuesten Angebote',
      followUs: 'Folgen Sie uns',
      instagram: 'Auf Instagram folgen',
      twitter: 'Auf Twitter folgen',
      tiktok: 'Auf TikTok folgen',
      youtube: 'Auf YouTube folgen',
      pinterest: 'Auf Pinterest folgen',
    },
    meta: {
      homeTitle: 'Fast Buds Gutschein 2025 - Aktive Fast Buds Rabattcodes & Angebote',
      homeDescription: 'Erhalten Sie verifizierte Fast Buds Gutscheincodes, Rabattcodes & Promo-Angebote für 2025. Sparen Sie bei Fast Buds Samen mit exklusiven Angeboten, BOGO & gratis Versand.',
      homeKeywords: 'fast buds gutschein, fast buds rabattcode, fast buds angebot, fast buds samen rabatt, fast buds seeds günstig kaufen, fast buds promo code 2025, fast buds cannabis rabatt, fast buds autoflower gutschein, fast buds sale oktober 2025, fast buds geschenk, fast buds gratis versand, fast buds BOGO angebot, bester fast buds gutschein, offizieller fast buds code, fast buds rabattseite, verifizierter fast buds code',
      faqTitle: 'FAQ - Fast Buds Gutscheincodes & Promo-Angebote 2025',
      faqDescription: 'Finden Sie Antworten zu Fast Buds Gutscheincodes, Promo-Codes, Rabattangeboten und wie Sie bei Premium Cannabis-Samen sparen.',
      aboutTitle: 'Über uns - Fast Buds Gutscheine & Rabattcodes Seite',
      aboutDescription: 'Vertrauenswürdige Quelle für Fast Buds Gutscheincodes und Promo-Angebote. Sparen Sie bei Premium Autoflower Cannabis-Samen mit verifizierten Rabattcodes.',
      contactTitle: 'Kontakt - Fast Buds Gutscheine & Angebote',
      contactDescription: 'Verbinden Sie sich mit uns in den sozialen Medien für die neuesten Fast Buds Gutscheincodes, Promo-Angebote und exklusive Rabatte.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      faq: 'Preguntas',
      about: 'Acerca de',
      contact: 'Contacto',
    },
    home: {
      title: 'Cupones y Códigos Promocionales Fast Buds',
      subtitle: 'Ahorra en semillas de cannabis premium con códigos de descuento exclusivos de Fast Buds',
      search: 'Buscar cupones...',
      filter: {
        all: 'Todos los Cupones',
        active: 'Activos',
        expiring: 'Próximos a Vencer',
      },
      sort: {
        latest: 'Más Recientes',
        expiring: 'Próximos a Vencer',
        discount: 'Mejor Descuento',
      },
    },
    coupon: {
      copyCode: 'Copiar Código',
      goToStore: 'Ir a la Tienda',
      expires: 'Vence',
      discount: 'Descuento',
      howToUse: 'Cómo usar este cupón',
      instruction1: 'Haz clic en "Copiar Código" para copiar el código promocional al portapapeles',
      instruction2: 'Haz clic en "Ir a la Tienda" para visitar la tienda oficial de Fast Buds',
      instruction3: 'Añade tus semillas favoritas al carrito',
      instruction4: 'Pega el código al finalizar la compra y disfruta de tus ahorros',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre los cupones de Fast Buds',
      q1: '¿Cómo uso un código de cupón de Fast Buds?',
      a1: 'Simplemente haz clic en "Copiar Código" en cualquier cupón, visita la tienda de Fast Buds, añade artículos a tu carrito y pega el código al finalizar la compra.',
      q2: '¿Los cupones de Fast Buds caducan?',
      a2: 'Sí, cada cupón tiene una fecha de vencimiento. Mostramos claramente la fecha de vencimiento en cada tarjeta de cupón.',
      q3: '¿Puedo usar varios cupones a la vez?',
      a3: 'Típicamente, solo se puede usar un código de cupón por pedido. Verifica los términos específicos de cada promoción.',
      q4: '¿Dónde puedo encontrar las últimas ofertas de Fast Buds?',
      a4: 'Este sitio web se actualiza regularmente con los últimos cupones y promociones de Fast Buds. ¡Guárdanos en favoritos para acceso fácil!',
    },
    about: {
      title: 'Acerca de Cupones Fast Buds',
      subtitle: 'Tu fuente confiable de códigos de descuento Fast Buds',
      content: 'Nos dedicamos a ayudar a los cultivadores de cannabis a ahorrar dinero en semillas autoflorecientes premium de Fast Buds. Nuestro equipo busca diariamente en la web para traerte los códigos de cupón, ofertas promocionales y descuentos exclusivos más recientes y valiosos de Fast Buds. Fast Buds es reconocido por su genética de alta calidad y variedades autoflorecientes excepcionales, y creemos que todos deberían tener acceso a estas semillas premium a los mejores precios posibles.',
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Síguenos en redes sociales para las últimas ofertas',
      followUs: 'Síguenos',
      instagram: 'Seguir en Instagram',
      twitter: 'Seguir en Twitter',
      tiktok: 'Seguir en TikTok',
      youtube: 'Seguir en YouTube',
      pinterest: 'Seguir en Pinterest',
    },
    meta: {
      homeTitle: 'Cupón Fast Buds 2025 - Códigos Promocionales Fast Buds Activos & Ofertas',
      homeDescription: 'Obtén cupones Fast Buds verificados, códigos de descuento y ofertas promocionales para 2025. Ahorra en semillas Fast Buds con ofertas exclusivas, BOGO y envío gratis.',
      homeKeywords: 'cupón fast buds, código descuento fast buds, promoción fast buds, oferta semillas fast buds, comprar fast buds barato, fast buds cuenta propia, fast buds semillas descuento, fast buds cannabis cupón, cupón válido fast buds, fast buds BOGO oferta, fast buds envío gratis, últimas ofertas fast buds, octubre 2025 cupón fast buds, cupón exclusivo fast buds, sitio oficial cupones fast buds, semillas feminizadas fast buds descuento',
      faqTitle: 'Preguntas Frecuentes - Cupones Fast Buds & Ofertas Promocionales 2025',
      faqDescription: 'Encuentra respuestas sobre códigos de cupón Fast Buds, códigos promocionales, ofertas de descuento y cómo ahorrar en semillas de cannabis premium.',
      aboutTitle: 'Acerca de - Sitio de Cupones Fast Buds & Códigos de Descuento',
      aboutDescription: 'Fuente confiable de cupones Fast Buds y ofertas promocionales. Ahorra en semillas de cannabis autoflorecientes premium con códigos de descuento verificados.',
      contactTitle: 'Contacto - Cupones Fast Buds & Ofertas',
      contactDescription: 'Conéctate con nosotros en redes sociales para los últimos cupones Fast Buds, ofertas promocionales y descuentos exclusivos.',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      faq: 'Perguntas',
      about: 'Sobre',
      contact: 'Contato',
    },
    home: {
      title: 'Cupons e Códigos Promocionais Fast Buds',
      subtitle: 'Economize em sementes de cannabis premium com códigos de desconto exclusivos Fast Buds',
      search: 'Buscar cupons...',
      filter: {
        all: 'Todos os Cupons',
        active: 'Ativos',
        expiring: 'Expirando em Breve',
      },
      sort: {
        latest: 'Mais Recentes',
        expiring: 'Expirando em Breve',
        discount: 'Melhor Desconto',
      },
    },
    coupon: {
      copyCode: 'Copiar Código',
      goToStore: 'Ir para Loja',
      expires: 'Expira',
      discount: 'Desconto',
      howToUse: 'Como usar este cupom',
      instruction1: 'Clique em "Copiar Código" para copiar o código promocional',
      instruction2: 'Clique em "Ir para Loja" para visitar a loja oficial Fast Buds',
      instruction3: 'Adicione suas sementes favoritas ao carrinho',
      instruction4: 'Cole o código no checkout e aproveite sua economia',
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Tudo o que você precisa saber sobre cupons Fast Buds',
      q1: 'Como uso um código de cupom Fast Buds?',
      a1: 'Simplesmente clique em "Copiar Código" em qualquer cupom, visite a loja Fast Buds, adicione itens ao carrinho e cole o código no checkout.',
      q2: 'Os cupons Fast Buds expiram?',
      a2: 'Sim, cada cupom tem uma data de validade. Exibimos a data de validade claramente em cada cartão de cupom.',
      q3: 'Posso usar vários cupons de uma vez?',
      a3: 'Normalmente, apenas um código de cupom pode ser usado por pedido. Verifique os termos específicos de cada promoção.',
      q4: 'Onde posso encontrar as últimas ofertas Fast Buds?',
      a4: 'Este site é atualizado regularmente com os cupons e promoções mais recentes da Fast Buds. Salve-nos nos favoritos para fácil acesso!',
    },
    about: {
      title: 'Sobre Cupons Fast Buds',
      subtitle: 'Sua fonte confiável de códigos de desconto Fast Buds',
      content: 'Somos dedicados a ajudar cultivadores de cannabis a economizar dinheiro em sementes autoflorescentes premium da Fast Buds. Nossa equipe pesquisa diariamente na web para trazer os códigos de cupom, ofertas promocionais e descontos exclusivos mais recentes e valiosos da Fast Buds. Fast Buds é renomada por sua genética de alta qualidade e variedades autoflorescentes excepcionais, e acreditamos que todos devem ter acesso a essas sementes premium pelos melhores preços possíveis.',
    },
    contact: {
      title: 'Contato',
      subtitle: 'Siga-nos nas redes sociais para as últimas ofertas',
      followUs: 'Siga-nos',
      instagram: 'Seguir no Instagram',
      twitter: 'Seguir no Twitter',
      tiktok: 'Seguir no TikTok',
      youtube: 'Seguir no YouTube',
      pinterest: 'Seguir no Pinterest',
    },
    meta: {
      homeTitle: 'Cupom Fast Buds 2025 - Códigos Promocionais Fast Buds Ativos & Ofertas',
      homeDescription: 'Obtenha cupons Fast Buds verificados, códigos de desconto e ofertas promocionais para 2025. Economize em sementes Fast Buds com ofertas exclusivas, BOGO e frete grátis.',
      homeKeywords: 'cupom fast buds, código promocional fast buds, desconto fast buds, oferta sementes fast buds, fast buds cupom válido, fast buds promoção 2025, fast buds autoflores cupom, fast buds cannabis desconto, comprar fast buds sementes barato, fast buds frete grátis, melhor cupom fast buds, fast buds BOGO oferta, site oficial cupom fast buds, fast buds feminizadas desconto',
      faqTitle: 'Perguntas Frequentes - Cupons Fast Buds & Ofertas Promocionais 2025',
      faqDescription: 'Encontre respostas sobre códigos de cupom Fast Buds, códigos promocionais, ofertas de desconto e como economizar em sementes de cannabis premium.',
      aboutTitle: 'Sobre - Site de Cupons Fast Buds & Códigos de Desconto',
      aboutDescription: 'Fonte confiável de cupons Fast Buds e ofertas promocionais. Economize em sementes de cannabis autoflorescentes premium com códigos de desconto verificados.',
      contactTitle: 'Contato - Cupons Fast Buds & Ofertas',
      contactDescription: 'Conecte-se conosco nas redes sociais para os últimos cupons Fast Buds, ofertas promocionais e descontos exclusivos.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      faq: 'FAQ',
      about: 'À propos',
      contact: 'Contact',
    },
    home: {
      title: 'Coupons et Codes Promo Fast Buds',
      subtitle: 'Économisez sur les graines de cannabis premium avec des codes de réduction exclusifs Fast Buds',
      search: 'Rechercher des coupons...',
      filter: {
        all: 'Tous les Coupons',
        active: 'Actifs',
        expiring: 'Expirant Bientôt',
      },
      sort: {
        latest: 'Plus Récents',
        expiring: 'Expirant Bientôt',
        discount: 'Meilleure Réduction',
      },
    },
    coupon: {
      copyCode: 'Copier le Code',
      goToStore: 'Aller à la Boutique',
      expires: 'Expire',
      discount: 'Réduction',
      howToUse: 'Comment utiliser ce coupon',
      instruction1: 'Cliquez sur "Copier le Code" pour copier le code promo dans le presse-papiers',
      instruction2: 'Cliquez sur "Aller à la Boutique" pour visiter la boutique officielle Fast Buds',
      instruction3: 'Ajoutez vos graines préférées au panier',
      instruction4: 'Collez le code lors du paiement et profitez de vos économies',
    },
    faq: {
      title: 'Questions Fréquentes',
      subtitle: 'Tout ce que vous devez savoir sur les coupons Fast Buds',
      q1: 'Comment utiliser un code coupon Fast Buds?',
      a1: 'Cliquez simplement sur "Copier le Code" sur n\'importe quel coupon, visitez la boutique Fast Buds, ajoutez des articles à votre panier et collez le code lors du paiement.',
      q2: 'Les coupons Fast Buds expirent-ils?',
      a2: 'Oui, chaque coupon a une date d\'expiration. Nous affichons clairement la date d\'expiration sur chaque carte de coupon.',
      q3: 'Puis-je utiliser plusieurs coupons à la fois?',
      a3: 'Généralement, un seul code coupon peut être utilisé par commande. Vérifiez les conditions spécifiques de chaque promotion.',
      q4: 'Où puis-je trouver les dernières offres Fast Buds?',
      a4: 'Ce site web est mis à jour régulièrement avec les derniers coupons et promotions Fast Buds. Ajoutez-nous aux favoris pour un accès facile!',
    },
    about: {
      title: 'À Propos des Coupons Fast Buds',
      subtitle: 'Votre source fiable de codes de réduction Fast Buds',
      content: 'Nous sommes dédiés à aider les cultivateurs de cannabis à économiser de l\'argent sur les graines autoflorissantes premium Fast Buds. Notre équipe parcourt quotidiennement le web pour vous apporter les codes coupon, offres promotionnelles et réductions exclusives Fast Buds les plus récents et les plus précieux. Fast Buds est réputé pour sa génétique de haute qualité et ses variétés autoflorissantes exceptionnelles, et nous pensons que tout le monde devrait avoir accès à ces graines premium aux meilleurs prix possibles.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Suivez-nous sur les réseaux sociaux pour les dernières offres',
      followUs: 'Suivez-nous',
      instagram: 'Suivre sur Instagram',
      twitter: 'Suivre sur Twitter',
      tiktok: 'Suivre sur TikTok',
      youtube: 'Suivre sur YouTube',
      pinterest: 'Suivre sur Pinterest',
    },
    meta: {
      homeTitle: 'Coupon Fast Buds 2025 - Codes Promo Fast Buds Actifs & Offres',
      homeDescription: 'Obtenez des coupons Fast Buds vérifiés, codes de réduction et offres promotionnelles pour 2025. Économisez sur les graines Fast Buds avec offres exclusives, BOGO et livraison gratuite.',
      homeKeywords: 'coupon fast buds, code promo fast buds, réduction fast buds, offre graines fast buds, fast buds achat pas cher, fast buds remise cannabis, fast buds autofloraison coupon, fast buds BOGO offre, livraison gratuite fast buds, dernier coupon fast buds, octobre 2025 code promo fast buds, site officiel coupon fast buds, meilleures offres fast buds, graines féminisées fast buds réduction',
      faqTitle: 'FAQ - Coupons Fast Buds & Offres Promotionnelles 2025',
      faqDescription: 'Trouvez des réponses sur les codes coupon Fast Buds, codes promotionnels, offres de réduction et comment économiser sur les graines de cannabis premium.',
      aboutTitle: 'À Propos - Site de Coupons Fast Buds & Codes de Réduction',
      aboutDescription: 'Source fiable de coupons Fast Buds et offres promotionnelles. Économisez sur les graines de cannabis autoflorissantes premium avec codes de réduction vérifiés.',
      contactTitle: 'Contact - Coupons Fast Buds & Offres',
      contactDescription: 'Connectez-vous avec nous sur les réseaux sociaux pour les derniers coupons Fast Buds, offres promotionnelles et réductions exclusives.',
    },
  },
  it: {
    nav: {
      home: 'Home',
      faq: 'Domande',
      about: 'Chi Siamo',
      contact: 'Contatti',
    },
    home: {
      title: 'Coupon e Codici Promozionali Fast Buds',
      subtitle: 'Risparmia sui semi di cannabis premium con codici sconto esclusivi Fast Buds',
      search: 'Cerca coupon...',
      filter: {
        all: 'Tutti i Coupon',
        active: 'Attivi',
        expiring: 'In Scadenza',
      },
      sort: {
        latest: 'Più Recenti',
        expiring: 'In Scadenza',
        discount: 'Miglior Sconto',
      },
    },
    coupon: {
      copyCode: 'Copia Codice',
      goToStore: 'Vai al Negozio',
      expires: 'Scade',
      discount: 'Sconto',
      howToUse: 'Come usare questo coupon',
      instruction1: 'Clicca su "Copia Codice" per copiare il codice promozionale negli appunti',
      instruction2: 'Clicca su "Vai al Negozio" per visitare il negozio ufficiale Fast Buds',
      instruction3: 'Aggiungi i tuoi semi preferiti al carrello',
      instruction4: 'Incolla il codice al checkout e goditi il risparmio',
    },
    faq: {
      title: 'Domande Frequenti',
      subtitle: 'Tutto quello che devi sapere sui coupon Fast Buds',
      q1: 'Come uso un codice coupon Fast Buds?',
      a1: 'Semplicemente clicca su "Copia Codice" su qualsiasi coupon, visita il negozio Fast Buds, aggiungi articoli al carrello e incolla il codice al checkout.',
      q2: 'I coupon Fast Buds scadono?',
      a2: 'Sì, ogni coupon ha una data di scadenza. Mostriamo chiaramente la data di scadenza su ogni carta coupon.',
      q3: 'Posso usare più coupon contemporaneamente?',
      a3: 'Tipicamente, solo un codice coupon può essere usato per ordine. Controlla i termini specifici per ogni promozione.',
      q4: 'Dove posso trovare le ultime offerte Fast Buds?',
      a4: 'Questo sito web è aggiornato regolarmente con gli ultimi coupon e promozioni Fast Buds. Salvaci nei preferiti per un facile accesso!',
    },
    about: {
      title: 'Chi Siamo - Coupon Fast Buds',
      subtitle: 'La tua fonte affidabile di codici sconto Fast Buds',
      content: 'Siamo dedicati ad aiutare i coltivatori di cannabis a risparmiare denaro sui semi autofiorenti premium Fast Buds. Il nostro team setaccia quotidianamente il web per portarti i codici coupon, le offerte promozionali e gli sconti esclusivi Fast Buds più recenti e preziosi. Fast Buds è rinomata per la genetica di alta qualità e le varietà autofiorenti eccezionali, e crediamo che tutti dovrebbero avere accesso a questi semi premium ai migliori prezzi possibili.',
    },
    contact: {
      title: 'Contatti',
      subtitle: 'Seguici sui social media per le ultime offerte',
      followUs: 'Seguici',
      instagram: 'Segui su Instagram',
      twitter: 'Segui su Twitter',
      tiktok: 'Segui su TikTok',
      youtube: 'Segui su YouTube',
      pinterest: 'Segui su Pinterest',
    },
    meta: {
      homeTitle: 'Coupon Fast Buds 2025 - Codici Promo Fast Buds Attivi & Offerte',
      homeDescription: 'Ottieni coupon Fast Buds verificati, codici sconto e offerte promozionali per 2025. Risparmia sui semi Fast Buds con offerte esclusive, BOGO e spedizione gratuita.',
      homeKeywords: 'coupon fast buds, codice sconto fast buds, offerta fast buds, semi fast buds offerta, acquista fast buds semi sconto, fast buds promozione 2025, fast buds autofiorenti coupon, fast buds cannabis sconto, fast buds BOGO promozione, spedizione gratuita fast buds, coupon ufficiale fast buds, migliori offerte fast buds, semi femminizzati fast buds sconto, sito affidabile coupon fast buds, coupon valido fast buds ottobre 2025',
      faqTitle: 'Domande Frequenti - Coupon Fast Buds & Offerte Promozionali 2025',
      faqDescription: 'Trova risposte sui codici coupon Fast Buds, codici promozionali, offerte di sconto e come risparmiare sui semi di cannabis premium.',
      aboutTitle: 'Chi Siamo - Sito Coupon Fast Buds & Codici Sconto',
      aboutDescription: 'Fonte affidabile di coupon Fast Buds e offerte promozionali. Risparmia sui semi di cannabis autofiorenti premium con codici sconto verificati.',
      contactTitle: 'Contatti - Coupon Fast Buds & Offerte',
      contactDescription: 'Connettiti con noi sui social media per gli ultimi coupon Fast Buds, offerte promozionali e sconti esclusivi.',
    },
  },
};
