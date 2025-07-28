import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: property1,
      title: 'Modern Downtown Apartment',
      location: 'Downtown Seattle',
      price: '$2,500',
      period: '/month',
      beds: 2,
      baths: 2,
      sqft: 1200,
      available: 'Available Now',
      features: ['Pet Friendly', 'Parking Included', 'Gym Access']
    },
    {
      id: 2,
      image: property2,
      title: 'Luxury Suburban Villa',
      location: 'Bellevue Hills',
      price: '$4,200',
      period: '/month',
      beds: 4,
      baths: 3,
      sqft: 2500,
      available: 'Available Feb 1',
      features: ['Garden', 'Garage', 'Premium Finishes']
    },
    {
      id: 3,
      image: property1,
      title: 'Cozy Studio Loft',
      location: 'Capitol Hill',
      price: '$1,800',
      period: '/month',
      beds: 1,
      baths: 1,
      sqft: 650,
      available: 'Available Now',
      features: ['City Views', 'Modern Kitchen', 'Rooftop Access']
    }
  ];

  return (
    <section id="properties" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Properties
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover premium properties available for sharing. Each listing is verified 
            and comes with detailed information about amenities and availability.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="property-card group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {property.available}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{property.title}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-primary">
                    {property.price}
                    <span className="text-sm text-muted-foreground font-normal">
                      {property.period}
                    </span>
                  </div>
                </div>

                {/* Property Stats */}
                <div className="flex items-center justify-between mb-4 text-muted-foreground">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.beds} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.baths} baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.sqft} sqft</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded-lg text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-up">
          <Button variant="outline" size="lg" className="px-8">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;