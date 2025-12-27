import React from 'react';

interface LanguageSwitchProps {
  currentLang: 'en' | 'fr';
  toggleLang: () => void;
}

export default function LanguageSwitch({ currentLang, toggleLang }: LanguageSwitchProps) {
  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all text-sm font-semibold"
      aria-label="Switch Language"
    >
      <span className={currentLang === 'fr' ? "text-primary" : "text-muted-foreground"}>FR</span>
      <span className="text-muted-foreground/30">|</span>
      <span className={currentLang === 'en' ? "text-primary" : "text-muted-foreground"}>EN</span>
    </button>
  );
}