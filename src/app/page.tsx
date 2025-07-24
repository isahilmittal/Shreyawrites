
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import { brands } from '@/lib/brands';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ClipboardList, Megaphone, Users, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:col-span-1">
              <h1 className="text-5xl font-bold tracking-tighter text-foreground sm:text-7xl lg:text-8xl font-headline whitespace-nowrap">
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

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:col-span-1 flex justify-center">
                <Carousel className="w-full max-w-xs">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="relative h-[480px] w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="https://placehold.co/400x600.png"
                          alt="Portrait image 1"
                          fill
                          className="object-cover"
                          data-ai-hint="portrait woman"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-[480px] w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="https://placehold.co/400x600.png"
                          alt="Portrait image 2"
                          fill
                          className="object-cover"
                          data-ai-hint="portrait woman professional"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="md:col-span-1">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                  If you’ve ever seen a Reel where someone’s raving about a product in the most effortless, un-scripted way?
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">
                  Yeah, that was scripted. By me.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:col-span-1 md:order-2 flex justify-center">
                <Carousel className="w-full max-w-xs">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="relative h-[480px] w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="https://placehold.co/400x600.png"
                          alt="Portrait image 1"
                          fill
                          className="object-cover"
                          data-ai-hint="portrait woman"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-[480px] w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="https://placehold.co/400x600.png"
                          alt="Portrait image 2"
                          fill
                          className="object-cover"
                          data-ai-hint="portrait woman professional"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="md:col-span-1 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                  If you’ve ever seen a Reel where someone’s raving about a product in the most effortless, un-scripted way?
                </h2>
                <p className="mt-6 text-xl text-muted-foreground">
                  Yeah, that was scripted. By me.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">What I Do (and love doing)</h2>
            </div>
            <div className="space-y-16">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:col-span-1">
                  <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-4">Influencer & UGC Scripts</h3>
                  <p className="text-xl text-muted-foreground">Whether it’s a GRWM, product demo, or story-style hook, I write it like a friend’s talking to you, not a brand.</p>
                </div>
                <div className="md:col-span-1 flex justify-center text-primary">
                  <Users className="w-32 h-32" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:col-span-1 md:order-2">
                  <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-4">In-House Content</h3>
                  <p className="text-xl text-muted-foreground">Festive campaigns, launch reels, how-to scripts, fun captions... I help brands sound less “salesy” and more real.</p>
                </div>
                <div className="md:col-span-1 md:order-1 flex justify-center text-primary">
                  <ClipboardList className="w-32 h-32" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:col-span-1">
                  <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-4">Short Ad Copies</h3>
                  <p className="text-xl text-muted-foreground">From Meta ads to Story voiceovers, I make sure the first 3 seconds grab attention and the rest keeps them hooked.</p>
                </div>
                <div className="md:col-span-1 flex justify-center text-primary">
                  <Megaphone className="w-32 h-32" />
                </div>
              </div>

            </div>
          </div>
        </section>
        
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">What I Do (and love doing)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                            <Users className="h-8 w-8" />
                        </div>
                        <CardTitle className="font-headline mt-4">Influencer & UGC Scripts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Whether it’s a GRWM, product demo, or story-style hook, I write it like a friend’s talking to you, not a brand.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                            <ClipboardList className="h-8 w-8" />
                        </div>
                        <CardTitle className="font-headline mt-4">In-House Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Festive campaigns, launch reels, how-to scripts, fun captions... I help brands sound less “salesy” and more real.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                            <Megaphone className="h-8 w-8" />
                        </div>
                        <CardTitle className="font-headline mt-4">Short Ad Copies</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">From Meta ads to Story voiceovers, I make sure the first 3 seconds grab attention and the rest keeps them hooked.</p>
                    </CardContent>
                </Card>
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

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">Brands that I work with</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {brands.map((brand) => (
                <Card key={brand.id} className="overflow-hidden">
                  <CardHeader className="flex-row items-center gap-4 p-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={brand.logoUrl}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain"
                        data-ai-hint={brand.imageHint}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold font-headline">{brand.name}</CardTitle>
                      <Link href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="h-4 w-4" />
                        {brand.instagramUsername}
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 border-t">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {brand.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="text-2xl font-bold text-primary">{metric.value}</p>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">Brands that I work with</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {brands.map((brand) => (
                <Card key={brand.id} className="overflow-hidden">
                  <CardHeader className="flex-row items-center gap-4 p-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={brand.logoUrl}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain"
                        data-ai-hint={brand.imageHint}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold font-headline">{brand.name}</CardTitle>
                      <Link href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="h-4 w-4" />
                        {brand.instagramUsername}
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 border-t">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {brand.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="text-2xl font-bold text-primary">{metric.value}</p>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

    
