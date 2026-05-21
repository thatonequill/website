import React from 'react';

export default function AmbientBackground({ children }) {
  // We inject the floating keyframes dynamically so you don't need an external stylesheet
  const keyframeStyles = `
    @keyframes driftOne {
      0% { transform: translate(0px, 0px) scale(1); }
      50% { transform: translate(80px, -50px) scale(1.15); }
      100% { transform: translate(-30px, 70px) scale(0.9); }
    }
    @keyframes driftTwo {
      0% { transform: translate(0px, 0px) scale(1.1); }
      50% { transform: translate(-70px, 60px) scale(0.85); }
      100% { transform: translate(50px, -40px) scale(1.05); }
    }
  `;

  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-[var(--background)]">
      {/* Injecting the pure CSS animations inline */}
      <style>{keyframeStyles}</style>

      {/* --- REUSABLE MOVING SHAPES LAYER --- */}
      <div className="absolute inset-0 z-0 opacity-40 blur-[100px] pointer-events-none select-none">
        {/* Shape 1: Primary Accent Pink/Red */}
        <div 
          className="absolute top-[15%] left-[20%] w-[350px] h-[350px] rounded-full bg-[var(--primary)]"
          style={{ animation: 'driftOne 22s infinite alternate ease-in-out' }}
        />
        
        {/* Shape 2: Secondary Accent Pink */}
        <div 
          className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px] rounded-full bg-[var(--secondary)]"
          style={{ animation: 'driftTwo 28s infinite alternate-reverse ease-in-out' }}
        />
      </div>

      {/* --- FOREGROUND CONTENT SLOT --- */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}