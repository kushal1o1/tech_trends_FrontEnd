import React, { useState } from 'react';
import Logo from '../images/TechTrendsLogo.png';
import { motion } from 'framer-motion';
import { useApi } from '../hooks/useApi';
import apiService from '../api/apiService';
import { useEffect } from 'react';
// const sources = [
//   {
//     name: 'RONB (Routine Of Nepal Banda)',
//     img: 'https://scontent.fpkr2-1.fna.fbcdn.net/v/t39.30808-6/348447339_195932153387490_3866907182100963029_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AP3gc0ImjHMQ7kNvgHsySQD&_nc_oc=AdmTWlOV13CvHa0r7XukOa4JhBnMmyWlvgZ8QOuSvwDhN__ywHFka_1OVjUj8ab7e5A&_nc_zt=23&_nc_ht=scontent.fpkr2-1.fna&_nc_gid=TbNaWBin_7G0sPGpHDN4ww&oh=00_AYEoSriaZXrEae8buZo8DdRs8tZbaq6tYxqspqnhJixZmA&oe=67E09027',
//     link: 'https://www.facebook.com/officialroutineofnepalbanda/',
//   },
//   {
//     name: 'TechPana',
//     img: 'https://techpana.prixacdn.net/static/assets/images/footerlogo-crop.png',
//     link: 'https://techpana.com',
//   },
//   {
//     name: 'Other reputable media channels',
//     img: Logo,
//     link: '#',
//   },
// ];

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('sources');
  const { data: sources } = useApi(apiService.getSources);
  const [sourcesData, setSourcesData] = useState(sources || []);
  useEffect(() => {
    if (sources) {
      setSourcesData(sources);
    }
  }, [sources]);
  return (
    <section className="mb-20">
      <div className="relative bg-gradient-to-r from-purple-600/90 to-teal-500/90 rounded-xl shadow-2xl p-12 text-white overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-xl transform rotate-3 shadow-lg"></div>
        
        {/* Background Effects */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-purple-300/20 rounded-full blur-lg"></div>
        <div className="absolute right-1/4 bottom-0 w-24 h-24 bg-teal-400/20 rounded-full blur-md"></div>

        {/* Content Layout */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Tab Bar (Code Editor Style) */}
          <div className="flex space-x-2 mb-4 bg-white/10 backdrop-blur-md p-2 rounded-t-lg border-b border-white/20">
            <button
              className={`px-6 py-2 rounded-t-lg font-semibold transition ${
                activeTab === 'about'
                  ? 'bg-white/20 text-white border-b-2 border-teal-300'
                  : 'text-gray-300 hover:bg-white/5'
              }`}
              onClick={() => setActiveTab('about')}
            >
              About.js
            </button>
            <button
              className={`px-6 py-2 rounded-t-lg font-semibold transition ${
                activeTab === 'sources'
                  ? 'bg-white/20 text-white border-b-2 border-teal-300'
                  : 'text-gray-300 hover:bg-white/5'
              }`}
              onClick={() => setActiveTab('sources')}
            >
              Sources.json
            </button>
          </div>

          {/* Content Box */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-b-lg shadow-lg border border-white/20">
            {/* Header */}
            <div className="text-center mb-6">
              <img src={Logo} alt="TechTrends Logo" className="w-16 h-16 mx-auto mb-4 rounded-full shadow-lg" />
              <h1 className="text-3xl font-bold text-white">About Us</h1>
            </div>

            {/* Tab Content */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              {activeTab === 'about' && (
                <div>
                  <p className="text-gray-200 mb-4">
                    Welcome to <span className="text-teal-300 font-semibold">TechTrends</span>, your go-to platform for staying updated on the latest in technology and beyond. We are dedicated to providing you with a seamless and centralized news experience.
                  </p>
                  <p className="text-gray-200">
                    Our mission is to make it easier for you to stay informed without having to navigate multiple platforms. We strive to bring you the most relevant and timely news, all in one place.
                  </p>
                </div>
              )}

              {activeTab === 'sources' && (
               
                <div className=" p-8 rounded-xl shadow-2xl">
              <p className="text-white text-xl font-semibold mb-8 text-center">Our Trusted Sources</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                {sourcesData.map((source, index) => (
                  <a 
                    key={index} 
                    href={source.source_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group"
                  >
                    <div className="flex flex-col items-center space-y-4 p-4 rounded-lg transition duration-300 transform hover:scale-105">
                      <img 
                        src={source.source_image_link} 
                        alt={source.source_name} 
                        className="w-20 h-20 rounded-full shadow-lg border-4 border-teal-500 group-hover:border-teal-400 transition duration-300" 
                      />
                      <span className="text-white text-lg font-medium group-hover:text-teal-300 transition duration-300">
                        {source.source_name}
                      </span>
                      <div className="text-white text-sm opacity-80 group-hover:opacity-100">
                        {source.source_description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default AboutUs;
