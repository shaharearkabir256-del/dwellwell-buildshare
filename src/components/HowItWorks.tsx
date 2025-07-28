import { UserPlus, Search, Home, MessageCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your account and complete your profile with preferences and requirements.',
      color: 'text-primary'
    },
    {
      step: 2,
      icon: Search,
      title: 'Browse & Explore',
      description: 'Search through our curated selection of properties or browse construction portfolios.',
      color: 'text-secondary'
    },
    {
      step: 3,
      icon: Home,
      title: 'Find Your Match',
      description: 'Discover the perfect property for sharing or start planning your custom home build.',
      color: 'text-accent'
    },
    {
      step: 4,
      icon: MessageCircle,
      title: 'Connect & Share',
      description: 'Connect with homeowners or our construction team to begin your housing journey.',
      color: 'text-primary'
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with HomeShare Pro in four simple steps. Whether you're looking 
            to share a home or build one, our process is designed to be seamless and efficient.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-primary"></div>
              
              <div className="grid md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div
                    key={step.step}
                    className="text-center animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Icon Circle */}
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-premium relative z-10">
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold z-20">
                        {step.step}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="flex items-start space-x-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-premium">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-primary"></div>
                  )}
                </div>
                
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-up">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied customers who have found their perfect homes through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium px-8 py-3">
                Browse Properties
              </button>
              <button className="btn-glass px-8 py-3">
                Start Building
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;