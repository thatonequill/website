'use client'
import { performDraw, setActivePlayer, toggleLock } from '@/lib/jdr-actions'
import { useTransition } from 'react'

export default function Controls({ room, currentUser, activePlayerId }: any) {
  const [isPending, startTransition] = useTransition()
  
  const handleDraw = () => {
    if(!activePlayerId) return
    startTransition(async () => {
      await performDraw(room.id, activePlayerId, 3) // Draw 3 cards
    })
  }

  const handleSetTurn = (pid: string) => {
    startTransition(async () => {
      await setActivePlayer(room.id, pid)
    })
  }

  // --- GM CONTROLS ---
  if (currentUser.isGM) {
    return (
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-2">
           <span className="text-xs font-bold text-slate-500 uppercase self-center mr-2">Set Turn:</span>
           {room.players.map((p: any) => (
             <button
               key={p.id}
               onClick={() => handleSetTurn(p.id)}
               disabled={isPending}
               className={`px-3 py-1 rounded text-sm font-bold transition ${
                 activePlayerId === p.id 
                 ? 'bg-purple-600 text-white' 
                 : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
               }`}
             >
               {p.pseudo}
             </button>
           ))}
        </div>

        <div className="flex gap-2">
           {/* Lock/Unlock Toggle */}
           <button 
             onClick={() => startTransition(() => toggleLock(room.id, !room.isLocked))}
             className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 text-sm font-bold border border-slate-700"
           >
             {room.isLocked ? "🔒 UNLOCK ROOM" : "🔓 LOCK ROOM"}
           </button>
        </div>
      </div>
    )
  }

  // --- PLAYER CONTROLS ---
  const isMyTurn = currentUser.id === activePlayerId
  
  if (isMyTurn) {
    return (
      <div className="flex items-center justify-center w-full">
         <div className="flex flex-col items-center animate-in slide-in-from-bottom-4 duration-500">
            <p className="text-emerald-400 text-sm mb-2 font-bold uppercase tracking-wider">It is your turn</p>
            <button
              onClick={handleDraw}
              disabled={isPending}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-emerald-900/20 transform hover:scale-105 transition-all"
            >
              {isPending ? "Drawing..." : "✨ Draw 3 Cards"}
            </button>
         </div>
      </div>
    )
  }

  return (
    <div className="text-center text-slate-500 text-sm italic">
      Waiting for the Game Master...
    </div>
  )
}