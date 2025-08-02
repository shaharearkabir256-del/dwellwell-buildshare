import Navigation from '@/components/Navigation';
import HowItWorksSection from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';

const HowItWorks = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="howitworks" />
      <Navigation />
      <div className="pt-20 relative z-10">
        <HowItWorksSection />
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;