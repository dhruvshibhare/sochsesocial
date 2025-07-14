import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Mail, } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#513cb3]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-3 sm:mb-4">
              <Image
                src="/logo.png"
                alt="Soch Se Social Logo"
                width={140}
                height={40}
                className="object-contain h-10 w-auto"
                priority
              />
            </Link>
            <p className="text-gray-400 mb-3 sm:mb-4 max-w-md text-sm sm:text-base">
              Elevating brands through innovative social media marketing strategies. 
              We create viral content that drives engagement and delivers results.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://www.instagram.com/sochsesocial/" className="text-gray-400 hover:text-[#513cb3] transition-colors duration-300 transform hover:scale-110">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#513cb3] transition-colors duration-300 transform hover:scale-110">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#d3f350] transition-colors duration-300 text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#d3f350] transition-colors duration-300 text-sm sm:text-base">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/work/reels" className="text-gray-400 hover:text-[#d3f350] transition-colors duration-300 text-sm sm:text-base">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#d3f350] transition-colors duration-300 text-sm sm:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li className="flex items-center text-gray-400 text-sm sm:text-base">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-[#513cb3]" />
                sochsesocial@gmail.com
              </li>
              <li className="flex items-center text-gray-400 text-sm sm:text-base"></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#513cb3]/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">&copy; 2025 Sochsesocial. All rights reserved. Powered by Shopvix</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
