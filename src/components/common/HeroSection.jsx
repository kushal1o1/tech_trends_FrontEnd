import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("gmail");

  return (
    <section className="mb-12 relative rounded-xl shadow-2xl py-20 px-6 lg:px-0 backdrop-blur-sm bg-gradient-to-r from-purple-600/90 to-teal-500/90 text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-gray-500 opacity-20 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Stay Updated with  
            <span className="text-gray-300"> Tech Insights</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Get the latest trends and news in technology, AI, and innovation delivered to your email or website.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/subscribe">
              <Button className="bg-gray-500 hover:bg-gray-400 px-6 py-3 rounded-lg font-medium shadow-md transition-all">
                Subscribe Now
              </Button>
            </Link>
            <Link to="/manage-subscription">
              <Button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition-all">
                Manage Subscription
              </Button>
            </Link>
          </div>
        </div>

        {/* Right - Glass Morphism Card with Tabs */}
        <div className="hidden md:flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Outer Glowing Glass Effect */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-xl transform rotate-3 shadow-lg"></div>

            {/* Main Card */}
            <div className="relative bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/20 shadow-xl">
              {/* Tabs Navigation */}
              <div className="flex justify-between mb-4 border-b border-white/20">
                <button
                  className={`w-1/2 text-center py-2 text-sm font-medium transition-all ${
                    activeTab === "gmail" ? "text-white-300 border-b-2 border-teal-300" : "text-teal-400"
                  }`}
                  onClick={() => setActiveTab("gmail")}
                >
                  Gmail News
                </button>
                <button
                  className={`w-1/2 text-center py-2 text-sm font-medium transition-all ${
                    activeTab === "web" ? "text-white-300 border-b-2 border-teal-300" : "text-teal-400"
                  }`}
                  onClick={() => setActiveTab("web")}
                >
                  Web News
                </button>
              </div>

              {/* Content for Active Tab */}
              {activeTab === "gmail" ? (
                <div className="space-y-3">
                  <div className="h-5 bg-white/20 rounded w-4/5"></div>
                  <div className="h-5 bg-white/20 rounded w-3/5"></div>
                  <div className="h-5 bg-white/20 rounded w-full"></div>
                  <p className="text-xs text-white-300 mt-3">📩 Delivered straight to your Gmail inbox.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="h-5 bg-white/20 rounded w-5/6"></div>
                  <div className="h-5 bg-white/20 rounded w-4/6"></div>
                  <div className="h-5 bg-white/20 rounded w-full"></div>
                  <p className="text-xs text-white-300 mt-3">🌐 Read news directly on our website.</p>
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <button className="text-sm text-gray-300 hover:underline">Read More →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Effects */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-500/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
