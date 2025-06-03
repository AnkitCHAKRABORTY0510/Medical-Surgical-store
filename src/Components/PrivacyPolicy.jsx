import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-white via-emerald-50 to-white text-gray-800 px-4 sm:px-8 md:px-16 lg:px-32 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-10 animate-fadeIn mt-11 ">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 text-center mb-6">
          Privacy Policy
        </h1>

        {/* Section Template */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-emerald-800">
            1. Data Collection and Usage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We collect personal information you provide directly to us, such as when
            you create an account, subscribe, or contact us. This may include your
            name, email, phone number, and other contact details. Your information is
            used solely to improve your experience and provide requested services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-emerald-800">
            2. Cookies and Tracking
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar tracking technologies to analyze user activity,
            remember preferences, and enhance site performance. You may choose to
            disable cookies in your browser settings, but doing so may limit some
            functionality.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-emerald-800">
            3. User Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, update, or delete your personal information.
            To request changes or removal of your data, please contact us at
            <span className="text-emerald-600 font-medium"> support@example.com</span>. We will respond within a reasonable timeframe.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-emerald-800">
            4. Third-party Sharing
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell or share your personal information with third parties except
            as required by law or to fulfill essential services (e.g., payment
            processors). All partners must comply with data protection laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-emerald-800">
            5. Policy Updates
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to update this Privacy Policy at any time. Changes
            will be posted on this page with the revised effective date. Continued use
            of our services after updates indicates your acceptance of the revised
            policy.
          </p>
        </section>

        {/* Footer Note */}
        <p className="text-sm text-center text-gray-500">
          Last updated: June 1, 2025
        </p>

        {/* Back to Home Button */}
        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
