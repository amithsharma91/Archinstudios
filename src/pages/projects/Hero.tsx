import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/bbf63f100d20df09b662ee56b01cd6eb.jpeg"
          alt="Architecture Projects"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-archin-black/80 via-archin-black/60 to-archin-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div
            className={`transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="label mb-6 block">Portfolio</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`heading-lg text-archin-cream mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Projects
          </h1>

          {/* Subtitle */}
          <p
            className={`heading-sm text-archin-gold transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Turning Vision Into Built Reality
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