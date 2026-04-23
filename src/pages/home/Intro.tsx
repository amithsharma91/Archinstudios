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
    <section ref={sectionRef} className="py-10 md:py-24 lg:py-32 bg-archin-cream overflow-hidden">
      <div className="px-5 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
            {/* Left: Text */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <span className="inline-flex items-center gap-3 mb-6 md:mb-8">
                <span className="w-8 h-px bg-archin-gold" />
                <span className="font-body text-archin-gold text-xs tracking-[0.3em] uppercase">
                  About The Studio
                </span>
              </span>

              <h2 className="font-heading text-[28px] md:text-5xl lg:text-6xl font-light text-archin-navy mb-6 md:mb-8 tracking-wide leading-tight">
                Architecture &amp;
                <br />
                <span className="text-archin-gold italic">Interiors, Elevated</span>
              </h2>

              <p className="font-body text-[14px] md:text-base text-archin-grey leading-relaxed mb-4 md:mb-6">
                ARCHIN Studio is a Bengaluru-based architecture and interior design firm with 19+ years of experience. We design homes, commercial spaces, industrial facilities and interiors that are thoughtfully crafted — balancing beauty, function and lasting quality.
              </p>

              <p className="font-body text-[14px] md:text-base text-archin-grey leading-relaxed mb-8 md:mb-10">
                Founded by UK-educated architects, our studio brings international design sensibility to every project, grounded in deep local expertise across Karnataka. From concept to completion, we are your creative and technical partner.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3 md:py-3.5 bg-archin-navy text-archin-cream font-body font-medium text-sm tracking-widest uppercase hover:bg-archin-navy/80 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Our Story
                  <i className="ri-arrow-right-line" />
                </Link>
                <Link
                  to="/credentials"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3 md:py-3.5 border border-archin-gold/40 text-archin-navy font-body font-medium text-sm tracking-widest uppercase hover:border-archin-gold hover:text-archin-gold transition-all duration-300 cursor-pointer whitespace-nowrap"
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
              <div className="relative w-full h-[260px] sm:h-[380px] lg:h-[560px]">
                <img
                  src="https://readdy.ai/api/search-image?query=luxurious%20modern%20interior%20design%20living%20room%20with%20elegant%20furniture%20warm%20ambient%20lighting%20high%20ceilings%20natural%20materials%20marble%20floors%20sophisticated%20contemporary%20home%20interior%20with%20neutral%20tones%20cream%20beige%20gold%20accents%20professional%20interior%20photography&width=800&height=1000&seq=intro-interiors-archin-3&orientation=portrait"
                  alt="ARCHIN Studio interior design project Bengaluru"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 md:w-12 md:h-12 border-t-2 border-l-2 border-archin-gold" />
                <div className="absolute bottom-0 right-0 w-10 h-10 md:w-12 md:h-12 border-b-2 border-r-2 border-archin-gold" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 left-3 sm:-bottom-6 sm:-left-6 bg-archin-navy p-4 md:p-6 border border-archin-gold/30">
                <div className="font-heading text-2xl sm:text-4xl text-archin-gold font-light tracking-wide">19+</div>
                <div className="font-body text-archin-cream/70 text-[10px] md:text-xs tracking-widest uppercase mt-1">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
