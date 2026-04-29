'use server'

import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function addApplication(formData: FormData) {
  // 1. Verify the password before doing anything
  const password = formData.get('adminPassword');
  if (password !== process.env.TRACKER_ADMIN_PASSWORD) {
    console.error('Unauthorized: Incorrect password');
    return; // Fail silently for security
  }

  // 2. Extract data
  const company = formData.get('company') as string;
  const role = formData.get('role') as string;
  const status = formData.get('status') as string;
  const link = formData.get('link') as string;

  // 3. Insert into Prisma
  await prisma.application.create({
    data: { 
      company, 
      role, 
      status, 
      link: link || null 
    }
  });

  // 4. Revalidate the page to show the new data instantly
  revalidatePath('/tracker');
}