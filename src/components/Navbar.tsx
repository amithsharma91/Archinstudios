import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Client Reviews', path: '/reviews' },
    { name: 'Credentials and Trust', path: '/credentials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-archin-navy shadow-lg' : 'bg-archin-navy'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/9191050d-0e23-44a6-bbec-0b423155b8de_Screenshot_2026-03-21-21-33-43-944_com.microsoft.office.word-removebg-preview-removebg-preview.png?v=1a63685f458eda23f008e57fe87b731b"
              alt="ARCHIN Architecture and Interiors Studio Logo"
              className="h-14 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body font-medium transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? 'text-archin-gold'
                    : 'text-archin-cream hover:text-archin-gold'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-archin-gold transform origin-left transition-transform duration-300 ${
                    location.pathname === link.path
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-6 py-3 bg-archin-gold text-archin-navy font-body font-semibold rounded-sm hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-archin-cream hover:text-archin-gold transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 bg-archin-navy border-t border-archin-gold/20">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-3 font-body font-medium transition-colors duration-300 ${
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
            className="block mt-4 px-6 py-3 bg-archin-gold text-archin-navy text-center font-body font-semibold rounded-sm hover:bg-opacity-90 transition-all duration-300 cursor-pointer"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
