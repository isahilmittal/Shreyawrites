'use server';

/**
 * @fileOverview Provides AI-powered feedback on copy for tone and style.
 *
 * - copyFeedback - A function that takes copy as input and returns feedback.
 * - CopyFeedbackInput - The input type for the copyFeedback function.
 * - CopyFeedbackOutput - The return type for the copyFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CopyFeedbackInputSchema = z.object({
  copy: z.string().describe('The copy to be reviewed.'),
});
export type CopyFeedbackInput = z.infer<typeof CopyFeedbackInputSchema>;

const CopyFeedbackOutputSchema = z.object({
  feedback: z.string().describe('AI-powered feedback on the copy.'),
});
export type CopyFeedbackOutput = z.infer<typeof CopyFeedbackOutputSchema>;

export async function copyFeedback(input: CopyFeedbackInput): Promise<CopyFeedbackOutput> {
  return copyFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'copyFeedbackPrompt',
  input: {schema: CopyFeedbackInputSchema},
  output: {schema: CopyFeedbackOutputSchema},
  prompt: `You are an AI copy editor specializing in providing feedback on tone and style.

  Please review the following copy and provide feedback on how to improve it. Be specific and actionable.

  Copy: {{{copy}}}`,
});

const copyFeedbackFlow = ai.defineFlow(
  {
    name: 'copyFeedbackFlow',
    inputSchema: CopyFeedbackInputSchema,
    outputSchema: CopyFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
