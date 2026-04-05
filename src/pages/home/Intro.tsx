import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-archin-cream overflow-hidden">
      <div className="px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Text */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <span className="inline-flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-archin-gold" />
                <span className="font-body text-archin-gold text-xs tracking-[0.3em] uppercase">
                  About The Studio
                </span>
              </span>

              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-archin-navy mb-8 tracking-wide leading-tight">
                Industrial Design
                <br />
                <span className="text-archin-gold italic">Done Right</span>
              </h2>

              <p className="font-body text-base text-archin-grey leading-relaxed mb-6">
                ARCHIN Studio is a Bangalore-based architecture firm with 19+ years of experience,
                specialising in industrial facilities — warehouses, factories and large-scale manufacturing
                complexes. We engineer spaces that meet demanding functional requirements while maintaining
                the highest standards of structural integrity, safety and operational efficiency.
              </p>

              <p className="font-body text-base text-archin-grey leading-relaxed mb-10">
                Founded by UK-educated architects, our studio brings international design thinking
                to every project, combined with deep-rooted local expertise across Karnataka.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-archin-navy text-archin-cream font-body font-medium text-sm tracking-widest uppercase hover:bg-archin-navy/80 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Our Story
                  <i className="ri-arrow-right-line" />
                </Link>
                <Link
                  to="/credentials"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-archin-gold/40 text-archin-navy font-body font-medium text-sm tracking-widest uppercase hover:border-archin-gold hover:text-archin-gold transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Our Credentials
                </Link>
              </div>
            </div>

            {/* Right: Image with accent */}
            <div
              className={`relative transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              {/* Main Image */}
              <div className="relative w-full h-[480px] lg:h-[560px]">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20architecture%20studio%20interior%20with%20architectural%20drawings%20blueprints%20on%20table%20warm%20ambient%20lighting%20minimalist%20workspace%20elegant%20professional%20design%20studio%20with%20wooden%20desk%20and%20architectural%20models%20warm%20cream%20tones&width=800&height=1000&seq=intro-studio-archin-2&orientation=portrait"
                  alt="ARCHIN Studio workspace"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-archin-gold" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-archin-gold" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-archin-navy p-6 border border-archin-gold/30">
                <div className="font-heading text-4xl text-archin-gold font-light tracking-wide">19+</div>
                <div className="font-body text-archin-cream/70 text-xs tracking-widest uppercase mt-1">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
