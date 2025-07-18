'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Check, Zap, TrendingUp, Users, Star } from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const packages = [
    {
      name: "Basic but Bold",
      price: "₹25,000/mo", // Example price, adjust as needed
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-[#d3f350]" />,
      description: "Perfect for brands starting out or looking for a simple, solid presence on social. This package covers the basics — smart posting, authentic stories, and just enough strategy to build your online personality without feeling overwhelmed.",
      who: "New brands, small businesses, or anyone taking their first steps on social media.",
      features: [
        "Instagram + Facebook Management",
        "8 Reels",
        "4 Static Posts",
        "15 Stories",
        "Highlight & Bio Creation",
        "Hashtag SEO & Keyword Analysis",
        "Grid Maintenance",
        "Ad Targeting (ad budget not included)",
        "2 iPhone Shoots",
        "Performance Report after 3 months"
      ],
      highlight: false
    },
    {
      name: "Trending Now",
      price: "₹35,000/mo", // Example price, adjust as needed
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#d3f350]" />,
      description: "Designed for growing brands ready to level up. More reels, better visuals, and focused ads, ‘Trending Now’ makes sure you stay consistent and top-of-mind in your niche.",
      who: "Brands with an existing presence that want to boost consistency, quality, and reach",
      features: [
        "Instagram + Facebook Management",
        "12 Reels",
        "8 Posts",
        "25 Stories",
        "Highlight & Bio Creation",
        "Hashtag SEO & Keyword Analysis",
        "Grid Maintenance",
        "Ad Targeting (₹2,000 included)",
        "2 iPhone Shoots + 1 Product Shoot with Photographer",
        "Performance Report after 3 months"
      ],
      highlight: true
    },
    {
      name: "Viral Vision",
      price: "₹50,000/mo", // Example price, adjust as needed
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#513cb3]" />,
      description: "For brands that want to go all in. Daily posting, advanced strategy refreshes, pro-level shoots, and a dedicated manager to keep you ahead of the curve. This is your ticket to serious growth and staying viral — the smart way.",
      who: "Established brands or ambitious businesses aiming for aggressive growth and a strong, daily social presence.",
      features: [
        "Instagram + Facebook Management",
        "Daily Posting (Choose: 30 Reels or 20 Reels + 10 Posts)",
        "30 Stories",
        "Highlight & Bio Creation",
        "Hashtag SEO & Keyword Analysis",
        "Grid Maintenance",
        "4 Shoots (Photographer + iPhone mix)",
        "Ad Targeting (₹5,000 included)",
        "Monthly Reports",
        "Monthly Strategy Refresh",
        "Full Team Access + Dedicated Support Manager"
      ],
      highlight: false
    }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#513cb3]/20 via-black to-[#d3f350]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Our</span>
              <span className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] bg-clip-text text-transparent"> Services</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            At Soch Se Social, we don’t just post pretty pictures and catchy captions, we build 
            social media ecosystems that work.
            <br/>
            <br/>
            From audience research to content strategy, platform-specific planning to 
performance tracking, we make sure every reel, graphic, and post has a purpose. 
Our approach combines creative storytelling with data-backed tactics that help 
brands stay visible, relevant, and shareable in an algorithm-driven world. 
            <br/>
            <br/>
            Whether you’re starting out or scaling up, we’ve designed three clear service 
packages that fit different goals and budgets. Each one covers the essentials, but 
with enough flexibility to adapt as you grow. 
            </p>
          </div>
        </div>
      </section>

      {/* Process Section (moved above Packages) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="text-[#513cb3]">Process</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
               Here’s how we do it: 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[ 
              {
                title: "Strategic Planning",
                description: " Understanding your audience, defining your brand voice, and mapping out monthly content calendars that align with trends and business goals."
              },
              {
                title: "Content Creation",
                description: " Scroll-stopping reels, feed aesthetics, graphics, and stories that look good and feel authentic."
              },
              {
                title: "Target Distribution",
                description: "Targeted Distribution: Smart ad targeting, hashtags, and engagement tactics to make sure the right people see you. "
              },
              {
                title: "Performance Tracking",
                description: "Monthly analytics reports so you know what’s working, what’s not, and what’s next."
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-4 sm:p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 animate-scale-in" style={{animationDelay: `${index * 100}ms`}}>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section (now after Process) */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-500 transform hover:scale-105 animate-fade-in-up ${
                  pkg.highlight 
                    ? 'ring-2 ring-[#513cb3]/50 hover:ring-[#513cb3] shadow-xl shadow-[#513cb3]/20' 
                    : 'border border-gray-700/50 hover:border-gray-600'
                }`}
                style={{animationDelay: `${index * 200}ms`}}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] text-black px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center animate-pulse">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 sm:mb-8">
                  <div className="mb-3 sm:mb-4">{pkg.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base">{pkg.description}</p>
                  <div className="text-gray-300 italic text-xs sm:text-sm mb-2">{pkg.who}</div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl sm:text-4xl font-bold text-white">{pkg.price}</span>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm sm:text-base">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#d3f350] mr-2 sm:mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-center block transition-all duration-300 text-sm sm:text-base ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-[#513cb3] to-[#d3f350] hover:from-[#4a35a1] hover:to-[#c5e847] text-black'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Choose Your Package?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
            Not sure which package is right for you? Let's discuss your goals and find the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('openConsultation'))}
              className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] hover:from-[#4a35a1] hover:to-[#c5e847] text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </button>
            <Link
              href="/work/grid"
              className="border-2 border-[#513cb3] text-[#513cb3] hover:bg-[#513cb3] hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
