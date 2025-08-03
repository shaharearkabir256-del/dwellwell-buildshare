import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Wifi, Coffee } from 'lucide-react';

const CoWorkingSpaces = () => {
  const features = [
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Dynamic spaces designed for networking and collaboration"
    },
    {
      icon: Wifi,
      title: "High-Speed Connectivity",
      description: "Premium internet and tech infrastructure for productivity"
    },
    {
      icon: Coffee,
      title: "Modern Amenities",
      description: "Cafeteria, meeting rooms, and recreational facilities"
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
              Co-working Spaces
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern co-working spaces designed for entrepreneurs, freelancers, and growing businesses
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
              <h3 className="text-2xl font-bold mb-4">Join Our Co-working Community</h3>
              <p className="text-muted-foreground mb-6">
                Discover flexible workspace solutions designed for modern professionals
              </p>
              <Button className="btn-premium">Book Your Space</Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoWorkingSpaces;