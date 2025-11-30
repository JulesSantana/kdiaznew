import { useLanguage } from '../contexts/LanguageContext';

export function Prices() {
  const { t } = useLanguage();

  return (
    <section id="prices" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gradient-gold">
            {t.priceGuideModal.title}
          </h2>
          <p className="text-[#E5E5DC] max-w-2xl mx-auto">
            Descubre nuestros tratamientos y precios especiales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 via-[#E7C766]/20 to-[#D4AF37]/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-[#1A1A1C] rounded-lg p-2 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <img
                src="/guia precios 1 copy.jpg"
                alt="Lista de precios - K•Diaz Face & Body"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 via-[#E7C766]/20 to-[#D4AF37]/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-[#1A1A1C] rounded-lg p-2 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <img
                src="/image copy copy copy copy copy.png"
                alt="Lista de precios - K•Diaz Face & Body"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#E5E5DC] mb-6">
            ¿Tienes preguntas sobre nuestros tratamientos o precios?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-[#0B0B0C] font-medium rounded-lg hover:bg-[#C19B2F] transition-all duration-300 hover:scale-105"
          >
            Contacta con nosotros
          </a>
        </div>
      </div>
    </section>
  );
}
