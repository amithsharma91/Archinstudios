import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  modelImage: string;
  executedImage: string;
  title: string;
  location?: string;
  delay?: number;
}

export default function ProjectCard({
  modelImage,
  executedImage,
  title,
  delay = 0,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Split Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-archin-charcoal mb-6">
        {/* Left Side - 3D Model */}
        <div
          className={`absolute left-0 top-0 h-full transition-all duration-500 ease-out ${
            isHovered ? 'w-1/3' : 'w-1/2'
          }`}
        >
          <img
            src={modelImage}
            alt={`${title} - Model`}
            className="w-full h-full object-cover"
          />
          {/* Divider Line */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-px bg-archin-gold/50 transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Right Side - Executed */}
        <div
          className={`absolute right-0 top-0 h-full transition-all duration-500 ease-out ${
            isHovered ? 'w-2/3' : 'w-1/2'
          }`}
        >
          <img
            src={executedImage}
            alt={`${title} - Executed`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-archin-black/40 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* View Project Button on Hover */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="px-6 py-3 bg-archin-gold text-archin-black text-sm tracking-wider uppercase font-medium">
            View Project
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-2">
        <h3 className="font-display text-xl md:text-2xl text-archin-cream group-hover:text-archin-gold transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
}
