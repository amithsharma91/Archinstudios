const legalItems = [
  {
    icon: 'ri-file-text-line',
    label: 'GST Number',
    value: '29AZEPK4827E1ZB',
    description: 'Regular GST registration from 18 December 2025.',
  },
  {
    icon: 'ri-building-4-line',
    label: 'Trade Name',
    value: 'ARCHIN Architecture and Interior Studio',
    description: 'Proprietorship business registered in Bangalore, Karnataka, India.',
  },
  {
    icon: 'ri-award-line',
    label: 'Establishment Registration',
    value: '44/5/CE/0130/2025',
    description:
      'Valid till 31 December 2029 under Karnataka Shops and Commercial Establishments Act 1961.',
  },
];

export default function LegalSection() {
  return (
    <section className="bg-archin-cream py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-archin-gold font-body font-medium tracking-[0.25em] uppercase text-sm mb-4">
            Legal Compliance
          </p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-archin-navy mb-5 leading-tight">
            A Fully Registered and Transparent Business
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-16 bg-archin-gold"></div>
            <div className="w-2 h-2 bg-archin-gold rotate-45"></div>
            <div className="h-px w-16 bg-archin-gold"></div>
          </div>
          <p className="text-archin-navy/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Fully compliant registered business entity ensuring transparency and trust in every project.
          </p>
        </div>

        {/* List cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {legalItems.map((item) => (
            <div
              key={item.label}
              className="bg-white border border-archin-gold/20 rounded-lg p-8 hover:border-archin-gold/50 transition-all duration-300 group"
            >
              {/* Icon + Label */}
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center bg-archin-gold/10 border border-archin-gold/30 rounded-md group-hover:bg-archin-gold/20 transition-colors duration-300">
                  <i className={`${item.icon} text-archin-gold text-lg`}></i>
                </div>
                <span className="text-archin-navy/60 font-body font-medium text-sm tracking-wide uppercase">
                  {item.label}
                </span>
              </div>

              {/* Value */}
              <p className="text-2xl font-heading font-bold text-archin-navy mb-3 leading-snug break-all">
                {item.value}
              </p>

              {/* Divider */}
              <div className="h-px w-10 bg-archin-gold mb-4"></div>

              {/* Description */}
              <p className="text-archin-navy/65 font-body text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
