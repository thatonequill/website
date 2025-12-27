"use client";

import { useState, useEffect } from "react";
import { 
  Github, Linkedin, Mail, Moon, Sun, Terminal, 
  Code2, Cpu, Database
} from "lucide-react";
import { projects } from '../../data/portfolio/projects.js';
import CodeBlock from "@/components/portfolio/CodeBlock";
import InfoCard from "@/components/portfolio/InfoCard";
import ProjectCard from "@/components/portfolio/ProjectCard"; // Corrected import path
import Resume from "@/components/portfolio/Resume";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen font-sans bg-background selection:bg-primary selection:text-white">
      
      {/* --- Navigation --- */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-border bg-background/80">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl flex items-center gap-2 text-primary">
            <Terminal />
            <span>DevPortfolio</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-muted text-foreground transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          {/* Badge updated to use Primary/Muted colors */}
          <div className="inline-block px-3 py-1 rounded-full bg-muted text-primary text-sm font-semibold tracking-wide uppercase">
            En recherche de stage
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Full Stack <br />
            <span className="text-primary">Étudiant Développeur</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Building scalable systems, optimizing algorithms, and crafting intuitive user interfaces. Passionate about clean code and open source.
          </p>
          
          <div className="flex gap-4 pt-2">
            <a href="#contact" className="px-6 py-3 bg-primary text-primary-foreground hover:opacity-90 rounded-xl font-medium transition-all shadow-lg shadow-primary/20">
              Me Contacter
            </a>
            <a href="https://github.com/ArianeGL" target="_blank" className="px-6 py-3 border border-border bg-card hover:bg-muted rounded-xl font-medium transition-colors flex items-center gap-2 text-card-foreground">
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>

        {/* Code Snippet */}
        <div className="flex-1 w-full max-w-md transform hover:scale-[1.02] transition-transform duration-500">
          <CodeBlock fileName="developerInfo.js">
            <p>
              <span className="text-purple-400">const</span> developer = <span className="text-yellow-300">{"{"}</span>
            </p>
            <p className="pl-4">
              name: <span className="text-green-400">"Paul-Elouan"</span>,
            </p>
            <p className="pl-4">
              role: <span className="text-green-400">"Étudiant Développeur"</span>,
            </p>
            <p className="pl-4">
              skills: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"PostgreSQL"</span>]
            </p>
            <p>
              <span className="text-yellow-300">{"}"}</span>;
            </p>
          </CodeBlock>
        </div>
      </header>

      {/* --- Skills Section --- */}
      <section id="skills" className="bg-gradient-to-b from-background to-muted/50 py-20 border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Compétences Techniques</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard icon={Code2} title="Web" variant="slate">
              <ul className="space-y-2">
                <li>React / Tailwind CSS</li>
                <li>HTML / CSS / JS</li>
                <li>Python / PHP</li>
                <li>Node.js</li>
              </ul>
            </InfoCard>

            <InfoCard icon={Cpu} title="Programmation" variant="slate">
              <ul className="space-y-2">
                <li>C / Java</li>
                <li>Bash Scripting</li>
                <li>Git & GitHub</li>
                <li>Docker</li>
              </ul>
            </InfoCard>

            <InfoCard icon={Database} title="Base de Données" variant="slate">
              <ul className="space-y-2">
                <li>PostgreSQL</li>
                <li>Prisma ORM</li>
                <li>MongoDB</li>
              </ul>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Projets & Expériences</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* --- Resume Section --- */}
      <Resume></Resume>
      
      {/* --- Footer --- */}
      <footer id="contact" className="border-t border-border py-12 bg-card">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-2">Prenons Contact</h4>
            <p className="text-muted-foreground">Ouvert à des propositions de collaboration</p>
          </div>
          
          <div className="flex gap-4">
            <a href="mailto:paulelouan.guyardlecerf@proton.me" className="p-3 rounded-full bg-muted text-foreground hover:bg-primary hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="www.linkedin.com/in/paul-elouan-guyard-lecerf-7666692a9" className="p-3 rounded-full bg-muted text-foreground hover:bg-primary hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/ArianeGL" className="p-3 rounded-full bg-muted text-foreground hover:bg-primary hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
        <div className="text-center mt-12 text-muted-foreground text-sm">
          © {new Date().getFullYear()} Paul-Elouan Guyard-Lecerf.
        </div>
      </footer>
    </div>
  );
}