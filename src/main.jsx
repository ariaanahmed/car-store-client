import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './components/layout/mainlayout/MainLayout';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import AllToys from './components/pages/AllToys';
import AddAToy from './components/pages/AddAToy';
import MyToys from './components/pages/MyToys';
import Blogs from './components/pages/Blogs';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import AuthProvider from './components/provider/AuthProvider';
import RegularCars from './components/Home/RegularCars';
import Trucks from './components/Home/Trucks';
import SportCars from './components/Home/SportCars';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdateAToy from './components/pages/UpdateAToy';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/alltoys',
        element: <AllToys />,
        loader: () => fetch('https://assignment-11-server-gules.vercel.app/addatoy')
      },
      {
        path: '/addatoy',
        element: <PrivateRoute> <AddAToy /> </PrivateRoute>
      },
      {
        path: '/MyToys',
        element: <MyToys />,
        loader: () => fetch('https://assignment-11-server-gules.vercel.app/addatoy')
      },
      {
        path: '/updateatoy/:id',
        element: <UpdateAToy/>,
        loader: ({params}) => fetch(`https://assignment-11-server-gules.vercel.app/addatoy/${params.id}`) 
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Registration',
        element: <Registration />
      },
      {
        path: '/regularcars/:id',
        element: <PrivateRoute> <RegularCars/> </PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-11-server-gules.vercel.app/tabs/${params.id}`)
      },
      {
        path: '/truck/:id',
        element: <PrivateRoute> <Trucks/> </PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-11-server-gules.vercel.app/tabs/${params.id}`)
      },
      {
        path: '/sportcars/:id',
        element: <PrivateRoute> <SportCars/> </PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-11-server-gules.vercel.app/tabs/${params.id}`)
      },
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-2xl mx-auto overflow-hidden'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
