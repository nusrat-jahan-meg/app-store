import React from 'react';
const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 -mt-31 relative ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
             <p>Total Downloads</p>
            <h3 className="text-4xl font-bold">29.6M</h3>
              <p className='text-sm'>21% More Than Last Month</p>
          </div>

          <div>
             <p>Total Reviews</p>
            <h3 className="text-4xl font-bold">906K</h3>
             <p className='text-sm'>46% More Than Last Month</p>
          </div>

          <div>
               <p>Active Apps</p>
            <h3 className="text-4xl font-bold">132+</h3>
            <p className='text-sm'>31 More More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;