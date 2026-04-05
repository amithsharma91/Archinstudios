import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactCTA() {
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
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=modern%20architecture%20building%20exterior%20at%20twilight%20dramatic%20lighting%20geometric%20shapes%20luxury%20contemporary%20design%20elegant%20professional%20architectural%20photography%20with%20warm%20golden%20tones&width=1920&height=800&seq=cta-bg-navy-1&orientation=landscape"
          alt="Architecture Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-archin-navy/88" />
      </div>

      <div className="relative z-10 px-6 lg:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: CTA Text */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <span className="inline-flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-archin-gold" />
                <span className="font-body text-archin-gold text-xs tracking-[0.3em] uppercase">
                  Start Your Project
                </span>
              </span>

              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-archin-cream mb-6 tracking-wide leading-tight">
                Ready to Transform
                <br />
                <span className="text-archin-gold italic">Your Space?</span>
              </h2>

              <p className="font-body text-base text-archin-cream/70 max-w-lg mb-10 leading-relaxed">
                Whether you're planning an industrial facility, a new home, or a renovation,
                we'd love to hear about your project. Let's create something extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-archin-gold text-archin-navy font-body font-semibold text-sm tracking-widest uppercase hover:bg-archin-gold/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  Get In Touch
                  <i className="ri-arrow-right-line" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-archin-cream/30 text-archin-cream font-body font-medium text-sm tracking-widest uppercase hover:border-archin-gold hover:text-archin-gold transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Right: Contact Details */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="border border-archin-gold/20 bg-archin-cream/5 backdrop-blur-sm p-8 space-y-6">
                {[
                  {
                    icon: 'ri-phone-line',
                    label: 'Call Us',
                    value: '+91 99803 77877  |  +91 96321 02529',
                    href: 'tel:+919980377877',
                  },
                  {
                    icon: 'ri-mail-line',
                    label: 'Email Us',
                    value: 'Thearchinstudios@gmail.com',
                    href: 'mailto:thearchinstudios@gmail.com',
                  },
                  {
                    icon: 'ri-map-pin-line',
                    label: 'Visit Studio',
                    value: 'Jakkur, Yelahanka, Bengaluru 560064',
                    href: 'https://maps.app.goo.gl/5QKW6wV7iywM52k99',
                  },
                  {
                    icon: 'ri-time-line',
                    label: 'Studio Hours',
                    value: 'Mon – Sat: 9:00 AM – 6:30 PM',
                    href: undefined,
                  },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-start gap-4 pb-6 border-b border-archin-gold/10 last:border-b-0 last:pb-0 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center border border-archin-gold/30 text-archin-gold flex-shrink-0">
                      <i className={`${item.icon} text-base`} />
                    </div>
                    <div>
                      <div className="font-body text-archin-gold/70 text-xs tracking-widest uppercase mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-body text-archin-cream text-sm hover:text-archin-gold transition-colors duration-300 cursor-pointer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-body text-archin-cream text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
