import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Shield, Clock, Wrench, Users, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Management = () => {
  const services = [
    {
      icon: Shield,
      title: "সিকিউরিটি ম্যানেজমেন্ট",
      description: "২৪/৭ নিরাপত্তা সেবা এবং অ্যাক্সেস কন্ট্রোল সিস্টেম।",
      features: ["CCTV নজরদারি", "সিকিউরিটি গার্ড", "অ্যাক্সেস কার্ড সিস্টেম", "এমার্জেন্সি রেসপন্স"]
    },
    {
      icon: Wrench,
      title: "মেইনটেন্যান্স সার্ভিস",
      description: "নিয়মিত রক্ষণাবেক্ষণ এবং জরুরি মেরামতের সেবা।",
      features: ["প্লাম্বিং সার্ভিস", "ইলেকট্রিক্যাল মেইনটেন্যান্স", "এসি সার্ভিসিং", "লিফট মেইনটেন্যান্স"]
    },
    {
      icon: Users,
      title: "টেন্যান্ট ম্যানেজমেন্ট",
      description: "ভাড়াটিয়া নির্বাচন থেকে শুরু করে দৈনন্দিন সেবা পর্যন্ত।",
      features: ["টেন্যান্ট স্ক্রিনিং", "রেন্ট কালেকশন", "অভিযোগ ব্যবস্থাপনা", "লিজ ম্যানেজমেন্ট"]
    },
    {
      icon: Clock,
      title: "ফ্যাসিলিটি ম্যানেজমেন্ট",
      description: "বিল্ডিং এর সকল সুবিধা ও সেবার সমন্বিত ব্যবস্থাপনা।",
      features: ["পার্কিং ব্যবস্থাপনা", "কমন এরিয়া পরিষ্কার", "ইউটিলিটি ম্যানেজমেন্ট", "ইভেন্ট সমন্বয়"]
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "সময় সাশ্রয়",
      description: "আমাদের দক্ষ টিমের মাধ্যমে আপনার সময় বাঁচান।"
    },
    {
      icon: Star,
      title: "গুণগত সেবা",
      description: "প্রশিক্ষিত পেশাদারদের দ্বারা সর্বোচ্চ মানের সেবা।"
    },
    {
      icon: Shield,
      title: "নির্ভরযোগ্যতা",
      description: "বিশ্বস্ত ও দায়িত্বশীল প্রপার্টি ম্যানেজমেন্ট।"
    }
  ];

  const packages = [
    {
      name: "বেসিক প্যাকেজ",
      price: "৫,০০০",
      duration: "মাসিক",
      features: [
        "মেইনটেন্যান্স সার্ভিস",
        "টেন্যান্ট ম্যানেজমেন্ট",
        "রেন্ট কালেকশন",
        "মাসিক রিপোর্ট"
      ]
    },
    {
      name: "স্ট্যান্ডার্ড প্যাকেজ",
      price: "৮,০০০",
      duration: "মাসিক",
      features: [
        "সকল বেসিক সেবা",
        "সিকিউরিটি ম্যানেজমেন্ট",
        "২৪/৭ সাপোর্ট",
        "এমার্জেন্সি রেসপন্স",
        "সাপ্তাহিক রিপোর্ট"
      ]
    },
    {
      name: "প্রিমিয়াম প্যাকেজ",
      price: "১২,০০০",
      duration: "মাসিক",
      features: [
        "সকল স্ট্যান্ডার্ড সেবা",
        "কমপ্লিট ফ্যাসিলিটি ম্যানেজমেন্ট",
        "প্রিমিয়াম মেইনটেন্যান্স",
        "ডেডিকেটেড ম্যানেজার",
        "দৈনিক রিপোর্ট"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="management" />
      <Navigation />
      <div className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                প্রপার্টি ম্যানেজমেন্ট
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                আপনার প্রপার্টির সম্পূর্ণ ব্যবস্থাপনার দায়িত্ব আমাদের উপর ছেড়ে দিন। আমরা নিশ্চিত করি যে আপনার সম্পত্তি সর্বোচ্চ মানের সেবা পায়।
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের সেবাসমূহ</h2>
              <p className="text-lg text-muted-foreground">সম্পূর্ণ প্রপার্টি ম্যানেজমেন্ট সলিউশন</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">কেন আমাদের বেছে নেবেন?</h2>
              <p className="text-lg text-muted-foreground">আমাদের ম্যানেজমেন্ট সেবার বিশেষত্ব</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">সার্ভিস প্যাকেজ</h2>
              <p className="text-lg text-muted-foreground">আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className={`bg-card rounded-xl p-6 border-2 ${index === 1 ? 'border-primary scale-105' : 'border-border'} hover:shadow-lg transition-all duration-300`}>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-1">৳{pkg.price}</div>
                    <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    প্যাকেজ নির্বাচন করুন
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">আপনার প্রপার্টির যত্ন আমাদের উপর ছেড়ে দিন</h2>
            <p className="text-lg mb-6 opacity-90">
              আজই যোগাযোগ করুন এবং পেশাদার ম্যানেজমেন্ট সেবা নিন
            </p>
            <Button variant="secondary" size="lg">
              <Shield className="w-5 h-5 mr-2" />
              এখনই শুরু করুন
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Management;