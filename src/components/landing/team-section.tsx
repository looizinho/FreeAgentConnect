import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';
import type { TeamMember } from '@/lib/types';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Ana Silva',
    role: 'CEO & Founder',
    image: getImage('team-1'),
  },
  {
    id: '2',
    name: 'Carlos Oliveira',
    role: 'CTO & Co-Founder',
    image: getImage('team-2'),
  },
  {
    id: '3',
    name: 'Mariana Costa',
    role: 'Head of Talent',
    image: getImage('team-3'),
  },
];

export default function TeamSection() {
  return (
    <section id="quem-somos" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Conheça Nossa Equipe
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Somos apaixonados por tecnologia e talentos. Nossa missão é criar a melhor plataforma para conectar profissionais incríveis a projetos desafiadores.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    data-ai-hint={member.image.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary mt-1">{member.role}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
