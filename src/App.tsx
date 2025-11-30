import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { IndibaPage } from './components/IndibaPage';
import { About } from './components/About';
import { Prices } from './components/Prices';
import { Results } from './components/Results';
import { Testimonials } from './components/Testimonials';
import { LogoBanner } from './components/LogoBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PriceGuideModal } from './components/PriceGuideModal';
import { CookieBanner } from './components/CookieBanner';

function App() {
  const [isPriceGuideOpen, setIsPriceGuideOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0B0B0C] text-[#F6F5F0] relative">
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-40 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent data-stream" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/3 w-2 h-40 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent data-stream" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-2 h-40 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent data-stream" style={{ animationDelay: '2s' }} />
          <div className="absolute top-2/3 right-1/4 w-2 h-40 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent data-stream" style={{ animationDelay: '1.5s' }} />

          <div className="absolute top-20 left-10 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10">
          <Header />
          <main>
          <Hero onOpenPriceGuide={() => setIsPriceGuideOpen(true)} />
          <Services />
          <IndibaPage />
          <About />
          <Prices />
          <Results />
          <Testimonials />
          <LogoBanner />
          <Contact />
        </main>
          <Footer />
          <PriceGuideModal
            isOpen={isPriceGuideOpen}
            onClose={() => setIsPriceGuideOpen(false)}
          />
          <CookieBanner />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
