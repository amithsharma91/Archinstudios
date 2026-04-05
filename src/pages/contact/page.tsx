import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Hero from './Hero';
import ContactSection from './ContactSection';
import MapSection from './MapSection';
import SEOMeta from '../../components/SEOMeta';

const BASE_URL = 'https://archinstudios.in';

const contactSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact ARCHIN Studio',
    url: `${BASE_URL}/contact`,
    description:
      'Contact ARCHIN Studio at Building No 21, ARCHIN Building, Jakkur, Yelahanka, Bengaluru. Call +91 99803 77877 or +91 99808 18208 or email Thearchinstudios@gmail.com.',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'ARCHIN Studio',
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
    },
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-archin-cream font-body">
      <SEOMeta
        title="Contact ARCHIN Studio | Architects Bengaluru"
        description="Contact ARCHIN Studio at Building No 21, ARCHIN Building, Jakkur, Yelahanka, Bengaluru 560064. Call +91 99803 77877 or +91 99808 18208 or email Thearchinstudios@gmail.com."
        keywords="contact architects Bengaluru, architecture studio Yelahanka, ARCHIN Studio address, architect contact Bangalore 560064"
        canonicalPath="/contact"
        schema={contactSchema}
      />
      <Navbar />
      <main>
        <Hero />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
