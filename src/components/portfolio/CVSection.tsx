"use client";

import React, { useState } from 'react';
import { FileText, Award, ArrowDownCircle } from 'lucide-react';
import Resume from './Resume';

interface CVSectionProps {
  lang: 'en' | 'fr';
}

export default function CVSection({ lang }: CVSectionProps) {
  const [showDiploma, setShowDiploma] = useState(false);

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
              ? 'Basculer entre la version classique et mes diplômes.' 
              : 'Toggle between classic view and diplomas.'}
          </p>
        </div>

        {/* The Toggle Switch */}
        <div className="flex items-center gap-4 bg-card border border-border p-1.5 rounded-full shadow-sm">
          {/* Classic Option */}
          <button
            onClick={() => setShowDiploma(false)}
            className={`
              px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
              ${!showDiploma 
                ? 'bg-primary text-white shadow-md' 
                : 'text-muted-foreground hover:bg-muted'}
            `}
          >
            <FileText size={16} />
            {lang === 'fr' ? 'Classique' : 'Classic'}
          </button>

          {/* Diploma Option */}
          <button
            onClick={() => setShowDiploma(true)}
            className={`
              px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
              ${showDiploma 
                ? 'bg-primary text-white shadow-md' 
                : 'text-muted-foreground hover:bg-muted'}
            `}
          >
            <Award size={16} />
            {lang === 'fr' ? 'Diplômes' : 'Diplomas'}
          </button>
        </div>
      </div>

      {/* --- The Sliding Stack Container --- */}
      <div className="relative grid grid-cols-1">
        <div className="col-start-1 row-start-1 z-0 transition-opacity duration-700 ease-in-out">
          <div className={`${showDiploma ? 'opacity-100' : 'opacity-40'} transition-opacity duration-700 flex flex-col items-center gap-4`}>
            <img
              src="/images/dut.avif" 
              alt="DUT Diploma"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl my-12"
            />
            <a 
              href="/images/dut.png" 
              download="DUT_Paul-Elouan_Guyard-Lecerf.png"
            >
              <button className="bg-primary text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                <ArrowDownCircle size={18} />
                {lang === 'fr' ? 'Télécharger' : 'Download'}
              </button>
            </a>
          </div>
        </div>

        <div 
          className={`
            col-start-1 row-start-1 z-10 bg-background transition-transform duration-700 ease-in-out transform
            ${showDiploma ? 'translate-y-[110%]' : 'translate-y-0'}
          `}
        >
          <Resume lang={lang} />
        </div>
      </div>
    </section>
  );
}