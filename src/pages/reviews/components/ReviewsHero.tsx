import { useEffect, useRef, useState } from 'react';

interface TrustBadgeProps {
  icon: string;
  value: string;
  label: string;
}

function TrustBadge({ icon, value, label }: TrustBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-2 px-8 py-6 border border-archin-gold/30 bg-archin-gold/5">
      <div className="w-10 h-10 flex items-center justify-center">
        <i className={`${icon} text-2xl text-archin-gold`} />
      </div>
      <span className="font-heading text-2xl text-archin-cream font-light tracking-wide">{value}</span>
      <span className="font-body text-xs text-archin-cream/60 tracking-widest uppercase text-center">{label}</span>
    </div>
  );
}

export default function ReviewsHero() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-archin-navy pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden"
    >
      {/* Background decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-archin-gold/10" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-archin-gold/10" />
        <div className="absolute top-1/4 left-0 w-1/3 h-px bg-archin-gold/5" />
        <div className="absolute top-3/4 right-0 w-1/3 h-px bg-archin-gold/5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Label */}
        <div
          className={`flex justify-center mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase">
            Client Reviews
          </span>
        </div>

        {/* Heading */}
        <h1
          className={`font-heading text-5xl md:text-6xl lg:text-7xl font-light text-archin-cream text-center tracking-wide mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          What Our Clients Say
        </h1>

        {/* Subtitle */}
        <p
          className={`font-body text-base md:text-lg text-archin-cream/70 text-center max-w-2xl mx-auto mb-16 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Real Experiences from Real People &mdash; Verified on Google
        </p>

        {/* Trust Badges */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <TrustBadge icon="ri-star-fill" value="5 Star" label="Rated on Google" />
          <TrustBadge icon="ri-shield-check-line" value="7" label="Verified Reviews" />
          <TrustBadge icon="ri-calendar-check-line" value="19+" label="Years of Trust" />
        </div>
      </div>
    </section>
  );
}
