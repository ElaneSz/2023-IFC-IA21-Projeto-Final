import { BiLogOut } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'

import { auth } from '../../services/firebaseConnection'
import { signOut } from 'firebase/auth'

export function Header() {
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut(auth);
    navigate("/login", { replace: true });
  }

  return (
    <header className="w-full max-w-10xl mt-4 px-1">
      <nav className="w-full bg-white h-12 flex items-center justify-between rounded-md px-3">
        <div className="flex gap-4 font-medium">
          <Link to="/">
            Home
          </Link>
          <Link to="/admin">
            Frases
          </Link>
          <Link to="/admin/social">
            Meu Perfil
          </Link>
        </div>

        <button onClick={handleLogout}>
          <BiLogOut size={28} color="#851d86" />
        </button>
      </nav>
    </header>
  )
}