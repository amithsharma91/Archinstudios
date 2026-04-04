import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="bg-archin-navy py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-archin-gold font-body font-medium tracking-[0.25em] uppercase text-sm mb-4">
          Ready to Begin
        </p>
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-archin-cream mb-6 leading-tight">
          Ready to Begin Your Project
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="h-px w-16 bg-archin-gold"></div>
          <div className="w-2 h-2 bg-archin-gold rotate-45"></div>
          <div className="h-px w-16 bg-archin-gold"></div>
        </div>
        <p className="text-archin-cream/75 font-body text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          With verified credentials and proven expertise, ARCHIN is your trusted partner for spaces that inspire.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center space-x-2 px-10 py-4 bg-archin-gold text-archin-navy font-body font-semibold rounded-sm hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
        >
          <i className="ri-mail-send-line text-lg"></i>
          <span>Contact Us</span>
        </Link>
      </div>
    </section>
  );
}
