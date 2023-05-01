import { createBrowserRouter} from 'react-router-dom'
import App from '../pages/App'
import Sobre from '../pages/Sobre'
import NotFound404 from '../pages/NotFound404'

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound404/>
  },
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/sobre',
    element: <Sobre/>
  }
])

export default router