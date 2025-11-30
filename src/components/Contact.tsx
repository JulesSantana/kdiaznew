import { useState, FormEvent } from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './Button';
import { Card } from './Card';

export function Contact() {
  const { language, t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      console.log('Form submitted:', { ...formState, language });

      setStatus('success');
      setFormState({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 text-shimmer text-glow">
            {t.nav.contact}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <h3 className="text-xl font-serif text-[#F6F5F0] mb-4">
              {t.ctas.book}
            </h3>
            <p className="text-[#F6F5F0]/70 mb-6">
              {language === 'es'
                ? 'Reserva tu cita directamente por WhatsApp para una respuesta rápida.'
                : 'Book your appointment directly via WhatsApp for a quick response.'}
            </p>
            <Button
              variant="solid"
              className="w-full flex items-center justify-center gap-2"
              onClick={() => window.open('https://wa.me/34634225951', '_blank')}
            >
              <MessageCircle size={20} />
              WhatsApp
            </Button>
          </Card>

          <Card>
            <h3 className="text-xl font-serif text-[#F6F5F0] mb-4">
              {language === 'es' ? 'Síguenos en Instagram' : 'Follow us on Instagram'}
            </h3>
            <p className="text-[#F6F5F0]/70 mb-6">
              {language === 'es'
                ? 'Descubre más resultados, consejos de cuidado y promociones.'
                : 'Discover more results, care tips and promotions.'}
            </p>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={() => window.open('https://www.instagram.com/kdiazfaceandbody', '_blank')}
            >
              <Instagram size={20} />
              @kdiazfaceandbody
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
