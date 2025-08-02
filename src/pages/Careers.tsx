import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Briefcase, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const jobOpenings = [
    {
      title: "সিনিয়র প্রপার্টি কনসালট্যান্ট",
      department: "সেলস",
      location: "ঢাকা",
      type: "ফুল টাইম",
      description: "গ্রাহকদের প্রপার্টি সংক্রান্ত প্রয়োজন বুঝে সঠিক সমাধান প্রদান করা।",
      requirements: ["৩+ বছরের অভিজ্ঞতা", "চমৎকার যোগাযোগ দক্ষতা", "গ্রাহক সেবায় আগ্রহী"]
    },
    {
      title: "কনস্ট্রাকশন ইঞ্জিনিয়ার",
      department: "নির্মাণ",
      location: "ঢাকা/চট্টগ্রাম",
      type: "ফুল টাইম",
      description: "নির্মাণ প্রকল্পের পরিকল্পনা, তদারকি এবং বাস্তবায়ন।",
      requirements: ["সিভিল ইঞ্জিনিয়ারিং ডিগ্রি", "৫+ বছরের অভিজ্ঞতা", "প্রজেক্ট ম্যানেজমেন্ট স্কিল"]
    },
    {
      title: "ডিজিটাল মার্কেটিং এক্সিকিউটিভ",
      department: "মার্কেটিং",
      location: "ঢাকা",
      type: "ফুল টাইম",
      description: "অনলাইন মার্কেটিং ক্যাম্পেইন পরিচালনা এবং ব্র্যান্ড প্রমোশন।",
      requirements: ["ডিজিটাল মার্কেটিং সার্টিফিকেট", "২+ বছরের অভিজ্ঞতা", "সোশ্যাল মিডিয়া এক্সপার্ট"]
    },
    {
      title: "কাস্টমার সাপোর্ট এক্সিকিউটিভ",
      department: "সাপোর্ট",
      location: "ঢাকা",
      type: "পার্ট টাইম",
      description: "গ্রাহকদের সমস্যা সমাধান এবং সার্ভিস সাপোর্ট প্রদান।",
      requirements: ["চমৎকার বাংলা ও ইংরেজি", "ধৈর্যশীল ও বন্ধুত্বপূর্ণ", "সমস্যা সমাধানে দক্ষ"]
    }
  ];

  const benefits = [
    "প্রতিযোগিতামূলক বেতন",
    "স্বাস্থ্য বীমা",
    "পেইড ছুটি",
    "ক্যারিয়ার ডেভেলপমেন্ট",
    "ফ্লেক্সিবল কাজের সময়",
    "বোনাস ও ইনসেন্টিভ"
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="careers" />
      <Navigation />
      <div className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                ক্যারিয়ার সুযোগ
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Property BD এর সাথে যুক্ত হয়ে আপনার ক্যারিয়ারকে নিয়ে যান নতুন উচ্চতায়। আমাদের টিমে যোগ দিন এবং বাংলাদেশের রিয়েল এস্টেট সেক্টরে অবদান রাখুন।
              </p>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">চাকরির সুযোগ</h2>
              <p className="text-lg text-muted-foreground">আমাদের টিমে যোগ দিন এবং আপনার প্রতিভা বিকশিত করুন</p>
            </div>

            <div className="grid gap-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {job.department}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{job.description}</p>

                      <div>
                        <h4 className="font-medium mb-2">প্রয়োজনীয় যোগ্যতা:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:ml-6">
                      <Button className="w-full lg:w-auto">
                        আবেদন করুন
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">কেন আমাদের সাথে কাজ করবেন?</h2>
              <p className="text-lg text-muted-foreground">আমাদের কর্মীদের জন্য বিশেষ সুবিধাসমূহ</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card rounded-lg p-6 text-center border">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-primary rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">আপনার স্বপ্নের চাকরি খুঁজে পেয়েছেন?</h2>
              <p className="text-lg mb-6 opacity-90">
                আমাদের সাথে যোগাযোগ করুন এবং আপনার সিভি পাঠান
              </p>
              <Button variant="secondary" size="lg">
                <Briefcase className="w-5 h-5 mr-2" />
                এখনই আবেদন করুন
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;