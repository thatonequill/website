// data/projects.js

import { title } from "node:process";

export const projects = [

];

// src/app/data/portfolio/projects.js

const projectsFr = [
	{
		id: "whatsapp-crm-synergie", // Unique ID
		title: "Optimisation de la communication intérimaire",
		context: "Stage - Synergie", 
		date: "Juin 2025 - Août 2025 (12 semaines)",
		// Keywords mixing technical skills with Parcours C specific skills
		keywords: ["Réaliser", "Optimiser", "Conduire", "React Admin", "API Rest"],
		star: {
			situation: "La branche Care (Secteur Médical) de Synergie peinait à contacter rapidement les intérimaires pour des missions urgentes. Dans le secteur médical, ces délais de communication retardaient l'envoi de personnel critique sur le terrain, perdant des contrats aux compétiteur.",
			task: "Mon objectif était de fluidifier le processus d'attribution des missions en réduisant le temps de contact entre l'agence et les intérimaires.",
			actions: [
			"Co-construction de la solution en travaillant main dans la main avec deux agences pilotes pour définir les fonctionnalités critiques.",
			"Développement de l'interface sous React Admin en itérant selon les retours directs des utilisateurs finaux.",
			"Intégration de l'API WhatsApp Business pour automatiser et accélérer les notifications de mission."
			],
			result: "Déploiement d'une solution permettant une communication instantanée. Accélération significative du processus de placement des intérimaires sur les missions urgentes."
		},
        imageUrl: [
            "/images/synergie.jpg"
        ],
		links: [
		]
	},
	{
		id: "super-tictactoe-c",
		title: "Super Tic-Tac-Toe & IA Algorithmique",
		context: "Projet Personnel (Autonomie)", 
		date: "Fin 2023 - Début 2024",
		keywords: ["Optimiser", "Gérer", "Langage C", "Algorithmique", "Intelligence Artificielle", "Git/GitHub"],
		star: {
			situation: "En parallèle des cours de 1ère année, je souhaitais dépasser le cadre scolaire en réalisant un défi algorithmique complexe : un Morpion récursif (Super Tic-Tac-Toe) jouable dans le terminal.",
			task: "Concevoir un moteur de jeu performant en C et implémenter une Intelligence Artificielle adaptable selon le niveau du joueur.",
			actions: [
			"Développement d'une IA à 3 niveaux : 'Facile' (RNG), 'Difficile' (Algorithme de blocage et stratégie) et 'Moyen' (Équilibrage dynamique entre les deux précédents).",
			"Gestion du code source et des versions via GitHub pour assurer la traçabilité du développement.",
			"Ajustement des règles du jeu (reset des grilles en cas d'égalité) suite à des phases de test, afin d'éviter les situations de blocage et améliorer l'expérience utilisateur.",
			"Création d'une interface en ASCII Art optimisée pour la lisibilité dans le terminal."
			],
			result: "Jeu fonctionnel et fluide, disposant d'une IA challengeante. Le projet démontre une maîtrise de la gestion de la mémoire en C et une capacité à mener un projet technique de A à Z."
		},
		links: [
			{ label: "Dépôt GitHub du projet", url: "https://github.com/thatonequill/SuperTicTacToe" },
		]
	},
	{
		id: "aev-lastbyte-godot",
		title: "aev.LastByte - Action-RPG Hybride",
		context: "Projet Personnel - Godot Engine (En cours)", 
		date: "2024 - Présent",
		// "Conduire" is the main focus here: You are the Game Director defining the rules.
		// "Gérer" applies to the modular structure (Shards/Nodes).
		keywords: ["Conduire", "Gérer", "Game Design", "Godot", "UX Design", "World Building"],
		star: {
			situation: "Développement d'un RPG complexe combinant narration, combat au tour par tour et phases de parkour dans un univers 'Futuristic/Glitch' (Glasspace & Meatspace).",
			task: "Structurer le Game Design pour rendre le projet réalisable (MVP) tout en définissant une identité artistique forte et des mécaniques de jeu profondes.",
			actions: [
			"Rédaction d'un Game Design Document (GDD) complet définissant les factions (Aevum/Verdarch), le système de combat élémentaire ('Signatures') et la boucle de gameplay.",
			"Conception d'une architecture de carte modulaire ('The Grid' divisée en 'Shards' et 'Nodes') pour éviter la génération procédurale et maîtriser le flow du joueur.",
			"Création d'une identité visuelle et logique unique via un système de 'File Extensions' (ex: .echo, .frx) pour guider le joueur sans UI invasive (UX/UI).",
			"Optimisation de l'expérience utilisateur via le système de 'Dimensional Storage' pour résoudre les problèmes classiques de gestion d'inventaire ('Tetris')."
			],
			result: "Documentation technique et créative finalisée servant de feuille de route claire. Prototype en cours de développement sous Godot avec les mécaniques de base (Exploration/Combat)."
		},
		links: [
			{ label: "Dépôt GitHub du projet", url: "https://github.com/thatonequill/aev-LastByte" }
		]
	},
	{
		id: "marketplace-bretagne-php",
		title: "Plateforme d'Offres Touristiques & Locales",
		context: "Projet Universitaire (Équipe de 6 personnes)", // Replace X with team size
		date: "2024 - 2025",
		// "Collaborer" is the star here due to Scrum/GitHub
		keywords: ["Collaborer", "Gérer", "Méthode Scrum", "PHP/PostgreSQL", "Full Stack"],
		star: {
			situation: "Dans le cadre d'une SAE de 2ème année, nous devions développer une plateforme web dynamique permettant la mise en relation entre des professionnels bretons et des visiteurs.",
			task: "Concevoir une application avec deux espaces distincts (Visiteur/Pro) et gérer le développement en équipe agile pour livrer des fonctionnalités complexes (CRUD, avis, gestion de visibilité).",
			actions: [
			"Application de la méthode Scrum pour la gestion de projet : découpage en sprints, daily meetings et utilisation de GitHub pour la fusion du code en équipe.",
			"Développement de l'espace 'Professionnel' permettant la création, la suppression et la mise hors-ligne ('soft delete') des offres pour gérer leur visibilité publique.",
			"Conception de la base de données PostgreSQL pour gérer les relations entre utilisateurs, offres et le système de notation/avis.",
			"Gestion des conflits de versions et revue de code (Code Review) pour assurer la qualité du rendu final."
			],
			result: "Plateforme fonctionnelle permettant aux professionnels de gérer leur activité en autonomie et aux visiteurs de noter les expériences. Projet livré en respectant les cérémonies agiles."
		},
		links: [
			{ label: "Dépôt GitHub du projet", url: "https://github.com/ArianeGL/c1.2-srfc" },
		]
	},
	{
        id: "website-react-prisma",
        title: "Portfolio Personnel & Theorycrafter",
        context: "Projet Personnel (Autonomie)",
        date: "Fin 2025 - Présent",
        // Mots-clés valorisant la stack technique et les compétences BUT
        keywords: ["Réaliser", "Optimiser", "React", "Prisma", "Full Stack", "Algorithmique"],
        star: {
            situation: "Dans le cadre de ma 3ème année de BUT, je devais réaliser un portfolio professionnel. Pour dépasser le simple site vitrine, j'ai choisi d'intégrer un défi technique personnel : un outil de 'Theorycrafting' pour un jeu vidéo, permettant de noter la qualité d'un équipement.",
            task: "Concevoir une application Full Stack remplissant deux objectifs : présenter mon profil professionnel et héberger un moteur de calcul complexe pour évaluer et classer les personnages des utilisateurs.",
            actions: [
                "Modélisation de la base de données avec Prisma (ORM) pour gérer les relations entre utilisateurs, équipements et statistiques (Compétence 3 : Administrer).",
                "Développement d'un algorithme de 'scoring' comparant les statistiques de l'utilisateur à un modèle 'théorique parfait' pour attribuer un rang de performance (Compétence 2 : Optimiser).",
                "Création d'une interface React dynamique permettant la saisie et la visualisation des progrès en temps réel.",
                "Intégration de la section Portfolio pour répondre aux critères d'évaluation du BUT."
            ],
            result: "Livraison d'une plateforme unique qui valide les attendus académiques tout en prouvant ma capacité à gérer des logiques métiers complexes (calculs, BDD) au sein d'un projet personnel."
        },
        links: [
            { label: "Dépôt GitHub", url: "https://github.com/..." },
            { label: "Site en ligne", url: "https://..." }
        ]
    }
];

