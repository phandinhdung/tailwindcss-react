import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoffeeStyle from './pages/CoffeeStyle/CoffeeStyle.jsx';
import Home from './pages/Home/Home.jsx';
import MainLayout from './components/Layout/Layout.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Button from './components/Button/Button.jsx';


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
    element:
      <MainLayout>
        <Header />
      </MainLayout>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
