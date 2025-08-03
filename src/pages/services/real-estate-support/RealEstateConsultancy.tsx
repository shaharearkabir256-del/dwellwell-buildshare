import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, TrendingUp, FileCheck } from 'lucide-react';

const RealEstateConsultancy = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Expert Advice",
      description: "Professional guidance from experienced real estate consultants"
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Comprehensive market research and investment analysis"
    },
    {
      icon: FileCheck,
      title: "Strategic Planning",
      description: "Customized real estate strategies for your goals"
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
              Real Estate Consultancy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional real estate consultancy services to guide your investment and property decisions
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
              <h3 className="text-2xl font-bold mb-4">Get Expert Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a consultation with our real estate experts for personalized guidance
              </p>
              <Button className="btn-premium">Book Consultation</Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RealEstateConsultancy;