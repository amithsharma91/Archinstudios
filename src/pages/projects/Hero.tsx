import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/8ff3523be8a139080948499673d67e15.png"
          alt="Architecture Projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-archin-navy/90 via-archin-navy/70 to-archin-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-archin-black via-transparent to-archin-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-16 w-full pt-36 pb-24">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-archin-gold" />
              <span className="font-body text-archin-gold text-xs tracking-[0.3em] uppercase">Portfolio</span>
            </span>
          </div>

          <h1
            className={`font-heading text-5xl md:text-6xl lg:text-7xl font-light text-archin-cream mb-6 tracking-wide leading-tight transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Projects
          </h1>

          <p
            className={`font-heading text-xl md:text-2xl font-light text-archin-gold tracking-wide transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Turning Vision Into Built Reality
          </p>

          <div
            className={`w-20 h-px bg-gradient-to-r from-archin-gold to-transparent mt-8 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </div>
    </section>
  );
}
