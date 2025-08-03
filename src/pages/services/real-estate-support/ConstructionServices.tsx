import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HardHat, FileText, CheckCircle } from 'lucide-react';

const ConstructionServices = () => {
  const features = [
    {
      icon: HardHat,
      title: "Professional Construction",
      description: "Expert construction services with quality materials and craftsmanship"
    },
    {
      icon: FileText,
      title: "Project Planning",
      description: "Comprehensive planning and design for construction projects"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous quality control and timely project completion"
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
              Construction Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional construction services from planning to completion with quality assurance
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
              <h3 className="text-2xl font-bold mb-4">Start Your Construction Project</h3>
              <p className="text-muted-foreground mb-6">
                Partner with our construction experts for your building and development projects
              </p>
              <Button className="btn-premium">Get Construction Quote</Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConstructionServices;