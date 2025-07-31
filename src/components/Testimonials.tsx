import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Property Owner',
      image: testimonial1,
      rating: 5,
      text: 'Property BD made finding the perfect housemate effortless. The vetting process is thorough, and the platform is so user-friendly. I found an amazing tenant within two weeks!',
      location: 'Seattle, WA'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Custom Home Owner',
      image: testimonial2,
      rating: 5,
      text: 'The construction team exceeded our expectations. From the initial 3D designs to the final walkthrough, every detail was perfect. Our dream home became a reality thanks to their expertise.',
      location: 'Bellevue, WA'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'House Sharer',
      image: testimonial1,
      rating: 5,
      text: 'As a young professional, finding affordable housing in Seattle seemed impossible. Property BD connected me with an amazing house share that fits my budget and lifestyle perfectly.',
      location: 'Capitol Hill, Seattle'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience with Property BD.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-20 h-20 text-primary" />
            </div>

            {/* Current Testimonial */}
            <div className="relative z-10 animate-fade-in" key={currentSlide}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-24 h-24 rounded-full object-cover shadow-premium"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                    "{testimonials[currentSlide].text}"
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <div className="font-semibold text-lg">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentSlide].role} • {testimonials[currentSlide].location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="w-12 h-12 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="w-12 h-12 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fade-up">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;