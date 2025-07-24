
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:col-span-1">
              <h1 className="text-5xl font-bold tracking-tighter text-foreground sm:text-7xl lg:text-8xl font-headline">
                Shreya Singh
              </h1>
              <p className="text-3xl text-primary font-medium mt-2">
                Copywriter
              </p>
            </div>
            <div className="md:col-span-1 flex justify-center">
              <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="https://i.postimg.cc/gxZqbX84/image.png"
                  alt="A professional headshot of Shreya"
                  fill
                  className="object-cover"
                  data-ai-hint="professional headshot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="relative z-10 bg-background">

        <section className="py-20 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">About Me</h2>
                    <p className="mt-6 text-xl text-muted-foreground">
                        Hey! I’m a Shreya who lives in the world of hooks, CTAs, and voiceovers that don’t sound like voiceovers. I write the kind of content that makes people stop scrolling, giggle a little, and then go, “Okay wait… I actually want this.”
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
