import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import About from './pages/About.jsx';
import Createaccount from './pages/Createaccount.jsx';
import EmailContextProvider from './contexts/emailContext.jsx';
<<<<<<< HEAD
import Addfood from './pages/Addfood.jsx';
=======
import ShowPage from './pages/ShowPage.jsx';
>>>>>>> e0d08a99fb47fd3833fe4da9418c9575a3c84373

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Home />
        )
      },
      {
        path: '/login',
        element: (
          <Login />
        )
      },
      {
        path: '/signup',
        element: (
          <Signup />
        )
      },
      {
        path: '/about',
        element: (
          <About />
        )
      },
      {
        path: '/creataccount',
        element: (
          <Createaccount />
        )
      },
      {
<<<<<<< HEAD
        path: '/addfooditeam',
        element: (
          <Addfood />
        )
      },
=======
        path : "/:id",
        element : (
          <ShowPage/>
        )
      }
>>>>>>> e0d08a99fb47fd3833fe4da9418c9575a3c84373
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmailContextProvider>
      <RouterProvider router={router} />
    </EmailContextProvider>
  </StrictMode>
)
