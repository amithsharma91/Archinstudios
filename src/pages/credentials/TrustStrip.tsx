const badges = [
  { icon: 'ri-shield-star-line', label: 'COA Registered' },
  { icon: 'ri-leaf-line', label: 'IGBC Certified' },
  { icon: 'ri-building-2-line', label: 'BMP Approved' },
  { icon: 'ri-earth-line', label: 'UK Educated' },
];

export default function TrustStrip() {
  return (
    <section className="bg-archin-cream py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
          {badges.map((badge, idx) => (
            <div
              key={badge.label}
              className="flex items-center space-x-3 bg-white border border-archin-gold/20 rounded-lg px-6 py-4 hover:border-archin-gold/50 transition-all duration-300 group"
            >
              <div className="w-9 h-9 flex items-center justify-center bg-archin-gold/10 rounded-md group-hover:bg-archin-gold/20 transition-colors duration-300">
                <i className={`${badge.icon} text-archin-gold text-lg`}></i>
              </div>
              <span className="text-archin-navy font-body font-semibold text-sm tracking-wide">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
