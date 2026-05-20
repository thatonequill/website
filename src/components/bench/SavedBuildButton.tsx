import Link from 'next/link';
import React from 'react';

export interface SavedBuildButtonProps {
  id: string;
  name: string;
  game: string;
  imageUrl: string;
  className?: string;
}

export function SavedBuildButton({
  id,
  name,
  game,
  imageUrl,
  className = '',
}: SavedBuildButtonProps) {
  const linkHref = id ? `/builds/${id}` : '#';

  return (
    <Link href={linkHref} className={`group block w-full max-w-md outline-none ${className}`}>
      {/* Slanted Container */}
      <div className="relative overflow-hidden rounded-lg -skew-x-12 bg-card text-card-foreground border border-border shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:border-primary group-active:scale-95 group-hover:shadow-primary/20">
        
        {/* Left Decorative Accent */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary transition-colors group-hover:bg-secondary" />

        {/* Counter-skewed Content Wrapper */}
        <div className="flex items-center justify-between skew-x-12 px-8 py-3">
          
          <div className="flex items-center gap-4">
            {/* Rounded Image */}
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-border bg-muted shadow-inner transition-colors group-hover:border-primary">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={name} 
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xl font-black text-muted-foreground">
                  {name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            {/* Text Information */}
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wide text-card-foreground transition-colors drop-shadow-sm group-hover:text-primary bench-font">
                {name}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {game}
              </span>
            </div>
          </div>

          {/* Right Arrow/Icon */}
          <div className="ml-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>

        </div>
      </div>
    </Link>
  );
}

export default SavedBuildButton;
