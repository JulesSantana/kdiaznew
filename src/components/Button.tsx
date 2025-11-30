import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  children: ReactNode;
}

export function Button({ variant = 'solid', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'relative px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E7C766] focus:ring-offset-2 focus:ring-offset-[#0B0B0C] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group';

  const variants = {
    solid: 'bg-gradient-to-br from-[#E7C766] to-[#CDAA3A] text-[#111111] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.03] active:scale-[0.98]',
    outline: 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]',
    ghost: 'text-[#D4AF37] hover:bg-[#D4AF37]/10',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-white/10 animate-pulse" />
        <div className="absolute top-0 right-1/4 w-1 h-full bg-white/10 animate-pulse" style={{ animationDelay: '0.2s' }} />
      </div>

      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}
