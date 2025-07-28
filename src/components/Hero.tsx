import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-home.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern luxury home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-up">
            Find or Build Your{' '}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Perfect Home
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Connect with premium house sharing opportunities or create your dream home with our expert construction portfolio services
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={() => scrollToSection('properties')}
              className="btn-premium text-lg px-8 py-4 min-w-[200px]"
            >
              Browse Homes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('portfolio')}
              variant="outline"
              className="btn-glass text-lg px-8 py-4 min-w-[200px] text-white border-white/30 hover:bg-white/20"
            >
              <Play className="mr-2 w-5 h-5" />
              Start Building
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-white/80">Premium Properties</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">200+</div>
              <div className="text-white/80">Homes Built</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;