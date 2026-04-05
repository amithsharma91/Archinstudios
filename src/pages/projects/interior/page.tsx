import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Hero from './Hero';
import ShowcaseGallery from './ShowcaseGallery';
import SEOMeta from '../../../components/SEOMeta';

const BASE_URL = 'https://archinstudios.in';

const interiorSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Interior Design Projects – ARCHIN Studio',
    url: `${BASE_URL}/projects/interior`,
    description:
      "Explore ARCHIN Studio's interior design portfolio – innovative and elegant interiors for homes, offices and commercial spaces in Bengaluru.",
    publisher: {
      '@type': 'LocalBusiness',
      name: 'ARCHIN Studio',
      url: BASE_URL,
    },
  },
];

const showcaseImages = [
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/be6ec83f-bb7f-429c-b59a-43ec68f37e85_IMG-20260404-WA0036.jpg?v=bc4dcdbc426aedfbe243117a819e8023',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/94678f09-e353-4cdc-936c-eae7ea394cd6_IMG-20260404-WA0035.jpg?v=7e7524e1cf0d0bc814238963f224a0a9',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/72aaf8e7-b088-4492-8e63-9703aa55f355_IMG-20260404-WA0037.jpg?v=f4e09253b7758fef8951b7002614b14e',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/7f4e86fb-e181-4953-8e18-a20128b055c5_IMG-20260404-WA0040.jpg?v=a7963b143651d31672a27ef0e71aca9e',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/19707ddb-e8dd-47af-aa0d-df04e15f759b_IMG-20260404-WA0038.jpg?v=8015c2e55a00b033deb53f482c9f1cc1',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/4725e1b9-cff4-461d-885b-44e8c2d846f9_IMG-20260404-WA0041.jpg?v=33d092946384679ab6f879aa82c0d4d1',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/0cb16195-bd5a-4f4b-9bc2-c8ffd1a58a64_IMG-20260404-WA0042.jpg?v=46bbe023465137b82b76750d04fe8be4',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/4131e466-cfb4-4b9c-987e-1f99dd82838f_IMG-20260404-WA0043.jpg?v=d5192294d22cf42b7a16070f616a7277',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/c5fe6545-ee6b-44a9-b86c-854750545714_IMG-20260404-WA0044.jpg?v=6d6617853d1370a60d1368fba2803ff5',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/193bab91-7732-4bad-a9bb-df21504d502c_IMG-20260404-WA0046.jpg?v=ae6b9c38df236b5002fd1bfc0d206f07',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/b93c8d85-3ed3-4846-9760-a72d01045f7e_IMG-20260404-WA0045.jpg?v=c8af51f931fddaf4f80e45096c7a9558',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/2c9ac7c6-832a-4f29-a934-2719c81de70f_IMG-20260404-WA0034.jpg?v=afdc427895721207eb514d946c6053ec',
  'https://storage.readdy-site.link/project_files/96a3b98c-9790-4aa6-b897-2e38de9e112e/d21679eb-faf4-4564-8774-50631999dc40_IMG-20260404-WA0033.jpg?v=ce1d5f248a25f56e5f65678861a720d1',
];

export default function InteriorProjects() {
  return (
    <div className="min-h-screen bg-archin-black">
      <SEOMeta
        title="Interior Design Projects | ARCHIN Studio Bengaluru"
        description="Explore ARCHIN Studio's interior design portfolio – innovative and elegant interiors for homes, offices and commercial spaces in Bengaluru, Karnataka."
        keywords="interior design Bengaluru, office interior Karnataka, home interiors Bangalore, luxury interior design"
        canonicalPath="/projects/interior"
        schema={interiorSchema}
      />
      <Navbar />
      <main>
        <Hero />

        {/* Showcase Gallery */}
        <section className="section-padding py-20 lg:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-16">
              <span className="label mb-4 block">Our Work</span>
              <p className="body-lg">
                Interior design is the soul of a space. We transform ordinary rooms into
                extraordinary experiences, curating every element to reflect the unique
                personality and lifestyle of those who live within.
              </p>
            </div>

            <ShowcaseGallery images={showcaseImages} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding py-20 bg-archin-charcoal">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label mb-4 block">Transform Your Space</span>
            <h2 className="heading-md text-archin-cream mb-6">
              Ready to Redefine Your Interior?
            </h2>
            <p className="body-lg max-w-2xl mx-auto mb-10">
              Let us help you create an interior that not only looks extraordinary but
              feels authentically you. Every detail matters.
            </p>
            <a href="/contact" className="btn-primary whitespace-nowrap inline-block">
              Start Your Transformation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
