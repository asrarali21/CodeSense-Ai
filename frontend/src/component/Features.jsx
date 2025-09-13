import React from 'react'
import { Link } from 'react-router-dom'

function Features() {
  return (
   <section id="features" className="mx-auto max-w-7xl px-4 pb-20">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h3 className="text-lg font-medium text-zinc-100">Capabilities</h3>
            <p className="text-xs text-zinc-500">Three focused tools for everyday engineering</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Code Review */}
          <article className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-zinc-700 hover:bg-zinc-900">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-600/20 text-indigo-300 ring-1 ring-inset ring-indigo-600/30">
                  {/* Icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90"><path d="M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-100">Code Review</h4>
                  <p className="text-[11px] text-zinc-500">Quality • Bugs • Security • Performance</p>
                </div>
              </div>
              <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2 py-1 text-[10px] text-zinc-400">Primary</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">Get elegant, actionable feedback across readability, risks, and efficiency—with clarity and restraint.</p>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-2 text-[10px] text-zinc-500">
                <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-1">Static</span>
                <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-1">Secure</span>
                <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-1">Precise</span>
              </div>
              <Link to="/review" className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-indigo-500">Open</Link>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/60" />
          </article>

          {/* Card 2: AI Chat */}
          <article className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-zinc-700 hover:bg-zinc-900">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-600/15 text-emerald-300 ring-1 ring-inset ring-emerald-600/30">
                  {/* Icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90"><path d="M21 15a4 4 0 01-4 4H8l-5 4V7a4 4 0 014-4h10a4 4 0 014 4v8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-100">AI Chat</h4>
                  <p className="text-[11px] text-zinc-500">Reason about code, APIs, and patterns</p>
                </div>
              </div>
              <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2 py-1 text-[10px] text-zinc-400">Soon</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">Conversational help for debugging, design choices, and best practices—always on your side.</p>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-2 text-[10px] text-zinc-500">
                <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-1">Context</span>
                <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-1">Memory</span>
                <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-1">Clarity</span>
              </div>
              <button className="cursor-not-allowed rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400">Preview</button>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/60" />
          </article>

          {/* Card 3: Doc Summarizer */}
          <article className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-zinc-700 hover:bg-zinc-900">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-fuchsia-600/15 text-fuchsia-300 ring-1 ring-inset ring-fuchsia-600/30">
                  {/* Icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90"><path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-100">Doc Summarizer</h4>
                  <p className="text-[11px] text-zinc-500">Distill libraries and APIs in minutes</p>
                </div>
              </div>
              <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2 py-1 text-[10px] text-zinc-400">Soon</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">Turn long docs into concise briefs—key options, pitfalls, and examples at a glance.</p>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-2 text-[10px] text-zinc-500">
                <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-1">Focus</span>
                <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-1">Signals</span>
                <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-1">Speed</span>
              </div>
              <button className="cursor-not-allowed rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400">Preview</button>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/60" />
          </article>
        </div>
      </section>
  )
}

export default Features
