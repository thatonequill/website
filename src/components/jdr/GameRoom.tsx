'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Table from './Table'
import Controls from './ControlPanel'

export default function GameRoom({ room, initialDraws, cardLibrary, currentUser }: any) {
  const router = useRouter()
  const [draws, setDraws] = useState(initialDraws)
  const [activePlayerId, setActivePlayerId] = useState(room.activePlayerId)
  const [isLocked, setIsLocked] = useState(room.isLocked)

  // POLLING: Refresh data every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Next.js "router.refresh()" re-runs the Server Component
      // and updates the props of this component securely.
      router.refresh()
    }, 2000)
    return () => clearInterval(interval)
  }, [router])

  // Sync state with incoming props (from polling)
  useEffect(() => {
    setDraws(room.draws)
    setActivePlayerId(room.activePlayerId)
    setIsLocked(room.isLocked)
  }, [room])

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col md:flex-row">
      
      {/* SIDEBAR: Players */}
      <aside className="w-full md:w-64 bg-slate-950 p-4 border-r border-slate-800 flex-shrink-0">
        <h2 className="text-xl font-bold text-purple-400 mb-4 tracking-widest">
          {room.code}
        </h2>
        
        <div className="space-y-2">
          {room.players.map((p: any) => (
            <div 
              key={p.id} 
              className={`p-3 rounded transition-all border ${
                activePlayerId === p.id 
                  ? 'bg-purple-900/30 border-purple-500 text-white shadow-[0_0_10px_rgba(168,85,247,0.3)]' 
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              <div className="font-bold flex justify-between items-center">
                {p.pseudo}
                {activePlayerId === p.id && <span className="text-xs text-purple-400 animate-pulse">● ACT</span>}
              </div>
            </div>
          ))}
          {room.players.length === 0 && <div className="text-sm text-slate-600 italic">Waiting for players...</div>}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* THE TABLE (Cards) */}
        <div className="flex-1 overflow-y-auto p-4 md:p-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900">
           <Table 
             draws={draws} 
             cardLibrary={cardLibrary} 
             currentUser={currentUser}
             activePlayerId={activePlayerId}
           />
        </div>

        {/* CONTROLS (Bottom Bar) */}
        <div className="bg-slate-950 border-t border-slate-800 p-4 z-10">
          <Controls 
            room={room} 
            currentUser={currentUser} 
            activePlayerId={activePlayerId}
          />
        </div>
      </main>

    </div>
  )
}