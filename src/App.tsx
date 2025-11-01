import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Home from "./pages/Home";
import CouponDetail from "./pages/CouponDetail";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Routes>
                {/* Redirect root to /en */}
                <Route path="/" element={<Navigate to="/en" replace />} />
                
                {/* Language-specific routes */}
                <Route path="/:lang" element={<Home />} />
                <Route path="/:lang/:word/:slug" element={<CouponDetail />} />
                <Route path="/:lang/faq" element={<FAQ />} />
                <Route path="/:lang/about" element={<About />} />
                <Route path="/:lang/contact" element={<Contact />} />
                <Route path="/:lang/news" element={<News />} />
                <Route path="/:lang/sitemap" element={<Sitemap />} />
                
                {/* Catch-all 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
