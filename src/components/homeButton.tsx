import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

export default function HomeButton() {
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
    <img src="/images/icons/home.avif" alt="HOME" className='w-7'/>
    </Link>
  );
}