import React from 'react';
import { LucideIcon } from 'lucide-react';

// Updated variants to match the Rose/Slate theme
const variants = {
  rose: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
  slate: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
  // keeping blue just in case, but adapted to muted
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
};

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
}

export default function InfoCard({ 
  icon: Icon, 
  title, 
  children, 
  variant = "rose"
}: InfoCardProps) {
  return (
    // Changed main container to use semantic bg-card and border-border
    <div className="bg-card p-6 rounded-xl shadow-sm border border-border h-full hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${variants[variant]}`}>
        <Icon size={24} />
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-card-foreground">{title}</h3>
      
      <div className="text-muted-foreground">
        {children}
      </div>
    </div>
  );
}