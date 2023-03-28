import Customers from './Pages/Customers';
import Dashboard from './Pages/Home';
import AboutUs from './Pages/About Us';
import ContactUs from './Pages/Contact Us';
import News from './Pages/News';
import FloatingButton from "./Components/home/FloatingButton";


import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/Customers" element={<Customers />} />
          <Route exact path="/About-Us" element={<AboutUs />} />
          <Route exact path="/News" element={<News />} />
          <Route exact path="/Contact-Us" element={<ContactUs />} />
          <Route exact path="*" element={<Dashboard />} />
        </Routes>
        <FloatingButton/>
      
        </BrowserRouter>
    </div>
  );
}


