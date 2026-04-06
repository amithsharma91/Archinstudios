import { useEffect, useRef, useState } from 'react';

interface ShowcaseGalleryProps {
  images: string[];
}

interface LightboxState {
  open: boolean;
  index: number;
}

export default function ResidentialShowcaseGallery({ images }: ShowcaseGalleryProps) {
  const [lightbox, setLightbox] = useState<LightboxState>({ open: false, index: 0 });
  const [visible, setVisible] = useState<boolean[]>(new Array(images.length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightbox.open) return;
      if (e.key === 'Escape') setLightbox({ open: false, index: 0 });
      if (e.key === 'ArrowRight') setLightbox((prev) => ({ ...prev, index: (prev.index + 1) % images.length }));
      if (e.key === 'ArrowLeft') setLightbox((prev) => ({ ...prev, index: (prev.index - 1 + images.length) % images.length }));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox.open, images.length]);

  const openLightbox = (index: number) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });
  const prev = () => setLightbox((s) => ({ ...s, index: (s.index - 1 + images.length) % images.length }));
  const next = () => setLightbox((s) => ({ ...s, index: (s.index + 1) % images.length }));

  return (
    <>
      {/* Masonry-style grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
        {images.map((src, i) => (
          <div
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            className={`break-inside-avoid cursor-pointer overflow-hidden group transition-all duration-700 ${
              visible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            onClick={() => openLightbox(i)}
          >
            <div className="relative overflow-hidden">
              <img
                src={src}
                alt={`Residential completed work ${i + 1}`}
                className="w-full h-auto object-top transition-transform duration-700 group-hover:scale-105 block"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-archin-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <div className="w-10 h-10 flex items-center justify-center border border-archin-gold/70 text-archin-gold">
                  <i className="ri-zoom-in-line text-lg" />
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-archin-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 bg-archin-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-archin-gold/40 text-archin-gold hover:bg-archin-gold/10 transition-colors cursor-pointer z-10"
            onClick={closeLightbox}
          >
            <i className="ri-close-line text-xl" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 w-10 h-10 flex items-center justify-center border border-archin-gold/40 text-archin-gold hover:bg-archin-gold/10 transition-colors cursor-pointer z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <i className="ri-arrow-left-line text-xl" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[90vh] px-16 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightbox.index]}
              alt={`Residential completed work ${lightbox.index + 1}`}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 w-10 h-10 flex items-center justify-center border border-archin-gold/40 text-archin-gold hover:bg-archin-gold/10 transition-colors cursor-pointer z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <i className="ri-arrow-right-line text-xl" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] uppercase text-archin-gold/60">
            {lightbox.index + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
