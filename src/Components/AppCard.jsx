import { Download, Star } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';



const AppCard = ({app }) => {
 console.log(app);
const navigate =useNavigate();
 const handleCard = ()=> {
 navigate(`/apps/${app.id}`);
 }
    return (
        <div onClick={()=>handleCard() } className='mx-auto p-6'>
<div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={app.image}
      alt={app.title} />
  </figure>
  <div className="card-body">
  
    <h2 className="card-title font-bold">{app.title}</h2>
         <div className='flex justify-between gap-8'>
            <div  className='flex text-green-500 badge badge-dash badge-info items-center space-x-2 gap-1'><Download className='' size={15}></Download> {app.downloads}M</div>
        <div className="flex items-center text-amber-500 font-bold badge badge-dash badge-warning "> <Star size={15} className=' '></Star> {app.ratingAvg}K</div>
      

      </div>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
        </div>
    );
};


export default AppCard;