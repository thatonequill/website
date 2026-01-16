// prisma/seed.ts
import { Pool } from 'pg'
import { PrismaPg }from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config() // Load .env

const connectionString = process.env.DATABASE_URL

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

const cards = [
{
name: "The Fool",
imagePath: "https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg", 
shortDesc: "Beginnings, innocence, spontaneity, a free spirit",
fullDesc: "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe."
},
{
name: "The Magician",
imagePath: "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg",
shortDesc: "Manifestation, resourcefulness, power, inspired action",
fullDesc: "The Magician is the representation of pure willpower. He takes the potential of life and manifests it into reality. He connects the spiritual and the physical."
},
{
name: "The High Priestess",
imagePath: "https://upload.wikimedia.org/wikipedia/en/8/88/RWS_Tarot_02_High_Priestess.jpg",
shortDesc: "Intuition, sacred knowledge, divine feminine, the subconscious mind",
fullDesc: "The High Priestess sits at the gate before the great Mystery. She represents the darkness of the womb, the unknown, and the hidden. She is the guardian of the subconscious."
},
{
name: "The Empress",
imagePath: "https://upload.wikimedia.org/wikipedia/en/d/d2/RWS_Tarot_03_Empress.jpg",
shortDesc: "Femininity, beauty, nature, nurturing, abundance",
fullDesc: "The Empress represents the mother archetype. She is the creator of life, representing fertility and abundance in nature. She is deeply connected to the seasons and the senses."
},
{
name: "The Emperor",
imagePath: "https://upload.wikimedia.org/wikipedia/en/c/c3/RWS_Tarot_04_Emperor.jpg",
shortDesc: "Authority, establishment, structure, a father figure",
fullDesc: "The Emperor is the father archetype of the Tarot deck. He sits on his throne holding an orb and scepter, representing his reign over the physical world. He stands for order and control."
},
{
name: "The Hierophant",
imagePath: "https://upload.wikimedia.org/wikipedia/en/8/8d/RWS_Tarot_05_Hierophant.jpg",
shortDesc: "Spiritual wisdom, religious beliefs, conformity, tradition",
fullDesc: "The Hierophant represents traditional values and institutions. He is a teacher and a guide who provides structure and a path to the divine through established systems."
},
{
name: "The Lovers",
imagePath: "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg",
shortDesc: "Love, harmony, relationships, values alignment, choices",
fullDesc: "The Lovers represent the union of duality. While often referring to romantic relationships, this card also signifies a crucial choice that needs to be made."
}
]

async function main() {
console.log('🌱 Starting Seed...')

for (const card of cards) {
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
