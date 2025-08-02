import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Calendar, ExternalLink, Download, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Press = () => {
  const pressReleases = [
    {
      title: "Property BD নতুন ডিজিটাল প্ল্যাটফর্ম চালু করেছে",
      date: "১৫ জানুয়ারি, ২০২৪",
      excerpt: "বাংলাদেশের রিয়েল এস্টেট মার্কেটে বিপ্লব আনতে Property BD চালু করেছে তাদের অত্যাধুনিক ডিজিটাল প্ল্যাটফর্ম।",
      category: "প্রোডাক্ট লঞ্চ"
    },
    {
      title: "Property BD এর সাথে বড় নির্মাণ কোম্পানির পার্টনারশিপ",
      date: "২৮ ডিসেম্বর, ২০২৩",
      excerpt: "দেশের শীর্ষ নির্মাণ কোম্পানিগুলোর সাথে কৌশলগত পার্টনারশিপের মাধ্যমে সেবার মান বৃদ্ধি করতে যাচ্ছে Property BD।",
      category: "পার্টনারশিপ"
    },
    {
      title: "Property BD এর ক্লায়েন্ট সংখ্যা ১০,০০০ ছাড়িয়েছে",
      date: "১০ ডিসেম্বর, ২০২৩",
      excerpt: "মাত্র ১ বছরে Property BD এর সন্তুষ্ট ক্লায়েন্ট সংখ্যা ১০,০০০ এর মাইলফলক অতিক্রম করেছে।",
      category: "মাইলফলক"
    },
    {
      title: "বাংলাদেশের সবচেয়ে উদ্ভাবনী রিয়েল এস্টেট কোম্পানির পুরস্কার",
      date: "২২ নভেম্বর, ২০২৩",
      excerpt: "বাংলাদেশ রিয়েল এস্টেট এসোসিয়েশন থেকে 'সবচেয়ে উদ্ভাবনী কোম্পানি' পুরস্কার পেয়েছে Property BD।",
      category: "পুরস্কার"
    }
  ];

  const mediaKit = [
    {
      title: "লোগো প্যাক",
      description: "বিভিন্ন ফরম্যাটে Property BD এর অফিসিয়াল লোগো",
      fileSize: "2.5 MB"
    },
    {
      title: "প্রোডাক্ট স্ক্রিনশট",
      description: "উচ্চ রেজোলিউশনের প্রোডাক্ট ইমেজ ও স্ক্রিনশট",
      fileSize: "15.2 MB"
    },
    {
      title: "কোম্পানি প্রোফাইল",
      description: "Property BD এর বিস্তারিত প্রোফাইল ও তথ্য",
      fileSize: "1.8 MB"
    },
    {
      title: "নেতৃত্বের ছবি",
      description: "CEO ও টিম লিডারদের অফিসিয়াল ছবি",
      fileSize: "8.7 MB"
    }
  ];

  const awards = [
    {
      year: "২০২৩",
      title: "সবচেয়ে উদ্ভাবনী রিয়েল এস্টেট কোম্পানি",
      organization: "বাংলাদেশ রিয়েল এস্টেট এসোসিয়েশন"
    },
    {
      year: "২০২৩",
      title: "সেরা কাস্টমার সার্ভিস",
      organization: "ডিজিটাল বাংলাদেশ অ্যাওয়ার্ড"
    },
    {
      year: "২০২৩",
      title: "স্টার্টআপ অব দ্য ইয়ার",
      organization: "টেক এন্টারপ্রেনিউর অ্যাওয়ার্ড"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground variant="press" />
      <Navigation />
      <div className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                প্রেস ও মিডিয়া
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Property BD সম্পর্কে সর্বশেষ খবর, প্রেস রিলিজ এবং মিডিয়া রিসোর্স। আমাদের যাত্রা ও অর্জনের খবর রাখুন।
              </p>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">প্রেস রিলিজ</h2>
              <p className="text-lg text-muted-foreground">আমাদের সর্বশেষ সংবাদ ও ঘোষণা</p>
            </div>

            <div className="grid gap-6">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {release.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {release.date}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3">{release.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{release.excerpt}</p>
                    </div>

                    <div className="lg:ml-6">
                      <Button variant="outline" size="sm">
                        পড়ুন
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">মিডিয়া কিট</h2>
              <p className="text-lg text-muted-foreground">সাংবাদিক ও মিডিয়া পার্টনারদের জন্য রিসোর্স</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {mediaKit.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      <p className="text-sm text-muted-foreground">ফাইল সাইজ: {item.fileSize}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      ডাউনলোড
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">পুরস্কার ও সম্মাননা</h2>
              <p className="text-lg text-muted-foreground">আমাদের অর্জন ও স্বীকৃতি</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{award.year}</div>
                  <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">মিডিয়া ইনকোয়ারি</h2>
            <p className="text-lg mb-6 opacity-90">
              সাংবাদিক ও মিডিয়া পার্টনারদের জন্য বিশেষ যোগাযোগ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary">
                প্রেস কিট ডাউনলোড করুন
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                মিডিয়া যোগাযোগ
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Press;