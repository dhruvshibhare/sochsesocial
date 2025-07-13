import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Analytics() {
  const analyticsWork = [
    { image: "/images/a1.png" },
    { image: "/images/a2.PNG" },
    { image: "/images/a3.PNG" },
    { image: "/images/a4.PNG" },
    { image: "/images/a5.PNG" },
    { image: "/images/a6.PNG" },
    { image: "/images/a7.PNG" },
    { image: "/images/a8.PNG" },
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
                Analytics
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-1xl mx-auto">Numbers don’t lie, and we make sure yours speak loud and clear. From tracking reach and engagement to monitoring growth in followers, views, and clicks, we turn raw data into easy-to-understand insights. Expect monthly reports, clear growth snapshots, and strategies that adapt based on what’s actually working for your brand.
            Your progress is always measurable and visible.</p>
          </div>
        </div>
      </section>

      {/* Simple Image Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {analyticsWork.map((work, index) => (
              <div key={index} className="bg-black/30 border border-[#513cb3]/30 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center aspect-[4/3]">
                  <img
                    src={work.image}
                  alt={`Analytics ${index + 1}`}
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