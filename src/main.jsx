import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import UpdateProfile from './Components/NavBar/Update/UpdateProfile.jsx';
import SignIn from './Components/NavBar/SignIn/SignIn.jsx';
import Register from './Components/NavBar/Register/Register.jsx';
import EstateHouse from './Components/EstateHouse/EstateHouse.jsx';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import PrivateRoute from './Components/PrivateROute/PrivateRoute.jsx';
import Contact from './Components/Contact/Contact.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/bookSelder.json")

      },
      {
        path: '/update',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/register',
        element: <Register></Register>,
      },

      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/real/:id',
        element: <PrivateRoute>
          <EstateHouse></EstateHouse>
        </PrivateRoute>,
        loader: () => fetch("/bookSelder.json")
      },



    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
