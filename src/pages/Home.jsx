import React from 'react';
import { Link } from 'react-router-dom';
import NewsList from '../components/news/NewsList';
import Button from '../components/common/Button';

const Home = () => {
  return (
    <div>
      <section className="mb-12">
        <div className="gradient-background rounded-lg shadow-lg p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with the Latest Tech Trends
            </h1>
            <p className="text-lg mb-6 opacity-90">
              Get the latest technology news delivered straight to your inbox. Subscribe to our newsletter and never miss an update!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/subscribe">
                <Button size="lg">
                  Subscribe Now
                </Button>
              </Link>
              <Link to="/manage-subscription">
                <Button variant="outline" size="lg" className="bg-white bg-opacity-20 hover:bg-opacity-30 border-white">
                  Manage Subscription
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest News</h2>
        </div>
        
        <NewsList />
      </section>
    </div>
  );
};

export default Home;