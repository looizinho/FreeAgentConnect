'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = getImage('hero');

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-[80vh] min-h-[500px] max-h-[720px] w-full">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground p-4">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Encontre o Talento Certo, Rápido.
        </h1>
        <p className="mt-4 max-w-[700px] text-lg md:text-xl text-primary-foreground/90">
          Conectamos sua empresa aos melhores freelancers do mercado. Do desenvolvimento ao design, sua equipe ideal está a um clique de distância.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#contato" onClick={handleScrollToContact}>
              Vamos Conversar
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
