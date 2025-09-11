import React, { useState, useEffect } from 'react'
import axios from "axios"

function Codereview() {
   
  // Input state
  const [codeInput , SetCodeInput] = useState("")
  const [review , setReview] = useState("")
  const [selectedLanguage , setSelectedLanguage] = useState('auto')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(false)

  const handleReviewClick = async () => {
    if (!codeInput.trim()) return;
    setLoading(true)
    setError(null)
    setReview("")
    try {
      const response = await axios.post("http://localhost:8000/api/v1/review" , { code: codeInput, language: selectedLanguage })
      setReview(response?.data?.review || "")
    } catch (err) {
      setError("Failed to fetch review. Ensure backend is running.")
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    SetCodeInput("")
    setReview("")
    setError(null)
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      if (text) SetCodeInput(prev => (prev ? prev + '\n' + text : text))
    } catch (_) {}
  }

  useEffect(() => {
    const kb = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault()
        handleReviewClick()
      }
    }
    window.addEventListener('keydown', kb)
    return () => window.removeEventListener('keydown', kb)
  }, [codeInput, selectedLanguage])

  const handleCopy = async () => {
    if (!review) return
    try {
      await navigator.clipboard.writeText(review)
      setCopied(true)
      setTimeout(()=> setCopied(false), 1800)
    } catch(_){}
  }

  const stats = review ? {
    lines: review.split('\n').length,
    chars: review.length,
    words: review.trim().split(/\s+/).length
  } : null

  const renderReview = () => {
    if (!review) return null
    // Basic formatting: split into sections by double newline
    const blocks = review.split(/\n{2,}/)
    return (
      <article className="prose prose-invert max-w-none prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800 prose-code:text-indigo-300">
        {blocks.map((block, i) => {
          // List detection
          const lines = block.split('\n')
          const allList = lines.every(l => /^([0-9]+\.|[-*])\s+/.test(l.trim()))
          if (allList) {
            return (
              <ul key={i} className="list-disc pl-5 space-y-1">
                {lines.map((l, idx) => <li key={idx} className="leading-snug">{l.replace(/^([0-9]+\.|[-*])\s+/, '')}</li>)}
              </ul>
            )
          }
          // Heading detection
          if (/^(Summary|Overview|Conclusion|Suggestions|Recommendations)[:]?$/i.test(block.trim())) {
            return <h3 key={i} className="mt-6 text-zinc-100 tracking-tight text-sm font-semibold">{block.trim().replace(/:$/, '')}</h3>
          }
          return <p key={i} className="leading-relaxed text-sm text-zinc-300">{block}</p>
        })}
      </article>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-zinc-900/80 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-xs font-semibold text-zinc-200">CS</div>
              <div>
                <h1 className="text-lg font-medium text-zinc-100 tracking-tight">CodeSense AI</h1>
                <p className="text-xs text-zinc-500">Minimal code review assistant</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></span>
                {loading ? 'Reviewing…' : 'Ready'}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Input Card */}
          <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-sm">
            <div className="p-6">
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-base font-medium text-zinc-100">Paste your code</h2>
                  <p className="text-xs text-zinc-500">Quality • Bugs • Performance • Security</p>
                </div>
                <div className="flex items-center gap-2">
                  <select aria-label="Language" value={selectedLanguage} onChange={(e)=>setSelectedLanguage(e.target.value)} className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="auto">Auto</option>
                    <option value="javascript">JavaScript</option>
                    <option value="typescript">TypeScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="go">Go</option>
                    <option value="rust">Rust</option>
                    <option value="php">PHP</option>
                    <option value="csharp">C#</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <div className="relative group">
                  <textarea
                    id="code-input"
                    className="h-72 w-full resize-y rounded-lg border border-zinc-800 bg-zinc-950/60 p-4 font-mono text-sm text-zinc-200 placeholder:text-zinc-500 focus:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Paste your code here..."
                    value={codeInput}
                    onChange={(e)=>SetCodeInput(e.target.value)}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-zinc-900/60 group-focus-within:ring-indigo-600/50"></div>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    disabled={loading || !codeInput.trim()}
                    onClick={handleReviewClick}
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-medium text-white shadow-sm transition enabled:hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {loading && <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/30 border-t-white"/>}
                    {loading ? 'Analyzing...' : 'Review Code'}
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    disabled={loading && !review}
                    className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={handlePaste}
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:bg-zinc-800"
                  >
                    Paste
                  </button>

                  <div className="ml-auto flex items-center gap-2 text-[11px] text-zinc-500">
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5">Cmd ⌘ + Enter</span>
                    to submit
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex flex-wrap gap-2">
                  {['Code quality','Bug risks','Performance','Security','Best practices'].map(tag => (
                    <span key={tag} className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] text-zinc-400">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Output Card */}
          <section className="relative rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-sm">
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-base font-medium text-zinc-100">AI Review</h2>
                  <p className="text-xs text-zinc-500">Actionable feedback will appear here.</p>
                </div>
                <div className="flex items-center gap-2">
                  {stats && (
                    <div className="flex gap-2 text-[10px] text-zinc-500">
                      <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-1">{stats.lines} ln</span>
                      <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-1">{stats.words} wd</span>
                      <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-1">{stats.chars} ch</span>
                    </div>
                  )}
                  <button
                    onClick={handleCopy}
                    disabled={!review}
                    className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-[11px] font-medium text-zinc-300 transition hover:bg-zinc-800 disabled:opacity-30"
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              <div id="review-output" className="mt-4 group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/40 p-5">
                {/* States */}
                {error && (
                  <div className="rounded border border-red-800/40 bg-red-950/40 px-4 py-3 text-xs text-red-300">
                    {error}
                  </div>) }

                {loading && !error && (
                  <div className="space-y-4 animate-pulse">
                    {[...Array(6)].map((_,i)=>(<div key={i} className="h-4 rounded bg-zinc-800/70"/>))}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="h-16 rounded bg-zinc-800/70"/>
                      <div className="h-16 rounded bg-zinc-800/70"/>
                    </div>
                  </div>
                )}

                {!loading && !error && !review && (
                  <div className="flex flex-col items-center justify-center gap-2 py-10 text-center text-zinc-500">
                    <div className="h-10 w-10 rounded-full border border-zinc-800 grid place-items-center text-xs">AI</div>
                    <p className="text-xs">Run a review to see structured feedback.</p>
                  </div>
                )}

                {!loading && !error && review && (
                  <div className="space-y-6 text-sm leading-relaxed">
                    {renderReview()}
                  </div>
                )}

                {review && (
                  <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-zinc-900/60"></div>
                )}
              </div>

              {review && (
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[{
                    title:'Quality', desc:'Readability, structure, cohesion.'},{title:'Security',desc:'Validation, exposure, risks.'},{title:'Performance',desc:'Complexity, hotspots.'}].map(card => (
                      <div key={card.title} className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                        <div className="text-sm font-medium text-zinc-100">{card.title}</div>
                        <div className="mt-2 text-[11px] text-zinc-500">{card.desc}</div>
                      </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Footer Tip */}
        <section className="mx-auto mt-10 max-w-7xl">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-zinc-500">Tip: Press <span className="rounded border border-zinc-800 bg-zinc-900 px-1 py-0.5 text-zinc-300">Cmd ⌘ + Enter</span> to submit for review.</p>
              <div className="text-[11px] text-zinc-500">Minimal • Focused • Fast</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Codereview
