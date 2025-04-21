
import { cn } from '@/lib/utils';

interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className }: AboutSectionProps) {
  return (
    <section id="about" className={cn("py-16 md:py-24", className)}>
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200" 
              alt="Commercial Building" 
              className="rounded-lg shadow-lg object-cover w-full h-[500px]"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">About Realty Nexus</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            <p className="text-muted-foreground">
              With over 15 years of experience in commercial real estate, Realty Nexus has established 
              itself as a trusted partner for investors, business owners, and property managers.
            </p>
            <p className="text-muted-foreground">
              We specialize in identifying high-quality commercial properties, providing comprehensive 
              management services, and delivering exceptional investment opportunities with consistent returns.
            </p>
            <p className="text-muted-foreground">
              Our team of experienced professionals combines market expertise with personalized service 
              to help our clients achieve their commercial real estate goals.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border border-border p-4 rounded-md">
                <div className="text-3xl font-semibold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Properties Managed</div>
              </div>
              <div className="border border-border p-4 rounded-md">
                <div className="text-3xl font-semibold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="border border-border p-4 rounded-md">
                <div className="text-3xl font-semibold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="border border-border p-4 rounded-md">
                <div className="text-3xl font-semibold text-primary mb-2">$500M+</div>
                <div className="text-sm text-muted-foreground">Transaction Volume</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
