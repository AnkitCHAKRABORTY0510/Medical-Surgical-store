import { useState } from 'react'
import Navbar from '../Components/Navbar'
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
       <div id='ContactUs'><ContactUs /></div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
