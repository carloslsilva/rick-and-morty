import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { charactersLoader } from './loaders'
import Characters from './routes/characters'
import ErrorPage from './routes/error'
import Home from './routes/home'
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
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
