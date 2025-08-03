import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Mountain, Waves } from 'lucide-react';

const TourismResortLandDevelopment = () => {
  const features = [
    {
      icon: Camera,
      title: "Scenic Destinations",
      description: "Prime locations with natural beauty and tourist attractions"
    },
    {
      icon: Mountain,
      title: "Diverse Landscapes",
      description: "Hills, beaches, forests, and other natural environments"
    },
    {
      icon: Waves,
      title: "Tourism Potential",
      description: "High tourism demand with excellent earning potential"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="investment" />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Tourism & Resort Land Development
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Develop exceptional tourism and resort properties in scenic destinations with high growth potential
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
              <h3 className="text-2xl font-bold mb-4">Develop Tourism Properties</h3>
              <p className="text-muted-foreground mb-6">
                Invest in scenic land for tourism and resort development with exceptional returns
              </p>
              <Button className="btn-premium">Explore Opportunities</Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TourismResortLandDevelopment;