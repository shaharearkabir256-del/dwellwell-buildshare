import Navigation from '@/components/Navigation';
import PortfolioSection from '@/components/Portfolio';
import Footer from '@/components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <PortfolioSection />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;