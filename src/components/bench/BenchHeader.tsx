"use client";
import Link from 'next/link';
import { User, Home, Moon, Sun } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { BENCH_THEMES } from '@/lib/constants';

export function BenchHeader() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-card border-b border-border shadow-sm mb-6 rounded-b-xl max-w-4xl mx-auto w-full">
      {/* Left Actions */}
      <div className="flex gap-3">

        {/* Avatar Link */}
        <Link 
          href="/bench/account" 
          className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-muted text-muted-foreground border-2 border-border hover:border-primary hover:text-primary transition-all hover:scale-105 active:scale-95 shadow-sm"
          title="Account"
        >
          <User size={24} strokeWidth={2.5} />
        </Link>
        
        {/* Hub Link */}
        <Link 
          href="/bench" 
          className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-muted text-muted-foreground border-2 border-border hover:border-primary hover:text-primary transition-all hover:scale-105 active:scale-95 shadow-sm"
          title="Hub"
        >
          <Home size={24} strokeWidth={2.5} />
        </Link>

      </div>

      {/* Game Nav Buttons */}
      <div className="flex gap-3">
        {BENCH_THEMES.map((theme) => {
          const colors = isDark ? theme.dark : theme.light;
          const displayName = theme.id === 'genshin' ? 'Genshin' : theme.id === 'hsr' ? 'HSR' : 'ZZZ';
          
          return (
            <Link 
              key={theme.id}
              href={`/bench/${theme.id}`}
              className="group flex flex-col justify-center text-center rounded p-2 border-2 transition-all hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer min-w-[72px] sm:min-w-[80px]"
              style={{
                backgroundColor: colors.background,
                borderColor: colors.secondary,
                '--default-text': colors.foreground,
                '--hover-text': colors.primary,
              } as React.CSSProperties}
            >
              <p className="text-[10px] sm:text-xs font-black uppercase transition-colors text-[var(--default-text)] group-hover:text-[var(--hover-text)]">
                {displayName}
              </p>
              <div 
                className="h-1.5 w-full rounded-full mt-1.5 overflow-hidden"
                style={{ backgroundColor: `${colors.foreground}1A` }}
              >
                <div className="h-full w-full" style={{ backgroundColor: colors.primary }} />
              </div>
            </Link>
          );
        })}
        
        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-muted text-muted-foreground border-2 border-border hover:border-primary hover:text-primary transition-all hover:scale-105 active:scale-95 shadow-sm"
          title="Toggle Theme"
        >
          {isDark ? <Sun size={24} strokeWidth={2.5} /> : <Moon size={24} strokeWidth={2.5} />}
        </button>
      </div>
    </header>
  );
}

export default BenchHeader;
