import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { MessageCircle, Users, Calculator, FileText, Clock, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Consultation = () => {
  const consultationTypes = [
    {
      icon: MessageCircle,
      title: "প্রপার্টি কনসালটেশন",
      description: "প্রপার্টি কেনা-বেচা, বিনিয়োগ এবং মার্কেট বিশ্লেষণ।",
      duration: "৬০ মিনিট",
      price: "৫,০০০ টাকা",
      features: ["মার্কেট এনালাইসিস", "প্রপার্টি ভ্যালুয়েশন", "বিনিয়োগ পরামর্শ", "লিগ্যাল গাইডেন্স"]
    },
    {
      icon: Calculator,
      title: "ফিন্যান্সিয়াল প্ল্যানিং",
      description: "হোম লোন, বাজেট পরিকল্পনা এবং আর্থিক পরামর্শ।",
      duration: "৪৫ মিনিট",
      price: "৩,৫০০ টাকা",
      features: ["লোন পরামর্শ", "বাজেট প্ল্যানিং", "EMI ক্যালকুলেশন", "ট্যাক্স প্ল্যানিং"]
    },
    {
      icon: FileText,
      title: "ডকুমেন্ট ভেরিফিকেশন",
      description: "প্রপার্টি ডকুমেন্ট যাচাই এবং লিগ্যাল চেকিং।",
      duration: "৩০ মিনিট",
      price: "২,৫০০ টাকা",
      features: ["টাইটেল চেক", "ডকুমেন্ট ভেরিফাই", "লিগ্যাল ক্লিয়ারেন্স", "রিস্ক এসেসমেন্ট"]
    },
    {
      icon: Users,
      title: "কনস্ট্রাকশন কনসালটেশন",
      description: "নির্মাণ পরিকল্পনা, ডিজাইন এবং কস্ট এস্টিমেশন।",
      duration: "৯০ মিনিট",
      price: "৭,৫০০ টাকা",
      features: ["ডিজাইন পরামর্শ", "কস্ট এস্টিমেট", "ম্যাটেরিয়াল গাইডেন্স", "টাইমলাইন প্ল্যানিং"]
    }
  ];

  const process = [
    {
      step: "১",
      title: "অ্যাপয়েন্টমেন্ট বুকিং",
      description: "অনলাইন বা ফোনে আপনার সুবিধামত সময়ে অ্যাপয়েন্টমেন্ট নিন।"
    },
    {
      step: "২",
      title: "প্রাথমিক আলোচনা",
      description: "আপনার প্রয়োজন ও লক্ষ্য সম্পর্কে বিস্তারিত আলোচনা।"
    },
    {
      step: "৩",
      title: "বিশেষজ্ঞ পরামর্শ",
      description: "অভিজ্ঞ কনসালট্যান্টের কাছ থেকে পেশাদার পরামর্শ গ্রহণ।"
    },
    {
      step: "৪",
      title: "অ্যাকশন প্ল্যান",
      description: "বিস্তারিত কর্মপরিকল্পনা ও পরবর্তী ধাপের নির্দেশনা।"
    }
  ];

  const experts = [
    {
      name: "আহমেদ করিম",
      title: "সিনিয়র প্রপার্টি কনসালট্যান্ট",
      experience: "১২+ বছর",
      expertise: "রিয়েল এস্টেট ইনভেস্টমেন্ট"
    },
    {
      name: "সালমা খাতুন",
      title: "ফিন্যান্সিয়াল এডভাইজার",
      experience: "৮+ বছর",
      expertise: "হোম লোন ও বাজেট প্ল্যানিং"
    },
    {
      name: "রহিম উদ্দিন",
      title: "লিগ্যাল এক্সপার্ট",
      experience: "১৫+ বছর",
      expertise: "প্রপার্টি ল এবং ডকুমেন্টেশন"
    },
    {
      name: "নাজমুল হাসান",
      title: "কনস্ট্রাকশন কনসালট্যান্ট",
      experience: "১০+ বছর",
      expertise: "আর্কিটেকচার ও কনস্ট্রাকশন"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="consultation" />
      <Navigation />
      <div className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                এক্সপার্ট কনসালটেশন
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                প্রপার্টি, ফিন্যান্স এবং কনস্ট্রাকশন বিষয়ক বিশেষজ্ঞ পরামর্শ নিন আমাদের অভিজ্ঞ কনসালট্যান্টদের কাছ থেকে।
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">কনসালটেশন সার্ভিস</h2>
              <p className="text-lg text-muted-foreground">আপনার প্রয়োজন অনুযায়ী কনসালটেশন বেছে নিন</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {consultationTypes.map((service, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">{service.price}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {service.duration}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button className="w-full">
                        অ্যাপয়েন্টমেন্ট বুক করুন
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">কনসালটেশন প্রক্রিয়া</h2>
              <p className="text-lg text-muted-foreground">সহজ ৪ ধাপে পেশাদার পরামর্শ নিন</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের এক্সপার্ট টিম</h2>
              <p className="text-lg text-muted-foreground">অভিজ্ঞ পেশাদারদের কাছ থেকে বিশেষজ্ঞ পরামর্শ</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {experts.map((expert, index) => (
                <div key={index} className="bg-card rounded-xl p-6 text-center border hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{expert.name}</h3>
                  <p className="text-primary font-medium mb-2">{expert.title}</p>
                  <div className="text-sm text-muted-foreground mb-2">অভিজ্ঞতা: {expert.experience}</div>
                  <p className="text-xs text-muted-foreground">{expert.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">আপনার স্বপ্নের বাড়ির জন্য এক্সপার্ট পরামর্শ নিন</h2>
            <p className="text-lg mb-6 opacity-90">
              আজই অ্যাপয়েন্টমেন্ট বুক করুন এবং পেশাদার গাইডেন্স পান
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                ফ্রি কনসালটেশন বুক করুন
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg">
                <Star className="w-5 h-5 mr-2" />
                আমাদের এক্সপার্টদের সাথে কথা বলুন
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Consultation;