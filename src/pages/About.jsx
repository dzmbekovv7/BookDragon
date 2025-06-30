import React from "react";
import { Quote, BookOpenCheck, Users, Rocket, HeartHandshake } from "lucide-react";
import AboutIntro from "../components/AboutIntro";
import QuoteSection from "../components/QuoteSection";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Olivia Reynolds",
    role: "Lifestyle Blogger",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Aiden Brooks",
    role: "Travel Writer",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Chloe Bennett",
    role: "Food Critic",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Liam Martinez",
    role: "Tech Columnist",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const About = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-white text-gray-800 overflow-hidden">
      <AboutIntro />

      {/* Vision, Mission, Values */}
      <section className="relative py-24 via-white overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-16">What Drives Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: BookOpenCheck,
                title: "Our Vision",
                desc: "To ignite the joy of reading globally.",
              },
              {
                Icon: Rocket,
                title: "Our Mission",
                desc: "To connect minds and stories across the world.",
              },
              {
                Icon: HeartHandshake,
                title: "Our Values",
                desc: "Inclusivity, creativity, and lifelong curiosity.",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Icon className="text-blue-600 mb-4 w-8 h-8 mx-auto" />
                <h3 className="font-semibold text-lg text-blue-800 mb-2">{title}</h3>
                <p className="text-blue-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b via-white overflow-hidden text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
          <p className="text-blue-700 max-w-2xl mx-auto mb-14">
            Creative minds, passionate hearts. Together, we build stories worth sharing.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center group">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full shadow-xl mb-4 transition-transform group-hover:scale-110"
                />
                <h4 className="font-semibold text-lg text-blue-800">{member.name}</h4>
                <p className="text-sm text-blue-600 mt-1 group-hover:opacity-100 transition-opacity duration-300 opacity-80">
                  {member.role}
                </p>
              </div>
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

      <QuoteSection />

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