import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;  // Optional: URL to an image
  githubUrl?: string; // Optional: Link to repo
  liveUrl?: string;   // Optional: Link to live demo
}

export default function Project({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  githubUrl, 
  liveUrl 
}: ProjectProps) {
  return (
    <div className="group border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-slate-900 flex flex-col h-full">
      
      {/* Image / Preview Area */}
      <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
             {title} Preview
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          
          <div className="flex gap-3">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="View Source"
              >
                <Github size={20} />
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-600 transition-colors"
                aria-label="View Live"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
          {description}
        </p>

        <div className="flex gap-2 flex-wrap mt-auto">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-medium rounded-full text-slate-700 dark:text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}