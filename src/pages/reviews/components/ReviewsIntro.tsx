import { useEffect, useRef, useState } from 'react';

export default function ReviewsIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-archin-cream py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        {/* Gold divider */}
        <div
          className={`flex items-center justify-center gap-4 mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-16 h-px bg-archin-gold/40" />
          <i className="ri-double-quotes-l text-archin-gold/50 text-2xl" />
          <div className="w-16 h-px bg-archin-gold/40" />
        </div>

        <h2
          className={`font-heading text-3xl md:text-4xl lg:text-5xl font-light text-archin-navy mb-6 tracking-wide transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Every Review Tells a Story
        </h2>

        <p
          className={`font-body text-lg text-archin-grey leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          At ARCHIN Studio we let our work speak for itself. These are genuine reviews
          from real clients, each linking to Google Maps for full verified authenticity.
        </p>

        <div
          className={`w-20 h-px bg-archin-gold mx-auto mt-10 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />
      </div>
    </section>
  );
}
