import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoffeeStyle from './pages/CoffeeStyle/CoffeeStyle.jsx';
import Home from './pages/UIComponent/Home.jsx';
import HomeEComerse from '@/pages/ECommerse/HomeHomeEComerse/HomeEComerse';

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
    path: "/eCommerse",
    element: <HomeEComerse />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
