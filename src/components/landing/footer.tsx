import Link from 'next/link';
import { Logo } from '@/components/landing/icons';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="#" className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="self-center text-xl font-bold whitespace-nowrap">
                Free Agent Connect
              </span>
            </Link>
            <p className="mt-2 max-w-xs text-muted-foreground">Conectando empresas aos melhores freelancers do mercado.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Navegação</h2>
              <ul className="text-muted-foreground font-medium">
                <li className="mb-4">
                  <a href="#sobre" className="hover:underline">Sobre</a>
                </li>
                <li className="mb-4">
                  <a href="#servicos" className="hover:underline">Serviços</a>
                </li>
                <li>
                  <a href="#freelancers" className="hover:underline">Freelancers</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Legal</h2>
              <ul className="text-muted-foreground font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Termos e Condições</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Contato</h2>
              <ul className="text-muted-foreground font-medium">
                <li className="mb-4">
                  <a href="mailto:contato@freeagentconnect.com" className="hover:underline">Email</a>
                </li>
                <li>
                  <a href="#contato" className="hover:underline">Formulário</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-border sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-muted-foreground sm:text-center">
            © {currentYear} <a href="#" className="hover:underline">Free Agent Connect™</a>. Todos os direitos reservados.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
