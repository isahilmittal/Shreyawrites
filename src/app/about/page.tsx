import Image from 'next/image';
import { Award, PenTool, Rocket, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

const skills = [
  'Ad Campaigns',
  'Web Copy & SEO',
  'Corporate Communications',
  'UX Writing',
  'Brand Storytelling',
  'Content Strategy',
  'Email Marketing',
  'Social Media Copy',
];

export const metadata: Metadata = {
  title: 'About Shreya | Shreya Writes',
  description: 'About copywriter Shreya, her skills, and expertise.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10 font-headline">My Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                <PenTool className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline mt-4">Brand Voice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Developing unique and consistent brand voices that stand out.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                <Rocket className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline mt-4">Conversion Copy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Writing persuasive copy for ads, landing pages, and emails that drives results.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                <Zap className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline mt-4">Content Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Creating strategic content plans that build audiences and authority.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                <Award className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline mt-4">UX Writing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Crafting clear and intuitive microcopy that enhances user experience.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10 font-headline">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <Badge key={skill} variant="default" className="text-lg py-2 px-4 font-medium">
              {skill}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
