import { Users, Home, Hammer, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'House Sharing Network',
      description: 'Connect with verified homeowners and renters through our premium matching platform.'
    },
    {
      icon: Home,
      title: 'Quality Properties',
      description: 'Access to carefully curated properties with modern amenities and prime locations.'
    },
    {
      icon: Hammer,
      title: 'Custom Home Building',
      description: 'Professional construction services with 3D design previews and expert project management.'
    },
    {
      icon: Award,
      title: 'Premium Service',
      description: 'Award-winning customer service with 24/7 support and satisfaction guarantee.'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              HomeShare Pro
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing the way people find homes and build their dreams. Our platform combines 
            premium house sharing opportunities with expert construction services, creating a comprehensive 
            solution for all your housing needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-premium">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-20 glass-card p-12 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-6">
                Trusted by Thousands Across the Nation
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                With over 5 years of experience in real estate and construction, 
                we've helped thousands of clients find their perfect homes and 
                build their dream properties. Our commitment to excellence and 
                innovation sets us apart in the industry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Cities Covered</div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-24 bg-gradient-primary rounded-2xl"></div>
                  <div className="h-16 bg-gradient-to-r from-secondary to-accent rounded-2xl"></div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-16 bg-gradient-to-r from-accent to-primary rounded-2xl"></div>
                  <div className="h-24 bg-gradient-to-r from-secondary to-primary rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;