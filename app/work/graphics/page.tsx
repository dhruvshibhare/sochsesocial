import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Graphics() {
  const graphicsWork = [
    { image: '/images/g1.png' },
    { image: '/images/g2.png' },
    { image: '/images/g3.png' },
    { image: '/images/g4.png' },
    { image: '/images/g5.png' },
    { image: '/images/g6.png' },
    { image: '/images/g7.png' },
    { image: '/images/g8.png' },
    { image: '/images/g9.png' },
    { image: '/images/g10.png' },
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
                Graphics
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-1xl mx-auto">
            Good design isn’t just about looking pretty, it’s about making people stop scrolling. Our graphics blend on-brand colours, clean layouts, and eye-catching elements that tell your brand story at a glance. From promotional posts to shareable infographics, we make sure every visual adds value and keeps your feed consistent, fresh, and professional.</p>
          </div>
        </div>
      </section>

      {/* Simple Image Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {graphicsWork.map((work, index) => (
              <div key={index} className="bg-black/30 border border-[#513cb3]/30 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center aspect-[4/3]">
                  <img
                    src={work.image}
                  alt={`Graphic ${index + 1}`}
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
