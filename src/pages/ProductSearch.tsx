import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, Bed, Bath, Square, Star } from 'lucide-react';
import AnimatedBackground from '@/components/ui/animated-background';

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');

  // Mock property data
  const properties = [
    {
      id: 1,
      title: 'Modern Apartment in Gulshan',
      price: '৳85,00,000',
      location: 'Gulshan, Dhaka',
      bedrooms: 3,
      bathrooms: 2,
      area: '1200 sqft',
      rating: 4.8,
      image: '/placeholder.svg',
      type: 'Apartment',
      description: 'Luxury apartment with modern amenities and city view'
    },
    {
      id: 2,
      title: 'Family House in Dhanmondi',
      price: '৳1,20,00,000',
      location: 'Dhanmondi, Dhaka',
      bedrooms: 4,
      bathrooms: 3,
      area: '1800 sqft',
      rating: 4.9,
      image: '/placeholder.svg',
      type: 'House',
      description: 'Spacious family house with garden and parking'
    },
    {
      id: 3,
      title: 'Luxury Villa in Uttara',
      price: '৳2,50,00,000',
      location: 'Uttara, Dhaka',
      bedrooms: 5,
      bathrooms: 4,
      area: '2500 sqft',
      rating: 4.7,
      image: '/placeholder.svg',
      type: 'Villa',
      description: 'Premium villa with swimming pool and gym'
    },
    {
      id: 4,
      title: 'Commercial Space in Motijheel',
      price: '৳95,00,000',
      location: 'Motijheel, Dhaka',
      bedrooms: 0,
      bathrooms: 2,
      area: '800 sqft',
      rating: 4.5,
      image: '/placeholder.svg',
      type: 'Commercial',
      description: 'Prime commercial space for business'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !propertyType || property.type === propertyType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="search" />
      <Navigation />
      <div className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Find Your Perfect{' '}
                <span className="text-yellow-300">Property</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Search through thousands of properties and find your dream home or investment opportunity
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto animate-slide-up">
              <div className="glass-card p-6 rounded-2xl">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Search by location or property name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    >
                      <option value="">All Types</option>
                      <option value="Apartment">Apartment</option>
                      <option value="House">House</option>
                      <option value="Villa">Villa</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>
                  <div>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    >
                      <option value="">Price Range</option>
                      <option value="0-50">৳0 - ৳50 Lac</option>
                      <option value="50-100">৳50 - ৳100 Lac</option>
                      <option value="100-200">৳100 - ৳200 Lac</option>
                      <option value="200+">৳200+ Lac</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-muted-foreground">
                    {filteredProperties.length} properties found
                  </p>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <Card 
                  key={property.id} 
                  className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-white">
                      {property.type}
                    </Badge>
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/70 rounded-full px-2 py-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{property.rating}</span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {property.title}
                    </CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {property.description}
                      </p>
                      
                      <div className="flex justify-between items-center text-sm">
                        {property.bedrooms > 0 && (
                          <div className="flex items-center">
                            <Bed className="w-4 h-4 mr-1" />
                            {property.bedrooms} Bed
                          </div>
                        )}
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          {property.bathrooms} Bath
                        </div>
                        <div className="flex items-center">
                          <Square className="w-4 h-4 mr-1" />
                          {property.area}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t">
                        <span className="text-2xl font-bold text-primary">
                          {property.price}
                        </span>
                        <Button size="sm" className="btn-premium">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">No Properties Found</h3>
                <p className="text-muted-foreground mb-8">
                  Try adjusting your search criteria or browse all properties
                </p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setPropertyType('');
                    setPriceRange('');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductSearch;