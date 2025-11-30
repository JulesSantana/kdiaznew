import { ReactNode, CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
  backgroundImage?: string;
}

export function Card({ children, className = '', hover = false, onClick, style, backgroundImage }: CardProps) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`
        relative
        bg-[#0B0B0C] rounded-2xl border border-[#2A2A2A]/20 p-6
        overflow-hidden
        ${hover ? 'group transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:translate-y-[-4px]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent holographic-border" />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute -top-[100px] -left-[100px] w-[200px] h-[200px] bg-[#D4AF37]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 energy-pulse" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
