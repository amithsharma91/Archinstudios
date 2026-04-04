import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Hero from './Hero';
import HomeStatsBar from './StatsBar';
import Intro from './Intro';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import Credentials from './Credentials';
import Testimonials from './Testimonials';
import ContactCTA from './ContactCTA';
import SEOMeta from '../../components/SEOMeta';

const BASE_URL = 'https://archinstudios.in';

const homeSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ARCHIN Studio',
    url: BASE_URL,
    description:
      'Award-winning architecture and interior design firm in Bengaluru with 19+ years of experience.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ARCHIN Studio',
    description:
      'Award-winning architecture and interior design firm in Bengaluru with 19+ years of experience across residential, commercial and institutional projects.',
    url: BASE_URL,
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '13.0858',
      longitude: '77.5970',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '₹₹₹',
    hasMap: 'https://maps.app.goo.gl/mFLegdoWRDERFPuVA',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '7',
      bestRating: '5',
    },
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-archin-cream font-body">
      <SEOMeta
        title="Best Architects &amp; Interior Designers | ARCHIN Studios"
        description="ARCHIN Studios – Award-winning architecture and interior design firm in Bengaluru. 19+ years transforming residential, commercial and institutional spaces across Karnataka."
        keywords="architecture firm Bengaluru, interior design Bengaluru, ARCHIN Studio, residential architecture Karnataka, commercial architect Yelahanka"
        canonicalPath="/"
        schema={homeSchema}
      />
      <Navbar />
      <main>
        <Hero />
        <HomeStatsBar />
        <Intro />
        <Services />
        <WhyChooseUs />
        <Credentials />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
