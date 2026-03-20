import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { router } from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  fallbackElement={<h1>Loading...</h1>}  router={router} />
  </StrictMode>,
)
