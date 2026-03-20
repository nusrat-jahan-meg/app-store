
import React from 'react';
import Hero from '../Components/Hero';
import States from '../Components/States';
import TopApp from '../Components/TopApp';


const Home = () => {
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