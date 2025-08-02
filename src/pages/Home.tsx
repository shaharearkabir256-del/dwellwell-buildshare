import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import WelcomeAnimation from '@/WelcomeModal';
import AnimatedBackground from '@/components/ui/animated-background';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="home" />
      <Navigation />
      <div className="pt-20 relative z-10">
        <Hero />
        <About />
        <Testimonials />
      </div>
      <Footer />
      <WelcomeAnimation />
    </div>
  );
};

export default Home;