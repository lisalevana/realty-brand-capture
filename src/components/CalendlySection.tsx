
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { cn } from '@/lib/utils';

interface CalendlySectionProps {
  className?: string;
}

export function CalendlySection({ className }: CalendlySectionProps) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // Function to handle opening Calendly
  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  // Function to handle closing Calendly
  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  // Add event listener for Calendly events
  useEffect(() => {
    const handleCalendlyEvent = (e: any) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        if (e.data.event === 'calendly.close') {
          closeCalendly();
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    
    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []);

  return (
    <section id="schedule" className={cn("py-16 bg-primary text-primary-foreground", className)}>
      <div className="container max-w-screen-xl">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <Calendar size={32} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Schedule a Consultation
          </h2>
          <p className="opacity-80 mb-8">
            Speak with one of our commercial real estate experts to discuss your property needs and investment goals.
          </p>
          <Button 
            size="lg" 
            onClick={openCalendly}
            className="bg-white text-primary hover:bg-white/90"
          >
            Book Your Call Now
          </Button>
        </div>
      </div>

      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg shadow-xl w-full max-w-4xl h-[80vh] relative">
            <button 
              onClick={closeCalendly}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-muted"
            >
              ✕
            </button>
            <iframe
              src="https://calendly.com/your-calendly-link" // Replace with your Calendly link
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a call"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
