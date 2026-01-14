/*
  Warnings:

  - You are about to drop the `JdrCard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JdrDraw` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JdrPlayer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JdrRoom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "jdr"."JdrDraw" DROP CONSTRAINT "JdrDraw_playerId_fkey";

-- DropForeignKey
ALTER TABLE "jdr"."JdrDraw" DROP CONSTRAINT "JdrDraw_roomId_fkey";

-- DropForeignKey
ALTER TABLE "jdr"."JdrPlayer" DROP CONSTRAINT "JdrPlayer_roomId_fkey";

-- DropTable
DROP TABLE "jdr"."JdrCard";

-- DropTable
DROP TABLE "jdr"."JdrDraw";

-- DropTable
DROP TABLE "jdr"."JdrPlayer";

-- DropTable
DROP TABLE "jdr"."JdrRoom";

-- CreateTable
CREATE TABLE "jdr"."Card" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "shortDesc" TEXT,
    "fullDesc" TEXT,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jdr"."Room" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "gmSessionId" TEXT NOT NULL,
    "isLocked" BOOLEAN NOT NULL DEFAULT false,
    "visibility" TEXT NOT NULL DEFAULT 'ALL',
    "allowRevoke" BOOLEAN NOT NULL DEFAULT true,
    "activePlayerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jdr"."Player" (
    "id" TEXT NOT NULL,
    "pseudo" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jdr"."Draw" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "cardsSnapshot" JSONB NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Draw_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Room_code_key" ON "jdr"."Room"("code");

-- AddForeignKey
ALTER TABLE "jdr"."Player" ADD CONSTRAINT "Player_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "jdr"."Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jdr"."Draw" ADD CONSTRAINT "Draw_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "jdr"."Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jdr"."Draw" ADD CONSTRAINT "Draw_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "jdr"."Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
