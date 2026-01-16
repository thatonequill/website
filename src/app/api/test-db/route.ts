import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db'; // Ensure this points to your new singleton file

export async function GET() {
  try {
    // 1. Write Test: Create a temporary test room
    const testCode = `CHECK-${Date.now()}`;
    const newRoom = await prisma.room.create({
      data: {
        code: testCode,
        gmSessionId: "test-session",
        isLocked: false
      }
    });

    // 2. Read Test: Fetch it back
    const fetchedRoom = await prisma.room.findUnique({
      where: { id: newRoom.id }
    });

    // 3. Cleanup: Delete it so we don't clutter the DB
    await prisma.room.delete({
      where: { id: newRoom.id }
    });

    return NextResponse.json({
      status: "✅ Success",
      message: "Next.js can talk to the DB via the Adapter!",
      testData: fetchedRoom
    });

  } catch (error: any) {
    return NextResponse.json({
      status: "❌ Error",
      message: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}