import { useEffect, useRef, useState } from 'react';

interface ContactInfoItemProps {
  icon: string;
  title: string;
  lines: string[];
  href?: string;
  sublabel?: string;
  delay: number;
}

function ContactInfoItem({ icon, title, lines, href, sublabel, delay }: ContactInfoItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const content = (
    <div
      ref={itemRef}
      className={`flex items-start gap-5 p-6 bg-white/50 border border-archin-gold/20 transition-all duration-700 group hover:border-archin-gold/50 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
    >
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-archin-gold/10 border border-archin-gold/30 flex-shrink-0 transition-all duration-300 group-hover:bg-archin-gold/20">
        <i className={`${icon} text-xl text-archin-gold`} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <span className="text-archin-gold font-body text-xs uppercase tracking-wider block mb-2">
          {title}
        </span>
        <div className="space-y-1">
          {lines.map((line, index) => (
            <p key={index} className="font-body text-sm text-archin-navy">
              {line}
            </p>
          ))}
        </div>
        {sublabel && (
          <p className="font-body text-xs italic text-archin-gold mt-2 tracking-wide">
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block cursor-pointer">
        {content}
      </a>
    );
  }

  return content;
}

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: new URLSearchParams(formData as any),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(() => {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 3000);
      })
      .catch(() => {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 3000);
      });
  };

  const contactInfo = [
    {
      icon: 'ri-map-pin-line',
      title: 'Address',
      lines: [
        'Building No 21, ARCHIN Building',
        'Nehru Nagar Main Road, Behind VRL Godown',
        'Jakkur, Near Unishire Apartments',
        'Yelahanka, Bengaluru, Karnataka 560064',
      ],
      href: 'https://maps.app.goo.gl/5QKW6wV7iywM52k99',
      sublabel: 'Click to Open in Google Maps',
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      lines: ['+91 99803 77877', '+91 96321 02529'],
      href: 'tel:+919980377877',
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      lines: ['Thearchinstudios@gmail.com'],
      href: 'mailto:thearchinstudios@gmail.com',
    },
    {
      icon: 'ri-time-line',
      title: 'Studio Hours',
      lines: ['Monday to Saturday: 9:00 AM - 6:30 PM', 'Sunday: By Appointment'],
    },
  ];

  const services = ['Residential Architecture', 'Interior Design', 'Renovation', 'Convention Hall', 'Commercial', 'Consultation'];
  const budgetRanges = [
    'Below 25 Lakhs',
    '25 Lakhs to 50 Lakhs',
    '50 Lakhs to 1 Crore',
    '1 Crore to 3 Crores',
    '3 Crores to 5 Crores',
    'Above 5 Crores',
    'Prefer to Discuss',
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-archin-cream">
      <div className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Details */}
            <div>
              <div className={`mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase mb-6">Reach Out</span>
                <h2 className="font-heading text-4xl md:text-5xl font-light text-archin-navy mb-4 tracking-wide">Contact Details</h2>
                <div className="w-16 h-px bg-archin-gold" />
              </div>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfoItem key={info.title} icon={info.icon} title={info.title} lines={info.lines} href={info.href} sublabel={info.sublabel} delay={index * 100} />
                ))}
              </div>
            </div>

            {/* Right Column - Enquiry Form */}
            <div>
              <div className={`mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="inline-block px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-sm tracking-widest uppercase mb-6">Send Enquiry</span>
                <h2 className="font-heading text-4xl md:text-5xl font-light text-archin-navy mb-4 tracking-wide">Project Enquiry</h2>
                <div className="w-16 h-px bg-archin-gold" />
              </div>

              <form action="https://readdy.ai/api/form/d6sl4bbvrivh3q8km2k0" method="POST" data-readdy-form onSubmit={handleSubmit} className={`bg-white/50 border border-archin-gold/20 p-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-archin-grey font-body text-xs uppercase tracking-wider mb-2">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" required className="w-full px-4 py-3 bg-archin-cream border border-archin-gold/30 text-archin-navy font-body text-sm focus:border-archin-gold focus:outline-none transition-colors duration-300" placeholder="Enter your full name" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-archin-grey font-body text-xs uppercase tracking-wider mb-2">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 bg-archin-cream border border-archin-gold/30 text-archin-navy font-body text-sm focus:border-archin-gold focus:outline-none transition-colors duration-300" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-archin-grey font-body text-xs uppercase tracking-wider mb-2">Email Address *</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-archin-cream border border-archin-gold/30 text-archin-navy font-body text-sm focus:border-archin-gold focus:outline-none transition-colors duration-300" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-archin-grey font-body text-xs uppercase tracking-wider mb-2">Service Required *</label>
                    <select id="service" name="service" required className="w-full px-4 py-3 bg-archin-cream border border-archin-gold/30 text-archin-navy font-body text-sm focus:border-archin-gold focus:outline-none transition-colors duration-300 appearance-none cursor-pointer" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C9A96E' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}>
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-archin-grey font-body text-xs uppercase tracking-wider mb-2">Project Location</label>
                    <input type="text" id="location" name="location" className="w-full px-4 py-3 bg-archin-cream border border-archin-gold/30 text-archin-navy font-body text-sm focus:border-archin-gold focus:outline-none transition-colors duration-300" placeholder="Enter project location" />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-archin-grey font-body text-xs uppercase tracking-wider mb-2">Budget Range</label>
                    <select id="budget" name="budget" className="w-full px-4 py-3 bg-archin-cream border border-archin-gold/30 text-archin-navy font-body text-sm focus:border-archin-gold focus:outline-none transition-colors duration-300 appearance-none cursor-pointer" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C9A96E' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}>
                      <option value="">Select budget range</option>
                      {budgetRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="brief" className="block text-archin-grey font-body text-xs uppercase tracking-wider mb-2">Project Brief</label>
                    <textarea id="brief" name="brief" rows={4} maxLength={500} className="w-full px-4 py-3 bg-archin-cream border border-archin-gold/30 text-archin-navy font-body text-sm focus:border-archin-gold focus:outline-none transition-colors duration-300 resize-none" placeholder="Tell us about your project..." />
                    <p className="text-archin-grey font-body text-xs mt-1">Maximum 500 characters</p>
                  </div>
                  <button type="submit" disabled={formStatus === 'submitting'} className="w-full px-8 py-4 bg-archin-gold text-archin-navy font-body font-semibold tracking-wide hover:bg-archin-gold/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer whitespace-nowrap">
                    {formStatus === 'submitting' ? <><i className="ri-loader-4-line animate-spin" /><span>Sending...</span></> : formStatus === 'success' ? <><i className="ri-check-line" /><span>Enquiry Sent!</span></> : <><span>Send Enquiry</span><i className="ri-send-plane-line" /></>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
