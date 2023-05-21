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
        loader: () => fetch('http://localhost:5000/addatoy')
      },
      {
        path: '/addatoy',
        element: <PrivateRoute> <AddAToy /> </PrivateRoute>
      },
      {
        path: '/MyToys',
        element: <MyToys />,
        loader: () => fetch('http://localhost:5000/addatoy')
      },
      {
        path: '/updateatoy/:id',
        element: <UpdateAToy/>,
        loader: ({params}) => fetch(`http://localhost:5000/addatoy/${params.id}`) 
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
        loader: ({params}) => fetch(`http://localhost:5000/tabs/${params.id}`)
      },
      {
        path: '/truck/:id',
        element: <PrivateRoute> <Trucks/> </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/tabs/${params.id}`)
      },
      {
        path: '/sportcars/:id',
        element: <PrivateRoute> <SportCars/> </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/tabs/${params.id}`)
      },
    ]
  },
  {
    path: '*',
    element: <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h3 className='font-bold text-3xl'>404 not found</h3>
    </div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-2xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
