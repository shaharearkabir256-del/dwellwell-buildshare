import Navigation from '@/components/Navigation';
import AboutSection from '@/components/About';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';

const About = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="about" />
      <Navigation />
      <div className="pt-20 relative z-10">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;