import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {

   const [signupInfo , setSignUp] = useState({
    firstname :"",
    lastname :"",
    email :"",
    password :""
   })

   const navigate = useNavigate()
console.log(signupInfo);

    const handleChange = async (e)=>{
      const {name , value} = e.target;
      setSignUp(prev => ({...prev , [name] : value}))
        }

  const handleClick = async(e)=>{
    e.preventDefault()
try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/users/register`, signupInfo)
      console.log(response);
      navigate("/")
} catch (error) {
  console.log(error); 
}
    
  }



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
              <form className="space-y-4" onSubmit={handleClick}>
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs text-zinc-400">First name</label>
                  <input
                    id="firstName"
                    type="text"
                    name='firstname'
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className="h-11 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 text-sm text-zinc-200 placeholder-zinc-500 outline-none ring-0 transition focus:border-zinc-700 focus:ring-2 focus:ring-indigo-500"
                    value={signupInfo.firstname}
                    onChange={handleChange}
                  />
                </div>

                  <div className="space-y-2">
                  <label htmlFor="name" className="text-xs text-zinc-400">Last name</label>
                  <input
                    id="lastName"
                    type="text"
                    name='lastname'
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className="h-11 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 text-sm text-zinc-200 placeholder-zinc-500 outline-none ring-0 transition focus:border-zinc-700 focus:ring-2 focus:ring-indigo-500"
                     value={signupInfo.lastname}
                   onChange={handleChange}
                 />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs text-zinc-400">Email address</label>
                  <input
                    id="email"
                    type="email"
                    name='email'
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 text-sm text-zinc-200 placeholder-zinc-500 outline-none ring-0 transition focus:border-zinc-700 focus:ring-2 focus:ring-indigo-500"
                            value={signupInfo.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-xs text-zinc-400">Password</label>
                  <input
                    id="password"
                    type="password"
                    name='password'
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className="h-11 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 text-sm text-zinc-200 placeholder-zinc-500 outline-none ring-0 transition focus:border-zinc-700 focus:ring-2 focus:ring-indigo-500"
                     value={signupInfo.password}
                   onChange={handleChange}
                 />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Create account
                </button>
              </form>

              {/* Footnote */}
              <p className="mt-6 text-center text-[11px] leading-relaxed text-zinc-500">
                Protected by modern security. No spam.
              </p>
            </div>
          </div>

          {/* Small note */}
          <div className="mt-6 text-center text-[11px] text-zinc-500">Already have an account? <Link to={"/login"} className="text-zinc-300 hover:underline">Sign in</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Register
