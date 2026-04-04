import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    name: 'Monica G J',
    role: '',
    content:
      'Every design feels tailor made for the client. ARCHIN beautifully blends modern aesthetics with subtle Indian tradition creating spaces that are simple elegant and undeniably rich in character.',
    link: 'https://maps.app.goo.gl/tdNBNewFLqQPoiCi6',
  },
  {
    id: 2,
    name: 'Adarsh Reddy',
    role: 'Chartered Accountant Office Client',
    content:
      'We consulted ARCHIN for the interior design of our chartered accountant office and were extremely satisfied with the results. The attention to detail and creative vision was outstanding. Truly architecture by heart.',
    link: 'https://maps.app.goo.gl/UpHgB1ssy1FXRzgY6',
  },
  {
    id: 3,
    name: 'Chandana Boorsu',
    role: '',
    content:
      'Such an amazing experience with ARCHIN. The building design and interior execution were simply outstanding. Perfect use of every inch of space. We absolutely loved the final result.',
    link: 'https://maps.app.goo.gl/SiQxD1USwVHSkzfv7',
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <i key={star} className="ri-star-fill text-archin-gold text-xl" />
      ))}
    </div>
  );
}

function GoogleBadge() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-4 h-4 flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
      <span className="font-body text-xs text-archin-grey/70 tracking-wide">
        Google Verified Review
      </span>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-archin-cream">
      <div className="px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 text-center mx-auto">
          <span
            className={`inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Client Stories
          </span>
          <h2
            className={`font-heading text-4xl md:text-5xl lg:text-6xl font-light text-archin-navy mb-4 tracking-wide transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            What Our Clients Say
          </h2>
          <p
            className={`font-body text-sm text-archin-gold tracking-widest uppercase transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Verified Google Reviews from Real Clients
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`relative flex flex-col bg-white/60 border border-archin-gold/20 hover:border-archin-gold/50 p-8 transition-all duration-700 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Decorative Quote */}
              <div className="absolute top-5 right-6 text-archin-gold/15 group-hover:text-archin-gold/30 transition-colors duration-300">
                <i className="ri-double-quotes-l text-5xl" />
              </div>

              {/* Top Row: Stars + Google badge */}
              <div className="flex items-center justify-between mb-5 relative z-10">
                <StarRating />
                <GoogleBadge />
              </div>

              {/* Review Text */}
              <p className="font-body text-sm text-archin-grey leading-relaxed mb-8 relative z-10 flex-1">
                &ldquo;{review.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-11 h-11 rounded-full bg-archin-navy flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-archin-gold text-base">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading text-archin-navy text-base font-light tracking-wide leading-tight">
                    {review.name}
                  </h4>
                  {review.role && (
                    <p className="font-body text-archin-grey text-xs tracking-wider uppercase mt-0.5">
                      {review.role}
                    </p>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-archin-gold/20 pt-5 relative z-10">
                <a
                  href={review.link}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-xs text-archin-gold tracking-widest uppercase hover:text-archin-navy transition-colors duration-300 cursor-pointer whitespace-nowrap group/btn"
                >
                  <span>Read Full Review</span>
                  <i className="ri-arrow-right-up-line text-sm group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Google Reviews CTA */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-14 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
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
            View All Google Reviews
          </a>

          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 px-10 py-4 border-2 border-archin-navy text-archin-navy font-body font-semibold text-sm tracking-widest uppercase hover:bg-archin-navy hover:text-archin-gold transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Read All 7 Client Reviews
            <i className="ri-arrow-right-line text-base" />
          </Link>
        </div>

      </div>
    </section>
  );
}
