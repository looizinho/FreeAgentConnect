'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/landing/icons';
import { cn } from '@/lib/utils';

const menuItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Freelancers', href: '#freelancers' },
  { label: 'AI Match', href: '#ai-match' },
  { label: 'Fale Conosco', href: '#contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-6 text-sm font-medium', className)}>
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={(e) => handleLinkClick(e, item.href)}
          className="text-foreground/80 transition-colors hover:text-primary"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b bg-background/95 shadow-sm backdrop-blur' : 'bg-background/0'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" onClick={(e) => handleLinkClick(e, '#hero')} className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tight">
            Free Agent Connect
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                    <Link href="#" onClick={(e) => handleLinkClick(e, '#hero')} className="flex items-center gap-2">
                        <Logo className="h-8 w-8 text-primary" />
                        <span className="text-lg font-bold">Free Agent Connect</span>
                    </Link>
                </div>
                <nav className="mt-12 flex flex-col gap-6 text-lg">
                  {menuItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className="text-foreground/80 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
