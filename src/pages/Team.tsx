import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Award, Heart, Target } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "রফিকুল ইসলাম",
      position: "সিইও ও প্রতিষ্ঠাতা",
      image: "/placeholder.svg",
      bio: "১৫+ বছরের অভিজ্ঞতা সহ রিয়েল এস্টেট ইন্ডাস্ট্রিতে একজন দক্ষ নেতা।"
    },
    {
      name: "ফাতেমা খাতুন",
      position: "প্রপার্টি ম্যানেজার",
      image: "/placeholder.svg",
      bio: "ক্লায়েন্ট সার্ভিস এবং প্রপার্টি ম্যানেজমেন্টে বিশেষজ্ঞ।"
    },
    {
      name: "করিম উদ্দিন",
      position: "কনস্ট্রাকশন হেড",
      image: "/placeholder.svg",
      bio: "নির্মাণ প্রকল্পে ১০+ বছরের অভিজ্ঞতা সহ একজন দক্ষ ইঞ্জিনিয়ার।"
    },
    {
      name: "নাসিরা বেগম",
      position: "মার্কেটিং ডিরেক্টর",
      image: "/placeholder.svg",
      bio: "ডিজিটাল মার্কেটিং এবং ব্র্যান্ড ডেভেলপমেন্টে বিশেষজ্ঞ।"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "আস্থা ও বিশ্বস্ততা",
      description: "আমরা প্রতিটি ক্লায়েন্টের সাথে সৎ ও স্বচ্ছ আচরণ করি।"
    },
    {
      icon: Award,
      title: "গুণগত মান",
      description: "সর্বোচ্চ মানের সেবা প্রদান আমাদের প্রধান লক্ষ্য।"
    },
    {
      icon: Target,
      title: "লক্ষ্য অর্জন",
      description: "ক্লায়েন্টের স্বপ্নের বাড়ি খুঁজে দিতে আমরা প্রতিশ্রুতিবদ্ধ।"
    },
    {
      icon: Users,
      title: "টিমওয়ার্ক",
      description: "একসাথে কাজ করে আমরা অসাধ্য সাধন করি।"
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
                আমাদের টিম
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Property BD এর পেছনে রয়েছে একদল অভিজ্ঞ ও দক্ষ পেশাদার, যারা আপনার স্বপ্নের বাড়ি খুঁজে দিতে ও নির্মাণ করতে প্রতিশ্রুতিবদ্ধ।
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary p-1">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের মূল্যবোধ</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                যে নীতিমালার উপর ভিত্তি করে আমরা প্রতিদিন কাজ করি
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Team;