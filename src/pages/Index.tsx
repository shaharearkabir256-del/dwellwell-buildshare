import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProperties from '@/components/FeaturedProperties';
import Portfolio from '@/components/Portfolio';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { TelegramBotStatus } from '@/components/TelegramBotStatus';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <FeaturedProperties />
      
      {/* Bot Status Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">টেলিগ্রাম বট স্ট্যাটাস</h2>
            <p className="text-muted-foreground mb-8">
              প্রোপার্টি যোগ করার জন্য আমাদের টেলিগ্রাম বট ব্যবহার করুন
            </p>
          </div>
          <div className="flex justify-center">
            <TelegramBotStatus />
          </div>
        </div>
      </section>
      
      <Portfolio />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;