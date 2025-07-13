'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsWorkOpen(false);
  }, [router]);

  const handleMobileMenuClick = (href: string) => {
    setIsOpen(false);
    setIsWorkOpen(false);
    router.push(href);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-[#513cb3]/20 shadow-lg shadow-[#513cb3]/10' 
        : 'bg-black/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group" onClick={() => setIsOpen(false)}>
            <img src="/logo.png" alt="Sochsesocial" className="max-h-8 max-w-16 sm:max-h-10 sm:max-w-20 lg:max-h-12 lg:max-w-28 object-contain" />
          </Link>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="relative text-gray-300 hover:text-white transition-all duration-300 group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#513cb3] to-[#d3f350] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link href="/about" className="relative text-gray-300 hover:text-white transition-all duration-300 group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#513cb3] to-[#d3f350] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link href="/founders" className="relative text-gray-300 hover:text-white transition-all duration-300 group">
              Founders
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#513cb3] to-[#d3f350] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link href="/services" className="relative text-gray-300 hover:text-white transition-all duration-300 group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#513cb3] to-[#d3f350] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <div className="relative group">
              <button
                onClick={() => setIsWorkOpen(!isWorkOpen)}
                className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
              >
                Portfolio 
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isWorkOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#513cb3] to-[#d3f350] group-hover:w-full transition-all duration-300"></span>
              </button>
              
              <div className={`absolute top-full mt-4 w-56 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-[#513cb3]/20 border border-[#513cb3]/20 py-3 transition-all duration-300 ${
                isWorkOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>

                <Link href="/work/graphics" className="block px-6 py-3 text-sm text-gray-300 hover:bg-[#513cb3]/10 hover:text-white transition-all duration-200">
                  Graphics Design
                </Link>
                <Link href="/work/analytics" className="block px-6 py-3 text-sm text-gray-300 hover:bg-[#513cb3]/10 hover:text-white transition-all duration-200">
                  Analytics & Insights
                </Link>
                <Link href="/work/reels" className="block px-6 py-3 text-sm text-gray-300 hover:bg-[#513cb3]/10 hover:text-white transition-all duration-200">
                  Reels & Videos
                </Link>
                <Link href="/work/grid" className="block px-6 py-3 text-sm text-gray-300 hover:bg-[#513cb3]/10 hover:text-white transition-all duration-200">
                  Grid Aesthetics
                </Link>
              </div>
            </div>
          </div>

          {/* Get Started Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] hover:from-[#4a35a1] hover:to-[#c5e847] text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#513cb3]/25 flex items-center group"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden mobile-menu-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden mobile-menu-container transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-xl rounded-xl mt-4 border border-[#513cb3]/20 max-h-[70vh] overflow-y-auto">
            <button 
              onClick={() => handleMobileMenuClick('/')} 
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-[#513cb3]/10 rounded-lg transition-all duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => handleMobileMenuClick('/about')} 
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-[#513cb3]/10 rounded-lg transition-all duration-200"
            >
              About Us
            </button>
            <button 
              onClick={() => handleMobileMenuClick('/founders')} 
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-[#513cb3]/10 rounded-lg transition-all duration-200"
            >
              Founders
            </button>
            <button 
              onClick={() => handleMobileMenuClick('/services')} 
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-[#513cb3]/10 rounded-lg transition-all duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => handleMobileMenuClick('/work')} 
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-[#513cb3]/10 rounded-lg transition-all duration-200"
            >
              Portfolio
            </button>
            <div className="pl-4 space-y-1">
              <button 
                onClick={() => handleMobileMenuClick('/work/graphics')} 
                className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#513cb3]/5 rounded-lg transition-all duration-200"
              >
                Graphics Design
              </button>
              <button 
                onClick={() => handleMobileMenuClick('/work/analytics')} 
                className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#513cb3]/5 rounded-lg transition-all duration-200"
              >
                Analytics & Insights
              </button>
              <button 
                onClick={() => handleMobileMenuClick('/work/reels')} 
                className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#513cb3]/5 rounded-lg transition-all duration-200"
              >
                Reels & Videos
              </button>
              <button 
                onClick={() => handleMobileMenuClick('/work/grid')} 
                className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#513cb3]/5 rounded-lg transition-all duration-200"
              >
                Grid Aesthetics
              </button>
            </div>
            <button
              onClick={() => handleMobileMenuClick('/contact')}
              className="block w-full mx-4 mt-4 bg-gradient-to-r from-[#513cb3] to-[#d3f350] text-black px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;