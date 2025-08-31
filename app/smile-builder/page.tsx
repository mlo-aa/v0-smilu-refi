"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function SmileBuilder() {
  const [showCertificate, setShowCertificate] = useState(false)
  const [showRoles, setShowRoles] = useState(false)

  return (
    <div className="min-h-screen bg-[#f5f3f0] flex">
      <div className={`${showCertificate ? "blur-sm" : ""} transition-all duration-300 w-full flex`}>
        {/* Left Sidebar */}
        <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-8 space-y-8">
          {/* Smilu Bear Logo */}
          <Link href="/landpage">
            <div className="flex items-center justify-center w-96 h-20 cursor-pointer hover:opacity-80 transition-opacity duration-200">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L9rqHm3Dsze2AKVWANgkXi9doNhfBl.png"
                alt="Smilu Bear Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Dashboard Button */}
          <Link href="/dashboard">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-[#bbdce5] transition-colors duration-200 cursor-pointer">
              <img src="/gift-box-icon-new.png" alt="Dashboard" className="w-[100px] h-[100px] object-contain" />
            </div>
          </Link>

          {/* Art Shelf Button */}
          <Link href="/art-shelf">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-[#bbdce5] transition-colors duration-200 cursor-pointer">
              <img src="/paint-palette-icon-new.png" alt="Art Shelf" className="w-[100px] h-[100px] object-contain" />
            </div>
          </Link>

          {/* Leaderboard Button */}
          <Link href="/leaderboard">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-[#bbdce5] transition-colors duration-200 cursor-pointer">
              <img
                src="/leaderboard-star-icon-new.png"
                alt="Leaderboard"
                className="w-[100px] h-[100px] object-contain"
              />
            </div>
          </Link>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* User/Settings Icon - Active */}
          <div
            onClick={() => setShowRoles(!showRoles)}
            className="w-12 h-12 bg-[#bbdce5] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#aaccdd] transition-colors duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" stroke="#8b6f47" strokeWidth="2" fill="none" />
              <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="#8b6f47" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex-1 flex flex-col transition-all duration-300 ${showRoles ? "mr-80" : ""}`}>
          {/* Header */}
          <header className="flex items-center justify-between px-8 py-6">
            <Link href="/" className="block">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%282%29-75jPo6UeWy3HJc1BvNOXe3xsZkNOUZ.png"
                alt="Smilu"
                className="h-16 w-auto"
              />
            </Link>
            <Link href="/login">
              <Button className="bg-[#b8e6b8] hover:bg-[#a8d6a8] text-[#4a5c4a] px-6 py-2 rounded-full text-sm font-medium">
                Log-In
              </Button>
            </Link>
          </header>

          {/* Main Content Area */}
          <div className="flex-1 px-8 py-6">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-[#55361e] text-4xl mb-4 text-center font-nunito">Smile Builder</h1>
              <p className="text-[#55361e] text-lg mb-8 text-center font-nunito">Smile Builder kit</p>

              {/* Kit Cards */}
              <div className="space-y-6 flex flex-col items-center">
                {/* Social Certificate Card */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 flex items-center justify-between w-full max-w-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M7 8h10M7 12h6" stroke="white" strokeWidth="2" />
                        <circle cx="17" cy="16" r="2" stroke="white" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#2c3e50] text-lg font-semibold">Social certificate</h3>
                      <p className="text-gray-600 text-sm">On-chain document that certifies your verified impact.</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setShowCertificate(true)}
                    className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm"
                  >
                    View certificate
                  </Button>
                </div>

                {/* Exclusive Community Card */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 flex items-center justify-between w-full max-w-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="white" strokeWidth="2" />
                        <circle cx="16" cy="11" r="3" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#2c3e50] text-lg font-semibold">Exclusive community</h3>
                      <p className="text-gray-600 text-sm">Access to private groups and Ambassador forums.</p>
                    </div>
                  </div>
                  <a
                    href="https://t.me/+1ifPlcA6ZLk0ZDYx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm inline-block text-center no-underline"
                  >
                    Enter
                  </a>
                </div>

                {/* Invitations to Events Card */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 flex items-center justify-between w-full max-w-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeWidth="2" />
                        <path
                          d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#2c3e50] text-lg font-semibold">Invitations to events</h3>
                      <p className="text-gray-600 text-sm">Participate in exclusive ambassador events.</p>
                    </div>
                  </div>
                  <a
                    href="https://luma.com/Smilu?k=c&period=pastx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm inline-block text-center no-underline"
                  >
                    View agenda
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="px-8 py-6">
            <p className="text-[#8b6f47] text-sm text-center">
              © 2025{" "}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%282%29-75jPo6UeWy3HJc1BvNOXe3xsZkNOUZ.png"
                alt="Smilu"
                className="inline h-4 w-auto"
              />{" "}
              • ReFi for childhood • On-chain proof of joy
            </p>
          </footer>
        </div>

        {/* Roles Panel */}
        {showRoles && (
          <div className="fixed right-0 top-0 h-full w-80 bg-white border-l border-gray-200 shadow-lg z-40 transform transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[#55361e]">Select Role</h3>
                <button
                  onClick={() => setShowRoles(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                {/* Current Role - Smile Builder */}
                <div className="bg-[#bbdce5] border-2 border-[#bbdce5] rounded-lg p-4">
                  <h4 className="font-semibold text-[#55361e] mb-2">Smile Builder</h4>
                  <p className="text-sm text-[#55361e] opacity-80">Current role - Build and create smiles</p>
                </div>

                {/* Other Roles */}
                <Link href="/the-first-smile" onClick={() => setShowRoles(false)}>
                  <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-[#bbdce5] transition-colors cursor-pointer">
                    <h4 className="font-semibold text-[#55361e] mb-2">The First Smile</h4>
                    <p className="text-sm text-gray-600">Start your journey with your first smile</p>
                  </div>
                </Link>

                <Link href="/ambassador-of-joy" onClick={() => setShowRoles(false)}>
                  <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-[#bbdce5] transition-colors cursor-pointer h-auto mx-0 my-5">
                    <h4 className="font-semibold text-[#55361e] mb-2">Ambassador of Joy</h4>
                    <p className="text-sm text-gray-600">Spread joy and happiness to others</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {showCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
            >
              ×
            </button>
            <div className="p-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/certificate-of-social-impact-JWEM0D7HwgXktrvMYwWv5YHksvftvC.png"
                alt="Certificate of Social Impact"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
