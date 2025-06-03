import React from "react";
import { motion } from "framer-motion";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { useContactModal } from "../models/Contact"; // adjust the path


const ContactUs = () => {
  const { ContactModal, openForm } = useContactModal();

  return (
    <div className="bg-gradient-to-br from-white via-emerald-50 to-white text-gray-800 min-h-screen">
      {/* Modal JSX (only renders when triggered) */}
      {ContactModal}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white py-20 px-6 sm:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-4 mt-10 flex items-center justify-center gap-3"
        >
          Contact Us
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl">
          Have questions or need assistance? Reach out to us anytime.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-5xl  mx-auto px-6 sm:px-10 py-12 space-y-12 grid lg:grid-cols-3 gap-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-50 rounded-xl mt-12 shadow-md p-6 hover:shadow-lg transition text-center"
        >
          <MdPhone className="text-3xl mx-auto text-emerald-600 mb-3" />
          <h3 className="font-semibold text-xl text-emerald-700 mb-2">Phone</h3>
          <p className="text-gray-700">+91-xxxxxxxxxx</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition text-center"
        >
          <MdLocationOn className="text-3xl mx-auto text-emerald-600 mb-3" />
          <h3 className="font-semibold text-xl text-emerald-700 mb-2">Address</h3>
          <p className="text-gray-700">B-Block, Noman's land, Nowhere</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition text-center"
        >
          <MdEmail className="text-3xl mx-auto text-emerald-600 mb-3" />
          <h3 className="font-semibold text-xl text-emerald-700 mb-2">Email</h3>
          <p className="text-gray-700">support@fedmedrx.in</p>
        </motion.div>
      </div>

      {/* Contact Form + Map Section */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-10 pb-20">
        {/* Contact Form Trigger */}
        <div className="bg-gray-50 rounded-xl shadow-md p-10 flex flex-col items-center justify-center text-center hover:shadow-lg transition">
          <h2 className="text-3xl font-semibold text-emerald-700 mb-6">
            Have a question?
          </h2>
          <p className="text-gray-700 mb-8 max-w-md">
            Reach out to us anytime by clicking the button below.
          </p>
          <button
            onClick={openForm}
            className="bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-emerald-700 transition duration-300"
          >
            Open Contact Form
          </button>
        </div>

        {/* Google Map + Business Hours */}
        <div className="space-y-8">
          <iframe
            title="Google Map"
            className="w-full h-72 rounded-xl shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7312421216774!2d77.22003017529957!3d28.6103614756751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2c6ad88e77b%3A0x3b75eb1c4f0b9d4c!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1717348432489!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">
              Business Hours
            </h3>
            <ul className="text-gray-700 space-y-1">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
