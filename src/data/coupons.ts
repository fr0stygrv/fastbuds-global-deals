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
    usageCount: 16,
    neverExpires: true,
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
    usageCount: 11,
    neverExpires: true,
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
    usageCount: 18,
    neverExpires: true,
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
    usageCount: 13,
    neverExpires: true,
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
