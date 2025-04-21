
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn("relative py-24 md:py-32 overflow-hidden", className)}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200" 
          alt="Modern commercial building" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-20 max-w-screen-xl">
        <div className="max-w-2xl text-white space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight">
            Commercial Real Estate Excellence
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-lg">
            Professional property solutions tailored to your investment goals and business needs.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="#schedule">Schedule Consultation</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="#properties">View Properties</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
