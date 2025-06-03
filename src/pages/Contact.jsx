import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { BookOpen, Heart, Sparkles, Quote, Library, Umbrella } from 'lucide-react';

const Contact = () => {
  return (
    <div className="font-sans bg-white">
      {/* Hero with angled bottom */}
      <section className="relative bg-gradient-to-br from-blue-200 via-blue-100 to-white text-blue-900 py-24 px-6 overflow-hidden">
        {/* Diagonal bottom edge */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{ clipPath: "polygon(0 0, 100% 100%, 0% 100%)" }} />
      {/* Декоративные иконки */}
        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Quote className="w-12 h-12 mx-auto text-blue-500 mb-4" />
          <h1 className="text-5xl font-bold mb-6">Let’s Get in Touch</h1>
          <p className="text-lg text-blue-800 max-w-xl mx-auto">
            Have a suggestion, need help, or just want to share something? We’re here to listen.
          </p>
        </motion.div>
      </section>

      {/* What's On Your Mind Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
       
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-6">🧠 What’s on your mind?</h2>
            <ul className="space-y-4 text-blue-700 text-lg">
              <li>💡 Got an idea? We’d love to hear it.</li>
              <li>📚 Looking for book recommendations?</li>
              <li>🎙️ Want to collaborate or partner up?</li>
              <li>📬 Just want to say hello? Please do.</li>
            </ul>
          </motion.div>

          <motion.div
        
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
      <Quote className="absolute top-10 left-10 text-blue-100 opacity-30 w-16 h-16 rotate-12" />
      <Heart className="absolute bottom-10 left-20 text-pink-200 opacity-30 w-14 h-14 animate-pulse" />
      <BookOpen className="absolute top-20 right-20 text-yellow-300 opacity-20 w-16 h-16" />
      <Sparkles className="absolute bottom-16 right-10 text-purple-300 opacity-30 animate-spin-slow w-14 h-14" />
      <Library className="absolute bottom-80 right-40 text-purple-300 opacity-30 animate-spin-slow w-14 h-14" />

      {/* <Sparkles className="absolute bottom-16 right-10 text-purple-300 opacity-30 animate-spin-slow w-14 h-14" /> */}

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-tl from-blue-100 via-white to-blue-50 text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-800 mb-12"

        >
          📞 Contact Details
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-blue-700 text-lg">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl shadow p-6 w-72">
            <div className="font-semibold">📧 Email</div>
            <div>support@bookdragon.com</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl shadow p-6 w-72">
            <div className="font-semibold">📞 Phone</div>
            <div>+1 (555) 123-4567</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl shadow p-6 w-72">
            <div className="font-semibold">📍 Location</div>
            <div>123 Book Street, Library City</div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
