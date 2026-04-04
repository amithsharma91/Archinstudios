import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    id: 1,
    title: 'UK Educated Expertise',
    description: 'Our Principal Architect and Team bring Masters-level expertise from University of Leeds, delivering international design standards and innovative approaches to every project.',
    icon: 'ri-graduation-cap-line',
  },
  {
    id: 2,
    title: 'Sustainable Design',
    description: 'IGBC Accredited Professional committed to eco-friendly architecture, creating energy-efficient spaces that minimize environmental impact.',
    icon: 'ri-plant-line',
  },
  {
    id: 3,
    title: 'End-to-End Service',
    description: 'From initial concept to final execution, we handle every aspect of your project with meticulous attention to detail and quality.',
    icon: 'ri-stack-line',
  },
  {
    id: 4,
    title: 'Client-Centric Approach',
    description: 'Your vision drives our design. We listen, collaborate, and translate your aspirations into spaces that exceed expectations.',
    icon: 'ri-heart-3-line',
  },
];

export default function WhyChooseUs() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-archin-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 border border-archin-gold rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border border-archin-gold rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span
            className={`inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Why Archin
          </span>
          <h2
            className={`font-heading text-4xl md:text-5xl lg:text-6xl font-light text-archin-navy mb-6 tracking-wide transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Why Choose Us
          </h2>
          <p
            className={`font-body text-lg text-archin-grey leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            We combine architectural excellence with personalized service, 
            delivering projects that stand out for their quality, innovation, and attention to detail.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              className={`group flex gap-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 flex items-center justify-center border border-archin-gold/30 text-archin-gold group-hover:bg-archin-gold group-hover:text-archin-navy transition-all duration-300">
                  <i className={`${reason.icon} text-2xl`} />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-light text-archin-navy mb-3 tracking-wide group-hover:text-archin-gold transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-archin-grey leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
