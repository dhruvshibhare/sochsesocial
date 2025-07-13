import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

export default function GridAesthetics() {
  const gridWork = [
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d1.png' : '/images/d1.png' },
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d2.png' : '/images/d2.png' },
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d3.png' : '/images/d3.png' },
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d4.png' : '/images/d4.png' },
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d5.png' : '/images/d5.png' },
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d6.png' : '/images/d6.png' },
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d7.png' : '/images/d7.png' },
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d8.png' : '/images/d8.png' },
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d9.png' : '/images/d9.png' },
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d10.png' : '/images/d10.png' },
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d11.png' : '/images/d11.png' },
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d12.png' : '/images/d12.png' },
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d13.png' : '/images/d13.png' },
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d14.png' : '/images/d14.png' },
    { image: process.env.NODE_ENV === 'production' ? '/sochsesocial/images/d15.png' : '/images/d15.png' },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-[#513cb3]/20 via-black to-[#d3f350]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/" className="text-[#513cb3] hover:text-[#d3f350] flex items-center transition-colors duration-300">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home  
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#513cb3] to-[#d3f350] bg-clip-text text-transparent">
              Grid Aesthetics
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-1xl mx-auto">Your Instagram grid is the first impression, and we make sure it looks like one worth 
following. From colour palettes to post sequencing, we plan and maintain grids that 
are cohesive, on-brand, and instantly recognisable. It’s not just about pretty squares, 
it’s about a feed that tells your story with every swipe. 
</p>
          </div>
        </div>
      </section>

      {/* Simple Image Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {gridWork.map((work, index) => (
              <div key={index} className="bg-black/30 border border-[#513cb3]/30 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center aspect-[4/3]">
                  <OptimizedImage
                    src={work.image}
                    alt={`Grid ${index + 1}`}
                    className="w-full h-full object-contain rounded-xl"
                  />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
