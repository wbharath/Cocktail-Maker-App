import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {About, Landing, Error, HomeLayout, NewsLetter, Cocktail, SinglePageError} from './pages'
import {loader as landingLoader} from './pages/Landing'
function App() {
  const router = createBrowserRouter([
    // Basic

    // {
    //   path: '/',
    //   element: <h2>Home Page</h2>
    // },
    // {
    //   path: '/about',
    //   element: (
    //     <div>
    //       <h2>About Page</h2>
    //     </div>
    //   )
    // }

    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error/>,
      children: [
        {
          // path: 'landing', here index-true.. Home Layout is shared(it's not a page)
          index: true,
          element: <Landing/>,
          errorElement: <SinglePageError/>,
          loader: landingLoader,
        },
        {
          path: 'cocktail/:id',
          element: <Cocktail/>
        },
        {
          path: 'newsletter',
          element: <NewsLetter/>
        },
        {
          path: 'about',
          element: <About />
        },
      
      ]
    }
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default App
