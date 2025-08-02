import Navigation from '@/components/Navigation';
import FeaturedProperties from '@/components/FeaturedProperties';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';

const Properties = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="properties" />
      <Navigation />
      <div className="pt-20 relative z-10">
        <FeaturedProperties />
      </div>
      <Footer />
    </div>
  );
};

export default Properties;