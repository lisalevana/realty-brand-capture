
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function PdfPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Show popup after 5 seconds of page load
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user has already seen the popup
      const hasSeenPopup = localStorage.getItem('hasSeenPdfPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Set flag in localStorage to prevent showing again in this session
    localStorage.setItem('hasSeenPdfPopup', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send this data to your server
      setIsSubmitting(false);
      setIsOpen(false);
      
      // Save to localStorage to prevent showing again
      localStorage.setItem('hasSeenPdfPopup', 'true');
      
      // Show success message
      toast({
        title: "Success!",
        description: "Your investment guide will be sent to your email shortly.",
      });
      
      // In a real application, you would trigger the PDF download here
      // window.open('/your-investment-guide.pdf', '_blank');
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 p-2 text-muted-foreground hover:text-foreground"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        
        {/* Colored top bar */}
        <div className="bg-primary h-3 w-full"></div>
        
        <div className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-serif font-semibold mb-2">
              Free Commercial Real Estate Investment Guide
            </h3>
            <p className="text-muted-foreground text-sm">
              Get our exclusive guide with expert insights on commercial property investments.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Get My Free Guide"}
            </Button>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              By requesting this guide, you agree to receive email communications from us. 
              We respect your privacy and will never share your information.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
