import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Ruler, TreePine } from 'lucide-react';

const PlotsForSale = () => {
  const features = [
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Strategically located plots in growing residential areas"
    },
    {
      icon: Ruler,
      title: "Various Sizes",
      description: "From compact plots to large estates for your dream home"
    },
    {
      icon: TreePine,
      title: "Green Surroundings",
      description: "Eco-friendly environments with natural landscapes"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="product" />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Residential Plots for Sale
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your perfect plot to build your dream home in prime residential locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card text-center">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Find Your Plot?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us to explore available residential plots in your preferred location
              </p>
              <Button className="btn-premium">View Available Plots</Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlotsForSale;