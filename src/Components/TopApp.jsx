
import { useLoaderData, useNavigate } from 'react-router';
import AppCard from './AppCard';

const TopApp = () => {
    const appsData = useLoaderData();
    const navigate =useNavigate();
    console.log(appsData);
    const topApps = appsData.slice(0,8)

    
    return (
        <div>
            <div className='p-4 space-y-4'>
                <h3 className='text-3xl font-bold text-center'>Treanding Apps</h3>
                <p className='text-sm text-gray-600 text-center'>Explore All Treanding Apps on The Market developed By us</p>
               <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 shadow rounded-2xl border border-white'>
            
            {
             topApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))
          }       
              </div>

              <div className='text-center mt-4'>
                <button onClick={()=> navigate('/apps')} className='btn btn-primary' >Show All </button>
              </div>
            </div>
        </div>
    );
};

export default TopApp;