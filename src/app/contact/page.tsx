"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type ContactFormState } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, User, Loader2 } from 'lucide-react';
import type { Metadata } from 'next';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : 'Send Message'}
    </Button>
  );
}

export default function ContactPage() {
  const initialState: ContactFormState = { message: '' };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.issues) {
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong.",
          description: state.issues?.join('\n') ?? 'Please check the form fields.',
        });
      } else {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <>
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">Get in Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </div>
          <form ref={formRef} action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="name" name="name" placeholder="Your Name" required className="pl-10" defaultValue={state.fields?.name} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="pl-10" defaultValue={state.fields?.email} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                <Textarea id="message" name="message" placeholder="Tell me about your project..." required className="pl-10 min-h-[150px]" defaultValue={state.fields?.message} />
              </div>
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
    </>
  );
}
