import { Language } from '@/i18n/languages';

export interface CouponContent {
  title: string;
  description: string;
  slug: string;
  longDescription?: string;
  features?: string[];
  faq?: Array<{ question: string; answer: string }>;
}

export interface Coupon {
  id: string;
  code: string;
  discount: string;
  expiryDate: string;
  isActive: boolean;
  usageCount: number;
  neverExpires?: boolean;
  image?: string;
  content: Record<Language, CouponContent>;
}

export const coupons: Coupon[] = [
  {
    id: '1',
    code: 'SAVEMAX',
    discount: '20%',
    expiryDate: '2040-04-20',
    isActive: true,
    usageCount: 45,
    neverExpires: true,
    image: '/images/coupons/savemax.png',
    content: {
      en: {
        title: 'Maximum Savings - 20% Off Everything!',
        description: 'Unlock the biggest discount available! Save 20% on all Fast Buds premium autoflowering seeds. Your wallet will thank you.',
        slug: 'en/coupon/maximum-savings-20-off-everything',
        longDescription: 'The Fast Buds SAVEMAX discount code represents the ultimate savings opportunity with an incredible 20% off on all premium autoflowering cannabis seeds. This exclusive Fast Buds promo code offers the highest discount available, giving growers unmatched value on championship-winning genetics. Whether you\'re stocking up on your favorite strains or exploring new varieties, the SAVEMAX coupon code makes premium cultivation more affordable than ever. Fast Buds has established itself as the global leader in autoflowering cannabis genetics, with numerous Cannabis Cup awards and a massive community of satisfied growers worldwide. This Fast Buds discount applies to their complete catalog of premium seeds, including legendary strains like Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto, and Gelato Auto. The 20% savings with this Fast Buds coupon code means substantial budget for nutrients, grow equipment, or simply more seeds to expand your garden. This is the maximum discount you can find on Fast Buds seeds – don\'t miss the opportunity to grow world-class genetics while saving big.',
        features: [
          'Save 20% on all Fast Buds premium autoflowering seeds - highest discount available',
          'Access to championship-winning genetics including Cannabis Cup award winners',
          'Unlimited usage - apply this Fast Buds discount code to every order',
          'No minimum purchase required - save on orders of any size',
          'Never expires - this Fast Buds promo code remains active indefinitely',
          'Compatible with all strains: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Stack maximum savings by ordering during Fast Buds promotional periods'
        ],
        faq: [
          {
            question: 'How do I apply the SAVEMAX Fast Buds coupon code at checkout?',
            answer: 'Simply click the "Copy Code" button above to copy SAVEMAX to your clipboard. Then visit the Fast Buds official store, add your favorite autoflowering seeds to cart, and paste the code in the promo code field during checkout. Your 20% discount will be applied immediately to your order total.'
          },
          {
            question: 'Does the SAVEMAX discount code work on all Fast Buds seeds?',
            answer: 'Yes! The SAVEMAX promo code provides 20% off on the entire Fast Buds catalog, including their most popular autoflowering strains, new releases, and limited edition genetics. There are no restrictions on which seeds you can purchase with this coupon.'
          },
          {
            question: 'Can I use the SAVEMAX coupon multiple times?',
            answer: 'Absolutely! Unlike many promotional codes that are single-use only, the SAVEMAX Fast Buds discount code can be used on multiple orders. There\'s no limit to how many times you can save 20% on your Fast Buds seed purchases.'
          },
          {
            question: 'Does this Fast Buds promo code have an expiration date?',
            answer: 'No, the SAVEMAX coupon code never expires. This permanent 20% discount is available for all Fast Buds customers, making it perfect for planning your grows throughout the year without worrying about missing a limited-time deal.'
          },
          {
            question: 'Is there a minimum order requirement to use the SAVEMAX code?',
            answer: 'No minimum purchase is required. Whether you\'re buying a single 3-pack of seeds or stocking up with multiple strains, the SAVEMAX discount code will save you 20% on orders of any size at the Fast Buds store.'
          }
        ]
      },
      de: {
        title: 'Maximale Ersparnis - 20% auf Alles!',
        description: 'Sichern Sie sich den größten verfügbaren Rabatt! Sparen Sie 20% auf alle Fast Buds Premium-Autoflowering-Samen. Ihr Geldbeutel wird es Ihnen danken.',
        slug: 'de/coupon/maximale-ersparnis-20-auf-alles',
        longDescription: 'Der Fast Buds SAVEMAX Rabattcode ist die ultimative Spargelegenheit mit unglaublichen 20% Rabatt auf alle Premium autoflowering Cannabis-Samen. Dieser exklusive Fast Buds Gutschein bietet den höchsten verfügbaren Rabatt und gibt Züchtern unschlagbaren Wert auf preisgekrönte Genetik. Ob Sie Ihre Lieblingssorten auffüllen oder neue Varietäten erkunden – der SAVEMAX Coupon macht Premium-Anbau erschwinglicher denn je. Fast Buds hat sich als globaler Marktführer für autoflowering Cannabis-Genetik etabliert, mit zahlreichen Cannabis Cup Auszeichnungen. Dieser Fast Buds Rabatt gilt für den kompletten Katalog, einschließlich legendärer Sorten wie Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto und Gelato Auto. Die 20% Ersparnis bedeuten mehr Budget für Nährstoffe, Ausrüstung oder einfach mehr Samen.',
        features: [
          '20% Rabatt auf alle Fast Buds Premium autoflowering Samen - höchster verfügbarer Rabatt',
          'Zugang zu preisgekrönter Genetik einschließlich Cannabis Cup Gewinnern',
          'Unbegrenzte Nutzung - wenden Sie diesen Fast Buds Rabatt bei jeder Bestellung an',
          'Kein Mindestbestellwert erforderlich - sparen Sie bei Bestellungen jeder Größe',
          'Läuft nie ab - dieser Fast Buds Gutschein bleibt dauerhaft aktiv',
          'Kompatibel mit allen Sorten: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Maximale Ersparnisse bei Bestellung während Fast Buds Aktionszeiträumen'
        ],
        faq: [
          {
            question: 'Wie wende ich den SAVEMAX Fast Buds Gutscheincode an der Kasse an?',
            answer: 'Klicken Sie einfach auf "Code kopieren", um SAVEMAX in Ihre Zwischenablage zu kopieren. Besuchen Sie dann den offiziellen Fast Buds Shop, fügen Sie Ihre Lieblingssamen zum Warenkorb hinzu und fügen Sie den Code im Gutscheinfeld beim Checkout ein. Ihr 20% Rabatt wird sofort angewendet.'
          },
          {
            question: 'Funktioniert der SAVEMAX Rabattcode bei allen Fast Buds Samen?',
            answer: 'Ja! Der SAVEMAX Gutschein bietet 20% Rabatt auf den gesamten Fast Buds Katalog, einschließlich der beliebtesten autoflowering Sorten, neuen Releases und limitierten Editionen. Es gibt keine Einschränkungen.'
          },
          {
            question: 'Kann ich den SAVEMAX Gutschein mehrmals verwenden?',
            answer: 'Absolut! Anders als viele Aktionscodes, die nur einmal verwendet werden können, kann der SAVEMAX Fast Buds Rabattcode bei mehreren Bestellungen genutzt werden. Es gibt keine Begrenzung, wie oft Sie 20% sparen können.'
          },
          {
            question: 'Hat dieser Fast Buds Gutschein ein Ablaufdatum?',
            answer: 'Nein, der SAVEMAX Gutscheincode läuft nie ab. Dieser permanente 20% Rabatt ist für alle Fast Buds Kunden verfügbar, ideal für die Planung Ihrer Anbaus das ganze Jahr über.'
          },
          {
            question: 'Gibt es einen Mindestbestellwert für den SAVEMAX Code?',
            answer: 'Kein Mindestbestellwert erforderlich. Ob Sie ein einzelnes 3er-Pack kaufen oder mehrere Sorten bestellen, der SAVEMAX Rabattcode spart Ihnen 20% bei Bestellungen jeder Größe.'
          }
        ]
      },
      es: {
        title: 'Ahorro Máximo - ¡20% en Todo!',
        description: '¡Desbloquea el descuento más grande disponible! Ahorra 20% en todas las semillas autoflorecientes premium de Fast Buds. Tu billetera te lo agradecerá.',
        slug: 'es/cupon/ahorro-maximo-20-en-todo',
        longDescription: 'El código de descuento SAVEMAX de Fast Buds representa la máxima oportunidad de ahorro con un increíble 20% de descuento en todas las semillas de cannabis autoflorecientes premium. Este código promocional exclusivo de Fast Buds ofrece el mayor descuento disponible, brindando a los cultivadores un valor inigualable en genética ganadora de campeonatos. Ya sea que estés abasteciendo tus variedades favoritas o explorando nuevas variedades, el cupón SAVEMAX hace que el cultivo premium sea más asequible que nunca. Fast Buds se ha establecido como el líder global en genética de cannabis autofloreciente, con numerosos premios Cannabis Cup. Este descuento de Fast Buds se aplica a su catálogo completo de semillas premium, incluidas variedades legendarias como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto y Gelato Auto. El ahorro del 20% significa más presupuesto para nutrientes, equipo o simplemente más semillas.',
        features: [
          'Ahorra 20% en todas las semillas autoflorecientes premium de Fast Buds - mayor descuento disponible',
          'Acceso a genética ganadora de campeonatos incluyendo premios Cannabis Cup',
          'Uso ilimitado - aplica este código de descuento Fast Buds en cada pedido',
          'Sin compra mínima requerida - ahorra en pedidos de cualquier tamaño',
          'Nunca expira - este código promo de Fast Buds permanece activo indefinidamente',
          'Compatible con todas las variedades: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Acumula ahorros máximos ordenando durante períodos promocionales de Fast Buds'
        ],
        faq: [
          {
            question: '¿Cómo aplico el cupón SAVEMAX de Fast Buds al finalizar la compra?',
            answer: 'Simplemente haz clic en el botón "Copiar Código" para copiar SAVEMAX al portapapeles. Luego visita la tienda oficial de Fast Buds, añade tus semillas favoritas al carrito y pega el código en el campo de código promocional durante el checkout. Tu descuento del 20% se aplicará inmediatamente.'
          },
          {
            question: '¿El código SAVEMAX funciona en todas las semillas Fast Buds?',
            answer: '¡Sí! El código promo SAVEMAX proporciona 20% de descuento en todo el catálogo de Fast Buds, incluyendo sus variedades autoflorecientes más populares, nuevos lanzamientos y genética de edición limitada. No hay restricciones.'
          },
          {
            question: '¿Puedo usar el cupón SAVEMAX múltiples veces?',
            answer: '¡Absolutamente! A diferencia de muchos códigos promocionales de un solo uso, el código de descuento SAVEMAX de Fast Buds puede usarse en múltiples pedidos. No hay límite para cuántas veces puedes ahorrar 20%.'
          },
          {
            question: '¿Este código promo de Fast Buds tiene fecha de expiración?',
            answer: 'No, el código SAVEMAX nunca expira. Este descuento permanente del 20% está disponible para todos los clientes de Fast Buds, perfecto para planificar tus cultivos durante todo el año.'
          },
          {
            question: '¿Hay un pedido mínimo para usar el código SAVEMAX?',
            answer: 'No se requiere compra mínima. Ya sea que compres un solo paquete de 3 semillas o hagas un pedido grande, el código SAVEMAX te ahorrará 20% en pedidos de cualquier tamaño.'
          }
        ]
      },
      pt: {
        title: 'Economia Máxima - 20% em Tudo!',
        description: 'Desbloqueie o maior desconto disponível! Economize 20% em todas as sementes autoflorescentes premium da Fast Buds. Sua carteira agradecerá.',
        slug: 'pt/cupom/economia-maxima-20-em-tudo',
        longDescription: 'O código de desconto SAVEMAX da Fast Buds representa a máxima oportunidade de economia com incríveis 20% de desconto em todas as sementes de cannabis autoflorescentes premium. Este código promocional exclusivo da Fast Buds oferece o maior desconto disponível, dando aos cultivadores valor incomparável em genética vencedora de campeonatos. Seja você abastecendo suas variedades favoritas ou explorando novas variedades, o cupom SAVEMAX torna o cultivo premium mais acessível do que nunca. A Fast Buds se estabeleceu como líder global em genética de cannabis autoflorescente, com numerosos prêmios Cannabis Cup. Este desconto da Fast Buds se aplica ao catálogo completo de sementes premium, incluindo variedades lendárias como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. A economia de 20% significa mais orçamento para nutrientes, equipamentos ou simplesmente mais sementes.',
        features: [
          'Economize 20% em todas as sementes autoflorescentes premium da Fast Buds - maior desconto disponível',
          'Acesso a genética vencedora de campeonatos incluindo prêmios Cannabis Cup',
          'Uso ilimitado - aplique este código de desconto Fast Buds em cada pedido',
          'Sem compra mínima necessária - economize em pedidos de qualquer tamanho',
          'Nunca expira - este código promo da Fast Buds permanece ativo indefinidamente',
          'Compatível com todas as variedades: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Acumule economias máximas pedindo durante períodos promocionais da Fast Buds'
        ],
        faq: [
          {
            question: 'Como aplico o cupom SAVEMAX da Fast Buds no checkout?',
            answer: 'Simplesmente clique no botão "Copiar Código" para copiar SAVEMAX para a área de transferência. Em seguida, visite a loja oficial da Fast Buds, adicione suas sementes favoritas ao carrinho e cole o código no campo de código promocional durante o checkout. Seu desconto de 20% será aplicado imediatamente.'
          },
          {
            question: 'O código SAVEMAX funciona em todas as sementes Fast Buds?',
            answer: 'Sim! O código promo SAVEMAX oferece 20% de desconto em todo o catálogo da Fast Buds, incluindo suas variedades autoflorescentes mais populares, novos lançamentos e genética de edição limitada. Não há restrições.'
          },
          {
            question: 'Posso usar o cupom SAVEMAX múltiplas vezes?',
            answer: 'Absolutamente! Ao contrário de muitos códigos promocionais de uso único, o código de desconto SAVEMAX da Fast Buds pode ser usado em múltiplos pedidos. Não há limite para quantas vezes você pode economizar 20%.'
          },
          {
            question: 'Este código promo da Fast Buds tem data de validade?',
            answer: 'Não, o código SAVEMAX nunca expira. Este desconto permanente de 20% está disponível para todos os clientes da Fast Buds, perfeito para planejar seus cultivos durante todo o ano.'
          },
          {
            question: 'Há um pedido mínimo para usar o código SAVEMAX?',
            answer: 'Nenhuma compra mínima é necessária. Seja você comprando um único pacote de 3 sementes ou fazendo um pedido grande, o código SAVEMAX economizará 20% em pedidos de qualquer tamanho.'
          }
        ]
      },
      fr: {
        title: 'Économies Maximales - 20% sur Tout!',
        description: 'Débloquez la plus grosse réduction disponible! Économisez 20% sur toutes les graines autoflorissantes premium Fast Buds. Votre portefeuille vous remerciera.',
        slug: 'fr/coupon/economies-maximales-20-sur-tout',
        longDescription: 'Le code promo SAVEMAX de Fast Buds représente l\'opportunité d\'économie ultime avec un incroyable 20% de réduction sur toutes les graines de cannabis autofloraison premium. Ce code promotionnel exclusif Fast Buds offre la réduction la plus élevée disponible, donnant aux cultivateurs une valeur inégalée sur une génétique primée. Que vous fassiez le plein de vos variétés préférées ou que vous exploriez de nouvelles variétés, le coupon SAVEMAX rend la culture premium plus abordable que jamais. Fast Buds s\'est établi comme le leader mondial de la génétique autofloraison, avec de nombreux prix Cannabis Cup. Cette réduction Fast Buds s\'applique à leur catalogue complet de graines premium, y compris des variétés légendaires comme Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto et Gelato Auto. L\'économie de 20% signifie plus de budget pour les nutriments, l\'équipement ou simplement plus de graines.',
        features: [
          'Économisez 20% sur toutes les graines autofloraison premium Fast Buds - réduction la plus élevée disponible',
          'Accès à la génétique primée incluant les gagnants de Cannabis Cup',
          'Utilisation illimitée - appliquez ce code promo Fast Buds à chaque commande',
          'Aucun achat minimum requis - économisez sur les commandes de toute taille',
          'N\'expire jamais - ce code promo Fast Buds reste actif indéfiniment',
          'Compatible avec toutes les variétés: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Cumulez les économies maximales en commandant pendant les périodes promotionnelles Fast Buds'
        ],
        faq: [
          {
            question: 'Comment appliquer le coupon SAVEMAX de Fast Buds lors du paiement?',
            answer: 'Cliquez simplement sur le bouton "Copier le Code" pour copier SAVEMAX dans votre presse-papiers. Ensuite, visitez la boutique officielle Fast Buds, ajoutez vos graines préférées au panier et collez le code dans le champ code promo lors du paiement. Votre réduction de 20% sera appliquée immédiatement.'
          },
          {
            question: 'Le code SAVEMAX fonctionne-t-il sur toutes les graines Fast Buds?',
            answer: 'Oui! Le code promo SAVEMAX offre 20% de réduction sur l\'ensemble du catalogue Fast Buds, y compris leurs variétés autofloraison les plus populaires, les nouvelles sorties et la génétique en édition limitée. Il n\'y a aucune restriction.'
          },
          {
            question: 'Puis-je utiliser le coupon SAVEMAX plusieurs fois?',
            answer: 'Absolument! Contrairement à de nombreux codes promotionnels à usage unique, le code promo SAVEMAX de Fast Buds peut être utilisé sur plusieurs commandes. Il n\'y a aucune limite au nombre de fois où vous pouvez économiser 20%.'
          },
          {
            question: 'Ce code promo Fast Buds a-t-il une date d\'expiration?',
            answer: 'Non, le code SAVEMAX n\'expire jamais. Cette réduction permanente de 20% est disponible pour tous les clients Fast Buds, parfaite pour planifier vos cultures tout au long de l\'année.'
          },
          {
            question: 'Y a-t-il une commande minimum pour utiliser le code SAVEMAX?',
            answer: 'Aucun achat minimum n\'est requis. Que vous achetiez un seul pack de 3 graines ou que vous fassiez une grosse commande, le code SAVEMAX vous fera économiser 20% sur les commandes de toute taille.'
          }
        ]
      },
      it: {
        title: 'Risparmio Massimo - 20% su Tutto!',
        description: 'Sblocca lo sconto più grande disponibile! Risparmia il 20% su tutti i semi autofiorenti premium Fast Buds. Il tuo portafoglio ti ringrazierà.',
        slug: 'it/coupon/risparmio-massimo-20-su-tutto',
        longDescription: 'Il codice sconto SAVEMAX di Fast Buds rappresenta l\'opportunità di risparmio definitiva con un incredibile 20% di sconto su tutti i semi di cannabis autofiorenti premium. Questo codice promozionale esclusivo Fast Buds offre lo sconto più alto disponibile, dando ai coltivatori un valore impareggiabile su genetica vincitrice di campionati. Che tu stia rifornendo le tue varietà preferite o esplorando nuove varietà, il coupon SAVEMAX rende la coltivazione premium più accessibile che mai. Fast Buds si è affermata come leader globale nella genetica autofiorente, con numerosi premi Cannabis Cup. Questo sconto Fast Buds si applica al loro catalogo completo di semi premium, incluse varietà leggendarie come Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. Il risparmio del 20% significa più budget per nutrienti, attrezzature o semplicemente più semi.',
        features: [
          'Risparmia il 20% su tutti i semi autofiorenti premium Fast Buds - sconto più alto disponibile',
          'Accesso a genetica vincitrice di campionati inclusi i vincitori della Cannabis Cup',
          'Utilizzo illimitato - applica questo codice sconto Fast Buds ad ogni ordine',
          'Nessun acquisto minimo richiesto - risparmia su ordini di qualsiasi dimensione',
          'Non scade mai - questo codice promo Fast Buds rimane attivo indefinitamente',
          'Compatibile con tutte le varietà: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Accumula risparmi massimi ordinando durante i periodi promozionali Fast Buds'
        ],
        faq: [
          {
            question: 'Come applico il coupon SAVEMAX di Fast Buds al checkout?',
            answer: 'Fai semplicemente clic sul pulsante "Copia Codice" per copiare SAVEMAX negli appunti. Quindi visita lo store ufficiale Fast Buds, aggiungi i tuoi semi preferiti al carrello e incolla il codice nel campo codice promo durante il checkout. Il tuo sconto del 20% verrà applicato immediatamente.'
          },
          {
            question: 'Il codice SAVEMAX funziona su tutti i semi Fast Buds?',
            answer: 'Sì! Il codice promo SAVEMAX offre il 20% di sconto sull\'intero catalogo Fast Buds, incluse le loro varietà autofiorenti più popolari, nuovi lanci e genetica in edizione limitata. Non ci sono restrizioni.'
          },
          {
            question: 'Posso usare il coupon SAVEMAX più volte?',
            answer: 'Assolutamente! A differenza di molti codici promozionali monouso, il codice sconto SAVEMAX di Fast Buds può essere utilizzato su più ordini. Non c\'è limite a quante volte puoi risparmiare il 20%.'
          },
          {
            question: 'Questo codice promo Fast Buds ha una data di scadenza?',
            answer: 'No, il codice SAVEMAX non scade mai. Questo sconto permanente del 20% è disponibile per tutti i clienti Fast Buds, perfetto per pianificare le tue coltivazioni durante tutto l\'anno.'
          },
          {
            question: 'C\'è un ordine minimo per usare il codice SAVEMAX?',
            answer: 'Nessun acquisto minimo è richiesto. Che tu stia comprando un singolo pacchetto da 3 semi o facendo un grande ordine, il codice SAVEMAX ti farà risparmiare il 20% su ordini di qualsiasi dimensione.'
          }
        ]
      },
    },
  },
  {
    id: '2',
    code: 'SAVE4U',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    usageCount: 17,
    neverExpires: true,
    image: '/images/coupons/save4u.png',
    content: {
      en: {
        title: 'Personal Discount Just For You - 15% Off',
        description: 'This exclusive deal was made with you in mind! Enjoy 15% off on your favorite Fast Buds strains. Because you deserve it.',
        slug: 'en/coupon/personal-discount-just-for-you-15-off',
        longDescription: 'The Fast Buds SAVE4U discount code is your personal invitation to save 15% on premium autoflowering cannabis seeds. This exclusive Fast Buds promo code was designed specifically for dedicated growers who appreciate quality genetics at great prices. Whether you\'re a seasoned cultivator or just starting your growing journey, the SAVE4U coupon code delivers exceptional value on championship-winning strains. Fast Buds has built a reputation as one of the world\'s leading breeders of autoflowering cannabis genetics, with multiple Cannabis Cup victories and millions of satisfied customers globally. This Fast Buds discount applies to their entire range of premium seeds, including bestsellers like Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto, and Gelato Auto. The 15% savings with this Fast Buds coupon code means more budget for grow lights, nutrients, or simply expanding your seed collection. This is your personal discount – a reward for being part of the Fast Buds growing community.',
        features: [
          'Save 15% on all Fast Buds premium autoflowering seeds with your personal code',
          'Access to championship-winning genetics including Cannabis Cup award winners',
          'Unlimited usage - apply this Fast Buds discount code to every order',
          'No minimum purchase required - save on any order size',
          'Never expires - this Fast Buds promo code remains active indefinitely',
          'Compatible with favorite strains: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Personal discount designed for dedicated Fast Buds growers'
        ],
        faq: [
          {
            question: 'How do I apply the SAVE4U Fast Buds coupon code at checkout?',
            answer: 'Simply click the "Copy Code" button above to copy SAVE4U to your clipboard. Then visit the Fast Buds official store, add your favorite autoflowering seeds to cart, and paste the code in the promo code field during checkout. Your 15% discount will be applied immediately to your order total.'
          },
          {
            question: 'Does the SAVE4U discount code work on all Fast Buds seeds?',
            answer: 'Yes! The SAVE4U promo code provides 15% off on the entire Fast Buds catalog, including their most popular autoflowering strains, new releases, and limited edition genetics. There are no restrictions on which seeds you can purchase with this coupon.'
          },
          {
            question: 'Can I use the SAVE4U coupon multiple times?',
            answer: 'Absolutely! Unlike many promotional codes that are single-use only, the SAVE4U Fast Buds discount code can be used on multiple orders. There\'s no limit to how many times you can save 15% on your Fast Buds seed purchases.'
          },
          {
            question: 'Does this Fast Buds promo code have an expiration date?',
            answer: 'No, the SAVE4U coupon code never expires. This permanent 15% discount is available for all Fast Buds customers, making it perfect for planning your grows throughout the year without worrying about missing a limited-time deal.'
          },
          {
            question: 'Is there a minimum order requirement to use the SAVE4U code?',
            answer: 'No minimum purchase is required. Whether you\'re buying a single 3-pack of seeds or stocking up with multiple strains, the SAVE4U discount code will save you 15% on orders of any size at the Fast Buds store.'
          }
        ]
      },
      de: {
        title: 'Persönlicher Rabatt Nur für Sie - 15% Rabatt',
        description: 'Dieses exklusive Angebot wurde speziell für Sie gemacht! Genießen Sie 15% Rabatt auf Ihre Lieblings-Fast Buds Sorten. Weil Sie es verdienen.',
        slug: 'de/coupon/personlicher-rabatt-nur-fur-sie-15-rabatt',
        longDescription: 'Der Fast Buds SAVE4U Rabattcode ist Ihre persönliche Einladung, 15% auf Premium autoflowering Cannabis-Samen zu sparen. Dieser exklusive Fast Buds Gutschein wurde speziell für engagierte Züchter entwickelt, die Qualitätsgenetik zu tollen Preisen schätzen. Ob erfahrener Züchter oder Anfänger – der SAVE4U Coupon bietet außergewöhnlichen Wert auf preisgekrönte Sorten. Fast Buds hat sich als einer der weltweit führenden Züchter von autoflowering Cannabis-Genetik etabliert, mit mehreren Cannabis Cup Siegen. Dieser Fast Buds Rabatt gilt für die gesamte Palette an Premium-Samen, einschließlich Bestsellern wie Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto und Gelato Auto. Die 15% Ersparnis bedeuten mehr Budget für Growlampen, Nährstoffe oder einfach mehr Samen.',
        features: [
          '15% Rabatt auf alle Fast Buds Premium autoflowering Samen mit Ihrem persönlichen Code',
          'Zugang zu preisgekrönter Genetik einschließlich Cannabis Cup Gewinnern',
          'Unbegrenzte Nutzung - wenden Sie diesen Fast Buds Rabatt bei jeder Bestellung an',
          'Kein Mindestbestellwert erforderlich - sparen Sie bei jeder Bestellgröße',
          'Läuft nie ab - dieser Fast Buds Gutschein bleibt dauerhaft aktiv',
          'Kompatibel mit Lieblingssorten: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Persönlicher Rabatt für engagierte Fast Buds Züchter'
        ],
        faq: [
          {
            question: 'Wie wende ich den SAVE4U Fast Buds Gutscheincode an der Kasse an?',
            answer: 'Klicken Sie einfach auf "Code kopieren", um SAVE4U in Ihre Zwischenablage zu kopieren. Besuchen Sie dann den offiziellen Fast Buds Shop, fügen Sie Ihre Lieblingssamen zum Warenkorb hinzu und fügen Sie den Code im Gutscheinfeld beim Checkout ein. Ihr 15% Rabatt wird sofort angewendet.'
          },
          {
            question: 'Funktioniert der SAVE4U Rabattcode bei allen Fast Buds Samen?',
            answer: 'Ja! Der SAVE4U Gutschein bietet 15% Rabatt auf den gesamten Fast Buds Katalog, einschließlich der beliebtesten autoflowering Sorten, neuen Releases und limitierten Editionen. Es gibt keine Einschränkungen.'
          },
          {
            question: 'Kann ich den SAVE4U Gutschein mehrmals verwenden?',
            answer: 'Absolut! Anders als viele Aktionscodes, die nur einmal verwendet werden können, kann der SAVE4U Fast Buds Rabattcode bei mehreren Bestellungen genutzt werden. Es gibt keine Begrenzung, wie oft Sie 15% sparen können.'
          },
          {
            question: 'Hat dieser Fast Buds Gutschein ein Ablaufdatum?',
            answer: 'Nein, der SAVE4U Gutscheincode läuft nie ab. Dieser permanente 15% Rabatt ist für alle Fast Buds Kunden verfügbar, ideal für die Planung Ihrer Anbaus das ganze Jahr über.'
          },
          {
            question: 'Gibt es einen Mindestbestellwert für den SAVE4U Code?',
            answer: 'Kein Mindestbestellwert erforderlich. Ob Sie ein einzelnes 3er-Pack kaufen oder mehrere Sorten bestellen, der SAVE4U Rabattcode spart Ihnen 15% bei Bestellungen jeder Größe.'
          }
        ]
      },
      es: {
        title: 'Descuento Personal Solo Para Ti - 15% de Descuento',
        description: '¡Esta oferta exclusiva fue hecha pensando en ti! Disfruta del 15% de descuento en tus variedades favoritas de Fast Buds. Porque te lo mereces.',
        slug: 'es/cupon/descuento-personal-solo-para-ti-15-descuento',
        longDescription: 'El código de descuento SAVE4U de Fast Buds es tu invitación personal para ahorrar 15% en semillas de cannabis autoflorecientes premium. Este código promocional exclusivo de Fast Buds fue diseñado específicamente para cultivadores dedicados que aprecian la genética de calidad a excelentes precios. Ya seas un cultivador experimentado o estés comenzando tu viaje de cultivo, el cupón SAVE4U ofrece valor excepcional en variedades ganadoras de campeonatos. Fast Buds ha construido una reputación como uno de los criadores líderes mundiales de genética autofloreciente, con múltiples victorias en Cannabis Cup. Este descuento de Fast Buds se aplica a toda su gama de semillas premium, incluidos bestsellers como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto y Gelato Auto. El ahorro del 15% significa más presupuesto para luces de cultivo, nutrientes o simplemente expandir tu colección de semillas.',
        features: [
          'Ahorra 15% en todas las semillas autoflorecientes premium de Fast Buds con tu código personal',
          'Acceso a genética ganadora de campeonatos incluyendo premios Cannabis Cup',
          'Uso ilimitado - aplica este código de descuento Fast Buds en cada pedido',
          'Sin compra mínima requerida - ahorra en cualquier tamaño de pedido',
          'Nunca expira - este código promo de Fast Buds permanece activo indefinidamente',
          'Compatible con variedades favoritas: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Descuento personal diseñado para cultivadores dedicados de Fast Buds'
        ],
        faq: [
          {
            question: '¿Cómo aplico el cupón SAVE4U de Fast Buds al finalizar la compra?',
            answer: 'Simplemente haz clic en el botón "Copiar Código" para copiar SAVE4U al portapapeles. Luego visita la tienda oficial de Fast Buds, añade tus semillas favoritas al carrito y pega el código en el campo de código promocional durante el checkout. Tu descuento del 15% se aplicará inmediatamente.'
          },
          {
            question: '¿El código SAVE4U funciona en todas las semillas Fast Buds?',
            answer: '¡Sí! El código promo SAVE4U proporciona 15% de descuento en todo el catálogo de Fast Buds, incluyendo sus variedades autoflorecientes más populares, nuevos lanzamientos y genética de edición limitada. No hay restricciones.'
          },
          {
            question: '¿Puedo usar el cupón SAVE4U múltiples veces?',
            answer: '¡Absolutamente! A diferencia de muchos códigos promocionales de un solo uso, el código de descuento SAVE4U de Fast Buds puede usarse en múltiples pedidos. No hay límite para cuántas veces puedes ahorrar 15%.'
          },
          {
            question: '¿Este código promo de Fast Buds tiene fecha de expiración?',
            answer: 'No, el código SAVE4U nunca expira. Este descuento permanente del 15% está disponible para todos los clientes de Fast Buds, perfecto para planificar tus cultivos durante todo el año.'
          },
          {
            question: '¿Hay un pedido mínimo para usar el código SAVE4U?',
            answer: 'No se requiere compra mínima. Ya sea que compres un solo paquete de 3 semillas o hagas un pedido grande, el código SAVE4U te ahorrará 15% en pedidos de cualquier tamaño.'
          }
        ]
      },
      pt: {
        title: 'Desconto Pessoal Só Para Você - 15% de Desconto',
        description: 'Esta oferta exclusiva foi feita pensando em você! Aproveite 15% de desconto nas suas variedades favoritas da Fast Buds. Porque você merece.',
        slug: 'pt/cupom/desconto-pessoal-so-para-voce-15-desconto',
        longDescription: 'O código de desconto SAVE4U da Fast Buds é seu convite pessoal para economizar 15% em sementes de cannabis autoflorescentes premium. Este código promocional exclusivo da Fast Buds foi projetado especificamente para cultivadores dedicados que apreciam genética de qualidade a ótimos preços. Seja você um cultivador experiente ou apenas começando sua jornada de cultivo, o cupom SAVE4U oferece valor excepcional em variedades vencedoras de campeonatos. A Fast Buds construiu uma reputação como um dos principais criadores mundiais de genética autoflorescente, com múltiplas vitórias na Cannabis Cup. Este desconto da Fast Buds se aplica a toda sua gama de sementes premium, incluindo bestsellers como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. A economia de 15% significa mais orçamento para luzes de cultivo, nutrientes ou simplesmente expandir sua coleção de sementes.',
        features: [
          'Economize 15% em todas as sementes autoflorescentes premium da Fast Buds com seu código pessoal',
          'Acesso a genética vencedora de campeonatos incluindo prêmios Cannabis Cup',
          'Uso ilimitado - aplique este código de desconto Fast Buds em cada pedido',
          'Sem compra mínima necessária - economize em qualquer tamanho de pedido',
          'Nunca expira - este código promo da Fast Buds permanece ativo indefinidamente',
          'Compatível com variedades favoritas: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Desconto pessoal projetado para cultivadores dedicados da Fast Buds'
        ],
        faq: [
          {
            question: 'Como aplico o cupom SAVE4U da Fast Buds no checkout?',
            answer: 'Simplesmente clique no botão "Copiar Código" para copiar SAVE4U para a área de transferência. Em seguida, visite a loja oficial da Fast Buds, adicione suas sementes favoritas ao carrinho e cole o código no campo de código promocional durante o checkout. Seu desconto de 15% será aplicado imediatamente.'
          },
          {
            question: 'O código SAVE4U funciona em todas as sementes Fast Buds?',
            answer: 'Sim! O código promo SAVE4U oferece 15% de desconto em todo o catálogo da Fast Buds, incluindo suas variedades autoflorescentes mais populares, novos lançamentos e genética de edição limitada. Não há restrições.'
          },
          {
            question: 'Posso usar o cupom SAVE4U múltiplas vezes?',
            answer: 'Absolutamente! Ao contrário de muitos códigos promocionais de uso único, o código de desconto SAVE4U da Fast Buds pode ser usado em múltiplos pedidos. Não há limite para quantas vezes você pode economizar 15%.'
          },
          {
            question: 'Este código promo da Fast Buds tem data de validade?',
            answer: 'Não, o código SAVE4U nunca expira. Este desconto permanente de 15% está disponível para todos os clientes da Fast Buds, perfeito para planejar seus cultivos durante todo o ano.'
          },
          {
            question: 'Há um pedido mínimo para usar o código SAVE4U?',
            answer: 'Nenhuma compra mínima é necessária. Seja você comprando um único pacote de 3 sementes ou fazendo um pedido grande, o código SAVE4U economizará 15% em pedidos de qualquer tamanho.'
          }
        ]
      },
      fr: {
        title: 'Réduction Personnelle Rien que Pour Vous - 15% de Réduction',
        description: 'Cette offre exclusive a été créée en pensant à vous! Profitez de 15% de réduction sur vos variétés Fast Buds préférées. Parce que vous le méritez.',
        slug: 'fr/coupon/reduction-personnelle-rien-que-pour-vous-15-reduction',
        longDescription: 'Le code promo SAVE4U de Fast Buds est votre invitation personnelle à économiser 15% sur les graines de cannabis autofloraison premium. Ce code promotionnel exclusif Fast Buds a été conçu spécifiquement pour les cultivateurs dévoués qui apprécient la génétique de qualité à d\'excellents prix. Que vous soyez un cultivateur expérimenté ou que vous commenciez votre parcours de culture, le coupon SAVE4U offre une valeur exceptionnelle sur des variétés primées. Fast Buds a construit une réputation en tant que l\'un des principaux sélectionneurs mondiaux de génétique autofloraison, avec de multiples victoires à la Cannabis Cup. Cette réduction Fast Buds s\'applique à toute leur gamme de graines premium, y compris les bestsellers comme Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto et Gelato Auto. L\'économie de 15% signifie plus de budget pour les lampes de culture, les nutriments ou simplement agrandir votre collection de graines.',
        features: [
          'Économisez 15% sur toutes les graines autofloraison premium Fast Buds avec votre code personnel',
          'Accès à la génétique primée incluant les gagnants de Cannabis Cup',
          'Utilisation illimitée - appliquez ce code promo Fast Buds à chaque commande',
          'Aucun achat minimum requis - économisez sur toute taille de commande',
          'N\'expire jamais - ce code promo Fast Buds reste actif indéfiniment',
          'Compatible avec les variétés favorites: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Réduction personnelle conçue pour les cultivateurs dévoués Fast Buds'
        ],
        faq: [
          {
            question: 'Comment appliquer le coupon SAVE4U de Fast Buds lors du paiement?',
            answer: 'Cliquez simplement sur le bouton "Copier le Code" pour copier SAVE4U dans votre presse-papiers. Ensuite, visitez la boutique officielle Fast Buds, ajoutez vos graines préférées au panier et collez le code dans le champ code promo lors du paiement. Votre réduction de 15% sera appliquée immédiatement.'
          },
          {
            question: 'Le code SAVE4U fonctionne-t-il sur toutes les graines Fast Buds?',
            answer: 'Oui! Le code promo SAVE4U offre 15% de réduction sur l\'ensemble du catalogue Fast Buds, y compris leurs variétés autofloraison les plus populaires, les nouvelles sorties et la génétique en édition limitée. Il n\'y a aucune restriction.'
          },
          {
            question: 'Puis-je utiliser le coupon SAVE4U plusieurs fois?',
            answer: 'Absolument! Contrairement à de nombreux codes promotionnels à usage unique, le code promo SAVE4U de Fast Buds peut être utilisé sur plusieurs commandes. Il n\'y a aucune limite au nombre de fois où vous pouvez économiser 15%.'
          },
          {
            question: 'Ce code promo Fast Buds a-t-il une date d\'expiration?',
            answer: 'Non, le code SAVE4U n\'expire jamais. Cette réduction permanente de 15% est disponible pour tous les clients Fast Buds, parfaite pour planifier vos cultures tout au long de l\'année.'
          },
          {
            question: 'Y a-t-il une commande minimum pour utiliser le code SAVE4U?',
            answer: 'Aucun achat minimum n\'est requis. Que vous achetiez un seul pack de 3 graines ou que vous fassiez une grosse commande, le code SAVE4U vous fera économiser 15% sur les commandes de toute taille.'
          }
        ]
      },
      it: {
        title: 'Sconto Personale Solo Per Te - 15% di Sconto',
        description: 'Questa offerta esclusiva è stata pensata per te! Goditi il 15% di sconto sulle tue varietà Fast Buds preferite. Perché te lo meriti.',
        slug: 'it/coupon/sconto-personale-solo-per-te-15-sconto',
        longDescription: 'Il codice sconto SAVE4U di Fast Buds è il tuo invito personale per risparmiare il 15% sui semi di cannabis autofiorenti premium. Questo codice promozionale esclusivo Fast Buds è stato progettato specificamente per coltivatori dedicati che apprezzano la genetica di qualità a ottimi prezzi. Che tu sia un coltivatore esperto o stia iniziando il tuo percorso di coltivazione, il coupon SAVE4U offre valore eccezionale su varietà vincitrici di campionati. Fast Buds ha costruito una reputazione come uno dei principali allevatori mondiali di genetica autofiorente, con multiple vittorie alla Cannabis Cup. Questo sconto Fast Buds si applica a tutta la loro gamma di semi premium, inclusi bestseller come Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. Il risparmio del 15% significa più budget per luci di coltivazione, nutrienti o semplicemente espandere la tua collezione di semi.',
        features: [
          'Risparmia il 15% su tutti i semi autofiorenti premium Fast Buds con il tuo codice personale',
          'Accesso a genetica vincitrice di campionati inclusi i vincitori della Cannabis Cup',
          'Utilizzo illimitato - applica questo codice sconto Fast Buds ad ogni ordine',
          'Nessun acquisto minimo richiesto - risparmia su qualsiasi dimensione ordine',
          'Non scade mai - questo codice promo Fast Buds rimane attivo indefinitamente',
          'Compatibile con varietà preferite: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Sconto personale progettato per coltivatori dedicati Fast Buds'
        ],
        faq: [
          {
            question: 'Come applico il coupon SAVE4U di Fast Buds al checkout?',
            answer: 'Fai semplicemente clic sul pulsante "Copia Codice" per copiare SAVE4U negli appunti. Quindi visita lo store ufficiale Fast Buds, aggiungi i tuoi semi preferiti al carrello e incolla il codice nel campo codice promo durante il checkout. Il tuo sconto del 15% verrà applicato immediatamente.'
          },
          {
            question: 'Il codice SAVE4U funziona su tutti i semi Fast Buds?',
            answer: 'Sì! Il codice promo SAVE4U offre il 15% di sconto sull\'intero catalogo Fast Buds, incluse le loro varietà autofiorenti più popolari, nuovi lanci e genetica in edizione limitata. Non ci sono restrizioni.'
          },
          {
            question: 'Posso usare il coupon SAVE4U più volte?',
            answer: 'Assolutamente! A differenza di molti codici promozionali monouso, il codice sconto SAVE4U di Fast Buds può essere utilizzato su più ordini. Non c\'è limite a quante volte puoi risparmiare il 15%.'
          },
          {
            question: 'Questo codice promo Fast Buds ha una data di scadenza?',
            answer: 'No, il codice SAVE4U non scade mai. Questo sconto permanente del 15% è disponibile per tutti i clienti Fast Buds, perfetto per pianificare le tue coltivazioni durante tutto l\'anno.'
          },
          {
            question: 'C\'è un ordine minimo per usare il codice SAVE4U?',
            answer: 'Nessun acquisto minimo è richiesto. Che tu stia comprando un singolo pacchetto da 3 semi o facendo un grande ordine, il codice SAVE4U ti farà risparmiare il 15% su ordini di qualsiasi dimensione.'
          }
        ]
      },
    },
  },
  {
    id: '3',
    code: 'STONER',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    usageCount: 14,
    neverExpires: true,
    image: '/images/coupons/stoner.png',
    content: {
      en: {
        title: 'Stoner Special - 15% Off Premium Strains',
        description: 'For true cannabis enthusiasts! Get 15% off the finest Fast Buds genetics. Elevate your garden with legendary strains.',
        slug: 'en/coupon/stoner-special-15-off-premium-strains',
        longDescription: 'The Fast Buds STONER discount code is your exclusive invitation to save 15% on premium autoflowering cannabis seeds designed for true cannabis enthusiasts. This special Fast Buds promo code was created specifically for dedicated growers who appreciate quality genetics at excellent prices. Whether you\'re a seasoned cultivator or starting your growing journey, the STONER coupon delivers exceptional value on championship-winning strains. Fast Buds has built a reputation as one of the world\'s leading autoflowering genetics breeders, with multiple Cannabis Cup victories. This Fast Buds discount applies to their entire range of premium seeds, including bestsellers like Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto, and Gelato Auto. The 15% savings means more budget for grow lights, nutrients, or simply expanding your seed collection.',
        features: [
          'Save 15% on all Fast Buds premium autoflowering seeds with your personal code',
          'Access to championship-winning genetics including Cannabis Cup winners',
          'Unlimited usage - apply this Fast Buds discount code to every order',
          'No minimum purchase required - save on any order size',
          'Never expires - this Fast Buds promo code remains active indefinitely',
          'Compatible with favorite strains: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Personal discount designed for dedicated Fast Buds growers'
        ],
        faq: [
          {
            question: 'How do I apply the STONER Fast Buds coupon at checkout?',
            answer: 'Simply click the "Copy Code" button to copy STONER to your clipboard. Then visit the official Fast Buds store, add your favorite seeds to cart, and paste the code in the promo code field during checkout. Your 15% discount will be applied immediately.'
          },
          {
            question: 'Does the STONER code work on all Fast Buds seeds?',
            answer: 'Yes! The STONER promo code offers 15% off across the entire Fast Buds catalog, including their most popular autoflowering strains, new releases, and limited edition genetics. There are no restrictions.'
          },
          {
            question: 'Can I use the STONER coupon multiple times?',
            answer: 'Absolutely! Unlike many single-use promotional codes, the STONER Fast Buds discount code can be used on multiple orders. There\'s no limit to how many times you can save 15%.'
          },
          {
            question: 'Does this Fast Buds promo code have an expiration date?',
            answer: 'No, the STONER code never expires. This permanent 15% discount is available for all Fast Buds customers, perfect for planning your grows throughout the year.'
          },
          {
            question: 'Is there a minimum order to use the STONER code?',
            answer: 'No minimum purchase is required. Whether you\'re buying a single 3-pack of seeds or placing a large order, the STONER code will save you 15% on orders of any size.'
          }
        ]
      },
      de: {
        title: 'Stoner-Special - 15% Rabatt auf Premium-Sorten',
        description: 'Für echte Cannabis-Enthusiasten! Erhalten Sie 15% Rabatt auf die besten Fast Buds Genetiken. Verbessern Sie Ihren Garten mit legendären Sorten.',
        slug: 'de/coupon/stoner-special-15-rabatt-auf-premium-sorten',
        longDescription: 'Der Fast Buds STONER Rabattcode ist Ihre exklusive Einladung, 15% auf premium autoflowering Cannabis-Samen zu sparen, die für wahre Cannabis-Enthusiasten entwickelt wurden. Dieser spezielle Fast Buds Gutschein wurde speziell für engagierte Züchter kreiert, die qualitativ hochwertige Genetik zu hervorragenden Preisen schätzen. Egal ob erfahrener Züchter oder Anfänger auf Ihrer Anbau-Reise, der STONER Coupon liefert außergewöhnlichen Wert bei preisgekrönten Sorten. Fast Buds hat sich einen Ruf als einer der weltweit führenden Züchter von autoflowering Genetik erarbeitet, mit mehreren Cannabis Cup Siegen. Dieser Fast Buds Rabatt gilt für deren gesamtes Sortiment an Premium-Samen, einschließlich Bestsellern wie Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto und Gelato Auto. Die 15% Ersparnis bedeuten mehr Budget für Anbaulampen, Nährstoffe oder einfach zur Erweiterung Ihrer Samensammlung.',
        features: [
          'Sparen Sie 15% auf alle Fast Buds Premium autoflowering Samen mit Ihrem persönlichen Code',
          'Zugang zu preisgekrönter Genetik einschließlich Cannabis Cup Gewinnern',
          'Unbegrenzte Nutzung - wenden Sie diesen Fast Buds Rabattcode bei jeder Bestellung an',
          'Kein Mindestbestellwert erforderlich - sparen Sie bei jeder Bestellgröße',
          'Läuft nie ab - dieser Fast Buds Gutschein bleibt auf unbestimmte Zeit aktiv',
          'Kompatibel mit Lieblingssorten: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Persönlicher Rabatt für engagierte Fast Buds Züchter'
        ],
        faq: [
          {
            question: 'Wie wende ich den STONER Fast Buds Gutschein beim Checkout an?',
            answer: 'Klicken Sie einfach auf "Code kopieren", um STONER in Ihre Zwischenablage zu kopieren. Besuchen Sie dann den offiziellen Fast Buds Shop, fügen Sie Ihre Lieblingssamen zum Warenkorb hinzu und fügen Sie den Code im Gutscheinfeld beim Checkout ein. Ihr 15% Rabatt wird sofort angewendet.'
          },
          {
            question: 'Funktioniert der STONER Code bei allen Fast Buds Samen?',
            answer: 'Ja! Der STONER Gutschein bietet 15% Rabatt auf den gesamten Fast Buds Katalog, einschließlich ihrer beliebtesten autoflowering Sorten, neuen Veröffentlichungen und limitierten Genetik. Es gibt keine Einschränkungen.'
          },
          {
            question: 'Kann ich den STONER Coupon mehrmals verwenden?',
            answer: 'Absolut! Im Gegensatz zu vielen einmaligen Gutscheincodes kann der STONER Fast Buds Rabattcode bei mehreren Bestellungen verwendet werden. Es gibt keine Begrenzung, wie oft Sie 15% sparen können.'
          },
          {
            question: 'Hat dieser Fast Buds Gutscheincode ein Ablaufdatum?',
            answer: 'Nein, der STONER Code läuft nie ab. Dieser dauerhafte 15% Rabatt ist für alle Fast Buds Kunden verfügbar, perfekt um Ihre Anbauperioden das ganze Jahr über zu planen.'
          },
          {
            question: 'Gibt es eine Mindestbestellung für die Nutzung des STONER Codes?',
            answer: 'Kein Mindestbestellwert erforderlich. Ob Sie ein einzelnes 3er-Pack Samen kaufen oder eine große Bestellung aufgeben, der STONER Code spart Ihnen 15% bei Bestellungen jeder Größe.'
          }
        ]
      },
      es: {
        title: 'Especial Stoner - 15% en Variedades Premium',
        description: '¡Para verdaderos entusiastas del cannabis! Obtén 15% de descuento en la mejor genética de Fast Buds. Eleva tu jardín con variedades legendarias.',
        slug: 'es/cupon/especial-stoner-15-en-variedades-premium',
        longDescription: 'El código de descuento STONER de Fast Buds es tu invitación exclusiva para ahorrar 15% en semillas de cannabis autoflorescentes premium diseñadas para verdaderos entusiastas del cannabis. Este código promocional especial de Fast Buds fue creado específicamente para cultivadores dedicados que aprecian genética de calidad a excelentes precios. Ya seas un cultivador experimentado o estés comenzando tu viaje de cultivo, el cupón STONER ofrece valor excepcional en variedades ganadoras de campeonatos. Fast Buds ha construido una reputación como uno de los principales criadores mundiales de genética autoflorescente, con múltiples victorias en Cannabis Cup. Este descuento de Fast Buds se aplica a toda su gama de semillas premium, incluyendo bestsellers como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto y Gelato Auto. El ahorro del 15% significa más presupuesto para luces de cultivo, nutrientes o simplemente expandir tu colección de semillas.',
        features: [
          'Ahorra 15% en todas las semillas autoflorescentes premium de Fast Buds con tu código personal',
          'Acceso a genética ganadora de campeonatos incluyendo ganadores de Cannabis Cup',
          'Uso ilimitado - aplica este código de descuento Fast Buds en cada pedido',
          'Sin compra mínima requerida - ahorra en cualquier tamaño de pedido',
          'Nunca caduca - este código promo de Fast Buds permanece activo indefinidamente',
          'Compatible con variedades favoritas: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Descuento personal diseñado para cultivadores dedicados de Fast Buds'
        ],
        faq: [
          {
            question: '¿Cómo aplico el cupón STONER de Fast Buds en el checkout?',
            answer: 'Simplemente haz clic en el botón "Copiar Código" para copiar STONER a tu portapapeles. Luego visita la tienda oficial de Fast Buds, añade tus semillas favoritas al carrito y pega el código en el campo de código promocional durante el checkout. Tu descuento del 15% se aplicará inmediatamente.'
          },
          {
            question: '¿El código STONER funciona en todas las semillas de Fast Buds?',
            answer: '¡Sí! El código promo STONER ofrece 15% de descuento en todo el catálogo de Fast Buds, incluyendo sus variedades autoflorescentes más populares, nuevos lanzamientos y genética de edición limitada. No hay restricciones.'
          },
          {
            question: '¿Puedo usar el cupón STONER múltiples veces?',
            answer: '¡Absolutamente! A diferencia de muchos códigos promocionales de un solo uso, el código de descuento STONER de Fast Buds puede usarse en múltiples pedidos. No hay límite de cuántas veces puedes ahorrar 15%.'
          },
          {
            question: '¿Este código promo de Fast Buds tiene fecha de vencimiento?',
            answer: 'No, el código STONER nunca caduca. Este descuento permanente del 15% está disponible para todos los clientes de Fast Buds, perfecto para planificar tus cultivos durante todo el año.'
          },
          {
            question: '¿Hay un pedido mínimo para usar el código STONER?',
            answer: 'No se requiere compra mínima. Ya sea que compres un solo paquete de 3 semillas o hagas un pedido grande, el código STONER te ahorrará 15% en pedidos de cualquier tamaño.'
          }
        ]
      },
      pt: {
        title: 'Especial Stoner - 15% em Variedades Premium',
        description: 'Para verdadeiros entusiastas da cannabis! Ganhe 15% de desconto na melhor genética da Fast Buds. Eleve seu jardim com variedades lendárias.',
        slug: 'pt/cupom/especial-stoner-15-em-variedades-premium',
        longDescription: 'O código de desconto STONER da Fast Buds é seu convite exclusivo para economizar 15% em sementes de cannabis autoflorescentes premium projetadas para verdadeiros entusiastas da cannabis. Este código promocional especial da Fast Buds foi criado especificamente para cultivadores dedicados que apreciam genética de qualidade a excelentes preços. Seja você um cultivador experiente ou começando sua jornada de cultivo, o cupom STONER oferece valor excepcional em variedades vencedoras de campeonatos. A Fast Buds construiu uma reputação como um dos principais criadores mundiais de genética autoflorescente, com múltiplas vitórias na Cannabis Cup. Este desconto da Fast Buds se aplica a toda sua gama de sementes premium, incluindo bestsellers como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. A economia de 15% significa mais orçamento para luzes de cultivo, nutrientes ou simplesmente expandir sua coleção de sementes.',
        features: [
          'Economize 15% em todas as sementes autoflorescentes premium da Fast Buds com seu código pessoal',
          'Acesso a genética vencedora de campeonatos incluindo vencedores da Cannabis Cup',
          'Uso ilimitado - aplique este código de desconto Fast Buds em cada pedido',
          'Sem compra mínima necessária - economize em qualquer tamanho de pedido',
          'Nunca expira - este código promo da Fast Buds permanece ativo indefinidamente',
          'Compatível com variedades favoritas: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Desconto pessoal projetado para cultivadores dedicados da Fast Buds'
        ],
        faq: [
          {
            question: 'Como aplico o cupom STONER da Fast Buds no checkout?',
            answer: 'Simplesmente clique no botão "Copiar Código" para copiar STONER para a área de transferência. Em seguida, visite a loja oficial da Fast Buds, adicione suas sementes favoritas ao carrinho e cole o código no campo de código promocional durante o checkout. Seu desconto de 15% será aplicado imediatamente.'
          },
          {
            question: 'O código STONER funciona em todas as sementes Fast Buds?',
            answer: 'Sim! O código promo STONER oferece 15% de desconto em todo o catálogo da Fast Buds, incluindo suas variedades autoflorescentes mais populares, novos lançamentos e genética de edição limitada. Não há restrições.'
          },
          {
            question: 'Posso usar o cupom STONER múltiplas vezes?',
            answer: 'Absolutamente! Ao contrário de muitos códigos promocionais de uso único, o código de desconto STONER da Fast Buds pode ser usado em múltiplos pedidos. Não há limite para quantas vezes você pode economizar 15%.'
          },
          {
            question: 'Este código promo da Fast Buds tem data de validade?',
            answer: 'Não, o código STONER nunca expira. Este desconto permanente de 15% está disponível para todos os clientes da Fast Buds, perfeit para planear seus cultivos durante todo o ano.'
          },
          {
            question: 'Há um pedido mínimo para usar o código STONER?',
            answer: 'Nenhuma compra mínima é necessária. Seja você comprando um único pacote de 3 sementes ou fazendo um pedido grande, o código STONER economizará 15% em pedidos de qualquer tamanho.'
          }
        ]
      },
      fr: {
        title: 'Spécial Stoner - 15% sur les Variétés Premium',
        description: 'Pour les vrais passionnés de cannabis! Obtenez 15% de réduction sur la meilleure génétique Fast Buds. Élevez votre jardin avec des variétés légendaires.',
        slug: 'fr/coupon/special-stoner-15-sur-les-varietes-premium',
        longDescription: 'Le code promo STONER de Fast Buds est votre invitation exclusive à économiser 15% sur les graines de cannabis autofloraison premium conçues pour les vrais passionnés de cannabis. Ce code promotionnel spécial Fast Buds a été créé spécifiquement pour les cultivateurs dévoués qui apprécient la génétique de qualité à d\'excellents prix. Que vous soyez un cultivateur expérimenté ou que vous commenciez votre parcours de culture, le coupon STONER offre une valeur exceptionnelle sur des variétés primées. Fast Buds a construit une réputation en tant que l\'un des principaux sélectionneurs mondiaux de génétique autofloraison, avec de multiples victoires à la Cannabis Cup. Cette réduction Fast Buds s\'applique à toute leur gamme de graines premium, y compris les bestsellers comme Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto et Gelato Auto. L\'économie de 15% signifie plus de budget pour les lampes de culture, les nutriments ou simplement agrandir votre collection de graines.',
        features: [
          'Économisez 15% sur toutes les graines autofloraison premium Fast Buds avec votre code personnel',
          'Accès à la génétique primée incluant les gagnants de Cannabis Cup',
          'Utilisation illimitée - appliquez ce code promo Fast Buds à chaque commande',
          'Aucun achat minimum requis - économisez sur toute taille de commande',
          'N\'expire jamais - ce code promo Fast Buds reste actif indéfiniment',
          'Compatible avec les variétés favorites: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Réduction personnelle conçue pour les cultivateurs dévoués Fast Buds'
        ],
        faq: [
          {
            question: 'Comment appliquer le coupon STONER de Fast Buds lors du paiement?',
            answer: 'Cliquez simplement sur le bouton "Copier le Code" pour copier STONER dans votre presse-papiers. Ensuite, visitez la boutique officielle Fast Buds, ajoutez vos graines préférées au panier et collez le code dans le champ code promo lors du paiement. Votre réduction de 15% sera appliquée immédiatement.'
          },
          {
            question: 'Le code STONER fonctionne-t-il sur toutes les graines Fast Buds?',
            answer: 'Oui! Le code promo STONER offre 15% de réduction sur l\'ensemble du catalogue Fast Buds, y compris leurs variétés autofloraison les plus populaires, les nouvelles sorties et la génétique en édition limitée. Il n\'y a aucune restriction.'
          },
          {
            question: 'Puis-je utiliser le coupon STONER plusieurs fois?',
            answer: 'Absolument! Contrairement à de nombreux codes promotionnels à usage unique, le code promo STONER de Fast Buds peut être utilisé sur plusieurs commandes. Il n\'y a aucune limite au nombre de fois où vous pouvez économiser 15%.'
          },
          {
            question: 'Ce code promo Fast Buds a-t-il une date d\'expiration?',
            answer: 'Non, le code STONER n\'expire jamais. Cette réduction permanente de 15% est disponible pour tous les clients Fast Buds, parfaite pour planifier vos cultures tout au long de l\'année.'
          },
          {
            question: 'Y a-t-il une commande minimum pour utiliser le code STONER?',
            answer: 'Aucun achat minimum n\'est requis. Que vous achetiez un seul pack de 3 graines ou que vous fassiez une grosse commande, le code STONER vous fera économiser 15% sur les commandes de toute taille.'
          }
        ]
      },
      it: {
        title: 'Speciale Stoner - 15% su Varietà Premium',
        description: 'Per veri appassionati di cannabis! Ottieni il 15% di sconto sulla migliore genetica Fast Buds. Eleva il tuo giardino con varietà leggendarie.',
        slug: 'it/coupon/speciale-stoner-15-su-varieta-premium',
        longDescription: 'Il codice sconto STONER di Fast Buds è il tuo invito esclusivo per risparmiare il 15% sui semi di cannabis autofiorenti premium progettati per veri appassionati di cannabis. Questo codice promozionale speciale Fast Buds è stato creato specificamente per coltivatori dedicati che apprezzano la genetica di qualità a ottimi prezzi. Che tu sia un coltivatore esperto o stia iniziando il tuo percorso di coltivazione, il coupon STONER offre valore eccezionale su varietà vincitrici di campionati. Fast Buds ha costruito una reputazione come uno dei principali allevatori mondiali di genetica autofiorente, con multiple vittorie alla Cannabis Cup. Questo sconto Fast Buds si applica a tutta la loro gamma di semi premium, inclusi bestseller come Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. Il risparmio del 15% significa più budget per luci di coltivazione, nutrienti o semplicemente espandere la tua collezione di semi.',
        features: [
          'Risparmia il 15% su tutti i semi autofiorenti premium Fast Buds con il tuo codice personale',
          'Accesso a genetica vincitrice di campionati inclusi i vincitori della Cannabis Cup',
          'Utilizzo illimitato - applica questo codice sconto Fast Buds ad ogni ordine',
          'Nessun acquisto minimo richiesto - risparmia su qualsiasi dimensione ordine',
          'Non scade mai - questo codice promo Fast Buds rimane attivo indefinitamente',
          'Compatibile con varietà preferite: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Sconto personale progettato per coltivatori dedicati Fast Buds'
        ],
        faq: [
          {
            question: 'Come applico il coupon STONER di Fast Buds al checkout?',
            answer: 'Fai semplicemente clic sul pulsante "Copia Codice" per copiare STONER negli appunti. Quindi visita lo store ufficiale Fast Buds, aggiungi i tuoi semi preferiti al carrello e incolla il codice nel campo codice promo durante il checkout. Il tuo sconto del 15% verrà applicato immediatamente.'
          },
          {
            question: 'Il codice STONER funziona su tutti i semi Fast Buds?',
            answer: 'Sì! Il codice promo STONER offre il 15% di sconto sull\'intero catalogo Fast Buds, incluse le loro varietà autofiorenti più popolari, nuovi lanci e genetica in edizione limitata. Non ci sono restrizioni.'
          },
          {
            question: 'Posso usare il coupon STONER più volte?',
            answer: 'Assolutamente! A differenza di molti codici promozionali monouso, il codice sconto STONER di Fast Buds può essere utilizzato su più ordini. Non c\'è limite a quante volte puoi risparmiare il 15%.'
          },
          {
            question: 'Questo codice promo Fast Buds ha una data di scadenza?',
            answer: 'No, il codice STONER non scade mai. Questo sconto permanente del 15% è disponibile per tutti i clienti Fast Buds, perfetto per pianificare le tue coltivazioni durante tutto l\'anno.'
          },
          {
            question: 'C\'è un ordine minimo per usare il codice STONER?',
            answer: 'Nessun acquisto minimo è richiesto. Che tu stia comprando un singolo pacchetto da 3 semi o facendo un grande ordine, il codice STONER ti farà risparmiare il 15% su ordini di qualsiasi dimensione.'
          }
        ]
      },
    },
  },
  {
    id: '4',
    code: 'SLOWDAY',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    usageCount: 19,
    neverExpires: true,
    image: '/images/coupons/chuckle.png',
    content: {
      en: {
        title: 'Slow Day Savings - 15% Off to Relax',
        description: 'Take it easy with 15% off! Perfect for those chill days when you want to slow down and grow something special.',
        slug: 'en/coupon/slow-day-savings-15-off-to-relax',
        longDescription: 'The Fast Buds SLOWDAY discount code is your exclusive invitation to save 15% on premium autoflowering cannabis seeds perfect for relaxed cultivation. This special Fast Buds promo code was created for those who appreciate taking their time and growing at their own pace. Whether you\'re an experienced cultivator or just starting your growing journey, the SLOWDAY coupon delivers exceptional value on championship-winning strains. Fast Buds has built a reputation as one of the world\'s leading autoflowering genetics breeders, with multiple Cannabis Cup victories. This Fast Buds discount applies to their entire range of premium seeds, including bestsellers like Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto, and Gelato Auto. The 15% savings means more budget for grow lights, nutrients, or simply expanding your seed collection.',
        features: [
          'Save 15% on all Fast Buds premium autoflowering seeds with your personal code',
          'Access to championship-winning genetics including Cannabis Cup winners',
          'Unlimited usage - apply this Fast Buds discount code to every order',
          'No minimum purchase required - save on any order size',
          'Never expires - this Fast Buds promo code remains active indefinitely',
          'Compatible with favorite strains: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfect for relaxed, stress-free cultivation at your own pace'
        ],
        faq: [
          {
            question: 'How do I apply the SLOWDAY Fast Buds coupon at checkout?',
            answer: 'Simply click the "Copy Code" button to copy SLOWDAY to your clipboard. Then visit the official Fast Buds store, add your favorite seeds to cart, and paste the code in the promo code field during checkout. Your 15% discount will be applied immediately.'
          },
          {
            question: 'Does the SLOWDAY code work on all Fast Buds seeds?',
            answer: 'Yes! The SLOWDAY promo code offers 15% off across the entire Fast Buds catalog, including their most popular autoflowering strains, new releases, and limited edition genetics. There are no restrictions.'
          },
          {
            question: 'Can I use the SLOWDAY coupon multiple times?',
            answer: 'Absolutely! Unlike many single-use promotional codes, the SLOWDAY Fast Buds discount code can be used on multiple orders. There\'s no limit to how many times you can save 15%.'
          },
          {
            question: 'Does this Fast Buds promo code have an expiration date?',
            answer: 'No, the SLOWDAY code never expires. This permanent 15% discount is available for all Fast Buds customers, perfect for planning your grows throughout the year.'
          },
          {
            question: 'Is there a minimum order to use the SLOWDAY code?',
            answer: 'No minimum purchase is required. Whether you\'re buying a single 3-pack of seeds or placing a large order, the SLOWDAY code will save you 15% on orders of any size.'
          }
        ]
      },
      de: {
        title: 'Entspannungstag-Ersparnis - 15% zum Relaxen',
        description: 'Entspannen Sie sich mit 15% Rabatt! Perfekt für gemütliche Tage, an denen Sie es ruhig angehen und etwas Besonderes anbauen möchten.',
        slug: 'de/coupon/entspannungstag-ersparnis-15-zum-relaxen',
        longDescription: 'Der Fast Buds SLOWDAY Rabattcode ist Ihre exklusive Einladung, 15% auf premium autoflowering Cannabis-Samen zu sparen, perfekt für entspannten Anbau. Dieser spezielle Fast Buds Gutschein wurde für diejenigen kreiert, die es schätzen, sich Zeit zu nehmen und in ihrem eigenen Tempo anzubauen. Egal ob erfahrener Züchter oder Anfänger auf Ihrer Anbau-Reise, der SLOWDAY Coupon liefert außergewöhnlichen Wert bei preisgekrönten Sorten. Fast Buds hat sich einen Ruf als einer der weltweit führenden Züchter von autoflowering Genetik erarbeitet, mit mehreren Cannabis Cup Siegen. Dieser Fast Buds Rabatt gilt für deren gesamtes Sortiment an Premium-Samen, einschließlich Bestsellern wie Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto und Gelato Auto. Die 15% Ersparnis bedeuten mehr Budget für Anbaulampen, Nährstoffe oder einfach zur Erweiterung Ihrer Samensammlung.',
        features: [
          'Sparen Sie 15% auf alle Fast Buds Premium autoflowering Samen mit Ihrem persönlichen Code',
          'Zugang zu preisgekrönter Genetik einschließlich Cannabis Cup Gewinnern',
          'Unbegrenzte Nutzung - wenden Sie diesen Fast Buds Rabattcode bei jeder Bestellung an',
          'Kein Mindestbestellwert erforderlich - sparen Sie bei jeder Bestellgröße',
          'Läuft nie ab - dieser Fast Buds Gutschein bleibt auf unbestimmte Zeit aktiv',
          'Kompatibel mit Lieblingssorten: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfekt für entspannten, stressfreien Anbau in Ihrem eigenen Tempo'
        ],
        faq: [
          {
            question: 'Wie wende ich den SLOWDAY Fast Buds Gutschein beim Checkout an?',
            answer: 'Klicken Sie einfach auf "Code kopieren", um SLOWDAY in Ihre Zwischenablage zu kopieren. Besuchen Sie dann den offiziellen Fast Buds Shop, fügen Sie Ihre Lieblingssamen zum Warenkorb hinzu und fügen Sie den Code im Gutscheinfeld beim Checkout ein. Ihr 15% Rabatt wird sofort angewendet.'
          },
          {
            question: 'Funktioniert der SLOWDAY Code bei allen Fast Buds Samen?',
            answer: 'Ja! Der SLOWDAY Gutschein bietet 15% Rabatt auf den gesamten Fast Buds Katalog, einschließlich ihrer beliebtesten autoflowering Sorten, neuen Veröffentlichungen und limitierten Genetik. Es gibt keine Einschränkungen.'
          },
          {
            question: 'Kann ich den SLOWDAY Coupon mehrmals verwenden?',
            answer: 'Absolut! Im Gegensatz zu vielen einmaligen Gutscheincodes kann der SLOWDAY Fast Buds Rabattcode bei mehreren Bestellungen verwendet werden. Es gibt keine Begrenzung, wie oft Sie 15% sparen können.'
          },
          {
            question: 'Hat dieser Fast Buds Gutscheincode ein Ablaufdatum?',
            answer: 'Nein, der SLOWDAY Code läuft nie ab. Dieser dauerhafte 15% Rabatt ist für alle Fast Buds Kunden verfügbar, perfekt um Ihre Anbauperioden das ganze Jahr über zu planen.'
          },
          {
            question: 'Gibt es eine Mindestbestellung für die Nutzung des SLOWDAY Codes?',
            answer: 'Kein Mindestbestellwert erforderlich. Ob Sie ein einzelnes 3er-Pack Samen kaufen oder eine große Bestellung aufgeben, der SLOWDAY Code spart Ihnen 15% bei Bestellungen jeder Größe.'
          }
        ]
      },
      es: {
        title: 'Ahorro de Día Tranquilo - 15% para Relajarte',
        description: '¡Tómatelo con calma con 15% de descuento! Perfecto para esos días relajados cuando quieres ir despacio y cultivar algo especial.',
        slug: 'es/cupon/ahorro-de-dia-tranquilo-15-para-relajarte',
        longDescription: 'El código de descuento SLOWDAY de Fast Buds es tu invitación exclusiva para ahorrar 15% en semillas de cannabis autoflorescentes premium perfectas para cultivo relajado. Este código promocional especial de Fast Buds fue creado para quienes aprecian tomarse su tiempo y cultivar a su propio ritmo. Ya seas un cultivador experimentado o estés comenzando tu viaje de cultivo, el cupón SLOWDAY ofrece valor excepcional en variedades ganadoras de campeonatos. Fast Buds ha construido una reputación como uno de los principales criadores mundiales de genética autoflorescente, con múltiples victorias en Cannabis Cup. Este descuento de Fast Buds se aplica a toda su gama de semillas premium, incluyendo bestsellers como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto y Gelato Auto. El ahorro del 15% significa más presupuesto para luces de cultivo, nutrientes o simplemente expandir tu colección de semillas.',
        features: [
          'Ahorra 15% en todas las semillas autoflorescentes premium de Fast Buds con tu código personal',
          'Acceso a genética ganadora de campeonatos incluyendo ganadores de Cannabis Cup',
          'Uso ilimitado - aplica este código de descuento Fast Buds en cada pedido',
          'Sin compra mínima requerida - ahorra en cualquier tamaño de pedido',
          'Nunca caduca - este código promo de Fast Buds permanece activo indefinidamente',
          'Compatible con variedades favoritas: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfecto para cultivo relajado y sin estrés a tu propio ritmo'
        ],
        faq: [
          {
            question: '¿Cómo aplico el cupón SLOWDAY de Fast Buds en el checkout?',
            answer: 'Simplemente haz clic en el botón "Copiar Código" para copiar SLOWDAY a tu portapapeles. Luego visita la tienda oficial de Fast Buds, añade tus semillas favoritas al carrito y pega el código en el campo de código promocional durante el checkout. Tu descuento del 15% se aplicará inmediatamente.'
          },
          {
            question: '¿El código SLOWDAY funciona en todas las semillas de Fast Buds?',
            answer: '¡Sí! El código promo SLOWDAY ofrece 15% de descuento en todo el catálogo de Fast Buds, incluyendo sus variedades autoflorescentes más populares, nuevos lanzamientos y genética de edición limitada. No hay restricciones.'
          },
          {
            question: '¿Puedo usar el cupón SLOWDAY múltiples veces?',
            answer: '¡Absolutamente! A diferencia de muchos códigos promocionales de un solo uso, el código de descuento SLOWDAY de Fast Buds puede usarse en múltiples pedidos. No hay límite de cuántas veces puedes ahorrar 15%.'
          },
          {
            question: '¿Este código promo de Fast Buds tiene fecha de vencimiento?',
            answer: 'No, el código SLOWDAY nunca caduca. Este descuento permanente del 15% está disponible para todos los clientes de Fast Buds, perfecto para planificar tus cultivos durante todo el año.'
          },
          {
            question: '¿Hay un pedido mínimo para usar el código SLOWDAY?',
            answer: 'No se requiere compra mínima. Ya sea que compres un solo paquete de 3 semillas o hagas un pedido grande, el código SLOWDAY te ahorrará 15% en pedidos de cualquier tamaño.'
          }
        ]
      },
      pt: {
        title: 'Economia de Dia Tranquilo - 15% para Relaxar',
        description: 'Vá com calma com 15% de desconto! Perfeito para aqueles dias tranquilos quando você quer desacelerar e cultivar algo especial.',
        slug: 'pt/cupom/economia-de-dia-tranquilo-15-para-relaxar',
        longDescription: 'O código de desconto SLOWDAY da Fast Buds é seu convite exclusivo para economizar 15% em sementes de cannabis autoflorescentes premium perfeitas para cultivo relaxado. Este código promocional especial da Fast Buds foi criado para quem aprecia levar seu tempo e cultivar no seu próprio ritmo. Seja você um cultivador experiente ou começando sua jornada de cultivo, o cupom SLOWDAY oferece valor excepcional em variedades vencedoras de campeonatos. A Fast Buds construiu uma reputação como um dos principais criadores mundiais de genética autoflorescente, com múltiplas vitórias na Cannabis Cup. Este desconto da Fast Buds se aplica a toda sua gama de sementes premium, incluindo bestsellers como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. A economia de 15% significa mais orçamento para luzes de cultivo, nutrientes ou simplesmente expandir sua coleção de sementes.',
        features: [
          'Economize 15% em todas as sementes autoflorescentes premium da Fast Buds com seu código pessoal',
          'Acesso a genética vencedora de campeonatos incluindo vencedores da Cannabis Cup',
          'Uso ilimitado - aplique este código de desconto Fast Buds em cada pedido',
          'Sem compra mínima necessária - economize em qualquer tamanho de pedido',
          'Nunca expira - este código promo da Fast Buds permanece ativo indefinidamente',
          'Compatível com variedades favoritas: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfeito para cultivo relaxado e sem estresse no seu próprio ritmo'
        ],
        faq: [
          {
            question: 'Como aplico o cupom SLOWDAY da Fast Buds no checkout?',
            answer: 'Simplesmente clique no botão "Copiar Código" para copiar SLOWDAY para a área de transferência. Em seguida, visite a loja oficial da Fast Buds, adicione suas sementes favoritas ao carrinho e cole o código no campo de código promocional durante o checkout. Seu desconto de 15% será aplicado imediatamente.'
          },
          {
            question: 'O código SLOWDAY funciona em todas as sementes Fast Buds?',
            answer: 'Sim! O código promo SLOWDAY oferece 15% de desconto em todo o catálogo da Fast Buds, incluindo suas variedades autoflorescentes mais populares, novos lançamentos e genética de edição limitada. Não há restrições.'
          },
          {
            question: 'Posso usar o cupom SLOWDAY múltiplas vezes?',
            answer: 'Absolutamente! Ao contrário de muitos códigos promocionais de uso único, o código de desconto SLOWDAY da Fast Buds pode ser usado em múltiplos pedidos. Não há limite para quantas vezes você pode economizar 15%.'
          },
          {
            question: 'Este código promo da Fast Buds tem data de validade?',
            answer: 'Não, o código SLOWDAY nunca expira. Este desconto permanente de 15% está disponível para todos os clientes da Fast Buds, perfeito para planear seus cultivos durante todo o ano.'
          },
          {
            question: 'Há um pedido mínimo para usar o código SLOWDAY?',
            answer: 'Nenhuma compra mínima é necessária. Seja você comprando um único pacote de 3 sementes ou fazendo um pedido grande, o código SLOWDAY economizará 15% em pedidos de qualquer tamanho.'
          }
        ]
      },
      fr: {
        title: 'Économies Journée Tranquille - 15% pour se Détendre',
        description: 'Prenez votre temps avec 15% de réduction! Parfait pour ces journées chill quand vous voulez ralentir et cultiver quelque chose de spécial.',
        slug: 'fr/coupon/economies-journee-tranquille-15-pour-se-detendre',
        longDescription: 'Le code promo SLOWDAY de Fast Buds est votre invitation exclusive à économiser 15% sur les graines de cannabis autofloraison premium parfaites pour une culture relaxée. Ce code promotionnel spécial Fast Buds a été créé pour ceux qui apprécient prendre leur temps et cultiver à leur propre rythme. Que vous soyez un cultivateur expérimenté ou que vous commenciez votre parcours de culture, le coupon SLOWDAY offre une valeur exceptionnelle sur des variétés primées. Fast Buds a construit une réputation en tant que l\'un des principaux sélectionneurs mondiaux de génétique autofloraison, avec de multiples victoires à la Cannabis Cup. Cette réduction Fast Buds s\'applique à toute leur gamme de graines premium, y compris les bestsellers comme Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto et Gelato Auto. L\'économie de 15% signifie plus de budget pour les lampes de culture, les nutriments ou simplement agrandir votre collection de graines.',
        features: [
          'Économisez 15% sur toutes les graines autofloraison premium Fast Buds avec votre code personnel',
          'Accès à la génétique primée incluant les gagnants de Cannabis Cup',
          'Utilisation illimitée - appliquez ce code promo Fast Buds à chaque commande',
          'Aucun achat minimum requis - économisez sur toute taille de commande',
          'N\'expire jamais - ce code promo Fast Buds reste actif indéfiniment',
          'Compatible avec les variétés favorites: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Parfait pour une culture relaxée et sans stress à votre propre rythme'
        ],
        faq: [
          {
            question: 'Comment appliquer le coupon SLOWDAY de Fast Buds lors du paiement?',
            answer: 'Cliquez simplement sur le bouton "Copier le Code" pour copier SLOWDAY dans votre presse-papiers. Ensuite, visitez la boutique officielle Fast Buds, ajoutez vos graines préférées au panier et collez le code dans le champ code promo lors du paiement. Votre réduction de 15% sera appliquée immédiatement.'
          },
          {
            question: 'Le code SLOWDAY fonctionne-t-il sur toutes les graines Fast Buds?',
            answer: 'Oui! Le code promo SLOWDAY offre 15% de réduction sur l\'ensemble du catalogue Fast Buds, y compris leurs variétés autofloraison les plus populaires, les nouvelles sorties et la génétique en édition limitée. Il n\'y a aucune restriction.'
          },
          {
            question: 'Puis-je utiliser le coupon SLOWDAY plusieurs fois?',
            answer: 'Absolument! Contrairement à de nombreux codes promotionnels à usage unique, le code promo SLOWDAY de Fast Buds peut être utilisé sur plusieurs commandes. Il n\'y a aucune limite au nombre de fois où vous pouvez économiser 15%.'
          },
          {
            question: 'Ce code promo Fast Buds a-t-il une date d\'expiration?',
            answer: 'Non, le code SLOWDAY n\'expire jamais. Cette réduction permanente de 15% est disponible pour tous les clients Fast Buds, parfaite pour planifier vos cultures tout au long de l\'année.'
          },
          {
            question: 'Y a-t-il une commande minimum pour utiliser le code SLOWDAY?',
            answer: 'Aucun achat minimum n\'est requis. Que vous achetiez un seul pack de 3 graines ou que vous fassiez une grosse commande, le code SLOWDAY vous fera économiser 15% sur les commandes de toute taille.'
          }
        ]
      },
      it: {
        title: 'Risparmio Giornata Tranquilla - 15% per Rilassarsi',
        description: 'Prendila con calma con il 15% di sconto! Perfetto per quelle giornate rilassanti quando vuoi rallentare e coltivare qualcosa di speciale.',
        slug: 'it/coupon/risparmio-giornata-tranquilla-15-per-rilassarsi',
        longDescription: 'Il codice sconto SLOWDAY di Fast Buds è il tuo invito esclusivo per risparmiare il 15% sui semi di cannabis autofiorenti premium perfetti per coltivazione rilassata. Questo codice promozionale speciale Fast Buds è stato creato per chi apprezza prendersi il proprio tempo e coltivare al proprio ritmo. Che tu sia un coltivatore esperto o stia iniziando il tuo percorso di coltivazione, il coupon SLOWDAY offre valore eccezionale su varietà vincitrici di campionati. Fast Buds ha costruito una reputazione come uno dei principali allevatori mondiali di genetica autofiorente, con multiple vittorie alla Cannabis Cup. Questo sconto Fast Buds si applica a tutta la loro gamma di semi premium, inclusi bestseller come Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. Il risparmio del 15% significa più budget per luci di coltivazione, nutrienti o semplicemente espandere la tua collezione di semi.',
        features: [
          'Risparmia il 15% su tutti i semi autofiorenti premium Fast Buds con il tuo codice personale',
          'Accesso a genetica vincitrice di campionati inclusi i vincitori della Cannabis Cup',
          'Utilizzo illimitato - applica questo codice sconto Fast Buds ad ogni ordine',
          'Nessun acquisto minimo richiesto - risparmia su qualsiasi dimensione ordine',
          'Non scade mai - questo codice promo Fast Buds rimane attivo indefinitamente',
          'Compatibile con varietà preferite: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfetto per coltivazione rilassata e senza stress al tuo proprio ritmo'
        ],
        faq: [
          {
            question: 'Come applico il coupon SLOWDAY di Fast Buds al checkout?',
            answer: 'Fai semplicemente clic sul pulsante "Copia Codice" per copiare SLOWDAY negli appunti. Quindi visita lo store ufficiale Fast Buds, aggiungi i tuoi semi preferiti al carrello e incolla il codice nel campo codice promo durante il checkout. Il tuo sconto del 15% verrà applicato immediatamente.'
          },
          {
            question: 'Il codice SLOWDAY funziona su tutti i semi Fast Buds?',
            answer: 'Sì! Il codice promo SLOWDAY offre il 15% di sconto sull\'intero catalogo Fast Buds, incluse le loro varietà autofiorenti più popolari, nuovi lanci e genetica in edizione limitata. Non ci sono restrizioni.'
          },
          {
            question: 'Posso usare il coupon SLOWDAY più volte?',
            answer: 'Assolutamente! A differenza di molti codici promozionali monouso, il codice sconto SLOWDAY di Fast Buds può essere utilizzato su più ordini. Non c\'è limite a quante volte puoi risparmiare il 15%.'
          },
          {
            question: 'Questo codice promo Fast Buds ha una data di scadenza?',
            answer: 'No, il codice SLOWDAY non scade mai. Questo sconto permanente del 15% è disponibile per tutti i clienti Fast Buds, perfetto per pianificare le tue coltivazioni durante tutto l\'anno.'
          },
          {
            question: 'C\'è un ordine minimo per usare il codice SLOWDAY?',
            answer: 'Nessun acquisto minimo è richiesto. Che tu stia comprando un singolo pacchetto da 3 semi o facendo un grande ordine, il codice SLOWDAY ti farà risparmiare il 15% su ordini di qualsiasi dimensione.'
          }
        ]
      },
    },
  },
  {
    id: '5',
    code: '42015',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    usageCount: 12,
    neverExpires: true,
    image: '/images/coupons/grow420.png',
    content: {
      en: {
        title: '420 Celebration Code - 15% Off All Seeds',
        description: 'Celebrate the culture with 15% off! A special code for those who know what 420 really means. Premium genetics at a great price.',
        slug: 'en/coupon/420-celebration-code-15-off-all-seeds',
        longDescription: 'The Fast Buds 42015 discount code is your exclusive invitation to celebrate cannabis culture while saving 15% on premium autoflowering seeds. This special Fast Buds promo code honors the legendary 420 tradition by offering exceptional value on championship-winning genetics. Whether you\'re an experienced grower or just starting your cultivation journey, the 42015 coupon code delivers unbeatable savings on award-winning strains. Fast Buds has built a reputation as one of the world\'s leading breeders of autoflowering genetics, with multiple Cannabis Cup victories and a global community of passionate cultivators. This Fast Buds discount applies to their entire range of premium seeds, including bestsellers like Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto, and Gelato Auto. The 15% savings means more budget for grow lights, nutrients, or simply expanding your seed collection. Join the celebration and grow world-class cannabis with this exclusive 420 promo code.',
        features: [
          'Save 15% on all Fast Buds premium autoflowering seeds with your 420 code',
          'Access to championship-winning genetics including Cannabis Cup winners',
          'Unlimited usage - apply this Fast Buds discount code to every order',
          'No minimum purchase required - save on any order size',
          'Never expires - this Fast Buds promo code stays active indefinitely',
          'Compatible with fan favorites: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Celebrate 420 culture with every grow and save money doing it'
        ],
        faq: [
          {
            question: 'How do I apply the Fast Buds 42015 coupon at checkout?',
            answer: 'Simply click the "Copy Code" button to copy 42015 to your clipboard. Then visit the official Fast Buds store, add your favorite seeds to the cart, and paste the code in the promo code field at checkout. Your 15% discount will be applied immediately.'
          },
          {
            question: 'Does the 42015 code work on all Fast Buds seeds?',
            answer: 'Yes! The 42015 promo code offers 15% off the entire Fast Buds catalog, including their most popular autoflowering strains, new releases, and limited edition genetics. There are no restrictions.'
          },
          {
            question: 'Can I use the 42015 coupon multiple times?',
            answer: 'Absolutely! Unlike many single-use promotional codes, the Fast Buds 42015 discount code can be used on multiple orders. There\'s no limit to how many times you can save 15%.'
          },
          {
            question: 'Does this Fast Buds promo code have an expiration date?',
            answer: 'No, the 42015 code never expires. This permanent 15% discount is available for all Fast Buds customers, perfect for planning your grows throughout the year.'
          },
          {
            question: 'Is there a minimum order to use the 42015 code?',
            answer: 'No minimum purchase is required. Whether you\'re buying a single 3-pack or making a large bulk order, the 42015 code will save you 15% on orders of any size.'
          }
        ]
      },
      de: {
        title: '420-Feier-Code - 15% auf alle Samen',
        description: 'Feiern Sie die Kultur mit 15% Rabatt! Ein spezieller Code für diejenigen, die wissen, was 420 wirklich bedeutet. Premium-Genetik zu einem tollen Preis.',
        slug: 'de/coupon/420-feier-code-15-auf-alle-samen',
        longDescription: 'Der Fast Buds 42015 Rabattcode ist Ihre exklusive Einladung, die Cannabis-Kultur zu feiern und dabei 15% auf Premium-Autoflowering-Samen zu sparen. Dieser spezielle Fast Buds Promo-Code ehrt die legendäre 420-Tradition, indem er außergewöhnlichen Wert auf meisterschaftsgewinnende Genetik bietet. Ob Sie ein erfahrener Züchter sind oder gerade Ihre Anbau-Reise beginnen, der 42015 Gutscheincode liefert unschlagbare Ersparnisse auf preisgekrönte Sorten. Fast Buds hat sich einen Ruf als einer der weltweit führenden Züchter von Autoflowering-Genetik aufgebaut, mit mehreren Cannabis Cup Siegen und einer globalen Gemeinschaft leidenschaftlicher Züchter. Dieser Fast Buds Rabatt gilt für ihr gesamtes Sortiment an Premium-Samen, einschließlich Bestsellern wie Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto und Gelato Auto. Die 15% Ersparnis bedeuten mehr Budget für Growlampen, Nährstoffe oder einfach die Erweiterung Ihrer Samensammlung.',
        features: [
          'Sparen Sie 15% auf alle Fast Buds Premium-Autoflowering-Samen mit Ihrem 420-Code',
          'Zugang zu meisterschaftsgewinnender Genetik einschließlich Cannabis Cup Gewinnern',
          'Unbegrenzte Nutzung - wenden Sie diesen Fast Buds Rabattcode bei jeder Bestellung an',
          'Keine Mindestbestellung erforderlich - sparen Sie bei jeder Bestellgröße',
          'Läuft nie ab - dieser Fast Buds Promo-Code bleibt unbegrenzt aktiv',
          'Kompatibel mit Fan-Favoriten: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Feiern Sie die 420-Kultur bei jedem Grow und sparen Sie dabei Geld'
        ],
        faq: [
          {
            question: 'Wie wende ich den Fast Buds 42015 Gutschein beim Checkout an?',
            answer: 'Klicken Sie einfach auf die Schaltfläche "Code kopieren", um 42015 in Ihre Zwischenablage zu kopieren. Besuchen Sie dann den offiziellen Fast Buds Store, fügen Sie Ihre Lieblingssamen zum Warenkorb hinzu und fügen Sie den Code im Promo-Code-Feld beim Checkout ein. Ihr 15% Rabatt wird sofort angewendet.'
          },
          {
            question: 'Funktioniert der 42015 Code auf alle Fast Buds Samen?',
            answer: 'Ja! Der 42015 Promo-Code bietet 15% Rabatt auf den gesamten Fast Buds Katalog, einschließlich ihrer beliebtesten Autoflowering-Sorten, neuen Veröffentlichungen und limitierten Editionen. Es gibt keine Einschränkungen.'
          },
          {
            question: 'Kann ich den 42015 Gutschein mehrmals verwenden?',
            answer: 'Absolut! Im Gegensatz zu vielen einmaligen Promo-Codes kann der Fast Buds 42015 Rabattcode bei mehreren Bestellungen verwendet werden. Es gibt keine Begrenzung, wie oft Sie 15% sparen können.'
          },
          {
            question: 'Hat dieser Fast Buds Promo-Code ein Ablaufdatum?',
            answer: 'Nein, der 42015 Code läuft nie ab. Dieser dauerhafte 15% Rabatt ist für alle Fast Buds Kunden verfügbar, perfekt für die Planung Ihrer Grows das ganze Jahr über.'
          },
          {
            question: 'Gibt es eine Mindestbestellung, um den 42015 Code zu verwenden?',
            answer: 'Kein Mindestkauf erforderlich. Ob Sie ein einzelnes 3er-Pack kaufen oder eine große Bestellung aufgeben, der 42015 Code spart Ihnen 15% bei Bestellungen jeder Größe.'
          }
        ]
      },
      es: {
        title: 'Código Celebración 420 - 15% en Todas las Semillas',
        description: '¡Celebra la cultura con 15% de descuento! Un código especial para quienes saben qué significa realmente 420. Genética premium a un precio excelente.',
        slug: 'es/cupon/codigo-celebracion-420-15-en-todas-las-semillas',
        longDescription: 'El código de descuento Fast Buds 42015 es tu invitación exclusiva para celebrar la cultura del cannabis mientras ahorras 15% en semillas autoflorecientes premium. Este código promocional especial de Fast Buds honra la legendaria tradición 420 ofreciendo valor excepcional en genética ganadora de campeonatos. Ya seas un cultivador experimentado o estés comenzando tu viaje de cultivo, el código de cupón 42015 ofrece ahorros inmejorables en variedades premiadas. Fast Buds se ha ganado una reputación como uno de los principales criadores de genética autofloreciente del mundo, con múltiples victorias en la Cannabis Cup y una comunidad global de cultivadores apasionados. Este descuento de Fast Buds se aplica a toda su gama de semillas premium, incluyendo los más vendidos como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto y Gelato Auto. El ahorro del 15% significa más presupuesto para luces de cultivo, nutrientes o simplemente expandir tu colección de semillas.',
        features: [
          'Ahorra 15% en todas las semillas autoflorecientes premium de Fast Buds con tu código 420',
          'Acceso a genética ganadora de campeonatos incluyendo ganadores de Cannabis Cup',
          'Uso ilimitado - aplica este código de descuento Fast Buds en cada pedido',
          'No se requiere compra mínima - ahorra en cualquier tamaño de pedido',
          'Nunca expira - este código promocional de Fast Buds permanece activo indefinidamente',
          'Compatible con favoritos: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Celebra la cultura 420 con cada cultivo y ahorra dinero haciéndolo'
        ],
        faq: [
          {
            question: '¿Cómo aplico el cupón Fast Buds 42015 al pagar?',
            answer: 'Simplemente haz clic en el botón "Copiar Código" para copiar 42015 a tu portapapeles. Luego visita la tienda oficial de Fast Buds, agrega tus semillas favoritas al carrito y pega el código en el campo de código promocional al pagar. Tu descuento del 15% se aplicará inmediatamente.'
          },
          {
            question: '¿Funciona el código 42015 en todas las semillas Fast Buds?',
            answer: '¡Sí! El código promocional 42015 ofrece 15% de descuento en todo el catálogo de Fast Buds, incluyendo sus variedades autoflorecientes más populares, nuevos lanzamientos y genética de edición limitada. No hay restricciones.'
          },
          {
            question: '¿Puedo usar el cupón 42015 varias veces?',
            answer: '¡Absolutamente! A diferencia de muchos códigos promocionales de un solo uso, el código de descuento Fast Buds 42015 puede usarse en múltiples pedidos. No hay límite en cuántas veces puedes ahorrar 15%.'
          },
          {
            question: '¿Este código promocional de Fast Buds tiene fecha de vencimiento?',
            answer: 'No, el código 42015 nunca expira. Este descuento permanente del 15% está disponible para todos los clientes de Fast Buds, perfecto para planificar tus cultivos durante todo el año.'
          },
          {
            question: '¿Hay un pedido mínimo para usar el código 42015?',
            answer: 'No se requiere compra mínima. Ya sea que compres un solo paquete de 3 o hagas un pedido grande, el código 42015 te ahorrará 15% en pedidos de cualquier tamaño.'
          }
        ]
      },
      pt: {
        title: 'Código Celebração 420 - 15% em Todas as Sementes',
        description: 'Celebre a cultura com 15% de desconto! Um código especial para quem sabe o que 420 realmente significa. Genética premium a um ótimo preço.',
        slug: 'pt/cupom/codigo-celebracao-420-15-em-todas-as-sementes',
        longDescription: 'O código de desconto Fast Buds 42015 é seu convite exclusivo para celebrar a cultura do cannabis enquanto economiza 15% em sementes autoflorescentes premium. Este código promocional especial da Fast Buds homenageia a lendária tradição 420 oferecendo valor excepcional em genética vencedora de campeonatos. Seja você um cultivador experiente ou esteja apenas começando sua jornada de cultivo, o código de cupom 42015 oferece economia imbatível em variedades premiadas. A Fast Buds construiu uma reputação como um dos principais criadores mundiais de genética autoflorescente, com múltiplas vitórias na Cannabis Cup e uma comunidade global de cultivadores apaixonados. Este desconto da Fast Buds se aplica a toda sua gama de sementes premium, incluindo best-sellers como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. A economia de 15% significa mais orçamento para luzes de cultivo, nutrientes ou simplesmente expandir sua coleção de sementes.',
        features: [
          'Economize 15% em todas as sementes autoflorescentes premium da Fast Buds com seu código 420',
          'Acesso a genética vencedora de campeonatos incluindo vencedores da Cannabis Cup',
          'Uso ilimitado - aplique este código de desconto Fast Buds em cada pedido',
          'Não é necessária compra mínima - economize em qualquer tamanho de pedido',
          'Nunca expira - este código promocional da Fast Buds permanece ativo indefinidamente',
          'Compatível com favoritos: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Celebre a cultura 420 com cada cultivo e economize dinheiro fazendo isso'
        ],
        faq: [
          {
            question: 'Como aplico o cupom Fast Buds 42015 no checkout?',
            answer: 'Simplesmente clique no botão "Copiar Código" para copiar 42015 para sua área de transferência. Em seguida, visite a loja oficial da Fast Buds, adicione suas sementes favoritas ao carrinho e cole o código no campo de código promocional no checkout. Seu desconto de 15% será aplicado imediatamente.'
          },
          {
            question: 'O código 42015 funciona em todas as sementes Fast Buds?',
            answer: 'Sim! O código promocional 42015 oferece 15% de desconto em todo o catálogo da Fast Buds, incluindo suas variedades autoflorescentes mais populares, novos lançamentos e genética de edição limitada. Não há restrições.'
          },
          {
            question: 'Posso usar o cupom 42015 várias vezes?',
            answer: 'Absolutamente! Ao contrário de muitos códigos promocionais de uso único, o código de desconto Fast Buds 42015 pode ser usado em vários pedidos. Não há limite para quantas vezes você pode economizar 15%.'
          },
          {
            question: 'Este código promocional da Fast Buds tem data de validade?',
            answer: 'Não, o código 42015 nunca expira. Este desconto permanente de 15% está disponível para todos os clientes da Fast Buds, perfeito para planejar seus cultivos durante todo o ano.'
          },
          {
            question: 'Há um pedido mínimo para usar o código 42015?',
            answer: 'Nenhuma compra mínima é necessária. Seja comprando um único pacote de 3 ou fazendo um grande pedido, o código 42015 economizará 15% em pedidos de qualquer tamanho.'
          }
        ]
      },
      fr: {
        title: 'Code Célébration 420 - 15% sur Toutes les Graines',
        description: 'Célébrez la culture avec 15% de réduction! Un code spécial pour ceux qui savent ce que 420 signifie vraiment. Génétique premium à un excellent prix.',
        slug: 'fr/coupon/code-celebration-420-15-sur-toutes-les-graines',
        longDescription: 'Le code de réduction Fast Buds 42015 est votre invitation exclusive pour célébrer la culture du cannabis tout en économisant 15% sur les graines autofloraison premium. Ce code promo spécial Fast Buds honore la légendaire tradition 420 en offrant une valeur exceptionnelle sur la génétique gagnante de championnats. Que vous soyez un cultivateur expérimenté ou que vous commenciez votre parcours de culture, le code coupon 42015 offre des économies imbattables sur des variétés primées. Fast Buds s\'est bâti une réputation comme l\'un des principaux sélectionneurs mondiaux de génétique autofloraison, avec plusieurs victoires à la Cannabis Cup et une communauté mondiale de cultivateurs passionnés. Cette réduction Fast Buds s\'applique à toute leur gamme de graines premium, y compris les best-sellers comme Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto et Gelato Auto. Les 15% d\'économies signifient plus de budget pour les lampes de culture, les nutriments ou simplement élargir votre collection de graines.',
        features: [
          'Économisez 15% sur toutes les graines autofloraison premium Fast Buds avec votre code 420',
          'Accès à la génétique gagnante de championnats incluant les vainqueurs de la Cannabis Cup',
          'Utilisation illimitée - appliquez ce code de réduction Fast Buds à chaque commande',
          'Aucun achat minimum requis - économisez sur toute taille de commande',
          'N\'expire jamais - ce code promo Fast Buds reste actif indéfiniment',
          'Compatible avec les favoris: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Célébrez la culture 420 à chaque culture et économisez de l\'argent en le faisant'
        ],
        faq: [
          {
            question: 'Comment appliquer le coupon Fast Buds 42015 lors du paiement?',
            answer: 'Cliquez simplement sur le bouton "Copier le Code" pour copier 42015 dans votre presse-papiers. Ensuite, visitez la boutique officielle Fast Buds, ajoutez vos graines préférées au panier et collez le code dans le champ code promo lors du paiement. Votre réduction de 15% sera appliquée immédiatement.'
          },
          {
            question: 'Le code 42015 fonctionne-t-il sur toutes les graines Fast Buds?',
            answer: 'Oui! Le code promo 42015 offre 15% de réduction sur l\'ensemble du catalogue Fast Buds, y compris leurs variétés autofloraison les plus populaires, les nouvelles sorties et la génétique en édition limitée. Il n\'y a aucune restriction.'
          },
          {
            question: 'Puis-je utiliser le coupon 42015 plusieurs fois?',
            answer: 'Absolument! Contrairement à de nombreux codes promotionnels à usage unique, le code de réduction Fast Buds 42015 peut être utilisé sur plusieurs commandes. Il n\'y a aucune limite au nombre de fois où vous pouvez économiser 15%.'
          },
          {
            question: 'Ce code promo Fast Buds a-t-il une date d\'expiration?',
            answer: 'Non, le code 42015 n\'expire jamais. Cette réduction permanente de 15% est disponible pour tous les clients Fast Buds, parfaite pour planifier vos cultures tout au long de l\'année.'
          },
          {
            question: 'Y a-t-il une commande minimum pour utiliser le code 42015?',
            answer: 'Aucun achat minimum n\'est requis. Que vous achetiez un seul pack de 3 graines ou que vous fassiez une grosse commande, le code 42015 vous fera économiser 15% sur les commandes de toute taille.'
          }
        ]
      },
      it: {
        title: 'Codice Celebrazione 420 - 15% su Tutti i Semi',
        description: 'Celebra la cultura con il 15% di sconto! Un codice speciale per chi sa cosa significa davvero 420. Genetica premium a un prezzo fantastico.',
        slug: 'it/coupon/codice-celebrazione-420-15-su-tutti-i-semi',
        longDescription: 'Il codice sconto Fast Buds 42015 è il tuo invito esclusivo per celebrare la cultura del cannabis risparmiando il 15% sui semi autofiorenti premium. Questo codice promozionale speciale Fast Buds onora la leggendaria tradizione 420 offrendo valore eccezionale sulla genetica vincitrice di campionati. Che tu sia un coltivatore esperto o stia iniziando il tuo percorso di coltivazione, il codice coupon 42015 offre risparmi imbattibili su varietà premiate. Fast Buds ha costruito una reputazione come uno dei principali allevatori mondiali di genetica autofiorente, con multiple vittorie alla Cannabis Cup e una comunità globale di coltivatori appassionati. Questo sconto Fast Buds si applica a tutta la loro gamma di semi premium, inclusi bestseller come Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. Il risparmio del 15% significa più budget per luci di coltivazione, nutrienti o semplicemente espandere la tua collezione di semi.',
        features: [
          'Risparmia il 15% su tutti i semi autofiorenti premium Fast Buds con il tuo codice 420',
          'Accesso a genetica vincitrice di campionati inclusi i vincitori della Cannabis Cup',
          'Utilizzo illimitato - applica questo codice sconto Fast Buds ad ogni ordine',
          'Nessun acquisto minimo richiesto - risparmia su qualsiasi dimensione ordine',
          'Non scade mai - questo codice promo Fast Buds rimane attivo indefinitamente',
          'Compatibile con i favoriti: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Celebra la cultura 420 con ogni coltivazione e risparmia denaro facendolo'
        ],
        faq: [
          {
            question: 'Come applico il coupon Fast Buds 42015 al checkout?',
            answer: 'Fai semplicemente clic sul pulsante "Copia Codice" per copiare 42015 negli appunti. Quindi visita lo store ufficiale Fast Buds, aggiungi i tuoi semi preferiti al carrello e incolla il codice nel campo codice promo durante il checkout. Il tuo sconto del 15% verrà applicato immediatamente.'
          },
          {
            question: 'Il codice 42015 funziona su tutti i semi Fast Buds?',
            answer: 'Sì! Il codice promo 42015 offre il 15% di sconto sull\'intero catalogo Fast Buds, incluse le loro varietà autofiorenti più popolari, nuovi lanci e genetica in edizione limitata. Non ci sono restrizioni.'
          },
          {
            question: 'Posso usare il coupon 42015 più volte?',
            answer: 'Assolutamente! A differenza di molti codici promozionali monouso, il codice sconto Fast Buds 42015 può essere utilizzato su più ordini. Non c\'è limite a quante volte puoi risparmiare il 15%.'
          },
          {
            question: 'Questo codice promo Fast Buds ha una data di scadenza?',
            answer: 'No, il codice 42015 non scade mai. Questo sconto permanente del 15% è disponibile per tutti i clienti Fast Buds, perfetto per pianificare le tue coltivazioni durante tutto l\'anno.'
          },
          {
            question: 'C\'è un ordine minimo per usare il codice 42015?',
            answer: 'Nessun acquisto minimo è richiesto. Che tu stia comprando un singolo pacchetto da 3 semi o facendo un grande ordine, il codice 42015 ti farà risparmiare il 15% su ordini di qualsiasi dimensione.'
          }
        ]
      },
    },
  },
  {
    id: '6',
    code: 'EARTH',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    usageCount: 16,
    neverExpires: true,
    image: '/images/coupons/green.png',
    content: {
      en: {
        title: 'Earth Day Special - 15% Off Green Growing',
        description: 'Celebrate nature with 15% off! Grow sustainably with Fast Buds premium genetics. For those who care about the planet.',
        slug: 'en/coupon/earth-day-special-15-off-green-growing',
        longDescription: 'The Fast Buds EARTH discount code represents a commitment to sustainable cultivation while saving 15% on premium autoflowering cannabis seeds. This eco-conscious Fast Buds promo code celebrates environmentally-friendly growing practices by offering exceptional value on championship-winning genetics. Whether you\'re growing indoors with renewable energy or outdoors in harmony with nature, the EARTH coupon code makes premium cultivation more accessible and affordable. Fast Buds has earned global recognition as a leading breeder of autoflowering genetics, with multiple Cannabis Cup victories and a dedication to quality that extends to environmental consciousness. This Fast Buds discount applies to their entire catalog of premium seeds, including popular strains like Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto, and Gelato Auto. The 15% savings means more budget for organic nutrients, sustainable equipment, or expanding your green garden with additional strains. Grow responsibly and save money with this exclusive Earth-friendly promo code.',
        features: [
          'Save 15% on all Fast Buds premium autoflowering seeds with eco-conscious code',
          'Access to championship-winning genetics including Cannabis Cup winners',
          'Unlimited usage - apply this Fast Buds discount code to every sustainable order',
          'No minimum purchase required - save on any order size for your green garden',
          'Never expires - this Fast Buds promo code stays active for year-round growing',
          'Compatible with popular strains: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfect for sustainable growers who care about quality and the environment'
        ],
        faq: [
          {
            question: 'How do I apply the Fast Buds EARTH coupon at checkout?',
            answer: 'Simply click the "Copy Code" button to copy EARTH to your clipboard. Then visit the official Fast Buds store, add your favorite sustainable seeds to the cart, and paste the code in the promo code field at checkout. Your 15% discount will be applied immediately to support your green growing journey.'
          },
          {
            question: 'Does the EARTH code work on all Fast Buds seeds?',
            answer: 'Yes! The EARTH promo code offers 15% off the entire Fast Buds catalog, including their most popular autoflowering strains, new releases, and limited edition genetics. All seeds are suitable for sustainable growing practices.'
          },
          {
            question: 'Can I use the EARTH coupon multiple times?',
            answer: 'Absolutely! Unlike many single-use promotional codes, the Fast Buds EARTH discount code can be used on multiple orders. There\'s no limit to how many times you can save 15% while growing green.'
          },
          {
            question: 'Does this Fast Buds promo code have an expiration date?',
            answer: 'No, the EARTH code never expires. This permanent 15% discount is available for all environmentally-conscious Fast Buds customers, perfect for planning sustainable grows throughout the year.'
          },
          {
            question: 'Is there a minimum order to use the EARTH code?',
            answer: 'No minimum purchase is required. Whether you\'re buying a single 3-pack for a small sustainable setup or making a large bulk order, the EARTH code will save you 15% on orders of any size.'
          }
        ]
      },
      de: {
        title: 'Tag der Erde Special - 15% auf Grünen Anbau',
        description: 'Feiern Sie die Natur mit 15% Rabatt! Wachsen Sie nachhaltig mit Fast Buds Premium-Genetik. Für diejenigen, die sich um den Planeten kümmern.',
        slug: 'de/coupon/tag-der-erde-special-15-auf-grunen-anbau',
        longDescription: 'Der Fast Buds EARTH Rabattcode steht für ein Bekenntnis zu nachhaltigem Anbau, während Sie 15% auf Premium-Autoflowering-Cannabis-Samen sparen. Dieser umweltbewusste Fast Buds Promo-Code feiert umweltfreundliche Anbaupraktiken, indem er außergewöhnlichen Wert auf meisterschaftsgewinnende Genetik bietet. Ob Sie indoor mit erneuerbarer Energie oder outdoor im Einklang mit der Natur anbauen, der EARTH Gutscheincode macht Premium-Anbau zugänglicher und erschwinglicher. Fast Buds hat weltweite Anerkennung als führender Züchter von Autoflowering-Genetik erlangt, mit mehreren Cannabis Cup Siegen und einer Hingabe zur Qualität, die sich auf Umweltbewusstsein erstreckt. Dieser Fast Buds Rabatt gilt für ihren gesamten Katalog von Premium-Samen, einschließlich beliebter Sorten wie Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto und Gelato Auto. Die 15% Ersparnis bedeuten mehr Budget für organische Nährstoffe, nachhaltige Ausrüstung oder die Erweiterung Ihres grünen Gartens mit zusätzlichen Sorten.',
        features: [
          'Sparen Sie 15% auf alle Fast Buds Premium-Autoflowering-Samen mit umweltbewusstem Code',
          'Zugang zu meisterschaftsgewinnender Genetik einschließlich Cannabis Cup Gewinnern',
          'Unbegrenzte Nutzung - wenden Sie diesen Fast Buds Rabattcode bei jeder nachhaltigen Bestellung an',
          'Keine Mindestbestellung erforderlich - sparen Sie bei jeder Bestellgröße für Ihren grünen Garten',
          'Läuft nie ab - dieser Fast Buds Promo-Code bleibt für ganzjährigen Anbau aktiv',
          'Kompatibel mit beliebten Sorten: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfekt für nachhaltige Züchter, denen Qualität und Umwelt wichtig sind'
        ],
        faq: [
          {
            question: 'Wie wende ich den Fast Buds EARTH Gutschein beim Checkout an?',
            answer: 'Klicken Sie einfach auf die Schaltfläche "Code kopieren", um EARTH in Ihre Zwischenablage zu kopieren. Besuchen Sie dann den offiziellen Fast Buds Store, fügen Sie Ihre bevorzugten nachhaltigen Samen zum Warenkorb hinzu und fügen Sie den Code im Promo-Code-Feld beim Checkout ein. Ihr 15% Rabatt wird sofort angewendet, um Ihre grüne Anbau-Reise zu unterstützen.'
          },
          {
            question: 'Funktioniert der EARTH Code auf alle Fast Buds Samen?',
            answer: 'Ja! Der EARTH Promo-Code bietet 15% Rabatt auf den gesamten Fast Buds Katalog, einschließlich ihrer beliebtesten Autoflowering-Sorten, neuen Veröffentlichungen und limitierten Editionen. Alle Samen sind für nachhaltige Anbaupraktiken geeignet.'
          },
          {
            question: 'Kann ich den EARTH Gutschein mehrmals verwenden?',
            answer: 'Absolut! Im Gegensatz zu vielen einmaligen Promo-Codes kann der Fast Buds EARTH Rabattcode bei mehreren Bestellungen verwendet werden. Es gibt keine Begrenzung, wie oft Sie 15% sparen können, während Sie grün anbauen.'
          },
          {
            question: 'Hat dieser Fast Buds Promo-Code ein Ablaufdatum?',
            answer: 'Nein, der EARTH Code läuft nie ab. Dieser dauerhafte 15% Rabatt ist für alle umweltbewussten Fast Buds Kunden verfügbar, perfekt für die Planung nachhaltiger Grows das ganze Jahr über.'
          },
          {
            question: 'Gibt es eine Mindestbestellung, um den EARTH Code zu verwenden?',
            answer: 'Kein Mindestkauf erforderlich. Ob Sie ein einzelnes 3er-Pack für ein kleines nachhaltiges Setup kaufen oder eine große Bestellung aufgeben, der EARTH Code spart Ihnen 15% bei Bestellungen jeder Größe.'
          }
        ]
      },
      es: {
        title: 'Especial Día de la Tierra - 15% en Cultivo Verde',
        description: '¡Celebra la naturaleza con 15% de descuento! Cultiva de manera sostenible con genética premium de Fast Buds. Para quienes cuidan el planeta.',
        slug: 'es/cupon/especial-dia-tierra-15-cultivo-verde',
        longDescription: 'El código de descuento Fast Buds EARTH representa un compromiso con el cultivo sostenible mientras ahorras 15% en semillas de cannabis autoflorecientes premium. Este código promocional eco-consciente de Fast Buds celebra prácticas de cultivo respetuosas con el medio ambiente ofreciendo valor excepcional en genética ganadora de campeonatos. Ya sea que cultives en interior con energía renovable o en exterior en armonía con la naturaleza, el código de cupón EARTH hace que el cultivo premium sea más accesible y asequible. Fast Buds ha ganado reconocimiento global como criador líder de genética autofloreciente, con múltiples victorias en la Cannabis Cup y una dedicación a la calidad que se extiende a la conciencia ambiental. Este descuento de Fast Buds se aplica a todo su catálogo de semillas premium, incluyendo variedades populares como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto y Gelato Auto. El ahorro del 15% significa más presupuesto para nutrientes orgánicos, equipo sostenible o expandir tu jardín verde con cepas adicionales.',
        features: [
          'Ahorra 15% en todas las semillas autoflorecientes premium de Fast Buds con código eco-consciente',
          'Acceso a genética ganadora de campeonatos incluyendo ganadores de Cannabis Cup',
          'Uso ilimitado - aplica este código de descuento Fast Buds en cada pedido sostenible',
          'No se requiere compra mínima - ahorra en cualquier tamaño de pedido para tu jardín verde',
          'Nunca expira - este código promocional de Fast Buds permanece activo para cultivo durante todo el año',
          'Compatible con variedades populares: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfecto para cultivadores sostenibles que se preocupan por la calidad y el medio ambiente'
        ],
        faq: [
          {
            question: '¿Cómo aplico el cupón Fast Buds EARTH al pagar?',
            answer: 'Simplemente haz clic en el botón "Copiar Código" para copiar EARTH a tu portapapeles. Luego visita la tienda oficial de Fast Buds, agrega tus semillas sostenibles favoritas al carrito y pega el código en el campo de código promocional al pagar. Tu descuento del 15% se aplicará inmediatamente para apoyar tu viaje de cultivo verde.'
          },
          {
            question: '¿Funciona el código EARTH en todas las semillas Fast Buds?',
            answer: '¡Sí! El código promocional EARTH ofrece 15% de descuento en todo el catálogo de Fast Buds, incluyendo sus variedades autoflorecientes más populares, nuevos lanzamientos y genética de edición limitada. Todas las semillas son adecuadas para prácticas de cultivo sostenible.'
          },
          {
            question: '¿Puedo usar el cupón EARTH varias veces?',
            answer: '¡Absolutamente! A diferencia de muchos códigos promocionales de un solo uso, el código de descuento Fast Buds EARTH puede usarse en múltiples pedidos. No hay límite en cuántas veces puedes ahorrar 15% mientras cultivas verde.'
          },
          {
            question: '¿Este código promocional de Fast Buds tiene fecha de vencimiento?',
            answer: 'No, el código EARTH nunca expira. Este descuento permanente del 15% está disponible para todos los clientes eco-conscientes de Fast Buds, perfecto para planificar cultivos sostenibles durante todo el año.'
          },
          {
            question: '¿Hay un pedido mínimo para usar el código EARTH?',
            answer: 'No se requiere compra mínima. Ya sea que compres un solo paquete de 3 para una configuración sostenible pequeña o hagas un pedido grande, el código EARTH te ahorrará 15% en pedidos de cualquier tamaño.'
          }
        ]
      },
      pt: {
        title: 'Especial Dia da Terra - 15% em Cultivo Verde',
        description: 'Celebre a natureza com 15% de desconto! Cultive de forma sustentável com genética premium da Fast Buds. Para quem se importa com o planeta.',
        slug: 'pt/cupom/especial-dia-terra-15-cultivo-verde',
        longDescription: 'O código de desconto Fast Buds EARTH representa um compromisso com o cultivo sustentável enquanto economiza 15% em sementes de cannabis autoflorescentes premium. Este código promocional eco-consciente da Fast Buds celebra práticas de cultivo ambientalmente corretas oferecendo valor excepcional em genética vencedora de campeonatos. Seja cultivando em ambiente fechado com energia renovável ou ao ar livre em harmonia com a natureza, o código de cupom EARTH torna o cultivo premium mais acessível e acessível. A Fast Buds conquistou reconhecimento global como criador líder de genética autoflorescente, com múltiplas vitórias na Cannabis Cup e uma dedicação à qualidade que se estende à consciência ambiental. Este desconto da Fast Buds se aplica a todo seu catálogo de sementes premium, incluindo variedades populares como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. A economia de 15% significa mais orçamento para nutrientes orgânicos, equipamento sustentável ou expandir seu jardim verde com cepas adicionais.',
        features: [
          'Economize 15% em todas as sementes autoflorescentes premium da Fast Buds com código eco-consciente',
          'Acesso a genética vencedora de campeonatos incluindo vencedores da Cannabis Cup',
          'Uso ilimitado - aplique este código de desconto Fast Buds em cada pedido sustentável',
          'Não é necessária compra mínima - economize em qualquer tamanho de pedido para seu jardim verde',
          'Nunca expira - este código promocional da Fast Buds permanece ativo para cultivo durante todo o ano',
          'Compatível com variedades populares: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfeito para cultivadores sustentáveis que se preocupam com qualidade e meio ambiente'
        ],
        faq: [
          {
            question: 'Como aplico o cupom Fast Buds EARTH no checkout?',
            answer: 'Simplesmente clique no botão "Copiar Código" para copiar EARTH para sua área de transferência. Em seguida, visite a loja oficial da Fast Buds, adicione suas sementes sustentáveis favoritas ao carrinho e cole o código no campo de código promocional no checkout. Seu desconto de 15% será aplicado imediatamente para apoiar sua jornada de cultivo verde.'
          },
          {
            question: 'O código EARTH funciona em todas as sementes Fast Buds?',
            answer: 'Sim! O código promocional EARTH oferece 15% de desconto em todo o catálogo da Fast Buds, incluindo suas variedades autoflorescentes mais populares, novos lançamentos e genética de edição limitada. Todas as sementes são adequadas para práticas de cultivo sustentável.'
          },
          {
            question: 'Posso usar o cupom EARTH várias vezes?',
            answer: 'Absolutamente! Ao contrário de muitos códigos promocionais de uso único, o código de desconto Fast Buds EARTH pode ser usado em vários pedidos. Não há limite para quantas vezes você pode economizar 15% enquanto cultiva verde.'
          },
          {
            question: 'Este código promocional da Fast Buds tem data de validade?',
            answer: 'Não, o código EARTH nunca expira. Este desconto permanente de 15% está disponível para todos os clientes eco-conscientes da Fast Buds, perfeito para planejar cultivos sustentáveis durante todo o ano.'
          },
          {
            question: 'Há um pedido mínimo para usar o código EARTH?',
            answer: 'Nenhuma compra mínima é necessária. Seja comprando um único pacote de 3 para uma configuração sustentável pequena ou fazendo um grande pedido, o código EARTH economizará 15% em pedidos de qualquer tamanho.'
          }
        ]
      },
      fr: {
        title: 'Spécial Jour de la Terre - 15% sur Culture Verte',
        description: 'Célébrez la nature avec 15% de réduction! Cultivez durablement avec la génétique premium Fast Buds. Pour ceux qui se soucient de la planète.',
        slug: 'fr/coupon/special-jour-terre-15-culture-verte',
        longDescription: 'Le code de réduction Fast Buds EARTH représente un engagement envers la culture durable tout en économisant 15% sur les graines de cannabis autofloraison premium. Ce code promo éco-conscient Fast Buds célèbre les pratiques de culture respectueuses de l\'environnement en offrant une valeur exceptionnelle sur la génétique gagnante de championnats. Que vous cultiviez en intérieur avec de l\'énergie renouvelable ou en extérieur en harmonie avec la nature, le code coupon EARTH rend la culture premium plus accessible et abordable. Fast Buds a gagné une reconnaissance mondiale comme sélectionneur leader de génétique autofloraison, avec plusieurs victoires à la Cannabis Cup et un dévouement à la qualité qui s\'étend à la conscience environnementale. Cette réduction Fast Buds s\'applique à tout leur catalogue de graines premium, y compris des variétés populaires comme Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto et Gelato Auto. Les 15% d\'économies signifient plus de budget pour les nutriments biologiques, l\'équipement durable ou l\'expansion de votre jardin vert avec des variétés supplémentaires.',
        features: [
          'Économisez 15% sur toutes les graines autofloraison premium Fast Buds avec code éco-conscient',
          'Accès à la génétique gagnante de championnats incluant les vainqueurs de la Cannabis Cup',
          'Utilisation illimitée - appliquez ce code de réduction Fast Buds à chaque commande durable',
          'Aucun achat minimum requis - économisez sur toute taille de commande pour votre jardin vert',
          'N\'expire jamais - ce code promo Fast Buds reste actif pour la culture toute l\'année',
          'Compatible avec les variétés populaires: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Parfait pour les cultivateurs durables qui se soucient de la qualité et de l\'environnement'
        ],
        faq: [
          {
            question: 'Comment appliquer le coupon Fast Buds EARTH lors du paiement?',
            answer: 'Cliquez simplement sur le bouton "Copier le Code" pour copier EARTH dans votre presse-papiers. Ensuite, visitez la boutique officielle Fast Buds, ajoutez vos graines durables préférées au panier et collez le code dans le champ code promo lors du paiement. Votre réduction de 15% sera appliquée immédiatement pour soutenir votre parcours de culture verte.'
          },
          {
            question: 'Le code EARTH fonctionne-t-il sur toutes les graines Fast Buds?',
            answer: 'Oui! Le code promo EARTH offre 15% de réduction sur l\'ensemble du catalogue Fast Buds, y compris leurs variétés autofloraison les plus populaires, les nouvelles sorties et la génétique en édition limitée. Toutes les graines conviennent aux pratiques de culture durable.'
          },
          {
            question: 'Puis-je utiliser le coupon EARTH plusieurs fois?',
            answer: 'Absolument! Contrairement à de nombreux codes promotionnels à usage unique, le code de réduction Fast Buds EARTH peut être utilisé sur plusieurs commandes. Il n\'y a aucune limite au nombre de fois où vous pouvez économiser 15% tout en cultivant vert.'
          },
          {
            question: 'Ce code promo Fast Buds a-t-il une date d\'expiration?',
            answer: 'Non, le code EARTH n\'expire jamais. Cette réduction permanente de 15% est disponible pour tous les clients éco-conscients de Fast Buds, parfaite pour planifier des cultures durables tout au long de l\'année.'
          },
          {
            question: 'Y a-t-il une commande minimum pour utiliser le code EARTH?',
            answer: 'Aucun achat minimum n\'est requis. Que vous achetiez un seul pack de 3 pour une petite configuration durable ou que vous fassiez une grosse commande, le code EARTH vous fera économiser 15% sur les commandes de toute taille.'
          }
        ]
      },
      it: {
        title: 'Speciale Giornata della Terra - 15% su Coltivazione Verde',
        description: 'Celebra la natura con il 15% di sconto! Coltiva in modo sostenibile con genetica premium Fast Buds. Per chi ha a cuore il pianeta.',
        slug: 'it/coupon/speciale-giornata-terra-15-coltivazione-verde',
        longDescription: 'Il codice sconto Fast Buds EARTH rappresenta un impegno per la coltivazione sostenibile risparmiando il 15% sui semi di cannabis autofiorenti premium. Questo codice promozionale eco-consapevole Fast Buds celebra pratiche di coltivazione rispettose dell\'ambiente offrendo valore eccezionale sulla genetica vincitrice di campionati. Che tu stia coltivando indoor con energia rinnovabile o outdoor in armonia con la natura, il codice coupon EARTH rende la coltivazione premium più accessibile e conveniente. Fast Buds ha guadagnato riconoscimento globale come allevatore leader di genetica autofiorente, con multiple vittorie alla Cannabis Cup e una dedizione alla qualità che si estende alla coscienza ambientale. Questo sconto Fast Buds si applica a tutto il loro catalogo di semi premium, incluse varietà popolari come Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. Il risparmio del 15% significa più budget per nutrienti organici, attrezzature sostenibili o espandere il tuo giardino verde con varietà aggiuntive.',
        features: [
          'Risparmia il 15% su tutti i semi autofiorenti premium Fast Buds con codice eco-consapevole',
          'Accesso a genetica vincitrice di campionati inclusi i vincitori della Cannabis Cup',
          'Utilizzo illimitato - applica questo codice sconto Fast Buds ad ogni ordine sostenibile',
          'Nessun acquisto minimo richiesto - risparmia su qualsiasi dimensione ordine per il tuo giardino verde',
          'Non scade mai - questo codice promo Fast Buds rimane attivo per coltivazione tutto l\'anno',
          'Compatibile con varietà popolari: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfetto per coltivatori sostenibili che si preoccupano di qualità e ambiente'
        ],
        faq: [
          {
            question: 'Come applico il coupon Fast Buds EARTH al checkout?',
            answer: 'Fai semplicemente clic sul pulsante "Copia Codice" per copiare EARTH negli appunti. Quindi visita lo store ufficiale Fast Buds, aggiungi i tuoi semi sostenibili preferiti al carrello e incolla il codice nel campo codice promo durante il checkout. Il tuo sconto del 15% verrà applicato immediatamente per supportare il tuo percorso di coltivazione verde.'
          },
          {
            question: 'Il codice EARTH funziona su tutti i semi Fast Buds?',
            answer: 'Sì! Il codice promo EARTH offre il 15% di sconto sull\'intero catalogo Fast Buds, incluse le loro varietà autofiorenti più popolari, nuovi lanci e genetica in edizione limitata. Tutti i semi sono adatti per pratiche di coltivazione sostenibile.'
          },
          {
            question: 'Posso usare il coupon EARTH più volte?',
            answer: 'Assolutamente! A differenza di molti codici promozionali monouso, il codice sconto Fast Buds EARTH può essere utilizzato su più ordini. Non c\'è limite a quante volte puoi risparmiare il 15% mentre coltivi verde.'
          },
          {
            question: 'Questo codice promo Fast Buds ha una data di scadenza?',
            answer: 'No, il codice EARTH non scade mai. Questo sconto permanente del 15% è disponibile per tutti i clienti eco-consapevoli di Fast Buds, perfetto per pianificare coltivazioni sostenibili durante tutto l\'anno.'
          },
          {
            question: 'C\'è un ordine minimo per usare il codice EARTH?',
            answer: 'Nessun acquisto minimo è richiesto. Che tu stia comprando un singolo pacchetto da 3 per una piccola configurazione sostenibile o facendo un grande ordine, il codice EARTH ti farà risparmiare il 15% su ordini di qualsiasi dimensione.'
          }
        ]
      },
    },
  },
  {
    id: '7',
    code: 'BUMP',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    usageCount: 11,
    neverExpires: true,
    image: '/images/coupons/autoflower.png',
    content: {
      en: {
        title: 'Bump Up Your Garden - 15% Off Premium Seeds',
        description: 'Give your grow room a serious upgrade! Get 15% off Fast Buds top-shelf genetics and bump up your yields.',
        slug: 'en/coupon/bump-up-garden-15-off-premium-seeds',
        longDescription: 'The Fast Buds BUMP discount code is your ticket to upgrading your cultivation game while saving 15% on premium autoflowering cannabis seeds. This powerful Fast Buds promo code helps serious growers bump up their yields and quality by providing exceptional value on championship-winning genetics. Whether you\'re looking to take your indoor setup to the next level or maximize your outdoor harvests, the BUMP coupon code makes premium cultivation more affordable. Fast Buds has established itself as an industry leader in autoflowering genetics, with multiple Cannabis Cup victories and a reputation for consistently producing high-yielding, potent strains. This Fast Buds discount applies to their complete range of premium seeds, including high-performance varieties like Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto, and Gelato Auto. The 15% savings means more resources for advanced nutrients, superior lighting, or simply more seeds to diversify and enhance your garden. Bump up your growing success with this exclusive performance-focused promo code.',
        features: [
          'Save 15% on all Fast Buds premium autoflowering seeds to upgrade your garden',
          'Access to championship-winning genetics including Cannabis Cup award-winning strains',
          'Unlimited usage - apply this Fast Buds discount code to maximize every order',
          'No minimum purchase required - save on any order size for your growing upgrade',
          'Never expires - this Fast Buds promo code stays active for continuous improvement',
          'Compatible with high-yield favorites: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfect for serious growers looking to bump up yields and quality'
        ],
        faq: [
          {
            question: 'How do I apply the Fast Buds BUMP coupon at checkout?',
            answer: 'Simply click the "Copy Code" button to copy BUMP to your clipboard. Then visit the official Fast Buds store, add your premium upgrade seeds to the cart, and paste the code in the promo code field at checkout. Your 15% discount will be applied immediately to help you bump up your garden.'
          },
          {
            question: 'Does the BUMP code work on all Fast Buds seeds?',
            answer: 'Yes! The BUMP promo code offers 15% off the entire Fast Buds catalog, including their highest-yielding autoflowering strains, new releases, and limited edition genetics. All seeds are perfect for serious growers looking to upgrade.'
          },
          {
            question: 'Can I use the BUMP coupon multiple times?',
            answer: 'Absolutely! Unlike many single-use promotional codes, the Fast Buds BUMP discount code can be used on multiple orders. There\'s no limit to how many times you can save 15% while upgrading your growing operation.'
          },
          {
            question: 'Does this Fast Buds promo code have an expiration date?',
            answer: 'No, the BUMP code never expires. This permanent 15% discount is available for all serious Fast Buds growers, perfect for continuous garden improvement throughout the year.'
          },
          {
            question: 'Is there a minimum order to use the BUMP code?',
            answer: 'No minimum purchase is required. Whether you\'re buying a single 3-pack to test a new strain or making a large bulk order for a major upgrade, the BUMP code will save you 15% on orders of any size.'
          }
        ]
      },
      de: {
        title: 'Verbessern Sie Ihren Garten - 15% auf Premium-Samen',
        description: 'Geben Sie Ihrem Growroom ein ernsthaftes Upgrade! Erhalten Sie 15% Rabatt auf Fast Buds Spitzen-Genetik und steigern Sie Ihre Erträge.',
        slug: 'de/coupon/verbessern-sie-ihren-garten-15-premium-samen',
        longDescription: 'Der Fast Buds BUMP Rabattcode ist Ihr Ticket zum Upgrade Ihres Anbauspiels, während Sie 15% auf Premium-Autoflowering-Cannabis-Samen sparen. Dieser leistungsstarke Fast Buds Promo-Code hilft ernsthaften Züchtern, ihre Erträge und Qualität zu steigern, indem er außergewöhnlichen Wert auf meisterschaftsgewinnende Genetik bietet. Ob Sie Ihr Indoor-Setup auf die nächste Stufe bringen oder Ihre Outdoor-Ernten maximieren möchten, der BUMP Gutscheincode macht Premium-Anbau erschwinglicher. Fast Buds hat sich als Branchenführer in Autoflowering-Genetik etabliert, mit mehreren Cannabis Cup Siegen und einem Ruf für die konsequente Produktion ertragreicher, potenter Sorten. Dieser Fast Buds Rabatt gilt für ihr komplettes Sortiment an Premium-Samen, einschließlich leistungsstarker Sorten wie Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto und Gelato Auto. Die 15% Ersparnis bedeuten mehr Ressourcen für fortgeschrittene Nährstoffe, überlegene Beleuchtung oder einfach mehr Samen zur Diversifizierung und Verbesserung Ihres Gartens.',
        features: [
          'Sparen Sie 15% auf alle Fast Buds Premium-Autoflowering-Samen zur Verbesserung Ihres Gartens',
          'Zugang zu meisterschaftsgewinnender Genetik einschließlich Cannabis Cup preisgekrönter Sorten',
          'Unbegrenzte Nutzung - wenden Sie diesen Fast Buds Rabattcode an, um jede Bestellung zu maximieren',
          'Keine Mindestbestellung erforderlich - sparen Sie bei jeder Bestellgröße für Ihr Anbau-Upgrade',
          'Läuft nie ab - dieser Fast Buds Promo-Code bleibt für kontinuierliche Verbesserung aktiv',
          'Kompatibel mit ertragreichen Favoriten: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfekt für ernsthafte Züchter, die Erträge und Qualität steigern möchten'
        ],
        faq: [
          {
            question: 'Wie wende ich den Fast Buds BUMP Gutschein beim Checkout an?',
            answer: 'Klicken Sie einfach auf die Schaltfläche "Code kopieren", um BUMP in Ihre Zwischenablage zu kopieren. Besuchen Sie dann den offiziellen Fast Buds Store, fügen Sie Ihre Premium-Upgrade-Samen zum Warenkorb hinzu und fügen Sie den Code im Promo-Code-Feld beim Checkout ein. Ihr 15% Rabatt wird sofort angewendet, um Ihnen zu helfen, Ihren Garten zu verbessern.'
          },
          {
            question: 'Funktioniert der BUMP Code auf alle Fast Buds Samen?',
            answer: 'Ja! Der BUMP Promo-Code bietet 15% Rabatt auf den gesamten Fast Buds Katalog, einschließlich ihrer ertragreichsten Autoflowering-Sorten, neuen Veröffentlichungen und limitierten Editionen. Alle Samen sind perfekt für ernsthafte Züchter, die upgraden möchten.'
          },
          {
            question: 'Kann ich den BUMP Gutschein mehrmals verwenden?',
            answer: 'Absolut! Im Gegensatz zu vielen einmaligen Promo-Codes kann der Fast Buds BUMP Rabattcode bei mehreren Bestellungen verwendet werden. Es gibt keine Begrenzung, wie oft Sie 15% sparen können, während Sie Ihren Anbaubetrieb upgraden.'
          },
          {
            question: 'Hat dieser Fast Buds Promo-Code ein Ablaufdatum?',
            answer: 'Nein, der BUMP Code läuft nie ab. Dieser dauerhafte 15% Rabatt ist für alle ernsthaften Fast Buds Züchter verfügbar, perfekt für kontinuierliche Gartenverbesserung das ganze Jahr über.'
          },
          {
            question: 'Gibt es eine Mindestbestellung, um den BUMP Code zu verwenden?',
            answer: 'Kein Mindestkauf erforderlich. Ob Sie ein einzelnes 3er-Pack kaufen, um eine neue Sorte zu testen, oder eine große Bestellung für ein großes Upgrade aufgeben, der BUMP Code spart Ihnen 15% bei Bestellungen jeder Größe.'
          }
        ]
      },
      es: {
        title: 'Mejora Tu Jardín - 15% en Semillas Premium',
        description: '¡Dale a tu cuarto de cultivo una mejora seria! Obtén 15% de descuento en genética de primera de Fast Buds y aumenta tus cosechas.',
        slug: 'es/cupon/mejora-tu-jardin-15-semillas-premium',
        longDescription: 'El código de descuento Fast Buds BUMP es tu boleto para mejorar tu juego de cultivo mientras ahorras 15% en semillas de cannabis autoflorecientes premium. Este poderoso código promocional de Fast Buds ayuda a cultivadores serios a aumentar sus rendimientos y calidad proporcionando valor excepcional en genética ganadora de campeonatos. Ya sea que busques llevar tu configuración interior al siguiente nivel o maximizar tus cosechas al aire libre, el código de cupón BUMP hace que el cultivo premium sea más asequible. Fast Buds se ha establecido como líder de la industria en genética autofloreciente, con múltiples victorias en la Cannabis Cup y una reputación por producir consistentemente variedades de alto rendimiento y potentes. Este descuento de Fast Buds se aplica a su gama completa de semillas premium, incluyendo variedades de alto rendimiento como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto y Gelato Auto. El ahorro del 15% significa más recursos para nutrientes avanzados, iluminación superior o simplemente más semillas para diversificar y mejorar tu jardín.',
        features: [
          'Ahorra 15% en todas las semillas autoflorecientes premium de Fast Buds para mejorar tu jardín',
          'Acceso a genética ganadora de campeonatos incluyendo variedades premiadas de Cannabis Cup',
          'Uso ilimitado - aplica este código de descuento Fast Buds para maximizar cada pedido',
          'No se requiere compra mínima - ahorra en cualquier tamaño de pedido para tu mejora de cultivo',
          'Nunca expira - este código promocional de Fast Buds permanece activo para mejora continua',
          'Compatible con favoritos de alto rendimiento: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfecto para cultivadores serios que buscan aumentar rendimientos y calidad'
        ],
        faq: [
          {
            question: '¿Cómo aplico el cupón Fast Buds BUMP al pagar?',
            answer: 'Simplemente haz clic en el botón "Copiar Código" para copiar BUMP a tu portapapeles. Luego visita la tienda oficial de Fast Buds, agrega tus semillas de mejora premium al carrito y pega el código en el campo de código promocional al pagar. Tu descuento del 15% se aplicará inmediatamente para ayudarte a mejorar tu jardín.'
          },
          {
            question: '¿Funciona el código BUMP en todas las semillas Fast Buds?',
            answer: '¡Sí! El código promocional BUMP ofrece 15% de descuento en todo el catálogo de Fast Buds, incluyendo sus variedades autoflorecientes de mayor rendimiento, nuevos lanzamientos y genética de edición limitada. Todas las semillas son perfectas para cultivadores serios que buscan mejorar.'
          },
          {
            question: '¿Puedo usar el cupón BUMP varias veces?',
            answer: '¡Absolutamente! A diferencia de muchos códigos promocionales de un solo uso, el código de descuento Fast Buds BUMP puede usarse en múltiples pedidos. No hay límite en cuántas veces puedes ahorrar 15% mientras mejoras tu operación de cultivo.'
          },
          {
            question: '¿Este código promocional de Fast Buds tiene fecha de vencimiento?',
            answer: 'No, el código BUMP nunca expira. Este descuento permanente del 15% está disponible para todos los cultivadores serios de Fast Buds, perfecto para mejora continua del jardín durante todo el año.'
          },
          {
            question: '¿Hay un pedido mínimo para usar el código BUMP?',
            answer: 'No se requiere compra mínima. Ya sea que compres un solo paquete de 3 para probar una nueva variedad o hagas un pedido grande para una mejora importante, el código BUMP te ahorrará 15% en pedidos de cualquier tamaño.'
          }
        ]
      },
      pt: {
        title: 'Melhore Seu Jardim - 15% em Sementes Premium',
        description: 'Dê ao seu espaço de cultivo uma melhoria séria! Ganhe 15% de desconto na genética top da Fast Buds e aumente suas colheitas.',
        slug: 'pt/cupom/melhore-seu-jardim-15-sementes-premium',
        longDescription: 'O código de desconto Fast Buds BUMP é seu ingresso para melhorar seu jogo de cultivo enquanto economiza 15% em sementes de cannabis autoflorescentes premium. Este poderoso código promocional da Fast Buds ajuda cultivadores sérios a aumentar seus rendimentos e qualidade fornecendo valor excepcional em genética vencedora de campeonatos. Seja procurando levar sua configuração interna para o próximo nível ou maximizar suas colheitas ao ar livre, o código de cupom BUMP torna o cultivo premium mais acessível. A Fast Buds se estabeleceu como líder da indústria em genética autoflorescente, com múltiplas vitórias na Cannabis Cup e uma reputação por produzir consistentemente variedades de alto rendimento e potentes. Este desconto da Fast Buds se aplica a sua gama completa de sementes premium, incluindo variedades de alto desempenho como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. A economia de 15% significa mais recursos para nutrientes avançados, iluminação superior ou simplesmente mais sementes para diversificar e melhorar seu jardim.',
        features: [
          'Economize 15% em todas as sementes autoflorescentes premium da Fast Buds para melhorar seu jardim',
          'Acesso a genética vencedora de campeonatos incluindo variedades premiadas da Cannabis Cup',
          'Uso ilimitado - aplique este código de desconto Fast Buds para maximizar cada pedido',
          'Não é necessária compra mínima - economize em qualquer tamanho de pedido para sua melhoria de cultivo',
          'Nunca expira - este código promocional da Fast Buds permanece ativo para melhoria contínua',
          'Compatível com favoritos de alto rendimento: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfeito para cultivadores sérios que buscam aumentar rendimentos e qualidade'
        ],
        faq: [
          {
            question: 'Como aplico o cupom Fast Buds BUMP no checkout?',
            answer: 'Simplesmente clique no botão "Copiar Código" para copiar BUMP para sua área de transferência. Em seguida, visite a loja oficial da Fast Buds, adicione suas sementes de melhoria premium ao carrinho e cole o código no campo de código promocional no checkout. Seu desconto de 15% será aplicado imediatamente para ajudá-lo a melhorar seu jardim.'
          },
          {
            question: 'O código BUMP funciona em todas as sementes Fast Buds?',
            answer: 'Sim! O código promocional BUMP oferece 15% de desconto em todo o catálogo da Fast Buds, incluindo suas variedades autoflorescentes de maior rendimento, novos lançamentos e genética de edição limitada. Todas as sementes são perfeitas para cultivadores sérios que buscam melhorar.'
          },
          {
            question: 'Posso usar o cupom BUMP várias vezes?',
            answer: 'Absolutamente! Ao contrário de muitos códigos promocionais de uso único, o código de desconto Fast Buds BUMP pode ser usado em vários pedidos. Não há limite para quantas vezes você pode economizar 15% enquanto melhora sua operação de cultivo.'
          },
          {
            question: 'Este código promocional da Fast Buds tem data de validade?',
            answer: 'Não, o código BUMP nunca expira. Este desconto permanente de 15% está disponível para todos os cultivadores sérios da Fast Buds, perfeito para melhoria contínua do jardim durante todo o ano.'
          },
          {
            question: 'Há um pedido mínimo para usar o código BUMP?',
            answer: 'Nenhuma compra mínima é necessária. Seja comprando um único pacote de 3 para testar uma nova variedade ou fazendo um grande pedido para uma melhoria importante, o código BUMP economizará 15% em pedidos de qualquer tamanho.'
          }
        ]
      },
      fr: {
        title: 'Améliorez Votre Jardin - 15% sur Graines Premium',
        description: 'Donnez à votre espace de culture une sérieuse amélioration! Obtenez 15% de réduction sur la génétique haut de gamme Fast Buds et augmentez vos rendements.',
        slug: 'fr/coupon/ameliorez-votre-jardin-15-graines-premium',
        longDescription: 'Le code de réduction Fast Buds BUMP est votre ticket pour améliorer votre jeu de culture tout en économisant 15% sur les graines de cannabis autofloraison premium. Ce puissant code promo Fast Buds aide les cultivateurs sérieux à augmenter leurs rendements et leur qualité en offrant une valeur exceptionnelle sur la génétique gagnante de championnats. Que vous cherchiez à faire passer votre installation intérieure au niveau supérieur ou à maximiser vos récoltes extérieures, le code coupon BUMP rend la culture premium plus abordable. Fast Buds s\'est établi comme leader de l\'industrie en génétique autofloraison, avec plusieurs victoires à la Cannabis Cup et une réputation de produire constamment des variétés à haut rendement et puissantes. Cette réduction Fast Buds s\'applique à leur gamme complète de graines premium, y compris des variétés haute performance comme Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto et Gelato Auto. Les 15% d\'économies signifient plus de ressources pour les nutriments avancés, l\'éclairage supérieur ou simplement plus de graines pour diversifier et améliorer votre jardin.',
        features: [
          'Économisez 15% sur toutes les graines autofloraison premium Fast Buds pour améliorer votre jardin',
          'Accès à la génétique gagnante de championnats incluant les variétés primées de la Cannabis Cup',
          'Utilisation illimitée - appliquez ce code de réduction Fast Buds pour maximiser chaque commande',
          'Aucun achat minimum requis - économisez sur toute taille de commande pour votre amélioration de culture',
          'N\'expire jamais - ce code promo Fast Buds reste actif pour une amélioration continue',
          'Compatible avec les favoris à haut rendement: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Parfait pour les cultivateurs sérieux cherchant à augmenter rendements et qualité'
        ],
        faq: [
          {
            question: 'Comment appliquer le coupon Fast Buds BUMP lors du paiement?',
            answer: 'Cliquez simplement sur le bouton "Copier le Code" pour copier BUMP dans votre presse-papiers. Ensuite, visitez la boutique officielle Fast Buds, ajoutez vos graines d\'amélioration premium au panier et collez le code dans le champ code promo lors du paiement. Votre réduction de 15% sera appliquée immédiatement pour vous aider à améliorer votre jardin.'
          },
          {
            question: 'Le code BUMP fonctionne-t-il sur toutes les graines Fast Buds?',
            answer: 'Oui! Le code promo BUMP offre 15% de réduction sur l\'ensemble du catalogue Fast Buds, y compris leurs variétés autofloraison les plus productives, les nouvelles sorties et la génétique en édition limitée. Toutes les graines sont parfaites pour les cultivateurs sérieux cherchant à améliorer.'
          },
          {
            question: 'Puis-je utiliser le coupon BUMP plusieurs fois?',
            answer: 'Absolument! Contrairement à de nombreux codes promotionnels à usage unique, le code de réduction Fast Buds BUMP peut être utilisé sur plusieurs commandes. Il n\'y a aucune limite au nombre de fois où vous pouvez économiser 15% tout en améliorant votre opération de culture.'
          },
          {
            question: 'Ce code promo Fast Buds a-t-il une date d\'expiration?',
            answer: 'Non, le code BUMP n\'expire jamais. Cette réduction permanente de 15% est disponible pour tous les cultivateurs sérieux de Fast Buds, parfaite pour une amélioration continue du jardin tout au long de l\'année.'
          },
          {
            question: 'Y a-t-il une commande minimum pour utiliser le code BUMP?',
            answer: 'Aucun achat minimum n\'est requis. Que vous achetiez un seul pack de 3 pour tester une nouvelle variété ou que vous fassiez une grosse commande pour une amélioration majeure, le code BUMP vous fera économiser 15% sur les commandes de toute taille.'
          }
        ]
      },
      it: {
        title: 'Migliora Il Tuo Giardino - 15% su Semi Premium',
        description: 'Dai al tuo spazio di coltivazione un serio upgrade! Ottieni il 15% di sconto sulla genetica top di Fast Buds e aumenta i tuoi raccolti.',
        slug: 'it/coupon/migliora-tuo-giardino-15-semi-premium',
        longDescription: 'Il codice sconto Fast Buds BUMP è il tuo biglietto per migliorare il tuo gioco di coltivazione risparmiando il 15% sui semi di cannabis autofiorenti premium. Questo potente codice promozionale Fast Buds aiuta i coltivatori seri ad aumentare i loro rendimenti e qualità fornendo valore eccezionale sulla genetica vincitrice di campionati. Che tu stia cercando di portare la tua configurazione indoor al livello successivo o massimizzare i tuoi raccolti outdoor, il codice coupon BUMP rende la coltivazione premium più accessibile. Fast Buds si è affermata come leader del settore in genetica autofiorente, con multiple vittorie alla Cannabis Cup e una reputazione per produrre costantemente varietà ad alto rendimento e potenti. Questo sconto Fast Buds si applica alla loro gamma completa di semi premium, incluse varietà ad alte prestazioni come Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. Il risparmio del 15% significa più risorse per nutrienti avanzati, illuminazione superiore o semplicemente più semi per diversificare e migliorare il tuo giardino.',
        features: [
          'Risparmia il 15% su tutti i semi autofiorenti premium Fast Buds per migliorare il tuo giardino',
          'Accesso a genetica vincitrice di campionati incluse varietà premiate della Cannabis Cup',
          'Utilizzo illimitato - applica questo codice sconto Fast Buds per massimizzare ogni ordine',
          'Nessun acquisto minimo richiesto - risparmia su qualsiasi dimensione ordine per il tuo upgrade di coltivazione',
          'Non scade mai - questo codice promo Fast Buds rimane attivo per miglioramento continuo',
          'Compatibile con favoriti ad alto rendimento: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfetto per coltivatori seri che cercano di aumentare rendimenti e qualità'
        ],
        faq: [
          {
            question: 'Come applico il coupon Fast Buds BUMP al checkout?',
            answer: 'Fai semplicemente clic sul pulsante "Copia Codice" per copiare BUMP negli appunti. Quindi visita lo store ufficiale Fast Buds, aggiungi i tuoi semi di upgrade premium al carrello e incolla il codice nel campo codice promo durante il checkout. Il tuo sconto del 15% verrà applicato immediatamente per aiutarti a migliorare il tuo giardino.'
          },
          {
            question: 'Il codice BUMP funziona su tutti i semi Fast Buds?',
            answer: 'Sì! Il codice promo BUMP offre il 15% di sconto sull\'intero catalogo Fast Buds, incluse le loro varietà autofiorenti più produttive, nuovi lanci e genetica in edizione limitata. Tutti i semi sono perfetti per coltivatori seri che cercano di migliorare.'
          },
          {
            question: 'Posso usare il coupon BUMP più volte?',
            answer: 'Assolutamente! A differenza di molti codici promozionali monouso, il codice sconto Fast Buds BUMP può essere utilizzato su più ordini. Non c\'è limite a quante volte puoi risparmiare il 15% mentre migliori la tua operazione di coltivazione.'
          },
          {
            question: 'Questo codice promo Fast Buds ha una data di scadenza?',
            answer: 'No, il codice BUMP non scade mai. Questo sconto permanente del 15% è disponibile per tutti i coltivatori seri di Fast Buds, perfetto per miglioramento continuo del giardino durante tutto l\'anno.'
          },
          {
            question: 'C\'è un ordine minimo per usare il codice BUMP?',
            answer: 'Nessun acquisto minimo è richiesto. Che tu stia comprando un singolo pacchetto da 3 per testare una nuova varietà o facendo un grande ordine per un upgrade importante, il codice BUMP ti farà risparmiare il 15% su ordini di qualsiasi dimensione.'
          }
        ]
      },
    },
  },
  {
    id: '8',
    code: '4EVA',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    usageCount: 18,
    neverExpires: true,
    image: '/images/coupons/fastbuds.png',
    content: {
      en: {
        title: 'Forever Grower Deal - 15% Off For Life',
        description: 'For growers who never stop! Enjoy 15% off Fast Buds premium seeds. Because growing is forever, and so are the savings.',
        slug: 'en/coupon/forever-grower-deal-15-off-for-life',
        longDescription: 'The Fast Buds 4EVA discount code represents a lifetime commitment to savings and quality cultivation with 15% off premium autoflowering cannabis seeds. This permanent Fast Buds promo code is designed for dedicated growers who understand that cultivation is not just a hobby—it\'s a way of life. Whether you\'re a veteran cultivator with years of experience or just beginning your perpetual growing journey, the 4EVA coupon code ensures you\'ll always have access to championship genetics at reduced prices. Fast Buds has built an impressive legacy as one of the world\'s premier breeders of autoflowering genetics, with multiple Cannabis Cup victories and a loyal global community. This Fast Buds discount applies forever to their entire catalog of premium seeds, including legendary strains like Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto, and Gelato Auto. The 15% savings accumulate with every order, meaning more budget for equipment upgrades, nutrients, or expanding your perpetual seed collection. Grow forever with this exclusive lifetime promo code.',
        features: [
          'Save 15% on all Fast Buds premium autoflowering seeds for your entire growing life',
          'Access to championship-winning genetics including Cannabis Cup award winners',
          'Unlimited lifetime usage - apply this Fast Buds discount code to every single order',
          'No minimum purchase required - lifetime savings on orders of any size',
          'Truly never expires - this Fast Buds promo code is yours forever',
          'Compatible with legendary strains: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfect for dedicated growers committed to the cultivation lifestyle'
        ],
        faq: [
          {
            question: 'How do I apply the Fast Buds 4EVA coupon at checkout?',
            answer: 'Simply click the "Copy Code" button to copy 4EVA to your clipboard. Then visit the official Fast Buds store, add your forever seeds to the cart, and paste the code in the promo code field at checkout. Your lifetime 15% discount will be applied immediately.'
          },
          {
            question: 'Does the 4EVA code work on all Fast Buds seeds?',
            answer: 'Yes! The 4EVA promo code offers 15% off the entire Fast Buds catalog forever, including their most popular autoflowering strains, new releases, and limited edition genetics. Your lifetime discount applies to everything.'
          },
          {
            question: 'Can I really use the 4EVA coupon forever?',
            answer: 'Absolutely! Unlike temporary promotional codes, the Fast Buds 4EVA discount code has no expiration date and unlimited usage. You can save 15% on every order for your entire growing career—truly forever.'
          },
          {
            question: 'Will this Fast Buds promo code ever expire?',
            answer: 'No, the 4EVA code will never expire. This permanent lifetime discount is designed for dedicated growers who make cultivation a lifelong passion. Use it today, next month, next year, and beyond.'
          },
          {
            question: 'Is there a minimum order for lifetime savings?',
            answer: 'No minimum purchase is required. Whether you\'re buying a single 3-pack or stocking up for years of growing, the 4EVA code will save you 15% on every order, forever.'
          }
        ]
      },
      de: {
        title: 'Für Immer Züchter Deal - 15% Rabatt Fürs Leben',
        description: 'Für Züchter, die nie aufhören! Genießen Sie 15% Rabatt auf Fast Buds Premium-Samen. Denn Züchten ist für immer, und die Ersparnisse auch.',
        slug: 'de/coupon/fur-immer-zuchter-deal-15-rabatt-furs-leben',
        longDescription: 'Der Fast Buds 4EVA Rabattcode repräsentiert ein lebenslanges Engagement für Ersparnisse und Qualitätsanbau mit 15% Rabatt auf Premium-Autoflowering-Cannabis-Samen. Dieser permanente Fast Buds Promo-Code ist für engagierte Züchter konzipiert, die verstehen, dass Anbau nicht nur ein Hobby ist—es ist eine Lebensweise. Ob Sie ein erfahrener Züchter mit jahrelanger Erfahrung sind oder gerade Ihre dauerhafte Anbau-Reise beginnen, der 4EVA Gutscheincode stellt sicher, dass Sie immer Zugang zu Meisterschafts-Genetik zu reduzierten Preisen haben. Fast Buds hat ein beeindruckendes Erbe als einer der weltweit führenden Züchter von Autoflowering-Genetik aufgebaut, mit mehreren Cannabis Cup Siegen und einer treuen globalen Gemeinschaft. Dieser Fast Buds Rabatt gilt für immer für ihren gesamten Katalog von Premium-Samen, einschließlich legendärer Sorten wie Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto und Gelato Auto. Die 15% Ersparnis summieren sich bei jeder Bestellung, was mehr Budget für Ausrüstungs-Upgrades, Nährstoffe oder die Erweiterung Ihrer dauerhaften Samensammlung bedeutet.',
        features: [
          'Sparen Sie 15% auf alle Fast Buds Premium-Autoflowering-Samen für Ihr gesamtes Anbau-Leben',
          'Zugang zu meisterschaftsgewinnender Genetik einschließlich Cannabis Cup Preisträgern',
          'Unbegrenzte lebenslange Nutzung - wenden Sie diesen Fast Buds Rabattcode bei jeder einzelnen Bestellung an',
          'Keine Mindestbestellung erforderlich - lebenslange Ersparnisse bei Bestellungen jeder Größe',
          'Läuft wirklich nie ab - dieser Fast Buds Promo-Code gehört Ihnen für immer',
          'Kompatibel mit legendären Sorten: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfekt für engagierte Züchter, die dem Anbau-Lebensstil verpflichtet sind'
        ],
        faq: [
          {
            question: 'Wie wende ich den Fast Buds 4EVA Gutschein beim Checkout an?',
            answer: 'Klicken Sie einfach auf die Schaltfläche "Code kopieren", um 4EVA in Ihre Zwischenablage zu kopieren. Besuchen Sie dann den offiziellen Fast Buds Store, fügen Sie Ihre Für-Immer-Samen zum Warenkorb hinzu und fügen Sie den Code im Promo-Code-Feld beim Checkout ein. Ihr lebenslanger 15% Rabatt wird sofort angewendet.'
          },
          {
            question: 'Funktioniert der 4EVA Code auf alle Fast Buds Samen?',
            answer: 'Ja! Der 4EVA Promo-Code bietet für immer 15% Rabatt auf den gesamten Fast Buds Katalog, einschließlich ihrer beliebtesten Autoflowering-Sorten, neuen Veröffentlichungen und limitierten Editionen. Ihr lebenslanger Rabatt gilt für alles.'
          },
          {
            question: 'Kann ich den 4EVA Gutschein wirklich für immer verwenden?',
            answer: 'Absolut! Im Gegensatz zu temporären Promo-Codes hat der Fast Buds 4EVA Rabattcode kein Ablaufdatum und unbegrenzte Nutzung. Sie können bei jeder Bestellung für Ihre gesamte Anbau-Karriere 15% sparen—wirklich für immer.'
          },
          {
            question: 'Wird dieser Fast Buds Promo-Code jemals ablaufen?',
            answer: 'Nein, der 4EVA Code wird nie ablaufen. Dieser permanente lebenslange Rabatt ist für engagierte Züchter konzipiert, die Anbau zu einer lebenslangen Leidenschaft machen. Verwenden Sie ihn heute, nächsten Monat, nächstes Jahr und darüber hinaus.'
          },
          {
            question: 'Gibt es eine Mindestbestellung für lebenslange Ersparnisse?',
            answer: 'Kein Mindestkauf erforderlich. Ob Sie ein einzelnes 3er-Pack kaufen oder sich für Jahre des Anbaus eindecken, der 4EVA Code spart Ihnen bei jeder Bestellung 15%, für immer.'
          }
        ]
      },
      es: {
        title: 'Oferta Cultivador Eterno - 15% Descuento Para Siempre',
        description: '¡Para cultivadores que nunca paran! Disfruta del 15% de descuento en semillas premium de Fast Buds. Porque cultivar es para siempre, y los ahorros también.',
        slug: 'es/cupon/oferta-cultivador-eterno-15-descuento-siempre',
        longDescription: 'El código de descuento Fast Buds 4EVA representa un compromiso de por vida con el ahorro y el cultivo de calidad con 15% de descuento en semillas de cannabis autoflorecientes premium. Este código promocional permanente de Fast Buds está diseñado para cultivadores dedicados que entienden que el cultivo no es solo un pasatiempo, es un estilo de vida. Ya seas un cultivador veterano con años de experiencia o estés comenzando tu viaje de cultivo perpetuo, el código de cupón 4EVA asegura que siempre tendrás acceso a genética de campeonato a precios reducidos. Fast Buds ha construido un legado impresionante como uno de los principales criadores mundiales de genética autofloreciente, con múltiples victorias en la Cannabis Cup y una comunidad global leal. Este descuento de Fast Buds se aplica para siempre a todo su catálogo de semillas premium, incluyendo variedades legendarias como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto y Gelato Auto. El ahorro del 15% se acumula con cada pedido, lo que significa más presupuesto para mejoras de equipo, nutrientes o expandir tu colección de semillas perpetua.',
        features: [
          'Ahorra 15% en todas las semillas autoflorecientes premium de Fast Buds para toda tu vida de cultivo',
          'Acceso a genética ganadora de campeonatos incluyendo ganadores de Cannabis Cup',
          'Uso ilimitado de por vida - aplica este código de descuento Fast Buds en cada pedido',
          'No se requiere compra mínima - ahorros de por vida en pedidos de cualquier tamaño',
          'Verdaderamente nunca expira - este código promocional de Fast Buds es tuyo para siempre',
          'Compatible con variedades legendarias: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfecto para cultivadores dedicados comprometidos con el estilo de vida del cultivo'
        ],
        faq: [
          {
            question: '¿Cómo aplico el cupón Fast Buds 4EVA al pagar?',
            answer: 'Simplemente haz clic en el botón "Copiar Código" para copiar 4EVA a tu portapapeles. Luego visita la tienda oficial de Fast Buds, agrega tus semillas para siempre al carrito y pega el código en el campo de código promocional al pagar. Tu descuento de por vida del 15% se aplicará inmediatamente.'
          },
          {
            question: '¿Funciona el código 4EVA en todas las semillas Fast Buds?',
            answer: '¡Sí! El código promocional 4EVA ofrece 15% de descuento para siempre en todo el catálogo de Fast Buds, incluyendo sus variedades autoflorecientes más populares, nuevos lanzamientos y genética de edición limitada. Tu descuento de por vida se aplica a todo.'
          },
          {
            question: '¿Realmente puedo usar el cupón 4EVA para siempre?',
            answer: '¡Absolutamente! A diferencia de códigos promocionales temporales, el código de descuento Fast Buds 4EVA no tiene fecha de vencimiento y uso ilimitado. Puedes ahorrar 15% en cada pedido durante toda tu carrera de cultivo, verdaderamente para siempre.'
          },
          {
            question: '¿Este código promocional de Fast Buds expirará alguna vez?',
            answer: 'No, el código 4EVA nunca expirará. Este descuento permanente de por vida está diseñado para cultivadores dedicados que hacen del cultivo una pasión de por vida. Úsalo hoy, el próximo mes, el próximo año y más allá.'
          },
          {
            question: '¿Hay un pedido mínimo para ahorros de por vida?',
            answer: 'No se requiere compra mínima. Ya sea que compres un solo paquete de 3 o te abastez cas para años de cultivo, el código 4EVA te ahorrará 15% en cada pedido, para siempre.'
          }
        ]
      },
      pt: {
        title: 'Oferta Cultivador Eterno - 15% Desconto Para Sempre',
        description: 'Para cultivadores que nunca param! Aproveite 15% de desconto em sementes premium da Fast Buds. Porque cultivar é para sempre, e as economias também.',
        slug: 'pt/cupom/oferta-cultivador-eterno-15-desconto-sempre',
        longDescription: 'O código de desconto Fast Buds 4EVA representa um compromisso vitalício com economia e cultivo de qualidade com 15% de desconto em sementes de cannabis autoflorescentes premium. Este código promocional permanente da Fast Buds é projetado para cultivadores dedicados que entendem que cultivo não é apenas um hobby—é um estilo de vida. Seja você um cultivador veterano com anos de experiência ou esteja apenas começando sua jornada de cultivo perpétuo, o código de cupom 4EVA garante que você sempre terá acesso a genética de campeonato a preços reduzidos. A Fast Buds construiu um legado impressionante como um dos principais criadores mundiais de genética autoflorescente, com múltiplas vitórias na Cannabis Cup e uma comunidade global leal. Este desconto da Fast Buds se aplica para sempre a todo seu catálogo de sementes premium, incluindo variedades lendárias como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. A economia de 15% se acumula com cada pedido, significando mais orçamento para melhorias de equipamento, nutrientes ou expandir sua coleção de sementes perpétua.',
        features: [
          'Economize 15% em todas as sementes autoflorescentes premium da Fast Buds para toda sua vida de cultivo',
          'Acesso a genética vencedora de campeonatos incluindo vencedores da Cannabis Cup',
          'Uso ilimitado vitalício - aplique este código de desconto Fast Buds em cada pedido',
          'Não é necessária compra mínima - economias vitalícias em pedidos de qualquer tamanho',
          'Verdadeiramente nunca expira - este código promocional da Fast Buds é seu para sempre',
          'Compatível com variedades lendárias: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfeito para cultivadores dedicados comprometidos com o estilo de vida do cultivo'
        ],
        faq: [
          {
            question: 'Como aplico o cupom Fast Buds 4EVA no checkout?',
            answer: 'Simplesmente clique no botão "Copiar Código" para copiar 4EVA para sua área de transferência. Em seguida, visite a loja oficial da Fast Buds, adicione suas sementes para sempre ao carrinho e cole o código no campo de código promocional no checkout. Seu desconto vitalício de 15% será aplicado imediatamente.'
          },
          {
            question: 'O código 4EVA funciona em todas as sementes Fast Buds?',
            answer: 'Sim! O código promocional 4EVA oferece 15% de desconto para sempre em todo o catálogo da Fast Buds, incluindo suas variedades autoflorescentes mais populares, novos lançamentos e genética de edição limitada. Seu desconto vitalício se aplica a tudo.'
          },
          {
            question: 'Posso realmente usar o cupom 4EVA para sempre?',
            answer: 'Absolutamente! Ao contrário de códigos promocionais temporários, o código de desconto Fast Buds 4EVA não tem data de validade e uso ilimitado. Você pode economizar 15% em cada pedido durante toda sua carreira de cultivo—verdadeiramente para sempre.'
          },
          {
            question: 'Este código promocional da Fast Buds expirará alguma vez?',
            answer: 'Não, o código 4EVA nunca expirará. Este desconto permanente vitalício é projetado para cultivadores dedicados que fazem do cultivo uma paixão vitalícia. Use hoje, no próximo mês, no próximo ano e além.'
          },
          {
            question: 'Há um pedido mínimo para economias vitalícias?',
            answer: 'Nenhuma compra mínima é necessária. Seja comprando um único pacote de 3 ou se abastecendo para anos de cultivo, o código 4EVA economizará 15% em cada pedido, para sempre.'
          }
        ]
      },
      fr: {
        title: 'Offre Cultivateur Éternel - 15% de Réduction À Vie',
        description: 'Pour les cultivateurs qui ne s\'arrêtent jamais! Profitez de 15% de réduction sur les graines premium Fast Buds. Parce que cultiver c\'est pour toujours, et les économies aussi.',
        slug: 'fr/coupon/offre-cultivateur-eternel-15-reduction-vie',
        longDescription: 'Le code de réduction Fast Buds 4EVA représente un engagement à vie pour les économies et la culture de qualité avec 15% de réduction sur les graines de cannabis autofloraison premium. Ce code promo permanent Fast Buds est conçu pour les cultivateurs dévoués qui comprennent que la culture n\'est pas qu\'un passe-temps—c\'est un mode de vie. Que vous soyez un cultivateur vétéran avec des années d\'expérience ou que vous commenciez votre parcours de culture perpétuelle, le code coupon 4EVA garantit que vous aurez toujours accès à la génétique de championnat à prix réduits. Fast Buds a construit un héritage impressionnant comme l\'un des sélectionneurs de génétique autofloraison les plus réputés au monde, avec plusieurs victoires à la Cannabis Cup et une communauté mondiale fidèle. Cette réduction Fast Buds s\'applique pour toujours à tout leur catalogue de graines premium, y compris des variétés légendaires comme Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto et Gelato Auto. Les 15% d\'économies s\'accumulent à chaque commande, ce qui signifie plus de budget pour les améliorations d\'équipement, les nutriments ou l\'expansion de votre collection de graines perpétuelle.',
        features: [
          'Économisez 15% sur toutes les graines autofloraison premium Fast Buds pour toute votre vie de culture',
          'Accès à la génétique gagnante de championnats incluant les vainqueurs de la Cannabis Cup',
          'Utilisation illimitée à vie - appliquez ce code de réduction Fast Buds à chaque commande',
          'Aucun achat minimum requis - économies à vie sur les commandes de toute taille',
          'Ne expire vraiment jamais - ce code promo Fast Buds est le vôtre pour toujours',
          'Compatible avec les variétés légendaires: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Parfait pour les cultivateurs dévoués engagés dans le mode de vie de la culture'
        ],
        faq: [
          {
            question: 'Comment appliquer le coupon Fast Buds 4EVA lors du paiement?',
            answer: 'Cliquez simplement sur le bouton "Copier le Code" pour copier 4EVA dans votre presse-papiers. Ensuite, visitez la boutique officielle Fast Buds, ajoutez vos graines pour toujours au panier et collez le code dans le champ code promo lors du paiement. Votre réduction à vie de 15% sera appliquée immédiatement.'
          },
          {
            question: 'Le code 4EVA fonctionne-t-il sur toutes les graines Fast Buds?',
            answer: 'Oui! Le code promo 4EVA offre 15% de réduction pour toujours sur l\'ensemble du catalogue Fast Buds, y compris leurs variétés autofloraison les plus populaires, les nouvelles sorties et la génétique en édition limitée. Votre réduction à vie s\'applique à tout.'
          },
          {
            question: 'Puis-je vraiment utiliser le coupon 4EVA pour toujours?',
            answer: 'Absolument! Contrairement aux codes promotionnels temporaires, le code de réduction Fast Buds 4EVA n\'a pas de date d\'expiration et une utilisation illimitée. Vous pouvez économiser 15% sur chaque commande pendant toute votre carrière de culture—vraiment pour toujours.'
          },
          {
            question: 'Ce code promo Fast Buds expirera-t-il un jour?',
            answer: 'Non, le code 4EVA n\'expirera jamais. Cette réduction permanente à vie est conçue pour les cultivateurs dévoués qui font de la culture une passion à vie. Utilisez-le aujourd\'hui, le mois prochain, l\'année prochaine et au-delà.'
          },
          {
            question: 'Y a-t-il une commande minimum pour les économies à vie?',
            answer: 'Aucun achat minimum n\'est requis. Que vous achetiez un seul pack de 3 ou que vous vous approvisionniez pour des années de culture, le code 4EVA vous fera économiser 15% sur chaque commande, pour toujours.'
          }
        ]
      },
      it: {
        title: 'Offerta Coltivatore Eterno - 15% Sconto Per Sempre',
        description: 'Per coltivatori che non si fermano mai! Goditi il 15% di sconto sui semi premium Fast Buds. Perché coltivare è per sempre, e i risparmi anche.',
        slug: 'it/coupon/offerta-coltivatore-eterno-15-sconto-sempre',
        longDescription: 'Il codice sconto Fast Buds 4EVA rappresenta un impegno a vita per risparmi e coltivazione di qualità con il 15% di sconto sui semi di cannabis autofiorenti premium. Questo codice promozionale permanente Fast Buds è progettato per coltivatori dedicati che capiscono che la coltivazione non è solo un hobby—è uno stile di vita. Che tu sia un coltivatore veterano con anni di esperienza o stia iniziando il tuo percorso di coltivazione perpetua, il codice coupon 4EVA garantisce che avrai sempre accesso a genetica da campionato a prezzi ridotti. Fast Buds ha costruito un impressionante eredità come uno dei principali allevatori mondiali di genetica autofiorente, con multiple vittorie alla Cannabis Cup e una comunità globale fedele. Questo sconto Fast Buds si applica per sempre a tutto il loro catalogo di semi premium, incluse varietà leggendarie come Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. Il risparmio del 15% si accumula con ogni ordine, il che significa più budget per aggiornamenti di attrezzature, nutrienti o espandere la tua collezione di semi perpetua.',
        features: [
          'Risparmia il 15% su tutti i semi autofiorenti premium Fast Buds per tutta la tua vita di coltivazione',
          'Accesso a genetica vincitrice di campionati inclusi i vincitori della Cannabis Cup',
          'Utilizzo illimitato a vita - applica questo codice sconto Fast Buds ad ogni ordine',
          'Nessun acquisto minimo richiesto - risparmi a vita su ordini di qualsiasi dimensione',
          'Veramente non scade mai - questo codice promo Fast Buds è tuo per sempre',
          'Compatibile con varietà leggendarie: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfetto per coltivatori dedicati impegnati nello stile di vita della coltivazione'
        ],
        faq: [
          {
            question: 'Come applico il coupon Fast Buds 4EVA al checkout?',
            answer: 'Fai semplicemente clic sul pulsante "Copia Codice" per copiare 4EVA negli appunti. Quindi visita lo store ufficiale Fast Buds, aggiungi i tuoi semi per sempre al carrello e incolla il codice nel campo codice promo durante il checkout. Il tuo sconto a vita del 15% verrà applicato immediatamente.'
          },
          {
            question: 'Il codice 4EVA funziona su tutti i semi Fast Buds?',
            answer: 'Sì! Il codice promo 4EVA offre il 15% di sconto per sempre sull\'intero catalogo Fast Buds, incluse le loro varietà autofiorenti più popolari, nuovi lanci e genetica in edizione limitata. Il tuo sconto a vita si applica a tutto.'
          },
          {
            question: 'Posso davvero usare il coupon 4EVA per sempre?',
            answer: 'Assolutamente! A differenza dei codici promozionali temporanei, il codice sconto Fast Buds 4EVA non ha data di scadenza e utilizzo illimitato. Puoi risparmiare il 15% su ogni ordine per tutta la tua carriera di coltivazione—veramente per sempre.'
          },
          {
            question: 'Questo codice promo Fast Buds scadrà mai?',
            answer: 'No, il codice 4EVA non scadrà mai. Questo sconto permanente a vita è progettato per coltivatori dedicati che fanno della coltivazione una passione a vita. Usalo oggi, il mese prossimo, l\'anno prossimo e oltre.'
          },
          {
            question: 'C\'è un ordine minimo per risparmi a vita?',
            answer: 'Nessun acquisto minimo è richiesto. Che tu stia comprando un singolo pacchetto da 3 o ti stia rifornendo per anni di coltivazione, il codice 4EVA ti farà risparmiare il 15% su ogni ordine, per sempre.'
          }
        ]
      },
    },
  },
  {
    id: '9',
    code: 'LOLZ',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    usageCount: 13,
    neverExpires: true,
    image: '/images/coupons/budlover.png',
    content: {
      en: {
        title: 'Laugh Out Loud Savings - 15% Off Fun Strains',
        description: 'Why so serious? Have some fun with 15% off! Perfect for those who love to laugh and grow premium Fast Buds genetics.',
        slug: 'en/coupon/laugh-out-loud-savings-15-off-fun-strains',
        longDescription: 'The Fast Buds LOLZ discount code brings joy to your cultivation journey with 15% off premium autoflowering cannabis seeds. This fun-loving Fast Buds promo code is perfect for growers who don\'t take themselves too seriously but still demand championship-quality genetics. Whether you\'re growing for personal enjoyment or sharing laughs with friends over your latest harvest, the LOLZ coupon code makes premium cultivation accessible and entertaining. Fast Buds has earned worldwide recognition as a leading breeder of autoflowering genetics, with multiple Cannabis Cup victories and a reputation for producing strains that deliver both quality and good times. This Fast Buds discount applies to their complete selection of premium seeds, including mood-lifting favorites like Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto, and Gelato Auto. The 15% savings means more budget for fun grow room accessories, quality nutrients, or simply more seeds to keep the good times rolling. Grow with a smile and save money with this entertaining promo code.',
        features: [
          'Save 15% on all Fast Buds premium autoflowering seeds for fun-filled growing',
          'Access to championship-winning genetics including Cannabis Cup award winners',
          'Unlimited usage - apply this Fast Buds discount code to every joyful order',
          'No minimum purchase required - laugh all the way to savings on any order size',
          'Never expires - this Fast Buds promo code keeps the fun going indefinitely',
          'Compatible with mood-lifting strains: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfect for growers who love to laugh and cultivate quality cannabis'
        ],
        faq: [
          {
            question: 'How do I apply the Fast Buds LOLZ coupon at checkout?',
            answer: 'Simply click the "Copy Code" button to copy LOLZ to your clipboard. Then visit the official Fast Buds store, add your fun seeds to the cart, and paste the code in the promo code field at checkout. Your 15% discount will be applied immediately, bringing a smile to your face.'
          },
          {
            question: 'Does the LOLZ code work on all Fast Buds seeds?',
            answer: 'Yes! The LOLZ promo code offers 15% off the entire Fast Buds catalog, including their most enjoyable autoflowering strains, new releases, and limited edition genetics. The fun applies to everything!'
          },
          {
            question: 'Can I use the LOLZ coupon multiple times?',
            answer: 'Absolutely! Unlike many single-use promotional codes, the Fast Buds LOLZ discount code can be used on multiple orders. There\'s no limit to how many times you can laugh your way to 15% savings.'
          },
          {
            question: 'Does this Fast Buds promo code have an expiration date?',
            answer: 'No, the LOLZ code never expires. This permanent 15% discount keeps the good times and savings rolling for all Fast Buds customers who appreciate quality and fun.'
          },
          {
            question: 'Is there a minimum order to use the LOLZ code?',
            answer: 'No minimum purchase is required. Whether you\'re buying a single 3-pack for a small fun project or stocking up for year-round entertainment, the LOLZ code will save you 15% on orders of any size.'
          }
        ]
      },
      de: {
        title: 'Lach-Laut-Ersparnis - 15% auf Spaß-Sorten',
        description: 'Warum so ernst? Haben Sie Spaß mit 15% Rabatt! Perfekt für diejenigen, die es lieben zu lachen und Premium Fast Buds Genetik anzubauen.',
        slug: 'de/coupon/lach-laut-ersparnis-15-spass-sorten',
        longDescription: 'Der Fast Buds LOLZ Rabattcode bringt Freude in Ihre Anbau-Reise mit 15% Rabatt auf Premium-Autoflowering-Cannabis-Samen. Dieser spaßliebende Fast Buds Promo-Code ist perfekt für Züchter, die sich nicht zu ernst nehmen, aber dennoch Meisterschafts-Qualitätsgenetik verlangen. Ob Sie für den persönlichen Genuss anbauen oder Lacher mit Freunden über Ihre neueste Ernte teilen, der LOLZ Gutscheincode macht Premium-Anbau zugänglich und unterhaltsam. Fast Buds hat weltweite Anerkennung als führender Züchter von Autoflowering-Genetik erlangt, mit mehreren Cannabis Cup Siegen und einem Ruf für die Produktion von Sorten, die sowohl Qualität als auch gute Zeiten liefern. Dieser Fast Buds Rabatt gilt für ihre komplette Auswahl an Premium-Samen, einschließlich stimmungsaufhellender Favoriten wie Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto und Gelato Auto. Die 15% Ersparnis bedeuten mehr Budget für lustige Growroom-Accessoires, hochwertige Nährstoffe oder einfach mehr Samen, um die guten Zeiten am Laufen zu halten.',
        features: [
          'Sparen Sie 15% auf alle Fast Buds Premium-Autoflowering-Samen für spaßerfüllten Anbau',
          'Zugang zu meisterschaftsgewinnender Genetik einschließlich Cannabis Cup Preisträgern',
          'Unbegrenzte Nutzung - wenden Sie diesen Fast Buds Rabattcode bei jeder freudigen Bestellung an',
          'Keine Mindestbestellung erforderlich - lachen Sie sich den Weg zu Ersparnissen bei jeder Bestellgröße',
          'Läuft nie ab - dieser Fast Buds Promo-Code hält den Spaß unbegrenzt am Laufen',
          'Kompatibel mit stimmungsaufhellenden Sorten: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfekt für Züchter, die es lieben zu lachen und qualitativ hochwertiges Cannabis anzubauen'
        ],
        faq: [
          {
            question: 'Wie wende ich den Fast Buds LOLZ Gutschein beim Checkout an?',
            answer: 'Klicken Sie einfach auf die Schaltfläche "Code kopieren", um LOLZ in Ihre Zwischenablage zu kopieren. Besuchen Sie dann den offiziellen Fast Buds Store, fügen Sie Ihre Spaß-Samen zum Warenkorb hinzu und fügen Sie den Code im Promo-Code-Feld beim Checkout ein. Ihr 15% Rabatt wird sofort angewendet und bringt ein Lächeln auf Ihr Gesicht.'
          },
          {
            question: 'Funktioniert der LOLZ Code auf alle Fast Buds Samen?',
            answer: 'Ja! Der LOLZ Promo-Code bietet 15% Rabatt auf den gesamten Fast Buds Katalog, einschließlich ihrer angenehmsten Autoflowering-Sorten, neuen Veröffentlichungen und limitierten Editionen. Der Spaß gilt für alles!'
          },
          {
            question: 'Kann ich den LOLZ Gutschein mehrmals verwenden?',
            answer: 'Absolut! Im Gegensatz zu vielen einmaligen Promo-Codes kann der Fast Buds LOLZ Rabattcode bei mehreren Bestellungen verwendet werden. Es gibt keine Begrenzung, wie oft Sie sich zu 15% Ersparnissen lachen können.'
          },
          {
            question: 'Hat dieser Fast Buds Promo-Code ein Ablaufdatum?',
            answer: 'Nein, der LOLZ Code läuft nie ab. Dieser dauerhafte 15% Rabatt hält die guten Zeiten und Ersparnisse für alle Fast Buds Kunden am Laufen, die Qualität und Spaß schätzen.'
          },
          {
            question: 'Gibt es eine Mindestbestellung, um den LOLZ Code zu verwenden?',
            answer: 'Kein Mindestkauf erforderlich. Ob Sie ein einzelnes 3er-Pack für ein kleines Spaßprojekt kaufen oder sich für ganzjährige Unterhaltung eindecken, der LOLZ Code spart Ihnen 15% bei Bestellungen jeder Größe.'
          }
        ]
      },
      es: {
        title: 'Ahorro Para Reír A Carcajadas - 15% en Variedades Divertidas',
        description: '¿Por qué tan serio? ¡Diviértete con 15% de descuento! Perfecto para quienes aman reír y cultivar genética premium de Fast Buds.',
        slug: 'es/cupon/ahorro-reir-carcajadas-15-variedades-divertidas',
        longDescription: 'El código de descuento Fast Buds LOLZ trae alegría a tu viaje de cultivo con 15% de descuento en semillas de cannabis autoflorecientes premium. Este código promocional amante de la diversión de Fast Buds es perfecto para cultivadores que no se toman demasiado en serio pero aún exigen genética de calidad de campeonato. Ya sea que cultives para disfrute personal o compartas risas con amigos sobre tu última cosecha, el código de cupón LOLZ hace que el cultivo premium sea accesible y entretenido. Fast Buds ha ganado reconocimiento mundial como criador líder de genética autofloreciente, con múltiples victorias en la Cannabis Cup y una reputación por producir variedades que entregan tanto calidad como buenos momentos. Este descuento de Fast Buds se aplica a su selección completa de semillas premium, incluyendo favoritos que mejoran el ánimo como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto y Gelato Auto. El ahorro del 15% significa más presupuesto para accesorios divertidos de cuarto de cultivo, nutrientes de calidad o simplemente más semillas para mantener los buenos tiempos rodando.',
        features: [
          'Ahorra 15% en todas las semillas autoflorecientes premium de Fast Buds para cultivo lleno de diversión',
          'Acceso a genética ganadora de campeonatos incluyendo ganadores de Cannabis Cup',
          'Uso ilimitado - aplica este código de descuento Fast Buds en cada pedido alegre',
          'No se requiere compra mínima - ríe todo el camino al ahorro en cualquier tamaño de pedido',
          'Nunca expira - este código promocional de Fast Buds mantiene la diversión indefinidamente',
          'Compatible con variedades que mejoran el ánimo: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfecto para cultivadores que aman reír y cultivar cannabis de calidad'
        ],
        faq: [
          {
            question: '¿Cómo aplico el cupón Fast Buds LOLZ al pagar?',
            answer: 'Simplemente haz clic en el botón "Copiar Código" para copiar LOLZ a tu portapapeles. Luego visita la tienda oficial de Fast Buds, agrega tus semillas divertidas al carrito y pega el código en el campo de código promocional al pagar. Tu descuento del 15% se aplicará inmediatamente, trayendo una sonrisa a tu rostro.'
          },
          {
            question: '¿Funciona el código LOLZ en todas las semillas Fast Buds?',
            answer: '¡Sí! El código promocional LOLZ ofrece 15% de descuento en todo el catálogo de Fast Buds, incluyendo sus variedades autoflorecientes más agradables, nuevos lanzamientos y genética de edición limitada. ¡La diversión se aplica a todo!'
          },
          {
            question: '¿Puedo usar el cupón LOLZ varias veces?',
            answer: '¡Absolutamente! A diferencia de muchos códigos promocionales de un solo uso, el código de descuento Fast Buds LOLZ puede usarse en múltiples pedidos. No hay límite en cuántas veces puedes reírte camino al 15% de ahorro.'
          },
          {
            question: '¿Este código promocional de Fast Buds tiene fecha de vencimiento?',
            answer: 'No, el código LOLZ nunca expira. Este descuento permanente del 15% mantiene los buenos tiempos y ahorros rodando para todos los clientes de Fast Buds que aprecian calidad y diversión.'
          },
          {
            question: '¿Hay un pedido mínimo para usar el código LOLZ?',
            answer: 'No se requiere compra mínima. Ya sea que compres un solo paquete de 3 para un pequeño proyecto divertido o te abastez cas para entretenimiento durante todo el año, el código LOLZ te ahorrará 15% en pedidos de cualquier tamaño.'
          }
        ]
      },
      pt: {
        title: 'Economia Para Rir Alto - 15% em Variedades Divertidas',
        description: 'Por que tão sério? Divirta-se com 15% de desconto! Perfeito para quem adora rir e cultivar genética premium da Fast Buds.',
        slug: 'pt/cupom/economia-rir-alto-15-variedades-divertidas',
        longDescription: 'O código de desconto Fast Buds LOLZ traz alegria à sua jornada de cultivo com 15% de desconto em sementes de cannabis autoflorescentes premium. Este código promocional amante da diversão da Fast Buds é perfeito para cultivadores que não se levam muito a sério mas ainda exigem genética de qualidade de campeonato. Seja cultivando para diversão pessoal ou compartilhando risadas com amigos sobre sua última colheita, o código de cupom LOLZ torna o cultivo premium acessível e divertido. A Fast Buds conquistou reconhecimento mundial como criador líder de genética autoflorescente, com múltiplas vitórias na Cannabis Cup e uma reputação por produzir variedades que entregam tanto qualidade quanto bons momentos. Este desconto da Fast Buds se aplica à sua seleção completa de sementes premium, incluindo favoritos que elevam o humor como Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. A economia de 15% significa mais orçamento para acessórios divertidos de espaço de cultivo, nutrientes de qualidade ou simplesmente mais sementes para manter os bons momentos rolando.',
        features: [
          'Economize 15% em todas as sementes autoflorescentes premium da Fast Buds para cultivo cheio de diversão',
          'Acesso a genética vencedora de campeonatos incluindo vencedores da Cannabis Cup',
          'Uso ilimitado - aplique este código de desconto Fast Buds em cada pedido alegre',
          'Não é necessária compra mínima - ria todo o caminho até a economia em qualquer tamanho de pedido',
          'Nunca expira - este código promocional da Fast Buds mantém a diversão indefinidamente',
          'Compatível com variedades que elevam o humor: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfeito para cultivadores que amam rir e cultivar cannabis de qualidade'
        ],
        faq: [
          {
            question: 'Como aplico o cupom Fast Buds LOLZ no checkout?',
            answer: 'Simplesmente clique no botão "Copiar Código" para copiar LOLZ para sua área de transferência. Em seguida, visite a loja oficial da Fast Buds, adicione suas sementes divertidas ao carrinho e cole o código no campo de código promocional no checkout. Seu desconto de 15% será aplicado imediatamente, trazendo um sorriso ao seu rosto.'
          },
          {
            question: 'O código LOLZ funciona em todas as sementes Fast Buds?',
            answer: 'Sim! O código promocional LOLZ oferece 15% de desconto em todo o catálogo da Fast Buds, incluindo suas variedades autoflorescentes mais agradáveis, novos lançamentos e genética de edição limitada. A diversão se aplica a tudo!'
          },
          {
            question: 'Posso usar o cupom LOLZ várias vezes?',
            answer: 'Absolutamente! Ao contrário de muitos códigos promocionais de uso único, o código de desconto Fast Buds LOLZ pode ser usado em vários pedidos. Não há limite para quantas vezes você pode rir caminho até 15% de economia.'
          },
          {
            question: 'Este código promocional da Fast Buds tem data de validade?',
            answer: 'Não, o código LOLZ nunca expira. Este desconto permanente de 15% mantém os bons momentos e economias rolando para todos os clientes da Fast Buds que apreciam qualidade e diversão.'
          },
          {
            question: 'Há um pedido mínimo para usar o código LOLZ?',
            answer: 'Nenhuma compra mínima é necessária. Seja comprando um único pacote de 3 para um pequeno projeto divertido ou se abastecendo para entretenimento durante todo o ano, o código LOLZ economizará 15% em pedidos de qualquer tamanho.'
          }
        ]
      },
      fr: {
        title: 'Économies Pour Rire Fort - 15% sur Variétés Amusantes',
        description: 'Pourquoi si sérieux? Amusez-vous avec 15% de réduction! Parfait pour ceux qui aiment rire et cultiver la génétique premium Fast Buds.',
        slug: 'fr/coupon/economies-rire-fort-15-varietes-amusantes',
        longDescription: 'Le code de réduction Fast Buds LOLZ apporte de la joie à votre parcours de culture avec 15% de réduction sur les graines de cannabis autofloraison premium. Ce code promo amateur de fun Fast Buds est parfait pour les cultivateurs qui ne se prennent pas trop au sérieux mais exigent toujours une génétique de qualité championnat. Que vous cultiviez pour le plaisir personnel ou partagiez des rires avec des amis sur votre dernière récolte, le code coupon LOLZ rend la culture premium accessible et divertissante. Fast Buds a gagné une reconnaissance mondiale comme sélectionneur leader de génétique autofloraison, avec plusieurs victoires à la Cannabis Cup et une réputation de produire des variétés qui offrent à la fois qualité et bons moments. Cette réduction Fast Buds s\'applique à leur sélection complète de graines premium, y compris des favoris qui améliorent l\'humeur comme Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto et Gelato Auto. Les 15% d\'économies signifient plus de budget pour des accessoires de salle de culture amusants, des nutriments de qualité ou simplement plus de graines pour garder les bons moments qui roulent.',
        features: [
          'Économisez 15% sur toutes les graines autofloraison premium Fast Buds pour une culture pleine de fun',
          'Accès à la génétique gagnante de championnats incluant les vainqueurs de la Cannabis Cup',
          'Utilisation illimitée - appliquez ce code de réduction Fast Buds à chaque commande joyeuse',
          'Aucun achat minimum requis - riez tout le chemin vers les économies sur toute taille de commande',
          'N\'expire jamais - ce code promo Fast Buds garde le fun indéfiniment',
          'Compatible avec des variétés qui améliorent l\'humeur: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Parfait pour les cultivateurs qui aiment rire et cultiver du cannabis de qualité'
        ],
        faq: [
          {
            question: 'Comment appliquer le coupon Fast Buds LOLZ lors du paiement?',
            answer: 'Cliquez simplement sur le bouton "Copier le Code" pour copier LOLZ dans votre presse-papiers. Ensuite, visitez la boutique officielle Fast Buds, ajoutez vos graines amusantes au panier et collez le code dans le champ code promo lors du paiement. Votre réduction de 15% sera appliquée immédiatement, apportant un sourire à votre visage.'
          },
          {
            question: 'Le code LOLZ fonctionne-t-il sur toutes les graines Fast Buds?',
            answer: 'Oui! Le code promo LOLZ offre 15% de réduction sur l\'ensemble du catalogue Fast Buds, y compris leurs variétés autofloraison les plus agréables, les nouvelles sorties et la génétique en édition limitée. Le fun s\'applique à tout!'
          },
          {
            question: 'Puis-je utiliser le coupon LOLZ plusieurs fois?',
            answer: 'Absolument! Contrairement à de nombreux codes promotionnels à usage unique, le code de réduction Fast Buds LOLZ peut être utilisé sur plusieurs commandes. Il n\'y a aucune limite au nombre de fois où vous pouvez rire jusqu\'à 15% d\'économies.'
          },
          {
            question: 'Ce code promo Fast Buds a-t-il une date d\'expiration?',
            answer: 'Non, le code LOLZ n\'expire jamais. Cette réduction permanente de 15% garde les bons moments et les économies qui roulent pour tous les clients Fast Buds qui apprécient qualité et fun.'
          },
          {
            question: 'Y a-t-il une commande minimum pour utiliser le code LOLZ?',
            answer: 'Aucun achat minimum n\'est requis. Que vous achetiez un seul pack de 3 pour un petit projet amusant ou que vous vous approvisionniez pour du divertissement toute l\'année, le code LOLZ vous fera économiser 15% sur les commandes de toute taille.'
          }
        ]
      },
      it: {
        title: 'Risparmio Per Ridere Forte - 15% su Varietà Divertenti',
        description: 'Perché così seri? Divertiti con il 15% di sconto! Perfetto per chi ama ridere e coltivare genetica premium Fast Buds.',
        slug: 'it/coupon/risparmio-ridere-forte-15-varieta-divertenti',
        longDescription: 'Il codice sconto Fast Buds LOLZ porta gioia nel tuo percorso di coltivazione con il 15% di sconto sui semi di cannabis autofiorenti premium. Questo codice promozionale amante del divertimento Fast Buds è perfetto per coltivatori che non si prendono troppo sul serio ma richiedono ancora genetica di qualità da campionato. Che tu stia coltivando per piacere personale o condividendo risate con gli amici sul tuo ultimo raccolto, il codice coupon LOLZ rende la coltivazione premium accessibile e divertente. Fast Buds ha guadagnato riconoscimento mondiale come allevatore leader di genetica autofiorente, con multiple vittorie alla Cannabis Cup e una reputazione per produrre varietà che offrono sia qualità che bei momenti. Questo sconto Fast Buds si applica alla loro selezione completa di semi premium, inclusi favoriti che migliorano l\'umore come Gorilla Glue Auto, Wedding Cheesecake Auto, Purple Lemonade Auto, Zkittlez Auto e Gelato Auto. Il risparmio del 15% significa più budget per accessori divertenti per grow room, nutrienti di qualità o semplicemente più semi per mantenere i bei momenti in corso.',
        features: [
          'Risparmia il 15% su tutti i semi autofiorenti premium Fast Buds per coltivazione piena di divertimento',
          'Accesso a genetica vincitrice di campionati inclusi i vincitori della Cannabis Cup',
          'Utilizzo illimitato - applica questo codice sconto Fast Buds ad ogni ordine gioioso',
          'Nessun acquisto minimo richiesto - ridi tutto il percorso verso il risparmio su qualsiasi dimensione ordine',
          'Non scade mai - questo codice promo Fast Buds mantiene il divertimento indefinitamente',
          'Compatibile con varietà che migliorano l\'umore: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade, Zkittlez, Gelato',
          'Perfetto per coltivatori che amano ridere e coltivare cannabis di qualità'
        ],
        faq: [
          {
            question: 'Come applico il coupon Fast Buds LOLZ al checkout?',
            answer: 'Fai semplicemente clic sul pulsante "Copia Codice" per copiare LOLZ negli appunti. Quindi visita lo store ufficiale Fast Buds, aggiungi i tuoi semi divertenti al carrello e incolla il codice nel campo codice promo durante il checkout. Il tuo sconto del 15% verrà applicato immediatamente, portando un sorriso sul tuo viso.'
          },
          {
            question: 'Il codice LOLZ funziona su tutti i semi Fast Buds?',
            answer: 'Sì! Il codice promo LOLZ offre il 15% di sconto sull\'intero catalogo Fast Buds, incluse le loro varietà autofiorenti più piacevoli, nuovi lanci e genetica in edizione limitata. Il divertimento si applica a tutto!'
          },
          {
            question: 'Posso usare il coupon LOLZ più volte?',
            answer: 'Assolutamente! A differenza di molti codici promozionali monouso, il codice sconto Fast Buds LOLZ può essere utilizzato su più ordini. Non c\'è limite a quante volte puoi ridere verso il 15% di risparmio.'
          },
          {
            question: 'Questo codice promo Fast Buds ha una data di scadenza?',
            answer: 'No, il codice LOLZ non scade mai. Questo sconto permanente del 15% mantiene i bei momenti e i risparmi in corso per tutti i clienti Fast Buds che apprezzano qualità e divertimento.'
          },
          {
            question: 'C\'è un ordine minimo per usare il codice LOLZ?',
            answer: 'Nessun acquisto minimo è richiesto. Che tu stia comprando un singolo pacchetto da 3 per un piccolo progetto divertente o ti stia rifornendo per intrattenimento tutto l\'anno, il codice LOLZ ti farà risparmiare il 15% su ordini di qualsiasi dimensione.'
          }
        ]
      },
    },
  },
  {
    id: '10',
    code: 'BUZZ',
    discount: '15%',
    expiryDate: '2040-04-20',
    isActive: true,
    usageCount: 15,
    neverExpires: true,
    image: '/images/coupons/buzz-trending-seeds.jpg',
    content: {
      en: {
        title: 'Create The Buzz - 15% Off Trending Seeds',
        description: 'Get the buzz going with 15% off! Join the hype and grow the most talked-about Fast Buds strains at an amazing price.',
        slug: 'en/coupon/create-buzz-15-off-trending-seeds',
        longDescription: 'The Fast Buds BUZZ discount code represents an exclusive opportunity to save 15% on the most trending and sought-after autoflowering cannabis seeds in the market. This premium Fast Buds promo code gives growers access to championship-winning genetics at a reduced price, making it the perfect time to stock up on legendary strains. Whether you\'re an experienced cultivator looking to expand your collection or a beginner seeking premium autoflowering seeds, the BUZZ coupon code delivers exceptional value. Fast Buds has earned its reputation as a leading breeder of autoflowering cannabis genetics, with multiple Cannabis Cup wins and a global community of satisfied growers. This Fast Buds discount applies to their entire catalog of premium seeds, including fan favorites like Gorilla Glue Auto, Wedding Cheesecake Auto, and Purple Lemonade Auto. The 15% savings with this Fast Buds coupon code means more budget for nutrients, equipment, or simply more seeds to diversify your garden. Don\'t miss this chance to grow world-class cannabis genetics while saving money – the BUZZ promo code is your gateway to premium cultivation at an unbeatable price point.',
        features: [
          'Save 15% on all Fast Buds premium autoflowering seeds with verified coupon code',
          'Access to championship-winning genetics including Cannabis Cup award winners',
          'Unlimited usage - apply this Fast Buds discount code to every order',
          'No minimum purchase required - save on small or bulk seed orders',
          'Never expires - this Fast Buds promo code remains active indefinitely',
          'Compatible with trending strains: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade',
          'Stack savings by ordering during Fast Buds promotional periods and sales events'
        ],
        faq: [
          {
            question: 'How do I apply the BUZZ Fast Buds coupon code at checkout?',
            answer: 'Simply click the "Copy Code" button above to copy BUZZ to your clipboard. Then visit the Fast Buds official store, add your favorite autoflowering seeds to cart, and paste the code in the promo code field during checkout. Your 15% discount will be applied immediately to your order total.'
          },
          {
            question: 'Does the BUZZ discount code work on all Fast Buds seeds?',
            answer: 'Yes! The BUZZ promo code provides 15% off on the entire Fast Buds catalog, including their most popular autoflowering strains, new releases, and limited edition genetics. There are no restrictions on which seeds you can purchase with this coupon.'
          },
          {
            question: 'Can I use the BUZZ coupon multiple times?',
            answer: 'Absolutely! Unlike many promotional codes that are single-use only, the BUZZ Fast Buds discount code can be used on multiple orders. There\'s no limit to how many times you can save 15% on your Fast Buds seed purchases.'
          },
          {
            question: 'Does this Fast Buds promo code have an expiration date?',
            answer: 'No, the BUZZ coupon code never expires. This permanent 15% discount is available for all Fast Buds customers, making it perfect for planning your grows throughout the year without worrying about missing a limited-time deal.'
          },
          {
            question: 'Is there a minimum order requirement to use the BUZZ code?',
            answer: 'No minimum purchase is required. Whether you\'re buying a single 3-pack of seeds or stocking up with multiple strains, the BUZZ discount code will save you 15% on orders of any size at the Fast Buds store.'
          }
        ]
      },
      de: {
        title: 'Sorgen Sie Für Aufsehen - 15% auf Trend-Samen',
        description: 'Bringen Sie das Gespräch in Gang mit 15% Rabatt! Steigen Sie ein in den Hype und züchten Sie die meistdiskutierten Fast Buds Sorten zu einem tollen Preis.',
        slug: 'de/coupon/sorgen-sie-aufsehen-15-trend-samen',
        longDescription: 'Der Fast Buds BUZZ Rabattcode ist eine exklusive Gelegenheit, 15% auf die gefragtesten autoflowering Cannabis-Samen zu sparen. Dieser Premium Fast Buds Gutschein gewährt Züchtern Zugang zu preisgekrönter Genetik zu reduzierten Preisen. Ob erfahrener Züchter oder Anfänger – der BUZZ Coupon bietet außergewöhnlichen Wert. Fast Buds hat sich als führender Züchter von autoflowering Cannabis-Genetik etabliert, mit mehreren Cannabis Cup Auszeichnungen. Dieser Fast Buds Rabatt gilt für den gesamten Katalog, einschließlich Favoriten wie Gorilla Glue Auto, Wedding Cheesecake Auto und Purple Lemonade Auto. Die 15% Ersparnis bedeuten mehr Budget für Nährstoffe, Ausrüstung oder einfach mehr Samen. Verpassen Sie nicht diese Chance, Weltklasse-Genetik anzubauen und dabei Geld zu sparen.',
        features: [
          '15% Rabatt auf alle Fast Buds Premium autoflowering Samen mit verifiziertem Code',
          'Zugang zu preisgekrönter Genetik einschließlich Cannabis Cup Gewinnern',
          'Unbegrenzte Nutzung - wenden Sie diesen Fast Buds Rabatt bei jeder Bestellung an',
          'Kein Mindestbestellwert erforderlich - sparen Sie bei kleinen oder großen Bestellungen',
          'Läuft nie ab - dieser Fast Buds Gutschein bleibt dauerhaft aktiv',
          'Kompatibel mit Trend-Sorten: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade',
          'Zusätzliche Ersparnisse bei Bestellung während Fast Buds Aktionszeiträumen'
        ],
        faq: [
          {
            question: 'Wie wende ich den BUZZ Fast Buds Gutscheincode an der Kasse an?',
            answer: 'Klicken Sie einfach auf "Code kopieren", um BUZZ in Ihre Zwischenablage zu kopieren. Besuchen Sie dann den offiziellen Fast Buds Shop, fügen Sie Ihre Lieblingssamen zum Warenkorb hinzu und fügen Sie den Code im Gutscheinfeld beim Checkout ein. Ihr 15% Rabatt wird sofort angewendet.'
          },
          {
            question: 'Funktioniert der BUZZ Rabattcode bei allen Fast Buds Samen?',
            answer: 'Ja! Der BUZZ Gutschein bietet 15% Rabatt auf den gesamten Fast Buds Katalog, einschließlich der beliebtesten autoflowering Sorten, neuen Releases und limitierten Editionen. Es gibt keine Einschränkungen.'
          },
          {
            question: 'Kann ich den BUZZ Gutschein mehrmals verwenden?',
            answer: 'Absolut! Anders als viele Aktionscodes, die nur einmal verwendet werden können, kann der BUZZ Fast Buds Rabattcode bei mehreren Bestellungen genutzt werden. Es gibt keine Begrenzung, wie oft Sie 15% sparen können.'
          },
          {
            question: 'Hat dieser Fast Buds Gutschein ein Ablaufdatum?',
            answer: 'Nein, der BUZZ Gutscheincode läuft nie ab. Dieser permanente 15% Rabatt ist für alle Fast Buds Kunden verfügbar, ideal für die Planung Ihrer Anbaus das ganze Jahr über.'
          },
          {
            question: 'Gibt es einen Mindestbestellwert für den BUZZ Code?',
            answer: 'Kein Mindestbestellwert erforderlich. Ob Sie ein einzelnes 3er-Pack kaufen oder mehrere Sorten bestellen, der BUZZ Rabattcode spart Ihnen 15% bei Bestellungen jeder Größe.'
          }
        ]
      },
      es: {
        title: 'Crea El Buzz - 15% en Semillas Tendencia',
        description: '¡Crea el buzz con 15% de descuento! Únete al hype y cultiva las variedades Fast Buds más comentadas a un precio increíble.',
        slug: 'es/cupon/crea-buzz-15-semillas-tendencia',
        longDescription: 'El código de descuento BUZZ de Fast Buds representa una oportunidad exclusiva para ahorrar 15% en las semillas de cannabis autoflorecientes más populares del mercado. Este cupón premium de Fast Buds ofrece a los cultivadores acceso a genética ganadora de campeonatos a precio reducido. Ya seas un cultivador experimentado que busca expandir su colección o un principiante que busca semillas autoflorecientes premium, el código BUZZ ofrece un valor excepcional. Fast Buds se ha ganado su reputación como criador líder de genética autofloreciente, con múltiples premios Cannabis Cup y una comunidad global de cultivadores satisfechos. Este descuento de Fast Buds se aplica a todo su catálogo de semillas premium, incluidos los favoritos como Gorilla Glue Auto, Wedding Cheesecake Auto y Purple Lemonade Auto. El ahorro del 15% con este código promocional significa más presupuesto para nutrientes, equipo o simplemente más semillas.',
        features: [
          'Ahorra 15% en todas las semillas autoflorecientes premium de Fast Buds con código verificado',
          'Acceso a genética ganadora de campeonatos incluyendo premios Cannabis Cup',
          'Uso ilimitado - aplica este código de descuento Fast Buds en cada pedido',
          'Sin compra mínima requerida - ahorra en pedidos pequeños o grandes',
          'Nunca expira - este código promo de Fast Buds permanece activo indefinidamente',
          'Compatible con variedades tendencia: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade',
          'Acumula ahorros ordenando durante períodos promocionales de Fast Buds'
        ],
        faq: [
          {
            question: '¿Cómo aplico el cupón BUZZ de Fast Buds al finalizar la compra?',
            answer: 'Simplemente haz clic en el botón "Copiar Código" para copiar BUZZ al portapapeles. Luego visita la tienda oficial de Fast Buds, añade tus semillas favoritas al carrito y pega el código en el campo de código promocional durante el checkout. Tu descuento del 15% se aplicará inmediatamente.'
          },
          {
            question: '¿El código BUZZ funciona en todas las semillas Fast Buds?',
            answer: '¡Sí! El código promo BUZZ proporciona 15% de descuento en todo el catálogo de Fast Buds, incluyendo sus variedades autoflorecientes más populares, nuevos lanzamientos y genética de edición limitada. No hay restricciones.'
          },
          {
            question: '¿Puedo usar el cupón BUZZ múltiples veces?',
            answer: '¡Absolutamente! A diferencia de muchos códigos promocionales de un solo uso, el código de descuento BUZZ de Fast Buds puede usarse en múltiples pedidos. No hay límite para cuántas veces puedes ahorrar 15%.'
          },
          {
            question: '¿Este código promo de Fast Buds tiene fecha de expiración?',
            answer: 'No, el código BUZZ nunca expira. Este descuento permanente del 15% está disponible para todos los clientes de Fast Buds, perfecto para planificar tus cultivos durante todo el año.'
          },
          {
            question: '¿Hay un pedido mínimo para usar el código BUZZ?',
            answer: 'No se requiere compra mínima. Ya sea que compres un solo paquete de 3 semillas o hagas un pedido grande, el código BUZZ te ahorrará 15% en pedidos de cualquier tamaño.'
          }
        ]
      },
      pt: {
        title: 'Crie O Buzz - 15% em Sementes Tendência',
        description: 'Crie o buzz com 15% de desconto! Junte-se ao hype e cultive as variedades Fast Buds mais comentadas a um preço incrível.',
        slug: 'pt/cupom/crie-buzz-15-sementes-tendencia',
        longDescription: 'O código de desconto BUZZ da Fast Buds representa uma oportunidade exclusiva para economizar 15% nas sementes de cannabis autoflorescentes mais populares do mercado. Este cupom premium da Fast Buds oferece aos cultivadores acesso a genética vencedora de campeonatos a preço reduzido. Seja você um cultivador experiente procurando expandir sua coleção ou um iniciante buscando sementes autoflorescentes premium, o código BUZZ oferece valor excepcional. A Fast Buds conquistou sua reputação como criador líder de genética autoflorescente, com múltiplos prêmios Cannabis Cup e uma comunidade global de cultivadores satisfeitos. Este desconto da Fast Buds se aplica a todo o catálogo de semillas premium, incluindo favoritos como Gorilla Glue Auto, Wedding Cheesecake Auto e Purple Lemonade Auto. A economia de 15% com este código promocional significa mais orçamento para nutrientes, equipamentos ou simplesmente mais sementes.',
        features: [
          'Economize 15% em todas as sementes autoflorescentes premium da Fast Buds com código verificado',
          'Acesso a genética vencedora de campeonatos incluindo prêmios Cannabis Cup',
          'Uso ilimitado - aplique este código de desconto Fast Buds em cada pedido',
          'Sem compra mínima necessária - economize em pedidos pequenos ou grandes',
          'Nunca expira - este código promo da Fast Buds permanece ativo indefinidamente',
          'Compatível com variedades tendência: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade',
          'Acumule economias pedindo durante períodos promocionais da Fast Buds'
        ],
        faq: [
          {
            question: 'Como aplico o cupom BUZZ da Fast Buds no checkout?',
            answer: 'Simplesmente clique no botão "Copiar Código" para copiar BUZZ para a área de transferência. Em seguida, visite a loja oficial da Fast Buds, adicione suas sementes favoritas ao carrinho e cole o código no campo de código promocional durante o checkout. Seu desconto de 15% será aplicado imediatamente.'
          },
          {
            question: 'O código BUZZ funciona em todas as sementes Fast Buds?',
            answer: 'Sim! O código promo BUZZ oferece 15% de desconto em todo o catálogo da Fast Buds, incluindo suas variedades autoflorescentes mais populares, novos lançamentos e genética de edição limitada. Não há restrições.'
          },
          {
            question: 'Posso usar o cupom BUZZ múltiplas vezes?',
            answer: 'Absolutamente! Ao contrário de muitos códigos promocionais de uso único, o código de desconto BUZZ da Fast Buds pode ser usado em múltiplos pedidos. Não há limite para quantas vezes você pode economizar 15%.'
          },
          {
            question: 'Este código promo da Fast Buds tem data de validade?',
            answer: 'Não, o código BUZZ nunca expira. Este desconto permanente de 15% está disponível para todos os clientes da Fast Buds, perfeito para planejar seus cultivos durante todo o ano.'
          },
          {
            question: 'Há um pedido mínimo para usar o código BUZZ?',
            answer: 'Nenhuma compra mínima é necessária. Seja você comprando um único pacote de 3 sementes ou fazendo um pedido grande, o código BUZZ economizará 15% em pedidos de qualquer tamanho.'
          }
        ]
      },
      fr: {
        title: 'Créez Le Buzz - 15% sur Graines Tendance',
        description: 'Créez le buzz avec 15% de réduction! Rejoignez le hype et cultivez les variétés Fast Buds les plus populaires à un prix incroyable.',
        slug: 'fr/coupon/creez-buzz-15-graines-tendance',
        longDescription: 'Le code promo BUZZ de Fast Buds représente une opportunité exclusive d\'économiser 15% sur les graines de cannabis autofloraison les plus tendance du marché. Ce coupon premium Fast Buds offre aux cultivateurs un accès à une génétique primée à prix réduit. Que vous soyez un cultivateur expérimenté cherchant à élargir votre collection ou un débutant à la recherche de graines autofloraison premium, le code BUZZ offre une valeur exceptionnelle. Fast Buds a gagné sa réputation en tant que sélectionneur leader de génétique autofloraison, avec de multiples prix Cannabis Cup et une communauté mondiale de cultivateurs satisfaits. Cette réduction Fast Buds s\'applique à l\'ensemble du catalogue de graines premium, y compris les favoris comme Gorilla Glue Auto, Wedding Cheesecake Auto et Purple Lemonade Auto. L\'économie de 15% avec ce code promotionnel signifie plus de budget pour les nutriments, l\'équipement ou simplement plus de graines.',
        features: [
          'Économisez 15% sur toutes les graines autofloraison premium Fast Buds avec code vérifié',
          'Accès à la génétique primée incluant les gagnants de Cannabis Cup',
          'Utilisation illimitée - appliquez ce code promo Fast Buds à chaque commande',
          'Aucun achat minimum requis - économisez sur les petites ou grandes commandes',
          'N\'expire jamais - ce code promo Fast Buds reste actif indéfiniment',
          'Compatible avec les variétés tendance: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade',
          'Cumulez les économies en commandant pendant les périodes promotionnelles Fast Buds'
        ],
        faq: [
          {
            question: 'Comment appliquer le coupon BUZZ de Fast Buds lors du paiement?',
            answer: 'Cliquez simplement sur le bouton "Copier le Code" pour copier BUZZ dans votre presse-papiers. Ensuite, visitez la boutique officielle Fast Buds, ajoutez vos graines préférées au panier et collez le code dans le champ code promo lors du paiement. Votre réduction de 15% sera appliquée immédiatement.'
          },
          {
            question: 'Le code BUZZ fonctionne-t-il sur toutes les graines Fast Buds?',
            answer: 'Oui! Le code promo BUZZ offre 15% de réduction sur l\'ensemble du catalogue Fast Buds, y compris leurs variétés autofloraison les plus populaires, les nouvelles sorties et la génétique en édition limitée. Il n\'y a aucune restriction.'
          },
          {
            question: 'Puis-je utiliser le coupon BUZZ plusieurs fois?',
            answer: 'Absolument! Contrairement à de nombreux codes promotionnels à usage unique, le code promo BUZZ de Fast Buds peut être utilisé sur plusieurs commandes. Il n\'y a aucune limite au nombre de fois où vous pouvez économiser 15%.'
          },
          {
            question: 'Ce code promo Fast Buds a-t-il une date d\'expiration?',
            answer: 'Non, le code BUZZ n\'expire jamais. Cette réduction permanente de 15% est disponible pour tous les clients Fast Buds, parfaite pour planifier vos cultures tout au long de l\'année.'
          },
          {
            question: 'Y a-t-il une commande minimum pour utiliser le code BUZZ?',
            answer: 'Aucun achat minimum n\'est requis. Que vous achetiez un seul pack de 3 graines ou que vous fassiez une grosse commande, le code BUZZ vous fera économiser 15% sur les commandes de toute taille.'
          }
        ]
      },
      it: {
        title: 'Crea Il Buzz - 15% su Semi Di Tendenza',
        description: 'Crea il buzz con il 15% di sconto! Unisciti all\'hype e coltiva le varietà Fast Buds più discusse a un prezzo fantastico.',
        slug: 'it/coupon/crea-buzz-15-semi-tendenza',
        longDescription: 'Il codice sconto BUZZ di Fast Buds rappresenta un\'opportunità esclusiva per risparmiare il 15% sui semi di cannabis autofiorenti più richiesti sul mercato. Questo coupon premium Fast Buds offre ai coltivatori l\'accesso a genetica vincitrice di campionati a prezzo ridotto. Che tu sia un coltivatore esperto che cerca di espandere la propria collezione o un principiante alla ricerca di semi autofiorenti premium, il codice BUZZ offre un valore eccezionale. Fast Buds ha guadagnato la sua reputazione come allevatore leader di genetica autofiorente, con molteplici premi Cannabis Cup e una comunità globale di coltivatori soddisfatti. Questo sconto Fast Buds si applica all\'intero catalogo di semi premium, inclusi i favoriti come Gorilla Glue Auto, Wedding Cheesecake Auto e Purple Lemonade Auto. Il risparmio del 15% con questo codice promozionale significa più budget per nutrienti, attrezzature o semplicemente più semi.',
        features: [
          'Risparmia il 15% su tutti i semi autofiorenti premium Fast Buds con codice verificato',
          'Accesso a genetica vincitrice di campionati inclusi i vincitori della Cannabis Cup',
          'Utilizzo illimitato - applica questo codice sconto Fast Buds ad ogni ordine',
          'Nessun acquisto minimo richiesto - risparmia su ordini piccoli o grandi',
          'Non scade mai - questo codice promo Fast Buds rimane attivo indefinitamente',
          'Compatibile con varietà di tendenza: Gorilla Glue Auto, Wedding Cheesecake, Purple Lemonade',
          'Accumula risparmi ordinando durante i periodi promozionali Fast Buds'
        ],
        faq: [
          {
            question: 'Come applico il coupon BUZZ di Fast Buds al checkout?',
            answer: 'Fai semplicemente clic sul pulsante "Copia Codice" per copiare BUZZ negli appunti. Quindi visita lo store ufficiale Fast Buds, aggiungi i tuoi semi preferiti al carrello e incolla il codice nel campo codice promo durante il checkout. Il tuo sconto del 15% verrà applicato immediatamente.'
          },
          {
            question: 'Il codice BUZZ funziona su tutti i semi Fast Buds?',
            answer: 'Sì! Il codice promo BUZZ offre il 15% di sconto sull\'intero catalogo Fast Buds, incluse le loro varietà autofiorenti più popolari, nuovi lanci e genetica in edizione limitata. Non ci sono restrizioni.'
          },
          {
            question: 'Posso usare il coupon BUZZ più volte?',
            answer: 'Assolutamente! A differenza di molti codici promozionali monouso, il codice sconto BUZZ di Fast Buds può essere utilizzato su più ordini. Non c\'è limite a quante volte puoi risparmiare il 15%.'
          },
          {
            question: 'Questo codice promo Fast Buds ha una data di scadenza?',
            answer: 'No, il codice BUZZ non scade mai. Questo sconto permanente del 15% è disponibile per tutti i clienti Fast Buds, perfetto per pianificare le tue coltivazioni durante tutto l\'anno.'
          },
          {
            question: 'C\'è un ordine minimo per usare il codice BUZZ?',
            answer: 'Nessun acquisto minimo è richiesto. Che tu stia comprando un singolo pacchetto da 3 semi o facendo un grande ordine, il codice BUZZ ti farà risparmiare il 15% su ordini di qualsiasi dimensione.'
          }
        ]
      },
    },
  },
];
