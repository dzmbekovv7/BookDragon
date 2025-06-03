import React from "react";
import { motion } from "framer-motion";
import { Quote, BookOpenCheck, Users, Rocket, HeartHandshake } from "lucide-react";
import AboutIntro from "../components/AboutIntro";
import QuoteSection from "../components/QuoteSection";
import { Link } from "react-router-dom";
const team = [
  { name: "Alice Johnson", role: "Founder & CEO" },
  { name: "James Park", role: "Creative Director" },
  { name: "Sophia Kim", role: "Editor-in-Chief" },
  { name: "Leo Martins", role: "Community Manager" },
];

const About = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-white  text-gray-800 overflow-hidden">
<AboutIntro/>

      {/* Vision, Mission, Values */}
      <section className="relative py-24  via-white overflow-hidden text-center">
  {/* Плавающие эмоджи или бумаги */}
  {[...Array(8)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute text-blue-200 opacity-30"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: "120vh", opacity: 0.4 }}
      transition={{
        repeat: Infinity,
        duration: 14 + Math.random() * 6,
        delay: Math.random() * 4,
        ease: "linear",
      }}
      style={{
        left: `${Math.random() * 100}%`,
        rotate: `${Math.random() * 30 - 15}deg`,
        fontSize: `${20 + Math.random() * 10}px`,
      }}
    >
      {Math.random() > 0.5 ? "📖" : "🪶"}
    </motion.div>
  ))}

  <div className="max-w-5xl mx-auto px-6 text-center">
    <motion.h2
      className="text-4xl font-bold text-blue-900 mb-16"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      What Drives Us
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[{
        Icon: BookOpenCheck,
        title: "Our Vision",
        desc: "To ignite the joy of reading globally."
      }, {
        Icon: Rocket,
        title: "Our Mission",
        desc: "To connect minds and stories across the world."
      }, {
        Icon: HeartHandshake,
        title: "Our Values",
        desc: "Inclusivity, creativity, and lifelong curiosity."
      }].map(({ Icon, title, desc }, i) => (
        <motion.div
          key={title}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <Icon className="text-blue-600 mb-4 w-8 h-8 mx-auto" />
          <h3 className="font-semibold text-lg text-blue-800 mb-2">{title}</h3>
          <p className="text-blue-700">{desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


<section className="relative py-24 bg-gradient-to-b  via-white  overflow-hidden text-center">
  {/* Floating emojis on background */}
  {[...Array(7)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute text-blue-100 opacity-30"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: "110vh", opacity: 0.5 }}
      transition={{
        repeat: Infinity,
        duration: 12 + Math.random() * 5,
        delay: Math.random() * 3,
        ease: "linear",
      }}
      style={{
        left: `${Math.random() * 100}%`,
        rotate: `${Math.random() * 360}deg`,
        fontSize: `${22 + Math.random() * 10}px`,
      }}
    >
      {["💬", "💡", "✨", "📘", "🧠", "🤝", "👓"][i % 7]}
    </motion.div>
  ))}

  <div className="max-w-6xl mx-auto px-6">
    <motion.h2
      className="text-4xl font-bold text-blue-900 mb-4"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Meet Our Team
    </motion.h2>
    <motion.p
      className="text-blue-700 max-w-2xl mx-auto mb-14"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Creative minds, passionate hearts. Together, we build stories worth sharing.
    </motion.p>

    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
      {team.map((member, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <motion.img
            src={`https://i.pravatar.cc/150?img=${index + 10}`}
            alt={member.name}
            className="w-24 h-24 rounded-full shadow-xl mb-4 transition-transform group-hover:scale-110"
          />
          <h4 className="font-semibold text-lg text-blue-800">{member.name}</h4>
          <p className="text-sm text-blue-600 mt-1 group-hover:opacity-100 transition-opacity duration-300 opacity-80">
            {member.role}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Join Our Community */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20 text-center px-6">
        <Users className="mx-auto mb-4 w-10 h-10 text-white" />
        <h2 className="text-4xl font-bold mb-4">Join Our Vibrant Community</h2>
        <p className="text-lg mb-6">
          Connect with readers, share your thoughts, and discover new favorite books. We grow together!
        </p>
        <Link to="/articles">
        <button className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition">
          Get Started
        </button>
        </Link>
      </section>

      <QuoteSection/>

 <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">Our Journey</h2>
        <ul className="max-w-3xl mx-auto text-left space-y-6 text-lg text-gray-700 border-l-4 border-blue-400 pl-6">
          <li>
            <span className="font-bold text-blue-700">2020</span>: Launched with a mission to connect book lovers.
          </li>
          <li>
            <span className="font-bold text-blue-700">2021</span>: Reached 10,000+ active members.
          </li>
          <li>
            <span className="font-bold text-blue-700">2022</span>: Introduced community reviews & live events.
          </li>
          <li>
            <span className="font-bold text-blue-700">2023+</span>: Continued global growth & accessibility tools.
          </li>
        </ul>
      </section>

    </div>
  );
};

export default About;
