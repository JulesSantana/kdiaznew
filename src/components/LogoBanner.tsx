export function LogoBanner() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative w-full rounded-2xl overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] aspect-[2/1]"
          style={{
            backgroundImage: 'url(/chatgpt_image_nov_19,_2025,_10_16_50_am.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </div>
      </div>
    </section>
  );
}
