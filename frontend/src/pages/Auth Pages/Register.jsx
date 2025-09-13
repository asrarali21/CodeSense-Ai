import React from 'react'

function Register() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-200 antialiased">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-10 left-[-10%] h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />

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
              {/* Title (neutral) */}
              <div className="mb-6">
                <p className="text-sm text-zinc-400">Create your account to continue</p>
              </div>

              {/* Form */}
              <form className="space-y-4">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs text-zinc-400">Full name</label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className="h-11 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 text-sm text-zinc-200 placeholder-zinc-500 outline-none ring-0 transition focus:border-zinc-700 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

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
                  <label htmlFor="password" className="text-xs text-zinc-400">Password</label>
                  <input
                    id="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className="h-11 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 text-sm text-zinc-200 placeholder-zinc-500 outline-none ring-0 transition focus:border-zinc-700 focus:ring-2 focus:ring-indigo-500"
                  />
                  {/* Visual strength (static) */}
                  <div className="mt-1 h-1 w-full rounded bg-zinc-800">
                    <div className="h-1 w-1/3 rounded bg-indigo-600"></div>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label htmlFor="confirm" className="text-xs text-zinc-400">Confirm password</label>
                  <input
                    id="confirm"
                    type="password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className="h-11 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 text-sm text-zinc-200 placeholder-zinc-500 outline-none ring-0 transition focus:border-zinc-700 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3 pt-1">
                  <input type="checkbox" id="terms" className="mt-0.5 size-4 rounded border-zinc-700 bg-zinc-950 text-indigo-600 focus:ring-indigo-500" />
                  <label htmlFor="terms" className="text-xs text-zinc-400">I agree to the <a href="#" className="text-zinc-300 hover:underline">Terms</a> and <a href="#" className="text-zinc-300 hover:underline">Privacy</a>.</label>
                </div>

                {/* Submit */}
                <button
                  type="button"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Create account
                </button>

                {/* Divider */}
                <div className="relative py-2">
                  <div className="h-px w-full bg-zinc-800" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900/60 px-2 text-[10px] text-zinc-500">or</span>
                </div>

                {/* Providers (visual only) */}
                <div className="grid grid-cols-2 gap-3">
                  <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 transition hover:bg-zinc-800">
                    <span className="h-4 w-4 rounded bg-zinc-800" />
                    GitHub
                  </button>
                  <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 transition hover:bg-zinc-800">
                    <span className="h-4 w-4 rounded bg-zinc-800" />
                    Google
                  </button>
                </div>
              </form>

              {/* Footnote */}
              <p className="mt-6 text-center text-[11px] leading-relaxed text-zinc-500">
                Protected by modern security. No spam.
              </p>
            </div>
          </div>

          {/* Small note */}
          <div className="mt-6 text-center text-[11px] text-zinc-500">Already have an account? <a href="#" className="text-zinc-300 hover:underline">Sign in</a></div>
        </div>
      </div>
    </div>
  )
}

export default Register
