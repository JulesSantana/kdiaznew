import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from './Card';

interface Testimonial {
  id: string;
  name: string;
  quote_es: string;
  quote_en: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María G.',
    quote_es: 'Resultados súper naturales. Me explicaron cada paso y salí con la piel luminosa desde la primera sesión.',
    quote_en: 'Super natural results. They explained every step and I left with glowing skin from the first session.',
  },
  {
    id: '2',
    name: 'Laura T.',
    quote_es: 'La radiofrecuencia me ha dado firmeza sin agujas. El trato humano es impecable.',
    quote_en: 'Radiofrequency gave me firmness without needles. The personal care is impeccable.',
  },
  {
    id: '3',
    name: 'Andrea R.',
    quote_es: 'Por fin una limpieza profunda sin agresiones. ¡Repetiré!',
    quote_en: 'Finally a deep cleansing without aggression. I will be back!',
  },
];

export function Testimonials() {
  const { language, t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 text-shimmer text-glow">
            {t.testimonials.title}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col">
              <Quote size={32} className="text-[#D4AF37]/40 mb-4" />
              <p className="text-[#F6F5F0] italic leading-relaxed mb-4 flex-grow">
                {language === 'es' ? testimonial.quote_es : testimonial.quote_en}
              </p>
              <p className="text-[#D4AF37] text-sm font-medium">
                — {testimonial.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
