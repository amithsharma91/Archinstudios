import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function CTASection() {
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
    <section ref={sectionRef} className="px-6 lg:px-8 py-24 lg:py-32 bg-archin-navy">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2
          className={`font-heading text-4xl md:text-5xl lg:text-6xl font-light text-archin-cream mb-6 tracking-wide leading-tight transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Ready to Create Something{' '}
          <span className="text-archin-gold block">Extraordinary?</span>
        </h2>

        {/* Subtext */}
        <p
          className={`font-body text-lg text-archin-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Let&apos;s collaborate on your next architectural project. Whether you&apos;re envisioning 
          a dream home or a commercial landmark, we&apos;re here to bring your vision to life.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link 
            to="/projects" 
            className="px-8 py-4 bg-archin-gold text-archin-navy font-body font-semibold tracking-wide hover:bg-archin-gold/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            View Our Work
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-transparent border-2 border-archin-gold text-archin-gold font-body font-semibold tracking-wide hover:bg-archin-gold hover:text-archin-navy transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
