import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface ProductFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  location: string;
  area: string;
  type: string;
  image: string;
  features: string[];
  status: 'available' | 'sold' | 'reserved';
}

interface ProductTemplateProps {
  pageTitle: string;
  pageDescription: string;
  backgroundVariant: 'product' | 'commercial' | 'investment';
  features: ProductFeature[];
  products: Product[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}

const ProductTemplate = ({
  pageTitle,
  pageDescription,
  backgroundVariant,
  features,
  products,
  ctaTitle,
  ctaDescription,
  ctaButtonText
}: ProductTemplateProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'sold':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'reserved':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant={backgroundVariant} />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {pageTitle}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {pageDescription}
            </p>
          </div>

          {/* Features Section */}
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

          {/* Products Grid */}
          {products.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Available Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Card key={product.id} className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className={`absolute top-4 right-4 ${getStatusColor(product.status)}`}>
                        {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{product.title}</CardTitle>
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                      </div>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Location:</span>
                          <span>{product.location}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Area:</span>
                          <span>{product.area}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Type:</span>
                          <span>{product.type}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button className="w-full btn-premium">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center">
            <Card className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">{ctaTitle}</h3>
              <p className="text-muted-foreground mb-6">
                {ctaDescription}
              </p>
              <Button className="btn-premium">{ctaButtonText}</Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductTemplate;