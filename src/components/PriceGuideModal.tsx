import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Modal } from './Modal';
import { Maximize2, X } from 'lucide-react';

interface PriceGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PriceGuideModal({ isOpen, onClose }: PriceGuideModalProps) {
  const { t } = useLanguage();
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title={t.priceGuideModal.title}>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <img
                src="/guia_precios_1.jpg"
                alt="Lista de precios - K•Diaz Face & Body"
                className="w-full h-auto rounded-lg border border-[#D4AF37]/30"
              />
            </div>
            <div className="relative">
              <img
                src="/image0(30).jpeg"
                alt="Lista de precios - K•Diaz Face & Body"
                className="w-full h-auto rounded-lg border border-[#D4AF37]/30"
              />
            </div>
          </div>
          <button
            onClick={() => setIsFullscreen(true)}
            className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0B0B0C] px-6 py-3 rounded-lg font-medium hover:bg-[#C19B2F] transition-colors"
          >
            <Maximize2 size={20} />
            Ver en tamaño completo
          </button>
        </div>
      </Modal>

      {isFullscreen && (
        <div className="fixed inset-0 z-[100] bg-black/95 overflow-y-auto">
          <button
            onClick={() => setIsFullscreen(false)}
            className="fixed top-4 right-4 text-white hover:text-[#D4AF37] transition-colors bg-black/90 rounded-full p-3 shadow-2xl z-50 border-2 border-white/20"
            aria-label="Cerrar"
          >
            <X size={32} strokeWidth={2.5} />
          </button>

          <div className="min-h-screen py-20 px-4 flex items-start justify-center">
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-7xl">
              <img
                src="/guia_precios_1.jpg"
                alt="Lista de precios - K•Diaz Face & Body"
                className="w-full h-auto"
                onClick={(e) => e.stopPropagation()}
              />
              <img
                src="/image0(30).jpeg"
                alt="Lista de precios - K•Diaz Face & Body"
                className="w-full h-auto"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          <div className="fixed bottom-6 left-0 right-0 text-center text-white/70 text-sm pointer-events-none">
            Usa scroll para ver las imágenes completas
          </div>
        </div>
      )}
    </>
  );
}
