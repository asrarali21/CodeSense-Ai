import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div>
         <section className="relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-8 py-20 sm:py-24 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-widest text-zinc-400">AI-augmented engineering</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-5xl">
                Build better code with a <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">minimal AI</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
                Minimal AI delivers precise, elegant insights. A calm, luxurious interface that helps you review, refactor, and reason about code—without the noise.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/review" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Start Code Review
                </Link>
                <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800">
                  Explore Features
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="h-2 w-2 rounded-full bg-red-500/70" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <div className="h-2 w-2 rounded-full bg-emerald-500/70" />
                </div>
                <pre className="mt-4 max-h-72 overflow-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-300"><code>{`// Perfectly balanced feedback
function review(code) {
  return [
    'Quality: clear, cohesive, readable',
    'Security: validate inputs, avoid secrets',
    'Performance: cache hot paths, reduce work'
  ]
}`}</code></pre>
                <div className="mt-4 flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Preview</span>
                  <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1">Minimal • Lux</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
