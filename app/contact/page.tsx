'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://sheetdb.io/api/v1/htn1rfsmhhx6v', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        alert('There was an error submitting the form.');
      }
    } catch (error) {
      alert('There was an error submitting the form.');
    }
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
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#513cb3]"
                      placeholder="Your phone number"
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

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-[#513cb3] p-2 sm:p-3 rounded-lg">
                  <Mail className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-300 text-sm sm:text-base">sochsesocial@gmail.com</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Response within 24 hours</p>
                </div>
              </div>

              <div className="bg-gray-900 p-4 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Ready to get started?</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Book a free 30-minute consultation to discuss your social media goals and 
                  see how we can help you achieve them.
                </p>
                 <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event('openConsultation'))}
                  className="bg-gradient-to-r from-[#513cb3] to-[#d3f350] hover:from-[#4a35a1] hover:to-[#c5e847] text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
                >
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
                question: "What platforms do you manage?",
                answer: "We currently manage Instagram and Facebook for our clients, but we also create strategies that can be adapted to other platforms if needed"
              },
              {
                question: "How do I choose the right package for my business?",
                answer: "Each package - Basic but Bold, Trending Now, and Viral Vision, is designed to match different levels of social media needs and budgets. If you’re unsure, we’ll be happy to hop on a quick call and recommend the best fit for your goals"
              },
              {
                question: "Do you create content for us or do we need to provide it?",
                answer: "We handle everything end-to-end from content ideas and scripting to designing posts, reels, and stories. Of course, we love to collaborate, so if you have any brand assets or must-haves, we’ll include them too!"
              },
              {
                question: "Can I upgrade or downgrade my package later?",
                answer: "Absolutely! We understand that your social media needs can evolve. You can switch to a different package with just a month’s notice."
              },
              {
                question: "Do you run ads too?",
                answer: "Yes! Our Trending Now and Viral Vision packages include ad targeting and management"
              },
              {
                question: "How do you measure success?",
                answer: "We share regular performance reports so you know exactly what’s working, reach, engagement, follower growth, and more. Transparency and improvement are our top priorities."
              },
             

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
