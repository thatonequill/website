"use client";

import React, { useState } from 'react';
import { FileText, Award, ArrowDownCircle } from 'lucide-react';
import Resume from './Resume';            // Your existing Resume component
import AdvancedResume from './AdvancedResume'; // Your new AdvancedResume component

interface CVSectionProps {
  lang: 'en' | 'fr';
}

export default function CVSection({ lang }: CVSectionProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <section id="resume" className="py-20 max-w-6xl mx-auto px-4 overflow-hidden">
      
      {/* --- Header & Toggle Controls --- */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-1 gap-6">
        
        {/* Title Block */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 flex items-center justify-center md:justify-start gap-3">
            <FileText className="text-primary" />
            {lang === 'fr' ? 'Mon Curriculum Vitae' : 'My Resume'}
          </h2>
          <p className="text-muted-foreground">
            {lang === 'fr' 
              ? 'Basculer entre la version classique et la version compétences.' 
              : 'Toggle between classic view and competency breakdown.'}
          </p>
        </div>

        {/* The Toggle Switch */}
        <div className="flex items-center gap-4 bg-card border border-border p-1.5 rounded-full shadow-sm">
          {/* Classic Option */}
          <button
            onClick={() => setShowAdvanced(false)}
            className={`
              px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
              ${!showAdvanced 
                ? 'bg-primary text-white shadow-md' 
                : 'text-muted-foreground hover:bg-muted'}
            `}
          >
            <FileText size={16} />
            {lang === 'fr' ? 'Classique' : 'Classic'}
          </button>

          {/* Advanced Option */}
          <button
            onClick={() => setShowAdvanced(true)}
            className={`
              px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
              ${showAdvanced 
                ? 'bg-primary text-white shadow-md' 
                : 'text-muted-foreground hover:bg-muted'}
            `}
          >
            <Award size={16} />
            {lang === 'fr' ? 'Compétences' : 'Competency'}
          </button>
        </div>
      </div>

      {/* --- The Sliding Stack Container --- */}
      {/* We use CSS Grid to stack items on top of each other perfectly */}
      <div className="relative grid grid-cols-1">
        
        {/* 1. BOTTOM LAYER: Advanced Resume (The one "hiding" behind) */}
        {/* It occupies the same grid cell (col-start-1 row-start-1) */}
        <div className="col-start-1 row-start-1 z-0 transition-opacity duration-700 ease-in-out">
           {/* We add a little opacity fade to make it look nicer when revealed */}
           <div className={`${showAdvanced ? 'opacity-100' : 'opacity-40'} transition-opacity duration-700`}>
             {/* <AdvancedResume lang={lang} />  */}
           </div>
        </div>

        {/* 2. TOP LAYER: Standard Resume (The one that slides) */}
        {/* It occupies the same grid cell, sits on top (z-10), and has a background to hide the bottom one */}
        <div 
          className={`
            col-start-1 row-start-1 z-10 bg-background transition-transform duration-700 ease-in-out transform
            ${showAdvanced ? 'translate-y-[110%]' : 'translate-y-0'}
          `}
        >
          <Resume lang={lang} />
          
          {/* Visual Hint: A little arrow at the bottom suggesting there is something "underneath" */}
          {!showAdvanced && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer text-muted-foreground" onClick={() => setShowAdvanced(true)}>
              <div className="flex flex-col items-center text-xs font-medium animate-bounce">
                <span>Voir version compétences</span>
                <ArrowDownCircle size={20} />
              </div>
            </div>
          )}
        </div>

      </div>

    </section>
  );
}