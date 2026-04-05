import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Hero from './Hero';
import ProjectSection from './ProjectSection';
import { projectCategories } from '../../mocks/projects';
import SEOMeta from '../../components/SEOMeta';

const BASE_URL = 'https://archinstudios.in';

const projectsSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Architecture Projects Portfolio – ARCHIN Studio',
    url: `${BASE_URL}/projects`,
    description:
      'Explore ARCHIN Studio\'s diverse portfolio of residential, commercial and institutional architecture projects across Bengaluru and Karnataka.',
    publisher: {
      '@type': 'LocalBusiness',
      name: 'ARCHIN Studio',
      url: BASE_URL,
    },
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-archin-black">
      <SEOMeta
        title="Architecture Projects Portfolio | ARCHIN Studio Bengaluru"
        description="Explore ARCHIN Studio's portfolio of residential, commercial and institutional architecture projects in Bengaluru. 200+ successful projects delivered across Karnataka."
        keywords="architecture projects Bengaluru, residential design portfolio, commercial architecture Karnataka, institutional projects Bangalore"
        canonicalPath="/projects"
        schema={projectsSchema}
      />
      <Navbar />
      <main>
        <Hero />
        {projectCategories.map((category, index) => (
          <ProjectSection
            key={category.id}
            title={category.title}
            description={category.description}
            projects={category.projects}
            viewAllLink={category.viewAllLink}
            viewAllText={category.viewAllText}
            reversed={index % 2 === 1}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}