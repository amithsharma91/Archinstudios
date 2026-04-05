import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/79ac6775aa4fb36afbe593024a42c254.png"
          alt="Residential Architecture"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-archin-black/65 via-archin-black/55 to-archin-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full pt-32 pb-16">
        {/* Back Button */}
        <div
          className={`max-w-7xl mx-auto mb-12 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-archin-gray hover:text-archin-gold transition-colors duration-300 group"
          >
            <i className="ri-arrow-left-line transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-sm tracking-wider uppercase">Back to All Projects</span>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="label mb-6 block">Portfolio</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`heading-lg text-archin-cream mb-6 transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Residential Architecture
          </h1>

          {/* Subtitle */}
          <p
            className={`heading-sm text-archin-gold transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Homes Designed Around How You Live
          </p>

          {/* Decorative Line */}
          <div
            className={`w-24 h-px bg-gradient-to-r from-transparent via-archin-gold to-transparent mx-auto mt-8 transition-all duration-700 delay-400 ${
              isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
        </div>
      </div>
    </section>
  );
}
