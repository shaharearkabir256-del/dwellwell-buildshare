import { useState, useEffect } from 'react';

export default function WelcomeAnimation() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [show, setShow] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const messages = [
    {
      title: "🏢 Property BD তে স্বাগতম",
      subtitle: "বাংলাদেশের বিশ্বস্ত প্রপার্টি সেবা"
    },
    {
      title: "🏠 আপনার স্বপ্নের বাড়ি",
      subtitle: "Property BD এর সাথে খুঁজে নিন"
    },
    {
      title: "🌟 গুণগত সেবা ও আস্থা",
      subtitle: "Property BD - আপনার বিশ্বস্ত সাথী"
    },
    {
      title: "🚀 আধুনিক প্রযুক্তি",
      subtitle: "Property BD এর উন্নত সেবায়"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setShow(false), 500);
    }, 12000); // 4 messages × 3 seconds each

    return () => {
      clearInterval(messageInterval);
      clearTimeout(hideTimer);
    };
  }, [messages.length]);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className={`text-center transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'
      }`}>
        <div className="bg-gradient-to-r from-primary/90 to-primary-foreground/90 backdrop-blur-md rounded-2xl px-8 py-6 shadow-2xl border border-white/20">
          <div className={`transition-all duration-500 ${
            currentMessage % 2 === 0 ? 'animate-fade-in' : 'animate-scale-in'
          }`} key={currentMessage}>
            <h2 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              {messages[currentMessage].title}
            </h2>
            <p className="text-white/90 text-lg font-medium">
              {messages[currentMessage].subtitle}
            </p>
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {messages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentMessage ? 'bg-yellow-300 scale-125' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}