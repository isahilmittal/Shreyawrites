
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, PenTool, Quote, Edit, Type, Feather, Sparkles, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="h-screen w-full flex flex-col items-center justify-center pt-20 bg-background text-foreground sticky top-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[30%] text-primary/20">
          <PenTool size={80} strokeWidth={1} className="-rotate-12" />
        </div>
        <div className="absolute bottom-[20%] right-[30%] text-primary/20">
          <Quote size={100} strokeWidth={1} className="rotate-12" />
        </div>
        <div className="absolute top-[25%] right-[35%] text-primary/20">
           <Edit size={60} strokeWidth={1} className="rotate-6" />
        </div>
        <div className="absolute bottom-[35%] left-[25%] text-primary/20">
           <Type size={70} strokeWidth={1} className="-rotate-6" />
        </div>
        <div className="absolute top-[50%] right-[20%] text-primary/20">
            <Feather size={90} strokeWidth={1} className="rotate-12" />
        </div>
        <div className="absolute bottom-[25%] left-[38%] text-primary/20">
            <Sparkles size={50} strokeWidth={1} className="-rotate-12" />
        </div>
        <div className="absolute top-[60%] left-[22%] text-primary/20">
            <BookOpen size={70} strokeWidth={1} className="rotate-6" />
        </div>


        <div className="text-center px-4">
          <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl lg:text-9xl font-headline">
            Shreya Singh
          </h1>
          <p className="text-3xl text-primary font-medium mt-2">
            Copywriter
          </p>
        </div>
        <div className="absolute bottom-12 animate-bounce">
          <ArrowDown className="h-8 w-8 text-primary" />
        </div>
      </section>

      <div className="relative z-10 bg-background">

        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">About Me</h2>
                    <p className="mt-6 text-xl text-muted-foreground">
                        For over 8 years, I've been helping brands find their voice and tell their stories. I believe that great copy is more than just words on a page—it's about building relationships, sparking curiosity, and driving action. My passion lies in understanding an audience and delivering a message that truly resonates.
                    </p>
                </div>
            </div>
        </section>


        <section className="py-12 md:py-24 container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
                Words that Work
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Explore a selection of my recent copywriting projects.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                <Link href={`/projects/${project.id}`} key={project.id} className="group">
                    <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col">
                    <CardHeader className="p-0">
                        <div className="relative h-60 w-full">
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={project.imageHint}
                        />
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow flex flex-col">
                        <Badge variant="secondary" className="mb-2 self-start">{project.category}</Badge>
                        <CardTitle className="text-2xl font-bold mb-2 font-headline">{project.title}</CardTitle>
                        <CardDescription className="flex-grow">{project.shortDescription}</CardDescription>
                    </CardContent>
                    </Card>
                </Link>
                ))}
            </div>
        </section>
      </div>
    </>
  );
}
