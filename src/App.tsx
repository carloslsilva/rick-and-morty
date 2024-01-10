import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { characterLoader, charactersLoader } from './loaders'
import Character from './routes/character'
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
      },
      {
        path: 'characters/:id',
        loader: characterLoader,
        element: <Character />
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
