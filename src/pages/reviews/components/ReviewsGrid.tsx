import { useEffect, useRef, useState } from 'react';

const allReviews = [
  {
    id: 1,
    name: 'Monica G J',
    role: '',
    content:
      'Every design feels tailor made for the client. ARCHIN blends modern aesthetics with Indian tradition creating spaces that are elegant and rich in character.',
    link: 'https://maps.app.goo.gl/tdNBNewFLqQPoiCi6',
  },
  {
    id: 2,
    name: 'Adarsh Reddy',
    role: 'Chartered Accountant Office Client',
    content:
      'We consulted ARCHIN for our office interior and were extremely satisfied. The attention to detail was outstanding. Truly architecture by heart.',
    link: 'https://maps.app.goo.gl/UpHgB1ssy1FXRzgY6',
  },
  {
    id: 3,
    name: 'Chandana Boorsu',
    role: '',
    content:
      'Amazing experience with ARCHIN. Building design and interior execution were outstanding. Perfect use of every inch of space. Absolutely loved it.',
    link: 'https://maps.app.goo.gl/SiQxD1USwVHSkzfv7',
  },
  {
    id: 4,
    name: 'Sagar',
    role: '',
    content:
      'Truly state of the art studio with exceptional design and aesthetic sensibility. Ideas were creative and pleasing. Strongly recommendable to anyone.',
    link: 'https://goo.gl/maps/W5FHqjsS2qTF3Zb87',
  },
  {
    id: 5,
    name: 'Dr Raghavendra',
    role: '',
    content:
      'ARCHIN possesses amazing talent for translating vision into beautiful built spaces. Service quality is consistently excellent. Wishing continued growth.',
    link: 'https://goo.gl/maps/rA8mTprbtVKVcotV8',
  },
  {
    id: 6,
    name: 'Manasa',
    role: '',
    content:
      'Absolutely fantastic design work from the ARCHIN team. Creativity and execution exceeded all our expectations completely.',
    link: 'https://goo.gl/maps/WsS5KtX69R7BYRLg8',
  },
  {
    id: 7,
    name: 'Prithvi KM',
    role: '',
    content:
      'One of the best architecture studios in Bangalore. Quality of work and professionalism sets them apart from the rest.',
    link: 'https://goo.gl/maps/EY4UgDsWA5xZLJeF6',
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

function GoogleVerifiedBadge() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
      <span className="font-body text-xs text-archin-cream/50 tracking-wide">Verified</span>
    </div>
  );
}

interface ReviewCardProps {
  review: typeof allReviews[0];
  index: number;
  isVisible: boolean;
}

function ReviewCard({ review, index, isVisible }: ReviewCardProps) {
  return (
    <div
      className={`relative flex flex-col bg-archin-cream border border-archin-gold/20 hover:border-archin-gold/50 p-8 transition-all duration-700 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Decorative Quote mark */}
      <div className="absolute top-4 right-5 text-archin-gold/10 group-hover:text-archin-gold/25 transition-colors duration-300">
        <i className="ri-double-quotes-l text-5xl" />
      </div>

      {/* Stars row */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <StarRating />
        <GoogleVerifiedBadge />
      </div>

      {/* Review text */}
      <p className="font-body text-sm text-archin-navy/80 leading-relaxed mb-8 flex-1 relative z-10">
        &ldquo;{review.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mb-5 relative z-10">
        <div className="w-10 h-10 rounded-full bg-archin-navy flex items-center justify-center flex-shrink-0">
          <span className="font-heading text-archin-gold text-sm font-medium">
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

      {/* Read on Google */}
      <div className="border-t border-archin-gold/20 pt-4 relative z-10">
        <a
          href={review.link}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-xs text-archin-gold tracking-widest uppercase hover:text-archin-navy transition-colors duration-300 cursor-pointer whitespace-nowrap group/btn"
        >
          <span>Read on Google</span>
          <i className="ri-arrow-right-up-line text-sm group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}

export default function ReviewsGrid() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-archin-navy py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase">
            7 Verified Reviews
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allReviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
