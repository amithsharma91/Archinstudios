import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
  icon: string;
}

const stats: StatItem[] = [
  {
    value: '19+',
    label: 'Years Experience',
    icon: 'ri-calendar-check-line',
  },
  {
    value: '200+',
    label: 'Projects Completed',
    icon: 'ri-building-2-line',
  },
  {
    value: '5',
    label: 'Service Domains',
    icon: 'ri-stack-line',
  },
  {
    value: 'Bangalore',
    label: 'Based Studio',
    icon: 'ri-map-pin-2-line',
  },
];

export default function StatsBar() {
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
    <section ref={sectionRef} className="bg-[#1B2A4A] py-16 lg:py-20">
      <div className="px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 bg-[#C9A96E]/10">
                  <i className={`${stat.icon} text-2xl text-[#C9A96E]`} />
                </div>
                <div className="font-heading text-4xl lg:text-5xl font-light text-[#C9A96E] mb-2 tracking-wide">
                  {stat.value}
                </div>
                <div className="text-[#F5F0E8]/80 font-body text-sm tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
