import ProductTemplate from '@/components/ProductTemplate';
import { Building2, Wifi, Car } from 'lucide-react';

const OfficeSpaceRentSale = () => {
  const features = [
    {
      icon: Building2,
      title: "Modern Office Spaces",
      description: "Contemporary office buildings with premium infrastructure"
    },
    {
      icon: Wifi,
      title: "Tech-Ready",
      description: "High-speed internet and modern communication facilities"
    },
    {
      icon: Car,
      title: "Convenient Access",
      description: "Easy accessibility with ample parking and transport links"
    }
  ];

  const sampleProducts = [
    {
      id: "1",
      title: "Business Hub Office",
      description: "Modern office space in prime business district",
      price: "₹50,000/month",
      location: "Business District, CBD",
      area: "1200 sq ft",
      type: "Office Space",
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["AC", "Parking", "Conference Room"],
      status: "available" as const
    }
  ];

  return (
    <ProductTemplate
      pageTitle="Office Space for Rent/Sale"
      pageDescription="Find premium office spaces for rent or purchase in prime business locations"
      backgroundVariant="commercial"
      features={features}
      products={sampleProducts}
      ctaTitle="Find Your Business Space"
      ctaDescription="Explore premium office spaces designed for modern business needs"
      ctaButtonText="Browse Offices"
    />
  );
};

export default OfficeSpaceRentSale;