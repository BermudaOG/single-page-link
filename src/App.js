import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import About from './About'; 
import Contact from './Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToAbout = () => {
    console.log('Navigating to About');
    setCurrentPage('about');
  };

  const navigateToContact = () => {
    console.log('Navigating to Contact');
    setCurrentPage('contact');
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> 
          <Route path="/" element={<MainContent />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
