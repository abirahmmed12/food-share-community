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
import AuthProvider from './Authprovider/Authprovider';
import Singlemanage from './Managefood/Singlemanage';




const router = createBrowserRouter([
  
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=> fetch('http://localhost:5000/addfood')
      },
      {
        path: '/availablefoods',
        element:<AvailableFood></AvailableFood>,
        loader:()=> fetch('http://localhost:5000/addfood')
      },
      {
        path: '/addfood',
        element:<AddFood></AddFood>,
      },
      {
        path: '/featurefood',
        element:<FeatureFood></FeatureFood>,
        loader: ()=> fetch('http://localhost:5000/addfood')
    
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/request',
        element: <Foodrequest></Foodrequest>,
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
        path: '/single-food/:id',
        element: <Singlemanage></Singlemanage>,
        loader: ({params})=> fetch(`http://localhost:5000/managefood/${params.id}`)

       
        
      },
      {
        path: '/fooddetails/:id',
        element: <Detailsfood></Detailsfood>,
        loader: ({params})=> fetch(`http://localhost:5000/addfood/${params.id}`)
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider> <div className='max-w-screen-xl m-auto'>  <RouterProvider router={router} /></div></AuthProvider>
  </React.StrictMode>,
)
