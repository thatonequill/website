import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  User,
  Heart,
  Code,
  Terminal,
  Download
} from 'lucide-react';

// --- Types ---
type Language = 'en' | 'fr';

interface ResumeProps {
  lang: Language;
}

// --- Data & Translations ---
const resumeData = {
  fr: {
    titles: {
      main: "Mon Curriculum Vitae",
      subtitle: "Un aperçu de mon parcours académique et professionnel.",
      download: "Télécharger PDF",
      languages: "Langues",
      softSkills: "Atouts",
      software: "Logiciels",
      experience: "Expériences Professionnelles",
      education: "Diplômes et Formations",
      programming: "Langages de Programmation",
      interests: "Centres d'intérêt"
    },
    profile: {
      role: "Étudiant Développeur",
      location: "Nantes / Lannion, France",
    },
    languages: [
      { name: "Français", level: "Natif" },
      { name: "Anglais", level: "Courant" }
    ],
    softSkills: ["Curiosité intellectuelle", "Sens de l'écoute", "Adaptation", "Créativité"],
    software: [
      { name: "VSCode", detail: "Configuration avancée" },
      { name: "GIMP", detail: "Création graphique" },
      { name: "Office", detail: "Excel, Word, PowerPoint" },
      { name: "Godot", detail: "Game Engine" }
    ],
    experience: [
      {
        role: "Développeur Stagiaire",
        company: "Synergie",
        location: "Orvault, France",
        period: "Juin 2025 - Août 2025",
        description: "Développement d'une solution (React Admin / WhatsApp API) pour la branche Care afin d'accélérer le placement des intérimaires. Co-construction avec deux agences pilotes pour automatiser les contacts, réduisant ainsi la perte de contrats face à la concurrence sur les missions urgentes."
      },
      {
        role: "Assistant Juridique",
        company: "Synergie",
        location: "Orvault, France",
        period: "Juillet 2024 - Août 2024",
        description: "Assistant au sein de l'équipe juridique de Synergie Orvault. Traitement et gestion des tickets concernant les intérimaires, nécessitant rigueur et confidentialité."
      },
      {
        role: "Administrateur Note de Frais",
        company: "Synergie",
        location: "Orvault, France",
        period: "Juillet 2023 - Août 2023",
        description: "Chargé de vérifier et de corriger si nécessaire les notes de frais des employés. Utilisation intensive d'Excel et des outils internes de comptabilité."
      }
    ],
    education: [
      {
        role: "BUT Informatique (3ème année)",
        company: "IUT Lannion",
        location: "Lannion, France",
        period: "Depuis Octobre 2023",
        description: "Parcours Réalisation d'applications : conception, développement, validation."
      },
      {
        role: "Baccalauréat Général",
        company: "Blanche de Castille",
        location: "Nantes, France",
        period: "Obtenu en Juillet 2023",
        description: "Spécialités : Mathématiques et NSI (Numérique et Sciences Informatiques). Mention Bien."
      }
    ],
    skillLevels: {
      advanced: "Avancé",
      intermediate: "Intermédiaire",
      beginner: "Débutant"
    },
    interests: <>Passionné par la <strong>programmation</strong> et le développement de jeux vidéo (Godot). Pratique de l'<strong>Origami</strong> (art du pliage de papier) demandant patience et précision. Intérêt pour la <strong>création graphique</strong> et le design UI.</>
  },
  en: {
    titles: {
      main: "My Resume",
      subtitle: "An overview of my academic and professional journey.",
      download: "Download PDF",
      languages: "Languages",
      softSkills: "Soft Skills",
      software: "Software",
      experience: "Professional Experience",
      education: "Education",
      programming: "Programming Languages",
      interests: "Interests"
    },
    profile: {
      role: "Student Developer",
      location: "Nantes / Lannion, France",
    },
    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "Fluent" }
    ],
    softSkills: ["Intellectual Curiosity", "Active Listening", "Adaptability", "Creativity"],
    software: [
      { name: "VSCode", detail: "Advanced Configuration" },
      { name: "GIMP", detail: "Graphic Creation" },
      { name: "Office", detail: "Excel, Word, PowerPoint" },
      { name: "Godot", detail: "Game Engine" }
    ],
    experience: [
      {
        role: "Intern Developer",
        company: "Synergie",
        location: "Orvault, France",
        period: "June 2025 - Aug 2025",
        description: "Developed a solution (React Admin / WhatsApp API) for the Care branch to accelerate temporary worker placement. Co-constructed with two pilot agencies to automate contacts, reducing contract loss against competitors on urgent missions."
      },
      {
        role: "Legal Assistant",
        company: "Synergie",
        location: "Orvault, France",
        period: "July 2024 - Aug 2024",
        description: "Assistant within the Synergie Orvault legal team. Processing and managing tickets regarding temporary workers, requiring rigor and confidentiality."
      },
      {
        role: "Expense Report Administrator",
        company: "Synergie",
        location: "Orvault, France",
        period: "July 2023 - Aug 2023",
        description: "In charge of verifying and correcting employee expense reports. Intensive use of Excel and internal accounting tools."
      }
    ],
    education: [
      {
        role: "BUT Computer Science (3rd Year)",
        company: "IUT Lannion",
        location: "Lannion, France",
        period: "Since October 2023",
        description: "Application Development Track: design, development, validation."
      },
      {
        role: "General Baccalaureate",
        company: "Blanche de Castille",
        location: "Nantes, France",
        period: "Obtained July 2023",
        description: "Specialties: Mathematics and CS (Computer Science). With Honors."
      }
    ],
    skillLevels: {
      advanced: "Advanced",
      intermediate: "Intermediate",
      beginner: "Beginner"
    },
    interests: <>Passionate about <strong>programming</strong> and video game development (Godot). I practice <strong>Origami</strong> (paper folding art) requiring patience and precision. Interest in <strong>graphic creation</strong> and UI design.</>
  }
};

