import { Users, Home, Hammer, Award } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const About = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Users,
      title: t('about.feature1.title'),
      description: t('about.feature1.description')
    },
    {
      icon: Home,
      title: t('about.feature2.title'),
      description: t('about.feature2.description')
    },
    {
      icon: Hammer,
      title: t('about.feature3.title'),
      description: t('about.feature3.description')
    },
    {
      icon: Award,
      title: t('about.feature4.title'),
      description: t('about.feature4.description')
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('about.title')}{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Property BD
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.description')}
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
                {t('about.stats.title')}
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                {t('about.stats.description')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.experience')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.cities')}</div>
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