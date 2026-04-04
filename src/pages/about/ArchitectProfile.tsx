import { useEffect, useRef, useState } from 'react';

export default function ArchitectProfile() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const studioHighlights = [
    { value: '2010', label: 'Year Founded', icon: 'ri-building-line' },
    { value: '19+', label: 'Years of Practice', icon: 'ri-calendar-check-line' },
    { value: '200+', label: 'Projects Completed', icon: 'ri-home-6-line' },
    { value: 'Bengaluru', label: 'Studio Location', icon: 'ri-map-pin-2-line' },
  ];

  return (
    <section ref={sectionRef} className="px-6 lg:px-8 py-24 lg:py-32 bg-archin-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Studio at a Glance */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative bg-archin-navy p-10 border border-archin-gold/30">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-archin-gold" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-archin-gold" />

              {/* Header */}
              <div className="mb-10 relative z-10">
                <span className="text-archin-gold font-body text-sm tracking-widest uppercase">
                  Studio at a Glance
                </span>
                <div className="w-12 h-px bg-archin-gold mt-3" />
              </div>

              {/* Stats */}
              <div className="space-y-8 relative z-10">
                {studioHighlights.map((item) => (
                  <div key={item.label} className="flex items-center gap-6 group">
                    <div className="w-14 h-14 flex items-center justify-center border border-archin-gold/30 group-hover:border-archin-gold group-hover:bg-archin-gold/10 transition-all duration-300 flex-shrink-0">
                      <i className={`${item.icon} text-xl text-archin-gold`} />
                    </div>
                    <div>
                      <div className="font-heading text-3xl text-archin-cream font-light tracking-wide">
                        {item.value}
                      </div>
                      <div className="font-body text-xs text-archin-cream/60 tracking-wider uppercase mt-1">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom tagline */}
              <div className="mt-10 pt-8 border-t border-archin-gold/20 relative z-10">
                <p className="font-body text-archin-cream/60 text-sm leading-relaxed italic">
                  &ldquo;Building spaces that inspire, endure, and enrich &mdash; since 2010.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Title */}
            <span className="inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase mb-6">
              Bharath and Team
            </span>

            <h2 className="font-heading text-4xl md:text-5xl font-light text-archin-navy mb-2 tracking-wide">
              Bharath and Team
            </h2>

            <p className="text-archin-gold font-body text-sm mb-8">
              B.Arch VTU | MS University of Leeds UK
            </p>

            {/* Bio */}
            <div className="space-y-6 mb-10">
              <p className="font-body text-lg text-archin-grey leading-relaxed">
                Bharath and Team bring over 19 years of architectural excellence to every project.
                With a Bachelor of Architecture from Visveswaraiah Technological University Belgaum
                and a Master of Science in Engineering Project Management from the University of Leeds
                United Kingdom, the studio combines international design thinking with deep rooted
                local expertise.
              </p>
              <p className="font-body text-lg text-archin-grey leading-relaxed">
                ARCHIN was founded on the belief that great architecture should be accessible,
                personal and enduring. Every project we undertake is a reflection of our clients&apos;
                vision, brought to life through precision craft and creative excellence.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="relative pl-8 border-l-2 border-archin-gold">
              <span className="absolute -top-4 -left-2 text-archin-gold/30 text-6xl font-heading">
                &ldquo;
              </span>
              <p className="font-heading text-xl md:text-2xl text-archin-navy italic leading-relaxed tracking-wide">
                Architecture is not merely about buildings; it is about creating environments
                that elevate the human experience. Every space we design must tell a story,
                evoke emotion, and stand the test of time.
              </p>
              <footer className="mt-4 text-archin-gold font-body text-sm tracking-wider uppercase">
                &mdash; Design Philosophy
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
