'use server';

import { copyFeedback } from '@/ai/flows/copy-feedback';
import { z } from 'zod';

const inputSchema = z.object({
  copy: z.string().min(10, "Please provide at least 10 characters of copy."),
});

export async function getCopyFeedback(input: { copy: string }) {
  const parsed = inputSchema.safeParse(input);

  if (!parsed.success) {
    throw new Error(parsed.error.issues.map(i => i.message).join('\\n'));
  }
  
  return await copyFeedback(parsed.data);
}
