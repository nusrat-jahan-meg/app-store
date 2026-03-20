import { Download, DownloadCloud, DownloadCloudIcon, Star, ThumbsUp } from 'lucide-react';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppsDetails = () => {
    const apps = useLoaderData();
    const {id} = useParams();
    const appId = parseInt(id);
    console.log(apps, "id",id)

    const singleApps = apps.find(app=>app.id === appId);
    console.log("single",singleApps);
    const {image,title, ratingAvg, downloads, reviews,companyName} = singleApps;

    return (
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
                    <button className='btn btn-primary'>Install Now ({})</button>
                </div>
            </div>
        </div>
    );
};

export default AppsDetails;