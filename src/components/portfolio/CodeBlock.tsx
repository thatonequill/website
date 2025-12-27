import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  fileName?: string;
  className?: string;
}

export default function CodeBlock({ 
  children, 
  fileName = "terminal", 
  className = "" 
}: CodeBlockProps) {
  return (
    <div className={`w-full rounded-xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800 ${className}`}>
      
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
        </div>
        {/* Optional Filename Display */}
        <div className="text-xs text-slate-500 font-mono select-none">
          {fileName}
        </div>
      </div>

      {/* Code Content */}
      <div className="p-6 font-mono text-sm text-slate-300 overflow-x-auto whitespace-pre">
        {children}
      </div>
    </div>
  );
}