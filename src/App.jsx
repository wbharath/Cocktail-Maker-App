import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  About,
  Landing,
  Error,
  HomeLayout,
  NewsLetter,
  Cocktail,
  SinglePageError
} from './pages'
import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import { action as newsletterAction } from './pages/NewsLetter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
})

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
      errorElement: <Error />,
      children: [
        {
          // path: 'landing', here index-true.. Home Layout is shared(it's not a page)
          index: true,
          element: <Landing />,
          errorElement: <SinglePageError />,
          loader: landingLoader(queryClient)
        },
        {
          path: 'cocktail/:id',
          errorElement: <SinglePageError />,
          loader: singleCocktailLoader(queryClient),
          element: <Cocktail />
        },
        {
          path: 'newsletter',
          element: <NewsLetter />,
          action: newsletterAction
        },
        {
          path: 'about',
          element: <About />
        }
      ]
    }
  ])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
