import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  location: string;
  modelImage: string;
  executedImage: string;
}

interface ProjectSectionProps {
  title: string;
  description: string;
  projects: Project[];
  viewAllLink: string;
  viewAllText: string;
  reversed?: boolean;
}

export default function ProjectSection({
  title,
  description,
  projects,
  viewAllLink,
  viewAllText,
  reversed = false,
}: ProjectSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section-padding py-10 md:py-20 lg:py-28 ${reversed ? 'bg-archin-charcoal' : 'bg-archin-black'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-8 md:mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="label mb-3 md:mb-4 block">{title}</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 md:gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading text-[28px] md:text-4xl lg:text-5xl font-light text-archin-cream tracking-wide mb-3 md:mb-4">{title}</h2>
              <p className="font-body text-[14px] md:text-base text-archin-grey leading-relaxed">{description}</p>
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div
          className={`w-full h-px bg-gradient-to-r from-archin-gold/50 via-archin-gold/20 to-transparent mb-8 md:mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transformOrigin: 'left' }}
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-12 mb-8 md:mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              modelImage={project.modelImage}
              executedImage={project.executedImage}
              title={project.title}
              location={project.location}
              delay={index * 200}
            />
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`flex justify-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link to={viewAllLink} className="btn-outline whitespace-nowrap group">
            <span className="flex items-center gap-3">
              {viewAllText}
              <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
