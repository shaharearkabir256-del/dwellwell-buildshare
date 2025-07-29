import Navigation from '@/components/Navigation';
import FeaturedProperties from '@/components/FeaturedProperties';
import Footer from '@/components/Footer';

const Properties = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <FeaturedProperties />
      </div>
      <Footer />
    </div>
  );
};

export default Properties;