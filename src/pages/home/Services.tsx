import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const featuredServices = [
  {
    id: 1,
    title: 'Architecture',
    description: 'From residential villas to large-scale industrial complexes — we design buildings that are structurally sound, visually compelling and built to stand the test of time. Our architectural practice spans residential, commercial, industrial and institutional typologies across Karnataka.',
    icon: 'ri-building-line',
    link: '/projects',
    image: 'https://readdy.ai/api/search-image?query=stunning%20contemporary%20residential%20architecture%20exterior%20modern%20villa%20with%20clean%20geometric%20lines%20large%20glass%20windows%20stone%20cladding%20beautiful%20landscaping%20warm%20golden%20hour%20light%20professional%20architectural%20photography%20wide%20angle%20view&width=900&height=500&seq=services-arch-feat-1&orientation=landscape',
    badge: 'Architecture',
  },
  {
    id: 2,
    title: 'Interior Design',
    description: 'Thoughtfully crafted interiors that transform spaces into experiences. We design living rooms, kitchens, offices and commercial interiors that balance aesthetics with everyday functionality — tailored to your lifestyle and brand.',
    icon: 'ri-sofa-line',
    link: '/projects/interior',
    image: 'https://readdy.ai/api/search-image?query=elegant%20luxury%20interior%20design%20living%20space%20with%20sophisticated%20furniture%20warm%20ambient%20lighting%20neutral%20cream%20tones%20marble%20surfaces%20gold%20accents%20high%20end%20residential%20interior%20design%20professional%20photography%20wide%20angle&width=900&height=500&seq=services-interior-feat-2&orientation=landscape',
    badge: 'Interior Design',
  },
];

const otherServices = [
  {
    id: 3,
    title: 'Residential',
    description: 'Bespoke homes designed around your lifestyle — from contemporary villas to modern apartments.',
    icon: 'ri-home-5-line',
    link: '/projects/residential',
  },
  {
    id: 4,
    title: 'Industrial',
    description: 'Warehouses, factories and large-scale facilities engineered for performance and durability.',
    icon: 'ri-building-4-line',
    link: '/projects/industrial',
  },
  {
    id: 5,
    title: 'Renovation',
    description: 'Transform existing spaces with strategic renovations that breathe new life into older structures.',
    icon: 'ri-hammer-line',
    link: '/projects/renovation',
  },
  {
    id: 6,
    title: 'Convention Halls',
    description: 'Grand event spaces combining architectural drama with practical functionality.',
    icon: 'ri-building-2-line',
    link: '/projects/convention-halls',
  },
  {
    id: 7,
    title: 'Commercial',
    description: 'Workspaces that inspire productivity and reflect brand identity.',
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-archin-navy overflow-hidden">
      <div className="px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span
                className={`inline-flex items-center gap-3 mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="w-8 h-px bg-archin-gold" />
                <span className="font-body text-archin-gold text-xs tracking-[0.3em] uppercase">
                  Our Expertise
                </span>
              </span>
              <h2
                className={`font-heading text-4xl md:text-5xl lg:text-6xl font-light text-archin-cream tracking-wide transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                What We Do
              </h2>
            </div>
            <p
              className={`font-body text-base text-archin-cream/60 max-w-sm leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Architecture and interior design are at the heart of everything we do — complemented by a full range of specialised services.
            </p>
          </div>

          {/* Featured Services — Architecture & Interiors */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {featuredServices.map((service, index) => (
              <div
                key={service.id}
                className={`relative overflow-hidden group cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <Link to={service.link} className="block">
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-archin-navy/90 via-archin-navy/50 to-transparent" />

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end px-8 pb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-archin-gold text-archin-navy">
                          <i className={`${service.icon} text-lg`} />
                        </div>
                        <span className="px-3 py-1 bg-archin-gold text-archin-navy font-body text-xs tracking-widest uppercase font-semibold">
                          {service.badge}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl font-light text-archin-cream mb-2 tracking-wide">
                        {service.title}
                      </h3>
                      <p className="font-body text-xs text-archin-cream/65 leading-relaxed mb-4 max-w-sm">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-archin-gold text-sm tracking-wider uppercase font-body font-medium group-hover:gap-3 transition-all duration-300">
                        View Projects
                        <i className="ri-arrow-right-line" />
                      </span>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-archin-gold group-hover:w-full transition-all duration-700" />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Other Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {otherServices.map((service, index) => (
              <Link
                key={service.id}
                to={service.link}
                className={`group relative border border-archin-cream/10 hover:border-archin-gold/50 bg-archin-cream/5 p-7 transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${500 + index * 80}ms` }}
              >
                {/* Icon */}
                <div className="w-11 h-11 flex items-center justify-center border border-archin-gold/30 text-archin-gold group-hover:bg-archin-gold group-hover:text-archin-navy group-hover:border-archin-gold transition-all duration-300 mb-5">
                  <i className={`${service.icon} text-lg`} />
                </div>

                <h3 className="font-heading text-lg font-light text-archin-cream group-hover:text-archin-gold transition-colors duration-300 mb-2 tracking-wide">
                  {service.title}
                </h3>
                <p className="font-body text-xs text-archin-cream/50 leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-archin-gold group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
