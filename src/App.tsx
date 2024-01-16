import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { characterLoader, charactersLoader, rootLoader } from './lib/loaders'
import Character from './routes/character'
import Characters from './routes/characters'
import ErrorPage from './routes/error'
import Root from './routes/root'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        loader: rootLoader,
        element: <Root />
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