const projectsEn = [
    {
        id: "whatsapp-crm-synergie", // Unique ID
        title: "Temp Staffing Communication Optimization",
        context: "Internship - Synergie", 
        date: "June 2025 - August 2025 (12 weeks)",
        // Keywords mixing technical skills with Parcours C specific skills
        keywords: ["Build", "Optimize", "Lead", "React Admin", "API Rest"],
        star: {
            situation: "Synergie's Care branch (Medical Sector) struggled to contact temporary workers quickly for urgent missions. In the medical field, these communication delays slowed down the deployment of critical personnel, leading to lost contracts against competitors.",
            task: "My goal was to streamline the mission assignment process by drastically reducing the contact time between the agency and the temporary workers.",
            actions: [
            "Co-constructed the solution by working closely with two pilot agencies to define critical features.",
            "Developed the interface using React Admin, iterating based on direct feedback from end-users.",
            "Integrated the WhatsApp Business API to automate and accelerate mission notifications."
            ],
            result: "Deployed a solution enabling instant communication. Significantly accelerated the placement process for temporary workers on urgent missions."
        },
        imageUrl: [
            "/images/synergie.jpg"
        ],
        links: [
        ]
    },
    {
        id: "super-tictactoe-c",
        title: "Super Tic-Tac-Toe & Algorithmic AI",
        context: "Personal Project (Autonomous)", 
        date: "Late 2023 - Early 2024",
        keywords: ["Optimize", "Manage", "C Language", "Algorithms", "Artificial Intelligence", "Git/GitHub"],
        star: {
            situation: "Alongside my 1st-year coursework, I wanted to go beyond the academic framework by creating a complex algorithmic challenge: a Recursive Tic-Tac-Toe playable in the terminal.",
            task: "Design a high-performance game engine in C and implement an Artificial Intelligence adaptable to the player's level.",
            actions: [
            "Developed a 3-level AI: 'Easy' (RNG), 'Hard' (Blocking algorithms and strategy), and 'Medium' (Dynamic balancing between the two).",
            "Managed source code and versioning via GitHub to ensure development traceability.",
            "Adjusted game rules (grid resets on draws) following testing phases to avoid deadlocks and improve the user experience.",
            "Created an ASCII Art interface optimized for readability in the terminal."
            ],
            result: "Functional and fluid game featuring a challenging AI. The project demonstrates mastery of memory management in C and the ability to lead a technical project from A to Z."
        },
        links: [
            { label: "Project GitHub Repository", url: "https://github.com/thatonequill/SuperTicTacToe" },
        ]
    },
    {
        id: "aev-lastbyte-godot",
        title: "aev.LastByte - Hybrid Action-RPG",
        context: "Personal Project - Godot Engine (Ongoing)", 
        date: "2024 - Present",
        keywords: ["Lead", "Manage", "Game Design", "Godot", "UX Design", "World Building"],
        star: {
            situation: "Development of a complex RPG combining narrative, turn-based combat, and parkour phases in a 'Futuristic/Glitch' universe (Glasspace & Meatspace).",
            task: "Structure the Game Design to make the project feasible (MVP) while defining a strong artistic identity and deep game mechanics.",
            actions: [
            "Wrote a complete Game Design Document (GDD) defining factions (Aevum/Verdarch), the elemental combat system ('Signatures'), and the gameplay loop.",
            "Designed a modular map architecture ('The Grid' divided into 'Shards' and 'Nodes') to avoid procedural generation and control the player flow.",
            "Created a unique visual and logical identity via a 'File Extensions' system (e.g., .echo, .frx) to guide the player without invasive UI (UX/UI).",
            "Optimized user experience via the 'Dimensional Storage' system to solve classic inventory management issues ('Tetris')."
            ],
            result: "Finalized technical and creative documentation serving as a clear roadmap. Prototype currently under development in Godot with basic mechanics (Exploration/Combat)."
        },
        links: [
            { label: "Project GitHub Repository", url: "https://github.com/thatonequill/aev-LastByte" }
        ]
    },
    {
        id: "marketplace-bretagne-php",
        title: "Local Tourism Offers Platform",
        context: "University Project (Team of 6)", 
        date: "2024 - 2025",
        keywords: ["Collaborate", "Manage", "Scrum Method", "PHP/PostgreSQL", "Full Stack"],
        star: {
            situation: "As part of a 2nd-year project, we had to develop a dynamic web platform connecting Breton professionals with visitors.",
            task: "Design an application with two distinct spaces (Visitor/Pro) and manage development in an agile team to deliver complex features (CRUD, reviews, visibility management).",
            actions: [
            "Applied the Scrum method for project management: breakdown into sprints, daily meetings, and use of GitHub for team code merging.",
            "Developed the 'Professional' space allowing the creation, deletion, and 'soft delete' of offers to manage their public visibility.",
            "Designed the PostgreSQL database to manage relationships between users, offers, and the rating/review system.",
            "Managed version conflicts and conducted Code Reviews to ensure the quality of the final output."
            ],
            result: "Functional platform allowing professionals to manage their activity independently and visitors to rate experiences. Project delivered while respecting agile ceremonies."
        },
        links: [
            { label: "Project GitHub Repository", url: "https://github.com/ArianeGL/c1.2-srfc" },
        ]
    },
	{
        id: "website-react-prisma",
        title: "Personal Portfolio & Theorycrafter",
        context: "Personal Project (Autonomy)",
        date: "Late 2025 - Present",
        keywords: ["Develop", "Optimize", "React", "Prisma", "Full Stack", "Algorithm"],
        star: {
            situation: "As part of my 3rd year at IUT, I needed to build a professional portfolio. To challenge myself beyond a static site, I combined this academic requirement with a personal need: creating a 'Theorycrafter' tool for a game to analyze and rank character builds.",
            task: "Develop a scalable full-stack application capable of serving two distinct purposes: presenting my professional profile and hosting a complex, data-driven character builder with a ranking algorithm.",
            actions: [
                "Designed a relational database schema using Prisma (ORM) to manage characters, equipment stats, and user profiles.",
                "Developed a scoring algorithm to compare user builds against a 'theoretical best' model, calculating a percentage-based efficiency rank (Competency: Optimize).",
                "Built a responsive UI with React to allow users to input data and visualize their progress dynamically.",
                "Integrated the portfolio section to showcase my skills and projects, meeting the BUT 3 assessment criteria."
            ],
            result: "A unified platform that fulfills the academic portfolio requirement while demonstrating advanced full-stack capabilities. The builder tool successfully tracks progress and provides accurate algorithmic rankings."
        },
        links: [
            { label: "GitHub Repo", url: "https://github.com/..." },
            { label: "Live Website", url: "https://..." }
        ]
    }
];

export const projectsData = {
    en: projectsEn,
    fr: projectsFr
};