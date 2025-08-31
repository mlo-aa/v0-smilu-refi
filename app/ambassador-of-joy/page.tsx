"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function AmbassadorOfJoy() {
  const [innovativeIdea, setInnovativeIdea] = useState("")
  const [showIdeaSent, setShowIdeaSent] = useState(false)
  const [showCertificate, setShowCertificate] = useState(false)
  const [showRolesPanel, setShowRolesPanel] = useState(false)

  const toggleRolesPanel = () => {
    setShowRolesPanel(!showRolesPanel)
  }

  const handleSendIdea = () => {
    if (innovativeIdea.trim()) {
      setShowIdeaSent(true)
      setInnovativeIdea("")
      setTimeout(() => setShowIdeaSent(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f3f0] flex">
      <div className={`${showIdeaSent || showCertificate ? "blur-sm" : ""} transition-all duration-300 w-full flex`}>
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
          <div className="flex-1 px-8 py-6 flex">
            <div className={`transition-all duration-300 ${showRolesPanel ? "flex-1 pr-4" : "w-full"}`}>
              <div className="max-w-6xl mx-auto">
                <h1 className="text-[#55361e] text-4xl mb-4 text-center font-nunito">Ambassador of joy</h1>
                <p className="text-[#55361e] text-lg mb-8 text-center font-nunito">Your ambassador kit</p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {/* Social Certificate */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M7 8h10M7 12h6" stroke="white" strokeWidth="2" />
                          <circle cx="17" cy="16" r="2" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#2c3e50] text-lg font-semibold mb-2">Social certificate</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          On-chain document that certifies your verified impact.
                        </p>
                        <Button
                          onClick={() => setShowCertificate(true)}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm"
                        >
                          View certificate
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Impact Dashboard */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" />
                          <path d="M8 8h8M8 16h5" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#2c3e50] text-lg font-semibold mb-2">Impact dashboard</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Children reached, places, smiles created, and your contributions.
                        </p>
                        <a
                          href="https://airtable.com/appws2MkLtMp2y13I/shrH4y8vWr5Vok1Fi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm inline-block text-center no-underline"
                        >
                          View dashboard
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Exclusive Community */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="white" strokeWidth="2" />
                          <circle cx="16" cy="11" r="3" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#2c3e50] text-lg font-semibold mb-2">Exclusive community</h3>
                        <p className="text-gray-600 text-sm mb-4">Access to private groups and Ambassador forums.</p>
                        <a
                          href="https://t.me/+1ifPlcA6ZLk0ZDYx"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm inline-block text-center no-underline"
                        >
                          Enter
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Innovative Smilu */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" fill="none" />
                          <path
                            d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#2c3e50] text-lg font-semibold mb-2">Innovative Smilu</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          You can propose ideas and decide in which communities the next toys will be delivered.
                        </p>
                        <textarea
                          value={innovativeIdea}
                          onChange={(e) => setInnovativeIdea(e.target.value)}
                          placeholder="Write your innovative ideas here..."
                          className="w-full h-24 p-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#bbdce5] focus:border-transparent mb-3"
                        />
                        <Button
                          onClick={handleSendIdea}
                          disabled={!innovativeIdea.trim()}
                          className="bg-[#b8e6b8] hover:bg-[#a8d6a8] text-[#4a5c4a] px-4 py-2 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Send
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Invitations to Events */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#2c3e50] text-lg font-semibold mb-2">Invitations to events</h3>
                        <p className="text-gray-600 text-sm mb-4">Participate in exclusive ambassador events.</p>
                        <a
                          href="https://luma.com/Smilu?k=c&period=pastx"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm inline-block text-center no-underline"
                        >
                          View agenda
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Smilu Conventions */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#2c3e50] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                          />
                          <polyline points="7.5,4.21 12,6.81 16.5,4.21" stroke="white" strokeWidth="2" />
                          <polyline points="7.5,19.79 7.5,14.6 3,12" stroke="white" strokeWidth="2" />
                          <polyline points="21,12 16.5,14.6 16.5,19.79" stroke="white" strokeWidth="2" />
                          <polyline points="12,22.81 12,17" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#2c3e50] text-lg font-semibold mb-2">Smilu Conventions</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          VIP access to forums and conferences on social innovation and blockchain.
                        </p>
                        <a
                          href="https://luma.com/Smilu?k=c&period=past"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm inline-block text-center no-underline"
                        >
                          View conventions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Roles Panel */}
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
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" />
                          <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                      <span className="text-[#55361e] font-semibold">Ambassador of Joy</span>
                    </div>
                    <p className="text-[#55361e] text-sm opacity-75">Current Role</p>
                  </div>

                  <Link
                    href="/the-first-smile"
                    className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors"
                    onClick={() => setShowRolesPanel(false)}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">The First Smile</span>
                    </div>
                    <p className="text-gray-600 text-sm">Starting role</p>
                  </Link>

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
                    <p className="text-gray-600 text-sm">Intermediate role</p>
                  </Link>
                </div>
              </div>
            )}
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
      </div>

      {/* Idea Sent Popup */}
      {showIdeaSent && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 max-w-sm mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b8e6b8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#4a5c4a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[#8b6f47] text-xl font-semibold">Idea Sent</h3>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Popup */}
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
