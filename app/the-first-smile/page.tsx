"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function TheFirstSmile() {
  const [showCertificate, setShowCertificate] = useState(false)
  const [showRolesPanel, setShowRolesPanel] = useState(false)

  const toggleRolesPanel = () => {
    setShowRolesPanel(!showRolesPanel)
  }

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
            onClick={toggleRolesPanel}
            className="w-12 h-12 bg-[#bbdce5] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#aaccdd] transition-colors duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" stroke="#8b6f47" strokeWidth="2" fill="none" />
              <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="#8b6f47" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
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
          <div className="flex-1 px-8 py-8 flex">
            <div className={`transition-all duration-300 ${showRolesPanel ? "flex-1 pr-4" : "w-full"}`}>
              <div className="max-w-2xl mx-auto">
                <h1 className="text-[#55361e] text-4xl font-bold mb-2 text-center font-nunito">The first Smile</h1>
                <p className="text-[#55361e] text-lg mb-12 text-center font-nunito">First smile kit</p>

                <div className="space-y-6 mb-8 flex flex-col items-center">
                  {/* Social Certificate Card */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-between w-full max-w-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M7 8h10M7 12h6" stroke="white" strokeWidth="2" />
                          <circle cx="17" cy="16" r="2" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[#2c3e50] text-lg font-semibold mb-1">Social certificate</h3>
                        <p className="text-gray-600 text-sm">On-chain document that certifies your verified impact.</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowCertificate(true)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      View certificate
                    </button>
                  </div>

                  {/* Token Benefits Card */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center space-x-4 w-full max-w-xl">
                    <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2L15 9L22 9L17 14L19 21L12 17L5 21L7 14L2 9L9 9L12 2Z"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path d="M8 17C8 15 10 13 12 13C14 13 16 15 16 17" stroke="white" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        The more Tokens you purchase, the more benefits you will unlock within the community. Your next
                        role is <span className="text-[#8b6f47] font-semibold">Smile Builder</span>, where exclusive
                        rewards await.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Teddy Bear Illustration */}
                <div className="flex justify-center"></div>
              </div>
            </div>

            {showRolesPanel && (
              <div className="w-80 bg-white border-l border-gray-200 p-6 animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[#55361e] text-lg font-semibold">Switch Role</h3>
                  <button
                    onClick={() => setShowRolesPanel(false)}
                    className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-[#bbdce5] rounded-lg border-2 border-[#aaccdd]">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-[#8b6f47] rounded-full flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                      <span className="text-[#55361e] font-semibold">The First Smile</span>
                    </div>
                    <p className="text-[#55361e] text-sm opacity-75">Current Role</p>
                  </div>

                  <Link
                    href="/smile-builder"
                    className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors"
                    onClick={() => setShowRolesPanel(false)}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 2L15 9L22 9L17 14L19 21L12 17L5 21L7 14L2 9L9 9L12 2Z"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Smile Builder</span>
                    </div>
                    <p className="text-gray-600 text-sm">Next role to unlock</p>
                  </Link>

                  <Link
                    href="/ambassador-of-joy"
                    className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors"
                    onClick={() => setShowRolesPanel(false)}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" />
                          <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Ambassador of Joy</span>
                    </div>
                    <p className="text-gray-600 text-sm">Advanced role</p>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <footer className="px-8 py-6 relative">
            <p className="text-[#8b6f47] text-sm text-center">
              © 2025{" "}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%282%29-75jPo6UeWy3HJc1BvNOXe3xsZkNOUZ.png"
                alt="Smilu"
                className="inline h-4 w-auto"
              />{" "}
              • ReFi for childhood • On-chain proof of joy
            </p>
            {/* Big Bear in bottom right */}
          </footer>
        </div>
      </div>

      {/* Certificate Popup */}
      {showCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
            <div className="absolute top-4 left-4 z-10">
              <button
                onClick={() => setShowCertificate(false)}
                className="bg-[#bbdce5] hover:bg-[#aaccdd] text-[#55361e] px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 12H5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Back</span>
              </button>
            </div>
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
