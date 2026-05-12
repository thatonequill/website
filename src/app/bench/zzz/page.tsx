"use client";

import { useState, useEffect } from 'react';
import { BenchHeader } from '@/components/bench/BenchHeader';
import { BENCH_THEMES } from '@/lib/constants';

export default function ZZZBuilderPage() {
  const [isDark, setIsDark] = useState(false);
  const theme = BENCH_THEMES.find(t => t.id === 'zzz')!;
  
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const colors = isDark ? theme.dark : theme.light;

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: colors.background, color: colors.foreground }}
    >
      <BenchHeader />
      
      <main className="max-w-6xl w-full mx-auto p-4 md:p-6 lg:p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight" style={{ color: colors.primary }}>
            Create Zenless Zone Zero Build
          </h1>
          <p style={{ color: colors.secondary }}>Static prototype matching Prisma schema</p>
        </div>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {/* Character & Skills */}
          <div className="p-6 rounded-xl border-2 space-y-4" style={{ backgroundColor: colors.card, borderColor: colors.border }}>
            <h2 className="text-xl font-bold border-b pb-2" style={{ borderColor: colors.border }}>Agent</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">Character</label>
                <select className="w-full p-2 rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }}>
                  <option>Select Character...</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Level</label>
                <input type="number" defaultValue={60} className="w-full p-2 rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Mindscape</label>
                <input type="number" min={0} max={6} defaultValue={0} className="w-full p-2 rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Core Level</label>
                <select className="w-full p-2 rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }}>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
              </div>
            </div>
            
            <h3 className="font-semibold mt-4">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">Basic</label>
                <input type="number" min={1} max={12} defaultValue={1} className="w-full p-2 rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Dodge</label>
                <input type="number" min={1} max={12} defaultValue={1} className="w-full p-2 rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Assist</label>
                <input type="number" min={1} max={12} defaultValue={1} className="w-full p-2 rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Special</label>
                <input type="number" min={1} max={12} defaultValue={1} className="w-full p-2 rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Chain</label>
                <input type="number" min={1} max={12} defaultValue={1} className="w-full p-2 rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }} />
              </div>
            </div>
          </div>

          {/* W-Engine */}
          <div className="p-6 rounded-xl border-2 space-y-4" style={{ backgroundColor: colors.card, borderColor: colors.border }}>
            <h2 className="text-xl font-bold border-b pb-2" style={{ borderColor: colors.border }}>W-Engine</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">W-Engine</label>
                <select className="w-full p-2 rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }}>
                  <option>Select W-Engine...</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Level</label>
                <input type="number" defaultValue={60} className="w-full p-2 rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }} />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Phase</label>
                <input type="number" min={1} max={5} defaultValue={1} className="w-full p-2 rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }} />
              </div>
            </div>
          </div>

          {/* Disc Drives */}
          <div className="p-6 rounded-xl border-2 space-y-4" style={{ backgroundColor: colors.card, borderColor: colors.border }}>
            <h2 className="text-xl font-bold border-b pb-2" style={{ borderColor: colors.border }}>Disc Drives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((slot) => (
                <div key={slot} className="p-4 rounded-lg border space-y-3" style={{ backgroundColor: colors.muted, borderColor: colors.border }}>
                  <h3 className="font-semibold text-center pb-2 border-b" style={{ borderColor: colors.border }}>
                    Slot {slot}
                  </h3>
                  <div className="space-y-1">
                    <label className="text-xs font-medium">Set</label>
                    <input type="text" className="w-full p-1 text-sm rounded border" placeholder="Disc Drive Set" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium">Level (0-15)</label>
                    <input type="number" min={0} max={15} defaultValue={0} className="w-full p-1 text-sm rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium">Main Stat</label>
                    <select className="w-full p-1 text-sm rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }}>
                      <option>HP_FLAT</option>
                      <option>ATK_PERCENT</option>
                      {/* Add other enums */}
                    </select>
                    <input type="number" placeholder="Value" className="w-full p-1 mt-1 text-sm rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }} />
                  </div>
                  
                  <div className="pt-2 border-t space-y-2" style={{ borderColor: colors.border }}>
                    <p className="text-xs font-semibold">Substats</p>
                    {[1, 2, 3, 4].map((sub) => (
                      <div key={sub} className="flex gap-1">
                         <select className="w-2/3 p-1 text-xs rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }}>
                           <option value="">Stat...</option>
                         </select>
                         <input type="number" placeholder="Val" className="w-1/3 p-1 text-xs rounded border" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button 
              type="button" 
              className="px-6 py-2 rounded-lg font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: colors.primary }}
            >
              Save Build
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
