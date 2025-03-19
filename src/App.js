// import React from 'react';
// import TechTrends from './components/TechTrends';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
// import LandingPage from './components/LandingPage';
// import './index.css';

// function App() {
//   return (
//     <div className="App">
//        {/* <Nav />
//        <main>
//        <TechTrends />
//       </main>
//       <Footer /> */}
//       <LandingPage/>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';
import SubscribePage from './pages/SubscribePage';
import ManageSubscriptionPage from './pages/ManageSubscriptionPage';
import NotFound from './pages/NotFound';
import Aboutus from './pages/Aboutus';
function App() {
  return (
    <Router>
      <ToastProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/subscribe" element={<SubscribePage />} />
            <Route path="/manage-subscription" element={<ManageSubscriptionPage />} />
            <Route path='/aboutus' element={<Aboutus/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ToastProvider>
    </Router>
  );
}

export default App;