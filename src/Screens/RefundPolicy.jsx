import { useState } from 'react'
import Navbar from '../Components/Navbar'
import RefundPolicy from '../Components/RefundPolicy';
import Footer from '../Components/Footer';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
       <div id='RefundPolicy'><RefundPolicy /></div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
