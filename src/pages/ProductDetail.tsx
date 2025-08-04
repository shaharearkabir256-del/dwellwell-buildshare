import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  ArrowLeft, 
  MapPin, 
  Ruler, 
  Home, 
  Calendar,
  Phone,
  Mail,
  Share2,
  Heart,
  Camera,
  CheckCircle,
  Star,
  Users,
  Car,
  Wifi,
  Shield
} from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Sample product data - in real app, this would come from API
  const product = {
    id: "1",
    title: "Green Valley Premium Plot",
    description: "A magnificent residential plot situated in the heart of Green Valley, offering the perfect blend of tranquility and modern convenience. This prime piece of land provides an excellent opportunity to build your dream home in one of the city's most sought-after locations.",
    price: "₹25,00,000",
    originalPrice: "₹28,00,000",
    location: "Green Valley, Sector 12, New Town",
    area: "2400 sq ft",
    type: "Residential Plot",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    features: ["Corner Plot", "Park Facing", "Wide Road", "Gated Community", "24/7 Security", "Underground Utilities"],
    amenities: [
      { icon: Car, name: "Parking Available" },
      { icon: Wifi, name: "Internet Ready" },
      { icon: Shield, name: "24/7 Security" },
      { icon: Users, name: "Community Center" }
    ],
    specifications: {
      plotSize: "2400 sq ft",
      facing: "North-East",
      roadWidth: "30 feet",
      plotType: "Corner",
      possession: "Immediate",
      approvals: "All Clear"
    },
    agent: {
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      email: "rajesh@realtycompany.com",
      rating: 4.8,
      experience: "8 years"
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted');
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="product" />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 hover-scale"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Properties
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Gallery */}
            <div className="lg:col-span-2">
              <Card className="glass-card overflow-hidden mb-6">
                <div className="relative">
                  <img 
                    src={product.images[selectedImage]} 
                    alt={product.title}
                    className="w-full h-96 object-cover animate-fade-in"
                  />
                  <Badge className={`absolute top-4 right-4 ${
                    product.status === 'available' 
                      ? 'bg-green-500/20 text-green-400 border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border-red-500/30'
                  }`}>
                    {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                  </Badge>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Button 
                      size="sm" 
                      variant="secondary"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className="hover-scale"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                    <Button size="sm" variant="secondary" className="hover-scale">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Image Thumbnails */}
                <div className="p-4">
                  <div className="flex gap-2 overflow-x-auto">
                    {product.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className={`w-20 h-20 object-cover rounded cursor-pointer transition-all duration-200 hover-scale ${
                          selectedImage === index ? 'ring-2 ring-primary' : 'opacity-70'
                        }`}
                        onClick={() => setSelectedImage(index)}
                      />
                    ))}
                  </div>
                </div>
              </Card>

              {/* Property Details */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl mb-2">{product.title}</CardTitle>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {product.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{product.price}</div>
                      {product.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    {product.description}
                  </CardDescription>

                  {/* Quick Facts */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-background/50 rounded-lg">
                      <Ruler className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-semibold">{product.area}</div>
                      <div className="text-sm text-muted-foreground">Plot Size</div>
                    </div>
                    <div className="text-center p-3 bg-background/50 rounded-lg">
                      <Home className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-semibold">{product.type}</div>
                      <div className="text-sm text-muted-foreground">Property Type</div>
                    </div>
                    <div className="text-center p-3 bg-background/50 rounded-lg">
                      <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-semibold">Immediate</div>
                      <div className="text-sm text-muted-foreground">Possession</div>
                    </div>
                    <div className="text-center p-3 bg-background/50 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-semibold">Clear</div>
                      <div className="text-sm text-muted-foreground">Documentation</div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {product.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <amenity.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm">{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between p-2 bg-background/30 rounded">
                          <span className="text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact and Agent Info */}
            <div className="lg:col-span-1">
              {/* Agent Info */}
              <Card className="glass-card mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Agent</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold">{product.agent.name}</h4>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{product.agent.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({product.agent.experience})
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full btn-premium" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      {product.agent.phone}
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Agent
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Send Inquiry</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="I'm interested in this property..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full btn-premium">
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;