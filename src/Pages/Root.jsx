import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='mx-auto '>
         <div className='z-100 top-0 w-full left-0  sticky '>
               <Navbar></Navbar>
         </div>
            <Outlet></Outlet>
          <div className=''>
              <Footer></Footer>
          </div>
        </div>
    );
};

export default Root;