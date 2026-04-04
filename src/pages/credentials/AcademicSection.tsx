const degrees = [
  {
    icon: 'ri-graduation-cap-line',
    university: 'Visveswaraiah Technological University',
    location: 'Belgaum, Karnataka, India',
    degree: 'Bachelor of Architecture',
    achievement: 'First Class with Distinction',
    completed: 'February 2007',
    certificateNumber: null,
  },
  {
    icon: 'ri-graduation-cap-line',
    university: 'University of Leeds',
    location: 'United Kingdom',
    degree: 'Master of Science in Engineering Project Management',
    achievement: 'Passed with Merit',
    completed: 'November 2008',
    certificateNumber: '2008/200365897',
  },
];

export default function AcademicSection() {
  return (
    <section className="bg-archin-cream py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-archin-gold font-body font-medium tracking-[0.25em] uppercase text-sm mb-4">
            Academic Excellence
          </p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-archin-navy mb-5 leading-tight">
            World Class Education Behind Every Design
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-archin-gold"></div>
            <div className="w-2 h-2 bg-archin-gold rotate-45"></div>
            <div className="h-px w-16 bg-archin-gold"></div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {degrees.map((item) => (
            <div
              key={item.degree}
              className="bg-white border border-archin-gold/20 rounded-lg p-8 hover:border-archin-gold/50 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-archin-gold/10 border border-archin-gold/30 rounded-lg mb-6 group-hover:bg-archin-gold/20 transition-colors duration-300">
                <i className={`${item.icon} text-archin-gold text-3xl`}></i>
              </div>

              {/* University */}
              <p className="text-archin-gold font-body font-semibold text-sm tracking-wide uppercase mb-1">
                {item.university}
              </p>
              <p className="text-archin-navy/60 font-body text-sm mb-4">{item.location}</p>

              {/* Degree */}
              <h3 className="text-2xl font-heading font-bold text-archin-navy mb-5 leading-snug">
                {item.degree}
              </h3>

              {/* Divider */}
              <div className="h-px w-12 bg-archin-gold mb-5"></div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-archin-navy/60 font-body text-sm">Achievement</span>
                  <span className="text-archin-navy font-body font-semibold text-sm">{item.achievement}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-archin-navy/60 font-body text-sm">Completed</span>
                  <span className="text-archin-navy font-body font-semibold text-sm">{item.completed}</span>
                </div>
                {item.certificateNumber && (
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-archin-navy/60 font-body text-sm whitespace-nowrap">Certificate No.</span>
                    <span className="text-archin-navy font-body font-semibold text-sm text-right break-all">{item.certificateNumber}</span>
                  </div>
                )}
              </div>

              {/* Bottom accent */}
              <div className="mt-6 pt-5 border-t border-archin-gold/20">
                <div className="flex items-center space-x-2">
                  <i className="ri-shield-check-line text-archin-gold text-lg"></i>
                  <span className="text-archin-gold font-body text-sm font-medium">Verified Academic Qualification</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
