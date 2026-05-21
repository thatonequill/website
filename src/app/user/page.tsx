"use client";
import Link from 'next/link';
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <main className="w-full max-w-md z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground text-3xl font-black mb-4 shadow-lg shadow-primary/20">
            B
          </div>
          <h1 className="text-3xl font-black tracking-tight text-card-foreground bench-font">
            BENCH<span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">
            Character Builder & Tracker Hub
          </p>
        </div>

        {/* Main */}
        <div className="bg-card border border-border p-8 rounded-xl shadow-xl backdrop-blur-sm">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold mb-2 opacity-80" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="commander@example.com"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                required
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold opacity-80" htmlFor="password">
                  Password
                </label>
                <a href="#" className="text-xs font-bold text-primary hover:underline">
                  Forgot?
                </a>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Access Hub
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <a href="#" className="text-primary font-bold hover:underline">
                Create Profile
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
				<footer className="mt-8 grid grid-cols-3 gap-4">
					{/* GENSHIN BUTTON */}
					<Link 
						href="/bench/genshin"
						className="group text-center bg-[#fdfaf3] rounded p-3 border-2 border-[#5e9296] transition-all hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer"
					>
						<h4 className="text-xl font-black uppercase text-[#4b443c] group-hover:text-[#d4ad68] transition-colors bench-font">
							Genshin
						</h4>
						<div className="h-1.5 w-full bg-[#4b443c]/10 rounded-full mt-2 overflow-hidden">
							<div className="h-full bg-[#d4ad68] w-full" />
						</div>
					</Link>

					{/* HSR BUTTON */}
					<Link 
						href="/bench/hsr"
						className="group text-center bg-[#f8f7ff] rounded p-3 border-2 border-[#4facfe] transition-all hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer"
					>
						<h4 className="text-xl font-black uppercase text-[#3d3a52] group-hover:text-[#7c5dfa] transition-colors bench-font">
							HSR
						</h4>
						<div className="h-1.5 w-full bg-[#3d3a52]/10 rounded-full mt-2 overflow-hidden">
							<div className="h-full bg-[#7c5dfa] w-full" />
						</div>
					</Link>

					{/* ZZZ BUTTON */}
					<Link 
						href="/bench/zzz"
						className="group text-center bg-[#fefce8] rounded p-3 border-2 border-[#f43f5e] transition-all hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer"
					>
						<h4 className="text-xl font-black uppercase text-[#18181b] group-hover:text-[#facc15] transition-colors bench-font">
							ZZZ
						</h4>
						<div className="h-1.5 w-full bg-[#18181b]/10 rounded-full mt-2 overflow-hidden">
							<div className="h-full bg-[#facc15] w-full" />
						</div>
					</Link>
				</footer>
      </main>
    </div>
  );
}