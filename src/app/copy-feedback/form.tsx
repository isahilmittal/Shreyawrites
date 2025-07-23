'use client';

import { useState } from 'react';
import { getCopyFeedback } from './actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Bot, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function CopyFeedbackForm() {
  const [copy, setCopy] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFeedback('');

    try {
      const result = await getCopyFeedback({ copy });
      setFeedback(result.feedback);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      toast({
        variant: 'destructive',
        title: 'Error',
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          value={copy}
          onChange={(e) => setCopy(e.target.value)}
          placeholder="Paste your copy here to get AI-powered suggestions for tone and style."
          className="min-h-[200px] text-base"
          required
        />
        <Button type="submit" disabled={loading || copy.length < 10} className="w-full">
          {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...</> : <> <Sparkles className="mr-2 h-4 w-4" /> Get Feedback </> }
        </Button>
      </form>

      {loading && (
        <Card className="mt-6">
            <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <Bot className="h-12 w-12 text-muted-foreground animate-pulse" />
                    <p className="text-muted-foreground">AI is thinking...</p>
                </div>
            </CardContent>
        </Card>
      )}

      {feedback && !loading && (
        <Card className="mt-6">
          <CardHeader className="flex flex-row items-center space-x-3">
            <Sparkles className="h-6 w-6 text-primary" />
            <CardTitle className="font-headline">AI-Powered Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 whitespace-pre-wrap">{feedback}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
