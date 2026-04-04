import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ReviewsHero from './components/ReviewsHero';
import ReviewsIntro from './components/ReviewsIntro';
import ReviewsGrid from './components/ReviewsGrid';
import ReviewsCTA from './components/ReviewsCTA';
import ReviewsBottom from './components/ReviewsBottom';
import SEOMeta from '../../components/SEOMeta';

const BASE_URL = 'https://archinstudios.in';

const reviewsSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ARCHIN Studio',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '7',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Monica G J' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Every design feels tailor made for the client. ARCHIN blends modern aesthetics with Indian tradition creating spaces that are elegant and rich in character.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Adarsh Reddy' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'We consulted ARCHIN for our office interior and were extremely satisfied. The attention to detail was outstanding. Truly architecture by heart.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Chandana Boorsu' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Amazing experience with ARCHIN. Building design and interior execution were outstanding. Perfect use of every inch of space. Absolutely loved it.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Sagar' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Truly state of the art studio with exceptional design and aesthetic sensibility. Ideas were creative and pleasing. Strongly recommendable to anyone.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Dr Raghavendra' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'ARCHIN possesses amazing talent for translating vision into beautiful built spaces. Service quality is consistently excellent.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Manasa' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Absolutely fantastic design work from the ARCHIN team. Creativity and execution exceeded all our expectations completely.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Prithvi KM' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'One of the best architecture studios in Bangalore. Quality of work and professionalism sets them apart from the rest.',
      },
    ],
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-archin-cream">
      <SEOMeta
        title="ARCHIN Studio | 5-Star Rated Architects Bengaluru"
        description="Read 7 verified Google reviews from ARCHIN Studio clients. 5-star rated architecture and interior design firm in Bengaluru, Karnataka with decades of proven excellence."
        keywords="ARCHIN Studio reviews, architecture firm reviews Bengaluru, client testimonials architect Karnataka, Google reviews architects"
        canonicalPath="/reviews"
        schema={reviewsSchema}
      />
      <Navbar />
      <main>
        <ReviewsHero />
        <ReviewsIntro />
        <ReviewsGrid />
        <ReviewsCTA />
        <ReviewsBottom />
      </main>
      <Footer />
    </div>
  );
}
