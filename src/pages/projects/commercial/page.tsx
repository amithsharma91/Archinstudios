import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Hero from './Hero';
import CommercialProjectCard from './ProjectCard';
import SEOMeta from '../../../components/SEOMeta';
import { commercialProjects } from '../../../mocks/projects';

const BASE_URL = 'https://archinstudios.in';

const commercialSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Commercial Architecture Projects – ARCHIN Studio',
    url: `${BASE_URL}/projects/commercial`,
    description:
      'Explore ARCHIN Studio\'s commercial architecture portfolio – corporate offices, retail spaces and mixed-use developments crafted to reflect brand identity and enhance productivity in Bengaluru.',
    publisher: {
      '@type': 'LocalBusiness',
      name: 'ARCHIN Studio',
      url: BASE_URL,
    },
  },
];

export default function CommercialProjects() {
  return (
    <div className="min-h-screen bg-archin-black">
      <SEOMeta
        title="Commercial Architecture Projects | ARCHIN Studio Bengaluru"
        description="Explore ARCHIN Studio's commercial architecture portfolio – corporate offices, retail spaces and mixed-use developments in Bengaluru, Karnataka."
        keywords="commercial architecture Bengaluru, office design Bangalore, retail space design Karnataka, corporate building architect"
        canonicalPath="/projects/commercial"
        schema={commercialSchema}
      />
      <Navbar />
      <main>
        <Hero />

        {/* Projects List */}
        <section className="section-padding py-20 lg:py-28">
          <div className="max-w-6xl mx-auto">
            {/* Section Intro */}
            <div className="max-w-3xl mb-16">
              <span className="label mb-4 block">Our Work</span>
              <p className="body-lg">
                ARCHIN designs commercial spaces that go beyond aesthetics. Our office buildings,
                retail spaces and mixed use developments are crafted to reflect brand identity,
                enhance productivity and create lasting impressions on clients and employees.
              </p>
            </div>

            {/* Projects */}
            <div className="space-y-20 lg:space-y-28">
              {commercialProjects.map((project, index) => (
                <CommercialProjectCard
                  key={project.id}
                  title={project.title}
                  index={index}
                  modelImage={project.modelImage}
                  executedImage={project.executedImage}
                  extraModelImage={project.extraModelImage}
                  extraExecutedImage={project.extraExecutedImage}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Studio Location Section */}
        <section className="section-padding py-20 lg:py-24 bg-archin-cream">
          <div className="max-w-4xl mx-auto text-center">
            <span
              className="inline-block px-6 py-2 bg-archin-gold/15 border border-archin-gold/40 text-archin-gold font-body text-sm tracking-widest uppercase mb-6"
            >
              Come See Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-archin-navy mb-6 tracking-wide">
              Visit Our Studio
            </h2>
            <p className="font-body text-lg text-archin-navy/70 leading-relaxed max-w-xl mx-auto mb-10">
              Come see our work in person at the ARCHIN Studio in Yelahanka, Bangalore.
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
        <section className="section-padding py-20 bg-archin-charcoal">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label mb-4 block">Start Your Project</span>
            <h2 className="heading-md text-archin-cream mb-6">
              Ready to Build Your Commercial Space?
            </h2>
            <p className="body-lg max-w-2xl mx-auto mb-10">
              From corporate headquarters to retail environments, we create commercial spaces
              that elevate your brand and drive results.
            </p>
            <a href="/contact" className="btn-primary whitespace-nowrap inline-block cursor-pointer">
              Discuss Your Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
