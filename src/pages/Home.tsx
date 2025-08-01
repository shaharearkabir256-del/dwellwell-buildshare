import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import WelcomeAnimation from '@/WelcomeModal';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
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