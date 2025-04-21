
import { useState } from 'react';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center">
        <div className="mr-4">
          <Logo />
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center gap-6 text-sm">
            <a href="#properties" className="transition-colors hover:text-foreground/80 text-foreground/60">Properties</a>
            <a href="#services" className="transition-colors hover:text-foreground/80 text-foreground/60">Services</a>
            <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</a>
            <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <a 
            href="#schedule" 
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors"
          >
            Schedule a Call
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden flex-1 justify-end">
          <button onClick={toggleMenu} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden bg-background border-t overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96" : "max-h-0"
      )}>
        <nav className="container flex flex-col py-4 gap-4">
          <a href="#properties" className="py-2 px-4 hover:bg-muted rounded-md">Properties</a>
          <a href="#services" className="py-2 px-4 hover:bg-muted rounded-md">Services</a>
          <a href="#about" className="py-2 px-4 hover:bg-muted rounded-md">About</a>
          <a href="#contact" className="py-2 px-4 hover:bg-muted rounded-md">Contact</a>
          <a 
            href="#schedule" 
            className="py-2 px-4 rounded-md bg-primary text-primary-foreground text-center font-medium shadow-sm"
          >
            Schedule a Call
          </a>
        </nav>
      </div>
    </header>
  );
}
