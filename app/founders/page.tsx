'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Founders() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const founders = [
    {
      name: "Kriti Kapoor",
      image: "/images/f1.PNG",
      bio: "Hola! I’m Kriti — a digital marketing specialist with 2+ years of turning creative ideas into strategies that actually work.For me, social media is all about building genuine connections that keep people coming back. I make sure our clients feel truly heard and their audience feels something real every time they see their brand online. Once I’m in, I’m all in — no half measures, just honest effort. If you catch me panicking, don’t worry, it just means I care enough to get every reel,grid, and post exactly right.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Ishika Verma",
      image: "/images/f3.png",
      bio: "Hi, I’m Ishika — a digital marketer with 3+ years of hands-on experience in social media and brand strategy. I believe every brand has a story worth telling, and I’m here to make sure it connects with the right people in the smartest way.For me, real growth is more than likes and numbers — it’s about building trust, staying consistent, and creating a bond between the brand and its audience. And when things get hectic? Staying calm is part of my job too.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#513cb3]/20 via-black to-[#d3f350]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Meet the</span>
              <span className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] bg-clip-text text-transparent"> Founders</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              The visionary team behind Sochsesocial. Together,
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-20">
            {founders.map((founder, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} animate-fade-in-left`} style={{animationDelay: `${index * 300}ms`}}>
                  <div className="relative group">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-80 sm:h-96 object-cover rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl sm:rounded-2xl"></div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in-right`} style={{animationDelay: `${index * 300 + 200}ms`}}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                    {founder.name}
                  </h2>
                  <p className="text-lg sm:text-xl text-[#513cb3] mb-4 sm:mb-6">{}</p>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {founder.bio}
                  </p>
                  
                  <div className="flex space-x-3 sm:space-x-4">
                    <a
                      href={founder.social.linkedin}
                      className="text-gray-400 hover:text-[#513cb3] transition-all duration-300 transform hover:scale-110"
                    >
                      <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                    <a
                      href={founder.social.twitter}
                      className="text-gray-400 hover:text-[#513cb3] transition-all duration-300 transform hover:scale-110"
                    >
                      <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                    <a
                      href={founder.social.instagram}
                      className="text-gray-400 hover:text-[#d3f350] transition-all duration-300 transform hover:scale-110"
                    >
                      <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
