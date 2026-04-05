import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Hero from './Hero';
import ProjectCard from './ProjectCard';
import SEOMeta from '../../../components/SEOMeta';
import { residentialProjects } from '../../../mocks/projects';

const BASE_URL = 'https://archinstudios.in';

const residentialSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Residential Architecture Projects – ARCHIN Studio',
    url: `${BASE_URL}/projects/residential`,
    description:
      'Discover ARCHIN Studio\'s residential architecture portfolio – contemporary villas, urban homes and apartments designed with elegance and precision in Bengaluru.',
    publisher: {
      '@type': 'LocalBusiness',
      name: 'ARCHIN Studio',
      url: BASE_URL,
    },
  },
];

export default function ResidentialProjects() {
  return (
    <div className="min-h-screen bg-archin-black">
      <SEOMeta
        title="Residential Architecture Projects | ARCHIN Studio Bengaluru"
        description="Discover ARCHIN Studio's residential architecture portfolio – villas, homes and apartments designed with elegance and precision in Bengaluru, Karnataka."
        keywords="residential architecture Bengaluru, home design Karnataka, villa design Bangalore, contemporary house design"
        canonicalPath="/projects/residential"
        schema={residentialSchema}
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
                Each residential project we undertake is a unique journey. From contemporary villas
                to urban apartments, we craft homes that reflect the personalities and aspirations
                of those who inhabit them.
              </p>
            </div>

            {/* Projects */}
            <div className="space-y-20 lg:space-y-28">
              {residentialProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  modelImage={project.modelImage}
                  executedImage={project.executedImage}
                  title={project.title}
                  index={index}
                  singleTag={project.singleTag}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding py-20 bg-archin-charcoal">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label mb-4 block">Start Your Journey</span>
            <h2 className="heading-md text-archin-cream mb-6">
              Have a Vision for Your Dream Home?
            </h2>
            <p className="body-lg max-w-2xl mx-auto mb-10">
              Let&apos;s collaborate to create a residence that perfectly captures your lifestyle
              and stands as a testament to timeless design.
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
