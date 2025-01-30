import { lazy } from 'react'

const routers = [ 
  {
    path: '/',
    component: lazy(() => import('@/pages/UIComponent/Home'))
  },
  {
    path: "/coffeeStyle",
    component: lazy(() => import('@/pages/CoffeeStyle/CoffeeStyle'))
  },
  {
    path: "/eCommerse",
    component: lazy(() => import('@/pages/ECommerse/HomeECommerse/HomeECommerse'))
  }
]

export default routers;