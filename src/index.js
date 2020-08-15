import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar'
import Header from './components/Header'
import Description from './components/Description'
import CareerDev from './components/CareerDev'
import NextStep from './components/NextStep'
import Footer from './components/Footer'
import BottomToTop from './components/BotttomToTop'

import './index.css';


function Root() {
  return (
    <>
      <Navbar />
      <Header />
      <Description />
      <CareerDev />
      <NextStep />
      <Footer />
      <BottomToTop />
    </>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
