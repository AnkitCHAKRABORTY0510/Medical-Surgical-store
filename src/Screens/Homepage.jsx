import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import About from '../Components/About';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import CTAButtons from '../Components/CTAButton';
import Testimonial from "../Components/Testimonial";
import NewsletterSignup from '../Components/NewsLetterSignup';

const Homepage = () => {
  const location = useLocation();
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const accepted = Cookies.get("termsAccepted") === "true";
    setTermsAccepted(accepted);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(scrollTo, {
          duration: 500,
          smooth: true,
          offset: -50,
        });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <main>
        <div id='home'><Home /></div>
        <div id='CTA'><CTAButtons /></div>
        <div id='Testimonial'><Testimonial /></div>

        {/* Only show if accepted terms */}
        {/* {termsAccepted && (
          <div id='NewsletterSignup'><NewsletterSignup /></div>)
        } */}

        <div id='NewsletterSignup'><NewsletterSignup /></div>
        <div id='about'><About /></div>
        <div id='services'><Services /></div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
