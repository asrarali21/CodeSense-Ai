import React from 'react'

function Footer() {
  return (
    <div>
         <footer id="contact" className="border-t border-zinc-900/80 bg-zinc-950/70">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} CodeSense AI — designed for focus.
        </div>
      </footer>
    </div>
  )
}

export default Footer
