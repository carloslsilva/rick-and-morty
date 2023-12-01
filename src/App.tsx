import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Characters from './routes/characters'
import Episodes from './routes/episodes'
import Locations from './routes/locations'
import Root from './routes/root'
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'characters',
        element: <Characters />
      },
      {
        path: 'locations',
        element: <Locations />
      },
      {
        path: 'episodes',
        element: <Episodes />
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
