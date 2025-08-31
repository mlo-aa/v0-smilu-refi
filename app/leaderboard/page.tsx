"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Leaderboard() {
  const pathname = usePathname()
  const [showRolesPopup, setShowRolesPopup] = useState(false)

  const toggleRolesPopup = () => {
    setShowRolesPopup(!showRolesPopup)
  }

  const closeRolesPopup = () => {
    setShowRolesPopup(false)
  }

  const leaderboardData = [
    { rank: 1, name: "Dennise Alvarado", tokens: 37, crown: "👑", accessory: "🌹" },
    { rank: 2, name: "Tamara Ortega", tokens: 26, crown: "", accessory: "❤️" },
    { rank: 3, name: "Angie Alpizar", tokens: 24, crown: "", accessory: "" },
    { rank: 4, name: "Emilio Alfaro", tokens: 23, crown: "", accessory: "" },
    { rank: 5, name: "Alfredo Fuentes", tokens: 20, crown: "", accessory: "" },
    { rank: 6, name: "Thomas Torres", tokens: 14, crown: "", accessory: "" },
  ]

  return (
    <div className="min-h-screen bg-[#f5f3f0] flex">
      {/* Left Sidebar */}
      <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-8 space-y-8 relative">
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

        {/* Leaderboard Button - Active */}
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 cursor-pointer ${
            pathname === "/leaderboard" ? "bg-[#bbdce5]" : "bg-gray-200 hover:bg-[#bbdce5]"
          }`}
        >
          <img
            src="/leaderboard-star-icon-new.png"
            alt="Leaderboard"
            className="w-[100px] h-[100px] object-contain"
            style={
              pathname === "/leaderboard"
                ? {
                    filter:
                      "brightness(0) saturate(100%) invert(73%) sepia(15%) saturate(1015%) hue-rotate(155deg) brightness(91%) contrast(87%)",
                  }
                : {}
            }
          />
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        <div className="relative">
          <div
            onClick={toggleRolesPopup}
            className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-[#bbdce5] transition-colors duration-200 cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" stroke="gray" strokeWidth="2" fill="none" />
              <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="gray" strokeWidth="2" />
            </svg>
          </div>

          {/* Roles Popup */}
          {showRolesPopup && (
            <div className="absolute left-16 bottom-0 bg-white border-2 border-gray-200 rounded-xl shadow-lg p-4 min-w-[200px] z-50">
              <h3 className="text-[#8b6f47] font-semibold text-lg mb-3">Roles</h3>
              <div className="space-y-2">
                <Link href="/the-first-smile" onClick={closeRolesPopup}>
                  <div className="w-full text-left px-4 py-3 text-[#8b6f47] hover:bg-[#bbdce5] rounded-lg transition-colors duration-200 cursor-pointer">
                    The First Smile
                  </div>
                </Link>
                <Link href="/smile-builder" onClick={closeRolesPopup}>
                  <div className="w-full text-left px-4 py-3 text-[#8b6f47] hover:bg-[#bbdce5] rounded-lg transition-colors duration-200 cursor-pointer">
                    Smile Builder
                  </div>
                </Link>
                <Link href="/ambassador-of-joy" onClick={closeRolesPopup}>
                  <div className="w-full text-left px-4 py-3 text-[#8b6f47] hover:bg-[#bbdce5] rounded-lg transition-colors duration-200 cursor-pointer">
                    Ambassador of joy
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col ${showRolesPopup ? "blur-sm" : ""} transition-all duration-300`}
        onClick={showRolesPopup ? closeRolesPopup : undefined}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6">
          <Link href="/" className="block">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%282%29-75jPo6UeWy3HJc1BvNOXe3xsZkNOUZ.png"
              alt="Smilu"
              className="h-16 w-auto"
            />
          </Link>
          {/* Log-In button */}
          <Link href="/login">
            <Button className="bg-[#b8e6b8] hover:bg-[#a8d6a8] text-[#4a5c4a] px-6 py-2 rounded-full text-sm font-medium">
              Log-In
            </Button>
          </Link>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center px-8 py-8">
          {/* Title */}
          <h1 className="text-[#55361e] text-4xl font-bold mb-12 font-nunito">Top Smilers</h1>

          {/* Podium Section */}
          <div className="flex items-end justify-center gap-8 mb-16">
            {/* Second Place */}
            <div className="flex flex-col items-center">
              <div className="text-[#bbdce5] text-lg font-bold mb-2">#2</div>
              <div className="bg-[#bbdce5] border-4 border-white rounded-2xl p-6 flex flex-col items-center shadow-lg">
                <div className="w-20 h-20 mb-4 relative">
                  <img
                    src="/images/bear-with-lollipop.png"
                    alt="Bear with lollipop"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-[#8b6f47] font-semibold text-center">Tamara Ortega</div>
              </div>
            </div>

            {/* First Place */}
            <div className="flex flex-col items-center">
              <div className="text-[#f4d03f] text-lg font-bold mb-2">#1</div>
              <div className="bg-[#f4d03f] border-4 border-white rounded-2xl p-6 flex flex-col items-center shadow-lg transform scale-110">
                <div className="w-20 h-20 mb-4 relative">
                  <img
                    src="/images/bear-with-crown.png"
                    alt="Bear with crown"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-[#8b6f47] font-semibold text-center">Dennise Alvarado</div>
              </div>
            </div>

            {/* Third Place */}
            <div className="flex flex-col items-center">
              <div className="text-[#b8e6b8] text-lg font-bold mb-2">#3</div>
              <div className="bg-[#b8e6b8] border-4 border-white rounded-2xl p-6 flex flex-col items-center shadow-lg">
                <div className="w-20 h-20 mb-4 relative">
                  <img
                    src="/images/bear-red-shirt.png"
                    alt="Bear with red shirt"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-[#8b6f47] font-semibold text-center">Angie Alpizar</div>
              </div>
            </div>
          </div>

          {/* Leaderboard List */}
          <div className="w-full max-w-4xl grid grid-cols-2 gap-4">
            {leaderboardData.map((user, index) => (
              <div
                key={user.rank}
                className="bg-white border-2 border-[#f4d03f] rounded-2xl p-4 flex items-center gap-4"
              >
                <div className="w-8 h-8 bg-[#f4d03f] rounded-full flex items-center justify-center text-[#8b6f47] font-bold text-sm">
                  {user.rank}.
                </div>
                <div className="flex-1">
                  <div className="text-[#8b6f47] font-semibold">{user.name}</div>
                  <div className="text-gray-500 text-sm">{user.tokens} tokens</div>
                </div>
              </div>
            ))}
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
    </div>
  )
}
