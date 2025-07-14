'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Reels() {
  const reelsWork = [
    { video: "/videos/reel1.mp4" },
    { video: "/videos/reel2.mp4" },
    { video: "/videos/reel3.mp4" },
    { video: "/videos/reel4.mp4" },
    { video: "/videos/reel5.mp4" },
    { video: "/videos/reel6.mp4" },
    { video: "/videos/reel7.mp4" },
    { video: "/videos/reel8.mp4" },
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
              Reels & Videos
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-1xl mx-auto">Short-form video is where the magic happens. Whether it’s trending audios, 
behind-the-scenes moments, or storytelling reels that go viral, we craft videos that 
feel authentic and boost reach organically. Our approach combines smart scripting, 
smooth editing, and an eye for what actually hooks your audience. More views, 
more shares, more love.
            </p>    
          </div>
        </div>
      </section>

      {/* Simple Video Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {reelsWork.map((work, index) => (
              <div key={index} className="bg-black/30 border border-[#513cb3]/30 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center aspect-[9/16]">
                <video
                  src={work.video}
                  className="w-full h-full object-contain rounded-xl transition-all duration-300"
                  muted
                  loop
                  playsInline
                  preload="none"
                  onMouseOver={e => { e.currentTarget.play(); }}
                  onMouseOut={e => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  controls={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
