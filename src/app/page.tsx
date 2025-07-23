import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
          Words that Work
        </h1>
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
