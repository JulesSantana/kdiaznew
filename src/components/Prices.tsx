import { useLanguage } from '../contexts/LanguageContext';

export function Prices() {
  const { language } = useLanguage();

  return (
    <section id="prices" className="py-20 px-4 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 text-[#F6F5F0]">
            {language === 'es' ? 'Guía de precios y paquetes' : 'Price and Package Guide'}
          </h2>
          <p className="text-[#F6F5F0]/70 text-lg">
            {language === 'es'
              ? 'Descubre nuestros tratamientos y precios especiales'
              : 'Discover our treatments and special prices'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Card Slot */}
          <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#0B0B0C] shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(212,175,55,0.25)] hover:scale-[1.02]">
            <div className="aspect-[3/4] relative">
              <img
                src="/guia_precios_1.jpg"
                alt="Lista de precios - K•Diaz Face & Body"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Card Slot */}
          <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#0B0B0C] shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(212,175,55,0.25)] hover:scale-[1.02]">
            <div className="aspect-[3/4] relative">
              <img
                src="/image0(30).jpeg"
                alt="Lista de precios - K•Diaz Face & Body"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
