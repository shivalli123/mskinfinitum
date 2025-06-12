import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AIServices from './pages/AIServices';
import FullStackServices from './pages/FullStackServices';
import HireWithUs from './pages/HireWithUs';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-services" element={<AIServices />} />
            <Route path="/full-stack-services" element={<FullStackServices />} />
            <Route path="/hire-with-us" element={<HireWithUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;