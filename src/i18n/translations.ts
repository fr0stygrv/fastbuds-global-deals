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
    email: string;
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
      subtitle: 'Have questions or want to submit a coupon?',
      email: 'Email: info@fastbudscoupons.com',
    },
    meta: {
      homeTitle: 'Fast Buds Coupons & Promo Codes - Save on Cannabis Seeds',
      homeDescription: 'Find the latest Fast Buds coupon codes and discounts. Save money on premium autoflowering cannabis seeds with exclusive promo codes.',
      homeKeywords: 'Fast Buds coupon, Fast Buds promo code, Fast Buds discount, cannabis seeds coupon, autoflower discount',
      faqTitle: 'FAQ - Fast Buds Coupons',
      faqDescription: 'Answers to frequently asked questions about Fast Buds coupon codes and how to use them.',
      aboutTitle: 'About - Fast Buds Coupons',
      aboutDescription: 'Learn more about our mission to bring you the best Fast Buds deals and discount codes.',
      contactTitle: 'Contact - Fast Buds Coupons',
      contactDescription: 'Get in touch with us about Fast Buds coupons and promotions.',
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
      subtitle: 'Haben Sie Fragen oder möchten Sie einen Gutschein einreichen?',
      email: 'E-Mail: info@fastbudscoupons.com',
    },
    meta: {
      homeTitle: 'Fast Buds Gutscheine & Rabattcodes - Sparen Sie bei Cannabis-Samen',
      homeDescription: 'Finden Sie die neuesten Fast Buds Gutscheincodes und Rabatte. Sparen Sie Geld bei Premium autoflowering Cannabis-Samen mit exklusiven Promo-Codes.',
      homeKeywords: 'Fast Buds Gutschein, Fast Buds Rabattcode, Fast Buds Angebot, Cannabis Samen Gutschein, Autoflower Rabatt',
      faqTitle: 'FAQ - Fast Buds Gutscheine',
      faqDescription: 'Antworten auf häufig gestellte Fragen zu Fast Buds Gutscheincodes und deren Verwendung.',
      aboutTitle: 'Über uns - Fast Buds Gutscheine',
      aboutDescription: 'Erfahren Sie mehr über unsere Mission, Ihnen die besten Fast Buds Angebote und Rabattcodes zu bringen.',
      contactTitle: 'Kontakt - Fast Buds Gutscheine',
      contactDescription: 'Kontaktieren Sie uns bezüglich Fast Buds Gutscheinen und Aktionen.',
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
      subtitle: '¿Tienes preguntas o quieres enviar un cupón?',
      email: 'Email: info@fastbudscoupons.com',
    },
    meta: {
      homeTitle: 'Cupones y Códigos Promocionales Fast Buds - Ahorra en Semillas de Cannabis',
      homeDescription: 'Encuentra los últimos códigos de cupón y descuentos de Fast Buds. Ahorra dinero en semillas de cannabis autoflorecientes premium con códigos promocionales exclusivos.',
      homeKeywords: 'cupón Fast Buds, código promocional Fast Buds, descuento Fast Buds, cupón semillas cannabis, descuento autoflorecientes',
      faqTitle: 'Preguntas Frecuentes - Cupones Fast Buds',
      faqDescription: 'Respuestas a preguntas frecuentes sobre códigos de cupón Fast Buds y cómo usarlos.',
      aboutTitle: 'Acerca de - Cupones Fast Buds',
      aboutDescription: 'Conoce más sobre nuestra misión de traerte las mejores ofertas y códigos de descuento de Fast Buds.',
      contactTitle: 'Contacto - Cupones Fast Buds',
      contactDescription: 'Contáctanos sobre cupones y promociones de Fast Buds.',
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
      subtitle: 'Tem perguntas ou quer enviar um cupom?',
      email: 'Email: info@fastbudscoupons.com',
    },
    meta: {
      homeTitle: 'Cupons e Códigos Promocionais Fast Buds - Economize em Sementes de Cannabis',
      homeDescription: 'Encontre os códigos de cupom e descontos mais recentes da Fast Buds. Economize dinheiro em sementes de cannabis autoflorescentes premium com códigos promocionais exclusivos.',
      homeKeywords: 'cupom Fast Buds, código promocional Fast Buds, desconto Fast Buds, cupom sementes cannabis, desconto autoflorescentes',
      faqTitle: 'Perguntas Frequentes - Cupons Fast Buds',
      faqDescription: 'Respostas para perguntas frequentes sobre códigos de cupom Fast Buds e como usá-los.',
      aboutTitle: 'Sobre - Cupons Fast Buds',
      aboutDescription: 'Saiba mais sobre nossa missão de trazer as melhores ofertas e códigos de desconto Fast Buds.',
      contactTitle: 'Contato - Cupons Fast Buds',
      contactDescription: 'Entre em contato conosco sobre cupons e promoções Fast Buds.',
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
      subtitle: 'Vous avez des questions ou souhaitez soumettre un coupon?',
      email: 'Email: info@fastbudscoupons.com',
    },
    meta: {
      homeTitle: 'Coupons et Codes Promo Fast Buds - Économisez sur les Graines de Cannabis',
      homeDescription: 'Trouvez les derniers codes coupon et réductions Fast Buds. Économisez de l\'argent sur les graines de cannabis autoflorissantes premium avec des codes promo exclusifs.',
      homeKeywords: 'coupon Fast Buds, code promo Fast Buds, réduction Fast Buds, coupon graines cannabis, réduction autofloraison',
      faqTitle: 'FAQ - Coupons Fast Buds',
      faqDescription: 'Réponses aux questions fréquentes sur les codes coupon Fast Buds et comment les utiliser.',
      aboutTitle: 'À Propos - Coupons Fast Buds',
      aboutDescription: 'En savoir plus sur notre mission de vous apporter les meilleures offres et codes de réduction Fast Buds.',
      contactTitle: 'Contact - Coupons Fast Buds',
      contactDescription: 'Contactez-nous concernant les coupons et promotions Fast Buds.',
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
      subtitle: 'Hai domande o vuoi inviare un coupon?',
      email: 'Email: info@fastbudscoupons.com',
    },
    meta: {
      homeTitle: 'Coupon e Codici Promozionali Fast Buds - Risparmia sui Semi di Cannabis',
      homeDescription: 'Trova gli ultimi codici coupon e sconti Fast Buds. Risparmia denaro sui semi di cannabis autofiorenti premium con codici promozionali esclusivi.',
      homeKeywords: 'coupon Fast Buds, codice promozionale Fast Buds, sconto Fast Buds, coupon semi cannabis, sconto autofiorenti',
      faqTitle: 'Domande Frequenti - Coupon Fast Buds',
      faqDescription: 'Risposte alle domande frequenti sui codici coupon Fast Buds e come usarli.',
      aboutTitle: 'Chi Siamo - Coupon Fast Buds',
      aboutDescription: 'Scopri di più sulla nostra missione di portarti le migliori offerte e codici sconto Fast Buds.',
      contactTitle: 'Contatti - Coupon Fast Buds',
      contactDescription: 'Contattaci riguardo coupon e promozioni Fast Buds.',
    },
  },
};
