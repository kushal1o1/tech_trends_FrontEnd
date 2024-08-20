import React from 'react';
import TechTrends from './components/TechTrends';
import Nav from './components/Nav';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
       <Nav />
       <main>
       <TechTrends />
      </main>
      <Footer />
    </div>
  );
}

export default App;

