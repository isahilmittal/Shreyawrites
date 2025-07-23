import { projects } from '@/lib/projects';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} | Shreya Writes`,
    description: project.shortDescription,
  };
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="mb-8">
        <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      <article>
        <header className="mb-8 text-center">
          <Badge variant="secondary" className="mb-4">{project.category}</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
            {project.title}
          </h1>
        </header>

        <div className="relative mb-12 h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            data-ai-hint={project.imageHint}
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="md:col-span-2 space-y-6 text-lg text-foreground/90">
              <p className="lead">{project.longDescription}</p>
            </div>
            <aside className="md:col-span-1 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Creative Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.process}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Outcome</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.outcome}</p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
}
