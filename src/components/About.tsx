import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative min-h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/image.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/80 via-[#0B0B0C]/60 to-[#0B0B0C]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 flex items-center justify-center min-h-[600px]">
        <div className="text-center space-y-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#F6F5F0] tracking-tight">
            Ven a conocernos
          </h2>
          <p className="text-lg md:text-xl text-[#F6F5F0]/90 leading-relaxed">
            Descubre nuestro espacio diseñado para tu bienestar y transformación
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://wa.me/34679593163"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#D4AF37] text-[#0B0B0C] font-medium rounded-full hover:bg-[#F6F5F0] transition-colors duration-300"
            >
              Reservar visita
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#D4AF37] text-[#F6F5F0] font-medium rounded-full hover:bg-[#D4AF37]/10 transition-colors duration-300"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
