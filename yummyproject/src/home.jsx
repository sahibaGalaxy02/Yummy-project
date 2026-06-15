import React from 'react';
import Hero from './hero';
import About from './about';
import Menu from './menu';
import Events from './events';
import Chefs from './chefs';
import Gallery from './gallery';
import Contact from './contact';
import Testimonial from './testimonial';
import Booking from './Booking';

export default function Home() {
  return (
    <>
     <Hero/>
     <About/>
     <Menu/>
     <Testimonial/>
     <Events/>
     <Chefs/>
     <Booking/>
     <Gallery/>
     <Contact/>
     
    </>
  );
}