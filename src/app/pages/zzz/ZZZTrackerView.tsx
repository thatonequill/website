//src/app/pages/zzz/ZZZBuilderView.tsx
"use client";

import { RankBadge } from "@/components/charTracker/rankIcons";
import HomeButton from "@/components/homeButton";
import { House, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ZZZBuilderView() {
	const [darkMode, setDarkMode] = useState(false);
	
	// Sets Theme
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
						<HomeButton icon={House}></HomeButton>
						<span>ZZZ Character Builder</span>
					</div>

					<div className="flex items-center gap-4 md:gap-6 text-sm font-medium">
						<a href="#" className="hidden md:block hover:text-primary transition-colors"></a>
					</div>

					{/* Dark Mode Toggle */}
					<button 
						onClick={() => setDarkMode(!darkMode)}
						className="p-2 rounded-full hover:bg-muted text-foreground transition-colors"
						aria-label="Toggle Theme"
					>
						{darkMode ? <Sun size={20} /> : <Moon size={20} />}
					</button>
				</div>
			</nav>

			<header className="max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
			{/* left -> title zzz character tracker, right -> circle with + in middle and "start a build" */}
			</header>
		</div>
  );
}
