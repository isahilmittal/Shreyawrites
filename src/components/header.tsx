"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, PenSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, className }: { href: string; label: string, className?: string; }) => (
    <Link
      href={href}
      onClick={() => setIsSheetOpen(false)}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        pathname === href ? 'text-primary' : 'text-muted-foreground',
        className
      )}
    >
      {label}
    </Link>
  );
  
  const isHomePage = pathname === '/';

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b", 
        isHomePage && !hasScrolled ? 'bg-transparent border-transparent' : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
    )}>
      <div className="container flex h-14 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="flex items-center space-x-2 mr-6">
            <PenSquare className="h-6 w-6 text-primary" />
            <span className={cn("font-bold font-headline", isHomePage && !hasScrolled ? 'text-white' : '')}>Shreya Writes</span>
          </Link>
          <nav className="hidden md:flex md:space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} className={cn(isHomePage && !hasScrolled ? 'text-white hover:text-primary' : '')}/>
            ))}
          </nav>
        </div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className={cn("md:hidden", isHomePage && !hasScrolled ? 'text-white hover:text-primary hover:bg-white/10' : '')}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col p-4">
              <Link href="/" onClick={() => setIsSheetOpen(false)} className="mb-8 flex items-center space-x-2">
                <PenSquare className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">Shreya Writes</span>
              </Link>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href} label={link.label} className="text-lg" />
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
