import { X, Droplets, Sparkles, Shield, Clock, Award, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './Button';

interface FacialCleansingDetailPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FacialCleansingDetailPage({ isOpen, onClose }: FacialCleansingDetailPageProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0C]">
      <div className="min-h-screen">
        <div className="sticky top-0 z-10 bg-[#0B0B0C]/95 backdrop-blur-sm border-b border-[#2A2A2A]/20">
          <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
            <h1 className="text-3xl font-light text-[#F6F5F0]">
              Limpieza facial profunda
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
                La base de una piel saludable
              </h2>
              <p className="text-xl text-[#F6F5F0]/70 leading-relaxed">
                La limpieza facial profunda es mucho más que una limpieza básica. Es un tratamiento profesional
                que combina técnicas manuales expertas con tecnología avanzada para purificar, equilibrar y
                revitalizar tu piel desde el interior.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-light text-[#F6F5F0] mb-3">Piel mixta/grasa</h3>
                <p className="text-[#F6F5F0]/70">
                  Especialmente indicada para pieles con exceso de grasa, brillos y tendencia a impurezas.
                  Regula la producción de sebo de manera natural.
                </p>
              </div>

              <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-light text-[#F6F5F0] mb-3">Poros afinados</h3>
                <p className="text-[#F6F5F0]/70">
                  Reduce visiblemente el tamaño de los poros dilatados y previene su obstrucción, dejando
                  la piel más uniforme y refinada.
                </p>
              </div>
            </div>

            <section className="bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent border border-[#2A2A2A]/20 rounded-3xl p-12">
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                Protocolo profesional paso a paso
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#D4AF37] font-light">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-[#F6F5F0] mb-2 font-light">Diagnóstico personalizado</h3>
                    <p className="text-[#F6F5F0]/70">
                      Analizamos tu tipo de piel y sus necesidades específicas para adaptar el tratamiento.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#D4AF37] font-light">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-[#F6F5F0] mb-2 font-light">Desmaquillado y limpieza inicial</h3>
                    <p className="text-[#F6F5F0]/70">
                      Eliminación de maquillaje, contaminación y primeras impurezas con productos profesionales.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#D4AF37] font-light">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-[#F6F5F0] mb-2 font-light">Exfoliación enzimática</h3>
                    <p className="text-[#F6F5F0]/70">
                      Eliminamos células muertas de forma suave pero efectiva, preparando la piel para una mejor penetración.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#D4AF37] font-light">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-[#F6F5F0] mb-2 font-light">Vapor y preparación</h3>
                    <p className="text-[#F6F5F0]/70">
                      Apertura suave de los poros con vapor ozono para facilitar la extracción sin trauma.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#D4AF37] font-light">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-[#F6F5F0] mb-2 font-light">Extracción manual profesional</h3>
                    <p className="text-[#F6F5F0]/70">
                      Eliminación experta de comedones, puntos negros y impurezas con técnica especializada y delicada.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#D4AF37] font-light">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-[#F6F5F0] mb-2 font-light">Alta frecuencia</h3>
                    <p className="text-[#F6F5F0]/70">
                      Tratamiento con ozono para desinfectar, cicatrizar y prevenir brotes futuros.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#D4AF37] font-light">7</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-[#F6F5F0] mb-2 font-light">Mascarilla purificante</h3>
                    <p className="text-[#F6F5F0]/70">
                      Aplicación de mascarilla específica según tu tipo de piel (arcilla, carbón activo, o enzimática).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#D4AF37] font-light">8</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-[#F6F5F0] mb-2 font-light">Hidratación y protección</h3>
                    <p className="text-[#F6F5F0]/70">
                      Finalización con sérum, hidratante y protección solar para mantener los resultados.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                Beneficios de la limpieza profunda
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Piel más limpia</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Eliminación profunda de impurezas, células muertas y exceso de grasa acumulada.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Droplets className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Poros refinados</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Reduce visiblemente el tamaño de los poros y previene su dilatación.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Previene el acné</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Mantiene los poros limpios, previniendo la aparición de brotes y puntos negros.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Heart className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Mejora la textura</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Piel más suave, uniforme y con una textura refinada al tacto.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Mayor luminosidad</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    La piel recupera su brillo natural y aspecto saludable inmediatamente.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Award className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Mejor absorción</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Los productos de cuidado diario penetran mejor y son más efectivos.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[#111111] border border-[#2A2A2A]/20 rounded-3xl p-12">
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                Frecuencia recomendada
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Piel grasa</h3>
                  <p className="text-[#F6F5F0]/70">Cada 3-4 semanas</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Piel mixta</h3>
                  <p className="text-[#F6F5F0]/70">Cada 4-6 semanas</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Piel normal</h3>
                  <p className="text-[#F6F5F0]/70">Cada 6-8 semanas</p>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-3 font-light">¿Para quién está indicada?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Pieles con tendencia a brillos y exceso de grasa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Poros dilatados y visibles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Puntos negros y comedones frecuentes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Textura irregular o piel apagada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Como mantenimiento mensual para todo tipo de piel</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-3 font-light">Duración y resultados</h3>
                  <p className="text-[#F6F5F0]/70 leading-relaxed">
                    La sesión dura aproximadamente 60-75 minutos. Los resultados son inmediatos: notarás tu piel
                    más limpia, fresca y luminosa al salir del tratamiento. Para mantener una piel saludable y
                    prevenir problemas, recomendamos realizar limpiezas faciales de forma regular según tu tipo
                    de piel y necesidades.
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
