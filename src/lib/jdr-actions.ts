'use server'

import { prisma } from '@/lib/db' // Points to your new working singleton
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// Type definition for the Card Snapshot stored in JSON
interface CardSnapshot {
  cardId: string
  position: number
  isReversed: boolean
  isRevealed: boolean
}

// --- 1. ROOM MANAGEMENT ---

export async function createRoom(formData: FormData) {
  const code = (formData.get('code') as string).toUpperCase()
  const pseudo = formData.get('pseudo') as string
  const gmSessionId = crypto.randomUUID() 

  // 1. Check if room exists
  const existing = await prisma.room.findUnique({ where: { code } })

  if (existing) {
    const hoursOld = (Date.now() - existing.updatedAt.getTime()) / 1000 / 60 / 60
    
    // Rule: Cannot overwrite active rooms (<24h)
    if (hoursOld < 24) {
      // In a real app, you'd return an error state. For now, we redirect to an error page or similar.
      // For this implementation, let's just fail silently or handle it in UI.
      throw new Error("Room is occupied and active.")
    }

    // Rule: Overwrite old rooms (>24h)
    // We transactionally clean the room
    await prisma.$transaction([
      prisma.draw.deleteMany({ where: { roomId: existing.id } }),
      prisma.player.deleteMany({ where: { roomId: existing.id } }),
      prisma.room.update({
        where: { id: existing.id },
        data: { 
          gmSessionId: gmSessionId, 
          updatedAt: new Date(),
          isLocked: false,
          activePlayerId: null
        }
      })
    ])
  } else {
    // Create new
    await prisma.room.create({
      data: { code, gmSessionId }
    })
  }

  // Redirect with the GM key
  redirect(`/jdr/${code}?pseudo=${pseudo}&key=${gmSessionId}`)
}

export async function joinRoom(formData: FormData) {
  const code = (formData.get('code') as string).toUpperCase()
  const pseudo = formData.get('pseudo') as string

  const room = await prisma.room.findUnique({ where: { code } })

  if (!room) throw new Error("Room not found")
  if (room.isLocked) throw new Error("Room is locked")

  // Create player
  await prisma.player.create({
    data: { pseudo, roomId: room.id }
  })

  redirect(`/jdr/${code}?pseudo=${pseudo}`)
}

// --- 2. GAME PLAY ---

export async function performDraw(roomId: string, playerId: string, cardCount: number) {
  // 1. Get all card IDs
  const allCards = await prisma.card.findMany({ select: { id: true } })
  if (allCards.length === 0) return 

  // 2. Shuffle
  const shuffled = allCards.sort(() => 0.5 - Math.random())
  const selected = shuffled.slice(0, cardCount)

  // 3. Create JSON Snapshot
  const snapshot: CardSnapshot[] = selected.map((card, index) => ({
    cardId: card.id,
    position: index,
    isReversed: Math.random() < 0.5, 
    isRevealed: false 
  }))

  // 4. Save
  await prisma.draw.create({
    data: {
      roomId,
      playerId,
      cardsSnapshot: snapshot as any 
    }
  })

  revalidatePath(`/jdr/[code]`)
}

export async function revealCard(drawId: string, cardIndex: number) {
  const draw = await prisma.draw.findUnique({ where: { id: drawId } })
  if (!draw) return

  const currentSnapshot = draw.cardsSnapshot as unknown as CardSnapshot[]
  
  if (currentSnapshot[cardIndex]) {
    currentSnapshot[cardIndex].isRevealed = true
  }

  await prisma.draw.update({
    where: { id: drawId },
    data: { cardsSnapshot: currentSnapshot as any }
  })

  revalidatePath(`/jdr/[code]`)
}

// --- 3. GM CONTROLS ---

export async function setActivePlayer(roomId: string, playerId: string) {
  await prisma.room.update({
    where: { id: roomId },
    data: { activePlayerId: playerId }
  })
  // Revalidates any dynamic route matching this structure
  revalidatePath('/jdr/[code]', 'page') 
}

/**
 * GM: Lock/Unlock room to prevent new joins
 */
export async function toggleLock(roomId: string, isLocked: boolean) {
  await prisma.room.update({
    where: { id: roomId },
    data: { isLocked }
  })
  revalidatePath('/jdr/[code]', 'page')
}