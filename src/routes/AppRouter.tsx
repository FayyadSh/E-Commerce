import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// Layout
import Main from '@layouts/Main/Main'


// Pages
import Home from '@pages/Home'
import Categories from '@pages/Categories'
import AboutUs from '@pages/AboutUs'
import Products from '@pages/Products'

 const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[{
      index:true,
      element:<Home />
    },
    {
      path:"categories",
      element:<Categories />
    },
    {
      path:"products:prefix",
      element:<Products />
    },
    {
      path:"aboutus",
      element:<AboutUs />
    }
  ]
  }
])

const AppRouter = () => {
    return <RouterProvider router={router}/>     
}

export default AppRouter;
