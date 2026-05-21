import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db'; // Import your singleton client

export async function GET(request: Request) {
  // 1. Security Check: Only allow Vercel's scheduler to call this
  // Vercel automatically injects CRON_SECRET into your env variables
  const authHeader = request.headers.get('authorization');
  if (authHeader!== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    // 2. Run a simple query to wake up the DB
    // "SELECT 1" is a standard lightweight check
    await prisma.$queryRaw`SELECT 1`;

    // 3. Cleanup old JDR rooms/draws to save space
    // const threeDaysAgo = new Date();
    // threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    // // Delete draws older than 3 days
    // await prisma.draw.deleteMany({
    //   where: {
    //     timestamp: {
    //       lt: threeDaysAgo,
    //     },
    //   },
    // });
    
    // // Delete rooms that haven't been updated in 3 days
    // await prisma.room.deleteMany({
    //   where: {
    //     updatedAt: {
    //       lt: threeDaysAgo,
    //     },
    //   },
    // });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Cron failed:', error);
    return NextResponse.json({ error: 'Failed to ping DB' }, { status: 500 });
  }
}