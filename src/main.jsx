import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { router } from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ToastContainer
     position="top-right" 
      autoClose={3000} 
      hideProgressBar={false} 
      newestOnTop={false} 
      closeOnClick 
      pauseOnHover 
      draggable
      >
   
   </ToastContainer>
   <RouterProvider  fallbackElement={<h1>Loading...</h1>}  router={router} />
  </StrictMode>,
)
