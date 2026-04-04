import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOMeta from '../../components/SEOMeta';
import Hero from './Hero';
import AcademicSection from './AcademicSection';
import RegistrationsSection from './RegistrationsSection';
import LegalSection from './LegalSection';
import WhyChooseSection from './WhyChooseSection';
import TrustStrip from './TrustStrip';
import CTASection from './CTASection';

const BASE_URL = 'https://archinstudios.in';

const credentialsSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Credentials & Trust – ARCHIN Architecture and Interior Studio',
    url: `${BASE_URL}/credentials`,
    description:
      'ARCHIN Studio professional credentials — Council of Architecture registered, IGBC Accredited, BMP approved, with Masters-level education from University of Leeds UK and 19+ years of architectural excellence in Bangalore.',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'ARCHIN Architecture and Interior Studio',
      description:
        'Licensed and certified architecture and interior design firm in Bengaluru. COA registered since 2007, IGBC Accredited Professional 2023, BMP approved with 19+ years of experience.',
      telephone: '+919980377877',
      email: 'Thearchinstudios@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Building No 21, ARCHIN Building, Nehru Nagar Main Road',
        addressLocality: 'Jakkur, Yelahanka',
        addressRegion: 'Karnataka',
        postalCode: '560064',
        addressCountry: 'IN',
      },
    },
  },
];

export default function CredentialsPage() {
  return (
    <div className="min-h-screen bg-archin-navy">
      <SEOMeta
        title="ARCHIN Credentials | COA Registered Architects"
        description="ARCHIN Studio credentials — COA Registered CA/2007/40394, IGBC Accredited Professional, BMP Approved. Principal Architect holds MS from University of Leeds UK with 19+ years in Bengaluru."
        keywords="COA registered architect Bengaluru, IGBC accredited architect, licensed architect Karnataka, ARCHIN credentials"
        canonicalPath="/credentials"
        schema={credentialsSchema}
      />
      <Navbar />
      <main>
        <Hero />
        <AcademicSection />
        <RegistrationsSection />
        <LegalSection />
        <WhyChooseSection />
        <TrustStrip />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
