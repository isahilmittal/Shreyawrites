import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="md:col-span-1">
          <h1 className="text-6xl font-bold tracking-tighter text-foreground sm:text-7xl lg:text-8xl font-headline">
            Shreya Singh
          </h1>
          <p className="text-2xl text-primary font-medium mt-2">
            Copywriter
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            For over 8 years, I've been helping brands find their voice and tell their stories. I believe that great copy is more than just words on a page—it's about building relationships, sparking curiosity, and driving action. My passion lies in understanding an audience and delivering a message that truly resonates.
          </p>
        </div>
        <div className="md:col-span-1 flex justify-center">
          <div className="relative h-80 w-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://i.postimg.cc/gxZqbX84/image.png"
              alt="A professional headshot of Shreya"
              fill
              className="object-cover"
              data-ai-hint="professional headshot"
            />
          </div>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
          Words that Work
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Explore a selection of my recent copywriting projects.
        </p>
      </section>

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
    </div>
  );
}
