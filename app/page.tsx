'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Star, TrendingUp, Users, Zap, Sparkles, Target, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';
import CountingNumber from '@/components/CountingNumber';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  const [stats] = useState([
    { number: '500+', label: 'Clients Served' },
    { number: '2M+', label: 'Followers Generated' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ]);

  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: "Priya Sharma",
      company: "TechStart Inc.",
      content: "Sochsesocial transformed our social media presence. Our engagement increased by 300% in just 3 months!",
      rating: 5
    },
    {
      name: "Rahul Mehta",
      company: "Fashion Forward",
      content: "The creative team at Sochsesocial understands our brand perfectly. Every post they create goes viral!",
      rating: 5
    },
    {
      name: "Ananya Singh",
      company: "Healthy Eats",
      content: "Professional, creative, and results-driven. They helped us reach 100K followers in 6 months.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Fitness Pro",
      content: "Amazing results! Our social media ROI increased by 400% within the first quarter.",
      rating: 5
    },
    {
      name: "Sneha Nair",
      company: "Beauty Brands",
      content: "Their creative approach and data-driven strategies helped us reach 1M followers in 8 months.",
      rating: 5
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#513cb3]/20 via-black to-[#d3f350]/10"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#513cb3]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#d3f350]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-[#513cb3]/5 to-[#d3f350]/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transition-all duration-1500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <ScrollReveal direction="scale" delay={200}>
            <div className="mb-4 sm:mb-6 flex justify-center">
              <div className="bg-gradient-to-r from-[#513cb3]/20 to-[#d3f350]/20 backdrop-blur-sm border border-[#513cb3]/30 rounded-full px-4 py-2 sm:px-6 sm:py-2">
                <span className="text-[#d3f350] text-xs sm:text-sm font-medium flex items-center">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-2 animate-pulse" />
                  #1 Social Media Marketing Agency
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#513cb3] via-[#d3f350] to-[#513cb3] bg-clip-text text-transparent animate-gradient-x">
                Make
              </span>
              <br />
              <span className="text-white">Social Media</span>
              <br />
              <span className="bg-gradient-to-r from-[#d3f350] via-[#513cb3] to-[#d3f350] bg-clip-text text-transparent animate-gradient-x">
                Work For You
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={600}>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            Stand out online with content that connects, converts, and compounds your growth.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] hover:from-[#4a35a1] hover:to-[#c5e847] text-black px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full text-sm sm:text-base lg:text-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#513cb3]/25 group"
              >
                Get Started Now
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                href="/work/grid"
                className="border-2 border-[#513cb3] text-[#513cb3] hover:bg-[#513cb3] hover:text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full text-sm sm:text-base lg:text-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group"
              >
                View Our Work
                <Play className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Floating Elements */}
          <ScrollReveal direction="scale" delay={1000}>
            <div className="absolute top-10 sm:top-20 left-5 sm:left-10 animate-float">
              <div className="bg-[#513cb3]/20 backdrop-blur-sm rounded-full p-2 sm:p-4 border border-[#513cb3]/30">
                <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-[#513cb3]" />
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="scale" delay={1200}>
            <div className="absolute top-16 sm:top-32 right-5 sm:right-10 animate-float delay-1000">
              <div className="bg-[#d3f350]/20 backdrop-blur-sm rounded-full p-2 sm:p-4 border border-[#d3f350]/30">
                <Target className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-[#d3f350]" />
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="scale" delay={1400}>
            <div className="absolute bottom-16 sm:bottom-32 left-10 sm:left-20 animate-float delay-2000">
              <div className="bg-blue-500/20 backdrop-blur-sm rounded-full p-2 sm:p-4 border border-blue-500/30">
                <BarChart3 className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-400" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <ScrollReveal direction="up" delay={1600}>
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-[#513cb3] rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-[#513cb3] rounded-full mt-1 sm:mt-2 animate-pulse"></div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Work Section - Cards for Analytics, Graphics, Grid, Reels */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-3 sm:gap-6">
            {[
              {
                title: "Analytics",
                href: "/work/analytics",
                icon: <BarChart3 className="h-7 w-7 sm:h-12 sm:w-12 lg:h-20 lg:w-20 text-[#513cb3] transition-all duration-300 group-hover:scale-110" />,
              },
              {
                title: "Graphics",
                href: "/work/graphics",
                icon: <Sparkles className="h-7 w-7 sm:h-12 sm:w-12 lg:h-20 lg:w-20 text-[#d3f350] transition-all duration-300 group-hover:scale-110" />,
              },
              {
                title: "Grid",
                href: "/work/grid",
                icon: <Users className="h-7 w-7 sm:h-12 sm:w-12 lg:h-20 lg:w-20 text-[#513cb3] transition-all duration-300 group-hover:scale-110" />,
              },
              {
                title: "Reels",
                href: "/work/reels",
                icon: <Play className="h-7 w-7 sm:h-12 sm:w-12 lg:h-20 lg:w-20 text-[#d3f350] transition-all duration-300 group-hover:scale-110" />,
              },
            ].map((item, idx) => (
              <ScrollReveal key={item.title} direction="up" delay={idx * 100}>
                <Link href={item.href} className="aspect-square w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#513cb3]/10 to-[#d3f350]/10 border border-[#513cb3]/20 rounded-lg p-2 sm:p-4 text-center transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:border-[#513cb3] hover:bg-gradient-to-tr hover:from-[#513cb3]/30 hover:to-[#d3f350]/30">
                  <div className="mb-1 sm:mb-2">{item.icon}</div>
                  <h3 className="text-[10px] sm:text-base md:text-lg lg:text-3xl xl:text-4xl font-bold text-white truncate w-full transition-all duration-300 group-hover:text-[#d3f350]">{item.title}</h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#513cb3]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal direction="up">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
                Our <span className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Whether you’re starting out or scaling up, we’ve designed three clear service 
packages that fit different goals and budgets. Each one covers the essentials, but 
with enough flexibility to adapt as you grow. 

              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#d3f350]" />,
                title: "Basic but Bold",
                description: "For new brands or small businesses starting out.",
                features: ["8 Reels, 4 Posts, 15 Stories", "Instagram + Facebook Management", "Hashtag SEO + Grid + Bio Setup"],
                color: "yellow"
              },
              {
                icon: <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#d3f350]" />,
                title: "Trending Now",
                description: "For growing brands wanting better reach.",
                features: ["12 Reels, 8 Posts, 25 Stories", "₹2,000 Ad Targeting + 3 Shoots", "Strategy + SEO + Visual Upgrade"],
                color: "green",
                popular: true
              },
              {
                icon: <Users className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#513cb3]" />,
                title: "Viral Vision",
                description: "For established brands ready to scale big.",
                features: ["Daily content", "₹5,000 Ads, 4 Pro Shoots, Dedicated Manager", "Monthly Strategy + Full Team Support"],
                color: "purple"
              }
            ].map((service, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <div className={`relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border transition-all duration-500 transform hover:scale-105 group ${
                  service.popular 
                    ? 'border-[#513cb3]/50 hover:border-[#513cb3] shadow-xl shadow-[#513cb3]/20' 
                    : 'border-gray-700/50 hover:border-gray-600'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] text-black px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center animate-pulse">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
                    
                    <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-gray-300 text-xs sm:text-sm">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/services" className={`block text-center py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 text-sm sm:text-base ${
                    service.popular
                      ? 'bg-gradient-to-r from-[#513cb3] to-[#d3f350] hover:from-[#4a35a1] hover:to-[#c5e847] text-black shadow-lg'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}>
                    Learn More →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Horizontal Scrolling */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
                What Our <span className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-xl max-w-3xl mx-auto">
                Don't just take our word for it - hear from the brands we've helped achieve viral success
              </p>
            </div>
          </ScrollReveal>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                ref={testimonialRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-[#513cb3]/30 transition-all duration-500 max-w-4xl mx-auto">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-[#d3f350] fill-current animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-8 text-lg sm:text-xl lg:text-2xl leading-relaxed italic text-center">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-semibold text-white text-lg sm:text-xl">{testimonial.name}</div>
                          <div className="text-[#513cb3] text-sm sm:text-base">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#513cb3]/20 hover:bg-[#513cb3]/40 backdrop-blur-sm border border-[#513cb3]/30 rounded-full p-3 transition-all duration-300 group"
            >
              <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#513cb3]/20 hover:bg-[#513cb3]/40 backdrop-blur-sm border border-[#513cb3]/30 rounded-full p-3 transition-all duration-300 group"
            >
              <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-[#513cb3] scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#513cb3]/20 via-transparent to-[#d3f350]/20"></div>
        <ScrollReveal direction="up">
          <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Go <span className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] bg-clip-text text-transparent">Viral</span>?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base lg:text-xl mb-8 sm:mb-10 leading-relaxed">
            Ready to grow with us? Let’s talk!
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] hover:from-[#4a35a1] hover:to-[#c5e847] text-black px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 rounded-full text-sm sm:text-base lg:text-xl font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#513cb3]/25 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
