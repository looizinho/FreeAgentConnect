'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enviando...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Enviar Mensagem
        </>
      )}
    </Button>
  );
}

export default function ContactSection() {
  const { toast } = useToast();
  const initialState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useFormState(submitContactForm, initialState);

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Sucesso!',
        description: state.message,
      });
      // Consider resetting the form here if needed
    } else if (state.message && !state.success) {
      toast({
        title: 'Erro',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Fale Conosco</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tem alguma dúvida ou quer iniciar um projeto? Preencha o formulário abaixo ou entre em contato por um de nossos canais.
          </p>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <Card className="p-6 md:p-8 shadow-lg">
            <form action={dispatch} className="space-y-6">
              <div className="space-y-2">
                <Input name="name" placeholder="Seu nome" required />
                {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Input name="email" type="email" placeholder="Seu email" required />
                {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Textarea name="message" placeholder="Sua mensagem" className="min-h-[150px]" required />
                {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </Card>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-muted-foreground">Nosso time responderá em até 24 horas.</p>
                <a href="mailto:contato@freeagentconnect.com" className="text-primary hover:underline">
                  contato@freeagentconnect.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Telefone</h3>
                <p className="text-muted-foreground">Segunda a Sexta, das 9h às 18h.</p>
                <a href="tel:+5511999998888" className="text-primary hover:underline">
                  +55 (11) 99999-8888
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Endereço</h3>
                <p className="text-muted-foreground">Venha tomar um café conosco!</p>
                <p className="text-primary">Av. Principal, 123, São Paulo - SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
