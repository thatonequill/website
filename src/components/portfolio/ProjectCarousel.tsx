import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface ProjectCarouselProps {
  projects: any[];
  lang: 'en' | 'fr';
}

export default function ProjectCarousel({ projects, lang }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Safety check if no projects
  if (!projects || projects.length === 0) return null;

  const currentProject = projects[currentIndex];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Wait for exit animation, then switch
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 200); // Matches CSS duration
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      
      {/* Main Content Area */}
      <div className="relative min-h-[600px] flex items-stretch">
        
        {/* Animated Wrapper */}
        <div 
          className={`w-full transition-all duration-300 ease-in-out transform ${
            isAnimating ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          {/* We render just ONE card for performance */}
          <ProjectCard 
            key={currentProject.id} // Key forces React to remount/animate on change
            project={currentProject} 
            lang={lang} 
          />
        </div>

      </div>

      {/* --- Controls (Desktop: Sides, Mobile: Bottom) --- */}
      
      {/* Previous Button */}
      <button 
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 p-3 rounded-full bg-card border border-border shadow-lg text-foreground hover:text-primary hover:border-primary transition-all z-10 group"
        aria-label="Previous Project"
      >
        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
      </button>

      {/* Next Button */}
      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 p-3 rounded-full bg-card border border-border shadow-lg text-foreground hover:text-primary hover:border-primary transition-all z-10 group"
        aria-label="Next Project"
      >
        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                    setCurrentIndex(idx);
                    setIsAnimating(false);
                }, 200);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? "bg-primary w-8" 
                : "bg-border hover:bg-primary/50"
            }`}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>

      {/* Counter Badge */}
      <div className="absolute -top-12 right-0 bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-mono font-bold">
        {currentIndex + 1} / {projects.length}
      </div>

    </div>
  );
}