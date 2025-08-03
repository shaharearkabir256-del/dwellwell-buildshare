import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Sofa, Lightbulb } from 'lucide-react';

const InteriorDesignDecoration = () => {
  const features = [
    {
      icon: Palette,
      title: "Custom Design",
      description: "Personalized interior design solutions for your space"
    },
    {
      icon: Sofa,
      title: "Furniture Selection",
      description: "Expert furniture selection and space optimization"
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Professional lighting design to enhance ambiance"
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
              Interior Design & Decoration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your space with professional interior design and decoration services
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
              <h3 className="text-2xl font-bold mb-4">Design Your Dream Space</h3>
              <p className="text-muted-foreground mb-6">
                Work with our interior design experts to create beautiful and functional spaces
              </p>
              <Button className="btn-premium">Start Designing</Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InteriorDesignDecoration;