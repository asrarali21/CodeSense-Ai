import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
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
              <Link to="/review" className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-200 hover:bg-zinc-800">Open App</Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default NavBar
