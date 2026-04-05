import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const featuredService = {
  id: 6,
  title: 'Industrial Architecture',
  description: 'Our core specialty — warehouses, factories and large-scale industrial complexes engineered for performance, safety and long-term durability across Karnataka. From concept to completion, we deliver industrial facilities that meet the most demanding functional requirements.',
  icon: 'ri-building-4-line',
  link: '/projects/industrial',
  image: 'https://readdy.ai/api/search-image?query=large%20scale%20industrial%20warehouse%20factory%20building%20exterior%20architecture%20dramatic%20wide%20angle%20shot%20steel%20structure%20concrete%20modern%20industrial%20facility%20with%20dramatic%20sky%20golden%20hour%20lighting%20professional%20architectural%20photography&width=1200&height=600&seq=services-industrial-feat-1&orientation=landscape',
};

const otherServices = [
  {
    id: 1,
    title: 'Residential',
    description: 'Bespoke homes designed around your lifestyle — from contemporary villas to modern apartments.',
    icon: 'ri-home-5-line',
    link: '/projects/residential',
  },
  {
    id: 2,
    title: 'Interior Design',
    description: 'Thoughtful interiors that balance aesthetics with functionality for living and working spaces.',
    icon: 'ri-sofa-line',
    link: '/projects/interior',
  },
  {
    id: 3,
    title: 'Renovation',
    description: 'Transform existing spaces with strategic renovations that breathe new life into older structures.',
    icon: 'ri-hammer-line',
    link: '/projects/renovation',
  },
  {
    id: 4,
    title: 'Convention Halls',
    description: 'Grand event spaces combining architectural drama with practical functionality.',
    icon: 'ri-building-2-line',
    link: '/projects/convention-halls',
  },
  {
    id: 5,
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
                Industrial &amp; Beyond
              </h2>
            </div>
            <p
              className={`font-body text-base text-archin-cream/60 max-w-sm leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Industrial architecture is our primary focus, complemented by a full range of architectural and interior design services.
            </p>
          </div>

          {/* Featured Industrial Card */}
          <div
            className={`relative overflow-hidden mb-6 group cursor-pointer transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link to={featuredService.link} className="block">
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  src={featuredService.image}
                  alt="Industrial Architecture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-archin-navy/90 via-archin-navy/60 to-transparent" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center px-10 md:px-14">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-archin-gold text-archin-navy">
                        <i className={`${featuredService.icon} text-xl`} />
                      </div>
                      <span className="px-3 py-1 bg-archin-gold text-archin-navy font-body text-xs tracking-widest uppercase font-semibold">
                        Primary Focus
                      </span>
                    </div>
                    <h3 className="font-heading text-3xl md:text-4xl font-light text-archin-cream mb-3 tracking-wide">
                      {featuredService.title}
                    </h3>
                    <p className="font-body text-sm text-archin-cream/70 leading-relaxed mb-5 max-w-md">
                      {featuredService.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-archin-gold text-sm tracking-wider uppercase font-body font-medium group-hover:gap-3 transition-all duration-300">
                      View Projects
                      <i className="ri-arrow-right-line" />
                    </span>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-archin-gold group-hover:w-full transition-all duration-700" />
              </div>
            </Link>
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
                style={{ transitionDelay: `${400 + index * 80}ms` }}
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
