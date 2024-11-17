import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import AboutUs from './About';
import Services from './Services';
import Favorites from './favorites';
import Login from './Login';
import Register from './Register'
import ContactUs from './Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />    
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
