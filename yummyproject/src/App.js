import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import AOS from 'aos';

import Home from './home';
import About from './about';
import Menu from './menu';
import Testimonial from './testimonial';
import Events from './events';
import Chefs from './chefs';
import Booking from './Booking';
import Gallery from './gallery';
import Contact from './contact';
import PageNotFound from './PageNotFound';
import Layout from './layout';

function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
       <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/menu' element={<Menu />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path='/events' element={<Events/>} />
          <Route path='/chefs' element={<Chefs/>} />
          <Route path='/Booking' element={<Booking/>} />

          <Route 
            path='/gallery' 
            element={<Gallery/>} 
          />
          <Route path='*' element={<PageNotFound/>} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;