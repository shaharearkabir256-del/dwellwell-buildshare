import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Hammer, TrendingUp, RefreshCw } from 'lucide-react';

const OldHouseRenovationResale = () => {
  const features = [
    {
      icon: Hammer,
      title: "Expert Renovation",
      description: "Professional renovation services with modern upgrades"
    },
    {
      icon: TrendingUp,
      title: "Value Enhancement",
      description: "Increase property value through strategic improvements"
    },
    {
      icon: RefreshCw,
      title: "Complete Makeover",
      description: "Transform old properties into modern homes"
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
              Old House Renovation & Resale
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform old properties into modern homes with our expert renovation and resale services
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
              <h3 className="text-2xl font-bold mb-4">Transform Your Property</h3>
              <p className="text-muted-foreground mb-6">
                Get expert renovation services to maximize your property's potential and value
              </p>
              <Button className="btn-premium">Start Renovation</Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OldHouseRenovationResale;