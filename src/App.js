import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./index.css";
import Home from "./Home/Home";
import Navbar from './Navbar/Navbar';
import Contact from './Contact/Contact';
import About from './About/About';
import Hotel from './Hotel/Hotel';
import Footer from './Footer/Footer';
import Login from './Navbar/Popup/Login';
import Signup from './Navbar/Popup/Signup';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/hotel' element={<Hotel />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
