import React, { useState } from 'react';
import SubscribeForm from '../components/subscriptions/SubscriptionForm';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import Logo from '../images/TechTrendsLogo.png';

const SubscriptionPage = () => {
  const [activeTab, setActiveTab] = useState("email");

  return (
    <section className="py-8 sm:py-10 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 text-white relative overflow-hidden bg-gradient-to-r from-purple-900 to-teal-900">
        {/* Abstract geometric shapes for modern feel - Responsive sizes */}
        <div className="absolute -right-12 sm:-right-16 -top-12 sm:-top-16 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute -left-6 sm:-left-8 -bottom-6 sm:-bottom-8 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-purple-300/20 rounded-full blur-lg animate-float-reverse"></div>
        <div className="absolute right-1/4 bottom-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-teal-400/20 rounded-full blur-md animate-float"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center relative z-10">
          {/* Left Column: Heading and Logo - Improved text sizing */}
          <div className="text-center md:text-left">
            <h1 className="text-blue-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
              Stay Ahead with <span className="text-teal-400">Tech Trends</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-lg mx-auto md:mx-0">
              Discover the latest innovations and insights to keep your business competitive in the digital age.
            </p>
            <div className="flex justify-center md:justify-start">
              <img src={Logo} className="w-36 sm:w-40 md:w-44 lg:w-48 xl:w-60" alt="TechTrends" />
            </div>
          </div>
          
          {/* Right Column: Interactive Card - Improved responsive design */}
          <div className="mt-6 sm:mt-8 md:mt-0 w-full max-w-md mx-auto md:max-w-none md:mx-0">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-teal-500/20 backdrop-blur-sm rounded-xl transform rotate-6 animate-rotate"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl border border-white/20 shadow-xl">
                {/* Card Header with Tabs - More responsive tab layout */}
                <div className="flex flex-wrap items-center mb-4 sm:mb-6">
                  <div 
                    className={`cursor-pointer py-1 sm:py-2 px-2 sm:px-3 rounded-t-lg mr-1 sm:mr-2 text-xs sm:text-sm md:text-base mb-1 md:mb-0 transition-colors ${activeTab === "email" ? "bg-blue-500/30 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
                    onClick={() => setActiveTab("email")}
                  >
                    <i className="fas fa-envelope mr-1 sm:mr-2"></i>Email
                  </div>
                  <div 
                    className={`cursor-pointer py-1 sm:py-2 px-2 sm:px-3 rounded-t-lg mr-1 sm:mr-2 text-xs sm:text-sm md:text-base mb-1 md:mb-0 transition-colors ${activeTab === "telegram" ? "bg-blue-500/30 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
                    onClick={() => setActiveTab("telegram")}
                  >
                    <i className="fas fa-paper-plane mr-1 sm:mr-2"></i>Telegram
                  </div>
                  <div 
                    className={`cursor-pointer py-1 sm:py-2 px-2 sm:px-3 rounded-t-lg text-xs sm:text-sm md:text-base mb-1 md:mb-0 transition-colors ${activeTab === "website" ? "bg-blue-500/30 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
                    onClick={() => setActiveTab("website")}
                  >
                    <i className="fas fa-globe mr-1 sm:mr-2"></i>Website
                  </div>
                </div>
                
                {/* Tab Content - Improved responsive spacing */}
                {activeTab === "email" ? (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center">
                      <i className="fas fa-inbox text-blue-400 text-base sm:text-lg mr-2 sm:mr-3"></i>
                      <h3 className="font-medium text-white text-base sm:text-lg">Newsletter Delivery</h3>
                    </div>
                    <p className="text-white/80 text-sm sm:text-base">Get our curated tech insights delivered straight to your inbox.</p>
                    <SubscribeForm />
                  </div>
                ) : activeTab === "telegram" ? (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center">
                      <i className="fas fa-robot text-blue-400 text-base sm:text-lg mr-2 sm:mr-3"></i>
                      <h3 className="font-medium text-white text-base sm:text-lg">Telegram Bot</h3>
                    </div>
                    <p className="text-white/80 text-sm sm:text-base">Receive instant tech updates via our Telegram bot.</p>
                    <div className="bg-white/10 p-3 sm:p-4 rounded-lg border border-white/20">
                      <h4 className="font-medium text-teal-300 text-sm sm:text-base mb-1 sm:mb-2">How to subscribe:</h4>
                      <ol className="list-decimal pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-xs sm:text-sm text-white/80">
                        <li>Open Telegram and search for <span className="bg-blue-900/40 text-blue-300 py-0.5 px-1.5 rounded text-xs sm:text-sm">@techtrends</span></li>
                        <li>Start the bot by clicking the "Start" button</li>
                        <li>Type <span className="bg-blue-900/40 text-blue-300 py-0.5 px-1.5 rounded text-xs sm:text-sm">/subscribe</span> to receive daily updates</li>
                        <li>Type <span className="bg-blue-900/40 text-blue-300 py-0.5 px-1.5 rounded text-xs sm:text-sm">/help</span> to see all available commands</li>
                      </ol>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full py-2 sm:py-3 text-sm sm:text-base mt-1 sm:mt-2">
                      <i className="fas fa-external-link-alt mr-1 sm:mr-2"></i>
                      Open Telegram
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center">
                      <i className="fas fa-bookmark text-teal-400 text-base sm:text-lg mr-2 sm:mr-3"></i>
                      <h3 className="font-medium text-white text-base sm:text-lg">Website Bookmarks</h3>
                    </div>
                    <p className="text-white/80 text-sm sm:text-base">Access our full tech library directly from your browser.</p>
                    <div className="flex flex-col space-y-2">
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full py-2 sm:py-3 text-sm sm:text-base">
                        <i className="fas fa-star mr-1 sm:mr-2"></i>
                        Bookmark Our Website
                      </Button>
                      <Link to="/blog" className="text-center py-1.5 sm:py-2 text-teal-300 hover:text-teal-200 transition-colors text-sm sm:text-base">
                        <i className="fas fa-newspaper mr-1 sm:mr-2"></i>
                        Browse Latest Articles
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPage;