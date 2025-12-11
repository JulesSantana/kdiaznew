import { useLanguage } from '../contexts/LanguageContext';

export function Prices() {
  const { t } = useLanguage();

  return (
    <section id="prices" className="py-20 px-4 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 text-shimmer text-glow">
            {t.nav.prices}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
}
