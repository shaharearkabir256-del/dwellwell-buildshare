import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Settings } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: "Land Development & Investment",
      description: "Professional investment partnership services",
      icon: TrendingUp,
      path: "/services/land-development-investment",
      color: "bg-emerald-500/20 hover:bg-emerald-500/30",
      subItems: [
        { name: "Real Estate Investment Partnership", path: "/services/land-development-investment/real-estate-investment-partnership" }
      ]
    },
    {
      title: "Real Estate Services & Support",
      description: "Comprehensive real estate support services",
      icon: Settings,
      path: "/services/real-estate-services-support",
      color: "bg-indigo-500/20 hover:bg-indigo-500/30",
      subItems: [
        { name: "Real Estate Brokerage (Agent Services)", path: "/services/real-estate-services-support/real-estate-brokerage" },
        { name: "Property Management", path: "/services/real-estate-services-support/property-management" },
        { name: "Property Marketing (Photography, Videography, Social Media)", path: "/services/real-estate-services-support/property-marketing" },
        { name: "Interior Design & Decoration", path: "/services/real-estate-services-support/interior-design-decoration" },
        { name: "Real Estate Consultancy", path: "/services/real-estate-services-support/real-estate-consultancy" },
        { name: "Construction Services", path: "/services/real-estate-services-support/construction-services" }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="services" />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional real estate services and negotiations to support your property journey
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-lg">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.subItems.map((item, subIndex) => (
                      <Link
                        key={subIndex}
                        to={item.path}
                        className="block p-4 rounded-lg hover:bg-white/10 transition-colors duration-200 border border-white/10 hover:border-primary/30 group/item"
                      >
                        <span className="text-sm font-medium group-hover/item:text-primary transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us today to discuss your real estate needs and get professional guidance
              </p>
              <Link to="/contact">
                <Button className="btn-premium">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;