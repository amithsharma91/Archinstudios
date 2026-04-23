import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=stunning%20modern%20luxury%20residential%20villa%20exterior%20architecture%20with%20beautiful%20landscaping%20warm%20golden%20hour%20lighting%20elegant%20contemporary%20home%20design%20with%20clean%20lines%20large%20windows%20stone%20facade%20professional%20architectural%20photography%20wide%20angle&width=1920&height=1080&seq=hero-arch-interiors-main-1&orientation=landscape"
          alt="Architecture and Interior Design by ARCHIN Studio Bengaluru"
          className="w-full h-full object-cover object-center"
        />
        {/* Layered Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-archin-navy/85 via-archin-navy/55 to-archin-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-archin-navy/70 via-transparent to-archin-navy/10" />
      </div>

      {/* Decorative vertical line */}
      <div
        className={`absolute left-10 top-1/2 -translate-y-1/2 w-px transition-all duration-1000 delay-700 ${
          isLoaded ? 'h-48 opacity-30' : 'h-0 opacity-0'
        } bg-gradient-to-b from-transparent via-archin-gold to-transparent hidden lg:block`}
      />

      {/* Content */}
      <div className="relative z-10 px-5 lg:px-16 w-full py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            {/* Label */}
            <div
              className={`transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-flex items-center gap-3 mb-6 md:mb-8">
                <span className="w-8 h-px bg-archin-gold" />
                <span className="font-body text-archin-gold text-[10px] md:text-xs tracking-[0.3em] uppercase">
                  Architecture &amp; Interior Design Studio — Bengaluru
                </span>
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className={`font-heading text-[36px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-archin-cream mb-5 md:mb-6 tracking-wide leading-[1.05] transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Spaces That
              <br />
              <span className="text-archin-gold italic">Inspire.</span>
              <br />
              Designs That Last.
            </h1>

            {/* Tagline */}
            <p
              className={`font-body text-[14px] md:text-base lg:text-lg text-archin-cream/75 max-w-xl mb-8 md:mb-10 leading-relaxed transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              ARCHIN Studio is a Bengaluru-based architecture and interior design firm with 19+ years of experience — crafting homes, workspaces, industrial facilities and interiors that are beautiful, functional and built to endure.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-start gap-3 md:gap-4 transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link
                to="/projects"
                className="px-6 md:px-8 py-3.5 md:py-4 bg-archin-gold text-archin-navy font-body font-semibold text-sm tracking-widest uppercase hover:bg-archin-gold/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Explore Our Work
                <i className="ri-arrow-right-line" />
              </Link>
              <Link
                to="/contact"
                className="px-6 md:px-8 py-3.5 md:py-4 bg-transparent border border-archin-cream/40 text-archin-cream font-body font-medium text-sm tracking-widest uppercase hover:border-archin-gold hover:text-archin-gold transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-28 right-6 lg:right-10 transition-all duration-700 delay-600 hidden lg:flex flex-col items-center gap-2 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-px h-16 bg-gradient-to-b from-archin-gold/60 to-transparent animate-pulse" />
        <span className="font-body text-archin-cream/40 text-xs tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
      </div>
    </section>
  );
}
