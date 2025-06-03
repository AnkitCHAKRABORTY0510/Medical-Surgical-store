import React, { useState } from "react";
import Button from "../Layouts/Button";

export const useContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  // JSX for modal, rendered only if open
  const ContactModal = isOpen ? <Contact closeForm={closeForm} /> : null;

  return { ContactModal, openForm, closeForm };
};

const Contact = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-xl mt-10 text-black">
        <form onSubmit={handleSubmit} className="space-y-5">
          <h1 className="text-3xl font-semibold text-center text-backgroundColor">
            Contact Us
          </h1>

          <input
            className="w-full py-3 px-4 bg-[#d5f2ec] rounded-lg outline-none"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            className="w-full py-3 px-4 bg-[#d5f2ec] rounded-lg outline-none"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="w-full py-3 px-4 bg-[#d5f2ec] rounded-lg outline-none"
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            className="w-full py-3 px-4 bg-[#d5f2ec] rounded-lg outline-none h-32 resize-none"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="submit"
              className="w-full sm:w-1/2 py-3 bg-backgroundColor text-white rounded-md font-medium hover:bg-emerald-600 transition-all duration-300"
            >
              Send
            </button>

            <button
              type="button"
              onClick={closeForm}
              className="w-full sm:w-1/2 py-3 bg-red-500 text-white rounded-md font-medium hover:bg-red-600 transition-all duration-300"
            >
              Close
            </button>
          </div>

          {success && (
            <div className="mt-4 bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded text-sm text-center">
              🎉 Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
