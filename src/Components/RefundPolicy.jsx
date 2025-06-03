import React from "react";
import { FaUndoAlt, FaClock, FaInfoCircle, FaCheckCircle } from "react-icons/fa";

const RefundPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-white via-emerald-50 to-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white py-20 px-6 sm:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-10 flex items-center justify-center gap-3">
          <FaUndoAlt className="text-white text-4xl" />
          Refund & Return Policy
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl">
          Learn how we handle returns, refunds, and how to get assistance if needed.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 space-y-12">
        {/* Card Wrapper */}
        <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-emerald-700 flex items-center gap-2 mb-4">
            <FaCheckCircle className="text-emerald-500" />
            1. Return Eligibility
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
            <li>Returns must be initiated within 14 days of delivery.</li>
            <li>Items must be unused, unwashed, and in original packaging.</li>
            <li>Proof of purchase or order confirmation is required.</li>
            <li>Certain items like perishable goods or personal care items are non-refundable.</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-emerald-700 flex items-center gap-2 mb-4">
            <FaUndoAlt className="text-emerald-500" />
            2. Refund Process
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
            <li>Submit a return request via our contact form or email.</li>
            <li>Receive confirmation with return shipping instructions.</li>
            <li>Ship the product back to us in its original condition.</li>
            <li>Upon receipt and inspection, we’ll process your refund.</li>
          </ol>
        </div>

        <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-emerald-700 flex items-center gap-2 mb-4">
            <FaClock className="text-emerald-500" />
            3. Processing Timeframes
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Once we receive your return, please allow <strong>5–7 business days</strong> for inspection and refund approval.
            If approved, the refund will be issued to your original payment method within <strong>3–5 business days</strong>.
            Some banks or credit card companies may take longer to reflect the transaction.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-emerald-700 flex items-center gap-2 mb-4">
            <FaInfoCircle className="text-emerald-500" />
            4. Need Help?
          </h2>
          <p className="text-gray-700 mb-3">
            If you have any questions about our return or refund process, feel free to reach out to us:
          </p>
          <ul className="text-gray-700 space-y-1">
            <li><strong>Email:</strong> support@wellnessvista.com</li>
            <li><strong>Phone:</strong> +1 (234) 567-8901</li>
            <li><strong>Address:</strong> WellnessVista, B-Block, Halishahar, Chittagong</li>
          </ul>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-center text-gray-500 pt-6">
          Last updated: June 1, 2025
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
