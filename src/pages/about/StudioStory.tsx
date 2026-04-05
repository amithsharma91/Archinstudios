import { useEffect, useRef, useState } from 'react';

export default function StudioStory() {
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
    <section ref={sectionRef} className="px-6 lg:px-8 py-24 lg:py-32 bg-archin-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase mb-6">
              Our Journey
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-archin-navy mb-8 tracking-wide">
              The ARCHIN Story
            </h2>

            <div className="space-y-6">
              <p className="font-body text-lg text-archin-grey leading-relaxed">
                ARCHIN was founded in 2007 by our Lead Architect and Team with a singular vision: 
                to create architectural spaces that seamlessly blend international design 
                standards with the unique cultural and climatic context of India. What began 
                as a small practice in Bangalore has grown into a respected studio with a 
                diverse portfolio spanning residential, commercial, and institutional projects.
              </p>

              <p className="font-body text-lg text-archin-grey leading-relaxed">
                The name &ldquo;ARCHIN&rdquo; derives from &ldquo;Architecture&rdquo; and &ldquo;Innovation&rdquo; — reflecting our 
                commitment to pushing boundaries while respecting timeless principles. Over the 
                years, we have had the privilege of working with discerning clients who share 
                our passion for thoughtful design.
              </p>

              <p className="font-body text-lg text-archin-grey leading-relaxed">
                Our approach is rooted in collaboration. We believe the best designs emerge from 
                deep listening — understanding not just what our clients need, but how they live, 
                work, and dream. This philosophy has guided us through over 200 successful projects, 
                each one a unique expression of its owner&apos;s aspirations.
              </p>
            </div>
          </div>

          {/* Right Column - Mission & Values */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white/50 p-10 border border-archin-gold/20">
              <h3 className="font-heading text-3xl font-light text-archin-gold mb-6 tracking-wide">
                Our Mission
              </h3>
              <p className="font-body text-lg text-archin-grey mb-10 leading-relaxed">
                To design spaces that inspire, endure, and enrich the lives of those who inhabit 
                them. We strive to create architecture that is not only visually striking but 
                also environmentally responsible and deeply connected to its context.
              </p>

              <h3 className="font-heading text-3xl font-light text-archin-gold mb-6 tracking-wide">
                Core Values
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: 'ri-lightbulb-line', text: 'Innovation with Purpose' },
                  { icon: 'ri-leaf-line', text: 'Sustainable Design' },
                  { icon: 'ri-user-heart-line', text: 'Client-Centric Approach' },
                  { icon: 'ri-award-line', text: 'Uncompromising Quality' },
                  { icon: 'ri-team-line', text: 'Collaborative Spirit' },
                ].map((value, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-archin-gold/30">
                      <i className={`${value.icon} text-archin-gold`} />
                    </div>
                    <span className="font-body text-archin-navy">{value.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative Element */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-px bg-archin-gold" />
              <span className="text-archin-grey font-body text-sm tracking-wider uppercase">
                Est. 2007
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
