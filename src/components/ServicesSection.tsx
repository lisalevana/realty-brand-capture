
import { Building, Users, Search, Calendar } from "lucide-react";
import { cn } from '@/lib/utils';

interface ServicesSectionProps {
  className?: string;
}

export function ServicesSection({ className }: ServicesSectionProps) {
  const services = [
    {
      icon: Building,
      title: "Property Management",
      description: "Comprehensive management services for commercial property owners and investors."
    },
    {
      icon: Users,
      title: "Investment Services",
      description: "Expert guidance for acquiring, managing, and optimizing commercial real estate investments."
    },
    {
      icon: Search,
      title: "Property Acquisition",
      description: "Specialized search and negotiation services to help you find and secure ideal properties."
    },
    {
      icon: Calendar,
      title: "Leasing Services",
      description: "Full-service leasing representation for both property owners and prospective tenants."
    }
  ];

  return (
    <section id="services" className={cn("py-16 md:py-24 bg-muted", className)}>
      <div className="container max-w-screen-xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            Comprehensive commercial real estate solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="bg-background p-6 md:p-8 rounded-lg shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
