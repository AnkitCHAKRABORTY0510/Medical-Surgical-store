import React from "react";
import { ScrollOrNavLink } from "./ScrollOrNavLink";
import { Link as RouterLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-green-900 font-semibold rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">FedMed Rx</h1>
          <p className=" text-sm">
          Delivering high-quality, certified medical and surgical goods to distributors,
          pharmacies, healthcare professionals, and individual customers — with reliability, speed, and care 24x7.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">
            <ScrollOrNavLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </ScrollOrNavLink>
            <ScrollOrNavLink
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </ScrollOrNavLink>
            <RouterLink
              to="/PrivacyPolicy"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Privacy Policy
            </RouterLink>

            <RouterLink
              to="/RefundPolicy"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Refund Policy
            </RouterLink>
            <RouterLink
              to="/TermsAndConditions"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Terms And Conditions
            </RouterLink>
  
          </nav>
        </div>
        {/* <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <ScrollOrNavLink
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Lab Test
            </ScrollOrNavLink>
            <ScrollOrNavLink
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Health Check
            </ScrollOrNavLink>
            <ScrollOrNavLink
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Heart Health
            </ScrollOrNavLink>
          </nav>
        </div> */}
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <ScrollOrNavLink to="/" spy={true} smooth={true} duration={500}>
              B-Block, Noman's land, Nowhere
            </ScrollOrNavLink>
            <ScrollOrNavLink to="/" spy={true} smooth={true} duration={500}>
              support@fedmedrx.in
            </ScrollOrNavLink>
            <ScrollOrNavLink to="/" spy={true} smooth={true} duration={500}>
              +91-xxxxxxxxxx
            </ScrollOrNavLink>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4 text-red-900">
        Copyright © 2025 - All right reserved By FirstMed Rx
          <span className=" text-hoverColor"> </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;