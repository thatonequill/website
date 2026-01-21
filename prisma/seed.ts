// prisma/seed.ts
import { Pool } from 'pg'
import { PrismaPg }from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import { Cards } from './cardGen'

dotenv.config() // Load .env

const connectionString = process.env.DATABASE_URL

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
console.log('🌱 Starting Seed...')

for (const card of Cards) {
// Upsert avoids duplicates if you run seed multiple times
// (Assuming you might add a unique constraint on 'name' later, 
// but for now create is fine or we check existing)

const existing = await prisma.card.findFirst({ where: { name: card.name } })

if (!existing) {
await prisma.card.create({ data: card })
console.log(`✅ Created: ${card.name}`)
} else {
console.log(`⏩ Skipped: ${card.name} (Exists)`)
}
}

console.log('🏁 Seeding finished.')
}

main()
.catch((e) => {
console.error(e)
process.exit(1)
})
.finally(async () => {
await prisma.$disconnect()
})
