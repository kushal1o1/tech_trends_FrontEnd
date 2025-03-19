import React from 'react';
import { Link } from 'react-router-dom';
import NewsList from '../components/news/NewsList';
import Button from '../components/common/Button';
import Logo from '../images/TechTrendsLogo.png';

const Home = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12">
          <div className="w-48">
            <img src={Logo} alt="TechTrends Logo" className="w-full h-auto" />
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-purple-800 hover:text-teal-500 transition-colors">Home</Link>
            <Link to="/categories" className="font-medium text-gray-600 hover:text-teal-500 transition-colors">Categories</Link>
            <Link to="/trending" className="font-medium text-gray-600 hover:text-teal-500 transition-colors">Trending</Link>
            <Link to="/about" className="font-medium text-gray-600 hover:text-teal-500 transition-colors">About</Link>
          </div>
          <div>
            <Link to="/subscribe">
              <Button className="bg-teal-500 text-white hover:bg-teal-600 px-6 py-2 rounded-lg font-medium shadow-md transition-all">
                Subscribe
              </Button>
            </Link>
          </div>
        </nav>

        {/* Hero Section with Glass Morphism Design */}
        <section className="mb-20">
          <div className="backdrop-blur-sm bg-gradient-to-r from-purple-600/90 to-teal-500/90 rounded-xl shadow-2xl p-12 text-white relative overflow-hidden">
            {/* Abstract geometric shapes for modern feel */}
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-purple-300/20 rounded-full blur-lg"></div>
            <div className="absolute right-1/4 bottom-0 w-24 h-24 bg-teal-400/20 rounded-full blur-md"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Stay Ahead with <span className="text-teal-200">Tech Trends</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 font-light leading-relaxed">
                  Get curated technology news and insights delivered straight to your inbox. Join industry professionals who trust our analysis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/subscribe">
                    <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 transition-all duration-300 px-8 py-3 rounded-lg font-medium shadow-lg">
                      Subscribe Now
                    </Button>
                  </Link>
                  <Link to="/manage-subscription">
                    <Button variant="outline" size="lg" className="backdrop-blur-sm bg-white/5 hover:bg-white/10 border border-white/20 transition-all duration-300 px-8 py-3 rounded-lg font-medium">
                      Manage Subscription
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-500/20 backdrop-blur-sm rounded-xl transform rotate-6"></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-xl">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 rounded-full bg-purple-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-teal-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-white/70"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-6 bg-white/20 rounded w-5/6"></div>
                      <div className="h-6 bg-white/20 rounded w-4/6"></div>
                      <div className="h-6 bg-white/20 rounded w-full"></div>
                      <div className="h-6 bg-white/20 rounded w-5/6"></div>
                      <div className="h-6 bg-white/20 rounded w-3/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold flex items-center text-purple-800">
              <span className="inline-block w-8 h-1 bg-teal-500 mr-3"></span>
              Featured Stories
            </h2>
            <Link to="/all-news" className="text-teal-600 hover:text-teal-800 font-medium">
              View All
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105 border border-gray-100">
                <div className="h-48 bg-gray-100"></div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-teal-500 uppercase tracking-wider">AI & Machine Learning</span>
                  <h3 className="mt-2 text-xl font-semibold leading-tight text-purple-800">Latest Breakthroughs in Artificial Intelligence</h3>
                  <p className="mt-3 text-gray-600">Discover how recent AI advancements are transforming industries worldwide.</p>
                  <div className="mt-4 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-800">Sarah Johnson</p>
                      <p className="text-xs text-gray-500">March 15, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest News Section */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold flex items-center text-purple-800">
              <span className="inline-block w-8 h-1 bg-teal-500 mr-3"></span>
              Latest News
            </h2>
            <div className="flex space-x-2">
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                <span className="sr-only">Previous</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-800" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                <span className="sr-only">Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-800" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-100">
            <NewsList />
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-teal-500 rounded-xl p-12 text-white shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Informed with Our Newsletter</h2>
              <p className="text-lg mb-8 opacity-90">Get weekly updates on the most significant tech developments delivered to your inbox.</p>
              <div className="flex flex-col md:flex-row gap-2 justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300 bg-white text-gray-800 w-full md:w-auto" 
                />
                <Button className="bg-purple-800 hover:bg-purple-700 px-8 py-3 rounded-lg font-medium shadow-lg">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm mt-4 opacity-80">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="w-36 mb-6">
                <img src={Logo} alt="TechTrends Logo" className="w-full h-auto" />
              </div>
              <p className="text-gray-600 mb-6">Your trusted source for the latest technology trends, news, and insights.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-teal-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-purple-800">Categories</h3>
              <ul className="space-y-2">
                <li><Link to="/category/ai" className="text-gray-600 hover:text-teal-500">Artificial Intelligence</Link></li>
                <li><Link to="/category/cloud" className="text-gray-600 hover:text-teal-500">Cloud Computing</Link></li>
                <li><Link to="/category/cybersecurity" className="text-gray-600 hover:text-teal-500">Cybersecurity</Link></li>
                <li><Link to="/category/blockchain" className="text-gray-600 hover:text-teal-500">Blockchain</Link></li>
                <li><Link to="/category/iot" className="text-gray-600 hover:text-teal-500">Internet of Things</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-purple-800">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-teal-500">About Us</Link></li>
                <li><Link to="/team" className="text-gray-600 hover:text-teal-500">Our Team</Link></li>
                <li><Link to="/careers" className="text-gray-600 hover:text-teal-500">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-teal-500">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-purple-800">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-600 hover:text-teal-500">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-teal-500">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-gray-600 hover:text-teal-500">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="py-6 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} TechTrends. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;