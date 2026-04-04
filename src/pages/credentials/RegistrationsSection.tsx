const registrations = [
  {
    id: 'coa',
    icon: 'ri-shield-star-line',
    title: 'Council of Architecture India',
    regNumber: 'CA/2007/40394',
    dateOfIssue: 'June 8, 2007',
    certFullName: null,
    description:
      'Registered architect under the Architects Act 1972, Government of India, ensuring professional standards in every single project.',
  },
  {
    id: 'igbc',
    icon: 'ri-leaf-line',
    title: 'IGBC Accredited Professional',
    regNumber: null,
    dateOfIssue: 'July 15, 2023',
    certFullName: 'Indian Green Building Council',
    description:
      'Certified professional with demonstrated knowledge of green building design, committed to sustainable architecture and responsible construction.',
  },
  {
    id: 'bmp',
    icon: 'ri-building-2-line',
    title: 'Bangalore Mahanagara Palike',
    regNumber: 'BCC/BL-3.6/Ar.1655/07-08',
    dateOfIssue: 'July 27, 2007',
    certFullName: null,
    description:
      'Registered architect with BMP under Building Bye Laws 2003 for all Bangalore based projects, ensuring full statutory compliance.',
  },
  {
    id: 'iia',
    icon: 'ri-team-line',
    title: 'IIA Member',
    regNumber: null,
    dateOfIssue: null,
    certFullName: 'Indian Institute of Architects',
    description:
      'Active member of the Indian Institute of Architects committed to advancing architectural practice and professional standards across India.',
  },
  {
    id: 'vm',
    icon: 'ri-award-line',
    title: 'Value Management',
    regNumber: null,
    dateOfIssue: null,
    certFullName: 'Certified Value Management Professional',
    description:
      'Certified in value management frameworks maximising design outcomes while optimising client investment across all project scales.',
  },
];

export default function RegistrationsSection() {
  return (
    <section className="bg-archin-navy py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-archin-gold font-body font-medium tracking-[0.25em] uppercase text-sm mb-4">
            Professional Registrations
          </p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-archin-cream mb-5 leading-tight">
            Registered with Every Governing Body<br className="hidden lg:block" /> that Matters
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-archin-gold"></div>
            <div className="w-2 h-2 bg-archin-gold rotate-45"></div>
            <div className="h-px w-16 bg-archin-gold"></div>
          </div>
        </div>

        {/* Cards — first row of 3, second row of 2 centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {registrations.map((item) => (
            <div
              key={item.id}
              className="bg-archin-navy border border-archin-gold/25 rounded-lg p-8 hover:border-archin-gold/60 transition-all duration-300 group flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-archin-gold/10 border border-archin-gold/30 rounded-lg mb-6 group-hover:bg-archin-gold/20 transition-colors duration-300">
                <i className={`${item.icon} text-archin-gold text-2xl`}></i>
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold text-archin-cream mb-5 leading-snug">
                {item.title}
              </h3>

              {/* Details */}
              <div className="space-y-3 mb-6">
                {item.certFullName && (
                  <div className="flex flex-col space-y-0.5">
                    <span className="text-archin-cream/50 font-body text-xs tracking-wide uppercase">Full Name</span>
                    <span className="text-archin-gold font-body font-semibold text-sm">{item.certFullName}</span>
                  </div>
                )}
                {item.regNumber && (
                  <div className="flex flex-col space-y-0.5">
                    <span className="text-archin-cream/50 font-body text-xs tracking-wide uppercase">Registration Number</span>
                    <span className="text-archin-gold font-body font-semibold text-sm break-all">{item.regNumber}</span>
                  </div>
                )}
                {item.dateOfIssue && (
                  <div className="flex flex-col space-y-0.5">
                    <span className="text-archin-cream/50 font-body text-xs tracking-wide uppercase">Date of Issue</span>
                    <span className="text-archin-cream font-body font-semibold text-sm">{item.dateOfIssue}</span>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-archin-gold/20 mb-5"></div>

              {/* Description */}
              <p className="text-archin-cream/70 font-body text-sm leading-relaxed flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
