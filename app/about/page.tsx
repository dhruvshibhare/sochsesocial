'use client';

import { useEffect, useState } from 'react';
import { Award, Users, Target, Rocket } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#513cb3]/20 via-black to-[#d3f350]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mx-auto max-w-3xl bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-[#513cb3]/30 px-6 py-10 sm:px-12 sm:py-14 flex flex-col items-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 flex items-center justify-center gap-3">
                <span className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] bg-clip-text text-transparent"></span>
                <img src="/logo.png" alt="Sochsesocial" className="h-25 w-45 object-contain" />
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Soch Se Social isn't just a name, it's literally how this started. A bunch of 
              over-caffeinated conversations, endless scrolling, and one big idea: "Why do most 
              brands look so meh on social media when they have so much potential?" 
              </p>
              <p className="text-gray-200 text-base sm:text-lg max-w-xl mb-6">
              We're two friends turned co-founders — Kriti and Ishika,  who believed we could fix 
              that. No big agency jargon. No fake promises. Just real strategies, good storytelling, 
              and designs that don't get lost in the scroll. 
              </p>
              <p className="text-gray-200 text-base sm:text-lg max-w-xl mb-6">
              We started small, handling pages for local businesses, artists, and small brands. 
              What we learnt? Good content doesn't need to be complicated, it just needs to be 
              genuine and share-worthy. That's what Soch Se Social is all about: thinking smart, 
              creating real, and staying social. 
              </p>
              <div className="flex flex-col items-center my-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#513cb3] to-[#d3f350] p-2 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0020 6.382V5a2 2 0 00-2-2H6a2 2 0 00-2 2v1.382a2 2 0 00.447 1.342L9 10m6 0v4m0 0l-4.553 2.276A2 2 0 014 17.618V19a2 2 0 002 2h12a2 2 0 002-2v-1.382a2 2 0 00-.447-1.342L15 14z" /></svg>
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#513cb3] to-[#d3f350] bg-clip-text text-transparent">whats up with our logo?</h3>
                </div>
                <div className="h-1 w-24 bg-gradient-to-r from-[#513cb3] to-[#d3f350] rounded-full mb-4"></div>
              </div>
              <p className="text-gray-200 text-base sm:text-lg max-w-xl mb-6">
                Our logo has a story too. It's three S's — Strategy, Storytelling, Social - all intertwined to form a camera shutter. Because we believe every post, every reel, every graphic should capture attention just like a perfect shot.
              </p>
              <p className="text-gray-200 text-base sm:text-lg max-w-xl mb-6">It's a reminder that we're not here to just "manage pages." We're here to help brands show up, stand out, and stick around, one scroll-stopping idea at a time.</p>
              <p className="text-gray-200 text-base sm:text-lg max-w-xl">If you're a brand that wants to get social the smart way, you're in the right place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
     
    </div>
  );
}