
import React, { useEffect, useState } from 'react';
import Hero from '../Components/Hero';
import States from '../Components/States';
import TopApp from '../Components/TopApp';


const Home = () => {
    const [loading ,setLoading]= useState(true);
        useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); 
        return () => clearTimeout(timer);
    }, []);
      if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">

                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }
    return (
        <div>
          
            <div>
                <Hero></Hero>
            </div>
            <div>
                <States></States>
            </div>
            <div>
             <TopApp></TopApp>
            </div>
        </div>
    );
};

export default Home;