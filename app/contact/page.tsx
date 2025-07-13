'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#513cb3]/20 via-black to-[#d3f350]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Get in</span>
              <span className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to take your social media to the next level? Let's discuss your goals 
              and create a strategy that drives real results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900 p-6 sm:p-8 rounded-xl sm:rounded-2xl animate-fade-in-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#513cb3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#513cb3]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Company/Brand Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#513cb3]"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#513cb3]"
                  >
                    <option value="">Select a service</option>
                    <option value="basic">Basic but Bold</option>
                    <option value="trending">Trending Now</option>
                    <option value="viral">Viral Vision</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and how we can help..."
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#513cb3]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#513cb3] to-[#d3f350] hover:from-[#4a35a1] hover:to-[#c5e847] text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  Send Message <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in-right">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                  We'd love to hear from you! Reach out to us through any of the following channels, 
                  and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#513cb3] p-2 sm:p-3 rounded-lg">
                    <Mail className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300 text-sm sm:text-base">info@sochsesocial.com</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#d3f350] p-2 sm:p-3 rounded-lg">
                    <Phone className="h-4 w-4 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-300 text-sm sm:text-base">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-500 p-2 sm:p-3 rounded-lg">
                    <MapPin className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Office</h3>
                    <p className="text-gray-300 text-sm sm:text-base">123 Marketing Street</p>
                    <p className="text-gray-300 text-sm sm:text-base">Digital City, DC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-orange-500 p-2 sm:p-3 rounded-lg">
                    <Clock className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Business Hours</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-300 text-sm sm:text-base">Saturday: 10AM - 4PM</p>
                    <p className="text-gray-300 text-sm sm:text-base">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-4 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Ready to get started?</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Book a free 30-minute consultation to discuss your social media goals and 
                  see how we can help you achieve them.
                </p>
                <button className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] hover:from-[#4a35a1] hover:to-[#c5e847] text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Frequently <span className="text-[#513cb3]">Asked Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                question: "How quickly can you start my project?",
                answer: "We can typically start new projects within 5-7 business days of contract signing, depending on our current workload and your project requirements."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. Our Basic but Bold package is perfect for small businesses."
              },
              {
                question: "What platforms do you manage?",
                answer: "We specialize in Instagram, TikTok, Facebook, Twitter, LinkedIn, and YouTube. We can also help with emerging platforms as they become relevant."
              },
              {
                question: "Can I see examples of your work?",
                answer: "Yes! Check out our portfolio section to see examples of our work across different industries and campaign types. We're proud of our results."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 p-4 sm:p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 200}ms`}}>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{faq.question}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}