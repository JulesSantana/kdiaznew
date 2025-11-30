import { X, Zap, Heart, Sparkles, Shield, Clock, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './Button';

interface IndibaDetailPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export function IndibaDetailPage({ isOpen, onClose }: IndibaDetailPageProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0C]">
      <div className="min-h-screen">
        <div className="sticky top-0 z-10 bg-[#0B0B0C]/95 backdrop-blur-sm border-b border-[#2A2A2A]/20">
          <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
            <h1 className="text-3xl font-light text-[#F6F5F0]">
              Radiofrecuencia INDIBA®
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
                Radiofrecuencia de última generación
              </h2>
              <p className="text-xl text-[#F6F5F0]/70 leading-relaxed">
                La radiofrecuencia INDIBA® es una tecnología médica patentada que utiliza corriente de radiofrecuencia
                a 448 kHz para estimular los procesos naturales de regeneración celular, sin cirugía ni tiempo de recuperación.
              </p>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-light text-[#F6F5F0] mb-3">Antiedad</h3>
                <p className="text-[#F6F5F0]/70">
                  Estimula la producción de colágeno y elastina, reduciendo arrugas y líneas de expresión de forma natural.
                </p>
              </div>

              <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-light text-[#F6F5F0] mb-3">Firmeza</h3>
                <p className="text-[#F6F5F0]/70">
                  Reafirma y tensa la piel mediante la activación del metabolismo celular y la microcirculación.
                </p>
              </div>

              <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-light text-[#F6F5F0] mb-3">Lifting suave</h3>
                <p className="text-[#F6F5F0]/70">
                  Efecto lifting inmediato y progresivo sin intervenciones quirúrgicas ni agujas.
                </p>
              </div>
            </div>

            <section className="bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent border border-[#2A2A2A]/20 rounded-3xl p-12">
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                ¿Cómo funciona INDIBA®?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Tecnología patentada</h3>
                  <p className="text-[#F6F5F0]/70 leading-relaxed mb-4">
                    INDIBA® utiliza una frecuencia específica de 448 kHz que permite trabajar en profundidad
                    sin dañar los tejidos superficiales. Esta frecuencia única está científicamente probada
                    para optimizar los resultados terapéuticos.
                  </p>
                  <p className="text-[#F6F5F0]/70 leading-relaxed">
                    A diferencia de otras radiofrecuencias, INDIBA® actúa a nivel celular, mejorando la
                    oxigenación de los tejidos y acelerando la regeneración natural.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Beneficios celulares</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Aumento del flujo sanguíneo y linfático</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Incremento en la producción de ATP (energía celular)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Estimulación de fibroblastos para más colágeno</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Reducción de inflamación y mejora de la cicatrización</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Oxigenación profunda de los tejidos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                Aplicaciones faciales y corporales
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-light text-[#D4AF37] mb-6">Facial</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Rejuvenecimiento y luminosidad</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Reducción de arrugas y líneas finas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Mejora del contorno facial</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Tratamiento de rosácea y acné</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Reducción de bolsas y ojeras</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Piel más firme y elástica</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-light text-[#D4AF37] mb-6">Corporal</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Moldeado y reafirmación corporal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Reducción de celulitis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Drenaje linfático</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Recuperación post-parto</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Tratamiento de estrías</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Mejora de la circulación</span>
                    </li>
                  </ul>
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
                  <p className="text-[#F6F5F0]/70">45-60 minutos por sesión</p>
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
                  <p className="text-[#F6F5F0]/70">6-10 sesiones recomendadas</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-3 font-light">¿Qué esperar durante la sesión?</h3>
                  <p className="text-[#F6F5F0]/70 leading-relaxed">
                    El tratamiento es completamente indoloro y relajante. Se siente un calor suave y agradable
                    que penetra en los tejidos. No requiere anestesia ni tiempo de recuperación. Puedes retomar
                    tus actividades inmediatamente después de la sesión.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-3 font-light">Resultados</h3>
                  <p className="text-[#F6F5F0]/70 leading-relaxed">
                    Los resultados son progresivos y acumulativos. Muchos pacientes notan una mejora en la textura
                    y luminosidad de la piel desde la primera sesión. Los efectos de firmeza y reafirmación se
                    intensifican con cada tratamiento, alcanzando el máximo resultado tras completar el protocolo
                    completo. Los beneficios continúan mejorando durante las semanas posteriores al tratamiento.
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
