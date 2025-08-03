import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HandHeart, TrendingUp, Shield } from 'lucide-react';

const RealEstateInvestmentPartnership = () => {
  const features = [
    {
      icon: HandHeart,
      title: "Strategic Partnerships",
      description: "Collaborative investment approaches with experienced partners"
    },
    {
      icon: TrendingUp,
      title: "Maximized Returns",
      description: "Optimized investment strategies for superior returns"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Professional risk assessment and mitigation strategies"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="services" />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Real Estate Investment Partnership
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partner with us for strategic real estate investments with professional guidance and optimized returns
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
              <h3 className="text-2xl font-bold mb-4">Start Your Investment Journey</h3>
              <p className="text-muted-foreground mb-6">
                Partner with our experienced team for strategic real estate investment opportunities
              </p>
              <Button className="btn-premium">Become a Partner</Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RealEstateInvestmentPartnership;