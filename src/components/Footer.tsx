import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-archin-navy text-archin-cream border-t border-archin-gold/15">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-archin-gold/50 to-transparent" />

      <div className="px-5 lg:px-16 py-10 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {/* Column 1: Logo and Description */}
            <div className="lg:col-span-1 space-y-6">
              <Link to="/" className="inline-block group">
                <img
                  src="https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/9191050d-0e23-44a6-bbec-0b423155b8de_Screenshot_2026-03-21-21-33-43-944_com.microsoft.office.word-removebg-preview-removebg-preview.png?v=1a63685f458eda23f008e57fe87b731b"
                  alt="ARCHIN Architecture and Interiors Studio Logo"
                  className="h-14 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <p className="text-archin-cream/60 font-body text-sm leading-relaxed">
                Studio of Architecture and Interiors, Bangalore. Specialising in industrial facilities, residential and commercial design since 2007.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://maps.app.goo.gl/mFLegdoWRDERFPuVA"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-archin-gold/30 text-archin-gold/70 hover:bg-archin-gold hover:text-archin-navy hover:border-archin-gold transition-all duration-300 cursor-pointer"
                  aria-label="Google Maps"
                >
                  <i className="ri-map-pin-line text-sm" />
                </a>
                <a
                  href="tel:+919980377877"
                  className="w-9 h-9 flex items-center justify-center border border-archin-gold/30 text-archin-gold/70 hover:bg-archin-gold hover:text-archin-navy hover:border-archin-gold transition-all duration-300 cursor-pointer"
                  aria-label="Call us"
                >
                  <i className="ri-phone-line text-sm" />
                </a>
                <a
                  href="mailto:thearchinstudios@gmail.com"
                  className="w-9 h-9 flex items-center justify-center border border-archin-gold/30 text-archin-gold/70 hover:bg-archin-gold hover:text-archin-navy hover:border-archin-gold transition-all duration-300 cursor-pointer"
                  aria-label="Email us"
                >
                  <i className="ri-mail-line text-sm" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-heading text-base font-light mb-6 text-archin-gold tracking-widest uppercase">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Client Reviews', path: '/reviews' },
                  { name: 'Credentials', path: '/credentials' },
                  { name: 'Contact', path: '/contact' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-archin-cream/60 hover:text-archin-gold font-body text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <i className="ri-arrow-right-s-line text-archin-gold/0 group-hover:text-archin-gold transition-all duration-300 text-xs" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="font-heading text-base font-light mb-6 text-archin-gold tracking-widest uppercase">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Industrial Architecture', path: '/projects/industrial' },
                  { name: 'Residential', path: '/projects/residential' },
                  { name: 'Interior Design', path: '/projects/interior' },
                  { name: 'Renovation', path: '/projects/renovation' },
                  { name: 'Convention Halls', path: '/projects/convention-halls' },
                  { name: 'Commercial', path: '/projects/commercial' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-archin-cream/60 hover:text-archin-gold font-body text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <i className="ri-arrow-right-s-line text-archin-gold/0 group-hover:text-archin-gold transition-all duration-300 text-xs" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="font-heading text-base font-light mb-6 text-archin-gold tracking-widest uppercase">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <i className="ri-phone-line text-archin-gold mt-0.5 flex-shrink-0 text-sm" />
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+919980377877"
                      className="text-archin-cream/60 hover:text-archin-gold font-body text-sm transition-colors duration-300"
                    >
                      +91 99803 77877
                    </a>
                    <a
                      href="tel:+919980818208"
                      className="text-archin-cream/60 hover:text-archin-gold font-body text-sm transition-colors duration-300"
                    >
                      +91 99808 18208
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-mail-line text-archin-gold mt-0.5 flex-shrink-0 text-sm" />
                  <a
                    href="mailto:thearchinstudios@gmail.com"
                    className="text-archin-cream/60 hover:text-archin-gold font-body text-sm transition-colors duration-300 break-all"
                  >
                    Thearchinstudios@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-map-pin-line text-archin-gold mt-0.5 flex-shrink-0 text-sm" />
                  <a
                    href="https://maps.app.goo.gl/5QKW6wV7iywM52k99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-archin-cream/60 hover:text-archin-gold font-body text-sm leading-relaxed transition-colors duration-300 cursor-pointer"
                  >
                    Building No 21, ARCHIN Building,<br />
                    Nehru Nagar Main Road,<br />
                    Jakkur, Yelahanka,<br />
                    Bengaluru, Karnataka 560064
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-time-line text-archin-gold mt-0.5 flex-shrink-0 text-sm" />
                  <span className="text-archin-cream/60 font-body text-sm leading-relaxed">
                    Mon – Sat: 9:00 AM – 6:30 PM<br />
                    Sunday: By Appointment
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-14 pt-8 border-t border-archin-gold/15">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-archin-cream/40 font-body text-xs text-center md:text-left">
                © {new Date().getFullYear()} ARCHIN Architecture and Interior Studio. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-archin-cream/40 font-body text-xs">
                <span className="flex items-center gap-1.5">
                  <i className="ri-file-list-line text-archin-gold/50 text-xs" />
                  GST: 29AZEPK4827E1ZB
                </span>
                <span className="text-archin-gold/20">|</span>
                <span className="flex items-center gap-1.5">
                  <i className="ri-shield-check-line text-archin-gold/50 text-xs" />
                  COA: CA/2007/40394
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
