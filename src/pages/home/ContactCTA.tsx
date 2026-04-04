import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactCTA() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-archin-navy relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=modern%20architecture%20building%20exterior%20at%20twilight%20dramatic%20lighting%20geometric%20shapes%20luxury%20contemporary%20design%20elegant%20professional%20architectural%20photography%20with%20warm%20golden%20tones&width=1920&height=800&seq=cta-bg-navy-1&orientation=landscape"
          alt="Architecture Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-archin-navy/80" />
      </div>

      <div className="px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <span
            className={`inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Start Your Project
          </span>

          {/* Heading */}
          <h2
            className={`font-heading text-4xl md:text-5xl lg:text-6xl font-light text-archin-cream mb-6 tracking-wide leading-tight transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Ready to Transform
            <br />
            <span className="text-archin-gold">Your Space?</span>
          </h2>

          {/* Description */}
          <p
            className={`font-body text-lg text-archin-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Whether you're dreaming of a new home, planning a renovation, or 
            designing a commercial space, we'd love to hear about your project. 
            Let's create something extraordinary together.
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-archin-gold text-archin-navy font-body font-semibold tracking-wide hover:bg-archin-gold/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Get In Touch
            </Link>
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center gap-2 text-archin-cream/70">
              <i className="ri-phone-line text-archin-gold" />
              <span className="font-body text-sm">+91 99803 77877</span>
            </div>
            <div className="flex items-center gap-2 text-archin-cream/70">
              <i className="ri-mail-line text-archin-gold" />
              <span className="font-body text-sm">Thearchinstudios@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-archin-cream/70">
              <i className="ri-map-pin-line text-archin-gold" />
              <span className="font-body text-sm">Bangalore, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
