export default function Hero() {
  return (
    <section className="bg-archin-navy pt-32 pb-20 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C9A96E 0, #C9A96E 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <p className="text-archin-gold font-body font-medium tracking-[0.25em] uppercase text-sm mb-6">
          Professional Credentials
        </p>
        <h1 className="text-5xl lg:text-6xl font-heading font-bold text-archin-cream mb-6 leading-tight">
          Credentials and Trust
        </h1>
        <p className="text-xl lg:text-2xl font-body text-archin-cream/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Why Clients Choose ARCHIN with Confidence
        </p>
        {/* Gold divider */}
        <div className="flex items-center justify-center space-x-4">
          <div className="h-px w-24 bg-archin-gold"></div>
          <div className="w-2.5 h-2.5 bg-archin-gold rotate-45"></div>
          <div className="h-px w-24 bg-archin-gold"></div>
        </div>
      </div>
    </section>
  );
}
