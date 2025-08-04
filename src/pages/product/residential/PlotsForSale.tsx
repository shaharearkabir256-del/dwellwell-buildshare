import ProductTemplate from '@/components/ProductTemplate';
import { MapPin, Ruler, TreePine } from 'lucide-react';

const PlotsForSale = () => {
  const features = [
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Strategically located plots in growing residential areas"
    },
    {
      icon: Ruler,
      title: "Various Sizes",
      description: "From compact plots to large estates for your dream home"
    },
    {
      icon: TreePine,
      title: "Green Surroundings",
      description: "Eco-friendly environments with natural landscapes"
    }
  ];

  const sampleProducts = [
    {
      id: "1",
      title: "Green Valley Plot",
      description: "Premium residential plot in peaceful environment",
      price: "₹25,00,000",
      location: "Green Valley, Sector 12",
      area: "2400 sq ft",
      type: "Residential Plot",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Corner Plot", "Park Facing", "Wide Road"],
      status: "available" as const
    },
    {
      id: "2",
      title: "Sunrise Heights Plot",
      description: "Modern residential plot with all amenities",
      price: "₹32,00,000",
      location: "Sunrise Heights, Phase 2",
      area: "3000 sq ft",
      type: "Residential Plot",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Gated Community", "24/7 Security", "Underground Utilities"],
      status: "available" as const
    }
  ];

  return (
    <ProductTemplate
      pageTitle="Residential Plots for Sale"
      pageDescription="Find your perfect plot to build your dream home in prime residential locations"
      backgroundVariant="product"
      features={features}
      products={sampleProducts}
      ctaTitle="Ready to Find Your Plot?"
      ctaDescription="Contact us to explore available residential plots in your preferred location"
      ctaButtonText="View Available Plots"
    />
  );
};

export default PlotsForSale;