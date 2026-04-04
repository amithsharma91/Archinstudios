import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Hero from './Hero';
import ArchitectProfile from './ArchitectProfile';
import Education from './Education';
import StudioStory from './StudioStory';
import StatsBar from './StatsBar';
import CTASection from './CTASection';
import SEOMeta from '../../components/SEOMeta';

const BASE_URL = 'https://archinstudios.in';

const aboutSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About ARCHIN Studio',
    url: `${BASE_URL}/about`,
    description:
      'Learn about ARCHIN Studio – a team of Masters-level qualified architects with 19+ years of experience delivering exceptional architecture in Bengaluru.',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'ARCHIN Studio',
      foundingDate: '2007',
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

export default function About() {
  return (
    <div className="min-h-screen bg-archin-cream font-body">
      <SEOMeta
        title="ARCHIN Studio | Architects in Bengaluru Since 2007"
        description="Meet the team behind ARCHIN Studio. 19+ years of architectural excellence in Bengaluru. Masters-level qualified architects delivering innovative design solutions across Karnataka."
        keywords="about ARCHIN architects, architecture studio Bengaluru, experienced architects Karnataka, ARCHIN Studio team"
        canonicalPath="/about"
        schema={aboutSchema}
      />
      <Navbar />
      <main>
        <Hero />
        <ArchitectProfile />
        <Education />
        <StudioStory />
        <StatsBar />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
