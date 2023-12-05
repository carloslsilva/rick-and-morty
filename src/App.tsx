import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import Characters, { loader as charactersLoader } from './routes/characters'
import Episodes, { loader as episodesLoader } from './routes/episodes'
import ErrorPage from './routes/error'
import Home from './routes/home'
import Locations, { loader as locationsLoader } from './routes/locations'
import './styles/global.css'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'characters',
        element: <Characters />,
        errorElement: <div>Something went wrong</div>,
        loader: charactersLoader
      },
      {
        path: 'locations',
        element: <Locations />,
        loader: locationsLoader
      },
      {
        path: 'episodes',
        element: <Episodes />,
        loader: episodesLoader
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
