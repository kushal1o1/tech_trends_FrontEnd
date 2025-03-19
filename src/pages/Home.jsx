// import React from 'react';
// import { Link } from 'react-router-dom';
// import NewsList from '../components/news/NewsList';
// import Button from '../components/common/Button';
// import Logo from '../images/TechTrendsLogo.png';

// const Home = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Hero Section with Glass Morphism Design */}
//       <section className="mb-16">
//         <div className="backdrop-blur-md bg-gradient-to-r from-blue-600/80 to-purple-600/80 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden">
//           {/* Abstract geometric shapes for modern feel */}
//           <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
//           <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-blue-300/20 rounded-full blur-lg"></div>
          
//           <div className="flex flex-col justify-center">
//             <header className="flex justify-between mb-8">
//               <div className="w-64">
//                 <img src={Logo} alt="TechTrends Logo" className="w-full h-auto" />
//               </div>
//               <div className="max-w-3xl mx-auto text-center relative z-10">
//                 <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//                   Stay Updated with the Latest Tech Trends
//                 </h1>
//                 <p className="text-lg md:text-xl mb-8 opacity-90 font-light">
//                   Get the latest technology news delivered straight to your inbox. Subscribe to our newsletter and never miss an update!
//                 </p>
//                 <div className="flex flex-col sm:flex-row justify-center gap-4">
//                   <Link to="/subscribe">
//                     <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 px-8 py-3 rounded-full font-medium">
//                       Subscribe Now
//                     </Button>
//                   </Link>
//                   <Link to="/manage-subscription">
//                     <Button variant="outline" size="lg" className="backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/50 transition-all duration-300 px-8 py-3 rounded-full font-medium">
//                       Manage Subscription
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </header>
//           </div>
//         </div>
//       </section>

//       {/* Latest News Section */}
//       <section>
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-2xl font-bold flex items-center">
//             <span className="inline-block w-8 h-1 bg-blue-600 mr-3"></span>
//             Latest News
//           </h2>
//         </div>
        
//         <div className="bg-gray-50 p-6 rounded-xl">
//           <NewsList />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import NewsList from '../components/news/NewsList';
import Button from '../components/common/Button';
import Logo from '../images/TechTrendsLogo.png';
import HeroSection from '../components/common/HeroSection';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">

    <HeroSection/>
      



      {/* Latest News Section */}
      <section className="mb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="inline-block w-8 h-1 bg-blue-600 mr-3"></span>
            Latest News
          </h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <span className="sr-only">Previous</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <span className="sr-only">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50  rounded-xl shadow-inner">
          <NewsList />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed with Our Newsletter</h2>
            <p className="text-lg mb-8 opacity-80">Get weekly updates on the most significant tech developments delivered to your inbox.</p>
            <div className="flex flex-col md:flex-row gap-2 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 w-full md:w-auto" 
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium">
                Subscribe
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-60">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;