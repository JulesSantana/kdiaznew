import { useState } from 'react';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { PolicyModal } from './PolicyModal';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [openPolicy, setOpenPolicy] = useState<'privacy' | 'cancellation' | 'consent' | null>(null);

  return (
    <footer className="bg-[#0B0B0C] border-t border-[#2A2A2A]/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4 relative group">
              {/* Ambient Glow Layer */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Floating Particles */}
              <div className="absolute -inset-8 pointer-events-none overflow-visible opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-1 h-1 bg-[#D4AF37] rounded-full" style={{ animation: 'particleFloat 3s ease-in-out infinite' }} />
                <div className="absolute top-2 right-2 w-1 h-1 bg-[#E7C766] rounded-full" style={{ animation: 'particleFloat 3s ease-in-out infinite 0.5s' }} />
                <div className="absolute bottom-2 left-4 w-1 h-1 bg-[#D4AF37] rounded-full" style={{ animation: 'particleFloat 3s ease-in-out infinite 1s' }} />
                <div className="absolute bottom-0 right-4 w-1 h-1 bg-[#E7C766] rounded-full" style={{ animation: 'particleFloat 3s ease-in-out infinite 1.5s' }} />
              </div>

              <div className="relative">
                {/* Energy Rings */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-[#D4AF37]/30 rounded-lg" style={{ animation: 'energyRing 2s ease-out infinite' }} />
                  <div className="absolute inset-0 border-2 border-[#E7C766]/30 rounded-lg" style={{ animation: 'energyRing 2s ease-out infinite 0.6s' }} />
                  <div className="absolute inset-0 border-2 border-[#D4AF37]/30 rounded-lg" style={{ animation: 'energyRing 2s ease-out infinite 1.2s' }} />
                </div>

                {/* Orbiting Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" style={{ animation: 'orbitRotate 4s linear infinite' }} />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-1 h-1 bg-[#E7C766] rounded-full" style={{ animation: 'orbitRotate 3s linear infinite reverse' }} />
                  </div>
                </div>

                {/* Multi-layered Glows */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/20 via-[#E7C766]/40 to-[#D4AF37]/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37]/30 via-transparent to-[#E7C766]/30 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-700" />

                {/* Scanline Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" style={{ animation: 'scanline 3s linear infinite' }} />
                </div>

                {/* Logo with Enhanced Glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-[#E7C766]/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src="/image2(5).jpeg"
                    alt="Katherine Diaz"
                    className="h-20 w-auto relative z-10 drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-500"
                    style={{ filter: 'contrast(1.05) brightness(1.05)', transform: 'scaleX(1.3)' }}
                  />
                </div>

                {/* Bottom Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500" />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/60 rounded-tl-lg transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/60 rounded-br-lg transition-all duration-500" />
              </div>


            </div>
          </div>

          <div>
            <h4 className="text-[#F6F5F0] font-medium mb-4">{t.nav.contact}</h4>
            <div className="space-y-3 mb-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Avenida+Machupichu+85,+Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#F6F5F0]/70 hover:text-[#D4AF37] text-sm transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded p-2 -m-2"
              >
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <span>{t.address}</span>
                  <span className="text-[#F6F5F0]/50 group-hover:text-[#D4AF37]/70 transition-colors">Madrid</span>
                </div>
              </a>
            </div>

            <div className="space-y-3 mb-8">
              <a
                href="https://wa.me/34634225951"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#F6F5F0]/70 hover:text-[#D4AF37] text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-lg p-2 -m-2"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} className="flex-shrink-0" />
                <span>+34 634 225 951</span>
              </a>
              <a
                href="https://www.instagram.com/kdiazfaceandbody"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#F6F5F0]/70 hover:text-[#D4AF37] text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-lg p-2 -m-2"
                aria-label="Instagram"
              >
                <Instagram size={16} className="flex-shrink-0" />
                <span>@kdiazfaceandbody</span>
              </a>
            </div>

            <a
              href="https://www.instagram.com/luminaweb.design"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 relative focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-lg p-3 -ml-3 transition-all duration-300 hover:scale-105 inline-flex"
              aria-label="Designed by Lumina Web"
            >
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Logo container */}
              <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <img
                  src="/PHOTO-2025-10-15-17-20-34.jpg"
                  alt="Lumina Web"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div className="relative z-10 flex flex-col items-start">
                <span className="text-[#F6F5F0]/70 text-xs font-medium group-hover:text-blue-300 transition-colors duration-300">
                  Designed by
                </span>
                <span className="text-[#F6F5F0] text-sm font-semibold group-hover:text-blue-200 transition-colors duration-300">
                  Lumina Web
                </span>
              </div>
            </a>
          </div>

          <div>
            <h4 className="text-[#F6F5F0] font-medium mb-4">{t.footer.policies}</h4>
            <nav className="space-y-2">
              <button
                onClick={() => setOpenPolicy('privacy')}
                className="block text-[#F6F5F0]/70 hover:text-[#D4AF37] text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-2 py-1 -ml-2"
              >
                {t.footer.privacy}
              </button>
              <button
                onClick={() => setOpenPolicy('consent')}
                className="block text-[#F6F5F0]/70 hover:text-[#D4AF37] text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-2 py-1 -ml-2"
              >
                {t.footer.consent}
              </button>
            </nav>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A]/20 pt-8 text-center">
          <p className="text-[#F6F5F0]/50 text-sm">
            © {currentYear} {t.brand}. {t.footer.rights}
          </p>
        </div>
      </div>

      <PolicyModal
        isOpen={openPolicy !== null}
        onClose={() => setOpenPolicy(null)}
        type={openPolicy || 'privacy'}
      />
    </footer>
  );
}
