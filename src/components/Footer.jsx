import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#3586ff] min-h-[100px] mt-[100px] p-5 flex flex-col justify-center items-center text-white overflow-visible">
      
      {/* Waves */}
      <div className="absolute top-0 left-0 w-full h-[100px] mt-[-100px] z-[1]">
        <div className="wave absolute w-full h-[100px] bg-[url('https://i.ibb.co/rZt4Nhg/wave.png')] bg-[length:1000px_100px] bottom-0 opacity-100 z-[1000] animate-wave1" />
        <div className="wave absolute w-full h-[100px] bg-[url('https://i.ibb.co/rZt4Nhg/wave.png')] bg-[length:1000px_100px] bottom-[10px] opacity-50 z-[999] animate-wave2" />
        <div className="wave absolute w-full h-[100px] bg-[url('https://i.ibb.co/rZt4Nhg/wave.png')] bg-[length:1000px_100px] bottom-0 opacity-20 z-[1000] animate-wave1 duration-[3000ms]" />
        <div className="wave absolute w-full h-[100px] bg-[url('https://i.ibb.co/rZt4Nhg/wave.png')] bg-[length:1000px_100px] bottom-[20px] opacity-70 z-[999] animate-wave2 duration-[3000ms]" />
      </div>

      {/* Social Icons */}
      <ul className="flex justify-center items-center my-2 gap-4 z-10">
        <li>
          <a href="#" className="text-gray-300 text-2xl hover:text-blue-800 transition-transform transform hover:-translate-y-3">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 text-2xl hover:text-blue-800 transition-transform transform hover:-translate-y-3">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 text-2xl hover:text-blue-800 transition-transform transform hover:-translate-y-3">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 text-2xl hover:text-blue-800 transition-transform transform hover:-translate-y-3">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>

      <ul className="flex justify-center items-center my-2 gap-6 z-10">
  {[
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/articles" },
    { name: "Testimonials", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ].map((item) => (
    <li key={item.name} className="relative group">
      <Link
        to={item.path}
        className="text-white text-lg transition-colors duration-300 group-hover:text-gray-200"
      >
        {item.name}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  ))}
</ul>


      {/* Copyright */}
      <div className="text-center text-sm text-white mt-4 z-10">
        © 2025 <span className="font-bold">BookDragon</span> by Busyok Creative. All rights reserved. | <a href="#" className="underline hover:text-gray-200">Privacy Policy</a>
      </div>

      {/* Ionicons Scripts */}
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </footer>
  );
};

export default Footer;
