import { createBrowserRouter } from 'react-router-dom'

import { MinhasFrases } from './pages/home'
import { CadastroFrasesLivros } from './pages/admin'
import { Login } from './pages/login'
import { Cadastro } from './pages/Cadastro'
import { UserProfile } from './pages/userProfile'
import { NotFound } from './pages/notfound'
import { Private } from './routes/Private'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MinhasFrases />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  },
  {
    path: '/admin',
    element: <Private><CadastroFrasesLivros /></Private>
  },
  {
    path: '/admin/social',
    element: <Private><UserProfile /></Private>
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export { router };