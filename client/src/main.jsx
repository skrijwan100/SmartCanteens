import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Createaccount from './pages/Createaccount.jsx';
import EmailContextProvider from './contexts/emailContext.jsx';

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
        path: '/contact',
        element: (
          <Contact />
        )
      },
      {
        path: '/creataccount',
        element: (
          <Createaccount />
        )
      },
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
