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
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-xs font-semibold text-zinc-200">CS</div>
              <div>
                <h1 className="text-lg font-medium tracking-tight text-zinc-100">CodeSense AI</h1>
                <p className="text-xs text-zinc-500">Classic • Minimal • Precise</p>
              </div>
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
