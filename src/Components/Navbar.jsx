import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png';
import { Github } from 'lucide-react';
import { FaGithub, FaGithubAlt } from "react-icons/fa";
const Navbar = () => {
    return (
        <div>
            <div className="navbar  bg-base-100 shadow-sm">
  <div className="navbar-start gap-2">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     
       <Link to={"/"}>Home</Link>
        <Link to={"/apps"}>App</Link>
         <Link to={"/installation"}>Installation</Link>
      </ul>
    </div>
    <div className='items-center'>

         <span className=" text-xl flex items-center gap-1">
         <img src={logo} alt="" srcset="" className='h-6 w-6 ' />  
         <h2 className='text-purple-700 text-sm'>App Store </h2>
           </span>
    </div>
  
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-5 gap-5">
      <Link to={"/"}>Home</Link>
        <Link to={"/apps"}>App</Link>
         <Link to={"/installation"}>Installation</Link>
    </ul>
  </div>
  <div className="navbar-end">
    <a  href='https://github.com/nusrat-jahan-meg' className="btn bg-purple-700 text-white "><FaGithub size={24} className='rounded-full text-white'/> Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;