import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp, FileCheck } from 'lucide-react';

const RawLandBuyingSelling = () => {
  const features = [
    {
      icon: MapPin,
      title: "Strategic Locations",
      description: "Prime land parcels in high-growth development areas"
    },
    {
      icon: TrendingUp,
      title: "Investment Potential",
      description: "Excellent appreciation potential for long-term investors"
    },
    {
      icon: FileCheck,
      title: "Clear Documentation",
      description: "Verified legal documentation and clear land titles"
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
              Raw Land Buying & Selling
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Invest in prime raw land with excellent development potential and growth prospects
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
              <h3 className="text-2xl font-bold mb-4">Secure Your Land Investment</h3>
              <p className="text-muted-foreground mb-6">
                Explore prime raw land opportunities with verified documentation and clear titles
              </p>
              <Button className="btn-premium">View Available Land</Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RawLandBuyingSelling;