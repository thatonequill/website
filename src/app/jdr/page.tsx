import { SubmitButton } from '@/components/submitButton'
import { createRoom, joinRoom } from '@/lib/jdr-actions'

export default function JdrLandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground font-sans">
          <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            
            {/* GM SECTION */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-secondary">Game Master</h2>
              <form action={createRoom} className="flex flex-col gap-4">
                <input 
                  name="code" type="text" placeholder="Room Code (e.g. CAMELOT)" required 
                  className="bg-background border border-border rounded p-3 text-card-foreground"
                />
                <input 
                  name="pseudo" type="text" placeholder="Your Name" required 
                  className="bg-background border border-border rounded p-3 text-card-foreground"
                />
                <SubmitButton color='secondary'>
                  Create Room
                </SubmitButton>
              </form>
            </div>
    
            {/* PLAYER SECTION */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-primary">Player</h2>
              <form action={joinRoom} className="flex flex-col gap-4">
                <input 
                  name="code" type="text" placeholder="Room Code" required 
                  className="bg-background border border-border rounded p-3 text-card-foreground"
                />
                <input 
                  name="pseudo" type="text" placeholder="Your Name" required 
                  className="bg-background border border-border rounded p-3 text-card-foreground"
                />
                <SubmitButton color='primary'>
                  Join Room
                </SubmitButton>
              </form>
            </div>
    
          </div>
        </div>
  )
}