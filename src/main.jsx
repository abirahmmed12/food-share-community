import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';

import Home from './Pages/Home/Home';
import AvailableFood from './Pages/Availablefood/AvailableFood';
import AddFood from './Pages/Addfood/AddFood';

import Login from './Pages/Login';
import Registration from './Pages/Registration';
import FeatureFood from './Pages/Home/FeatureFood';
import Detailsfood from './Pages/Home/Detailsfood';
import Foodrequest from './Pages/Foodrequest';
import Managefood from './Managefood/Managefood';

import Singlemanage from './Managefood/Singlemanage';
import Dynamicmanage from './Managefood/Dynamicmanage';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRout from './PrivateRout';
import Errorpage from './Errorpage';




const router = createBrowserRouter([
  
  {
    path: '/',
    element: <MainLayout />,
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=> fetch('https://the-food-share-server.vercel.app/addfood')
      },
      {
        path: '/availablefoods',
        element:<AvailableFood></AvailableFood>,
        loader:()=> fetch('https://the-food-share-server.vercel.app/addfood')
      },
      {
        path: '/addfood',
        element:<PrivateRout><AddFood></AddFood></PrivateRout>,
      },
      {
        path: '/featurefood',
        element:<FeatureFood></FeatureFood>,
        loader: ()=> fetch('https://the-food-share-server.vercel.app/addfood')
    
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/request',
        element: <PrivateRout><Foodrequest></Foodrequest></PrivateRout>,
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/managefood',
        element: <Managefood></Managefood>,
       
        
      },
      
      {
        path: '/single',
        element: <PrivateRout><Singlemanage></Singlemanage></PrivateRout>,
        // loader: ({params})=> fetch(`http://localhost:5000/managefood/${params.id}`)

       
        
      },
      {
        path: '/manage/:id',
        element:<PrivateRout><Dynamicmanage></Dynamicmanage></PrivateRout>,
        loader: ({params})=> fetch(`https://the-food-share-server.vercel.app/addfood/${params.id}`)

       
        
      },
      {
        path: '/fooddetails/:id',
        element: <PrivateRout><Detailsfood></Detailsfood></PrivateRout>,
        loader: ({params})=> fetch(`https://the-food-share-server.vercel.app/addfood/${params.id}`)
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider> <div className='max-w-screen-xl m-auto'>  <RouterProvider router={router} /></div></AuthProvider>
  </React.StrictMode>,
)
