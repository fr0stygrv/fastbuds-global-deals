import type { VercelRequest, VercelResponse } from '@vercel/node';

// Coupon data - must match src/data/coupons.ts structure
const coupons = [
  {
    id: '1',
    code: 'SAVEMAX',
    discount: '20%',
    image: '/images/coupons/savemax.png',
    content: {
      en: { title: 'Maximum Savings - 20% Off Everything!', description: 'Unlock the biggest discount available! Save 20% on all Fast Buds premium autoflowering seeds.', slug: 'en/coupon/maximum-savings-20-off-everything' },
      de: { title: 'Maximale Ersparnis - 20% auf Alles!', description: 'Sichern Sie sich den größten verfügbaren Rabatt! Sparen Sie 20% auf alle Fast Buds Premium-Autoflowering-Samen.', slug: 'de/coupon/maximale-ersparnis-20-auf-alles' },
      es: { title: 'Ahorro Máximo - ¡20% en Todo!', description: '¡Desbloquea el descuento más grande disponible! Ahorra 20% en todas las semillas autoflorecientes premium de Fast Buds.', slug: 'es/cupon/ahorro-maximo-20-en-todo' },
      pt: { title: 'Economia Máxima - 20% em Tudo!', description: 'Desbloqueie o maior desconto disponível! Economize 20% em todas as sementes autoflorescentes premium da Fast Buds.', slug: 'pt/cupom/economia-maxima-20-em-tudo' },
      fr: { title: 'Économies Maximales - 20% sur Tout!', description: 'Débloquez la plus grosse réduction disponible! Économisez 20% sur toutes les graines autoflorissantes premium Fast Buds.', slug: 'fr/coupon/economies-maximales-20-sur-tout' },
      it: { title: 'Risparmi Massimi - 20% su Tutto!', description: 'Sblocca lo sconto più grande disponibile! Risparmia il 20% su tutti i semi autofiorenti premium di Fast Buds.', slug: 'it/coupon/risparmi-massimi-20-su-tutto' }
    }
  },
  {
    id: '2',
    code: 'GREEN15',
    discount: '15%',
    image: '/images/coupons/green.png',
    content: {
      en: { title: 'Green Thumb Special - 15% Off Seeds', description: 'Perfect for passionate growers! Get 15% off all Fast Buds autoflowering seeds and cultivate your green paradise.', slug: 'en/coupon/green-thumb-15-off-seeds' },
      de: { title: 'Grüner Daumen Spezial - 15% Rabatt', description: 'Perfekt für leidenschaftliche Züchter! Erhalten Sie 15% Rabatt auf alle Fast Buds Autoflowering-Samen.', slug: 'de/coupon/gruener-daumen-15-rabatt' },
      es: { title: 'Especial Pulgar Verde - 15% Descuento', description: '¡Perfecto para cultivadores apasionados! Obtén 15% de descuento en todas las semillas autoflorecientes de Fast Buds.', slug: 'es/cupon/pulgar-verde-15-descuento' },
      pt: { title: 'Especial Polegar Verde - 15% Desconto', description: 'Perfeito para cultivadores apaixonados! Ganhe 15% de desconto em todas as sementes autoflorescentes da Fast Buds.', slug: 'pt/cupom/polegar-verde-15-desconto' },
      fr: { title: 'Spécial Main Verte - 15% Réduction', description: 'Parfait pour les cultivateurs passionnés! Obtenez 15% de réduction sur toutes les graines autofloraison Fast Buds.', slug: 'fr/coupon/main-verte-15-reduction' },
      it: { title: 'Speciale Pollice Verde - 15% Sconto', description: 'Perfetto per coltivatori appassionati! Ottieni il 15% di sconto su tutti i semi autofiorenti Fast Buds.', slug: 'it/coupon/pollice-verde-15-sconto' }
    }
  },
  {
    id: '3',
    code: 'GROW420',
    discount: '10%',
    image: '/images/coupons/grow420.png',
    content: {
      en: { title: 'Grow Big Discount - 10% Off All Orders', description: 'Start your growing journey right! Save 10% on all Fast Buds premium autoflowering seeds. Perfect for beginners and pros.', slug: 'en/coupon/grow-big-10-off-all-orders' },
      de: { title: 'Groß Wachsen Rabatt - 10% auf Alle Bestellungen', description: 'Beginnen Sie Ihre Züchterreise richtig! Sparen Sie 10% auf alle Fast Buds Premium-Autoflowering-Samen.', slug: 'de/coupon/gross-wachsen-10-rabatt' },
      es: { title: 'Descuento Crecer Grande - 10% en Todos los Pedidos', description: '¡Comienza tu viaje de cultivo correctamente! Ahorra 10% en todas las semillas autoflorecientes premium de Fast Buds.', slug: 'es/cupon/crecer-grande-10-descuento' },
      pt: { title: 'Desconto Crescer Grande - 10% em Todos os Pedidos', description: 'Comece sua jornada de cultivo da maneira certa! Economize 10% em todas as sementes autoflorescentes premium da Fast Buds.', slug: 'pt/cupom/crescer-grande-10-desconto' },
      fr: { title: 'Réduction Croissance - 10% sur Toutes Commandes', description: 'Commencez votre parcours de culture correctement! Économisez 10% sur toutes les graines autofloraison premium Fast Buds.', slug: 'fr/coupon/croissance-10-reduction' },
      it: { title: 'Sconto Crescita Grande - 10% su Tutti gli Ordini', description: 'Inizia il tuo viaggio di coltivazione nel modo giusto! Risparmia il 10% su tutti i semi autofiorenti premium Fast Buds.', slug: 'it/coupon/crescita-grande-10-sconto' }
    }
  },
  {
    id: '4',
    code: 'AUTOFLOWER',
    discount: '12%',
    image: '/images/coupons/autoflower.png',
    content: {
      en: { title: 'Autoflower Ace - 12% Off Autos', description: 'Master the autoflowering game! Get 12% off all Fast Buds autoflowering seeds - the fastest path to harvest.', slug: 'en/coupon/autoflower-ace-12-off-autos' },
      de: { title: 'Autoflower Ass - 12% Rabatt auf Autos', description: 'Meistern Sie das Autoflowering-Spiel! Erhalten Sie 12% Rabatt auf alle Fast Buds Autoflowering-Samen.', slug: 'de/coupon/autoflower-ass-12-rabatt' },
      es: { title: 'As Autofloreciente - 12% Descuento en Autos', description: '¡Domina el juego de las autoflorecientes! Obtén 12% de descuento en todas las semillas autoflorecientes de Fast Buds.', slug: 'es/cupon/as-autofloreciente-12-descuento' },
      pt: { title: 'Autoflor Asso - 12% Desconto em Autos', description: 'Domine o jogo das autoflorescentes! Ganhe 12% de desconto em todas as sementes autoflorescentes da Fast Buds.', slug: 'pt/cupom/autoflor-asso-12-desconto' },
      fr: { title: 'As Autoflo - 12% Réduction sur Autos', description: 'Maîtrisez le jeu de l\'autofloraison! Obtenez 12% de réduction sur toutes les graines autofloraison Fast Buds.', slug: 'fr/coupon/as-autoflo-12-reduction' },
      it: { title: 'Asso Autofiorente - 12% Sconto su Auto', description: 'Padroneggia il gioco degli autofiorenti! Ottieni il 12% di sconto su tutti i semi autofiorenti Fast Buds.', slug: 'it/coupon/asso-autofiorente-12-sconto' }
    }
  },
  {
    id: '5',
    code: 'BUDLOVER',
    discount: '15%',
    image: '/images/coupons/budlover.png',
    content: {
      en: { title: 'Bud Lover\'s Special - 15% Discount', description: 'For true cannabis connoisseurs! Save 15% on Fast Buds premium genetics and grow the finest buds.', slug: 'en/coupon/bud-lovers-special-15-discount' },
      de: { title: 'Knospenliebhaber Spezial - 15% Rabatt', description: 'Für wahre Cannabis-Kenner! Sparen Sie 15% auf Fast Buds Premium-Genetik und züchten Sie die feinsten Knospen.', slug: 'de/coupon/knospenliebhaber-15-rabatt' },
      es: { title: 'Especial Amante de Cogollos - 15% Descuento', description: '¡Para verdaderos conocedores del cannabis! Ahorra 15% en genética premium de Fast Buds.', slug: 'es/cupon/amante-cogollos-15-descuento' },
      pt: { title: 'Especial Amante de Brotos - 15% Desconto', description: 'Para verdadeiros conhecedores de cannabis! Economize 15% em genética premium da Fast Buds.', slug: 'pt/cupom/amante-brotos-15-desconto' },
      fr: { title: 'Spécial Amoureux des Bourgeons - 15% Réduction', description: 'Pour les vrais connaisseurs de cannabis! Économisez 15% sur la génétique premium Fast Buds.', slug: 'fr/coupon/amoureux-bourgeons-15-reduction' },
      it: { title: 'Speciale Amante dei Boccioli - 15% Sconto', description: 'Per veri intenditori di cannabis! Risparmia il 15% sulla genetica premium Fast Buds.', slug: 'it/coupon/amante-boccioli-15-sconto' }
    }
  },
  {
    id: '6',
    code: 'SAVE4U',
    discount: '10%',
    image: '/images/coupons/save4u.png',
    content: {
      en: { title: 'High Quality Seeds - 10% Off', description: 'Quality matters! Get 10% off all Fast Buds seeds and experience championship genetics in your grow.', slug: 'en/coupon/high-quality-seeds-10-off' },
      de: { title: 'Hochwertige Samen - 10% Rabatt', description: 'Qualität zählt! Erhalten Sie 10% Rabatt auf alle Fast Buds Samen und erleben Sie Meisterschafts-Genetik.', slug: 'de/coupon/hochwertige-samen-10-rabatt' },
      es: { title: 'Semillas de Alta Calidad - 10% Descuento', description: '¡La calidad importa! Obtén 10% de descuento en todas las semillas Fast Buds.', slug: 'es/cupon/semillas-alta-calidad-10-descuento' },
      pt: { title: 'Sementes de Alta Qualidade - 10% Desconto', description: 'Qualidade importa! Ganhe 10% de desconto em todas as sementes Fast Buds.', slug: 'pt/cupom/sementes-alta-qualidade-10-desconto' },
      fr: { title: 'Graines Haute Qualité - 10% Réduction', description: 'La qualité compte! Obtenez 10% de réduction sur toutes les graines Fast Buds.', slug: 'fr/coupon/graines-haute-qualite-10-reduction' },
      it: { title: 'Semi Alta Qualità - 10% Sconto', description: 'La qualità conta! Ottieni il 10% di sconto su tutti i semi Fast Buds.', slug: 'it/coupon/semi-alta-qualita-10-sconto' }
    }
  },
  {
    id: '7',
    code: 'CHUCKLE',
    discount: '8%',
    image: '/images/coupons/chuckle.png',
    content: {
      en: { title: 'Chuckle Friendly - 8% Discount', description: 'Bring a smile to your grow! Save 8% on Fast Buds seeds and enjoy the lighter side of cultivation.', slug: 'en/coupon/chuckle-friendly-8-discount' },
      de: { title: 'Kichern Freundlich - 8% Rabatt', description: 'Bringen Sie ein Lächeln in Ihren Anbau! Sparen Sie 8% auf Fast Buds Samen.', slug: 'de/coupon/kichern-freundlich-8-rabatt' },
      es: { title: 'Amigable Risa - 8% Descuento', description: '¡Trae una sonrisa a tu cultivo! Ahorra 8% en semillas Fast Buds.', slug: 'es/cupon/risa-amigable-8-descuento' },
      pt: { title: 'Risada Amigável - 8% Desconto', description: 'Traga um sorriso para seu cultivo! Economize 8% em sementes Fast Buds.', slug: 'pt/cupom/risada-amigavel-8-desconto' },
      fr: { title: 'Rire Amical - 8% Réduction', description: 'Apportez un sourire à votre culture! Économisez 8% sur les graines Fast Buds.', slug: 'fr/coupon/rire-amical-8-reduction' },
      it: { title: 'Risata Amichevole - 8% Sconto', description: 'Porta un sorriso alla tua coltivazione! Risparmia l\'8% sui semi Fast Buds.', slug: 'it/coupon/risata-amichevole-8-sconto' }
    }
  },
  {
    id: '8',
    code: 'STONER',
    discount: '12%',
    image: '/images/coupons/stoner.png',
    content: {
      en: { title: 'Stoner Saver - 12% Off', description: 'For the dedicated enthusiast! Get 12% off all Fast Buds seeds and elevate your growing experience.', slug: 'en/coupon/stoner-saver-12-percent-off' },
      de: { title: 'Kiffer Sparer - 12% Rabatt', description: 'Für den engagierten Enthusiasten! Erhalten Sie 12% Rabatt auf alle Fast Buds Samen.', slug: 'de/coupon/kiffer-sparer-12-prozent-rabatt' },
      es: { title: 'Ahorrador Fumeta - 12% Descuento', description: '¡Para el entusiasta dedicado! Obtén 12% de descuento en todas las semillas Fast Buds.', slug: 'es/cupon/ahorrador-fumeta-12-por-ciento' },
      pt: { title: 'Poupador Maconheiro - 12% Desconto', description: 'Para o entusiasta dedicado! Ganhe 12% de desconto em todas as sementes Fast Buds.', slug: 'pt/cupom/poupador-maconheiro-12-por-cento' },
      fr: { title: 'Économe Fumeur - 12% Réduction', description: 'Pour l\'enthousiaste dévoué! Obtenez 12% de réduction sur toutes les graines Fast Buds.', slug: 'fr/coupon/econome-fumeur-12-pourcent' },
      it: { title: 'Risparmiatore Fumatore - 12% Sconto', description: 'Per l\'appassionato dedicato! Ottieni il 12% di sconto su tutti i semi Fast Buds.', slug: 'it/coupon/risparmiatore-fumatore-12-percento' }
    }
  },
  {
    id: '9',
    code: 'NEWGROWER',
    discount: '10%',
    image: '/images/coupons/green.png',
    content: {
      en: { title: 'New Grower Discount - 10% Off', description: 'Welcome to the growing community! Start your journey with 10% off all Fast Buds autoflowering seeds.', slug: 'en/coupon/new-grower-discount-10-off' },
      de: { title: 'Neuer Züchter Rabatt - 10% Rabatt', description: 'Willkommen in der Züchter-Community! Beginnen Sie mit 10% Rabatt auf alle Fast Buds Autoflowering-Samen.', slug: 'de/coupon/neuer-zuechter-10-rabatt' },
      es: { title: 'Descuento Nuevo Cultivador - 10% Descuento', description: '¡Bienvenido a la comunidad de cultivadores! Comienza con 10% de descuento en todas las semillas Fast Buds.', slug: 'es/cupon/nuevo-cultivador-10-descuento' },
      pt: { title: 'Desconto Novo Cultivador - 10% Desconto', description: 'Bem-vindo à comunidade de cultivadores! Comece com 10% de desconto em todas as sementes Fast Buds.', slug: 'pt/cupom/novo-cultivador-10-desconto' },
      fr: { title: 'Réduction Nouveau Cultivateur - 10% Réduction', description: 'Bienvenue dans la communauté des cultivateurs! Commencez avec 10% de réduction sur toutes les graines Fast Buds.', slug: 'fr/coupon/nouveau-cultivateur-10-reduction' },
      it: { title: 'Sconto Nuovo Coltivatore - 10% Sconto', description: 'Benvenuto nella comunità dei coltivatori! Inizia con il 10% di sconto su tutti i semi Fast Buds.', slug: 'it/coupon/nuovo-coltivatore-10-sconto' }
    }
  },
  {
    id: '10',
    code: 'ORGANIC8',
    discount: '8%',
    image: '/images/coupons/green.png',
    content: {
      en: { title: 'Organic Grow - 8% Discount', description: 'Grow naturally! Save 8% on all Fast Buds seeds perfect for organic cultivation methods.', slug: 'en/coupon/organic-grow-8-percent-discount' },
      de: { title: 'Bio-Anbau - 8% Rabatt', description: 'Natürlich wachsen! Sparen Sie 8% auf alle Fast Buds Samen, perfekt für biologische Anbaumethoden.', slug: 'de/coupon/bio-anbau-8-prozent-rabatt' },
      es: { title: 'Cultivo Orgánico - 8% Descuento', description: '¡Cultiva naturalmente! Ahorra 8% en todas las semillas Fast Buds perfectas para métodos de cultivo orgánico.', slug: 'es/cupon/cultivo-organico-8-por-ciento' },
      pt: { title: 'Cultivo Orgânico - 8% Desconto', description: 'Cultive naturalmente! Economize 8% em todas as sementes Fast Buds perfeitas para métodos de cultivo orgânico.', slug: 'pt/cupom/cultivo-organico-8-por-cento' },
      fr: { title: 'Culture Bio - 8% Réduction', description: 'Cultivez naturellement! Économisez 8% sur toutes les graines Fast Buds parfaites pour les méthodes de culture biologique.', slug: 'fr/coupon/culture-bio-8-pourcent' },
      it: { title: 'Coltivazione Biologica - 8% Sconto', description: 'Coltiva naturalmente! Risparmia l\'8% su tutti i semi Fast Buds perfetti per metodi di coltivazione biologica.', slug: 'it/coupon/coltivazione-biologica-8-percento' }
    }
  },
  {
    id: '11',
    code: 'FASTBUDS10',
    discount: '10%',
    image: '/images/coupons/fastbuds.png',
    content: {
      en: { title: 'Fast Buds Fan Exclusive - 10% Off', description: 'For loyal fans! Enjoy 10% off all Fast Buds seeds and join thousands of satisfied growers worldwide.', slug: 'en/coupon/fastbuds-fan-exclusive-10-off' },
      de: { title: 'Fast Buds Fan Exklusiv - 10% Rabatt', description: 'Für treue Fans! Genießen Sie 10% Rabatt auf alle Fast Buds Samen.', slug: 'de/coupon/fastbuds-fan-exklusiv-10-rabatt' },
      es: { title: 'Exclusivo Fan Fast Buds - 10% Descuento', description: '¡Para fans leales! Disfruta 10% de descuento en todas las semillas Fast Buds.', slug: 'es/cupon/fan-fastbuds-exclusivo-10-descuento' },
      pt: { title: 'Exclusivo Fã Fast Buds - 10% Desconto', description: 'Para fãs leais! Aproveite 10% de desconto em todas as sementes Fast Buds.', slug: 'pt/cupom/fa-fastbuds-exclusivo-10-desconto' },
      fr: { title: 'Exclusif Fan Fast Buds - 10% Réduction', description: 'Pour les fans fidèles! Profitez de 10% de réduction sur toutes les graines Fast Buds.', slug: 'fr/coupon/fan-fastbuds-exclusif-10-reduction' },
      it: { title: 'Esclusivo Fan Fast Buds - 10% Sconto', description: 'Per fan fedeli! Goditi il 10% di sconto su tutti i semi Fast Buds.', slug: 'it/coupon/fan-fastbuds-esclusivo-10-sconto' }
    }
  }
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { slug } = req.query;
  
  if (!slug || typeof slug !== 'string') {
    return res.status(400).send('Missing slug parameter');
  }

  // Find coupon by slug across all languages
  let foundCoupon = null;
  let foundLang = null;
  let foundContent = null;

  for (const coupon of coupons) {
    for (const [lang, content] of Object.entries(coupon.content)) {
      if (content.slug === slug) {
        foundCoupon = coupon;
        foundLang = lang;
        foundContent = content;
        break;
      }
    }
    if (foundCoupon) break;
  }

  if (!foundCoupon || !foundContent) {
    return res.status(404).send('Coupon not found');
  }

  const baseUrl = 'https://fastbuds-coupon.com';
  const imageUrl = foundCoupon.image ? `${baseUrl}${foundCoupon.image}` : `${baseUrl}/images/coupons/savemax.png`;
  const canonicalUrl = `${baseUrl}/${foundContent.slug}`;

  const html = `<!DOCTYPE html>
<html lang="${foundLang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${foundContent.title} | Fast Buds Coupon Code ${foundCoupon.code}</title>
  <meta name="description" content="${foundContent.description}">
  <link rel="canonical" href="${canonicalUrl}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${foundContent.title}">
  <meta property="og:description" content="${foundContent.description}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${canonicalUrl}">
  <meta name="twitter:title" content="${foundContent.title}">
  <meta name="twitter:description" content="${foundContent.description}">
  <meta name="twitter:image" content="${imageUrl}">
  
  <meta http-equiv="refresh" content="0;url=${canonicalUrl}">
  <script>window.location.href = "${canonicalUrl}";</script>
</head>
<body>
  <h1>${foundContent.title}</h1>
  <p>${foundContent.description}</p>
  <p>Code: <strong>${foundCoupon.code}</strong> - ${foundCoupon.discount} off</p>
  <p>Redirecting to <a href="${canonicalUrl}">${canonicalUrl}</a>...</p>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400');
  res.status(200).send(html);
}
