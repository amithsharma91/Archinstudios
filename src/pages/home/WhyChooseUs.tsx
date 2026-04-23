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
    description: 'IGBC Accredited Professional committed to eco-friendly architecture, creating energy-efficient spaces that minimize environmental impact without compromising on aesthetics.',
    icon: 'ri-plant-line',
  },
  {
    id: 3,
    title: 'End-to-End Service',
    description: 'From initial concept to final execution, we handle every aspect of your project with meticulous attention to detail, quality craftsmanship and transparent communication.',
    icon: 'ri-stack-line',
  },
  {
    id: 4,
    title: 'Client-Centric Approach',
    description: 'Your vision drives our design. We listen, collaborate, and translate your aspirations into spaces that exceed expectations and stand the test of time.',
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
    <section ref={sectionRef} className="py-10 md:py-24 lg:py-32 bg-archin-cream overflow-hidden">
      <div className="px-5 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20">
            {/* Left: Header */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <span className="inline-flex items-center gap-3 mb-6 md:mb-8">
                <span className="w-8 h-px bg-archin-gold" />
                <span className="font-body text-archin-gold text-xs tracking-[0.3em] uppercase">
                  Why Archin
                </span>
              </span>

              <h2 className="font-heading text-[28px] md:text-5xl lg:text-6xl font-light text-archin-navy mb-6 md:mb-8 tracking-wide leading-tight">
                Why
                <br />
                Choose
                <br />
                <span className="text-archin-gold italic">Us</span>
              </h2>

              <p className="font-body text-[14px] md:text-base text-archin-grey leading-relaxed mb-8 md:mb-10">
                We combine architectural excellence with personalized service, delivering projects that stand out for their quality, innovation, and attention to detail.
              </p>

              {/* Decorative element */}
              <div className="w-full h-px bg-gradient-to-r from-archin-gold/60 to-transparent" />
              <div className="mt-6 md:mt-8 grid grid-cols-2 gap-4 md:gap-6">
                <div>
                  <div className="font-heading text-2xl md:text-3xl text-archin-navy font-light">200+</div>
                  <div className="font-body text-xs text-archin-grey tracking-widest uppercase mt-1">Projects Completed</div>
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl text-archin-navy font-light">19+</div>
                  <div className="font-body text-xs text-archin-grey tracking-widest uppercase mt-1">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right: Reasons */}
            <div
              className={`lg:col-span-3 space-y-0 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              {reasons.map((reason, index) => (
                <div
                  key={reason.id}
                  className={`group flex gap-4 md:gap-6 py-6 md:py-8 border-b border-archin-gold/15 last:border-b-0 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Number + Icon */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-archin-gold/30 text-archin-gold group-hover:bg-archin-gold group-hover:text-archin-navy transition-all duration-300">
                      <i className={`${reason.icon} text-lg md:text-xl`} />
                    </div>
                    <span className="font-heading text-archin-gold/30 text-xs font-light">
                      0{reason.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="font-heading text-[18px] md:text-2xl font-light text-archin-navy mb-2 tracking-wide group-hover:text-archin-gold transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="font-body text-[13px] md:text-sm text-archin-grey leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
