import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Scale, Shield, AlertTriangle, Clock, Users } from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = "১৫ জানুয়ারি, ২০২৪";

  const sections = [
    {
      icon: FileText,
      title: "সেবা গ্রহণ",
      content: [
        "Property BD এর সেবা ব্যবহার করার শর্তাবলী:",
        "• আপনার বয়স ১৮ বছর বা তার বেশি হতে হবে",
        "• সঠিক ও সম্পূর্ণ তথ্য প্রদান করতে হবে",
        "• একটি বৈধ ইমেইল ঠিকানা প্রয়োজন",
        "• জাতীয় পরিচয়পত্র যাচাইকরণ বাধ্যতামূলক",
        "• আমাদের কমিউনিটি গাইডলাইন মেনে চলতে হবে"
      ]
    },
    {
      icon: Users,
      title: "ব্যবহারকারীর দায়িত্ব",
      content: [
        "আপনার দায়িত্ব ও বাধ্যবাধকতা:",
        "• সকল তথ্য সত্য ও হালনাগাদ রাখা",
        "• অন্যদের গোপনীয়তা সম্মান করা",
        "• কোনো বেআইনি কার্যকলাপে জড়িত না হওয়া",
        "• প্ল্যাটফর্মের অপব্যবহার না করা",
        "• অন্যদের সাথে সম্মানজনক আচরণ করা",
        "• পেমেন্ট ও চুক্তির শর্ত মেনে চলা"
      ]
    },
    {
      icon: Shield,
      title: "নিরাপত্তা ও যাচাইকরণ",
      content: [
        "আমাদের নিরাপত্তা ব্যবস্থা:",
        "• সকল ব্যবহারকারীর পরিচয় যাচাই",
        "• প্রপার্টি ডকুমেন্ট ভেরিফিকেশন",
        "• নিয়মিত নিরাপত্তা চেক",
        "• সন্দেহজনক কার্যকলাপ মনিটরিং",
        "• ২৪/৭ কাস্টমার সাপোর্ট",
        "• জরুরি পরিস্থিতিতে তাৎক্ষণিক সহায়তা"
      ]
    },
    {
      icon: Scale,
      title: "আর্থিক শর্তাবলী",
      content: [
        "পেমেন্ট ও ফি সংক্রান্ত নীতি:",
        "• সেবা ফি অগ্রিম পরিশোধযোগ্য",
        "• রিফান্ড নীতি চুক্তি অনুযায়ী প্রযোজ্য",
        "• লেট পেমেন্টে অতিরিক্ত চার্জ",
        "• সকল ট্যাক্স ও ভ্যাট গ্রাহক বহন করবেন",
        "• পেমেন্ট ডিসপিউট ৩০ দিনের মধ্যে রিপোর্ট করতে হবে",
        "• মূল্য পরিবর্তনের ৭ দিন পূর্ব নোটিশ"
      ]
    },
    {
      icon: AlertTriangle,
      title: "নিষিদ্ধ কার্যকলাপ",
      content: [
        "নিম্নলিখিত কার্যকলাপ সম্পূর্ণ নিষিদ্ধ:",
        "• মিথ্যা তথ্য প্রদান",
        "• প্রতারণামূলক কার্যকলাপ",
        "• অন্যের পরিচয় ব্যবহার",
        "• হয়রানি বা অভদ্র আচরণ",
        "• স্প্যাম বা অবাঞ্ছিত যোগাযোগ",
        "• আমাদের সিস্টেমে হ্যাকিং বা ভাইরাস"
      ]
    },
    {
      icon: Clock,
      title: "সেবা পরিবর্তন ও বন্ধকরণ",
      content: [
        "সেবা পরিবর্তন সংক্রান্ত শর্তাবলী:",
        "• আমরা যেকোনো সময় সেবা পরিবর্তন করার অধিকার রাখি",
        "• গুরুত্বপূর্ণ পরিবর্তনে পূর্ব নোটিশ দেওয়া হবে",
        "• আপনি যেকোনো সময় অ্যাকাউন্ট বন্ধ করতে পারেন",
        "• নীতিমালা লঙ্ঘনে আমরা অ্যাকাউন্ট স্থগিত করতে পারি",
        "• সেবা বন্ধের ক্ষেত্রে রিফান্ড নীতি প্রযোজ্য"
      ]
    }
  ];

  const disputeResolution = [
    {
      title: "প্রাথমিক সমাধান",
      description: "প্রথমে আমাদের কাস্টমার সার্ভিসের সাথে যোগাযোগ করুন। বেশিরভাগ সমস্যার দ্রুত সমাধান সম্ভব।"
    },
    {
      title: "মিডিয়েশন",
      description: "প্রাথমিক সমাধান না হলে, আমরা নিরপেক্ষ মিডিয়েটরের মাধ্যমে সমস্যা সমাধানের চেষ্টা করব।"
    },
    {
      title: "আইনি পদক্ষেপ",
      description: "সর্বশেষ পদক্ষেপ হিসেবে বাংলাদেশের আইন অনুযায়ী আদালতে মামলা করা যেতে পারে।"
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
                সেবার শর্তাবলী
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Property BD এর সেবা ব্যবহারের নিয়মাবলী ও শর্তসমূহ। আমাদের সেবা ব্যবহারের পূর্বে এই শর্তাবলী পড়ুন।
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>সর্বশেষ আপডেট: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Agreement Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-8 border mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">চুক্তির সম্মতি</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Property BD এর ওয়েবসাইট ব্যবহার বা আমাদের সেবা গ্রহণ করে আপনি এই শর্তাবলীতে সম্মত হচ্ছেন। 
                      এই শর্তাবলী আপনার এবং Property BD এর মধ্যে একটি আইনগতভাবে বাধ্যতামূলক চুক্তি গঠন করে। 
                      যদি আপনি এই শর্তাবলীতে সম্মত না হন, তাহলে অনুগ্রহ করে আমাদের সেবা ব্যবহার করবেন না।
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms Sections */}
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
                            <p key={itemIndex} className={`${item.startsWith('•') ? 'ml-4 text-muted-foreground' : 'text-muted-foreground'} leading-relaxed`}>
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Limitation of Liability */}
              <div className="bg-card rounded-xl p-6 border mt-8">
                <h3 className="text-xl font-semibold mb-4">দায়বদ্ধতার সীমাবদ্ধতা</h3>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>Property BD এর দায়বদ্ধতা নিম্নোক্ত বিষয়ে সীমিত:</p>
                  <p className="ml-4">• আমরা শুধুমাত্র প্ল্যাটফর্ম সেবা প্রদান করি, প্রপার্টির গুণমান বা শেয়ারিং পার্টনারের আচরণের জন্য দায়ী নই</p>
                  <p className="ml-4">• তৃতীয় পক্ষের সেবা বা ওয়েবসাইটের জন্য আমরা দায়ী নই</p>
                  <p className="ml-4">• প্রাকৃতিক দুর্যোগ বা অপ্রত্যাশিত পরিস্থিতিতে সেবা বন্ধ হলে আমরা দায়ী নই</p>
                  <p className="ml-4">• আমাদের সর্বোচ্চ দায়বদ্ধতা আপনার পরিশোধিত ফি এর সমপরিমাণ</p>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div className="bg-card rounded-xl p-6 border mt-8">
                <h3 className="text-xl font-semibold mb-4">বিরোধ নিষ্পত্তি</h3>
                <p className="text-muted-foreground mb-4">
                  কোনো বিরোধের ক্ষেত্রে নিম্নলিখিত ধাপে সমাধানের চেষ্টা করা হবে:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {disputeResolution.map((step, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold mb-3">
                        {index + 1}
                      </div>
                      <h4 className="font-medium mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Governing Law */}
              <div className="bg-card rounded-xl p-6 border mt-8">
                <h3 className="text-xl font-semibold mb-4">প্রযোজ্য আইন</h3>
                <p className="text-muted-foreground leading-relaxed">
                  এই শর্তাবলী বাংলাদেশের আইন দ্বারা নিয়ন্ত্রিত এবং ব্যাখ্যা করা হবে। কোনো আইনি বিরোধের ক্ষেত্রে 
                  ঢাকার আদালত এক্ষেত্রে এখতিয়ারসম্পন্ন হবে। আন্তর্জাতিক ব্যবহারকারীদের ক্ষেত্রেও এই আইন প্রযোজ্য হবে।
                </p>
              </div>

              {/* Terms Changes */}
              <div className="bg-card rounded-xl p-6 border mt-8">
                <h3 className="text-xl font-semibold mb-4">শর্তাবলী পরিবর্তন</h3>
                <p className="text-muted-foreground leading-relaxed">
                  আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার রাখি। গুরুত্বপূর্ণ পরিবর্তনের ক্ষেত্রে 
                  আমরা আপনাকে ইমেইল বা ওয়েবসাইটে নোটিশের মাধ্যমে অবহিত করব। পরিবর্তনের পর আমাদের সেবা 
                  ব্যবহার করলে আপনি নতুন শর্তাবলীতে সম্মত হয়েছেন বলে গণ্য হবে।
                </p>
              </div>

              {/* Severability */}
              <div className="bg-card rounded-xl p-6 border mt-8">
                <h3 className="text-xl font-semibold mb-4">বিচ্ছিন্নতা</h3>
                <p className="text-muted-foreground leading-relaxed">
                  যদি এই শর্তাবলীর কোনো অংশ আদালত কর্তৃক অবৈধ বা অপ্রয়োগযোগ্য ঘোষিত হয়, তাহলে 
                  বাকি অংশ পূর্ণ শক্তিতে বলবৎ থাকবে। অবৈধ অংশটি সবচেয়ে কাছাকাছি বৈধ ও প্রয়োগযোগ্য 
                  বিধান দিয়ে প্রতিস্থাপিত হবে।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">শর্তাবলী সংক্রান্ত যোগাযোগ</h2>
              <p className="text-lg mb-8 opacity-90">
                এই শর্তাবলী সম্পর্কে কোনো প্রশ্ন বা স্পষ্টীকরণের প্রয়োজন হলে আমাদের সাথে যোগাযোগ করুন
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="text-sm opacity-90">আইনি বিভাগ</div>
                  <div className="font-medium">legal@propertybd.com</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div className="text-sm opacity-90">কমপ্লায়েন্স</div>
                  <div className="font-medium">+880 1XXX-XXXXXX</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="text-sm opacity-90">সাধারণ যোগাযোগ</div>
                  <div className="font-medium">info@propertybd.com</div>
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

export default TermsOfService;