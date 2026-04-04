import { useEffect, useRef, useState } from 'react';

interface IndustrialProjectCardProps {
  title: string;
  location?: string;
  index: number;
  modelImage?: string;
  executedImage?: string;
  singleTag?: string;
}

export default function IndustrialProjectCard({
  title,
  location,
  index,
  modelImage,
  executedImage,
  singleTag,
}: IndustrialProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const leftLabel = singleTag ?? '3D Design Model';
  const rightLabel = singleTag ?? 'Executed Work';

  return (
    <article
      ref={cardRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Project Number */}
      <div className="flex items-center gap-4 mb-6">
        <span className="font-display text-6xl lg:text-7xl text-archin-charcoal font-semibold">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-archin-gold/50 to-transparent" />
      </div>

      {/* Project Title & Location */}
      <div className="mb-8">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-archin-cream">
          {title}
        </h2>
        {location && (
          <p className="mt-2 text-sm tracking-widest uppercase text-archin-gray/70 flex items-center gap-2">
            <i className="ri-map-pin-line text-archin-gold/60" />
            {location}
          </p>
        )}
      </div>

      {/* Two-Panel Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mb-8">
        {/* Left Panel */}
        <div className="relative overflow-hidden group bg-archin-navy/60 flex items-center justify-center border border-archin-gold/20 min-h-[300px]">
          {modelImage ? (
            <img
              src={modelImage}
              alt={`${title} – ${leftLabel}`}
              className="w-full h-auto max-w-full block transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-center px-6 py-16">
              <div className="w-12 h-12 flex items-center justify-center border border-archin-gold/40 text-archin-gold/70 mb-1">
                <i className="ri-image-add-line text-2xl" />
              </div>
              <span className="text-xs tracking-[0.15em] uppercase text-archin-gray/50">
                Add Project Image
              </span>
            </div>
          )}
          <div className="absolute top-5 left-5 px-4 py-2 bg-archin-black/75 backdrop-blur-sm">
            <span className="text-xs tracking-[0.2em] uppercase text-archin-gold">{leftLabel}</span>
          </div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-archin-gold/40" />
          <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-archin-gold/20" />
        </div>

        {/* Right Panel */}
        <div className="relative overflow-hidden group bg-archin-charcoal flex items-center justify-center border border-archin-gold/10 min-h-[300px]">
          {executedImage ? (
            <img
              src={executedImage}
              alt={`${title} – ${rightLabel}`}
              className="w-full h-auto max-w-full block transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-center px-6 py-16">
              <div className="w-12 h-12 flex items-center justify-center border border-archin-gold/30 text-archin-gold/50 mb-1">
                <i className="ri-image-add-line text-2xl" />
              </div>
              <span className="text-xs tracking-[0.15em] uppercase text-archin-gray/50">
                Add Project Image
              </span>
            </div>
          )}
          <div className="absolute top-5 right-5 px-4 py-2 bg-archin-gold/85 backdrop-blur-sm">
            <span className="text-xs tracking-[0.2em] uppercase text-archin-black font-medium">{rightLabel}</span>
          </div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-archin-gold/30" />
          <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-archin-gold/20" />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-archin-gold/20 to-transparent mt-16" />
    </article>
  );
}
