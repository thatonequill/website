import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface LinkButtonProps {
  href: string;
  desc?: string;
  icon: string;
}

export default function LinkButton({ 
  href, 
  desc, 
  icon,
}: LinkButtonProps) {
  return (
    <Link 
      href={href}
      className={`
        group flex items-center p-3 rounded-xl bg-card border border-border shadow-sm text-primary hover:text-primary hover:border-primary/30 hover:shadow-md hover:bg-muted/30 transition-all duration-300 gap-3
      `}
    >
      <img src={icon} alt="Link Icon" className='w-10'/>
      <p>{desc || href}</p>
    </Link>
  );
}