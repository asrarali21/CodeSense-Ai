import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { AuthState } from '../store/auth.state'
import axios from 'axios'


function NavBar() {
   
  const navigate = useNavigate()
   const [auth ,setauth] = useRecoilState(AuthState)


  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/api/v1/users/logout', {}, { withCredentials: true })
      navigate("/login")
    } catch (error) {
      console.error(error)
    } finally {
      setauth({ IsloggedIn: false, user: null })
    }
  }

  return (
    <div>
        <header className="sticky top-0 z-10 border-b border-zinc-900/80 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <div className="flex items-center justify-between">
            {/* Minimal brand: name only (enhanced typography) */}
            <div className="flex items-center select-none">
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-100 hover:from-indigo-300 hover:via-zinc-200 hover:to-emerald-300 transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.03)]">
                Minimal AI
              </h1>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
              <a href="#features" className="hover:text-zinc-200">Features</a>
              <a href="#why" className="hover:text-zinc-200">Why</a>
              <a href="#contact" className="hover:text-zinc-200">Contact</a>
{  auth.IsloggedIn ? (
         <button onClick={handleLogout} className="rounded-lg border cursor-pointer border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-200 hover:bg-zinc-800">Logout</button>
) : (
  <Link to={"/login"} className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-200 hover:bg-zinc-800">LOGIN</Link>
)
}
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default NavBar
