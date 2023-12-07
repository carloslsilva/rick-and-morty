import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { charactersLoader, episodesLoader, locationsLoader } from './loaders'
import Characters from './routes/characters'
import Episodes from './routes/episodes'
import ErrorPage from './routes/error'
import Home from './routes/home'
import Locations from './routes/locations'
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
        loader: charactersLoader,
        element: <Characters />
      },
      {
        path: 'locations',
        loader: locationsLoader,
        element: <Locations />
      },
      {
        path: 'episodes',
        loader: episodesLoader,
        element: <Episodes />
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
