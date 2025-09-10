import React from 'react'

function Codereview() {
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
                Ready
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
                  <select aria-label="Language" className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Auto</option>
                    <option>JavaScript</option>
                    <option>TypeScript</option>
                    <option>Python</option>
                    <option>Java</option>
                    <option>Go</option>
                    <option>Rust</option>
                    <option>PHP</option>
                    <option>C#</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <div className="relative">
                  <textarea
                    id="code-input"
                    className="h-72 w-full resize-y rounded-lg border border-zinc-800 bg-zinc-950/60 p-4 font-mono text-sm text-zinc-200 placeholder:text-zinc-500 focus:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Paste your code here..."
                  ></textarea>
                  <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-zinc-900/60"></div>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    data-action="review"
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Review Code
                  </button>
                  <button
                    type="button"
                    data-action="clear"
                    className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:bg-zinc-700"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    data-action="paste"
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
                  <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] text-zinc-400">Code quality</span>
                  <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] text-zinc-400">Bug risks</span>
                  <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] text-zinc-400">Performance</span>
                  <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] text-zinc-400">Security</span>
                  <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] text-zinc-400">Best practices</span>
                </div>
              </div>
            </div>
          </section>

          {/* Output Card */}
          <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-sm">
            <div className="p-6">
              <h2 className="text-base font-medium text-zinc-100">AI Review</h2>
              <p className="text-xs text-zinc-500">Actionable feedback will appear here.</p>

              <div id="review-output" className="mt-4 rounded-lg border border-zinc-800 bg-zinc-950/50 p-4">
                {/* Skeleton state */}
                <div className="space-y-3">
                  <div className="h-4 w-3/4 rounded bg-zinc-800"/>
                  <div className="h-4 w-1/2 rounded bg-zinc-800"/>
                  <div className="h-4 w-5/6 rounded bg-zinc-800"/>
                  <div className="my-4 h-px bg-zinc-800"/>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="h-4 w-2/3 rounded bg-zinc-800"/>
                      <div className="h-16 rounded bg-zinc-800"/>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-1/2 rounded bg-zinc-800"/>
                      <div className="h-16 rounded bg-zinc-800"/>
                    </div>
                  </div>
                </div>

                {/* Hidden example content – unhide when wired */}
                <div className="hidden max-w-none">
                  <h3 className="text-sm font-semibold text-zinc-100">Summary</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                    <li>Readable architecture with clear separation of concerns.</li>
                    <li>Consider extracting magic numbers into constants.</li>
                    <li>Add input validation for edge cases.</li>
                  </ul>
                  <h3 className="mt-4 text-sm font-semibold text-zinc-100">Suggestions</h3>
                  <pre className="mt-2 rounded border border-zinc-800 bg-zinc-900 p-3 text-xs text-zinc-200"><code>// Suggestions will render here</code></pre>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                  <div className="text-sm font-medium text-zinc-100">Quality</div>
                  <div className="mt-2 text-xs text-zinc-500">Clean code, readability, structure.</div>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                  <div className="text-sm font-medium text-zinc-100">Security</div>
                  <div className="mt-2 text-xs text-zinc-500">Injection risks, secrets, validation.</div>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                  <div className="text-sm font-medium text-zinc-100">Performance</div>
                  <div className="mt-2 text-xs text-zinc-500">Complexity, caching, hot paths.</div>
                </div>
              </div>
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
