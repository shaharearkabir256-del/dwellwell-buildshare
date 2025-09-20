import { useState, useEffect, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Star, Search, Filter, Loader2 } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

// Custom hook for debouncing
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [propertyType, setPropertyType] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  
  // Debounce search query for better performance
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // Mock property data with proper price numbers for filtering
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Gulshan",
      location: "Gulshan, Dhaka",
      price: "৳85,00,000",
      priceValue: 8500000, // Numeric value for filtering
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
      priceValue: 25000000,
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
      priceValue: 12000000,
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
      priceValue: 9500000,
      bedrooms: 0,
      bathrooms: 0,
      area: "5 Katha",
      type: "land",
      rating: 4.7,
      image: `https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=300&fit=crop`
    },
    {
      id: 5,
      title: "Premium Office Space in Banani",
      location: "Banani, Dhaka",
      price: "৳3,00,00,000",
      priceValue: 30000000,
      bedrooms: 0,
      bathrooms: 3,
      area: "2500 sqft",
      type: "commercial",
      rating: 4.8,
      image: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop`
    },
    {
      id: 6,
      title: "Cozy Studio in Dhanmondi",
      location: "Dhanmondi, Dhaka",
      price: "৳45,00,000",
      priceValue: 4500000,
      bedrooms: 1,
      bathrooms: 1,
      area: "650 sqft",
      type: "apartment",
      rating: 4.5,
      image: `https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop`
    }
  ];

  // Enhanced filtering logic with price range
  const filteredProperties = useMemo(() => {
    setIsLoading(true);
    
    const filtered = properties.filter(property => {
      const matchesSearch = debouncedSearchQuery === '' || 
        property.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(debouncedSearchQuery.toLowerCase());
      
      const matchesType = propertyType === '' || propertyType === 'all' || property.type === propertyType;
      
      // Price range filtering
      let matchesPrice = true;
      if (priceRange && priceRange !== 'all') {
        const price = property.priceValue;
        switch (priceRange) {
          case '0-50':
            matchesPrice = price <= 5000000; // 50 lac
            break;
          case '50-100':
            matchesPrice = price > 5000000 && price <= 10000000; // 50 lac - 1 cr
            break;
          case '100-200':
            matchesPrice = price > 10000000 && price <= 20000000; // 1 cr - 2 cr
            break;
          case '200+':
            matchesPrice = price > 20000000; // 2 cr+
            break;
          default:
            matchesPrice = true;
        }
      }
      
      return matchesSearch && matchesType && matchesPrice;
    });

    // Simulate loading for smooth UX
    setTimeout(() => setIsLoading(false), 200);
    
    return filtered;
  }, [debouncedSearchQuery, propertyType, priceRange]);

  const clearFilters = () => {
    setSearchQuery('');
    setPropertyType('all');
    setPriceRange('all');
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="search" />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header with improved animations */}
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t('search.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('search.subtitle')}
            </p>
          </div>

          {/* Enhanced Search Filters */}
          <Card className="glass-card mb-12 animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <div className="p-2 rounded-lg bg-gradient-primary text-white">
                  <Search className="w-5 h-5" />
                </div>
                {t('search.filters')}
              </CardTitle>
              <CardDescription>
                {t('search.filters.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="md:col-span-2 lg:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder={t('search.placeholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="transition-all duration-300 hover:border-primary/50">
                    <SelectValue placeholder={t('search.propertyType')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('search.allTypes')}</SelectItem>
                    <SelectItem value="apartment">{t('search.apartment')}</SelectItem>
                    <SelectItem value="villa">{t('search.villa')}</SelectItem>
                    <SelectItem value="commercial">{t('search.commercial')}</SelectItem>
                    <SelectItem value="land">{t('search.land')}</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="transition-all duration-300 hover:border-primary/50">
                    <SelectValue placeholder={t('search.priceRange')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('search.allPrices')}</SelectItem>
                    <SelectItem value="0-50">{t('search.price.0-50')}</SelectItem>
                    <SelectItem value="50-100">{t('search.price.50-100')}</SelectItem>
                    <SelectItem value="100-200">{t('search.price.100-200')}</SelectItem>
                    <SelectItem value="200+">{t('search.price.200+')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {(searchQuery || (propertyType && propertyType !== 'all') || (priceRange && priceRange !== 'all')) && (
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Filter className="w-4 h-4" />
                    <span>{t('search.filterActive')}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={clearFilters}
                    className="transition-all duration-300 hover:bg-destructive hover:text-destructive-foreground"
                  >
                    {t('search.clearFilters')}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results with loading state */}
          <div className="mb-8 flex items-center justify-between animate-slide-in-right">
            <h2 className="text-2xl font-bold text-foreground">
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t('search.searching')}
                </div>
              ) : (
                `${filteredProperties.length}${t('search.resultsFound')}`
              )}
            </h2>
            {!isLoading && filteredProperties.length > 0 && (
              <Badge variant="secondary" className="text-sm">
                {filteredProperties.length} {t('search.results')}
              </Badge>
            )}
          </div>

          {/* Enhanced Property Grid with staggered animations */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="glass-card animate-pulse">
                  <div className="h-48 bg-muted rounded-t-xl"></div>
                  <CardContent className="p-6 space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                    <div className="h-6 bg-muted rounded w-2/3"></div>
                    <div className="h-10 bg-muted rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <Card 
                  key={property.id} 
                  className="glass-card hover:shadow-premium transition-all duration-500 overflow-hidden group hover:scale-[1.02] hover:-translate-y-1"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fade-up 0.6s ease-out forwards'
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm border-0 text-primary-foreground">
                      {property.type === 'apartment' && t('search.apartment')}
                      {property.type === 'villa' && t('search.villa')}
                      {property.type === 'commercial' && t('search.commercial')}
                      {property.type === 'land' && t('search.land')}
                    </Badge>
                    <div className="absolute top-4 left-4 flex items-center gap-1 text-white bg-black/30 backdrop-blur-sm px-2 py-1 rounded-lg">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{property.rating}</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {property.title}
                      </h3>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                    </div>
                    
                    <div className="text-2xl font-bold text-primary">
                      {property.price}
                    </div>
                    
                    {property.bedrooms > 0 && (
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Bed className="w-4 h-4" />
                          <span>{property.bedrooms} {t('search.bedrooms')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="w-4 h-4" />
                          <span>{property.bathrooms} {t('search.bathrooms')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Square className="w-4 h-4" />
                          <span>{property.area}</span>
                        </div>
                      </div>
                    )}
                    
                    {property.type === 'land' && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Square className="w-4 h-4" />
                        <span>{t('search.area')}: {property.area}</span>
                      </div>
                    )}
                    
                    <Button className="w-full btn-premium group-hover:shadow-hover transition-all duration-300">
                      {t('search.viewDetails')}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 animate-fade-in">
              <div className="text-6xl mb-6 animate-bounce">🏠</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{t('search.noResults')}</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                {t('search.noResultsDescription')}
              </p>
              <Button 
                onClick={clearFilters}
                className="btn-premium hover:scale-105 transition-transform duration-300"
              >
                {t('search.clearFilters')}
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