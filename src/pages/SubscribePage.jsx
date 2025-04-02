import React, { useState } from 'react';
import SubscribeForm from '../components/subscriptions/SubscriptionForm';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import Logo from '../images/TechTrendsLogo.png';

const SubscriptionPage = () => {
  const [activeTab, setActiveTab] = useState("email");

  return (
    <section className="py-12 md:py-20 px-4 sm:px-8 lg:px-12">
      <div className="rounded-xl shadow-2xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden bg-gradient-to-r from-purple-900 to-teal-900">
        {/* Abstract geometric shapes for modern feel */}
        <div className="absolute -right-16 -top-16 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute -left-8 -bottom-8 w-32 h-32 sm:w-40 sm:h-40 bg-purple-300/20 rounded-full blur-lg animate-float-reverse"></div>
        <div className="absolute right-1/4 bottom-0 w-20 h-20 sm:w-24 sm:h-24 bg-teal-400/20 rounded-full blur-md animate-float"></div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          {/* Left Column: Heading and Logo */}
          <div className="text-center md:text-left">
            <h1 className="text-blue-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Stay Ahead with <span className="text-teal-400">Tech Trends</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8">
              Discover the latest innovations and insights to keep your business competitive in the digital age.
            </p>
            <div className="flex justify-center md:justify-start">
              <img src={Logo} className="w-48 sm:w-60" alt="TechTrends" />
            </div>
          </div>
          
          {/* Right Column: Interactive Card */}
          <div className="mt-8 md:mt-0">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-teal-500/20 backdrop-blur-sm rounded-xl transform rotate-6 animate-rotate"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/20 shadow-xl">
                {/* Card Header with Tabs */}
                <div className="flex items-center mb-6">
                  <div 
                    className={`cursor-pointer py-2 px-3 rounded-t-lg mr-2 transition-colors ${activeTab === "email" ? "bg-blue-500/30 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
                    onClick={() => setActiveTab("email")}
                  >
                    <i className="fas fa-envelope mr-2"></i>Email
                  </div>
                  <div 
                    className={`cursor-pointer py-2 px-3 rounded-t-lg mr-2 transition-colors ${activeTab === "telegram" ? "bg-blue-500/30 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
                    onClick={() => setActiveTab("telegram")}
                  >
                    <i className="fas fa-paper-plane mr-2"></i>Telegram
                  </div>
                  <div 
                    className={`cursor-pointer py-2 px-3 rounded-t-lg transition-colors ${activeTab === "website" ? "bg-blue-500/30 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
                    onClick={() => setActiveTab("website")}
                  >
                    <i className="fas fa-globe mr-2"></i>Website
                  </div>
                </div>
                
                {/* Tab Content */}
                {activeTab === "email" ? (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <i className="fas fa-inbox text-blue-400 text-lg mr-3"></i>
                      <h3 className="font-medium text-white text-lg">Newsletter Delivery</h3>
                    </div>
                    <p className="text-white/80">Get our curated tech insights delivered straight to your inbox.</p>
                    <SubscribeForm />
                  </div>
                ) : activeTab === "telegram" ? (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <i className="fas fa-robot text-blue-400 text-lg mr-3"></i>
                      <h3 className="font-medium text-white text-lg">Telegram Bot</h3>
                    </div>
                    <p className="text-white/80">Receive instant tech updates via our Telegram bot.</p>
                    <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                      <h4 className="font-medium text-teal-300 mb-2">How to subscribe:</h4>
                      <ol className="list-decimal pl-5 space-y-2 text-white/80">
                        <li>Open Telegram and search for <span className="bg-blue-900/40 text-blue-300 py-1 px-2 rounded">@techtrends</span></li>
                        <li>Start the bot by clicking the "Start" button</li>
                        <li>Type <span className="bg-blue-900/40 text-blue-300 py-1 px-2 rounded">/subscribe</span> to receive daily updates</li>
                        <li>Type <span className="bg-blue-900/40 text-blue-300 py-1 px-2 rounded">/help</span> to see all available commands</li>
                      </ol>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full py-3 mt-2">
                      <i className="fas fa-external-link-alt mr-2"></i>
                      Open Telegram
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <i className="fas fa-bookmark text-teal-400 text-lg mr-3"></i>
                      <h3 className="font-medium text-white text-lg">Website Bookmarks</h3>
                    </div>
                    <p className="text-white/80">Access our full tech library directly from your browser.</p>
                    <div className="flex flex-col space-y-2">
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full py-3">
                        <i className="fas fa-star mr-2"></i>
                        Bookmark Our Website
                      </Button>
                      <Link to="/blog" className="text-center py-2 text-teal-300 hover:text-teal-200 transition-colors">
                        <i className="fas fa-newspaper mr-2"></i>
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