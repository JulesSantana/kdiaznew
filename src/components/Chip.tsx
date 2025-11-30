interface ChipProps {
  children: string;
  variant?: 'default' | 'gold';
}

export function Chip({ children, variant = 'default' }: ChipProps) {
  const styles = {
    default: 'border-[#D4AF37]/30 text-[#F6F5F0] hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/5',
    gold: 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]',
  };

  return (
    <span
      className={`
        relative inline-block px-3 py-1 text-sm rounded-full border
        transition-all duration-300
        group cursor-default
        ${styles[variant]}
      `}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 holographic-border" />

      <span className="relative z-10">
        {children}
      </span>
    </span>
  );
}
