import React, { useState, useEffect } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setShowAlert(true);
      setEmail("");
    }
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className="bg-emerald-100 py-12 px-4 sm:px-8 lg:px-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">
          🔔 Stay Updated with Our Latest Offers & Products
        </h2>
        <p className="text-emerald-700 mb-6">
          Subscribe to our newsletter to receive exclusive deals and the latest news.
        </p>

        {/* Hover wrapper */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-[300px] px-4 py-3 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Subscribe
          </button>
        </form>

        {showAlert && (
          <div className="mt-6 bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded relative w-full sm:w-[400px] mx-auto text-left shadow-md">
            <strong className="font-bold">🎉 Success!</strong>
            <span className="block sm:inline ml-1">You've subscribed to our newsletter.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
