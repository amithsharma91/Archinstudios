import { useEffect, useRef, useState } from 'react';

const credentials = [
  {
    id: 1,
    title: 'COA Registered',
    description: 'Council of Architects',
    icon: 'ri-shield-check-line',
  },
  {
    id: 2,
    title: 'IGBC AP',
    description: 'Accredited Professional',
    icon: 'ri-leaf-line',
  },
  {
    id: 3,
    title: 'GST Registered',
    description: 'Government Certified',
    icon: 'ri-government-line',
  },
  {
    id: 4,
    title: 'UK Educated',
    description: 'University of Leeds',
    icon: 'ri-award-line',
  },
];

export default function Credentials() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-archin-navy border-y border-archin-gold/20">
      <div className="px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {credentials.map((credential, index) => (
            <div
              key={credential.id}
              className={`flex flex-col items-center text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center text-archin-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`${credential.icon} text-3xl`} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg md:text-xl font-light text-archin-cream mb-1 tracking-wide">
                {credential.title}
              </h3>

              {/* Description */}
              <p className="font-body text-archin-cream/60 text-xs tracking-wider uppercase">
                {credential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
