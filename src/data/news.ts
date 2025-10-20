import { Language } from '@/i18n/languages';

export interface NewsItem {
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
}

export const newsData: Record<Language, NewsItem[]> = {
  en: [
    {
      title: "Vote For Us in The American Autoflower Cup 2026!",
      description: "Growmies, it's that time of year again! The 4th edition of the American Autoflower Cup is right around the corner, and we need your support to keep the winning streak...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_091a7459d2e81556613f62e6449906f8.jpg",
      link: "https://2fast4buds.com/en/news/vote-for-us-in-the-aac-2026",
      date: "3 days ago"
    },
    {
      title: "Banana Purple Punch Auto RF3: Top Of The Line Upgrade",
      description: "We're proud to unveil a completely new generation of autoflowers: the RF3 Project. This marks the start of a new chapter in our genetics, built on precision, consistency, and performance that...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0e124dee2c41c7b6ac5998b9366b2299.jpg",
      link: "https://2fast4buds.com/en/news/new-breeding-project-rf3-line",
      date: "2 weeks ago"
    },
    {
      title: "Buy 3 Get 3 Free on All Our Award-Winning Strains",
      description: "It's time to celebrate the champions of the Fast Buds lineup, the strains that made history and brought home the trophies. For a limited time only, we're giving you the chance to Buy 3...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_4eca96017c0b4b0499e60905390d8970.jpg",
      link: "https://2fast4buds.com/en/news/buy-3-get-3-free-on-awarded-genetics",
      date: "3 weeks ago"
    },
    {
      title: "FastBuds.com Moving Back to 2fast4buds.com",
      description: "We are reverting our domain name from fastbuds.com back to 2fast4buds.com. Why to go back? While fastbuds.com was short and simple, the change created unexpected challenges. Some of our community...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_9d2d1ad6227d25d8309d3a9e88ca48eb.jpg",
      link: "https://2fast4buds.com/en/news/moving-back-to-2-fast-4-buds",
      date: "3 weeks ago"
    },
    {
      title: "Apple Strudel Auto Shines at the Southside Cup 2025 in Germany",
      description: "Apple Strudel Auto scored a place in the Best Autoflower 2025 category at this year's Southside Cup in Stuttgart, Germany, where 85 talented growers presented their very best. What makes this...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0cf3b1722d2d9e44e581a1d57c23c403.jpg",
      link: "https://2fast4buds.com/en/news/apple-strudel-wins-at-the-southside-cup-2025",
      date: "1 month ago"
    },
    {
      title: "Win GG4 Fem on our Discord!",
      description: "Our brand-new GG4 Fem is up for grabs in the latest edition of our exclusive Discord Giveaway! Ten lucky winners will get the chance to grow one of the most iconic strains...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_818f02450ba13627685a828808930971.jpg",
      link: "https://2fast4buds.com/en/news/september-2025-discord-giveaway",
      date: "1 month ago"
    },
  ],
  de: [
    {
      title: "Banana Purple Punch Auto RF3: Ein Upgrade der Spitzenklasse",
      description: "Wir sind stolz, euch eine völlig neue Generation von Autoflowers vorzustellen: das RF3-Projekt. Dies markiert den Beginn eines neuen Kapitels unserer Genetik, das auf Präzision, Konsistenz...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0e124dee2c41c7b6ac5998b9366b2299.jpg",
      link: "https://2fast4buds.com/de/news/neues-zuchtprojekt-rf3-linie",
      date: "Vor 2 Wochen"
    },
    {
      title: "Aktion: 3+3 GRATIS auf alle unsere Sieger-Strains",
      description: "Es ist an der Zeit, die Champions unserer Fast Buds Auswahl zu feiern – die Strains, die Geschichte geschrieben und Pokale mit nach Hause gebracht haben. Für eine begrenzte Zeit...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_4eca96017c0b4b0499e60905390d8970.jpg",
      link: "https://2fast4buds.com/de/news/aktion-3-plus-3-sieger-strains",
      date: "Vor 3 Wochen"
    },
    {
      title: "FastBuds.com wechselt zurück zu 2fast4buds.com",
      description: "Wir ändern unseren Domainnamen von fastbuds.com zurück zu 2fast4buds.com. Warum zurückwechseln? Obwohl fastbuds.com kurz und einfach war, hat die Änderung unerwartete Herausforderungen...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_9d2d1ad6227d25d8309d3a9e88ca48eb.jpg",
      link: "https://2fast4buds.com/de/news/zuruck-zu-2-fast-4-buds",
      date: "Vor 3 Wochen"
    },
    {
      title: "Apple Strudel Auto glänzt beim Southside Cup 2025 in Deutschland",
      description: "Apple Strudel Auto hat sich einen Platz in der Kategorie Beste Autoflower 2025 beim diesjährigen Southside Cup in Stuttgart gesichert, wo 85 talentierte Grower ihr Bestes präsentierten...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0cf3b1722d2d9e44e581a1d57c23c403.jpg",
      link: "https://2fast4buds.com/de/news/apple-strudel-gewinnt-beim-southside-cup-2025",
      date: "Vor 1 Monat"
    },
    {
      title: "Gewinne GG4 Fem auf unserem Discord!",
      description: "Unsere brandneue GG4 Fem steht bei der neuesten Ausgabe unseres exklusiven Discord Giveaways zur Verfügung! Zehn glückliche Gewinner bekommen die Chance, einen der ikonischsten Strains...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_818f02450ba13627685a828808930971.jpg",
      link: "https://2fast4buds.com/de/news/september-2025-discord-giveaway",
      date: "Vor 1 Monat"
    },
    {
      title: "Aktion: 5+5 GRATIS auf alle Gorilla-Strains",
      description: "Mit der Veröffentlichung unserer brandneuen GG4 Fem wollen wir das legendäre Gorilla-Erbe mit euch feiern. Für eine begrenzte Zeit könnt ihr euch die Aktion 5+5 GRATIS sichern...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0de4d20ff5bfd8f35135b2d92666bf8c.jpg",
      link: "https://2fast4buds.com/de/news/aktion-5-plus-5-alle-gorillas",
      date: "Vor 1 Monat"
    },
  ],
  es: [
    {
      title: "¡Vota por nosotros en la Copa Americana de Autoflorecientes 2026!",
      description: "Growmies, ¡ha llegado ese momento del año otra vez! La 4ª edición de la Copa Americana de Autoflorecientes está a la vuelta de la esquina y necesitamos tu apoyo para mantener la racha...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_091a7459d2e81556613f62e6449906f8.jpg",
      link: "https://2fast4buds.com/es/news/vota-por-nosotros-en-la-aac-2026",
      date: "Hace 3 días"
    },
    {
      title: "Banana Purple Punch Auto RF3: Actualización de primera línea",
      description: "Estamos orgullosos de presentar una generación completamente nueva de autoflorecientes: el Proyecto RF3. Esto marca el inicio de un nuevo capítulo en nuestra genética, construido sobre precisión...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0e124dee2c41c7b6ac5998b9366b2299.jpg",
      link: "https://2fast4buds.com/es/news/nuevo-proyecto-de-cria-linea-rf3",
      date: "Hace 2 semanas"
    },
    {
      title: "Compra 3 y llévate 3 gratis en todas nuestras variedades ganadoras",
      description: "Es hora de celebrar a los campeones de la línea Fast Buds, las variedades que hicieron historia y se llevaron los trofeos a casa. Por tiempo limitado, te damos la oportunidad...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_4eca96017c0b4b0499e60905390d8970.jpg",
      link: "https://2fast4buds.com/es/news/compra-3-llevate-3-gratis-genetica-premiada",
      date: "Hace 3 semanas"
    },
    {
      title: "FastBuds.com vuelve a 2fast4buds.com",
      description: "Estamos revirtiendo nuestro nombre de dominio de fastbuds.com de vuelta a 2fast4buds.com. ¿Por qué volver? Aunque fastbuds.com era corto y simple, el cambio creó desafíos inesperados...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_9d2d1ad6227d25d8309d3a9e88ca48eb.jpg",
      link: "https://2fast4buds.com/es/news/volviendo-a-2-fast-4-buds",
      date: "Hace 3 semanas"
    },
    {
      title: "Apple Strudel Auto brilla en la Copa Southside 2025 en Alemania",
      description: "Apple Strudel Auto consiguió un lugar en la categoría Mejor Autofloreciente 2025 en la Copa Southside de este año en Stuttgart, Alemania, donde 85 cultivadores talentosos presentaron...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0cf3b1722d2d9e44e581a1d57c23c403.jpg",
      link: "https://2fast4buds.com/es/news/apple-strudel-gana-en-la-copa-southside-2025",
      date: "Hace 1 mes"
    },
    {
      title: "¡Gana GG4 Fem en nuestro Discord!",
      description: "¡Nuestra nueva GG4 Fem está en juego en la última edición de nuestro sorteo exclusivo de Discord! Diez afortunados ganadores tendrán la oportunidad de cultivar una de las variedades...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_818f02450ba13627685a828808930971.jpg",
      link: "https://2fast4buds.com/es/news/sorteo-discord-septiembre-2025",
      date: "Hace 1 mes"
    },
  ],
  pt: [
    {
      title: "Vote em nós na Copa Americana de Autoflower 2026!",
      description: "Growmies, chegou essa época do ano novamente! A 4ª edição da Copa Americana de Autoflower está chegando e precisamos do seu apoio para manter a sequência de vitórias...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_091a7459d2e81556613f62e6449906f8.jpg",
      link: "https://2fast4buds.com/pt/news/vote-em-nos-na-aac-2026",
      date: "Há 3 dias"
    },
    {
      title: "Banana Purple Punch Auto RF3: Atualização de primeira linha",
      description: "Temos orgulho de apresentar uma geração completamente nova de autoflowers: o Projeto RF3. Isto marca o início de um novo capítulo em nossa genética, construído sobre precisão, consistência...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0e124dee2c41c7b6ac5998b9366b2299.jpg",
      link: "https://2fast4buds.com/pt/news/novo-projeto-de-cruzamento-linha-rf3",
      date: "Há 2 semanas"
    },
    {
      title: "Compre 3 e leve 3 grátis em todas as nossas variedades premiadas",
      description: "É hora de celebrar os campeões da linha Fast Buds, as variedades que fizeram história e trouxeram os troféus para casa. Por tempo limitado, estamos dando a você a chance...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_4eca96017c0b4b0499e60905390d8970.jpg",
      link: "https://2fast4buds.com/pt/news/compre-3-leve-3-gratis-genetica-premiada",
      date: "Há 3 semanas"
    },
    {
      title: "FastBuds.com voltando para 2fast4buds.com",
      description: "Estamos revertendo nosso nome de domínio de fastbuds.com de volta para 2fast4buds.com. Por que voltar? Embora fastbuds.com fosse curto e simples, a mudança criou desafios inesperados...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_9d2d1ad6227d25d8309d3a9e88ca48eb.jpg",
      link: "https://2fast4buds.com/pt/news/voltando-para-2-fast-4-buds",
      date: "Há 3 semanas"
    },
    {
      title: "Apple Strudel Auto brilha na Copa Southside 2025 na Alemanha",
      description: "Apple Strudel Auto conquistou um lugar na categoria Melhor Autoflower 2025 na Copa Southside deste ano em Stuttgart, Alemanha, onde 85 cultivadores talentosos apresentaram...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0cf3b1722d2d9e44e581a1d57c23c403.jpg",
      link: "https://2fast4buds.com/pt/news/apple-strudel-vence-na-copa-southside-2025",
      date: "Há 1 mês"
    },
    {
      title: "Ganhe GG4 Fem no nosso Discord!",
      description: "Nossa nova GG4 Fem está em jogo na última edição do nosso sorteio exclusivo no Discord! Dez sortudos vencedores terão a chance de cultivar uma das variedades mais icônicas...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_818f02450ba13627685a828808930971.jpg",
      link: "https://2fast4buds.com/pt/news/sorteio-discord-setembro-2025",
      date: "Há 1 mês"
    },
  ],
  fr: [
    {
      title: "Votez pour nous à l'American Autoflower Cup 2026 !",
      description: "Growmies, c'est encore cette période de l'année ! La 4ème édition de l'American Autoflower Cup approche et nous avons besoin de votre soutien pour maintenir notre série de victoires...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_091a7459d2e81556613f62e6449906f8.jpg",
      link: "https://2fast4buds.com/fr/news/votez-pour-nous-a-l-aac-2026",
      date: "Il y a 3 jours"
    },
    {
      title: "Banana Purple Punch Auto RF3 : Une mise à niveau haut de gamme",
      description: "Nous sommes fiers de dévoiler une toute nouvelle génération d'autoflowers : le Projet RF3. Cela marque le début d'un nouveau chapitre dans notre génétique, construit sur la précision...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0e124dee2c41c7b6ac5998b9366b2299.jpg",
      link: "https://2fast4buds.com/fr/news/nouveau-projet-de-selection-ligne-rf3",
      date: "Il y a 2 semaines"
    },
    {
      title: "Achetez 3 obtenez 3 gratuits sur toutes nos variétés primées",
      description: "Il est temps de célébrer les champions de la gamme Fast Buds, les variétés qui ont fait l'histoire et remporté des trophées. Pour une durée limitée, nous vous donnons la chance...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_4eca96017c0b4b0499e60905390d8970.jpg",
      link: "https://2fast4buds.com/fr/news/achetez-3-obtenez-3-gratuits-genetique-primee",
      date: "Il y a 3 semaines"
    },
    {
      title: "FastBuds.com retourne à 2fast4buds.com",
      description: "Nous revenons de notre nom de domaine fastbuds.com vers 2fast4buds.com. Pourquoi revenir en arrière ? Bien que fastbuds.com soit court et simple, le changement a créé des défis inattendus...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_9d2d1ad6227d25d8309d3a9e88ca48eb.jpg",
      link: "https://2fast4buds.com/fr/news/retour-a-2-fast-4-buds",
      date: "Il y a 3 semaines"
    },
    {
      title: "Apple Strudel Auto brille à la Southside Cup 2025 en Allemagne",
      description: "Apple Strudel Auto a obtenu une place dans la catégorie Meilleur Autoflower 2025 lors de la Southside Cup de cette année à Stuttgart, en Allemagne, où 85 cultivateurs talentueux...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0cf3b1722d2d9e44e581a1d57c23c403.jpg",
      link: "https://2fast4buds.com/fr/news/apple-strudel-gagne-a-la-southside-cup-2025",
      date: "Il y a 1 mois"
    },
    {
      title: "Gagnez GG4 Fem sur notre Discord !",
      description: "Notre toute nouvelle GG4 Fem est en jeu dans la dernière édition de notre concours exclusif Discord ! Dix gagnants chanceux auront la chance de cultiver l'une des variétés les plus...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_818f02450ba13627685a828808930971.jpg",
      link: "https://2fast4buds.com/fr/news/concours-discord-septembre-2025",
      date: "Il y a 1 mois"
    },
  ],
  it: [
    {
      title: "Vota per noi all'American Autoflower Cup 2026!",
      description: "Growmies, è di nuovo quel periodo dell'anno! La 4ª edizione dell'American Autoflower Cup è dietro l'angolo e abbiamo bisogno del tuo supporto per mantenere la serie vincente...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_091a7459d2e81556613f62e6449906f8.jpg",
      link: "https://2fast4buds.com/it/news/vota-per-noi-all-aac-2026",
      date: "3 giorni fa"
    },
    {
      title: "Banana Purple Punch Auto RF3: Aggiornamento di alta gamma",
      description: "Siamo orgogliosi di svelare una generazione completamente nuova di autoflowers: il Progetto RF3. Questo segna l'inizio di un nuovo capitolo nella nostra genetica, costruito su precisione...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0e124dee2c41c7b6ac5998b9366b2299.jpg",
      link: "https://2fast4buds.com/it/news/nuovo-progetto-di-breeding-linea-rf3",
      date: "2 settimane fa"
    },
    {
      title: "Compra 3 prendi 3 gratis su tutte le nostre varietà premiate",
      description: "È tempo di celebrare i campioni della linea Fast Buds, le varietà che hanno fatto la storia e portato a casa i trofei. Per un periodo limitato, ti diamo la possibilità...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_4eca96017c0b4b0499e60905390d8970.jpg",
      link: "https://2fast4buds.com/it/news/compra-3-prendi-3-gratis-genetica-premiata",
      date: "3 settimane fa"
    },
    {
      title: "FastBuds.com torna a 2fast4buds.com",
      description: "Stiamo riportando il nostro nome di dominio da fastbuds.com a 2fast4buds.com. Perché tornare indietro? Mentre fastbuds.com era breve e semplice, il cambio ha creato sfide inaspettate...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_9d2d1ad6227d25d8309d3a9e88ca48eb.jpg",
      link: "https://2fast4buds.com/it/news/ritorno-a-2-fast-4-buds",
      date: "3 settimane fa"
    },
    {
      title: "Apple Strudel Auto brilla alla Southside Cup 2025 in Germania",
      description: "Apple Strudel Auto ha conquistato un posto nella categoria Miglior Autoflower 2025 alla Southside Cup di quest'anno a Stoccarda, in Germania, dove 85 coltivatori di talento hanno presentato...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0cf3b1722d2d9e44e581a1d57c23c403.jpg",
      link: "https://2fast4buds.com/it/news/apple-strudel-vince-alla-southside-cup-2025",
      date: "1 mese fa"
    },
    {
      title: "Vinci GG4 Fem sul nostro Discord!",
      description: "La nostra nuovissima GG4 Fem è in palio nell'ultima edizione del nostro giveaway esclusivo Discord! Dieci fortunati vincitori avranno la possibilità di coltivare una delle varietà più iconiche...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_818f02450ba13627685a828808930971.jpg",
      link: "https://2fast4buds.com/it/news/giveaway-discord-settembre-2025",
      date: "1 mese fa"
    },
  ],
};
