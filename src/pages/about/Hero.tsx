import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
      className={`flex items-start gap-5 p-5 md:p-6 bg-white/50 border border-archin-gold/20 transition-all duration-700 group hover:border-archin-gold/50 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
    >
      {/* Icon */}
      <div className="w-11 h-11 flex items-center justify-center bg-archin-gold/10 border border-archin-gold/30 flex-shrink-0 transition-all duration-300 group-hover:bg-archin-gold/20">
        <i className={`${icon} text-xl text-archin-gold`} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <span className="text-archin-gold font-body text-xs uppercase tracking-wider block mb-2">
          {title}
        </span>
        <div className="space-y-1">
          {lines.map((line, index) => (
            <p key={index} className="font-body text-sm text-archin-navy break-words">
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
  const sectionRef = useRef<HTMLElement>(null);
  const [searchParams] = useSearchParams();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [brief, setBrief] = useState('');

  // Pre-select service from URL query param
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      // Match against available services (case-insensitive partial match)
      const matched = services.find(
        (s) => s.toLowerCase() === serviceParam.toLowerCase() ||
               s.toLowerCase().replace(/\s+/g, '+') === serviceParam.toLowerCase()
      );
      if (matched) {
        setService(matched);
      } else {
        setService(serviceParam);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

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

  const handleWhatsApp = () => {
    const message = `Hello ARCHIN Studio!\n\nI am interested in your architecture services.\nHere are my details:\n\nName: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nLocation: ${location}\nBudget: ${budget}\n\nProject Brief:\n${brief}\n\nI found you through your website.\nLooking forward to hearing from you.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919980377877?text=${encoded}`, '_blank');
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
      lines: ['+91 99803 77877', '+91 99808 18208'],
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

  const services = ['Residential Architecture', 'Interior Design', 'Renovation', 'Convention Hall', 'Commercial', 'Consultation Only'];
  const budgetRanges = [
    'Below 25 Lakhs',
    '25 Lakhs to 50 Lakhs',
    '50 Lakhs to 1 Crore',
    '1 Crore to 3 Crores',
    '3 Crores to 5 Crores',
    'Above 5 Crores',
    'Prefer to Discuss',
  ];

  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C9A96E' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat' as const,
    backgroundPosition: 'right 1rem center',
  };

  return (
    <section ref={sectionRef} className="py-10 md:py-20 lg:py-28 bg-archin-cream">
      <div className="px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Column - Contact Details */}
            <div>
              <div className={`mb-6 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="inline-block px-4 md:px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6">Reach Out</span>
                <h2 className="font-heading text-[28px] md:text-4xl lg:text-5xl font-light text-archin-navy mb-4 tracking-wide">Contact Details</h2>
                <div className="w-16 h-px bg-archin-gold" />
              </div>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfoItem key={info.title} icon={info.icon} title={info.title} lines={info.lines} href={info.href} sublabel={info.sublabel} delay={index * 100} />
                ))}
              </div>
            </div>

            {/* Right Column - WhatsApp Enquiry Form */}
            <div>
              <div className={`mb-6 md:mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="inline-block px-4 md:px-6 py-2 bg-archin-gold/10 border border-archin-gold/30 text-archin-gold font-body text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6">Send Enquiry</span>
                <h2 className="font-heading text-[28px] md:text-4xl lg:text-5xl font-light text-archin-navy mb-4 tracking-wide">WhatsApp Enquiry</h2>
                <div className="w-16 h-px bg-archin-gold" />
              </div>

              <div className={`bg-white/50 border border-archin-gold/20 p-5 md:p-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="space-y-5 md:space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="wa_fullName" className="block text-archin-grey font-body text-xs uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      id="wa_fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 bg-archin-cream border border-archin-gold/30 text-archin-navy font-body text-sm focus:border-archin-gold focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Phone + Email row on md+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                    <div>
                      <label htmlFor="wa_phone" className="block text-archin-grey font-body text-xs uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="wa_phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-archin-cream border border-archin-gold/30 text-archin-navy font-body text-sm focus:border-archin-gold focus:outline-none transition-colors duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="wa_email" className="block text-archin-grey font-body text-xs uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        id="wa_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-archin-cream border border-archin-gold/30 text-archin-navy font-body text-sm focus:border-archin-gold focus:outline-none transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label htmlFor="wa_service" className="block text-archin-grey font-body text-xs uppercase tracking-wider mb-2">Service Required</label>
                    <select
                      id="wa_service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 bg-archin-cream border border-archin-gold/30 text-archin-navy font-body text-sm focus:border-archin-gold focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                      style={selectStyle}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Location + Budget row on md+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                    <div>
                      <label htmlFor="wa_location" className="block text-archin-grey font-body text-xs uppercase tracking-wider mb-2">Project Location</label>
                      <input
                        type="text"
                        id="wa_location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-4 py-3 bg-archin-cream border border-archin-gold/30 text-archin-navy font-body text-sm focus:border-archin-gold focus:outline-none transition-colors duration-300"
                        placeholder="Area and city"
                      />
                    </div>
                    <div>
                      <label htmlFor="wa_budget" className="block text-archin-grey font-body text-xs uppercase tracking-wider mb-2">Budget Range</label>
                      <select
                        id="wa_budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-3 bg-archin-cream border border-archin-gold/30 text-archin-navy font-body text-sm focus:border-archin-gold focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                        style={selectStyle}
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label htmlFor="wa_brief" className="block text-archin-grey font-body text-xs uppercase tracking-wider mb-2">Project Brief</label>
                    <textarea
                      id="wa_brief"
                      rows={4}
                      maxLength={500}
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      className="w-full px-4 py-3 bg-archin-cream border border-archin-gold/30 text-archin-navy font-body text-sm focus:border-archin-gold focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project vision, requirements and timeline"
                    />
                    <p className="text-archin-grey font-body text-xs mt-1">{brief.length}/500 characters</p>
                  </div>

                  {/* WhatsApp Button */}
                  <div>
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="w-full px-8 py-4 text-white font-body font-semibold tracking-wide flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer whitespace-nowrap"
                      style={{ backgroundColor: '#25D366' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1ebe5d'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#25D366'; }}
                    >
                      <i className="ri-whatsapp-line text-xl" />
                      <span>Send Enquiry on WhatsApp</span>
                    </button>
                    <p className="text-archin-grey font-body text-xs text-center mt-3 leading-relaxed">
                      Your details will be sent directly to our WhatsApp.<br />
                      We typically respond within 2 hours during business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
