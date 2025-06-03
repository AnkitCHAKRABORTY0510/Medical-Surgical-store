import React from "react";

const TermsDialog = ({ onAccept, onReject }) => {
  return (
    <div className="bg-white w-[90%] max-w-2xl rounded-xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
      <h2 className="text-2xl font-bold text-emerald-700 text-center mb-4">
        Terms & Conditions
      </h2>

      <div className="text-gray-700 text-sm space-y-4 leading-relaxed">
        <p>
          Welcome to WellnessVista! By using our services, you agree to the following terms:
        </p>

        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Acceptable Use:</strong> You agree to use this site only for lawful purposes and refrain from harming or harassing others.
          </li>
          <li>
            <strong>Account Responsibility:</strong> If applicable, you're responsible for maintaining the confidentiality of your login credentials.
          </li>
          <li>
            <strong>Intellectual Property:</strong> All content belongs to WellnessVista. Unauthorized use is strictly prohibited.
          </li>
          <li>
            <strong>Liability Limitations:</strong> We are not liable for indirect or incidental damages arising from the use of this service.
          </li>
          <li>
            <strong>Dispute Resolution:</strong> All disputes will be governed by the laws of our operating jurisdiction.
          </li>
        </ol>

        <p>
          Please read our full Privacy Policy and Refund Policy for further details. Your access and use signify your acceptance.
        </p>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={onReject}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Reject
        </button>
        <button
          onClick={onAccept}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default TermsDialog;
