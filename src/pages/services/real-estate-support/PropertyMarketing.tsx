import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Video, Share2 } from 'lucide-react';

const PropertyMarketing = () => {
  const features = [
    {
      icon: Camera,
      title: "Professional Photography",
      description: "High-quality property photography to showcase your listings"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Engaging property videos and virtual tours"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns to reach potential buyers"
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
              Property Marketing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional photography, videography, and social media marketing to showcase your properties
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
              <h3 className="text-2xl font-bold mb-4">Showcase Your Property</h3>
              <p className="text-muted-foreground mb-6">
                Professional marketing services to attract more buyers and achieve better sales
              </p>
              <Button className="btn-premium">Start Marketing</Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyMarketing;