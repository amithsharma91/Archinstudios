import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-archin-navy">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=elegant%20modern%20architecture%20studio%20interior%20warm%20ambient%20lighting%20minimalist%20sophisticated%20workspace%20architectural%20models%20display%20with%20golden%20warm%20tones&width=1920&height=800&seq=about-hero-navy-1&orientation=landscape"
          alt="Architecture Studio"
          className="w-full h-full object-cover opacity-45"
        />
        {/* Navy Overlay */}
        <div className="absolute inset-0 bg-archin-navy/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 lg:px-8 w-full pt-24 md:pt-32 pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div
            className={`transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block px-4 md:px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6">
              Learn Our Story
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`font-heading text-[36px] md:text-6xl lg:text-7xl font-light text-archin-cream mb-4 md:mb-6 tracking-wide transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            About Us
          </h1>

          {/* Subtitle */}
          <p
            className={`font-heading text-[20px] md:text-3xl font-light text-archin-gold tracking-wide transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            The Mind Behind ARCHIN
          </p>

          {/* Decorative Line */}
          <div
            className={`w-24 h-px bg-gradient-to-r from-transparent via-archin-gold to-transparent mx-auto mt-6 md:mt-8 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
        </div>
      </div>
    </section>
  );
}
