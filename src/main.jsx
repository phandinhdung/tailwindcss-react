import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CoffeeStyle from './pages/CoffeeStyle/CoffeeStyle.jsx';
import UserProfile from './components/One/UserProfile.jsx';
import Home from './pages/Home/Home.jsx';


const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/coffeeStyle",
    element: <CoffeeStyle />
  },
  {
    path: "/userProfile",
    element: <UserProfile />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
