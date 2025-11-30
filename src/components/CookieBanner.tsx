import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './Button';

export function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('kdiaz-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kdiaz-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('kdiaz-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slideUp">
      <div className="max-w-4xl mx-auto bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-2xl p-6 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F6F5F0] text-sm">
            {t.cookie.message}
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <Button variant="ghost" onClick={handleDecline} className="text-sm">
              {t.cookie.decline}
            </Button>
            <Button variant="solid" onClick={handleAccept} className="text-sm">
              {t.cookie.accept}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
