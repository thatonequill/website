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
              className="absolute inset-0 bg-black/40 hover:bg-black/20 flex items-center justify-center text-white font-bold tracking-widest transition-colors backdrop-blur-[2px] cursor-pointer z-10 rounded-xl"
            >
              CLICK<br/>TO<br/>FLIP
            </button>
          )}
        </div>

        {/* FACE OF CARD */}
        <div className={styles.face}>
            {def.imagePath ? (
              data.isReversed ? (
                <img src={def.imagePath} alt={def.name} className="w-full h-full object-cover rotate-180" />
              ) : (
                <img src={def.imagePath} alt={def.name} className="w-full h-full object-cover" />
              )
            ) : (
                <img src={"https://qtqwill.dev/images/jdr/MTA/Arcana_0_Fool.avif"} alt={"The Fool"} className="w-full h-full object-cover" />
            )}
        </div>
      </div>
    </div>
  )
}