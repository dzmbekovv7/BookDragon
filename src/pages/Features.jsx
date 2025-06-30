import React from 'react';
import { Book, Globe, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <Book className="w-10 h-10 text-blue-600" />,
    title: 'Vast Collection',
    desc: 'Thousands of books from every genre, carefully curated.',
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-600" />,
    title: 'Global Access',
    desc: 'Read and discover books no matter where you are in the world.',
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-blue-600" />,
    title: 'Community Driven',
    desc: 'Join a vibrant community of readers and share your thoughts.',
  },
];

const Features = () => (
  <section className="py-20 bg-white px-6 max-w-6xl mx-auto">
    <h3 className="text-3xl font-bold text-center text-blue-800 mb-12">Why Choose BookDragon?</h3>
    <div className="grid gap-12 md:grid-cols-3 text-center">
      {features.map(({ icon, title, desc }, idx) => (
        <div
          key={idx}
          className="p-6 border rounded-lg shadow hover:shadow-lg transition cursor-default"
        >
          <div className="mb-4 mx-auto">{icon}</div>
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <p className="text-gray-600">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;