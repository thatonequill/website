import 'dotenv/config' // Load env vars
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

// 1. Setup the Postgres driver
const connectionString = process.env.DATABASE_URL
const pool = new Pool({ connectionString })

// 2. Create the Prisma Adapter
const adapter = new PrismaPg(pool)

// 3. Pass the adapter to the client
// This fixes the "needs to be constructed with non-empty options" error
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🔮 Connecting via Postgres Adapter...')

  // Create Room
  const newRoom = await prisma.room.create({
    data: {
      code: `ADAPTER-TEST-${Date.now()}`,
      gmSessionId: "gm-777",
      visibility: "PRIVATE"
    }
  })
  console.log(`✅ Created Room: ${newRoom.id}`)

  // Create Player
  const newPlayer = await prisma.player.create({
    data: {
      pseudo: "AdapterUser",
      roomId: newRoom.id
    }
  })
  console.log(`✅ Created Player: ${newPlayer.id}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })