import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'cancellation' | 'consent';
}

export function PolicyModal({ isOpen, onClose, type }: PolicyModalProps) {
  const { language } = useLanguage();

  if (!isOpen) return null;

  const content = {
    privacy: {
      es: {
        title: 'Política de Privacidad',
        content: `
          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">1. Responsable del Tratamiento</h3>
          <p class="mb-4">K•Diaz Face & Body, con domicilio en Avenida Machupichu 85, Madrid, es responsable del tratamiento de sus datos personales.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">2. Datos que Recopilamos</h3>
          <p class="mb-4">Recopilamos los siguientes datos personales:</p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Información sobre tratamientos y consultas</li>
          </ul>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">3. Finalidad del Tratamiento</h3>
          <p class="mb-4">Sus datos se utilizarán para:</p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Gestionar consultas y citas</li>
            <li>Proporcionar información sobre nuestros servicios</li>
            <li>Enviar comunicaciones relacionadas con tratamientos</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">4. Base Legal</h3>
          <p class="mb-4">El tratamiento de sus datos se basa en su consentimiento expreso y en la ejecución del contrato de servicios.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">5. Sus Derechos</h3>
          <p class="mb-4">Tiene derecho a:</p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Acceder a sus datos personales</li>
            <li>Rectificar datos inexactos</li>
            <li>Solicitar la supresión de sus datos</li>
            <li>Oponerse al tratamiento</li>
            <li>Solicitar la limitación del tratamiento</li>
            <li>Portabilidad de los datos</li>
          </ul>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">6. Seguridad</h3>
          <p class="mb-4">Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra acceso no autorizado, pérdida o alteración.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">7. Conservación de Datos</h3>
          <p class="mb-4">Sus datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y para cumplir con obligaciones legales.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">8. Contacto</h3>
          <p class="mb-4">Para ejercer sus derechos o realizar consultas sobre privacidad, puede contactarnos a través de WhatsApp al +34 634 225 951.</p>
        `,
      },
      en: {
        title: 'Privacy Policy',
        content: `
          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">1. Data Controller</h3>
          <p class="mb-4">K•Diaz Face & Body, located at Avenida Machupichu 85, Madrid, is responsible for processing your personal data.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">2. Data We Collect</h3>
          <p class="mb-4">We collect the following personal data:</p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Information about treatments and consultations</li>
          </ul>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">3. Purpose of Processing</h3>
          <p class="mb-4">Your data will be used to:</p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Manage inquiries and appointments</li>
            <li>Provide information about our services</li>
            <li>Send communications related to treatments</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">4. Legal Basis</h3>
          <p class="mb-4">The processing of your data is based on your express consent and the execution of the service contract.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">5. Your Rights</h3>
          <p class="mb-4">You have the right to:</p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing</li>
            <li>Request limitation of processing</li>
            <li>Data portability</li>
          </ul>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">6. Security</h3>
          <p class="mb-4">We implement technical and organizational security measures to protect your data against unauthorized access, loss, or alteration.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">7. Data Retention</h3>
          <p class="mb-4">Your data will be retained for the time necessary to fulfill the purpose for which it was collected and to comply with legal obligations.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">8. Contact</h3>
          <p class="mb-4">To exercise your rights or make privacy inquiries, you can contact us via WhatsApp at +34 634 225 951.</p>
        `,
      },
    },
    cancellation: {
      es: {
        title: 'Política de Cancelación',
        content: `
          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">1. Cancelación de Citas</h3>
          <p class="mb-4">En K•Diaz Face & Body valoramos su tiempo y el nuestro. Le pedimos que nos notifique cualquier cancelación con al menos 24 horas de anticipación.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">2. Notificación de Cancelación</h3>
          <p class="mb-4">Para cancelar o reprogramar una cita, puede contactarnos:</p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Por WhatsApp al +34 634 225 951</li>
            <li>Por mensaje directo en Instagram @kdiazfaceandbody</li>
          </ul>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">3. Cancelación Tardía</h3>
          <p class="mb-4">Las cancelaciones realizadas con menos de 24 horas de anticipación pueden estar sujetas a un cargo del 50% del valor del tratamiento reservado.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">4. No Presentación</h3>
          <p class="mb-4">Si no se presenta a su cita sin previo aviso, se cobrará el 100% del valor del tratamiento reservado.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">5. Reprogramación</h3>
          <p class="mb-4">Ofrecemos la flexibilidad de reprogramar su cita sin cargo si nos avisa con al menos 24 horas de anticipación.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">6. Emergencias</h3>
          <p class="mb-4">Entendemos que pueden surgir emergencias. En casos excepcionales, evaluaremos cada situación individualmente.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">7. Paquetes y Bonos</h3>
          <p class="mb-4">Los paquetes de tratamiento y bonos tienen una validez específica que se comunicará en el momento de la compra. No son reembolsables pero pueden transferirse bajo ciertas condiciones.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">8. Reembolsos</h3>
          <p class="mb-4">Los reembolsos se considerarán caso por caso y solo se procesarán si el servicio no se ha proporcionado según lo acordado.</p>
        `,
      },
      en: {
        title: 'Cancellation Policy',
        content: `
          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">1. Appointment Cancellation</h3>
          <p class="mb-4">At K•Diaz Face & Body we value your time and ours. We ask that you notify us of any cancellation at least 24 hours in advance.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">2. Cancellation Notification</h3>
          <p class="mb-4">To cancel or reschedule an appointment, you can contact us:</p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Via WhatsApp at +34 634 225 951</li>
            <li>By direct message on Instagram @kdiazfaceandbody</li>
          </ul>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">3. Late Cancellation</h3>
          <p class="mb-4">Cancellations made with less than 24 hours notice may be subject to a charge of 50% of the reserved treatment value.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">4. No-Show</h3>
          <p class="mb-4">If you do not show up for your appointment without prior notice, 100% of the reserved treatment value will be charged.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">5. Rescheduling</h3>
          <p class="mb-4">We offer the flexibility to reschedule your appointment at no charge if you notify us at least 24 hours in advance.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">6. Emergencies</h3>
          <p class="mb-4">We understand that emergencies can arise. In exceptional cases, we will evaluate each situation individually.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">7. Packages and Vouchers</h3>
          <p class="mb-4">Treatment packages and vouchers have a specific validity that will be communicated at the time of purchase. They are non-refundable but may be transferred under certain conditions.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">8. Refunds</h3>
          <p class="mb-4">Refunds will be considered on a case-by-case basis and will only be processed if the service has not been provided as agreed.</p>
        `,
      },
    },
    consent: {
      es: {
        title: 'Consentimiento Informado',
        content: `
          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">1. Información del Tratamiento</h3>
          <p class="mb-4">Antes de cualquier tratamiento, se le proporcionará información detallada sobre:</p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Naturaleza y objetivo del tratamiento</li>
            <li>Procedimiento a realizar</li>
            <li>Beneficios esperados</li>
            <li>Posibles efectos secundarios o riesgos</li>
            <li>Alternativas disponibles</li>
            <li>Cuidados posteriores necesarios</li>
          </ul>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">2. Consentimiento Voluntario</h3>
          <p class="mb-4">Su consentimiento para cualquier tratamiento es completamente voluntario. Tiene derecho a rechazar o suspender cualquier tratamiento en cualquier momento.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">3. Evaluación Médica</h3>
          <p class="mb-4">Antes de iniciar cualquier tratamiento, realizaremos una evaluación completa de su historial médico y condición actual para determinar la idoneidad del tratamiento.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">4. Fotografías y Documentación</h3>
          <p class="mb-4">Podemos solicitar su consentimiento para tomar fotografías antes, durante y después del tratamiento con fines de:</p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Registro médico y seguimiento</li>
            <li>Comparación de resultados</li>
            <li>Uso educativo o promocional (solo con su autorización expresa adicional)</li>
          </ul>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">5. Información de Salud</h3>
          <p class="mb-4">Es fundamental que nos informe sobre:</p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Alergias conocidas</li>
            <li>Condiciones médicas preexistentes</li>
            <li>Medicamentos que esté tomando</li>
            <li>Tratamientos estéticos previos</li>
            <li>Embarazo o lactancia</li>
          </ul>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">6. Resultados</h3>
          <p class="mb-4">Los resultados pueden variar entre individuos. No se garantizan resultados específicos, aunque trabajaremos diligentemente para alcanzar sus objetivos estéticos.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">7. Seguimiento</h3>
          <p class="mb-4">Después del tratamiento, proporcionaremos instrucciones de cuidado posteriores y estaremos disponibles para cualquier pregunta o inquietud.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">8. Revocación del Consentimiento</h3>
          <p class="mb-4">Puede revocar su consentimiento en cualquier momento antes o durante el tratamiento contactándonos directamente.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">9. Contacto</h3>
          <p class="mb-4">Si tiene preguntas sobre cualquier aspecto del consentimiento informado, no dude en contactarnos por WhatsApp al +34 634 225 951.</p>
        `,
      },
      en: {
        title: 'Informed Consent',
        content: `
          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">1. Treatment Information</h3>
          <p class="mb-4">Before any treatment, you will be provided with detailed information about:</p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Nature and objective of the treatment</li>
            <li>Procedure to be performed</li>
            <li>Expected benefits</li>
            <li>Possible side effects or risks</li>
            <li>Available alternatives</li>
            <li>Required aftercare</li>
          </ul>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">2. Voluntary Consent</h3>
          <p class="mb-4">Your consent for any treatment is completely voluntary. You have the right to refuse or discontinue any treatment at any time.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">3. Medical Evaluation</h3>
          <p class="mb-4">Before starting any treatment, we will conduct a complete evaluation of your medical history and current condition to determine treatment suitability.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">4. Photography and Documentation</h3>
          <p class="mb-4">We may request your consent to take photographs before, during, and after treatment for purposes of:</p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Medical record and monitoring</li>
            <li>Results comparison</li>
            <li>Educational or promotional use (only with your additional express authorization)</li>
          </ul>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">5. Health Information</h3>
          <p class="mb-4">It is essential that you inform us about:</p>
          <ul class="list-disc list-inside mb-4 space-y-2">
            <li>Known allergies</li>
            <li>Pre-existing medical conditions</li>
            <li>Medications you are taking</li>
            <li>Previous aesthetic treatments</li>
            <li>Pregnancy or breastfeeding</li>
          </ul>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">6. Results</h3>
          <p class="mb-4">Results may vary between individuals. Specific results are not guaranteed, although we will work diligently to achieve your aesthetic goals.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">7. Follow-up</h3>
          <p class="mb-4">After treatment, we will provide aftercare instructions and will be available for any questions or concerns.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">8. Consent Revocation</h3>
          <p class="mb-4">You may revoke your consent at any time before or during treatment by contacting us directly.</p>

          <h3 class="text-xl font-serif text-[#D4AF37] mb-4">9. Contact</h3>
          <p class="mb-4">If you have questions about any aspect of informed consent, please do not hesitate to contact us via WhatsApp at +34 634 225 951.</p>
        `,
      },
    },
  };

  const { title, content: htmlContent } = content[type][language];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.3)] animate-scaleIn">
        <div className="sticky top-0 bg-[#0B0B0C]/95 backdrop-blur-sm border-b border-[#D4AF37]/20 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-serif text-gradient-gold">{title}</h2>
          <button
            onClick={onClose}
            className="text-[#F6F5F0] hover:text-[#D4AF37] transition-colors p-2 rounded-lg hover:bg-[#D4AF37]/10"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
        <div
          className="p-6 overflow-y-auto max-h-[calc(90vh-100px)] text-[#F6F5F0]/80 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
