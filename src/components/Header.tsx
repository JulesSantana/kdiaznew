import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${isScrolled ? 'bg-[#0B0B0C]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3 relative">
            {/* Ambient Glow Layer */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Floating Particles */}
            <div className="absolute -inset-8 pointer-events-none overflow-visible opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-1 h-1 bg-[#D4AF37] rounded-full" style={{ animation: 'particleFloat 3s ease-in-out infinite' }} />
              <div className="absolute top-2 right-2 w-1 h-1 bg-[#E7C766] rounded-full" style={{ animation: 'particleFloat 3s ease-in-out infinite 0.5s' }} />
              <div className="absolute bottom-2 left-4 w-1 h-1 bg-[#D4AF37] rounded-full" style={{ animation: 'particleFloat 3s ease-in-out infinite 1s' }} />
              <div className="absolute bottom-0 right-4 w-1 h-1 bg-[#E7C766] rounded-full" style={{ animation: 'particleFloat 3s ease-in-out infinite 1.5s' }} />
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="relative focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-lg transition-all duration-500 hover:scale-110 group"
            >
              {/* Energy Rings */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none">
                <div className="absolute inset-0 border-2 border-[#D4AF37]/30 rounded-lg" style={{ animation: 'energyRing 2s ease-out infinite' }} />
                <div className="absolute inset-0 border-2 border-[#E7C766]/30 rounded-lg" style={{ animation: 'energyRing 2s ease-out infinite 0.6s' }} />
                <div className="absolute inset-0 border-2 border-[#D4AF37]/30 rounded-lg" style={{ animation: 'energyRing 2s ease-out infinite 1.2s' }} />
              </div>

              {/* Orbiting Particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" style={{ animation: 'orbitRotate 4s linear infinite' }} />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-1 h-1 bg-[#E7C766] rounded-full" style={{ animation: 'orbitRotate 3s linear infinite reverse' }} />
                </div>
              </div>

              {/* Multi-layered Glows */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/20 via-[#E7C766]/40 to-[#D4AF37]/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37]/30 via-transparent to-[#E7C766]/30 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-700" />

              {/* Scanline Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" style={{ animation: 'scanline 3s linear infinite' }} />
              </div>

              {/* Logo with Enhanced Glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-[#E7C766]/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/image2(5) copy.jpeg"
                  alt="Katherine Diaz - Face & Body Studio"
                  className="h-12 w-auto relative z-10 drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-500"
                  style={{ filter: 'contrast(1.05) brightness(1.05)' }}
                />
              </div>

              {/* Bottom Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500" />

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/60 rounded-tl-lg transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/60 rounded-br-lg transition-all duration-500" />
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex flex-col focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-2 py-1 transition-all duration-500 group relative"
            >
              {/* Text Background Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/10 via-[#E7C766]/25 to-[#D4AF37]/10 rounded opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-700" />
              <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37]/5 to-[#E7C766]/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shimmer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 rounded" style={{ animation: 'shimmer 2s linear infinite' }} />

              {/* Text with Enhanced Effects */}
              <span className="text-[#F6F5F0] font-serif text-lg tracking-tight relative z-10 group-hover:text-shimmer transition-all duration-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]">
                K•Diaz
              </span>
              <span className="text-[#D4AF37] text-xs tracking-wider relative z-10 group-hover:text-glow transition-all duration-500 drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
                Face & Body
              </span>

              {/* Corner Light Beams */}
              <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-r from-[#D4AF37]/0 to-[#D4AF37]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-8 h-px bg-gradient-to-l from-[#D4AF37]/0 to-[#D4AF37]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('indiba')}
              className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-2 py-1"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-2 py-1"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('prices')}
              className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-2 py-1"
            >
              {t.nav.prices}
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-2 py-1"
            >
              {t.nav.results}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-2 py-1"
            >
              {t.nav.testimonials}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-2 py-1"
            >
              {t.nav.contact}
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center border border-[#2A2A2A] rounded-lg overflow-hidden">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-inset ${
                  language === 'es'
                    ? 'bg-[#D4AF37] text-[#111111]'
                    : 'text-[#F6F5F0] hover:text-[#D4AF37]'
                }`}
                aria-pressed={language === 'es'}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-inset ${
                  language === 'en'
                    ? 'bg-[#D4AF37] text-[#111111]'
                    : 'text-[#F6F5F0] hover:text-[#D4AF37]'
                }`}
                aria-pressed={language === 'en'}
              >
                EN
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#F6F5F0] hover:text-[#D4AF37] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded p-2"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0B0B0C] border-t border-[#2A2A2A] py-4 animate-slideDown">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('indiba')}
                className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors text-left px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors text-left px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('prices')}
                className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors text-left px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded"
              >
                {t.nav.prices}
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors text-left px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded"
              >
                {t.nav.results}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors text-left px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded"
              >
                {t.nav.testimonials}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors text-left px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded"
              >
                {t.nav.contact}
              </button>

              <div className="flex items-center justify-center space-x-2 pt-2">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-4 py-2 text-sm font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] ${
                    language === 'es'
                      ? 'bg-[#D4AF37] text-[#111111]'
                      : 'text-[#F6F5F0] border border-[#2A2A2A] hover:text-[#D4AF37]'
                  }`}
                  aria-pressed={language === 'es'}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 text-sm font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] ${
                    language === 'en'
                      ? 'bg-[#D4AF37] text-[#111111]'
                      : 'text-[#F6F5F0] border border-[#2A2A2A] hover:text-[#D4AF37]'
                  }`}
                  aria-pressed={language === 'en'}
                >
                  EN
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
