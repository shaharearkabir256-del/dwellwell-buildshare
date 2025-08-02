import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';

const ContactPage = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="contact" />
      <Navigation />
      <div className="pt-20 relative z-10">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;