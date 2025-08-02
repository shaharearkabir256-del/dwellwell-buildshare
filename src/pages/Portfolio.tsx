import Navigation from '@/components/Navigation';
import PortfolioSection from '@/components/Portfolio';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';

const Portfolio = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="portfolio" />
      <Navigation />
      <div className="pt-20 relative z-10">
        <PortfolioSection />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;