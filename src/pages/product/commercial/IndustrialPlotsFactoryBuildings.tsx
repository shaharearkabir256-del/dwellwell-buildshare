import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Factory, Truck, Zap } from 'lucide-react';

const IndustrialPlotsFactoryBuildings = () => {
  const features = [
    {
      icon: Factory,
      title: "Industrial Infrastructure",
      description: "Ready-to-use industrial plots and factory buildings"
    },
    {
      icon: Truck,
      title: "Logistics Access",
      description: "Strategic locations with excellent transportation connectivity"
    },
    {
      icon: Zap,
      title: "Utility Ready",
      description: "Pre-installed utilities including power, water, and communication"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="commercial" />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Industrial Plots & Factory Buildings
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Secure industrial plots and factory buildings for your manufacturing and business operations
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
              <h3 className="text-2xl font-bold mb-4">Expand Your Industrial Operations</h3>
              <p className="text-muted-foreground mb-6">
                Find the perfect industrial space for your manufacturing and business needs
              </p>
              <Button className="btn-premium">Explore Industrial Spaces</Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IndustrialPlotsFactoryBuildings;