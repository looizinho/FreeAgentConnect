import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Code, Paintbrush, BarChart, Bot } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-10 w-10 text-accent" />,
    title: 'Desenvolvimento e TI',
    description: 'Conectamos você a desenvolvedores, engenheiros de software, especialistas em DevOps, e muito mais.',
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-accent" />,
    title: 'Design e Criatividade',
    description: 'Encontre designers gráficos, UI/UX, ilustradores e criativos para dar vida à sua marca.',
  },
  {
    icon: <BarChart className="h-10 w-10 text-accent" />,
    title: 'Marketing Digital',
    description: 'Acesse especialistas em SEO, marketing de conteúdo, gestão de redes sociais e campanhas pagas.',
  },
  {
    icon: <Bot className="h-10 w-10 text-accent" />,
    title: 'AI Matching Inteligente',
    description: 'Nossa IA analisa seu projeto para encontrar os freelancers com as habilidades mais relevantes.',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Nossos Serviços</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Oferecemos uma gama completa de soluções para garantir que você encontre o talento perfeito para qualquer tipo de projeto.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-start p-6 shadow-md hover:shadow-accent/20 transition-shadow duration-300">
                {service.icon}
                <CardHeader className="p-0 pt-4">
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-2">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
