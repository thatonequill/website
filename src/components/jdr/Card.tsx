'use client'
import styles from './Card.module.css'
import { revealCard } from '@/lib/jdr-actions'
import { useState } from 'react'

export default function Card({ data, def, canFlip }: any) {
  const [isFlipping, setIsFlipping] = useState(false)
  
  const handleClick = async () => {
    if (canFlip && !data.isRevealed) {
      setIsFlipping(true)
      await revealCard(data.drawId, data.index)
      setIsFlipping(false)
    }
  }
  
  const cardClasses = (data.isReversed ? (
    "w-full h-full object-cover rotate-180"
    ) : (
      "w-full h-full object-cover"
    )
  )

  return (
    <div className={styles.scene}>
      <div className={`${styles.card} ${data.isRevealed ? styles.flipped : ''}`}>
        
        {/* BACK OF CARD */}
        <div className={styles.back}>
          {/* Decorative Pattern */}
          <img src="/images/jdr/CardBackDark.avif" alt="Card Back" className="w-full h-full object-cover" />
          
          {/* Reveal Button Overlay */}
          {canFlip && !data.isRevealed && (
            <button 
              onClick={handleClick}
              disabled={isFlipping}
              className="absolute inset-0 bg-background/40 hover:bg-background/20 flex items-center justify-center text-foreground font-bold tracking-widest transition-colors backdrop-blur-[2px] cursor-pointer z-10 rounded-xl"
            >
              CLICK<br/>TO<br/>FLIP
            </button>
          )}
        </div>

        {/* FACE OF CARD */}
        {/* Added 'relative group' to enable the overlay positioning and hover trigger */}
        <div className={`${styles.face} relative group`}>
          
          {/* --- STANDARD CONTENT --- */}
          <div className='h-7 flex items-center justify-center'>
            <p className="text-sm truncate px-2">{def.name}</p>
          </div>

          {/* Card Image */}
          <div className="flex-1 relative w-full overflow-hidden">
             {def.imagePath ? (
                <img src={def.imagePath} alt={def.name} className={cardClasses} />
             ) : (
                <img src={"https://qtqwill.dev/images/jdr/MTA/Arcana_0_Fool.avif"} alt={"The Fool"} className={cardClasses} />
             )}
          </div>

          {/* Card Short Desc */}
          <div className='text-xs h-10 flex justify-center items-center px-2 text-center leading-tight bg-muted text-muted-foreground'>
            <p className="line-clamp-2">{def.shortDesc}</p>
          </div>

          {/* <pre>
            {JSON.stringify(data, null, 2)}
          </pre> */}

          {/* --- HOVER OVERLAY (Full Desc) --- */}
          <div className="absolute inset-0 mt-7 h-63 bg-card/95 text-card-foreground p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center z-10 rounded-[inherit]">
            <p className="text-xs leading-relaxed overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-muted-foreground">
              {def.fullDesc || "No details available."}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}