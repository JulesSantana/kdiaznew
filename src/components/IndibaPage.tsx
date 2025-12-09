import { useState } from 'react';
import { Sparkles, Zap, Heart, Shield, Award, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './Button';
import { Card } from './Card';
import { Chip } from './Chip';
import { IndibaDetailPage } from './IndibaDetailPage';
import { DiathermyDetailPage } from './DiathermyDetailPage';
import { FacialCleansingDetailPage } from './FacialCleansingDetailPage';
import { ScarsAcneDetailPage } from './ScarsAcneDetailPage';
import { BodyContouringDetailPage } from './BodyContouringDetailPage';
import { MaintenanceCareDetailPage } from './MaintenanceCareDetailPage';

export function IndibaPage() {
  const { t } = useLanguage();
  const [indibaDetailOpen, setIndibaDetailOpen] = useState(false);
  const [diathermyPageOpen, setDiathermyPageOpen] = useState(false);
  const [facialCleansingPageOpen, setFacialCleansingPageOpen] = useState(false);
  const [scarsAcnePageOpen, setScarsAcnePageOpen] = useState(false);
  const [bodyContouringPageOpen, setBodyContouringPageOpen] = useState(false);
  const [maintenanceCarePageOpen, setMaintenanceCarePageOpen] = useState(false);

  const serviceBackgrounds = [
    '/image_copy_copy_copy_copy_copy_copy copy.png', // Radiofrecuencia INDIBA
    '/image_copy_copy_copy_copy_copy_copy_copy.png', // Diatermia facial
    '/image_copy_copy_copy_copy_copy_copy_copy_copy.png', // Limpieza facial profunda
    '/image_copy_copy_copy_copy_copy_copy_copy_copy_copy.png', // Cicatrices y acné
    '/image_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy.png', // Remodelación corporal
    '/image_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy.png', // Cuidado de mantenimiento
  ];

  const handleServiceClick = (index: number) => {
    if (index === 0) {
      setIndibaDetailOpen(true);
    } else if (index === 1) {
      setDiathermyPageOpen(true);
    } else if (index === 2) {
      setFacialCleansingPageOpen(true);
    } else if (index === 3) {
      setScarsAcnePageOpen(true);
    } else if (index === 4) {
      setBodyContouringPageOpen(true);
    } else if (index === 5) {
      setMaintenanceCarePageOpen(true);
    }
  };

  return (
    <>
      <section id="indiba" className="py-20 px-4 bg-gradient-to-b from-[#0B0B0C] via-[#0F0F10] to-[#0B0B0C]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 text-shimmer text-glow">
              {t.nav.services}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {t.services.map((service, index) => (
              <Card
                key={index}
                hover
                className="flex flex-col h-full animate-scaleIn"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={index >= 0 && index <= 5 ? () => handleServiceClick(index) : undefined}
                backgroundImage={serviceBackgrounds[index]}
              >
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

                {(index >= 0 && index <= 5) && (
                  <button className="mt-4 text-[#D4AF37] text-sm hover:text-[#E7C766] transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-2 py-1">
                    {t.ctas.learnMore}
                    <span aria-hidden="true">→</span>
                  </button>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F6F5F0] mb-4">
              {t.indibaPage.title}
            </h1>
            <p className="text-2xl text-[#D4AF37] font-light mb-6">
              {t.indibaPage.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
          </div>

        <div className="max-w-4xl mx-auto space-y-16">
          <section className="text-center">
            <p className="text-lg text-[#F6F5F0]/80 leading-relaxed mb-6">
              {t.indibaPage.intro}
            </p>
            <p className="text-lg text-[#F6F5F0]/70 leading-relaxed">
              {t.indibaPage.description}
            </p>
          </section>

          <section className="relative bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent border border-[#2A2A2A]/20 rounded-3xl p-12 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: "url('/image_copy_copy_copy_copy_copy_copy.png')" }}
            />
            <div className="relative z-10 text-center mb-8">
              <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-4">
                {t.indibaPage.whatItDoes}
              </h2>
              <p className="text-[#F6F5F0]/70 text-lg">
                {t.indibaPage.whatItDoesDesc}
              </p>
            </div>

            <div className="relative z-10 mt-12">
              <h3 className="text-xl text-[#D4AF37] mb-8 text-center font-light">
                {t.indibaPage.popularTreatments}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {t.indibaPage.treatments.map((treatment, index) => (
                  <div
                    key={index}
                    className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-all"
                  >
                    <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                      {index === 0 && <Sparkles className="w-5 h-5 text-[#D4AF37]" />}
                      {index === 1 && <Heart className="w-5 h-5 text-[#D4AF37]" />}
                      {index === 2 && <Shield className="w-5 h-5 text-[#D4AF37]" />}
                      {index === 3 && <Award className="w-5 h-5 text-[#D4AF37]" />}
                    </div>
                    <h4 className="text-lg font-light text-[#D4AF37] mb-2">
                      {treatment.title}
                    </h4>
                    <p className="text-[#F6F5F0]/70 text-sm">
                      {treatment.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#111111] border border-[#2A2A2A]/20 rounded-3xl p-12">
            <div className="text-center mb-8">
              <Zap className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-4">
                {t.indibaPage.howItWorks}
              </h2>
            </div>
            <p className="text-[#F6F5F0]/70 text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              {t.indibaPage.howItWorksDesc}
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {t.indibaPage.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-[#F6F5F0]/80">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent border border-[#2A2A2A]/20 rounded-3xl overflow-hidden">
            <img
              src="/image1(10).jpeg"
              alt="INDIBA Treatment Information"
              className="w-full h-auto block"
            />
          </section>


        </div>
      </div>
    </section>

    <IndibaDetailPage isOpen={indibaDetailOpen} onClose={() => setIndibaDetailOpen(false)} />
    <DiathermyDetailPage isOpen={diathermyPageOpen} onClose={() => setDiathermyPageOpen(false)} />
    <FacialCleansingDetailPage isOpen={facialCleansingPageOpen} onClose={() => setFacialCleansingPageOpen(false)} />
    <ScarsAcneDetailPage isOpen={scarsAcnePageOpen} onClose={() => setScarsAcnePageOpen(false)} />
    <BodyContouringDetailPage isOpen={bodyContouringPageOpen} onClose={() => setBodyContouringPageOpen(false)} />
    <MaintenanceCareDetailPage isOpen={maintenanceCarePageOpen} onClose={() => setMaintenanceCarePageOpen(false)} />
  </>
  );
}
