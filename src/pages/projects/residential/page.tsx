import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Hero from './Hero';
import ProjectCard from './ProjectCard';
import ShowcaseGallery from './ShowcaseGallery';
import SEOMeta from '../../../components/SEOMeta';
import { residentialProjects } from '../../../mocks/projects';

const showcaseImages = [
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/c2b89e54-3687-4477-840e-7016914363ff_099297eb-13c6-461e-a059-19be30cf489e.jpeg?v=5028ae8cef83bea88df943af0bf54d44',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/98e3c506-e364-4093-ad1a-7f42cdea436a_a7d674a3-ffd3-40b7-9561-bbd153728bf6.jpeg?v=273aaa2c5d2f41a139210eb7bfcb2524',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/630faaa8-86cf-401f-ba81-a9cb33599ce3_4c1a430d-97d8-402f-86ab-862821d9a13f.jpeg?v=d26f416bf2831159eb07de327572fbfb',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/c8a8f26c-bdec-4202-a2da-dd1e095fc92b_c96badb4-a8c2-405d-807b-a954b8c431b7.jpeg?v=ef97ce22f9032a8a41c0085714bf7feb',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/e4bf7ce3-4452-4c1e-8869-9666f113d6be_93247f6a-87dd-421a-849c-a5b8a81954df.jpeg?v=fff2258da744b5b4518e50cbaf178f8c',
];

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

        {/* Completed Works Gallery */}
        <section className="section-padding py-20 lg:py-28 bg-archin-charcoal">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <span className="label mb-4 block">Completed Works</span>
              <h2 className="heading-md text-archin-cream mb-4">Built &amp; Delivered</h2>
              <p className="body-lg">
                A curated glimpse into residential spaces we have brought to life — where design
                intent meets crafted reality.
              </p>
            </div>
            <ShowcaseGallery images={showcaseImages} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding py-20 bg-archin-black">
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
