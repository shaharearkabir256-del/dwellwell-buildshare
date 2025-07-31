import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Users, FileText, Clock } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "১৫ জানুয়ারি, ২০২৪";

  const sections = [
    {
      icon: FileText,
      title: "তথ্য সংগ্রহ",
      content: [
        "আমরা যে ব্যক্তিগত তথ্য সংগ্রহ করি:",
        "• নাম, ইমেইল ঠিকানা, ফোন নম্বর",
        "• জাতীয় পরিচয়পত্রের তথ্য (যাচাইকরণের জন্য)",
        "• আর্থিক তথ্য (আয়ের প্রমাণপত্র)",
        "• প্রপার্টি পছন্দ ও প্রয়োজনীয়তা",
        "• ওয়েবসাইট ব্যবহারের তথ্য ও কুকিজ"
      ]
    },
    {
      icon: Users,
      title: "তথ্য ব্যবহার",
      content: [
        "আপনার তথ্য নিম্নলিখিত উদ্দেশ্যে ব্যবহার করা হয়:",
        "• উপযুক্ত প্রপার্টি ও শেয়ারিং পার্টনার খুঁজে দিতে",
        "• সেবার গুণমান উন্নতি করতে",
        "• নিরাপত্তা যাচাই ও প্রতারণা প্রতিরোধ",
        "• গ্রাহক সেবা প্রদান",
        "• আইনগত বাধ্যবাধকতা পূরণ",
        "• মার্কেটিং যোগাযোগ (সম্মতি সাপেক্ষে)"
      ]
    },
    {
      icon: Eye,
      title: "তথ্য শেয়ারিং",
      content: [
        "আমরা আপনার ব্যক্তিগত তথ্য শেয়ার করি:",
        "• যাচাইকৃত শেয়ারিং পার্টনারদের সাথে (সীমিত তথ্য)",
        "• আমাদের সেবা প্রদানকারী তৃতীয় পক্ষের সাথে",
        "• আইনি প্রয়োজনে সরকারি কর্তৃপক্ষের সাথে",
        "• আপনার সম্মতিক্রমে অন্য যেকোনো পক্ষের সাথে",
        "",
        "আমরা কখনোই আপনার তথ্য বিক্রি করি না।"
      ]
    },
    {
      icon: Lock,
      title: "তথ্য নিরাপত্তা",
      content: [
        "আপনার তথ্যের নিরাপত্তার জন্য আমাদের ব্যবস্থা:",
        "• SSL এনক্রিপশন প্রযুক্তি",
        "• নিয়মিত নিরাপত্তা অডিট",
        "• সীমিত অ্যাক্সেস নিয়ন্ত্রণ",
        "• ডেটা ব্যাকআপ ও রিকভারি সিস্টেম",
        "• কর্মচারীদের নিরাপত্তা প্রশিক্ষণ",
        "• ইন্ডাস্ট্রি স্ট্যান্ডার্ড সিকিউরিটি প্রোটোকল"
      ]
    },
    {
      icon: Users,
      title: "আপনার অধিকার",
      content: [
        "আপনার ব্যক্তিগত তথ্য সম্পর্কে আপনার অধিকার:",
        "• তথ্য অ্যাক্সেস ও দেখার অধিকার",
        "• ভুল তথ্য সংশোধনের অধিকার",
        "• তথ্য মুছে ফেলার অধিকার",
        "• তথ্য প্রক্রিয়াকরণে আপত্তির অধিকার",
        "• ডেটা পোর্টেবিলিটির অধিকার",
        "• মার্কেটিং যোগাযোগ বন্ধ করার অধিকার"
      ]
    },
    {
      icon: Clock,
      title: "তথ্য সংরক্ষণ",
      content: [
        "আমরা আপনার তথ্য সংরক্ষণ করি:",
        "• অ্যাকাউন্ট সক্রিয় থাকা পর্যন্ত",
        "• আইনি প্রয়োজন অনুযায়ী (সর্বোচ্চ ৭ বছর)",
        "• বিরোধ নিষ্পত্তির জন্য প্রয়োজনীয় সময়",
        "",
        "অ্যাকাউন্ট বন্ধের পর আমরা আপনার ব্যক্তিগত তথ্য",
        "নিরাপদে মুছে ফেলি বা বেনামী করে রাখি।"
      ]
    }
  ];

  const contactInfo = {
    email: "privacy@propertybd.com",
    phone: "+880 1XXX-XXXXXX",
    address: "১২৩ বিজনেস এভিনিউ, ঢাকা-১০০০"
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                গোপনীয়তা নীতি
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Property BD আপনার ব্যক্তিগত তথ্যের গোপনীয়তা ও নিরাপত্তায় প্রতিশ্রুতিবদ্ধ। আমাদের গোপনীয়তা নীতি জানুন।
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>সর্বশেষ আপডেট: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-8 border mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">আমাদের প্রতিশ্রুতি</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Property BD এ আমরা আপনার ব্যক্তিগত তথ্যের গোপনীয়তা ও নিরাপত্তাকে সর্বোচ্চ গুরুত্ব দেই। 
                      এই নীতিমালা ব্যাখ্যা করে যে আমরা কিভাবে আপনার তথ্য সংগ্রহ, ব্যবহার, সংরক্ষণ ও সুরক্ষা করি। 
                      আমাদের সেবা ব্যবহার করে আপনি এই নীতিমালায় সম্মত হচ্ছেন।
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy Sections */}
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 border">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                        <div className="space-y-2">
                          {section.content.map((item, itemIndex) => (
                            <p key={itemIndex} className={`${item.startsWith('•') ? 'ml-4 text-muted-foreground' : item === '' ? 'mb-2' : 'text-muted-foreground'} leading-relaxed`}>
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cookies Policy */}
              <div className="bg-card rounded-xl p-6 border mt-8">
                <h3 className="text-xl font-semibold mb-4">কুকিজ নীতি</h3>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>আমরা আপনার ব্রাউজিং অভিজ্ঞতা উন্নত করতে কুকিজ ব্যবহার করি:</p>
                  <p className="ml-4">• প্রয়োজনীয় কুকিজ: ওয়েবসাইটের মূল কার্যকারিতার জন্য</p>
                  <p className="ml-4">• পারফরম্যান্স কুকিজ: সাইটের কর্মক্ষমতা বিশ্লেষণের জন্য</p>
                  <p className="ml-4">• কার্যকরী কুকিজ: ব্যক্তিগতকৃত অভিজ্ঞতার জন্য</p>
                  <p className="ml-4">• মার্কেটিং কুকিজ: প্রাসঙ্গিক বিজ্ঞাপনের জন্য (সম্মতি সাপেক্ষে)</p>
                  <p className="mt-4">আপনি আপনার ব্রাউজার সেটিংস থেকে কুকিজ নিয়ন্ত্রণ করতে পারেন।</p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="bg-card rounded-xl p-6 border mt-8">
                <h3 className="text-xl font-semibold mb-4">শিশুদের গোপনীয়তা</h3>
                <p className="text-muted-foreground leading-relaxed">
                  আমাদের সেবা ১৮ বছরের কম বয়সী ব্যক্তিদের জন্য নয়। আমরা জেনেশুনে ১৮ বছরের কম বয়সী 
                  কারো কাছ থেকে ব্যক্তিগত তথ্য সংগ্রহ করি না। যদি আমরা জানতে পারি যে কোনো শিশুর তথ্য 
                  সংগ্রহ করা হয়েছে, আমরা তা অবিলম্বে মুছে ফেলব।
                </p>
              </div>

              {/* Policy Changes */}
              <div className="bg-card rounded-xl p-6 border mt-8">
                <h3 className="text-xl font-semibold mb-4">নীতিমালা পরিবর্তন</h3>
                <p className="text-muted-foreground leading-relaxed">
                  আমরা সময়ে সময়ে এই গোপনীয়তা নীতি আপডেট করতে পারি। কোনো গুরুত্বপূর্ণ পরিবর্তনের 
                  ক্ষেত্রে আমরা আপনাকে ইমেইল বা ওয়েবসাইটে নোটিশের মাধ্যমে জানাবো। আপনার ক্রমাগত 
                  সেবা ব্যবহার আপডেটেড নীতিতে সম্মতি বলে গণ্য হবে।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">গোপনীয়তা সংক্রান্ত যোগাযোগ</h2>
              <p className="text-lg mb-8 opacity-90">
                এই গোপনীয়তা নীতি সম্পর্কে কোনো প্রশ্ন বা উদ্বেগ থাকলে আমাদের সাথে যোগাযোগ করুন
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="text-sm opacity-90">ইমেইল</div>
                  <div className="font-medium">{contactInfo.email}</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="text-sm opacity-90">ফোন</div>
                  <div className="font-medium">{contactInfo.phone}</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="text-sm opacity-90">ঠিকানা</div>
                  <div className="font-medium">{contactInfo.address}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;