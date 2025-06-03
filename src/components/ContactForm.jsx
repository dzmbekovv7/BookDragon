import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Здесь можно отправить данные на сервер через fetch/axios
    console.log(formData);

    // Показываем тост
    toast.success("Success!");

    // Очистка формы
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/80 border border-blue-200 rounded-2xl shadow-xl p-8 space-y-6"
       
      >
        <h3 className="text-2xl font-bold text-blue-700 text-center">📬 Let's Talk</h3>

        {/* Name */}
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full border border-gray-300 p-4 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
            required
          />
          <label className="absolute left-4 top-2 text-sm text-gray-600 mt-[-7px] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
            Your Name
          </label>
        </div>

      
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full border border-gray-300 p-4 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
            required
          />
          <label className="absolute left-4 top-2 text-sm mt-[-7px]  text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
            Your Email
          </label>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder=" "
            className="peer w-full border border-gray-300 p-4 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 resize-none"
            required
          ></textarea>
          <label className="absolute left-4 top-2 text-sm mt-[-7px]  text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
            Your Message
          </label>
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold transition"
        >
          ✉️ Send Message
        </motion.button>
      </motion.form>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default ContactForm;
