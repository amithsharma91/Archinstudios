import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Pages where the hero has a dark background — navbar starts transparent
  const heroPages = ['/', '/projects', '/projects/industrial', '/projects/residential', '/projects/interior', '/projects/renovation', '/projects/convention-halls', '/projects/commercial', '/about', '/contact', '/credentials', '/reviews'];
  const isHeroPage = heroPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Client Reviews', path: '/reviews' },
    { name: 'Credentials', path: '/credentials' },
    { name: 'Contact', path: '/contact' },
  ];

  const isTransparent = isHeroPage && !isScrolled && !isMobileMenuOpen;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-archin-navy/95 backdrop-blur-sm border-b border-archin-gold/10'
      }`}
    >
      <div className="px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img
              src="https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/9191050d-0e23-44a6-bbec-0b423155b8de_Screenshot_2026-03-21-21-33-43-944_com.microsoft.office.word-removebg-preview-removebg-preview.png?v=1a63685f458eda23f008e57fe87b731b"
              alt="ARCHIN Architecture and Interiors Studio Logo"
              className="h-12 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm font-medium transition-all duration-300 relative group tracking-wide ${
                  location.pathname === link.path
                    ? 'text-archin-gold'
                    : 'text-archin-cream hover:text-archin-gold'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-px bg-archin-gold transform origin-left transition-transform duration-300 ${
                    location.pathname === link.path
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-archin-gold text-archin-navy font-body font-semibold text-sm tracking-wider hover:bg-archin-gold/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-archin-cream hover:text-archin-gold transition-colors duration-300 cursor-pointer w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-2xl`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-5 bg-archin-navy border-t border-archin-gold/20 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-3 font-body font-medium text-sm tracking-wide transition-colors duration-300 border-b border-archin-gold/10 ${
                location.pathname === link.path
                  ? 'text-archin-gold'
                  : 'text-archin-cream hover:text-archin-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-4 px-6 py-3 bg-archin-gold text-archin-navy text-center font-body font-semibold text-sm tracking-wider hover:bg-archin-gold/90 transition-all duration-300 cursor-pointer"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