// --- Helper Components ---

const SectionTitle = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 rounded-lg bg-primary/10 text-primary">
      <Icon size={20} />
    </div>
    <h3 className="text-xl font-bold uppercase tracking-wide text-foreground">
      {title}
    </h3>
  </div>
);

const TimelineItem = ({ 
  role, 
  company, 
  period, 
  location, 
  description 
}: { 
  role: string, 
  company: string, 
  period: string, 
  location: string, 
  description?: string 
}) => (
  <div className="relative pl-8 pb-8 border-l-2 border-muted last:pb-0 last:border-l-0">
    {/* Dot */}
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-card"></div>
    
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
      <h4 className="text-lg font-bold text-card-foreground">{role}</h4>
      <span className="text-sm font-medium text-primary/80 bg-primary/5 px-2 py-0.5 rounded-md">
        {period}
      </span>
    </div>
    
    <div className="text-sm text-muted-foreground font-semibold mb-2">
      {company} • {location}
    </div>
    
    {description && (
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

const SkillBar = ({ label, level, width }: { label: string, level?: string, width?: number}) => (
  <div className="mb-3">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-card-foreground">{label}</span>
      {level && <span className="text-xs text-muted-foreground">{level}</span>}
    </div>
    <div className="w-full bg-muted rounded-full h-2">
      <div className="bg-primary h-2 rounded-full opacity-80" style={{ width: width ? `${width}%` : '50%'}}></div>
    </div>
  </div>
);

// --- Main CV Component ---

export default function Resume({ lang = 'en' }: ResumeProps) {
  const content = resumeData[lang];

  return (
    <section id="resume" className="py-20 max-w-6xl mx-auto px-4">
      
      {/* Header */}
      {/* <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">{content.titles.main}</h2>
          <p className="text-muted-foreground">
            {content.titles.subtitle}
          </p>
        </div>
        <button className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/20">
          <Download size={18} />
          {content.titles.download}
        </button> 
      </div> */}

      {/* CV Paper Container */}
      <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border grid grid-cols-1 lg:grid-cols-12 min-h-[1000px]">
        
        {/* --- LEFT COLUMN (Sidebar) --- */}
        <div className="lg:col-span-4 bg-muted/30 p-8 border-r border-border">
          
          {/* Profile Header */}
          <div className="text-center lg:text-left mb-10">
            {/* Placeholder for Photo */}
            <div className="w-32 h-32 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-primary to-purple-600 mb-6 border-4 border-card shadow-md flex items-center justify-center">
                <span className="text-white text-3xl font-bold">PG</span>
            </div>
            <h1 className="text-3xl font-extrabold text-foreground leading-tight mb-2">
              Paul-Elouan <br/>
              <span className="text-primary">Guyard-Lecerf</span>
            </h1>
            <p className="text-lg font-medium text-muted-foreground">
              {content.profile.role}
            </p>
          </div>

          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:paulelouan.guyardlecerf@proton.me" className="hover:text-primary transition-colors">
                  paulelouan.guyardlecerf@proton.me
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>{content.profile.location}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+33 6 64 96 77 67</span>
              </div>
            </div>

            <hr className="border-border" />

            {/* Languages */}
            <div>
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <User size={18} className="text-primary" /> {content.titles.languages}
              </h3>
              <div className="space-y-3">
                {content.languages.map((l, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-muted-foreground">{l.name}</span>
                    <span className="font-semibold text-foreground">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Atouts / Soft Skills */}
            <div>
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart size={18} className="text-primary" /> {content.titles.softSkills}
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.softSkills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-card border border-border rounded-full text-xs font-medium text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Logiciels */}
            <div>
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Terminal size={18} className="text-primary" /> {content.titles.software}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {content.software.map((sw, i) => (
                  <li key={i}><strong className="text-foreground">{sw.name}</strong> : {sw.detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN (Main Content) --- */}
        <div className="lg:col-span-8 p-8 md:p-12 space-y-12">
          
          {/* Experience Section */}
          <div>
            <SectionTitle icon={Briefcase} title={content.titles.experience} />
            <div className="space-y-2">
              {content.experience.map((job, index) => (
                <TimelineItem 
                  key={index}
                  role={job.role}
                  company={job.company}
                  location={job.location}
                  period={job.period}
                  description={job.description}
                />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <SectionTitle icon={GraduationCap} title={content.titles.education} />
            <div className="space-y-2">
              {content.education.map((edu, index) => (
                <TimelineItem 
                  key={index}
                  role={edu.role}
                  company={edu.company}
                  location={edu.location}
                  period={edu.period}
                  description={edu.description}
                />
              ))}
            </div>
          </div>

           {/* Coding Skills Section */}
           <div>
            <SectionTitle icon={Code} title={content.titles.programming} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <SkillBar label="C / Java" level={content.skillLevels.advanced} width={75} />
                <SkillBar label="Python" level={content.skillLevels.advanced} width={85}/>
                <SkillBar label="PostgreSQL" level={content.skillLevels.advanced} width={80} />
                <SkillBar label="Bash / Linux" level={content.skillLevels.advanced} width={90} />
              </div>
              <div>
                <SkillBar label="JavaScript / React" level={content.skillLevels.intermediate} width={70} />
                <SkillBar label="Prisma / MongoDB" level={content.skillLevels.beginner} width={35} />
                <SkillBar label="HTML / CSS" level={content.skillLevels.advanced} width={65} />
                <SkillBar label="PHP" level={content.skillLevels.intermediate} width={55} />
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="bg-muted/30 rounded-2xl p-6 border border-border">
            <h3 className="font-bold text-foreground mb-3">{content.titles.interests}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {content.interests}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}