import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Hero from './Hero';
import ConventionProjectCard from './ProjectCard';
import SEOMeta from '../../../components/SEOMeta';
import { conventionProjects } from '../../../mocks/projects';

const BASE_URL = 'https://archinstudios.in';

const conventionHallsSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Convention Hall Projects – ARCHIN Studio',
    url: `${BASE_URL}/projects/convention-halls`,
    description:
      'Explore ARCHIN Studio\'s convention hall portfolio – grand event spaces designed with superior acoustics, dynamic lighting and timeless elegance in Bengaluru.',
    publisher: {
      '@type': 'LocalBusiness',
      name: 'ARCHIN Studio',
      url: BASE_URL,
    },
  },
];

export default function ConventionHallsProjects() {
  return (
    <div className="min-h-screen bg-archin-black">
      <SEOMeta
        title="Convention Hall Design Projects | ARCHIN Studio Bengaluru"
        description="Explore ARCHIN Studio's convention hall portfolio – grand event spaces designed with superior acoustics, dynamic lighting and elegant interiors in Bengaluru, Karnataka."
        keywords="convention hall design Bengaluru, banquet hall architecture Bangalore, event space design Karnataka, grand hall architect"
        canonicalPath="/projects/convention-halls"
        schema={conventionHallsSchema}
      />
      <Navbar />
      <main>
        <Hero />

        {/* Projects List */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-14 lg:py-28">
          <div className="max-w-6xl mx-auto">
            {/* Section Intro */}
            <div className="max-w-3xl mb-10 md:mb-16">
              <span className="label mb-4 block">Our Work</span>
              <p className="body-lg text-base md:text-xl">
                From intimate gathering spaces to grand event halls seating over a thousand guests,
                ARCHIN designs convention spaces that balance grandeur with functionality,
                acoustics with aesthetics, and scale with elegance.
              </p>
            </div>

            {/* Projects */}
            <div className="space-y-14 lg:space-y-28">
              {conventionProjects.map((project, index) => (
                <ConventionProjectCard
                  key={project.id}
                  title={project.title}
                  index={index}
                  modelImage={project.modelImage}
                  executedImage={project.executedImage}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Come See Us Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-14 lg:py-24 bg-archin-cream">
          <div className="max-w-4xl mx-auto text-center">
            <span
              className="inline-block px-6 py-2 bg-archin-gold/15 border border-archin-gold/40 text-archin-gold font-body text-sm tracking-widest uppercase mb-6"
            >
              Come See Us
            </span>
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-light text-archin-navy mb-6 tracking-wide">
              Visit Our Studio
            </h2>
            <p className="font-body text-base md:text-lg text-archin-navy/70 leading-relaxed max-w-xl mx-auto mb-10">
              Come see our convention hall design work in person at the ARCHIN Studio in Yelahanka, Bangalore.
            </p>
            <a
              href="https://maps.app.goo.gl/5QKW6wV7iywM52k99"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap inline-flex items-center gap-2 cursor-pointer"
            >
              <i className="ri-map-pin-2-fill" />
              View Location on Google Maps
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-14 md:py-20 bg-archin-charcoal">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label mb-4 block">Design Your Event Space</span>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-light tracking-wide text-archin-cream mb-6">
              Planning a Grand Convention or Banquet Hall?
            </h2>
            <p className="body-lg text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10">
              Whether you&apos;re envisioning an intimate gathering venue or a large scale convention
              centre, let us design a space that makes every event unforgettable.
            </p>
            <a href="/contact?service=Convention+Hall" className="btn-primary whitespace-nowrap inline-block cursor-pointer">
              Discuss Your Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
