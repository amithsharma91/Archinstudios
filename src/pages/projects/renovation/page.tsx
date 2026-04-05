import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Hero from './Hero';
import RenovationProjectCard from './ProjectCard';
import SEOMeta from '../../../components/SEOMeta';
import { renovationProjects } from '../../../mocks/projects';

const BASE_URL = 'https://archinstudios.in';

const renovationSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Renovation Projects – ARCHIN Studio',
    url: `${BASE_URL}/projects/renovation`,
    description:
      "Explore ARCHIN Studio's renovation portfolio – transforming outdated spaces into modern functional environments in Bengaluru, Karnataka.",
    publisher: {
      '@type': 'LocalBusiness',
      name: 'ARCHIN Studio',
      url: BASE_URL,
    },
  },
];

export default function RenovationProjects() {
  return (
    <div className="min-h-screen bg-archin-black">
      <SEOMeta
        title="Renovation Projects | ARCHIN Studio Bengaluru"
        description="Explore ARCHIN Studio's renovation portfolio – transforming outdated homes and offices into modern functional spaces in Bengaluru, Karnataka."
        keywords="renovation Bengaluru, home renovation Bangalore, office renovation Karnataka, space transformation architecture"
        canonicalPath="/projects/renovation"
        schema={renovationSchema}
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
                We transform outdated and worn spaces into modern, functional environments while
                preserving the soul and character of the original structure. Every renovation
                project is approached with fresh vision and precise execution.
              </p>
            </div>

            {/* Projects */}
            <div className="space-y-20 lg:space-y-28">
              {renovationProjects.map((project, index) => (
                <RenovationProjectCard
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

        {/* CTA Section */}
        <section className="section-padding py-20 bg-archin-charcoal">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label mb-4 block">Reimagine Your Space</span>
            <h2 className="heading-md text-archin-cream mb-6">
              Ready to Transform Your Existing Space?
            </h2>
            <p className="body-lg max-w-2xl mx-auto mb-10">
              Whether it&apos;s a family home or a commercial property, let us breathe new life
              into your space with thoughtful renovation design and expert execution.
            </p>
            <a href="/contact" className="btn-primary whitespace-nowrap inline-block cursor-pointer">
              Discuss Your Renovation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
