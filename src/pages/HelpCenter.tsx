import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, HelpCircle, MessageCircle, Phone, Mail, Book, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HelpCenter = () => {
  const faqCategories = [
    {
      title: "সাধারণ প্রশ্ন",
      faqs: [
        {
          question: "Property BD কি ধরনের সেবা প্রদান করে?",
          answer: "আমরা প্রপার্টি শেয়ারিং, হোম বিল্ডিং, প্রপার্টি ম্যানেজমেন্ট এবং রিয়েল এস্টেট কনসালটেশন সেবা প্রদান করি।"
        },
        {
          question: "আমি কিভাবে Property BD এর সেবা নিতে পারি?",
          answer: "আমাদের ওয়েবসাইটে রেজিস্ট্রেশন করুন অথবা সরাসরি আমাদের সাথে যোগাযোগ করুন। আমাদের টিম আপনাকে সাহায্য করবে।"
        }
      ]
    },
    {
      title: "প্রপার্টি শেয়ারিং",
      faqs: [
        {
          question: "হাউস শেয়ারিং কিভাবে কাজ করে?",
          answer: "আপনি আমাদের প্ল্যাটফর্মে রেজিস্ট্রেশন করে উপযুক্ত শেয়ারিং পার্টনার খুঁজে পেতে পারেন। আমরা নিরাপত্তা যাচাই করে সঠিক ম্যাচ করে দেই।"
        },
        {
          question: "শেয়ারিং এর জন্য কি কি ডকুমেন্ট লাগে?",
          answer: "জাতীয় পরিচয়পত্র, আয়ের প্রমাণপত্র, এবং রেফারেন্স প্রয়োজন। সব ডকুমেন্ট যাচাই করা হয় নিরাপত্তার জন্য।"
        }
      ]
    },
    {
      title: "হোম বিল্ডিং",
      faqs: [
        {
          question: "বাড়ি নির্মাণ কত সময় লাগে?",
          answer: "প্রজেক্টের আকার অনুযায়ী ৬ মাস থেকে ২ বছর পর্যন্ত সময় লাগতে পারে। আমরা নির্দিষ্ট টাইমলাইন দিয়ে কাজ করি।"
        },
        {
          question: "নির্মাণ খরচ কিভাবে নির্ধারণ হয়?",
          answer: "জমির আকার, ডিজাইন কমপ্লেক্সিটি, ব্যবহৃত ম্যাটেরিয়াল এবং ফিনিশিং এর উপর ভিত্তি করে খরচ নির্ধারণ হয়।"
        }
      ]
    },
    {
      title: "পেমেন্ট ও বিলিং",
      faqs: [
        {
          question: "কি কি পেমেন্ট মেথড গ্রহণযোগ্য?",
          answer: "আমরা ক্যাশ, ব্যাংক ট্রান্সফার, চেক এবং অনলাইন পেমেন্ট গ্রহণ করি। EMI সুবিধাও আছে।"
        },
        {
          question: "রিফান্ড পলিসি কি?",
          answer: "সার্ভিস এগ্রিমেন্ট অনুযায়ী রিফান্ড পলিসি প্রযোজ্য। বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।"
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: "ফোন সাপোর্ট",
      description: "২৪/৭ হটলাইন সেবা",
      value: "+880 1XXX-XXXXXX",
      action: "কল করুন"
    },
    {
      icon: MessageCircle,
      title: "লাইভ চ্যাট",
      description: "তাৎক্ষণিক সাহায্য",
      value: "অনলাইনে চ্যাট করুন",
      action: "চ্যাট শুরু করুন"
    },
    {
      icon: Mail,
      title: "ইমেইল সাপোর্ট",
      description: "২৪ ঘন্টার মধ্যে উত্তর",
      value: "support@propertybd.com",
      action: "ইমেইল করুন"
    }
  ];

  const guides = [
    {
      title: "প্রথমবার ব্যবহারকারীদের গাইড",
      description: "Property BD ব্যবহার করার সম্পূর্ণ নির্দেশিকা",
      duration: "১০ মিনিট",
      category: "শুরুকরণ"
    },
    {
      title: "প্রপার্টি শেয়ারিং গাইড",
      description: "নিরাপদে প্রপার্টি শেয়ার করার টিপস",
      duration: "১৫ মিনিট",
      category: "শেয়ারিং"
    },
    {
      title: "হোম বিল্ডিং প্রোসেস",
      description: "বাড়ি নির্মাণের ধাপে ধাপে গাইড",
      duration: "২০ মিনিট",
      category: "নির্মাণ"
    },
    {
      title: "প্রপার্টি ম্যানেজমেন্ট টিপস",
      description: "আপনার সম্পত্তি দক্ষতার সাথে ব্যবস্থাপনা",
      duration: "১২ মিনিট",
      category: "ব্যবস্থাপনা"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                সাহায্য কেন্দ্র
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                আপনার সকল প্রশ্নের উত্তর এবং সমাধান খুঁজে নিন। আমরা আছি আপনাকে সাহায্য করতে।
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="প্রশ্ন বা বিষয় খুঁজুন..."
                  className="pl-10 pr-4 py-3"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">তাৎক্ষণিক সাহায্য পান</h2>
              <p className="text-lg text-muted-foreground">আমাদের সাপোর্ট টিম সর্বদা আপনার সেবায় নিয়োজিত</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {contactOptions.map((option, index) => (
                <div key={index} className="bg-card rounded-xl p-6 text-center border hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                  <p className="text-primary font-medium mb-4">{option.value}</p>
                  <Button className="w-full">
                    {option.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">প্রায়শই জিজ্ঞাসিত প্রশ্ন</h2>
              <p className="text-lg text-muted-foreground">সাধারণ প্রশ্নের উত্তর</p>
            </div>

            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-card rounded-xl p-6 border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-l-4 border-primary/20 pl-4">
                        <h4 className="font-medium mb-2">{faq.question}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guides Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">ব্যবহারকারী গাইড</h2>
              <p className="text-lg text-muted-foreground">ধাপে ধাপে নির্দেশিকা</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {guides.map((guide, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Book className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                          {guide.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {guide.duration}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{guide.description}</p>
                      <Button variant="outline" size="sm">
                        গাইড পড়ুন
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Need Help */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <Users className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">এখনও সমাধান পাননি?</h2>
              <p className="text-lg mb-6 opacity-90">
                আমাদের সাপোর্ট টিমের সাথে সরাসরি যোগাযোগ করুন। আমরা আপনাকে ব্যক্তিগত সহায়তা প্রদান করব।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  টিকেট সাবমিট করুন
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg">
                  <Star className="w-5 h-5 mr-2" />
                  এক্সপার্টের সাথে কথা বলুন
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;