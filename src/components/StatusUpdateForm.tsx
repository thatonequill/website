'use client';

import React from 'react';
import { updateApplicationStatus } from '@/lib/tracker-actions';

interface StatusUpdateFormProps {
  applicationId: string;
  currentStatus: string;
  statusOptions: readonly string[]; // Changed to readonly string[]
}

export default function StatusUpdateForm({
  applicationId,
  currentStatus,
  statusOptions,
}: StatusUpdateFormProps) {
  return (
    <form action={updateApplicationStatus} className="flex items-center gap-2">
      <input type="hidden" name="id" value={applicationId} />
      <select
        name="status"
        defaultValue={currentStatus}
        onChange={(e) => e.currentTarget.form?.requestSubmit()} // Submit form on change
        className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      >
        {statusOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input type="password" name="adminPassword" placeholder="Password" required className="bg-background border border-border rounded-lg px-2 py-1 text-xs focus:outline-primary w-24" />
    </form>
  );
}