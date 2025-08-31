"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ArtShelf() {
  const [showRolesPopup, setShowRolesPopup] = useState(false)

  const toggleRolesPopup = () => {
    setShowRolesPopup(!showRolesPopup)
  }

  const closeRolesPopup = () => {
    setShowRolesPopup(false)
  }

  return (
    <div className="min-h-screen bg-[#f5f3f0] flex">
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

        {/* Art Shelf Button - Active */}
        <div className="w-12 h-12 bg-[#bbdce5] rounded-lg flex items-center justify-center cursor-pointer">
          <img
            src="/paint-palette-icon-new.png"
            alt="Art Shelf"
            className="w-[100px] h-[100px] object-contain"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(73%) sepia(15%) saturate(1015%) hue-rotate(155deg) brightness(91%) contrast(87%)",
            }}
          />
        </div>

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
            <>
              {/* Backdrop to close popup when clicking outside */}
              <div className="fixed inset-0 z-40" onClick={closeRolesPopup}></div>

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
            </>
          )}
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
          {/* Log-In button */}
          <Link href="/login">
            <Button className="bg-[#b8e6b8] hover:bg-[#a8d6a8] text-[#4a5c4a] px-6 py-2 rounded-full text-sm font-medium">
              Log-In
            </Button>
          </Link>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 px-8 pb-8">
          <h1 className="text-black text-2xl font-bold mb-8 font-nunito">My art shelf.</h1>

          <div className="flex gap-8">
            {/* Left Side - Art Grid */}
            <div className="flex-1 space-y-6">
              {/* Top Row - 3 drawings */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                <div className="flex justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%283%29-WxapP8U9Bt2Jynt2DiExJ8qYHMwsBc.png"
                    alt="Children's Drawings - Turtle, Kids Holding Hands, and Star"
                    className="w-auto h-48 object-contain"
                  />
                </div>
              </div>

              {/* Middle Row - 1 drawing */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                <div className="flex justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%284%29-6haMe5zQybNVj47G1Vt6yM0BoXytbM.png"
                    alt="Child's Car Drawing"
                    className="w-auto h-48 object-contain"
                  />
                </div>
              </div>

              {/* Bottom Row - Empty Shelf */}
              <div className="bg-white rounded-2xl p-12 border-2 border-gray-200 h-44 justify-center text-center">
                <p className="text-[#8b6f47] text-lg flex-col justify-center my-6">
                  Empty shelf - Mind your next smile
                </p>
              </div>
            </div>

            {/* Right Side - Celebrating Bear */}
            <div className="flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oso%20fiesta%20galeria-JT2ba7Ley9NnsI0ok7HaghO0eyxqux.png"
                alt="Celebrating Bear"
                className="w-[550px] h-auto"
              />
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
    </div>
  )
}
