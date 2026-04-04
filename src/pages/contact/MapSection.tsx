import { useEffect, useRef, useState } from 'react';

export default function MapSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-0 bg-archin-navy">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Section Header */}
        <div className="px-6 lg:px-8 pb-8 pt-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-archin-gold/10 border border-archin-gold/30">
                <i className="ri-map-2-line text-xl text-archin-gold" />
              </div>
              <div>
                <span className="inline-block px-4 py-1 bg-archin-gold/10 text-archin-gold font-body text-xs tracking-wider uppercase">Find Us</span>
                <h3 className="font-heading text-2xl font-light text-archin-cream mt-1 tracking-wide">Studio Location</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="relative w-full h-[450px] md:h-[500px]">
          <div className="absolute inset-x-6 md:inset-x-12 lg:inset-x-20 xl:inset-x-32 top-0 bottom-0 border-x border-archin-gold/20 pointer-events-none z-10" />
          <iframe
            src="https://maps.google.com/maps?q=Building+No+21+ARCHIN+Architecture+Jakkur+Yelahanka+Bengaluru+Karnataka+560064+India&hl=en&z=17&t=m&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ARCHIN Architecture and Interior Studio - Nehru Nagar Main Road, Jakkur, Yelahanka, Bengaluru 560064"
            className="w-full h-full"
          />
          <div className="absolute inset-0 pointer-events-none z-10" style={{ background: 'linear-gradient(to bottom, rgba(27,42,74,0.3) 0%, transparent 30%, transparent 70%, rgba(27,42,74,0.5) 100%)' }} />
        </div>

        {/* Open in Google Maps Button */}
        <div className="px-6 lg:px-8 pt-10 pb-16">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-3">
            <span className="text-archin-gold font-body text-xs tracking-widest uppercase">
              Get Directions to Our Studio
            </span>
            <a
              href="https://maps.app.goo.gl/5QKW6wV7iywM52k99"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-archin-gold text-archin-navy font-body font-semibold text-sm tracking-widest uppercase hover:bg-archin-gold/90 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-map-pin-2-fill text-lg" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
