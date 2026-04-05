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
          src="https://readdy.ai/api/search-image?query=large%20scale%20industrial%20warehouse%20factory%20building%20exterior%20architecture%20dramatic%20wide%20angle%20shot%20steel%20structure%20concrete%20modern%20industrial%20facility%20with%20dramatic%20sky%20golden%20hour%20lighting%20professional%20architectural%20photography&width=1920&height=1080&seq=hero-industrial-archin-1&orientation=landscape"
          alt="Industrial Architecture by ARCHIN Studio"
          className="w-full h-full object-cover object-center scale-105"
          style={{ transform: 'scale(1.05)' }}
        />
        {/* Layered Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-archin-navy/90 via-archin-navy/70 to-archin-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-archin-navy via-transparent to-archin-navy/30" />
      </div>

      {/* Decorative vertical line */}
      <div
        className={`absolute left-10 top-1/2 -translate-y-1/2 w-px transition-all duration-1000 delay-700 ${
          isLoaded ? 'h-48 opacity-30' : 'h-0 opacity-0'
        } bg-gradient-to-b from-transparent via-archin-gold to-transparent hidden lg:block`}
      />

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-16 w-full py-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            {/* Label */}
            <div
              className={`transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-archin-gold" />
                <span className="font-body text-archin-gold text-xs tracking-[0.3em] uppercase">
                  Industrial Architecture Specialists
                </span>
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className={`font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-archin-cream mb-6 tracking-wide leading-[1.05] transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Built for Scale.
              <br />
              <span className="text-archin-gold italic">Engineered</span>
              <br />
              to Last.
            </h1>

            {/* Tagline */}
            <p
              className={`font-body text-base md:text-lg text-archin-cream/75 max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              ARCHIN Studio specialises in industrial architecture — warehouses, factories and large-scale facilities designed for performance, safety and long-term durability across Karnataka.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link
                to="/projects/industrial"
                className="px-8 py-4 bg-archin-gold text-archin-navy font-body font-semibold text-sm tracking-widest uppercase hover:bg-archin-gold/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
              >
                View Industrial Projects
                <i className="ri-arrow-right-line" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border border-archin-cream/40 text-archin-cream font-body font-medium text-sm tracking-widest uppercase hover:border-archin-gold hover:text-archin-gold transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Strip */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-10 transition-all duration-700 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="bg-archin-navy/80 backdrop-blur-sm border-t border-archin-gold/20 px-6 lg:px-16 py-5">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '19+', label: 'Years Experience' },
              { value: '200+', label: 'Projects Delivered' },
              { value: 'Karnataka', label: 'Primary Region' },
              { value: '5★', label: 'Google Rating' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-px h-8 bg-archin-gold/40 hidden md:block" />
                <div>
                  <div className="font-heading text-xl text-archin-gold font-light tracking-wide">
                    {stat.value}
                  </div>
                  <div className="font-body text-archin-cream/50 text-xs tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-28 right-10 transition-all duration-700 delay-600 hidden lg:flex flex-col items-center gap-2 ${
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
