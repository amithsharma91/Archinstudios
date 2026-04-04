import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ReviewsBottom() {
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
    <section ref={ref} className="bg-archin-navy py-20 md:py-24 relative overflow-hidden">
      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-archin-gold/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-archin-gold/20" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-archin-gold/40" />
            <i className="ri-building-line text-archin-gold/50 text-xl" />
            <div className="w-12 h-px bg-archin-gold/40" />
          </div>
        </div>

        <h2
          className={`font-heading text-4xl md:text-5xl font-light text-archin-cream mb-6 tracking-wide transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Ready to Create Your Dream Space
        </h2>

        <p
          className={`font-body text-lg text-archin-cream/70 leading-relaxed mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Join our growing family of satisfied clients. Let&apos;s bring your architectural vision to life together.
        </p>

        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-12 py-4 bg-archin-gold text-archin-navy font-body font-semibold text-sm tracking-widest uppercase hover:bg-archin-gold/90 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Start Your Project
            <i className="ri-arrow-right-line text-base" />
          </Link>
        </div>
      </div>
    </section>
  );
}
