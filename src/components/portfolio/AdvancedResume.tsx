import React from 'react';
import { 
  Download, User, Heart, Terminal, 
  MapPin, Mail, Phone, Link as LinkIcon,
  Code2, Database, Users, TrendingUp, Settings, Briefcase,
  GraduationCap, Palette
} from 'lucide-react';
import { translations } from '@/app/data/portfolio/translations';

interface AdvancedResumeProps {
  lang: 'en' | 'fr'; // Prop to control language
}

// Helper for the "Timeline" style used in Education
const TimelineItem = ({ title, place, period, desc }: any) => (
  <div className="relative pl-8 pb-8 border-l-2 border-muted last:pb-0 last:border-l-0">
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-card"></div>
    <h4 className="text-lg font-bold text-card-foreground">{title}</h4>
    <div className="text-sm font-semibold text-primary/80 mb-1">{period}</div>
    <div className="text-sm text-muted-foreground italic mb-2">{place}</div>
    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

// Helper for the Competency Cards
const CompetencyCard = ({ icon: Icon, title, desc, examples, isPriority }: any) => (
  <div className={`p-5 rounded-xl border transition-all hover:shadow-md ${
    isPriority 
      ? "bg-primary/5 border-primary/30" // Highlight Parcours C
      : "bg-card border-border"
  }`}>
    <div className="flex items-center gap-3 mb-3">
      <div className={`p-2 rounded-lg ${isPriority ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
        <Icon size={18} />
      </div>
      <div>
        <h4 className="font-bold text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
    <ul className="space-y-2">
      {examples.map((ex: string, i: number) => (
        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0"></span>
          {ex}
        </li>
      ))}
    </ul>
  </div>
);

export default function AdvancedResume({ lang }: AdvancedResumeProps) {
  const t = translations[lang].resume; // Shortcut to current lang data

  // --- MAPPING THE 6 COMPETENCIES ---
  // Now fetching 'examples' directly from the translation file 't'
  const competencies = [
    {
      id: 'conduire', // PARCOURS C
      icon: TrendingUp,
      title: t.competencyDetails.conduire.title,
      desc: t.competencyDetails.conduire.desc,
      examples: t.competencyDetails.conduire.examples, // <--- Linked here
      isPriority: true,
    },
    {
      id: 'gerer', // PARCOURS C
      icon: Settings,
      title: t.competencyDetails.gerer.title,
      desc: t.competencyDetails.gerer.desc,
      examples: t.competencyDetails.gerer.examples, // <--- Linked here
      isPriority: true,
    },
    {
      id: 'collaborer', // PARCOURS C
      icon: Users,
      title: t.competencyDetails.collaborer.title,
      desc: t.competencyDetails.collaborer.desc,
      examples: t.competencyDetails.collaborer.examples, // <--- Linked here
      isPriority: true,
    },
    {
      id: 'realiser',
      icon: Code2,
      title: t.competencyDetails.realiser.title,
      desc: t.competencyDetails.realiser.desc,
      examples: t.competencyDetails.realiser.examples, // <--- Linked here
      isPriority: false,
    },
    {
      id: 'optimiser',
      icon: TrendingUp,
      title: t.competencyDetails.optimiser.title,
      desc: t.competencyDetails.optimiser.desc,
      examples: t.competencyDetails.optimiser.examples, // <--- Linked here
      isPriority: false,
    },
    {
      id: 'administrer',
      icon: Database,
      title: t.competencyDetails.administrer.title,
      desc: t.competencyDetails.administrer.desc,
      examples: t.competencyDetails.administrer.examples, // <--- Linked here
      isPriority: false,
    }
  ];

  return (
    <section id="resume" className="py-20 max-w-6xl mx-auto px-4">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-foreground">{t.title}</h2>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/20">
          <Download size={18} />
          {t.download}
        </button>
      </div>

      {/* Main Card Container */}
      <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border grid grid-cols-1 lg:grid-cols-12 min-h-[1000px]">
        
        {/* --- LEFT SIDEBAR (Static Info) --- */}
        <div className="lg:col-span-4 bg-muted/30 p-8 border-r border-border flex flex-col gap-8">
          
          {/* Profile */}
          <div className="text-center lg:text-left">
            <div className="w-28 h-28 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-primary to-purple-600 mb-6 border-4 border-card shadow-md overflow-hidden relative">
               {/* Replace with actual <img> tag */}
               <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">PG</div>
            </div>
            <h1 className="text-2xl font-extrabold text-foreground leading-tight mb-2">
              Paul-Elouan <br/>
              <span className="text-primary">Guyard-Lecerf</span>
            </h1>
            <p className="text-base font-medium text-muted-foreground">
              {t.profile.title}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail size={16} className="text-primary" />
              <span>paulelouan.gl@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              <span>{t.profile.location}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone size={16} className="text-primary" />
              <span>+33 6 64 96 77 67</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <LinkIcon size={16} className="text-primary" />
              <a href="#" className="hover:text-primary truncate">guyardlecerf.carrd.co</a>
            </div>
          </div>

          <hr className="border-border" />

          {/* Languages */}
          <div>
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 uppercase text-xs tracking-wider">
              <User size={16} className="text-primary" /> {t.sections.languages}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Français</span>
                <span className="font-bold text-foreground">Natif</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Anglais</span>
                <span className="font-bold text-foreground">C1 / Fluent</span>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 uppercase text-xs tracking-wider">
              <Heart size={16} className="text-primary" /> {t.sections.softSkills}
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Curiosité", "Écoute", "Adaptation", "Créativité"].map(s => (
                <span key={s} className="px-3 py-1 bg-card border border-border rounded-full text-xs font-medium text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack (Compact) */}
          <div>
             <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 uppercase text-xs tracking-wider">
              <Code2 size={16} className="text-primary" /> {t.sections.programming}
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-muted-foreground">
               <span>Java / C</span>
               <span>Python</span>
               <span>PHP / SQL</span>
               <span>React / JS</span>
            </div>
          </div>

        </div>

        {/* --- RIGHT CONTENT (Competencies & Education) --- */}
        <div className="lg:col-span-8 p-8 md:p-12 space-y-12 bg-card">
          
          {/* SECTION 1: COMPETENCIES (The "Advanced" Part) */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-foreground">
                {t.sections.competencies}
              </h3>
            </div>

            {/* Grid for Competencies */}
            <div className="grid md:grid-cols-2 gap-4">
              {competencies.map((comp) => (
                <CompetencyCard key={comp.id} {...comp} />
              ))}
            </div>
          </div>

          {/* SECTION 2: EDUCATION */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-foreground">
                {t.sections.education}
              </h3>
            </div>

            <div className="space-y-2">
              <TimelineItem 
                title="BUT Informatique (3ème année)"
                place="IUT Lannion"
                period="2023 - Présent"
                desc="Parcours C : Administration, Gestion et Conduite de projets applicatifs. Développement web et logiciel."
              />
              <TimelineItem 
                title="Baccalauréat Général"
                place="Blanche de Castille, Nantes"
                period="2020 - 2023"
                desc="Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques). Mention Bien."
              />
            </div>
          </div>

          {/* SECTION 3: INTERESTS */}
          <div className="bg-muted/30 rounded-2xl p-6 border border-border flex gap-4 items-start">
             <Palette className="text-primary mt-1" size={20} />
             <div>
                <h4 className="font-bold text-foreground mb-1">{t.sections.interests}</h4>
                <p className="text-sm text-muted-foreground">
                   Programmation (Godot Engine), Origami (Art du pliage), Création Graphique.
                </p>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}