import { X, Calendar, BookOpen, Sparkles, Shield, Clock, Award, Heart, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './Button';

interface MaintenanceCareDetailPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MaintenanceCareDetailPage({ isOpen, onClose }: MaintenanceCareDetailPageProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0C]">
      <div className="min-h-screen">
        <div className="sticky top-0 z-10 bg-[#0B0B0C]/95 backdrop-blur-sm border-b border-[#2A2A2A]/20">
          <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
            <h1 className="text-3xl font-light text-[#F6F5F0]">
              Cuidado de mantenimiento
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
                Planes mensuales para mantener resultados
              </h2>
              <p className="text-xl text-[#F6F5F0]/70 leading-relaxed">
                Una vez conseguidos tus objetivos, el cuidado de mantenimiento es fundamental para
                preservar y prolongar los resultados. Te diseñamos planes mensuales personalizados
                con educación continua sobre el cuidado de tu piel para que luzcas radiante siempre.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-light text-[#F6F5F0] mb-3">Seguimiento</h3>
                <p className="text-[#F6F5F0]/70">
                  Sesiones periódicas programadas para mantener y potenciar los resultados conseguidos
                  con tus tratamientos intensivos.
                </p>
              </div>

              <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-light text-[#F6F5F0] mb-3">Educación de piel</h3>
                <p className="text-[#F6F5F0]/70">
                  Aprende a cuidar tu piel correctamente en casa con rutinas personalizadas,
                  recomendaciones de productos y técnicas adaptadas a ti.
                </p>
              </div>
            </div>

            <section className="bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent border border-[#2A2A2A]/20 rounded-3xl p-12">
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                ¿Por qué es importante el mantenimiento?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Preservar resultados</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        Los tratamientos intensivos consiguen resultados excelentes, pero requieren
                        cuidados continuos para mantenerlos a largo plazo
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        Tu piel sigue envejeciendo y enfrentándose a factores externos como el sol,
                        la polución y el estrés diario
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        Las sesiones de mantenimiento previenen el deterioro y ayudan a que tu piel
                        continúe mejorando progresivamente
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Prevención activa</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        Es más eficaz y económico mantener que tener que volver a realizar
                        tratamientos intensivos completos
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        El mantenimiento permite detectar y corregir nuevos problemas antes de
                        que se conviertan en algo más difícil de tratar
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        Continuamos estimulando la regeneración natural de tu piel para que
                        se mantenga joven y saludable
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                Planes de mantenimiento personalizados
              </h2>
              <p className="text-center text-[#F6F5F0]/70 mb-12 max-w-3xl mx-auto">
                Diseñamos tu plan de mantenimiento según tus necesidades, el tipo de tratamiento
                que realizaste y tus objetivos a largo plazo. Cada plan incluye sesiones mensuales
                y educación continua sobre el cuidado de tu piel.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Plan Facial Antienvejecimiento</h3>
                  <p className="text-[#F6F5F0]/70 text-sm mb-4">
                    Para mantener los resultados de tratamientos de rejuvenecimiento facial,
                    luminosidad y firmeza.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">1 sesión mensual de radiofrecuencia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Limpieza facial profunda</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Mascarilla personalizada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Rutina domiciliaria adaptada</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Target className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Plan Corporal Silueta</h3>
                  <p className="text-[#F6F5F0]/70 text-sm mb-4">
                    Mantén tu figura y evita que vuelvan los problemas de celulitis,
                    flacidez o acumulación de grasa.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">2 sesiones mensuales combinadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Radiofrecuencia + masaje modelador</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Presoterapia opcional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Seguimiento nutricional básico</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Heart className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Plan Piel Perfecta</h3>
                  <p className="text-[#F6F5F0]/70 text-sm mb-4">
                    Para mantener la piel libre de imperfecciones, manchas controladas
                    y textura uniforme tras tratamientos específicos.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">1 sesión mensual de mantenimiento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Limpieza profunda + exfoliación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Tratamiento despigmentante suave</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Protocolo domiciliario específico</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Plan Wellness Integral</h3>
                  <p className="text-[#F6F5F0]/70 text-sm mb-4">
                    Cuidado completo facial y corporal para un mantenimiento total
                    de tu imagen y bienestar.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">2 sesiones faciales mensuales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">2 sesiones corporales mensuales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Presoterapia ilimitada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Asesoramiento continuo</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Plan Luminosidad</h3>
                  <p className="text-[#F6F5F0]/70 text-sm mb-4">
                    Mantén tu piel radiante, hidratada y con ese glow saludable
                    que tanto te gusta.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">1 sesión mensual Indiba facial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Hidratación profunda</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Vitaminas y antioxidantes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Cuidados en casa personalizados</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#111111] border border-[#2A2A2A]/20 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-3">
                    <Award className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-light text-[#D4AF37] mb-2">Plan Personalizado</h3>
                  <p className="text-[#F6F5F0]/70 text-sm mb-4">
                    Creamos un plan totalmente a tu medida combinando diferentes
                    tratamientos según tus necesidades específicas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Frecuencia flexible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Combinación de tecnologías</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Ajustable según evolución</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/60 text-xs">Seguimiento personalizado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent border border-[#2A2A2A]/20 rounded-3xl p-12">
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                Educación de piel: aprende a cuidarte
              </h2>
              <p className="text-center text-[#F6F5F0]/70 mb-12 max-w-3xl mx-auto">
                El cuidado profesional es fundamental, pero lo que haces en casa es igualmente importante.
                Te enseñamos todo lo que necesitas saber para cuidar tu piel correctamente.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">¿Qué incluye la educación?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        <strong className="text-[#F6F5F0]">Rutina personalizada:</strong> Te diseñamos paso a paso
                        tu rutina de mañana y noche adaptada a tu tipo de piel
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        <strong className="text-[#F6F5F0]">Productos adecuados:</strong> Recomendaciones específicas
                        de limpiadores, sérum, cremas y protección solar apropiados
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        <strong className="text-[#F6F5F0]">Técnicas de aplicación:</strong> Cómo aplicar correctamente
                        cada producto para maximizar su efectividad
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        <strong className="text-[#F6F5F0]">Prevención:</strong> Consejos sobre protección solar,
                        alimentación, hidratación y hábitos saludables para tu piel
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl text-[#D4AF37] mb-4 font-light">Beneficios de la educación</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        Potencias los resultados de los tratamientos profesionales
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        Evitas cometer errores comunes que pueden dañar tu piel
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        Ahorras dinero al usar solo productos realmente necesarios
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        Ganas autonomía y conocimiento sobre el cuidado de tu piel
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#F6F5F0]/70">
                        Previenes problemas futuros y mantienes tu piel joven más tiempo
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-[#111111] border border-[#2A2A2A]/20 rounded-3xl p-12">
              <h2 className="text-3xl font-light text-[#F6F5F0] mb-8 text-center">
                Ventajas de los planes de mantenimiento
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Resultados duraderos</h3>
                  <p className="text-[#F6F5F0]/70">
                    Mantén y mejora continuamente los resultados conseguidos
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Ahorro económico</h3>
                  <p className="text-[#F6F5F0]/70">
                    Precios especiales y descuentos exclusivos en planes mensuales
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Comodidad</h3>
                  <p className="text-[#F6F5F0]/70">
                    Citas reservadas con prioridad y horarios flexibles
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Prevención</h3>
                  <p className="text-[#F6F5F0]/70">
                    Detectamos y tratamos problemas antes de que avancen
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Seguimiento cercano</h3>
                  <p className="text-[#F6F5F0]/70">
                    Atención personalizada y adaptación continua a tus necesidades
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl text-[#F6F5F0] mb-2 font-light">Educación continua</h3>
                  <p className="text-[#F6F5F0]/70">
                    Aprende constantemente sobre el mejor cuidado para tu piel
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
