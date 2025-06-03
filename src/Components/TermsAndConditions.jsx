

import React, { useState } from "react";
import Cookies from "js-cookie";
import { FaBalanceScale, FaUserShield, FaGavel, FaShieldAlt, FaCopyright } from "react-icons/fa";

const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);
  const [message, setMessage] = useState("");

  const handleCheckboxChange = (e) => {
    setAccepted(e.target.checked);
    if (!e.target.checked) setMessage("");
  };

  const handleAcceptClick = () => {
    if (accepted) {
      Cookies.set("termsAccepted", "true", { expires: 7 });
      setMessage("Thank you for accepting the Terms and Conditions.");
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white py-20 px-6 sm:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-10 flex items-center justify-center gap-3 mt-10">
          <FaBalanceScale className="text-white text-4xl" />
          Terms & Conditions
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl">
          Please read these terms carefully before using our services.
        </p>
      </div>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 space-y-12">
        {/* Acceptable Usage */}
        <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-emerald-700 flex items-center gap-2 mb-4">
            <FaShieldAlt className="text-emerald-500" />
            1. Acceptable Usage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to use our website and services only for lawful purposes and in a way that does not infringe
            the rights of others, or restrict or inhibit anyone else's use and enjoyment of the site.
            Prohibited behavior includes harassment, sending offensive messages, or uploading harmful content.
          </p>
        </div>

        {/* Account Usage */}
        <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-emerald-700 flex items-center gap-2 mb-4">
            <FaUserShield className="text-emerald-500" />
            2. Account Usage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you create an account on our platform, you are responsible for maintaining the confidentiality of your
            account and password. You agree to accept responsibility for all activities that occur under your account.
            We reserve the right to suspend or terminate accounts that violate our terms.
          </p>
        </div>

        {/* Intellectual Property */}
        <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-emerald-700 flex items-center gap-2 mb-4">
            <FaCopyright className="text-emerald-500" />
            3. Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All content on this site—including text, graphics, logos, images, and software—is the property of WellnessVista
            or its content suppliers and is protected by copyright and intellectual property laws. Unauthorized use or reproduction is prohibited.
          </p>
        </div>

        {/* Dispute & Liability */}
        <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-emerald-700 flex items-center gap-2 mb-4">
            <FaGavel className="text-emerald-500" />
            4. Disputes & Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our site.
            In case of disputes, efforts will be made to resolve them amicably. If not possible, disputes will be settled under applicable laws.
          </p>
        </div>

        {/* Governing Law */}
        <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-emerald-700 flex items-center gap-2 mb-4">
            <FaBalanceScale className="text-emerald-500" />
            5. Governing Law
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
            WellnessVista operates. Any legal proceedings shall be brought exclusively in the competent courts of that jurisdiction.
          </p>
        </div>

        <div className="mt-12 p-6 bg-gray-100 rounded-xl shadow-md max-w-md mx-auto text-center">
          <label className="inline-flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-emerald-600"
              checked={accepted}
              onChange={handleCheckboxChange}
            />
            <span className="text-gray-700 text-lg select-none">
              I accept the Terms and Conditions
            </span>
          </label>
          <button
            onClick={handleAcceptClick}
            disabled={!accepted}
            className={`mt-4 px-6 py-2 rounded font-semibold text-white ${
              accepted ? "bg-emerald-600 hover:bg-emerald-700" : "bg-gray-400 cursor-not-allowed"
            } transition`}
          >
            Accept
          </button>
          {message && <p className="mt-3 text-green-600 font-medium">{message}</p>}
        </div>

        {/* Last Updated */}
        <p className="text-sm text-center text-gray-500 pt-6">
          Last updated: June 1, 2025
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
