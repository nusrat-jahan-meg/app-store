import {  Download,  Star, ThumbsUp } from 'lucide-react';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';






const AppsDetails = () => {
    const apps = useLoaderData();
    const {id} = useParams();
    const appId = parseInt(id);
    console.log(apps, "id",id)

    const singleApps = apps.find(app=>app.id === appId);
    console.log("single",singleApps);
    const {image,title, ratingAvg, downloads, reviews,companyName,size,description,ratings} = singleApps;


  const chartData = ratings.map(rating=>(
    {
        name : rating.name,
        count: rating.count,
    }
  ) )
console.log(chartData);


const handleInstallation = () => {
alert("add this")
}



    return (
    <div>
            <div className='p-6 gap-8 flex  '>
           
            <div className=' grid lg:grid-cols-2 justify-between gap-6'>
            <div className=' w-full rounded-2xl shadow'>
            <img src={image} alt={title} className=' w-full rounded lg:w-full ' />
            </div>
                
                <div className='space-y-2'> 
                    <h2 className='text-3xl font-bold'>{title}</h2>
                    <p className='text-sm text-gray-600'>Developed By <span className='text-purple-600'>{companyName} </span> </p>
                    <div className='divider max-w-full'>
                    </div>
                    
                    <div className='mt-2.5 gap-10 justify-between flex p-4 space-y-4 '>
                   <div className='space-y-3'>
                  <Download size={30} className='text-green-700'></Download>
                  <p className='text-sm text-gray-500'>Downloads</p>
                  <span className='font-bold text-4xl' >{downloads}M</span>
                   </div>
                   <div  className='space-y-3'>
                
                     <Star size={30} className=' rounded-full text-amber-500'></Star>
                     <p className='text-sm text-gray-500'>Average Ratings</p>
                  <span className='font-bold text-4xl' >{ratingAvg}</span>
                   </div>
                   <div  className='space-y-3'>
                   
                    <ThumbsUp size={30} className='text-purple-600' />
                     <p className='text-sm text-gray-500'>Total Reviews</p>
                  <span className='font-bold text-4xl' >{reviews}K</span>
                   </div>
                   
                    </div>
                    <button onClick={()=>handleInstallation() } className='btn btn-primary'>Install Now ({size})</button>
                </div>
     </div>        
        </div>
        <div className='divider'></div>
         {/* Rechart */}
        <div className='p-6'>
           <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Ratings</h2>

       <ResponsiveContainer width="100%" height={250}>
         <BarChart width={500} layout='vertical' height={300} data={chartData}>
      
          <XAxis  dataKey="count"  />
          <YAxis 
        dataKey="name" 
        type="category" 
        fill='#FACC15'
       
      />
      <Bar
      dataKey="count" fill='#FF8C00' ></Bar>
        </BarChart>
       </ResponsiveContainer>
        </div>
        </div>
       
        <div className='divider'></div>
        <div className='p-4 space-y-8 '>
            <h2 className='text-2xl font-bold'>Description</h2>
           <p className='text-sm text-gray-500 '>{description}</p>
             <p className='text-sm text-gray-500 '>
      A unique feature of this app is the integration of task lists with timers. 
      You can assign each task to a specific Pomodoro session, making your schedule 
      more structured. The built-in analytics show not only how much time you’ve 
      worked but also which tasks consumed the most energy.
    </p>

    <p className='text-sm text-gray-500 '>
      For people who struggle with procrastination, the app provides motivational 
      streaks and achievements. Completing multiple sessions unlocks milestones, 
      making productivity more engaging and rewarding.
    </p>
        </div>
    </div>
    
    );
};

export default AppsDetails;