import { X, Sparkles, Shield, Clock, Award, Heart, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './Button';

interface ScarsAcneDetailPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScarsAcneDetailPage({ isOpen, onClose }: ScarsAcneDetailPageProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0C]">
      <div className="min-h-screen">
        <div className="sticky top-0 z-10 bg-[#0B0B0C]/95 backdrop-blur-sm border-b border-[#2A2A2A]/20">
          <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
            <h1 className="text-3xl font-light text-[#F6F5F0]">
              Cicatrices & acné
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
                Piel renovada sin marcas
              </h2>
              <p className="text-xl text-[#F6F5F0]/70 leading-relaxed">
                Protocolos combinados avanzados para reducir cicatrices de acné, marcas post-inflamatorias
                y mejorar significativamente la textura de tu piel. Tratamientos personalizados que
                trabajan en múltiples capas para resultados visibles y duraderos.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-light text-[#F6F5F0] mb-3">Textura uniforme</h3>
                <p className="text-[#F6F5F0]/70">
                  Suaviza irregularidades, marcas atróficas y cicatrices para conseguir una superficie
                  cutánea más lisa y homogénea.
                </p>
              </div>

              <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-light text-[#F6F5F0] mb-3">Menos rojeces</h3>
                <p className="text-[#F6F5F0]/70">
                  Reduce el enrojecimiento post-inflamatorio y unifica el tono de la piel para una
                  apariencia más clara y saludable.
                </p>
              </div>
            </div>

            <section className="bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent border border-[#2A2A2A]/20 rounded-3xl p-12">
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                ¿Qué tipos de cicatrices y marcas tratamos?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Cicatrices de acné</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        <strong className="text-[#F6F5F0]">Atróficas:</strong> Depresiones o "hoyuelos" en la piel (boxcar, icepick, rolling)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        <strong className="text-[#F6F5F0]">Hipertróficas:</strong> Cicatrices elevadas y engrosadas
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        <strong className="text-[#F6F5F0]">Queloides:</strong> Cicatrices que crecen más allá del área original
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Manchas y marcas</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        <strong className="text-[#F6F5F0]">Hiperpigmentación post-inflamatoria:</strong> Manchas oscuras después del acné
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        <strong className="text-[#F6F5F0]">Eritema post-inflamatorio:</strong> Enrojecimiento persistente
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        <strong className="text-[#F6F5F0]">Textura irregular:</strong> Piel rugosa o con poros dilatados
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                Protocolos combinados personalizados
              </h2>
              <p className="text-center text-[#F6F5F0]/70 mb-12 max-w-3xl mx-auto">
                Utilizamos una combinación estratégica de diferentes tecnologías y técnicas para abordar
                cada tipo de cicatriz y marca de forma específica, maximizando los resultados.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Microagujas</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Estimula la producción de colágeno natural mediante micropunciones controladas
                    que renuevan la piel desde el interior.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Peelings químicos</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Exfoliación controlada para eliminar capas superficiales dañadas y revelar
                    piel nueva más uniforme y luminosa.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Heart className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Plasma rico en plaquetas</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Factores de crecimiento naturales que aceleran la regeneración y mejoran
                    la calidad del tejido cicatricial.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Mesoterapia específica</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Infiltración de activos regeneradores directamente en las zonas afectadas
                    para resultados más efectivos.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Radiofrecuencia</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Calor profundo que estimula el colágeno y mejora la textura y firmeza
                    de la piel desde las capas más profundas.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">LED terapéutico</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Luz de diferentes longitudes de onda para reducir inflamación, estimular
                    reparación y mejorar el tono de la piel.
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
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Evaluación inicial</h3>
                  <p className="text-[#F6F5F0]/70">Análisis detallado de tu tipo de cicatriz y piel</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Plan personalizado</h3>
                  <p className="text-[#F6F5F0]/70">Protocolo combinado específico para ti</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Seguimiento continuo</h3>
                  <p className="text-[#F6F5F0]/70">Ajustamos el protocolo según tu evolución</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-3 font-light">Duración y frecuencia</h3>
                  <p className="text-[#F6F5F0]/70 leading-relaxed mb-4">
                    Cada sesión dura aproximadamente 60-90 minutos dependiendo del protocolo elegido.
                    La frecuencia recomendada es de una sesión cada 3-4 semanas para permitir la
                    regeneración adecuada de la piel.
                  </p>
                  <p className="text-[#F6F5F0]/70 leading-relaxed">
                    El número total de sesiones varía según la severidad de las cicatrices, pero
                    generalmente se recomiendan entre 4-8 sesiones para obtener resultados óptimos.
                    Los primeros cambios son visibles a partir de la segunda o tercera sesión.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-3 font-light">¿Qué esperar durante el tratamiento?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        Las sesiones son tolerables. Aplicamos anestesia tópica en tratamientos más intensivos
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        Posible enrojecimiento temporal de 24-48 horas según el protocolo aplicado
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        Puedes retomar tus actividades normales inmediatamente con protección solar adecuada
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        Los resultados mejoran progresivamente durante los meses siguientes al tratamiento
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                Resultados que puedes esperar
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#D4AF37]/5 to-transparent border border-[#2A2A2A]/20 rounded-2xl p-8">
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Mejoras visibles</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Reducción significativa de la profundidad de cicatrices (50-70%)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Mejora notable en la textura y suavidad de la piel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Atenuación de manchas y unificación del tono</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Reducción de poros dilatados</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#D4AF37]/5 to-transparent border border-[#2A2A2A]/20 rounded-2xl p-8">
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Beneficios adicionales</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Piel más luminosa y revitalizada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Mayor firmeza y elasticidad</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Mejora en la confianza y autoestima</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Resultados naturales y duraderos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
