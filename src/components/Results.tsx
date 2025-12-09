import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { X } from 'lucide-react';

export function Results() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ image: string; label: string } | null>(null);

  const results = [
    { image: '/image1(7).jpeg', label: 'Before' },
    { image: '/image5(2).jpeg', label: 'Before' },
    { image: '/image2(12).jpeg', label: 'Before / After' },
    { image: '/image2(10).jpeg', label: 'After' },
    { image: '', label: 'After' },
    { image: '/image3(5).jpeg', label: 'Before / After' },
  ];

  return (
    <>
      <section id="results" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 text-shimmer text-glow">
              {t.results.title}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6" />
            <p className="text-[#F6F5F0]/60 text-sm max-w-2xl mx-auto">
              {t.results.disclaimer}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                onClick={() => result.image && setSelectedImage(result)}
                className="relative aspect-square rounded-2xl overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] cursor-pointer group"
              >
              {result.image ? (
                <>
                  <img
                    src={result.image}
                    alt={result.label}
                    className={`absolute inset-0 w-full h-full transition-all duration-500 group-hover:scale-105 ${
                      result.isSpecial ? 'object-cover object-center' : 'object-cover'
                    }`}
                    style={result.isSpecial ? {
                      objectPosition: '50% 45%',
                      transform: 'scale(1.15)'
                    } : {}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-end justify-start p-6">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-[#D4AF37]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h3 className="text-3xl font-serif text-[#F6F5F0] tracking-wide relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] group-hover:text-shimmer transition-all duration-500">
                        {result.label}
                      </h3>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center text-[#F6F5F0]/50 text-sm">
                    [{result.label}]
                  </div>
                  <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-colors duration-300" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {selectedImage && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 animate-in fade-in duration-300"
        onClick={() => setSelectedImage(null)}
      >
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#D4AF37]/20 hover:bg-[#D4AF37]/40 border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300 group"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-[#F6F5F0] group-hover:text-[#D4AF37] transition-colors" />
        </button>

        <div
          className="relative w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative max-w-6xl w-full aspect-[4/3] border-8 border-[#D4AF37] rounded-lg shadow-[0_0_60px_rgba(212,175,55,0.4)] overflow-hidden">
            <img
              src={selectedImage.image}
              alt={selectedImage.label}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
              <h3 className="text-3xl sm:text-4xl font-serif text-[#F6F5F0] text-shimmer drop-shadow-lg">
                {selectedImage.label}
              </h3>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
