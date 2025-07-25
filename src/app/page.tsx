
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import { brands } from '@/lib/brands';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ClipboardList, Megaphone, Users, Instagram, Globe } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';

const metaAds = [
    {
        name: 'Clearzal',
        description: 'Pain-relief cream for targeted muscle and joint relief.',
        logoUrl: 'https://i.postimg.cc/N5569MT6/image.png',
        websiteUrl: 'https://clearzal.com/',
        imageHint: 'pain relief cream logo'
    },
    {
        name: 'Southmoon',
        description: 'Foot spray formulated to soothe pain and fatigue.',
        logoUrl: 'https://placehold.co/150x80.png',
        websiteUrl: null,
        imageHint: 'health product logo'
    },
    {
        name: 'Bee Venom Psoriasis Spray',
        description: 'A natural solution designed for psoriasis care.',
        logoUrl: 'https://placehold.co/150x80.png',
        websiteUrl: null,
        imageHint: 'skincare product logo'
    },
    {
        name: 'Karsell',
        description: 'Hair collagen mask promoting deep repair and nourishment.',
        logoUrl: 'https://i.postimg.cc/hJPPvJQg/image.png',
        websiteUrl: 'https://www.karseell.com/',
        imageHint: 'haircare product logo'
    },
    {
        name: 'The Wellness Shop',
        description: 'Turmeric-based facial care products for radiant skin.',
        logoUrl: 'https://i.postimg.cc/ZBNRtGyy/image.png',
        websiteUrl: 'https://www.thewellnessshop.in/',
        imageHint: 'skincare brand logo'
    },
    {
        name: 'Bee Venom Nail Treatment Serum',
        description: 'Strengthens and rejuvenates damaged nails.',
        logoUrl: 'https://placehold.co/150x80.png',
        websiteUrl: null,
        imageHint: 'nail care product logo'
    },
    {
        name: 'Saam',
        description: 'Renewal face cream for revitalized and youthful skin.',
        logoUrl: 'https://placehold.co/150x80.png',
        websiteUrl: null,
        imageHint: 'face cream logo'
    },
    {
        name: 'Black Hair Shampoo',
        description: 'Quick gray coverage with herbal-based formula.',
        logoUrl: 'https://placehold.co/150x80.png',
        websiteUrl: null,
        imageHint: 'hair product logo'
    }
];

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
                  src="https://i.postimg.cc/wR7Y3bqW/image.png"
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

        <AnimatedSection>
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
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="relative h-[480px] w-full rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src="https://i.postimg.cc/1nNj0Q8X/image.png"
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
        </AnimatedSection>

        
        <AnimatedSection>
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
        </AnimatedSection>
        
        <AnimatedSection>
          <section className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">What I Do (and love doing)</h2>
              </div>
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="bg-primary/10 text-primary rounded-full p-4 w-20 h-20 flex items-center justify-center">
                      <Users className="h-10 w-10" />
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-2xl font-bold font-headline mb-2">Influencer & UGC Scripts</h3>
                    <p className="text-lg text-muted-foreground">Whether it’s a GRWM, product demo, or story-style hook, I write it like a friend’s talking to you, not a brand.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-4 text-right">
                    <h3 className="text-2xl font-bold font-headline mb-2">In-House Content</h3>
                    <p className="text-lg text-muted-foreground">Festive campaigns, launch reels, how-to scripts, fun captions... I help brands sound less “salesy” and more real.</p>
                  </div>
                  <div className="md:col-span-1 flex justify-center md:order-last">
                    <div className="bg-primary/10 text-primary rounded-full p-4 w-20 h-20 flex items-center justify-center">
                      <ClipboardList className="h-10 w-10" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="bg-primary/10 text-primary rounded-full p-4 w-20 h-20 flex items-center justify-center">
                      <Megaphone className="h-10 w-10" />
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-2xl font-bold font-headline mb-2">Short Ad Copies</h3>
                    <p className="text-lg text-muted-foreground">From Meta ads to Story voiceovers, I make sure the first 3 seconds grab attention and the rest keeps them hooked.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <section className="py-20 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">Meta Ads Written By Me</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {metaAds.map((ad) => (
                  <Card key={ad.name} className="flex flex-col">
                    <CardHeader>
                      <div className="relative h-20 w-full mb-4">
                        <Image
                          src={ad.logoUrl}
                          alt={`${ad.name} logo`}
                          fill
                          className="object-contain"
                          data-ai-hint={ad.imageHint}
                        />
                      </div>
                      <CardTitle className="font-headline text-xl">{ad.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{ad.description}</p>
                    </CardContent>
                    <CardFooter>
                      {ad.websiteUrl && (
                        <Button asChild variant="outline" className="w-full">
                          <Link href={ad.websiteUrl} target="_blank" rel="noopener noreferrer">
                            <Globe className="mr-2 h-4 w-4" />
                            Visit Website
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
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
        </AnimatedSection>
        
        <AnimatedSection>
          <section className="py-20 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">Brands that I work with</h2>
                 <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  I've had the pleasure of collaborating with a diverse range of brands to elevate their voice and drive results.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {brands.slice(0, 3).map((brand) => (
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
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">More Brands I've Worked With</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-4 items-center">
                {brands.slice(3, 18).map((brand) => (
                    <div key={brand.id} className="flex justify-center group">
                        <div className="relative h-24 w-24 transition-transform duration-300 ease-in-out group-hover:scale-110">
                        <Image
                            src={brand.logoUrl}
                            alt={`${brand.name} logo`}
                            fill
                            className="object-contain grayscale opacity-60 transition-all group-hover:opacity-100 group-hover:grayscale-0"
                            data-ai-hint={brand.imageHint}
                        />
                        </div>
                    </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <section className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">Ready to Create Something Amazing?</h2>
                <p className="mt-6 text-xl text-muted-foreground">
                  I'm currently available for new projects. If you have an idea you're excited about, I'd love to hear from you.
                </p>
                <div className="mt-10">
                  <Button asChild size="lg">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

      </div>
    </>
  );
}

    