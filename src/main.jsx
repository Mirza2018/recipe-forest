import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './component/Home/Home.jsx';
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';
import Main from './component/Main/Main.jsx';
import Recipies from './component/Recipies/Recipies.jsx';
import Authprovider from './provider/Authprovider.jsx';
import Carts from './component/Carts/Carts.jsx';
import PrivetRoute from './component/PrivetRoute/PrivetRoute.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://server-recipie-forest-mirza2018.vercel.app/chefs')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/recipies/:id',
        element: <Recipies></Recipies>,
        loader: ({ params }) => fetch(`https://server-recipie-forest-mirza2018.vercel.app/recipies/${params.id}`),
      },
      {
        path: '/recipies',
        element: <Carts></Carts>,
        loader: () => fetch('https://server-recipie-forest-mirza2018.vercel.app/recipies')
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }

    ]
  },



])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} >
      </RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)
