import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-archin-navy">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=elegant%20modern%20architecture%20office%20reception%20lobby%20sophisticated%20interior%20design%20marble%20floors%20ambient%20lighting%20luxury%20office%20space%20professional%20environment%20with%20warm%20golden%20tones&width=1920&height=700&seq=contact-hero-navy-1&orientation=landscape"
          alt="Contact ARCHIN Studio"
          className="w-full h-full object-cover opacity-45"
        />
        {/* Navy Overlay */}
        <div className="absolute inset-0 bg-archin-navy/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-8 w-full pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div
            className={`transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase mb-6">
              Contact Us
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`font-heading text-5xl md:text-6xl lg:text-7xl font-light text-archin-cream mb-6 tracking-wide transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Contact ARCHIN — Architects &amp; Interior Designers in Bengaluru
          </h1>

          {/* Subtitle */}
          <p
            className={`font-heading text-2xl md:text-3xl font-light text-archin-gold tracking-wide transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Let Us Build Something Remarkable Together
          </p>

          {/* Decorative Line */}
          <div
            className={`w-24 h-px bg-gradient-to-r from-transparent via-archin-gold to-transparent mx-auto mt-8 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
        </div>
      </div>
    </section>
  );
}
