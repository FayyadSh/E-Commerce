import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// Layout
import Main from '@layouts/Main/Main'

// Pages
import Home from '@pages/Home'
import Categories from '@pages/Categories'
import AboutUs from '@pages/AboutUs'
import Products from '@pages/Products'
import Login from '@pages/Login'
import Register from '@pages/Register'
import Error from '@pages/Error'

 const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    errorElement:<Error />,
    children:[
    {
      index:true,
      element:<Home />
    },
    {
      path:"categories",
      element:<Categories />
    },
    {
      path:"products/:prefix",
      element:<Products />,
      loader: ({params}) => {
        if(typeof params.prefix !== 'string' || 
            !/^[a-z]+$/i.test(params.prefix )){
            throw new Response('Bad Request',{
                statusText:'Category not found',
                status:400
            })
        }
        return true
      }
    },
    {
      path:"aboutus",
      element:<AboutUs />
    },
    {
        path:"login",
        element:<Login />
    },
    {
        path:"register",
        element:<Register />
    },
  ]
  }
])

const AppRouter = () => {
    return <RouterProvider router={router}/>     
}

export default AppRouter;
