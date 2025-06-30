import React from 'react';
import { BookOpen } from 'lucide-react';

const BookCard = ({ title, author, image }) => {
  return (
    <div className="min-w-[180px] sm:min-w-[240px] bg-white rounded-xl shadow-xl border border-blue-100 overflow-hidden group hover:shadow-2xl hover:scale-105 transition-all duration-300 relative">
      {/* <div className="absolute top-2 left-2 text-blue-300 group-hover:text-blue-600 transition-all duration-300 z-10">
        <BookOpen size={24} />
      </div> */}

      <div className="h-80 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-900">{title}</h3>
        <p className="text-sm text-blue-600 italic">by {author}</p>
      </div>
    </div>
  );
};

export default BookCard;