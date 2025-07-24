
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">Let's Connect</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            I'm always excited to discuss new projects and collaborations. Reach out to me through any of the channels below!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center justify-center p-6 text-center">
            <CardContent className="flex flex-col items-center gap-4">
              <Instagram className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold font-headline">Instagram</h3>
              <p className="text-muted-foreground">@shh.reya14</p>
              <Button asChild variant="outline">
                <Link href="https://www.instagram.com/shh.reya14/?hl=en" target="_blank" rel="noopener noreferrer">
                  Follow Me
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center justify-center p-6 text-center">
            <CardContent className="flex flex-col items-center gap-4">
              <Phone className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold font-headline">Phone</h3>
              <p className="text-muted-foreground">+91 12345 67890</p>
              <Button asChild variant="outline">
                <a href="tel:+911234567890">Call Me</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center justify-center p-6 text-center">
            <CardContent className="flex flex-col items-center gap-4">
              <Mail className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold font-headline">Email</h3>
              <p className="text-muted-foreground">hello@shreyawrites.com</p>
              <Button asChild variant="outline">
                <a href="mailto:hello@shreyawrites.com">Email Me</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
