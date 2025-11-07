import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

// Import data for route generation
const languages = [
  { code: 'en' }, { code: 'de' }, { code: 'es' }, 
  { code: 'pt' }, { code: 'fr' }, { code: 'it' }
];

const couponSlugs = [
  'en/coupon/maximum-savings-20-off-everything',
  'de/coupon/maximale-ersparnis-20-auf-alles',
  'es/cupon/ahorro-maximo-20-en-todo',
  'pt/cupom/economia-maxima-20-em-tudo',
  'fr/coupon/economies-maximales-20-sur-tout',
  'it/coupon/risparmi-massimi-20-su-tutto',
  'en/coupon/green-thumb-15-off-seeds',
  'de/coupon/gruener-daumen-15-rabatt',
  'es/cupon/pulgar-verde-15-descuento',
  'pt/cupom/polegar-verde-15-desconto',
  'fr/coupon/main-verte-15-reduction',
  'it/coupon/pollice-verde-15-sconto',
  'en/coupon/grow-big-10-off-all-orders',
  'de/coupon/gross-wachsen-10-rabatt',
  'es/cupon/crecer-grande-10-descuento',
  'pt/cupom/crescer-grande-10-desconto',
  'fr/coupon/croissance-10-reduction',
  'it/coupon/crescita-grande-10-sconto',
  'en/coupon/autoflower-ace-12-off-autos',
  'de/coupon/autoflower-ass-12-rabatt',
  'es/cupon/as-autofloreciente-12-descuento',
  'pt/cupom/autoflor-asso-12-desconto',
  'fr/coupon/as-autoflo-12-reduction',
  'it/coupon/asso-autofiorente-12-sconto',
  'en/coupon/bud-lovers-special-15-discount',
  'de/coupon/knospenliebhaber-15-rabatt',
  'es/cupon/amante-cogollos-15-descuento',
  'pt/cupom/amante-brotos-15-desconto',
  'fr/coupon/amoureux-bourgeons-15-reduction',
  'it/coupon/amante-boccioli-15-sconto',
  'en/coupon/high-quality-seeds-10-off',
  'de/coupon/hochwertige-samen-10-rabatt',
  'es/cupon/semillas-alta-calidad-10-descuento',
  'pt/cupom/sementes-alta-qualidade-10-desconto',
  'fr/coupon/graines-haute-qualite-10-reduction',
  'it/coupon/semi-alta-qualita-10-sconto',
  'en/coupon/chuckle-friendly-8-discount',
  'de/coupon/kichern-freundlich-8-rabatt',
  'es/cupon/risa-amigable-8-descuento',
  'pt/cupom/risada-amigavel-8-desconto',
  'fr/coupon/rire-amical-8-reduction',
  'it/coupon/risata-amichevole-8-sconto',
  'en/coupon/stoner-saver-12-percent-off',
  'de/coupon/kiffer-sparer-12-prozent-rabatt',
  'es/cupon/ahorrador-fumeta-12-por-ciento',
  'pt/cupom/poupador-maconheiro-12-por-cento',
  'fr/coupon/econome-fumeur-12-pourcent',
  'it/coupon/risparmiatore-fumatore-12-percento',
  'en/coupon/new-grower-discount-10-off',
  'de/coupon/neuer-zuechter-10-rabatt',
  'es/cupon/nuevo-cultivador-10-descuento',
  'pt/cupom/novo-cultivador-10-desconto',
  'fr/coupon/nouveau-cultivateur-10-reduction',
  'it/coupon/nuovo-coltivatore-10-sconto',
  'en/coupon/organic-grow-8-percent-discount',
  'de/coupon/bio-anbau-8-prozent-rabatt',
  'es/cupon/cultivo-organico-8-por-ciento',
  'pt/cupom/cultivo-organico-8-por-cento',
  'fr/coupon/culture-bio-8-pourcent',
  'it/coupon/coltivazione-biologica-8-percento',
  'en/coupon/fastbuds-fan-exclusive-10-off',
  'de/coupon/fastbuds-fan-exklusiv-10-rabatt',
  'es/cupon/fan-fastbuds-exclusivo-10-descuento',
  'pt/cupom/fa-fastbuds-exclusivo-10-desconto',
  'fr/coupon/fan-fastbuds-exclusif-10-reduction',
  'it/coupon/fan-fastbuds-esclusivo-10-sconto'
];

// Generate all routes
const generateRoutes = () => {
  const routes: string[] = ['/'];
  
  languages.forEach(lang => {
    routes.push(`/${lang.code}`);
    routes.push(`/${lang.code}/faq`);
    routes.push(`/${lang.code}/about`);
    routes.push(`/${lang.code}/contact`);
    routes.push(`/${lang.code}/news`);
    routes.push(`/${lang.code}/sitemap`);
  });
  
  couponSlugs.forEach(slug => {
    routes.push(`/${slug}`);
  });
  
  return routes;
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && prerender({
      routes: generateRoutes(),
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        maxConcurrentRoutes: 4,
        renderAfterTime: 1000,
        headless: true,
      },
      postProcess(renderedRoute: any) {
        // Clean up inline scripts for better SEO
        renderedRoute.html = renderedRoute.html.replace(
          /<script type="module" crossorigin src="[^"]*"><\/script>/gi,
          ''
        );
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
