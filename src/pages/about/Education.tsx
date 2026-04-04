import { useEffect, useRef, useState } from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  details: string;
  date: string;
  location: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Architecture',
    institution: 'Visvesvaraya Technological University',
    details: 'First Class with Distinction',
    date: 'February 2007',
    location: 'Belgaum, India',
  },
  {
    degree: 'MS Engineering Project Management',
    institution: 'University of Leeds',
    details: 'Awarded with Merit',
    date: 'November 2008',
    location: 'Leeds, United Kingdom',
  },
];

export default function Education() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 lg:px-8 py-24 bg-archin-navy">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase mb-6">
            Academic Excellence
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-archin-cream tracking-wide">
            Education & Qualifications
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-archin-gold/50 via-archin-gold to-archin-gold/50 transform md:-translate-x-1/2" />

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200 + 200}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-archin-cream/5 p-8 border border-archin-cream/10 hover:border-archin-gold/30 transition-colors duration-300">
                      <span className="inline-block px-4 py-1 bg-archin-gold/10 text-archin-gold font-body text-xs tracking-wider uppercase mb-4">
                        {item.date}
                      </span>
                      <h3 className="font-heading text-2xl md:text-3xl font-light text-archin-cream mb-2 tracking-wide">
                        {item.degree}
                      </h3>
                      <p className="text-archin-gold font-body mb-3">{item.institution}</p>
                      <p className="text-archin-cream/70 font-body text-sm mb-2">{item.location}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-archin-gold/10 mt-2">
                        <i className="ri-award-line text-archin-gold" />
                        <span className="text-archin-gold font-body text-sm">{item.details}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-archin-gold rounded-full border-4 border-archin-navy" />

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
