import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ReviewsCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-archin-cream py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase mb-8">
            Loved Our Work
          </span>
        </div>

        <h2
          className={`font-heading text-4xl md:text-5xl font-light text-archin-navy mb-6 tracking-wide transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Loved Our Work
        </h2>

        <p
          className={`font-body text-lg text-archin-grey leading-relaxed mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          See all client reviews on Google or leave your own to help others discover ARCHIN Studio.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Primary: See All on Google */}
          <a
            href="https://maps.app.goo.gl/mFLegdoWRDERFPuVA"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-archin-gold text-archin-navy font-body font-semibold text-sm tracking-widest uppercase hover:bg-archin-gold/90 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#1a2744"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#1a2744"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#1a2744"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#1a2744"/>
              </svg>
            </div>
            See All Reviews on Google
          </a>

          {/* Secondary: Write a Review */}
          <a
            href="https://maps.app.goo.gl/mFLegdoWRDERFPuVA"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 border-2 border-archin-navy text-archin-navy font-body font-semibold text-sm tracking-widest uppercase hover:bg-archin-navy hover:text-archin-gold transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-edit-line text-base" />
            Write a Review
          </a>
        </div>
      </div>
    </section>
  );
}
