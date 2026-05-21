// app/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AmbientBackground from '@/components/AmbientBackground';
import LinkButton from '@/components/LinkButton';

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AmbientBackground>
      {/* 
        The parent wrapper stays perfectly centered. 
      */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full py-12">
        
        {/* 1. ANIMATED LOGO */}
        <motion.div 
          layout
          className="text-4xl font-extrabold select-none text-[var(--foreground)] z-10"
          animate={{ 
            scale: showContent ? 0.85 : 1 
          }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Container for the logo and its blurred background */}
          <div className="relative w-[6em] h-[6em] flex items-center justify-center">
            {/* Blurred background circle */}
            <div
              className="absolute w-full h-full rounded-full bg-background"
              style={{
                filter: 'blur(15px)',
                opacity: 0.6,
                zIndex: -1,
              }}
            />
            {/* The logo image */}
            <img src="/images/icons/logo.avif" alt="logo" style={{ width: '4em', height: '4em', position: 'relative', zIndex: 0 }} />
          </div>
        </motion.div>

        {/* 2. SLIDE-UP & EXPAND NAVIGATION CARD */}
        <AnimatePresence>
          {showContent && (
            <motion.div 
              layout
              className="w-[340px] mt-4 p-8 rounded-2xl border text-center flex flex-col bg-[var(--card)]/80 border-[var(--border)] text-[var(--card-foreground)] shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1, y: 10 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-xl font-bold tracking-tight mb-2 website-font">Welcome</h2>
              <p className="text-sm text-[var(--muted-foreground)] mb-6">
                Navigate through my different projects!
              </p>
              
              <nav className="flex flex-col gap-3">
                <LinkButton href='/pages/portfolio' desc='My Portfolio' icon='/images/icons/logo.avif' />
                <LinkButton href='https://cvmaker.qtqwill.dev' desc='CV Maker' icon='/images/icons/cvmaker.avif' />
                <LinkButton href='https://crux.qtqwill.dev' desc='Crux (WIP)' icon='/images/icons/crux.avif' />
                <LinkButton href='https://bench.qtqwill.dev' desc='BENCH (WIP)' icon='/images/icons/bench.avif' />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </AmbientBackground>
  );
}