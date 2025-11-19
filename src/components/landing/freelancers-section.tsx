import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getImage } from '@/lib/placeholder-images';
import type { Freelancer } from '@/lib/types';
import { Star, Briefcase } from 'lucide-react';

export const freelancers: Freelancer[] = [
  {
    id: '1',
    name: 'João Pereira',
    title: 'Desenvolvedor Full-Stack',
    rate: 85,
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    experience: 8,
    image: getImage('freelancer-1'),
  },
  {
    id: '2',
    name: 'Sofia Lima',
    title: 'UI/UX Designer',
    rate: 70,
    skills: ['Figma', 'User Research', 'Prototyping'],
    experience: 6,
    image: getImage('freelancer-2'),
  },
  {
    id: '3',
    name: 'Lucas Martins',
    title: 'Redator & Content Strategist',
    rate: 60,
    skills: ['SEO', 'Copywriting', 'Content Strategy'],
    experience: 5,
    image: getImage('freelancer-3'),
  },
  {
    id: '4',
    name: 'Gabriela Alves',
    title: 'Especialista em Marketing Digital',
    rate: 75,
    skills: ['Google Ads', 'Social Media', 'Analytics'],
    experience: 7,
    image: getImage('freelancer-4'),
  },
  {
    id: '5',
    name: 'Ricardo Jorge',
    title: 'Engenheiro de DevOps',
    rate: 90,
    skills: ['Kubernetes', 'Docker', 'CI/CD', 'Terraform'],
    experience: 10,
    image: getImage('freelancer-5'),
  },
  {
    id: '6',
    name: 'Beatriz Santos',
    title: 'Ilustradora e Artista Gráfica',
    rate: 65,
    skills: ['Adobe Illustrator', 'Procreate', 'Branding'],
    experience: 4,
    image: getImage('freelancer-6'),
  },
];

const FreelancerCard = ({ freelancer }: { freelancer: Freelancer }) => (
  <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
    <CardHeader className="flex flex-row items-start gap-4 p-4">
      <div className="relative h-24 w-24 shrink-0">
        <Image
          src={freelancer.image.imageUrl}
          alt={freelancer.name}
          fill
          className="rounded-full object-cover border-2 border-primary/20"
          data-ai-hint={freelancer.image.imageHint}
        />
      </div>
      <div className="flex-grow">
        <CardTitle className="text-lg">{freelancer.name}</CardTitle>
        <CardDescription>{freelancer.title}</CardDescription>
        <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Briefcase className="h-4 w-4 text-accent"/>
            <span>{freelancer.experience} anos</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-400" />
            <span>5.0</span>
          </div>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0 flex-grow flex flex-col justify-between">
      <div>
        <div className="flex flex-wrap gap-2">
          {freelancer.skills.map((skill) => (
            <Badge key={skill} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </div>
      <div className="mt-4 text-right">
        <span className="text-2xl font-bold text-accent">R${freelancer.rate}</span>
        <span className="text-sm text-muted-foreground">/hora</span>
      </div>
    </CardContent>
  </Card>
);

export default function FreelancersSection() {
  return (
    <section id="freelancers" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Talentos Verificados à sua Disposição
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Navegue por nossa seleção de freelancers de elite, prontos para impulsionar seu próximo projeto.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {freelancers.map((freelancer) => (
            <FreelancerCard key={freelancer.id} freelancer={freelancer} />
          ))}
        </div>
      </div>
    </section>
  );
}
