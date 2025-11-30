import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from './Card';
import { Chip } from './Chip';
import { Modal } from './Modal';

export function Services() {
  const { t, language } = useLanguage();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const serviceDetails = language === 'es' ? [
    {
      title: 'Radiofrecuencia INDIBA®',
      benefits: ['Estimula producción de colágeno', 'Mejora textura y luminosidad', 'Reafirma la piel', 'Reduce líneas finas'],
      duration: '45-60 minutos',
      sessions: '6-10 sesiones'
    },
    {
      title: 'Diatermia facial',
      benefits: ['Efecto reafirmante inmediato', 'Regenera la piel', 'Suaviza líneas finas', 'Mejora contorno facial'],
      duration: '45 minutos',
      sessions: '4-8 sesiones'
    },
    {
      title: 'Limpieza facial profunda',
      benefits: ['Higiene profesional completa', 'Extracción suave de impurezas', 'Afina los poros', 'Ideal para piel mixta/grasa'],
      duration: '60 minutos',
      sessions: 'Mensual o según necesidad'
    },
    {
      title: 'Cicatrices & acné',
      benefits: ['Suaviza marcas y cicatrices', 'Uniforma textura de la piel', 'Reduce rojeces', 'Protocolos personalizados'],
      duration: '45-60 minutos',
      sessions: '6-12 sesiones'
    },
    {
      title: 'Moldeado corporal',
      benefits: ['Redefine silueta sin cirugía', 'Drenaje linfático', 'Mejora calidad de la piel', 'Reduce celulitis'],
      duration: '60-90 minutos',
      sessions: '8-12 sesiones'
    },
    {
      title: 'Cuidado de mantenimiento',
      benefits: ['Mantiene resultados a largo plazo', 'Seguimiento personalizado', 'Educación sobre cuidado de la piel', 'Planes adaptados'],
      duration: 'Variable',
      sessions: 'Planes mensuales'
    }
  ] : [
    {
      title: 'INDIBA® Radiofrequency',
      benefits: ['Stimulates collagen production', 'Improves texture and glow', 'Firms skin', 'Reduces fine lines'],
      duration: '45-60 minutes',
      sessions: '6-10 sessions'
    },
    {
      title: 'Facial diathermy',
      benefits: ['Immediate firming effect', 'Regenerates skin', 'Softens fine lines', 'Improves facial contour'],
      duration: '45 minutes',
      sessions: '4-8 sessions'
    },
    {
      title: 'Deep cleansing facial',
      benefits: ['Complete professional hygiene', 'Gentle impurity extraction', 'Refines pores', 'Ideal for combination/oily skin'],
      duration: '60 minutes',
      sessions: 'Monthly or as needed'
    },
    {
      title: 'Scars & acne',
      benefits: ['Softens marks and scars', 'Evens skin texture', 'Reduces redness', 'Personalized protocols'],
      duration: '45-60 minutes',
      sessions: '6-12 sessions'
    },
    {
      title: 'Body contour care',
      benefits: ['Redefines silhouette without surgery', 'Lymphatic drainage', 'Improves skin quality', 'Reduces cellulite'],
      duration: '60-90 minutes',
      sessions: '8-12 sessions'
    },
    {
      title: 'Maintenance care',
      benefits: ['Maintains long-term results', 'Personalized follow-up', 'Skin care education', 'Adapted plans'],
      duration: 'Variable',
      sessions: 'Monthly plans'
    }
  ];

  return (
    <>
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 text-shimmer text-glow">
              {t.nav.services}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((service, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border p-6 overflow-hidden group transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:translate-y-[-4px] cursor-pointer flex flex-col h-full animate-scaleIn ${
                  index === 0
                    ? 'bg-[#0B0B0C] border-[#D4AF37]/30'
                    : 'bg-[#0B0B0C] border-[#2A2A2A]/20'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedService(index)}
              >
                {index === 0 && (
                  <>
                    <img
                      src="/image copy copy copy copy.png"
                      alt="INDIBA Treatment"
                      className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/30 via-[#0B0B0C]/50 to-[#0B0B0C]/70" />
                  </>
                )}
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl font-serif mb-3 text-gradient-gold">
                    {service.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.chips.map((chip, chipIndex) => (
                      <Chip key={chipIndex}>{chip}</Chip>
                    ))}
                  </div>

                  <p className="text-[#F6F5F0]/70 text-sm leading-relaxed flex-grow">
                    {service.desc}
                  </p>

                  <button className="mt-4 text-[#D4AF37] text-sm hover:text-[#E7C766] transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-2 py-1">
                    {t.ctas.learnMore}
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService !== null && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedService(null)}
          title={serviceDetails[selectedService].title}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-[#D4AF37] mb-3">
                {language === 'es' ? 'Beneficios' : 'Benefits'}
              </h3>
              <ul className="space-y-2">
                {serviceDetails[selectedService].benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[#F6F5F0]/80">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2A2A2A]">
              <div>
                <p className="text-sm text-[#F6F5F0]/60 mb-1">
                  {language === 'es' ? 'Duración' : 'Duration'}
                </p>
                <p className="text-[#F6F5F0]">{serviceDetails[selectedService].duration}</p>
              </div>
              <div>
                <p className="text-sm text-[#F6F5F0]/60 mb-1">
                  {language === 'es' ? 'Sesiones' : 'Sessions'}
                </p>
                <p className="text-[#F6F5F0]">{serviceDetails[selectedService].sessions}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
