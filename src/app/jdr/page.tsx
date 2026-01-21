import { SubmitButton } from '@/components/submitButton'
import { createRoom, joinRoom } from '@/lib/jdr-actions'

export default function JdrLandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-200 font-sans">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        
        {/* GM SECTION */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Game Master</h2>
          <form action={createRoom} className="flex flex-col gap-4">
            <input 
              name="code" type="text" placeholder="Room Code (e.g. CAMELOT)" required 
              className="bg-slate-950 border border-slate-800 rounded p-3 text-white"
            />
            <input 
              name="pseudo" type="text" placeholder="Your Name" required 
              className="bg-slate-950 border border-slate-800 rounded p-3 text-white"
            />
            {/* <button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded">
              Create Room
            </button> */}
            <SubmitButton>
              Create Room
            </SubmitButton>
          </form>
        </div>

        {/* PLAYER SECTION */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">Player</h2>
          <form action={joinRoom} className="flex flex-col gap-4">
            <input 
              name="code" type="text" placeholder="Room Code" required 
              className="bg-slate-950 border border-slate-800 rounded p-3 text-white"
            />
            <input 
              name="pseudo" type="text" placeholder="Your Name" required 
              className="bg-slate-950 border border-slate-800 rounded p-3 text-white"
            />
            {/* <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded">
              Join Room
            </button> */}
            <SubmitButton color='emerald'>
              Join Room
            </SubmitButton>
          </form>
        </div>

      </div>
    </div>
  )
}