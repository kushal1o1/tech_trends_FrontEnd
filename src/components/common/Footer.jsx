import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/TechTrendsLogo.png'
import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import apiService from '../../api/apiService';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [categoriesData,setCategoriesData] = useState([]);
  const [sourcesData, setSourcesData] = useState([]);
    const { data: categories } = useApi(apiService.getCategories);
    const { data: sources } = useApi(apiService.getSources);
    useEffect(() => {
        if (sources) {
          setSourcesData(sources);
        }
      }, [sources]);
    useEffect(() => {
        if (categories) {
          setCategoriesData(categories);
        }
      }, [categories]);
  return (
    <>
      {/* Footer */}
      <footer className="border-t border-gray-200 pt-12  container mx-auto px-4 py-8">
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
                {categoriesData.map((category) => (
                  <li key={category.id}>
                    <Link to={`/?category=${category.name}`} className="text-gray-600 hover:text-teal-500">{category.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-purple-800">Resources</h3>
              <div className="mt-4 space-y-2">
                <Link to="/" className="text-gray-600 hover:text-teal-500 block">Home</Link>
                <Link to="/subscribe" className="text-gray-600 hover:text-teal-500 block">Subscribe</Link>
                <Link to="/manage-subscription" className="text-gray-600 hover:text-teal-500 block">Manage Subscription</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-purple-800">Sources</h3>
              <ul className="space-y-2">
                {sourcesData.map((source) => (
                  <li key={source.id}>
                    <Link to={`${source.source_url}`} target='_blank' className="text-gray-600 hover:text-teal-500">{source.source_name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="py-6 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} TechTrends. All rights reserved.</p>
          </div>
        </footer>
    </>
  );
};

export default Footer;