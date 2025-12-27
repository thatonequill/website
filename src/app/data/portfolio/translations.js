// src/app/data/portfolio/translations.ts

export const translations = {
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      resume: "Resume",
      contact: "Contact Me",
      github: "GitHub"
    },
    hero: {
      badge: "Open to Work",
      role: "Student Developer",
      description: "Building scalable systems, optimizing algorithms, and crafting intuitive user interfaces. Passionate about clean code.",
    },
    resume: {
      title: "My Resume",
      subtitle: "An overview of my academic and professional journey.",
      download: "Download PDF",
      profile: {
        title: "Student Developer",
        location: "Nantes / Lannion, France",
      },
      sections: {
        languages: "Languages",
        softSkills: "Soft Skills",
        software: "Software",
        experience: "Professional Experience",
        education: "Education",
        programming: "Programming Languages",
        interests: "Interests"
      },
      competencyDetails: {
        conduire: { 
          title: "Lead", 
          desc: "Identify needs and steer projects",
          // ADDED:
          examples: [
            "Co-constructed a solution with 2 pilot agencies (Synergie).",
            "Wrote a complete Game Design Document to define MVP scope."
          ]
        },
        gerer: { 
          title: "Manage", 
          desc: "Manage project data and scope",
          examples: [
            "Agile project management (Scrum) and GitHub tracking.",
            "Designed modular architecture (Grid/Shards) for Godot game."
          ]
        }, 
        collaborer: { 
          title: "Collaborate", 
          desc: "Work effectively in a team",
          examples: [
            "Team collaboration on the university Marketplace project.",
            "Iterative development based on direct user feedback."
          ]
        },
        realiser: { 
          title: "Develop", 
          desc: "Design and develop applications",
          examples: [
            "Developed React Admin interface with WhatsApp Business API.",
            "Created a recursive Tic-Tac-Toe with AI in C."
          ]
        },
        optimiser: { 
          title: "Optimize", 
          desc: "Analyze and improve performance",
          examples: [
            "Implemented AI algorithms (Minimax) for game logic.",
            "Optimized UX via dimensional inventory system (Godot)."
          ]
        },
        administrer: { 
          title: "Administer", 
          desc: "Install and configure systems",
          examples: [
            "PostgreSQL database management for web platform.",
            "Version control and deployment management via Git/GitHub."
          ]
        }
      }
    },
    footer: {
      contact: "Get in Touch",
      openToWork : "Open to Work"
    }
  },
  fr: {
    nav: {
      projects: "Projets",
      skills: "Compétences",
      resume: "CV",
      contact: "Me Contacter",
      github: "GitHub"
    },
    hero: {
      badge: "En recherche de stage",
      role: "Étudiant Développeur",
      description: "Conception de systèmes évolutifs, optimisation d'algorithmes et création d'interfaces intuitives. Passionné par le code propre.",
    },
    resume: {
      title: "Mon Curriculum Vitae",
      subtitle: "Un aperçu de mon parcours académique et professionnel.",
      download: "Télécharger PDF",
      profile: {
        title: "Étudiant Développeur",
        location: "Nantes / Lannion, France",
      },
      sections: {
        languages: "Langues",
        softSkills: "Atouts",
        software: "Logiciels",
        experience: "Expériences Professionnelles",
        education: "Diplômes et Formations",
        programming: "Langages de Programmation",
        interests: "Centres d'intérêt"
      },
competencyDetails: {
        conduire: { 
          title: "Conduire", 
          desc: "Identifier les besoins et piloter le projet",
          // ADDED:
          examples: [
            "Co-construction d'une solution avec 2 agences pilotes (Synergie).",
            "Rédaction du GDD pour définir le scope MVP (aev.LastByte)."
          ]
        },
        gerer: { 
          title: "Gérer", 
          desc: "Gérer les données et le suivi de projet",
          examples: [
            "Gestion de projet Agile (Scrum) et suivi GitHub.",
            "Architecture modulaire (Grid/Shards) pour le jeu Godot."
          ]
        }, 
        collaborer: { 
          title: "Collaborer", 
          desc: "Travailler efficacement en équipe",
          examples: [
            "Travail en équipe sur le projet Marketplace.",
            "Intégration des retours utilisateurs en direct (Synergie)."
          ]
        },
        realiser: { 
          title: "Réaliser", 
          desc: "Concevoir et développer des applications",
          examples: [
            "Interface React Admin & API WhatsApp Business.",
            "Morpion récursif avec IA en C."
          ]
        },
        optimiser: { 
          title: "Optimiser", 
          desc: "Analyser et améliorer les performances",
          examples: [
            "Algorithmes IA (Minimax) pour le SuperTicTacToe.",
            "Système d'inventaire dimensionnel pour l'UX (Godot)."
          ]
        },
        administrer: { 
          title: "Administrer", 
          desc: "Installer et configurer des systèmes",
          examples: [
            "BDD PostgreSQL pour la plateforme d'offres.",
            "Gestion des versions via Git/GitHub."
          ]
        }
      }
    },
    footer: {
      contact: "Prenons Contact",
      openToWork : "Ouvert à des propositions de collaboration"
    }
  }
};