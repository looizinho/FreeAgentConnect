'use client';

import { useActionState, useFormStatus } from 'react-dom';
import { useEffect, useRef, useActionState as useReactActionState } from 'react';
import Image from 'next/image';
import { Bot, Loader2, Star, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { matchFreelancersAction } from '@/app/actions';
import { Badge } from '../ui/badge';
import type { Freelancer } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analisando...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-4 w-4" />
          Encontrar Freelancers
        </>
      )}
    </Button>
  );
}

const FreelancerResultCard = ({ freelancer }: { freelancer: Freelancer }) => (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
      <CardHeader className="flex flex-row items-start gap-4 p-4">
        <div className="relative h-20 w-20 shrink-0">
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
        <div className="flex flex-wrap gap-2">
          {freelancer.skills.map((skill) => (
            <Badge key={skill} variant="secondary">{skill}</Badge>
          ))}
        </div>
        <div className="mt-4 text-right">
          <span className="text-xl font-bold text-accent">R${freelancer.rate}</span>
          <span className="text-sm text-muted-foreground">/hora</span>
        </div>
      </CardContent>
    </Card>
);

export default function AiMatcherSection() {
  const { toast } = useToast();
  const resultsRef = useRef<HTMLDivElement>(null);
  const initialState = { message: null, freelancers: null, success: false, errors: {} };
  const [state, dispatch] = useReactActionState(matchFreelancersAction, initialState);

  useEffect(() => {
    if (state.success && state.freelancers && state.freelancers.length > 0) {
      toast({
        title: "Correspondência encontrada!",
        description: state.message,
      });
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (state.success === false && state.message) {
      toast({
        title: "Erro de Validação",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <section id="ai-match" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-primary">
            Nosso Matchmaker de IA
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Descreva seu projeto e nossa inteligência artificial encontrará os freelancers mais adequados para você em segundos.
          </p>
        </div>

        <Card className="mt-12 max-w-4xl mx-auto p-6 lg:p-8 shadow-2xl bg-background">
          <form action={dispatch}>
            <div className="grid w-full gap-4">
              <Textarea
                name="requirements"
                placeholder="Ex: Preciso de um desenvolvedor React com experiência em Next.js e Tailwind CSS para criar uma landing page responsiva..."
                className="min-h-[120px] text-base"
                required
              />
              {state.errors?.requirements && (
                <p className="text-sm text-destructive">{state.errors.requirements[0]}</p>
              )}
              <div className="flex justify-center">
                <SubmitButton />
              </div>
            </div>
          </form>
        </Card>

        {state.success && state.freelancers && (
          <div ref={resultsRef} className="mt-16">
            <h3 className="text-2xl font-bold tracking-tight text-center mb-8">{state.message}</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {state.freelancers.map((freelancer) => (
                <FreelancerResultCard key={freelancer.id} freelancer={freelancer} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
