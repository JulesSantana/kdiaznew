import { X, Zap, Droplets, Sparkles, Shield, Clock, Award, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './Button';

interface BodyContouringDetailPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BodyContouringDetailPage({ isOpen, onClose }: BodyContouringDetailPageProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0C]">
      <div className="min-h-screen">
        <div className="sticky top-0 z-10 bg-[#0B0B0C]/95 backdrop-blur-sm border-b border-[#2A2A2A]/20">
          <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
            <h1 className="text-3xl font-light text-[#F6F5F0]">
              Moldeado corporal
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
                Redefine tu silueta sin cirugía
              </h2>
              <p className="text-xl text-[#F6F5F0]/70 leading-relaxed">
                El moldeado corporal combina tecnologías avanzadas no invasivas para reducir volumen,
                drenar líquidos retenidos y mejorar la calidad de tu piel. Tratamientos personalizados
                que te ayudan a conseguir la figura que deseas de forma natural y segura.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-light text-[#F6F5F0] mb-3">Drenaje</h3>
                <p className="text-[#F6F5F0]/70">
                  Elimina la retención de líquidos y toxinas acumuladas, reduciendo la hinchazón
                  y mejorando la circulación linfática de forma efectiva.
                </p>
              </div>

              <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-light text-[#F6F5F0] mb-3">Suaviza piel</h3>
                <p className="text-[#F6F5F0]/70">
                  Mejora la textura, firmeza y calidad de la piel, reduciendo el aspecto de
                  celulitis y estrías para una superficie más uniforme y tersa.
                </p>
              </div>
            </div>

            <section className="bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent border border-[#2A2A2A]/20 rounded-3xl p-12">
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                ¿Qué problemas tratamos?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Zonas de acumulación</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Abdomen y flancos (michelines)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Muslos internos y externos (cartucheras)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Glúteos y parte posterior de muslos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Brazos (flacidez en triceps)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Espalda y zona de sujetador</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Problemas específicos</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Celulitis (todos los grados)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Retención de líquidos y edemas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Flacidez y piel poco firme</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Estrías (rojas y blancas)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Piel de naranja y textura irregular</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                Tecnologías y tratamientos
              </h2>
              <p className="text-center text-[#F6F5F0]/70 mb-12 max-w-3xl mx-auto">
                Combinamos diferentes tecnologías y técnicas manuales especializadas para crear
                un protocolo personalizado que aborde tus necesidades específicas de forma integral.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Radiofrecuencia corporal</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Calor profundo que estimula colágeno, reduce grasa localizada y reafirma
                    la piel de forma visible y duradera.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Droplets className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Presoterapia</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Drenaje linfático mecánico que elimina líquidos retenidos, toxinas y
                    mejora la circulación en piernas pesadas.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Cavitación ultrasónica</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Ultrasonidos focalizados que rompen las células grasas de forma selectiva
                    para reducir volumen localizado.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Electroestimulación</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Tonifica y fortalece la musculatura, mejora el contorno y complementa
                    la reducción de volumen.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Heart className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Masaje modelador</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Técnica manual especializada que moviliza tejidos, drena, rompe adiposidades
                    y mejora la textura de la piel.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Mesoterapia corporal</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Infiltración de activos lipolíticos, drenantes y reafirmantes directamente
                    en las zonas a tratar.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Envolturas corporales</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Tratamientos con principios activos concentrados que penetran en profundidad
                    para potenciar los resultados.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Vacumterapia</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Succión controlada que mejora la circulación, moviliza tejidos y reduce
                    el aspecto de la celulitis.
                  </p>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Award className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Indiba corporal</h3>
                  <p className="text-[#F6F5F0]/70 text-sm">
                    Tecnología de radiofrecuencia avanzada que regenera tejidos, drena y
                    reafirma con resultados excepcionales.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-[#111111] border border-[#2A2A2A]/20 rounded-3xl p-12">
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                Protocolos personalizados
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-[#D4AF37]/5 to-transparent border border-[#2A2A2A]/20 rounded-2xl p-8">
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Protocolo reductor</h3>
                  <p className="text-[#F6F5F0]/70 mb-4">
                    Ideal para reducir volumen y grasa localizada en zonas específicas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">Cavitación + Radiofrecuencia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">Masaje modelador específico</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">Envoltura lipolítica</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">2-3 sesiones por semana</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#D4AF37]/5 to-transparent border border-[#2A2A2A]/20 rounded-2xl p-8">
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Protocolo drenante</h3>
                  <p className="text-[#F6F5F0]/70 mb-4">
                    Perfecto para eliminar retención de líquidos y piernas pesadas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">Presoterapia completa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">Drenaje linfático manual</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">Envoltura drenante</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">2 sesiones por semana</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#D4AF37]/5 to-transparent border border-[#2A2A2A]/20 rounded-2xl p-8">
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Protocolo anticelulítico</h3>
                  <p className="text-[#F6F5F0]/70 mb-4">
                    Tratamiento específico para mejorar el aspecto de la celulitis.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">Vacumterapia + Radiofrecuencia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">Masaje anticelulítico intensivo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">Mesoterapia específica</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">2-3 sesiones por semana</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#D4AF37]/5 to-transparent border border-[#2A2A2A]/20 rounded-2xl p-8">
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Protocolo reafirmante</h3>
                  <p className="text-[#F6F5F0]/70 mb-4">
                    Mejora la firmeza y tonicidad de la piel y los tejidos.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">Indiba corporal avanzada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">Electroestimulación muscular</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">Radiofrecuencia reafirmante</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70 text-sm">2 sesiones por semana</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Duración</h3>
                    <p className="text-[#F6F5F0]/70">60-90 minutos por sesión</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Sesiones</h3>
                    <p className="text-[#F6F5F0]/70">8-12 sesiones recomendadas</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Mantenimiento</h3>
                    <p className="text-[#F6F5F0]/70">1-2 sesiones mensuales</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                Resultados que puedes esperar
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#D4AF37]/5 to-transparent border border-[#2A2A2A]/20 rounded-2xl p-8">
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Cambios visibles</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Reducción de contorno de 2-6 cm en zonas tratadas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Mejora notable en la apariencia de la celulitis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Piel más firme, tensa y con mejor textura</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Silueta más definida y contorneada</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#D4AF37]/5 to-transparent border border-[#2A2A2A]/20 rounded-2xl p-8">
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Beneficios adicionales</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Mejora de la circulación sanguínea y linfática</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Sensación de piernas más ligeras</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Mayor elasticidad y calidad de la piel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">Aumento de la confianza y bienestar personal</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent border border-[#2A2A2A]/20 rounded-3xl p-12">
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-6 text-center">
                Recomendaciones para mejores resultados
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Droplets className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#F6F5F0] mb-1 font-light">Hidratación</h3>
                    <p className="text-[#F6F5F0]/70">Bebe al menos 2 litros de agua al día para facilitar la eliminación de toxinas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#F6F5F0] mb-1 font-light">Alimentación equilibrada</h3>
                    <p className="text-[#F6F5F0]/70">Una dieta balanceada potencia y mantiene los resultados del tratamiento</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#F6F5F0] mb-1 font-light">Actividad física</h3>
                    <p className="text-[#F6F5F0]/70">Complementa con ejercicio regular para optimizar y prolongar los beneficios</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#F6F5F0] mb-1 font-light">Constancia</h3>
                    <p className="text-[#F6F5F0]/70">Sigue el protocolo completo y las sesiones de mantenimiento para resultados duraderos</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
