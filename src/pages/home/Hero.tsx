import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-archin-navy">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=modern%20luxury%20architecture%20interior%20minimalist%20warm%20ambient%20lighting%20high%20ceiling%20elegant%20sophisticated%20architectural%20photography%20with%20warm%20golden%20tones&width=1920&height=1080&seq=hero-archin-navy-1&orientation=landscape"
          alt="Luxury Architecture"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Navy Overlay */}
        <div className="absolute inset-0 bg-archin-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-8 w-full py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Label */}
          <div
            className={`transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase mb-6">
              Architecture & Interiors
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`font-heading text-5xl md:text-6xl lg:text-7xl font-light text-archin-cream mb-8 tracking-wide leading-tight transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Where Vision
            <br />
            <span className="text-archin-gold">Meets Structure</span>
          </h1>

          {/* Tagline */}
          <p
            className={`font-body text-lg md:text-xl text-archin-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Award-winning architectural studio in Bangalore, crafting bespoke spaces 
            that blend innovative design with timeless elegance.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link 
              to="/projects" 
              className="px-8 py-4 bg-archin-gold text-archin-navy font-body font-semibold tracking-wide hover:bg-archin-gold/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              View Our Work
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-4 bg-transparent border-2 border-archin-gold text-archin-gold font-body font-semibold tracking-wide hover:bg-archin-gold hover:text-archin-navy transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              About Us
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col items-center gap-2 text-archin-cream/60">
              <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-archin-gold to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
