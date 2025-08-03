import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Star, Search } from 'lucide-react';

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');

  // Mock property data
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Gulshan",
      location: "Gulshan, Dhaka",
      price: "৳85,00,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1200 sqft",
      type: "apartment",
      rating: 4.8,
      image: `https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=500&h=300&fit=crop`
    },
    {
      id: 2,
      title: "Luxury Villa in Uttara",
      location: "Uttara, Dhaka",
      price: "৳2,50,00,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "3500 sqft",
      type: "villa",
      rating: 4.9,
      image: `https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop`
    },
    {
      id: 3,
      title: "Commercial Space in Dhanmondi",
      location: "Dhanmondi, Dhaka",
      price: "৳1,20,00,000",
      bedrooms: 0,
      bathrooms: 2,
      area: "2000 sqft",
      type: "commercial",
      rating: 4.6,
      image: `https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=500&h=300&fit=crop`
    },
    {
      id: 4,
      title: "Residential Plot in Bashundhara",
      location: "Bashundhara, Dhaka",
      price: "৳95,00,000",
      bedrooms: 0,
      bathrooms: 0,
      area: "5 Katha",
      type: "land",
      rating: 4.7,
      image: `https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=300&fit=crop`
    }
  ];

  // Filter properties based on search criteria
  const filteredProperties = properties.filter(property => {
    const matchesSearch = searchQuery === '' || 
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = propertyType === '' || property.type === propertyType;
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="search" />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Property Search
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your perfect property with our advanced search tools
            </p>
          </div>

          {/* Search Filters */}
          <Card className="glass-card mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Input
                  placeholder="Search by location or property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="md:col-span-2"
                />
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Types</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Prices</SelectItem>
                    <SelectItem value="0-50">৳0 - ৳50 Lac</SelectItem>
                    <SelectItem value="50-100">৳50 Lac - ৳1 Cr</SelectItem>
                    <SelectItem value="100-200">৳1 Cr - ৳2 Cr</SelectItem>
                    <SelectItem value="200+">৳2 Cr+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {filteredProperties.length} Properties Found
            </h2>
          </div>

          {/* Property Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="glass-card hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary/90">
                      {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 text-yellow-500 mb-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{property.rating}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-4">
                      {property.price}
                    </div>
                    {property.bedrooms > 0 && (
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Bed className="w-4 h-4" />
                          <span>{property.bedrooms} Beds</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="w-4 h-4" />
                          <span>{property.bathrooms} Baths</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Square className="w-4 h-4" />
                          <span>{property.area}</span>
                        </div>
                      </div>
                    )}
                    {property.type === 'land' && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                        <Square className="w-4 h-4" />
                        <span>Area: {property.area}</span>
                      </div>
                    )}
                    <Button className="w-full btn-premium">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-4">No Properties Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria to find more properties.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setPropertyType('');
                  setPriceRange('');
                }}
                className="btn-premium"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductSearch;