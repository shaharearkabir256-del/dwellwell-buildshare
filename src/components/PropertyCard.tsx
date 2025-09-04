import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Home, Calendar } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  description: string;
  price: string;
  location: string;
  area: string;
  type: string;
  features: string[];
  image: string;
  status: string;
}

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="aspect-video overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800&h=600';
          }}
        />
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant={property.status === 'available' ? 'default' : 'secondary'} className="mb-2">
            {property.status === 'available' ? 'উপলব্ধ' : 'বিক্রিত'}
          </Badge>
          <span className="text-xs text-muted-foreground">#{property.id}</span>
        </div>
        <CardTitle className="text-lg leading-tight">{property.title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          {property.location}
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <CardDescription className="text-sm mb-3 line-clamp-2">
          {property.description}
        </CardDescription>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Home className="w-4 h-4 text-muted-foreground" />
            <span>{property.type} • {property.area}</span>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {property.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {property.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{property.features.length - 3} আরো
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-3 border-t">
        <div className="font-semibold text-lg text-primary">
          {property.price}
        </div>
        <Button size="sm" className="text-xs">
          বিস্তারিত দেখুন
        </Button>
      </CardFooter>
    </Card>
  );
};