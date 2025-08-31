"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple validation - in a real app, you'd authenticate with a backend
    if (email && password) {
      router.push("/dashboard")
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f3f0] flex items-center justify-center px-4 relative">
      <div className="absolute top-8 right-8 z-50">
        <Link href="/">
          <Button className="bg-[#bbdce5] hover:bg-[#a8d5d8] text-white px-6 py-2 rounded-full font-medium transition-all duration-200">
            Main Page
          </Button>
        </Link>
      </div>

      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 relative">
          {/* Teddy Bear Icon */}
          <div className="flex justify-center mb-6">
            
          </div>

          {/* Smilu Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%282%29-75jPo6UeWy3HJc1BvNOXe3xsZkNOUZ.png"
              alt="Smilu"
              className="h-12 w-auto"
            />
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-[#a8d5d8] rounded-full text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-[#96c9cc] transition-all duration-200"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 bg-[#a8d5d8] rounded-full text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-[#96c9cc] transition-all duration-200"
                required
              />
            </div>

            {/* Login Button */}
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-[#b8e6b8] hover:bg-[#a8d6a8] text-[#4a5c4a] py-4 rounded-full text-lg font-medium transition-all duration-200"
              >
                Log In
              </Button>
            </div>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-6">
            <button className="text-[#8b6f47] text-sm hover:underline">I forgot my password</button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-[#8b6f47] text-sm">
            © 2025{" "}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%282%29-75jPo6UeWy3HJc1BvNOXe3xsZkNOUZ.png"
              alt="Smilu"
              className="inline h-4 w-auto"
            />{" "}
            • ReFi for childhood • On-chain proof of joy
          </p>
        </div>
      </div>
    </div>
  )
}
