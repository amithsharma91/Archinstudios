import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-archin-footer text-archin-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo and Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              <img
                src="https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/9191050d-0e23-44a6-bbec-0b423155b8de_Screenshot_2026-03-21-21-33-43-944_com.microsoft.office.word-removebg-preview-removebg-preview.png?v=1a63685f458eda23f008e57fe87b731b"
                alt="ARCHIN Architecture and Interiors Studio Logo"
                className="h-16 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-archin-cream/80 font-body leading-relaxed">
              Studio of Architecture and Interiors, Bangalore
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 text-archin-gold tracking-wide">
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
                    className="text-archin-cream/80 hover:text-archin-gold font-body transition-colors duration-300 inline-flex items-center group"
                  >
                    <i className="ri-arrow-right-s-line text-archin-gold opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-300"></i>
                    <span className="group-hover:ml-2 transition-all duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 text-archin-gold tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Residential', path: '/projects/residential' },
                { name: 'Interior', path: '/projects/interior' },
                { name: 'Renovation', path: '/projects/renovation' },
                { name: 'Convention Halls', path: '/projects/convention-halls' },
                { name: 'Commercial', path: '/projects/commercial' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-archin-cream/80 hover:text-archin-gold font-body transition-colors duration-300 inline-flex items-center group"
                  >
                    <i className="ri-arrow-right-s-line text-archin-gold opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-300"></i>
                    <span className="group-hover:ml-2 transition-all duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 text-archin-gold tracking-wide">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="ri-phone-line text-archin-gold mt-1 flex-shrink-0"></i>
                <div className="space-y-1">
                  <a
                    href="tel:+919980377877"
                    className="text-archin-cream/80 hover:text-archin-gold font-body transition-colors duration-300 block"
                  >
                    +91 99803 77877
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-mail-line text-archin-gold mt-1 flex-shrink-0"></i>
                <div className="space-y-1">
                  <a
                    href="mailto:thearchinstudios@gmail.com"
                    className="text-archin-cream/80 hover:text-archin-gold font-body transition-colors duration-300 block break-all"
                  >
                    Thearchinstudios@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-archin-gold mt-1 flex-shrink-0"></i>
                <a
                  href="https://maps.app.goo.gl/5QKW6wV7iywM52k99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-archin-cream/80 hover:text-archin-gold font-body leading-relaxed transition-colors duration-300 cursor-pointer"
                >
                  Building No 21, ARCHIN Building,<br />
                  Nehru Nagar Main Road,<br />
                  Jakkur, Yelahanka,<br />
                  Bengaluru, Karnataka 560064
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-archin-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-archin-cream/60 font-body text-sm text-center md:text-left">
              © {new Date().getFullYear()} ARCHIN Architecture and Interior Studio. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-archin-cream/60 font-body text-sm">
              <span className="flex items-center space-x-2">
                <i className="ri-file-list-line text-archin-gold"></i>
                <span>GST: 29AZEPK4827E1ZB</span>
              </span>
              <span className="hidden md:inline text-archin-gold/50 font-light text-lg leading-none">|</span>
              <span className="flex items-center space-x-2">
                <i className="ri-shield-check-line text-archin-gold"></i>
                <span>COA: CA/2007/40394</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
