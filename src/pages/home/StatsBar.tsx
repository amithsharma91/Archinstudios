import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '19+', label: 'Years Experience', icon: 'ri-calendar-check-line' },
  { value: '200+', label: 'Projects Completed', icon: 'ri-building-2-line' },
  { value: '5', label: 'Service Domains', icon: 'ri-stack-line' },
  { value: 'Bangalore', label: 'Based Studio', icon: 'ri-map-pin-2-line' },
];

export default function HomeStatsBar() {
  const ref = useRef<HTMLElement>(null);
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-archin-navy py-12 lg:py-16 border-t border-archin-gold/20">
      <div className="px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center gap-3 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="w-11 h-11 flex items-center justify-center border border-archin-gold/30 mb-1">
                  <i className={`${stat.icon} text-xl text-archin-gold`} />
                </div>
                <div className="font-heading text-3xl lg:text-4xl font-light text-archin-gold tracking-wide leading-none">
                  {stat.value}
                </div>
                <div className="font-body text-xs tracking-widest uppercase text-archin-cream/70">
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
