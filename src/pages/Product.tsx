import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Home, Building, MapPin, Factory } from 'lucide-react';

const Product = () => {
  const productCategories = [
    {
      title: "Search Area",
      description: "Find your perfect property with our advanced search tools",
      icon: Search,
      path: "/product/search",
      color: "bg-blue-500/20 hover:bg-blue-500/30"
    },
    {
      title: "Residential Real Estate",
      description: "Discover residential properties for your dream home",
      icon: Home,
      path: "/product/residential",
      color: "bg-green-500/20 hover:bg-green-500/30",
      subItems: [
        { name: "Residential Plots for Sale", path: "/product/residential/plots-for-sale" },
        { name: "Apartments for Sale", path: "/product/residential/apartments-for-sale" },
        { name: "Gated Community Projects", path: "/product/residential/gated-community-projects" },
        { name: "Farmhouses & Holiday Homes", path: "/product/residential/farmhouses-holiday-homes" },
        { name: "Old House Renovation & Resale", path: "/product/residential/old-house-renovation-resale" },
        { name: "Rental Apartments Service", path: "/product/residential/rental-apartments-service" }
      ]
    },
    {
      title: "Commercial Real Estate",
      description: "Explore commercial properties for business expansion",
      icon: Building,
      path: "/product/commercial",
      color: "bg-purple-500/20 hover:bg-purple-500/30",
      subItems: [
        { name: "Shopping Malls & Market Projects", path: "/product/commercial/shopping-malls-market-projects" },
        { name: "Office Space for Rent/Sale", path: "/product/commercial/office-space-rent-sale" },
        { name: "Hotels & Resorts Properties", path: "/product/commercial/hotels-resorts-properties" },
        { name: "Industrial Plots & Factory Buildings", path: "/product/commercial/industrial-plots-factory-buildings" },
        { name: "Co-working Spaces", path: "/product/commercial/co-working-spaces" },
        { name: "Warehouses & Storage Facilities", path: "/product/commercial/warehouses-storage-facilities" }
      ]
    },
    {
      title: "Land Development & Investment",
      description: "Invest in land development opportunities",
      icon: MapPin,
      path: "/product/land-development-investment",
      color: "bg-orange-500/20 hover:bg-orange-500/30",
      subItems: [
        { name: "Raw Land Buying & Selling", path: "/product/land-development-investment/raw-land-buying-selling" },
        { name: "Farm Land Projects", path: "/product/land-development-investment/farm-land-projects" },
        { name: "Tourism & Resort Land Development", path: "/product/land-development-investment/tourism-resort-land-development" },
        { name: "Residential Project Development", path: "/product/land-development-investment/residential-project-development" }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="product" />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of real estate products designed to meet all your property needs
            </p>
          </div>

          {/* Product Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-lg">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {category.subItems ? (
                    <div className="space-y-3">
                      {category.subItems.map((item, subIndex) => (
                        <Link
                          key={subIndex}
                          to={item.path}
                          className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 border border-white/10 hover:border-primary/30"
                        >
                          <span className="text-sm font-medium">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link to={category.path}>
                      <Button className="w-full btn-premium">
                        Explore {category.title}
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Product;