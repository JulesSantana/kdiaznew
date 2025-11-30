import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './Button';
import { Chip } from './Chip';

interface HeroProps {
  onOpenPriceGuide: () => void;
}

export function Hero({ onOpenPriceGuide }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slideRight">
            <div className="space-y-4 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
              <div className="absolute -left-4 top-0 w-1 h-20 bg-[#D4AF37] animate-slideDown" style={{ animationDelay: '0.5s' }} />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-shimmer text-glow">
                {t.tagline}
              </h1>
              <p className="text-xl sm:text-2xl text-gradient-gold font-light italic">
                {t.sub}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {t.trust.map((item, index) => (
                <Chip key={index} variant="gold">
                  {item}
                </Chip>
              ))}
            </div>

            <Button
              variant="solid"
              className="flex items-center justify-center gap-2"
              onClick={() => window.open('https://wa.me/34634225951', '_blank')}
            >
              <MessageCircle size={20} />
              {t.ctas.book}
            </Button>
          </div>

          <div className="relative animate-slideLeft space-y-6" style={{ animationDelay: '200ms' }}>
            <div className="text-center space-y-2 animate-scaleIn" style={{ animationDelay: '400ms' }}>
              <p className="text-lg font-serif text-[#F6F5F0] text-shimmer">Katherine Diaz</p>
              <p className="text-sm text-gradient-gold">Founder & Aesthetic Medicine Specialist</p>
            </div>

            <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-[#E7C766]/10 to-[#D4AF37]/20 rounded-3xl blur-xl opacity-50 energy-pulse" />

            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_0_80px_rgba(212,175,55,0.3)] backdrop-blur-sm border-glow scanline-effect">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5" />

              <div className="absolute inset-0 grid-overlay" />

              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent holographic-border" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent holographic-border" />
              <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent holographic-border" />
              <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent holographic-border" />

              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37]/60" />
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#D4AF37]/60" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#D4AF37]/60" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#D4AF37]/60" />

              <img
                src="/image0(13) copy.jpeg"
                alt="Katherine Diaz - Founder & Aesthetic Medicine Specialist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
