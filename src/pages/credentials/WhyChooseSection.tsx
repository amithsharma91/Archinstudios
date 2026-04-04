const stats = [
  {
    number: '19 Plus Years',
    label: 'Years Experience',
    description: 'Nearly two decades transforming architectural visions into built reality.',
  },
  {
    number: 'UK Educated',
    label: 'International Education',
    description: 'Principal Architect holds MS from University of Leeds, bringing global standards.',
  },
  {
    number: 'Fully Registered',
    label: 'Fully Registered',
    description: 'Registered with COA, BMP and all statutory bodies with valid GST certification.',
  },
  {
    number: 'Green Certified',
    label: 'Green Certified',
    description: 'IGBC Accredited Professional, certified July 2023 for sustainable design.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-archin-navy py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-archin-gold font-body font-medium tracking-[0.25em] uppercase text-sm mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-archin-cream mb-5 leading-tight">
            Decades of Excellence and Verified Trust
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-archin-gold"></div>
            <div className="w-2 h-2 bg-archin-gold rotate-45"></div>
            <div className="h-px w-16 bg-archin-gold"></div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-archin-gold/25 rounded-lg p-8 text-center hover:border-archin-gold/60 transition-all duration-300 group"
            >
              {/* Number / Display text */}
              <div className="text-xl lg:text-2xl font-heading font-bold text-archin-gold mb-3 group-hover:scale-105 transition-transform duration-300 inline-block leading-snug">
                {stat.number}
              </div>
              {/* Label */}
              <p className="text-archin-cream font-body font-semibold text-sm tracking-wide uppercase mb-3">
                {stat.label}
              </p>
              {/* Divider */}
              <div className="h-px w-8 bg-archin-gold/50 mx-auto mb-4"></div>
              {/* Description */}
              <p className="text-archin-cream/65 font-body text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
