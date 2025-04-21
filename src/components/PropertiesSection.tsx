
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState } from "react";

interface PropertiesSectionProps {
  className?: string;
}

export function PropertiesSection({ className }: PropertiesSectionProps) {
  // Sample properties data
  // TODO: Edit the property data below to fit your needs.
  const allProperties = [
    {
      id: 1,
      title: "Downtown Office Tower",
      type: "Office",
      size: "25,000 sq ft",
      location: "Financial District, NY",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
    },
    {
      id: 2,
      title: "Riverside Retail Center",
      type: "Retail",
      size: "12,500 sq ft",
      location: "Westside, CA",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
    },
    {
      id: 3,
      title: "Parkview Commercial Complex",
      type: "Mixed Use",
      size: "50,000 sq ft",
      location: "Midtown, IL",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
    },
    // ----- EXAMPLE: These properties appear when "View All Properties" is clicked -----
    {
      id: 4,
      title: "Uptown Medical Plaza",
      type: "Medical",
      size: "18,000 sq ft",
      location: "Northside, TX",
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
    },
    {
      id: 5,
      title: "Harbor Logistics Park",
      type: "Industrial",
      size: "60,000 sq ft",
      location: "Harbor City, FL",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
    },
    {
      id: 6,
      title: "Central Business Center",
      type: "Office",
      size: "40,000 sq ft",
      location: "Downtown, GA",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
    }
  ];

  // Show one row (3 properties) by default, expand to 2 rows (6) on click
  const [showAll, setShowAll] = useState(false);
  const properties = showAll ? allProperties : allProperties.slice(0, 3);

  return (
    <section id="properties" className={cn("py-16 md:py-24", className)}>
      <div className="container max-w-screen-xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Featured Properties</h2>
          <p className="text-muted-foreground">
            Explore our selection of premium commercial real estate opportunities
          </p>
        </div>

        {/* TODO: Edit property grid and details below. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-background rounded-lg overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-60 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{property.title}</h3>
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                    {property.type}
                  </span>
                </div>
                <div className="text-muted-foreground text-sm space-y-1 mb-4">
                  <p>Size: {property.size}</p>
                  <p>Location: {property.location}</p>
                </div>
                {/* 
                  TODO: Replace below "View Details" button's onClick or link to your own property detail page if desired.
                */}
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {!showAll ? (
            <Button 
              variant="outline"
              size="lg"
              className="mx-auto"
              onClick={() => setShowAll(true)}
            >
              View All Properties
            </Button>
          ) : (
            // Optionally, provide a way to collapse or change this text
            <span className="text-muted-foreground text-sm">You are viewing all featured properties.</span>
          )}
        </div>
      </div>
    </section>
  );
}
