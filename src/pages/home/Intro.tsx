import { useEffect, useRef, useState } from 'react';

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-archin-cream">
      <div className="px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase mb-6">
              About The Studio
            </span>
          </div>

          <h2
            className={`font-heading text-4xl md:text-5xl lg:text-6xl font-light text-archin-navy mb-8 tracking-wide transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Design That <span className="text-archin-gold">Inspires</span>
          </h2>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="font-body text-lg md:text-xl text-archin-grey leading-relaxed">
              ARCHIN is a boutique architecture and interior design studio founded on the belief 
              that great design transforms lives. Led by Our Principal Architect and Team, 
              we bring together international expertise and local sensibility to create spaces 
              that are as functional as they are beautiful.
            </p>
          </div>

          {/* Decorative Line */}
          <div
            className={`mt-12 flex items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-16 h-px bg-archin-gold/30" />
            <div className="w-2 h-2 bg-archin-gold rotate-45" />
            <div className="w-16 h-px bg-archin-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
