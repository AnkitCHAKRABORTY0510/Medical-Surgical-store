import { useState } from 'react'
import Navbar from '../Components/Navbar'
import PrivacyPolicy from '../Components/PrivacyPolicy';
import Footer from '../Components/Footer';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
       <div id='Privacy-Policy'><PrivacyPolicy /></div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
