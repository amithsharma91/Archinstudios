import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Hero from './Hero';
import IndustrialShowcaseGallery from './ShowcaseGallery';
import SEOMeta from '../../../components/SEOMeta';

const BASE_URL = 'https://archinstudios.in';

const industrialSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Industrial Architecture Projects – ARCHIN Studio',
    url: `${BASE_URL}/projects/industrial`,
    description:
      'Explore ARCHIN Studio\'s industrial architecture portfolio – warehouses, factories and large-scale industrial facilities engineered for efficiency and built to last in Bengaluru and Karnataka.',
    publisher: {
      '@type': 'LocalBusiness',
      name: 'ARCHIN Studio',
      url: BASE_URL,
    },
  },
];

const showcaseImages = [
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/c3a79995-a41d-4d20-8dae-0496def0f3d5_HEIF-Image.jpeg?v=7a961b9512ab5849f04963bd8a96c025',
  'https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/aee272710a405718ec4704e63095d91c.jpeg',
];

export default function IndustrialProjects() {
  return (
    <div className="min-h-screen bg-archin-black">
      <SEOMeta
        title="Industrial Architecture Projects | ARCHIN Studio Bengaluru"
        description="Explore ARCHIN Studio's industrial architecture portfolio – warehouses, factories and large-scale industrial facilities in Bengaluru, Karnataka."
        keywords="industrial architecture Bengaluru, warehouse design Bangalore, factory building architect Karnataka, industrial facility design"
        canonicalPath="/projects/industrial"
        schema={industrialSchema}
      />
      <Navbar />
      <main>
        <Hero />

        {/* Showcase Gallery */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-14 lg:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10 md:mb-16">
              <span className="label mb-4 block">Our Work</span>
              <p className="body-lg text-base md:text-xl">
                ARCHIN designs industrial facilities that balance structural integrity with
                operational efficiency. Our warehouses, factories and large-scale industrial
                complexes are engineered to meet demanding functional requirements while
                maintaining architectural quality and safety standards.
              </p>
            </div>

            <IndustrialShowcaseGallery images={showcaseImages} />
          </div>
        </section>

        {/* Studio Location Section */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-14 lg:py-24 bg-archin-cream">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-6 py-2 bg-archin-gold/15 border border-archin-gold/40 text-archin-gold font-body text-sm tracking-widest uppercase mb-6">
              Come See Us
            </span>
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-light text-archin-navy mb-6 tracking-wide">
              Visit Our Studio
            </h2>
            <p className="font-body text-base md:text-lg text-archin-navy/70 leading-relaxed max-w-xl mx-auto mb-10">
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
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-14 md:py-20 bg-archin-charcoal">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label mb-4 block">Start Your Project</span>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-light tracking-wide text-archin-cream mb-6">
              Ready to Build Your Industrial Facility?
            </h2>
            <p className="body-lg text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10">
              From warehouses to large-scale manufacturing plants, we engineer industrial
              spaces that are built for performance, safety and long-term durability.
            </p>
            <a href="/contact?service=Industrial+Architecture" className="btn-primary whitespace-nowrap inline-block cursor-pointer">
              Discuss Your Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
