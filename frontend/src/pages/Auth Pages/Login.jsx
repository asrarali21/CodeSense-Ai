import React from 'react'

function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-200 antialiased">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-10 left-[-10%] h-72 w-72 rounded-full bg-emerald-600/10 blur-3xl" />

      <div className="mx-auto grid min-h-screen max-w-7xl place-items-center px-4 py-10">
        <div className="w-full max-w-md">
          {/* Brand */}
          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-xs font-semibold text-zinc-200">MA</div>
            <div>
              <div className="text-sm font-medium tracking-tight text-zinc-100">Minimal AI</div>
              <div className="text-[11px] text-zinc-500">Classic • Minimal • Precise</div>
            </div>
          </div>

          {/* Card */}
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-sm">
            <div className="p-6 sm:p-8">
              {/* Title (kept neutral as requested) */}
              <div className="mb-6">
                <p className="text-sm text-zinc-400">Enter your details to continue</p>
              </div>

              {/* Form */}
              <form className="space-y-4">
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs text-zinc-400">Email address</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 text-sm text-zinc-200 placeholder-zinc-500 outline-none ring-0 transition focus:border-zinc-700 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-xs text-zinc-400">Password</label>
                    <a href="#" className="text-[11px] text-zinc-400 hover:text-zinc-200">Forgot?</a>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="••••••••"
                      className="h-11 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 pr-16 text-sm text-zinc-200 placeholder-zinc-500 outline-none ring-0 transition focus:border-zinc-700 focus:ring-2 focus:ring-indigo-500"
                    />
                    <button type="button" className="absolute inset-y-0 right-1 my-1 rounded-md border border-zinc-800 bg-zinc-900 px-2 text-[11px] text-zinc-400 hover:bg-zinc-800">
                      Show
                    </button>
                  </div>
                </div>

                {/* Options */}
                <div className="flex items-center justify-between pt-1">
                  <label className="inline-flex cursor-pointer items-center gap-2 text-xs text-zinc-400">
                    <input type="checkbox" className="size-4 rounded border-zinc-700 bg-zinc-950 text-indigo-600 focus:ring-indigo-500" />
                    Remember me
                  </label>
                  <span className="text-[11px] text-zinc-500">Secure by design</span>
                </div>

                {/* Submit */}
                <button
                  type="button"
                  className="mt-2 cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Login
                </button>

                {/* Divider */}
              </form>

            </div>
          </div>

          {/* Small note */}
          <div className="mt-6 text-center text-[11px] text-zinc-500">Need an account? <a href="#" className="text-zinc-300 hover:underline">Create one</a></div>
        </div>
      </div>
    </div>
  )
}

export default Login
