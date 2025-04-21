
import { cn } from '@/lib/utils';

interface InvestorFormSectionProps {
  className?: string;
}

export function InvestorFormSection({ className }: InvestorFormSectionProps) {
  return (
    <section id="contact" className={cn("py-16 md:py-24 bg-muted", className)}>
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Investment Opportunities</h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
            </div>
            <p className="text-muted-foreground">
              Join our exclusive network of investors to access premium commercial real estate opportunities with strong returns.
            </p>
            <p className="text-muted-foreground">
              Complete our investor intake form to share your investment preferences and goals. Our team will then connect with you to discuss potential opportunities that align with your criteria.
            </p>
            
            <div className="bg-background border border-border/50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold mb-4">Investor Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Priority access to off-market properties",
                  "Thoroughly vetted investment opportunities",
                  "Personalized investment strategies",
                  "Regular market insights and analysis",
                  "Access to our network of industry professionals"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-background shadow-sm rounded-lg border border-border/50 p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Investor Intake Form</h3>
            {/* Google Form Embed */}
            <iframe
              src="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform?embedded=true" // Replace with your Google Form link
              width="100%"
              height="620"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Investor Intake Form"
              className="bg-transparent"
            >
              Loading form...
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
