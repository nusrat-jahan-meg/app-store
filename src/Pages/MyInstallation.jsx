import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreApps, removeAppStore } from '../Utilites/addToDB';
import { Download, Star, ThumbsUp } from 'lucide-react';
import { toast } from 'react-toastify';
import { ToastBar } from 'react-hot-toast';

const MyInstallation = () => {
    const apps = useLoaderData();
    const[myInstallation ,setMyInstallation] =useState([]);
    console.log(apps)
// outsider 
    useEffect (()=> {
    const storeAppsData =getStoreApps();
    const convertedStoredApps = storeAppsData.map(id=> parseInt(id))
    const filteredApps =apps.filter(app => convertedStoredApps.includes(app.id));

    setMyInstallation(filteredApps);

    },[apps])

const handleUninstall = (id)=> {
removeAppStore(id);
setMyInstallation(prev => prev.filter(app => app.id !== id))
 toast.success("App uninstalled successfully!");
}



    return (
        <div className='p-8 space-y-3'>
            <h4 className='text-3xl font-bold text-center space-y-3'>My Installed Apps </h4>
            <p className='text-sm text-gray-500 text-center '>Explore All Trending Apps on the Market developed by us</p>

        <div>
          <div className='flex justify-between p-3'>
              <h2 className='font-semibold'>{myInstallation.length} Apps Found</h2>
            <button className='btn '>Sort By Size</button>
          </div>
          <div>
            <div className='shadow p-4  '>
            <div>
                 {
                myInstallation.map(app => (
                    <div key={app.id} className='flex justify-between'>
                        <div className='flex  justify-between  space-y-3 '>  
                    <img src={app.image} alt="" className='shadow ' />
                   <div className=' justify-between p-2 space-y-3'>
                         <h2 className='font-bold'>{app.title}</h2>
                   <div className='flex gap-4'>
                        <div className='flex gap-1'>
                         <Download size={20} className='text-green-500'></Download>
                          <span className='text-sm text-green-500' >{app.downloads}M</span>
                      
                       </div>
                       <div className='flex  '>
                         <Star size={20} className=' rounded-full text-amber-500'></Star>
                        <span className='text-sm text-amber-600' >{app.ratingAvg}</span>
                       </div>
                       <div className='flex gap-1'>
                        
                     <span className=' text-sm text-gray-500' >{app.size}MB</span>
                       </div>
                   </div>
                     </div>
                    <div>
                    
                    </div>
                    
                    </div>
                    <button onClick={()=> handleUninstall(app.id)} className='btn bg-green-400 text-white  hover:bg-purple-700 '>Uninstall</button>
                     </div>


                ))
             }
             {
                myInstallation.length === 0 && <p  className='text-center text-gray-500'> No Apps Install  </p>
                
             }
            </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default MyInstallation;







