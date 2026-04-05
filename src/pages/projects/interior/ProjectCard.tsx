import { useEffect, useRef, useState } from 'react';

interface ProjectCardProps {
  modelImage?: string;
  executedImage?: string;
  title: string;
  location: string;
  size: string;
  year: string;
  description: string;
  index: number;
}

export default function ProjectCard({
  modelImage,
  executedImage,
  title,
  location,
  size,
  year,
  description,
  index,
}: ProjectCardProps) {
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

      {/* Project Header */}
      <div className="mb-8">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-archin-cream mb-4">
          {title}
        </h2>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-archin-gold">
            <i className="ri-map-pin-line" />
            <span className="tracking-wider uppercase">{location}</span>
          </div>
          <div className="w-px h-4 bg-archin-gray/30" />
          <div className="flex items-center gap-2 text-archin-gray-light">
            <i className="ri-ruler-line" />
            <span>{size}</span>
          </div>
          <div className="w-px h-4 bg-archin-gray/30" />
          <div className="flex items-center gap-2 text-archin-gray-light">
            <i className="ri-calendar-line" />
            <span>{year}</span>
          </div>
        </div>
      </div>

      {/* Split Image Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mb-8">
        {/* Left - 3D Model */}
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden group">
          {modelImage ? (
            <>
              <img
                src={modelImage}
                alt={`${title} - 3D Design Model`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-archin-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </>
          ) : (
            <div className="w-full h-full bg-archin-navy/60 flex flex-col items-center justify-center border border-archin-gold/20">
              <div className="flex flex-col items-center gap-3 text-center px-6">
                <div className="w-12 h-12 flex items-center justify-center border border-archin-gold/40 text-archin-gold/70 mb-1">
                  <i className="ri-image-add-line text-2xl" />
                </div>
                <span className="text-xs tracking-[0.15em] uppercase text-archin-gray/50">
                  Add Project Image
                </span>
              </div>
            </div>
          )}
          {/* Label */}
          <div className="absolute top-6 left-6 px-4 py-2 bg-archin-black/80 backdrop-blur-sm">
            <span className="text-xs tracking-[0.2em] uppercase text-archin-gold">3D Design Model</span>
          </div>
          {/* Corner accent */}
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-archin-gold/50" />
        </div>

        {/* Right - Executed Work */}
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden group">
          {executedImage ? (
            <>
              <img
                src={executedImage}
                alt={`${title} - Executed Work`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-archin-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </>
          ) : (
            <div className="w-full h-full bg-archin-charcoal flex flex-col items-center justify-center border border-archin-gold/10">
              <div className="flex flex-col items-center gap-3 text-center px-6">
                <div className="w-12 h-12 flex items-center justify-center border border-archin-gold/30 text-archin-gold/50 mb-1">
                  <i className="ri-image-add-line text-2xl" />
                </div>
                <span className="text-xs tracking-[0.15em] uppercase text-archin-gray/50">
                  Add Project Image
                </span>
              </div>
            </div>
          )}
          {/* Label */}
          <div className="absolute top-6 right-6 px-4 py-2 bg-archin-gold/90 backdrop-blur-sm">
            <span className="text-xs tracking-[0.2em] uppercase text-archin-black">Executed Work</span>
          </div>
          {/* Corner accent */}
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-archin-gold/50" />
        </div>
      </div>

      {/* Project Description */}
      <div className="max-w-3xl">
        <p className="body-lg text-archin-gray-light leading-relaxed">
          {description}
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-archin-gold/20 to-transparent mt-16" />
    </article>
  );
}
