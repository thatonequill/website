-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "jdr";

-- CreateTable
CREATE TABLE "jdr"."JdrCard" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "shortDesc" TEXT,
    "fullDesc" TEXT,

    CONSTRAINT "JdrCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jdr"."JdrRoom" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "gmSessionId" TEXT NOT NULL,
    "isLocked" BOOLEAN NOT NULL DEFAULT false,
    "visibility" TEXT NOT NULL DEFAULT 'ALL',
    "allowRevoke" BOOLEAN NOT NULL DEFAULT true,
    "activePlayerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JdrRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jdr"."JdrPlayer" (
    "id" TEXT NOT NULL,
    "pseudo" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "JdrPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jdr"."JdrDraw" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "cardsSnapshot" JSONB NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JdrDraw_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JdrRoom_code_key" ON "jdr"."JdrRoom"("code");

-- AddForeignKey
ALTER TABLE "jdr"."JdrPlayer" ADD CONSTRAINT "JdrPlayer_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "jdr"."JdrRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jdr"."JdrDraw" ADD CONSTRAINT "JdrDraw_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "jdr"."JdrRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jdr"."JdrDraw" ADD CONSTRAINT "JdrDraw_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "jdr"."JdrPlayer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
