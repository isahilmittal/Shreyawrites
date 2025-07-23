import { CopyFeedbackForm } from './form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Copy Feedback | Shreya Writes',
  description: 'Get AI-powered feedback on your copy for tone and style.',
};

export default function CopyFeedbackPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">AI Copy Feedback</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Get instant, AI-powered suggestions to improve the tone and style of your writing.
          </p>
        </div>
        <CopyFeedbackForm />
      </div>
    </div>
  );
}
