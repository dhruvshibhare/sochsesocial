'use client';

import { useState, useEffect } from 'react';
import { X, MessageCircle, Gift, Sparkles } from 'lucide-react';

const ConsultationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormOpen(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {!isFormOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 animate-bounce">
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] hover:from-[#4a35a1] hover:to-[#c5e847] text-black px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-2xl shadow-[#513cb3]/25 flex items-center space-x-2 sm:space-x-3 transition-all duration-300 transform hover:scale-105 group border border-[#513cb3]/30 backdrop-blur-sm text-sm sm:text-base"
          >
            <div className="relative">
              <Gift className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
              <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
            </div>
            <div className="text-left">
              <div className="font-bold text-xs sm:text-sm">Free Consultation!</div>
              <div className="text-xs opacity-90 hidden sm:block">Get expert advice now</div>
            </div>
          </button>
        </div>
      )}

      {isFormOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-xl sm:rounded-2xl max-w-sm sm:max-w-md w-full p-4 sm:p-6 relative border border-[#513cb3]/30 shadow-2xl shadow-[#513cb3]/20 animate-scale-in max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors duration-300 hover:rotate-90 transform"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="mb-4 sm:mb-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
                <div className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] p-2 sm:p-3 rounded-full">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                </div>
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-[#d3f350] animate-pulse" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Free Consultation</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Get expert advice and a free sample of our work. No commitment required!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#513cb3] focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#513cb3] focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Business/Brand Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#513cb3] focus:border-transparent transition-all duration-300"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Service Interest
                </label>
                <select className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#513cb3] focus:border-transparent transition-all duration-300">
                  <option value="">Select a service</option>
                  <option value="basic">Basic but Bold</option>
                  <option value="trending">Trending Now</option>
                  <option value="viral">Viral Vision</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#513cb3] to-[#d3f350] hover:from-[#4a35a1] hover:to-[#c5e847] text-black font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#513cb3]/25 flex items-center justify-center group"
              >
                Get My Free Consultation
                <Sparkles className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </form>

            <div className="mt-3 sm:mt-4 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                🎁 Includes a free sample design for your brand
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.9) translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default ConsultationPopup;