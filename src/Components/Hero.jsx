import React from 'react';
import { FaAppStore, FaGoogle, FaGooglePlay } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import heroimg from "../assets/hero1.png"
const Hero = () => {
    return (
        <div>
          <div className="hero bg-base-200 min-h-screen mx-auto text-center items-center p-24">
  <div className="hero-content flex-col lg:flex-row-reverse ">
   <div>
    <h2 className='text-4xl font-bold '>We build <br />
     <span className = "text-purple-600" >Productive </span> Apps</h2>
     <p className='p-3 space-y-2 text-gray-500 text-sm'>At APP STORE , we craft innovative apps designed to make everyday life simpler ,smarter ,and more exciting.
      Our goal is to turn your ideas into digital experiences that truly make an impact.
     </p>
     <div className='p-2 flex justify-center   space-x-3'>
      <a href='https://play.google.com/store' className='btn border border-purple-500 '><IoLogoGooglePlaystore className='text-cyan-600' size={24}></IoLogoGooglePlaystore> Google Play</a>
      <a href='https://www.apple.com/app-store' className='btn border border-purple-500 ' > <FaAppStore size={24} className='bg-blue-500 rounded-full text-white' ></FaAppStore> app Store</a>
     </div>
     <div className='p-3'>
      <img src={heroimg} alt="" className='items-center mx-auto' />
     </div>
   </div>
  </div>
</div>
        </div>




    );
};

export default Hero;