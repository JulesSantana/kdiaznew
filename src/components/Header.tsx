import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './Button';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0B0B0C]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-[0_4px_30px_rgba(212,175,55,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-serif tracking-wider text-gradient-gold hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {t.brand}
          </button>

          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors duration-300 text-sm tracking-wide"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors duration-300 text-sm tracking-wide"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('prices')}
              className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors duration-300 text-sm tracking-wide"
            >
              {t.nav.prices}
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors duration-300 text-sm tracking-wide"
            >
              {t.nav.results}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors duration-300 text-sm tracking-wide"
            >
              {t.nav.testimonials}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors duration-300 text-sm tracking-wide"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors duration-300 text-sm text-[#F6F5F0]"
              aria-label="Toggle language"
            >
              <Globe size={16} />
              <span className="uppercase">{language}</span>
            </button>

            <Button
              variant="outline"
              className="hidden lg:flex items-center gap-2"
              onClick={() => window.open('https://wa.me/34634225951', '_blank')}
            >
              <MessageCircle size={18} />
              {t.ctas.book}
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#F6F5F0] hover:text-[#D4AF37] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-[#D4AF37]/20 animate-slideDown">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors duration-300 text-left py-2"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors duration-300 text-left py-2"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('prices')}
                className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors duration-300 text-left py-2"
              >
                {t.nav.prices}
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors duration-300 text-left py-2"
              >
                {t.nav.results}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors duration-300 text-left py-2"
              >
                {t.nav.testimonials}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors duration-300 text-left py-2"
              >
                {t.nav.contact}
              </button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 mt-2"
                onClick={() => window.open('https://wa.me/34634225951', '_blank')}
              >
                <MessageCircle size={18} />
                {t.ctas.book}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
