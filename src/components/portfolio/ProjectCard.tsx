import React from 'react';
import { ExternalLink } from 'lucide-react';

const KeywordTag = ({ text }: { text: string }) => {
  // Logic to highlight Parcours C competencies 
  const isPriority = ['gérer', 'conduire', 'collaborer', 'manage', 'lead' , 'collaborate'].includes(text.toLowerCase());
  
  // Use 'bg-primary' for priority items to match the rose theme 
  const baseClasses = "px-3 py-1 text-xs font-semibold rounded-full mr-2 mb-2 transition-colors";
  const colorClasses = isPriority 
    ? "bg-primary text-primary-foreground shadow-sm" // Highlights nicely in pink/rose
    : "bg-muted text-muted-foreground";

  return (
    <span className={`${baseClasses} ${colorClasses}`}>
      #{text}
    </span>
  );
};


const ProjectCard = ({ project, lang }: { project: any; lang: string }) => {
  return (
    <div className="h-full">
      <div className="flex flex-col h-full bg-card border border-border rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex flex-col p-6 h-full">            
            
            {/* --- HEADER --- */}
            <div className="mb-6">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mt-1">
                    {project.context} • {project.date}
                  </p>
                </div>
              </div>
            </div>

            {/* --- TAGS --- */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.keywords.map((tag: string, index: number) => (
                  <KeywordTag key={index} text={tag} />
                ))}
              </div>
            </div>

            {/* --- STAR CONTENT --- */}
            <div className="space-y-5 text-foreground flex-1">
              
              {/* Situation */}
              <div className="relative pl-4 border-l-2 border-muted">
                <span className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground block mb-1">
                  Situation
                </span>
                <p className="text-sm leading-relaxed opacity-90">
                  {project.star.situation}
                </p>
              </div>

              {/* Task */}
              <div className="relative pl-4 border-l-2 border-muted">
                <span className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground block mb-1">
                  {lang === 'fr' ? 'Tâche' : 'Task'}
                </span>
                <p className="text-sm leading-relaxed opacity-90">
                  {project.star.task}
                </p>
              </div>

              {/* Action */}
              <div className="relative pl-4 border-l-2 border-primary">
                <span className="text-xs font-extrabold uppercase tracking-wider text-primary block mb-1">
                  Action
                </span>
                <ul className="list-disc list-outside pl-4 space-y-1 text-sm leading-relaxed opacity-90">
                  {project.star.actions.map((action: string, i: number) => (
                    <li key={i}>{action}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Result Box */}
            <div className="result-box-forced mt-8 rounded-xl border-l-4 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                {/* Icon Circle */}
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                
                <span className="font-bold uppercase text-xs tracking-wider opacity-90">
                  {lang === 'fr' ? 'Résultat' : 'Result'}
                </span>
              </div> 
              
              <p className="text-sm font-medium leading-relaxed">
                {project.star.result}
              </p>
            </div>

            {/* --- LINKS --- */}
            {project.links && (
              <div className="mt-6 pt-4 border-t border-dashed border-border flex flex-wrap gap-4">
                {project.links.map((link: { url: string; label: string }, i: number) => (
                  <a
                    key={i} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="relative h-full min-h-[240px] w-full border-b md:border-b-0 md:border-r border-border/50">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;