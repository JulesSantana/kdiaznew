import { X, Zap, Heart, Sparkles, Shield, Clock, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './Button';

interface DiathermyDetailPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DiathermyDetailPage({ isOpen, onClose }: DiathermyDetailPageProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0C]">
      <div className="min-h-screen">
        <div className="sticky top-0 z-10 bg-[#0B0B0C]/95 backdrop-blur-sm border-b border-[#2A2A2A]/20">
          <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
            <h1 className="text-3xl font-light text-[#F6F5F0]">
              Diatermia facial
            </h1>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#2A2A2A]/20 rounded-lg transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6 text-[#F6F5F0]" />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="space-y-16">
            <section className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-[#F6F5F0] mb-6">
                Rejuvenecimiento profundo con diatermia
              </h2>
              <p className="text-xl text-[#F6F5F0]/70 leading-relaxed">
                La diatermia facial es un tratamiento no invasivo que utiliza corrientes de alta frecuencia
                para generar calor profundo en los tejidos, estimulando la regeneración celular y mejorando
                la circulación sanguínea de forma natural y efectiva.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-light text-[#F6F5F0] mb-3">Rejuvenecimiento</h3>
                <p className="text-[#F6F5F0]/70">
                  Activa la regeneración celular profunda, mejorando la textura y calidad de la piel desde el interior.
                </p>
              </div>

              <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-light text-[#F6F5F0] mb-3">Glow inmediato</h3>
                <p className="text-[#F6F5F0]/70">
                  Notarás una luminosidad y frescura visibles desde la primera sesión, con resultados que mejoran progresivamente.
                </p>
              </div>
            </div>

            <section className="bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent border border-[#2A2A2A]/20 rounded-3xl p-12">
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                ¿Cómo funciona la diatermia facial?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Calor terapéutico profundo</h3>
                  <p className="text-[#F6F5F0]/70 leading-relaxed mb-4">
                    La diatermia genera calor endógeno (desde dentro) mediante corrientes de alta frecuencia,
                    alcanzando las capas más profundas de la dermis sin dañar la superficie de la piel.
                  </p>
                  <p className="text-[#F6F5F0]/70 leading-relaxed">
                    Este calor controlado estimula la microcirculación, acelera el metabolismo celular
                    y favorece la oxigenación de los tejidos.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Beneficios terapéuticos</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Mejora la circulación sanguínea y linfática</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Estimula la producción de colágeno y elastina</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Efecto reafirmante y tensor inmediato</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Reduce líneas finas y arrugas superficiales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Mejora el contorno facial y el óvalo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                Indicaciones y tratamientos
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <h3 className="text-lg font-light text-[#D4AF37] mb-3">Líneas finas</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Ideal para suavizar líneas de expresión alrededor de ojos, boca y frente.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <h3 className="text-lg font-light text-[#D4AF37] mb-3">Flacidez facial</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Reafirma y tensa la piel del rostro, cuello y escote de manera natural.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <h3 className="text-lg font-light text-[#D4AF37] mb-3">Contorno facial</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Mejora la definición del óvalo facial y reduce la papada.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <h3 className="text-lg font-light text-[#D4AF37] mb-3">Piel apagada</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Aporta luminosidad y vitalidad a pieles opacas y cansadas.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <h3 className="text-lg font-light text-[#D4AF37] mb-3">Textura irregular</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Mejora la uniformidad y suavidad de la superficie cutánea.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <h3 className="text-lg font-light text-[#D4AF37] mb-3">Mantenimiento</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Perfecto como tratamiento de mantenimiento y prevención del envejecimiento.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[#111111] border border-[#2A2A2A]/20 rounded-3xl p-12">
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                Protocolo de tratamiento
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Duración</h3>
                  <p className="text-[#F6F5F0]/70">30-45 minutos por sesión</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Frecuencia</h3>
                  <p className="text-[#F6F5F0]/70">1-2 sesiones por semana</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Sesiones</h3>
                  <p className="text-[#F6F5F0]/70">6-8 sesiones recomendadas</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-3 font-light">Experiencia durante el tratamiento</h3>
                  <p className="text-[#F6F5F0]/70 leading-relaxed">
                    La sesión es completamente indolora y relajante. Sentirás una sensación de calor agradable
                    y reconfortante que penetra en la piel. El tratamiento es tan cómodo que muchas clientas
                    aprovechan para descansar durante la sesión. No requiere anestesia ni preparación especial,
                    y puedes retomar tus actividades normales inmediatamente después.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-3 font-light">Resultados esperados</h3>
                  <p className="text-[#F6F5F0]/70 leading-relaxed">
                    Los resultados son visibles desde la primera sesión con un efecto glow y una piel más
                    luminosa y fresca. Con el tratamiento completo, notarás una mejora significativa en la
                    firmeza, textura y calidad general de tu piel. Los efectos son acumulativos y duraderos,
                    mejorando progresivamente durante las semanas posteriores al tratamiento.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
