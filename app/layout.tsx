import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationPopup from '@/components/ConsultationPopup';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sochsesocial - Social Media Marketing Agency',
  description: 'Premium social media marketing services to boost your brand presence and engagement',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" as="video" href="/videos/reel1.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/videos/reel2.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/videos/reel3.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/videos/reel4.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/videos/reel5.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/videos/reel6.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/videos/reel7.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/videos/reel8.mp4" type="video/mp4" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ConsultationPopup />
      </body>
    </html>
  );
}
