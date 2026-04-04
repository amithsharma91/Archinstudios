import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Residential',
    description: 'Bespoke homes designed around your lifestyle, from contemporary villas to modern apartments that reflect your personality.',
    icon: 'ri-home-5-line',
    link: '/projects/residential',
  },
  {
    id: 2,
    title: 'Interior',
    description: 'Thoughtful interior design that balances aesthetics with functionality, creating harmonious living and working environments.',
    icon: 'ri-sofa-line',
    link: '/projects/interior',
  },
  {
    id: 3,
    title: 'Renovation',
    description: 'Transform existing spaces with strategic renovations that breathe new life into older structures while preserving character.',
    icon: 'ri-hammer-line',
    link: '/projects/renovation',
  },
  {
    id: 4,
    title: 'Convention Halls',
    description: 'Grand event spaces designed to impress, combining architectural drama with practical functionality for memorable gatherings.',
    icon: 'ri-building-2-line',
    link: '/projects/convention-halls',
  },
  {
    id: 5,
    title: 'Commercial',
    description: 'Workspaces that inspire productivity and reflect brand identity, from corporate offices to retail environments.',
    icon: 'ri-briefcase-line',
    link: '/projects/commercial',
  },
];

export default function Services() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-archin-navy">
      <div className="px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className={`inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Expertise
          </span>
          <h2
            className={`font-heading text-4xl md:text-5xl lg:text-6xl font-light text-archin-cream mb-6 tracking-wide transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Services Overview
          </h2>
          <p
            className={`font-body text-lg text-archin-cream/80 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            From concept to completion, we offer comprehensive architectural and interior 
            design services tailored to your unique vision and requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-archin-cream/5 border border-archin-cream/10 hover:border-archin-gold/50 transition-all duration-500 p-8 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center border border-archin-gold/30 text-archin-gold mb-6 group-hover:bg-archin-gold group-hover:text-archin-navy transition-all duration-300">
                <i className={`${service.icon} text-2xl`} />
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl md:text-3xl font-light text-archin-cream mb-4 tracking-wide group-hover:text-archin-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-body text-sm text-archin-cream/70 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-archin-gold text-sm tracking-wider uppercase font-body font-medium hover:gap-3 transition-all duration-300 cursor-pointer"
              >
                View Projects
                <i className="ri-arrow-right-line" />
              </Link>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-archin-gold group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
