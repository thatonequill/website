import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface HomeButtonProps {
  icon: LucideIcon;
}

export default function HomeButton({ 
  icon: Icon, 
}: HomeButtonProps) {
  return (
    <Link 
      href={"/"}
      className={`
        group flex items-center justify-center p-3 rounded-full
        bg-card border border-border shadow-sm
        text-primary
        hover:text-primary hover:border-primary/30 hover:shadow-md hover:bg-muted/30
        transition-all duration-300
      `}
    >
      <Icon 
        size={22} 
        className="group-hover:scale-110 transition-transform duration-300" 
      />
    </Link>
  );
}