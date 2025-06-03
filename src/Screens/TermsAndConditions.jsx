import { useState } from 'react'
import Navbar from '../Components/Navbar'
import TermsAndConditions from '../Components/TermsAndConditions';
import Footer from '../Components/Footer';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
       <div id='TermsAndConditions'><TermsAndConditions/></div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
