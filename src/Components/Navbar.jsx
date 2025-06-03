import React, { useState, useEffect } from "react";
import { ScrollOrNavLink } from "./ScrollOrNavLink";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/img/Logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleChange = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["home", "about", "services"];

  return (
    <header className={`fixed w-full z-50 transition-shadow duration-300 ${scrolled ? "shadow-md bg-white" : "bg-backgroundColor"}`}>
      <div className="flex justify-between items-center p-5 md:px-32 px-5">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <ScrollOrNavLink to="home" spy={true} smooth={true} duration={500}>
            <img src={logo} alt="FirstMed Rx Logo" className="h-16 w-auto transition-transform duration-300 hover:scale-105" />
          </ScrollOrNavLink>
          <ScrollOrNavLink to="home" spy={true} smooth={true} duration={500}>
            <span className="text-xl font-bold text-Green-850 hidden md:inline">FirstMed Rx</span>
          </ScrollOrNavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center text-lg gap-8">
          {navLinks.map((link) => (
            <ScrollOrNavLink
              key={link}
              to={link}
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-brightColor"
              className="relative transition-all duration-200 font-bold hover:text-hoverColor cursor-pointer after:content-[''] after:absolute after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:bg-brightColor hover:after:w-full after:transition-all"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </ScrollOrNavLink>
          ))}

          {/* Contact Us as Route */}
          <RouterLink
            to="/ContactUs"
            className="relative transition-all duration-200 font-bold hover:text-hoverColor cursor-pointer after:content-[''] after:absolute after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:bg-brightColor hover:after:w-full after:transition-all"
          >
            Contact Us
          </RouterLink>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {menu ? (
            <AiOutlineClose size={28} onClick={handleChange} />
          ) : (
            <AiOutlineMenu size={28} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* Backdrop */}
      {menu && <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={closeMenu} />}

      {/* Mobile Menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col fixed bg-backgroundColor text-white left-0 top-0 font-semibold text-xl pt-24 pb-8 gap-8 w-3/4 h-full transition-transform duration-300 z-50 shadow-lg`}
      >
        {navLinks.map((link) => (
          <ScrollOrNavLink
            key={link}
            to={link}
            spy={true}
            smooth={true}
            duration={500}
            className="px-6 hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </ScrollOrNavLink>
        ))}

        {/* Contact Us in Mobile Menu */}
        <RouterLink
          to="/ContactUs"
          className="px-6 hover:text-hoverColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Contact Us
        </RouterLink>
      </div>
    </header>
  );
};

export default Navbar;
