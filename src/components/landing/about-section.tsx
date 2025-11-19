import { Users, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Agilidade',
    description: 'Encontre e contrate freelancers qualificados em questão de horas, não semanas. Acelere seus projetos com talentos sob demanda.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Qualidade Garantida',
    description: 'Nossa curadoria rigorosa seleciona apenas os profissionais mais experientes e confiáveis para garantir o sucesso do seu projeto.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Crescimento',
    description: 'Escale sua equipe de forma flexível. Aumente ou diminua sua força de trabalho de acordo com as necessidades do seu negócio.',
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            A ponte entre sua visão e a execução perfeita
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Free Agent Connect nasceu para simplificar a forma como empresas e freelancers se conectam. Eliminamos a burocracia e focamos no que realmente importa: conectar talento e oportunidade para criar resultados incríveis.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
