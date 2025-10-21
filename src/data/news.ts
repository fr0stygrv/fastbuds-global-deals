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
      link: "https://2fast4buds.com/ww-de/news/zurueck-zu-2fast4buds",
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
      link: "https://2fast4buds.com/ww-de/news/gorilla-aktion-5-plus-5",
      date: "Vor 1 Monat"
    },
  ],
  es: [
    {
      title: "Compra 3 y llévate 3 gratis en todas nuestras variedades galardonadas",
      description: "Es hora de celebrar a los campeones de la gama Fast Buds, las variedades que hicieron historia y se llevaron los trofeos a casa. Solo por tiempo limitado, te ofrecemos la oportunidad...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_4eca96017c0b4b0499e60905390d8970.jpg",
      link: "https://2fast4buds.com/es/news/compra-3-llevate-3-gratis-de-genetica-premiada",
      date: "Hace 6 días"
    },
    {
      title: "Banana Purple Punch Auto RF3: la mejora más avanzada de la gama",
      description: "Estamos orgullosos de presentar una generación completamente nueva de autoflorecientes: el Proyecto RF3. Esto marca el comienzo de un nuevo capítulo en vuestra genética, basado...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0e124dee2c41c7b6ac5998b9366b2299.jpg",
      link: "https://2fast4buds.com/es/news/nuevo-proyecto-de-cria-linea-rf3",
      date: "Hace 1 semana"
    },
    {
      title: "FastBuds.com vuelve a ser 2fast4buds.com",
      description: "Estamos cambiando nuestro nombre de dominio de fastbuds.com a 2fast4buds.com. ¿Por qué volver? Aunque fastbuds.com era breve y sencillo, el cambio generó retos inesperados...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_9d2d1ad6227d25d8309d3a9e88ca48eb.jpg",
      link: "https://2fast4buds.com/es/news/volviendo-a-2-fast-4-buds",
      date: "Hace 1 semana"
    },
    {
      title: "Apple Strudel Auto brilla en la Southside Cup 2025 en Alemania",
      description: "Nuestra Apple Strudel Auto se ha hecho con un puesto en la categoría 'Mejor autofloreciente 2025' en la Southside Cup de este año, celebrada en Stuttgart (Alemania)...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0cf3b1722d2d9e44e581a1d57c23c403.jpg",
      link: "https://2fast4buds.com/es/news/apple-strudel-gana-en-la-southside-cup-2025",
      date: "Hace 2 semanas"
    },
    {
      title: "¡Gana GG4 Fem en nuestro Discord!",
      description: "¡Nuestra nueva GG4 Fem estará en juego en la última edición de nuestro exclusivo sorteo de Discord! Diez afortunados ganadores tendrán la oportunidad de cultivar una...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_818f02450ba13627685a828808930971.jpg",
      link: "https://2fast4buds.com/es/news/septiembre-2025-sorteo-discord",
      date: "Hace 1 mes"
    },
    {
      title: "Compra 5 y llévate 5 gratis en todas las variedades Gorilla",
      description: "Con el lanzamiento de nuestra nueva GG4 Fem, queremos celebrar contigo el legendario legado Gorilla. Solo por tiempo limitado, puedes aprovechar la oferta...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0de4d20ff5bfd8f35135b2d92666bf8c.jpg",
      link: "https://2fast4buds.com/es/news/compra-5-llevate-5-gratis-en-todas-las-gorilas",
      date: "Hace 1 mes"
    },
  ],
  pt: [
    {
      title: "Banana Purple Punch Auto RF3: A melhor atualização do mercado",
      description: "Temos o orgulho de apresentar uma geração totalmente nova de autoflorescentes: o Projeto RF3. Isso marca o início de um novo capítulo na nossa genética, baseado em...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0e124dee2c41c7b6ac5998b9366b2299.jpg",
      link: "https://2fast4buds.com/pt/news/novo-projeto-de-criacao-linha-rf3",
      date: "Há 1 semana"
    },
    {
      title: "FastBuds.com volta a ser 2fast4buds.com",
      description: "Estamos a mudar o nosso nome de domínio de fastbuds.com de volta para 2fast4buds.com. Porquê voltar? Embora fastbuds.com fosse curto e simples, a mudança trouxe desafios...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_9d2d1ad6227d25d8309d3a9e88ca48eb.jpg",
      link: "https://2fast4buds.com/pt/news/voltando-para-o-2-fast-4-buds",
      date: "Há 1 semana"
    },
    {
      title: "Apple Strudel Auto brilha na Southside Cup 2025 na Alemanha",
      description: "A Apple Strudel Auto ficou em primeiro lugar na categoria Melhor Autoflorescente 2025 na Southside Cup deste ano em Stuttgart, Alemanha, onde 85 talentosos cultivadores mostraram...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0cf3b1722d2d9e44e581a1d57c23c403.jpg",
      link: "https://2fast4buds.com/pt/news/apple-strudel-vence-southside-cup-2025",
      date: "Há 1 semana"
    },
    {
      title: "Ganhe a GG4 Fem no nosso Discord!",
      description: "A nossa nova GG4 Fem está à disposição na última edição do nosso sorteio exclusivo no Discord! Dez sortudos vão ter a chance de cultivar uma...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_818f02450ba13627685a828808930971.jpg",
      link: "https://2fast4buds.com/pt/news/sorteio-setembro-2025-no-discord",
      date: "Há 1 mês"
    },
    {
      title: "Lançamento EXCLUSIVO da variedade e sorteio: GG4 Fem",
      description: "A GG4 Fem chegou oficialmente à nossa linha de fotoperiódicas 2025. Durante anos, cultivadores de todo o mundo pediram-nos para incluir este ícone na nossa coleção...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_70a62939ae726b2d36142d15468d897d.jpg",
      link: "https://2fast4buds.com/pt/news/lancamento-nova-estirpe-gg4-fem",
      date: "Há 2 meses"
    },
    {
      title: "O Pack Mix Fotoperiódico Atualizado",
      description: "O Pack Mix sempre foi um dos favoritos da nossa comunidade, graças ao seu excelente custo-benefício, diversidade de sabores e a oportunidade única de experimentar genéticas...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_696f429479ba45ac4b5c51bb167c7e2a.jpg",
      link: "https://2fast4buds.com/pt/news/pack-mix-fotoperiodico-atualizado-2025",
      date: "Há 2 meses"
    },
  ],
  fr: [
    {
      title: "Banana Purple Punch Auto RF3 : une mise à niveau haut de gamme",
      description: "Nous sommes fiers de dévoiler une toute nouvelle génération d'autofloraisons : le projet RF3. Cela marque le début d'un nouveau chapitre dans notre...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0e124dee2c41c7b6ac5998b9366b2299.jpg",
      link: "https://2fast4buds.com/fr/news/nouveau-projet-rf3-line",
      date: "Il y a 2 semaines"
    },
    {
      title: "Achetez-en 3, obtenez-en 3 gratuites sur toutes nos variétés gagnantes",
      description: "Il est temps de célébrer les champions de la gamme Fast Buds, les variétés qui ont marqué l'histoire et remporté des trophées. Pour une durée...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_4eca96017c0b4b0499e60905390d8970.jpg",
      link: "https://2fast4buds.com/fr/news/achetez-3-obtenez-3-gratuites-sur-nos-genetiques-gagnantes",
      date: "Il y a 3 semaines"
    },
    {
      title: "FastBuds.com revient à 2fast4buds.com",
      description: "Nous rétablissons notre nom de domaine fastbuds.com au profit de 2fast4buds.com. Pourquoi revenir ? Bien que fastbuds.com soit court et simple, ce changement a créé des...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_9d2d1ad6227d25d8309d3a9e88ca48eb.jpg",
      link: "https://2fast4buds.com/fr/news/on-revient-a-2-fast-4-buds",
      date: "Il y a 4 semaines"
    },
    {
      title: "Apple Strudel Auto brille à la Southside Cup 2025 en Allemagne",
      description: "Apple Strudel Auto s'est classée dans la catégorie « Meilleure autofloraison 2025 » lors de la Southside Cup qui s'est tenue cette année à Stuttgart, en...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0cf3b1722d2d9e44e581a1d57c23c403.jpg",
      link: "https://2fast4buds.com/fr/news/apple-strudel-brille-a-the-southside-cup-2025",
      date: "Il y a 4 semaines"
    },
    {
      title: "Gagnez GG4 Fem sur notre Discord !",
      description: "Notre toute nouvelle GG4 Fem est à gagner dans la dernière édition de notre concours Discord exclusif ! Dix heureux gagnants auront la chance de cultiver l'une des...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_818f02450ba13627685a828808930971.jpg",
      link: "https://2fast4buds.com/fr/news/giveaway-septembre-2025-discord",
      date: "Il y a 1 mois"
    },
    {
      title: "Achetez 5 et obtenez 5 gratuits sur toutes les variétés Gorilla",
      description: "Avec la sortie de notre toute nouvelle GG4 Fem, nous voulons célébrer avec vous l'héritage légendaire de Gorilla. Pour une durée limitée, vous pouvez...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0de4d20ff5bfd8f35135b2d92666bf8c.jpg",
      link: "https://2fast4buds.com/fr/news/achetez-5-obtenez-5-sur-toutes-les-gorillas",
      date: "Il y a 1 mois"
    },
  ],
  it: [
    {
      title: "Banana Purple Punch Auto RF3: Aggiornamento di Alta Gamma",
      description: "Siamo orgogliosi di presentare una generazione completamente nuova di autofiorenti: il Progetto RF3. Questo segna l'inizio di un nuovo capitolo nella nostra genetica, basato su precisione...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0e124dee2c41c7b6ac5998b9366b2299.jpg",
      link: "https://2fast4buds.com/it/news/nuovo-progetto-rf3-line",
      date: "2 settimane fa"
    },
    {
      title: "Acquista 3 e ricevi 3 gratis su tutte le nostre varietà pluripremiate",
      description: "È tempo di celebrare i campioni della linea Fast Buds, le varietà che hanno fatto la storia e portato a casa trofei. Solo per un periodo limitato, ti diamo la possibilità...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_4eca96017c0b4b0499e60905390d8970.jpg",
      link: "https://2fast4buds.com/it/news/compra-3-ricevi-3-semi-gratis-sulle-varieta-pluripremiate",
      date: "3 settimane fa"
    },
    {
      title: "FastBuds.com torna a 2fast4buds.com",
      description: "Stiamo ripristinando il nostro nome di dominio da fastbuds.com a 2fast4buds.com. Perché tornare indietro? Sebbene fastbuds.com fosse un sito breve e semplice, il cambiamento ha creato sfide...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_9d2d1ad6227d25d8309d3a9e88ca48eb.jpg",
      link: "https://2fast4buds.com/it/news/ritorno-a-2-fast-4-buds",
      date: "4 settimane fa"
    },
    {
      title: "Apple Strudel Auto Brilla alla Southside Cup 2025 in Germania",
      description: "Apple Strudel Auto si è aggiudicata un posto nella categoria Best Autoflower 2025 alla Southside Cup di quest'anno a Stoccarda, in Germania, dove 85 talentuosi coltivatori hanno presentato...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_0cf3b1722d2d9e44e581a1d57c23c403.jpg",
      link: "https://2fast4buds.com/it/news/apple-strudel-vince-alla-southside-cup-2025",
      date: "1 mese fa"
    },
    {
      title: "ESCLUSIVO Strain Drop e Giveaway: GG4 Fem",
      description: "GG4 Fem è ufficialmente arrivata nella nostra gamma di varietà fotoperiodiche del 2025. Per anni, i coltivatori di tutto il mondo ci hanno chiesto di aggiungere questa icona alla nostra...",
      image: "https://2fast4buds.com/temp/img_upload/m_bg_70a62939ae726b2d36142d15468d897d.jpg",
      link: "https://2fast4buds.com/it/news/nuova-varieta-esclusiva-gg4-fem",
      date: "2 mesi fa"
    },
  ],
};