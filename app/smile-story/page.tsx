"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [activeCoupon, setActiveCoupon] = useState<string | null>(null)
  const [showBuyModal, setShowBuyModal] = useState(false)
  const [showPaymentConfirmed, setShowPaymentConfirmed] = useState(false)
  const [tokenAmount, setTokenAmount] = useState(1)
  const [showRolesPopup, setShowRolesPopup] = useState(false)

  const modalContent = {
    "Child History":
      "The lack of toys in childhood has profound consequences on children's social, emotional, and cognitive development. Studies show that the deprivation of play is associated with higher levels of anxiety, depression, isolation, and even aggressive behaviors in adulthood. Likewise, when children do not have opportunities for free and creative play, they are limited in developing essential skills such as problem-solving, emotional regulation, and the ability to relate to others.\n\nThis is where Smilu makes a difference: each ToyToken becomes a real toy delivered into the hands of a child, ensuring not only moments of joy but also opportunities for learning and growth. In addition, thanks to the NFTs drawn by the children themselves, every contribution is linked to an authentic story, creating an emotional bond between the giver and the receiver. All of this is supported by the transparency of blockchain, guaranteeing that the impact is visible, auditable, and trustworthy.",
    Perks: null, // Will be rendered as cards
    Community:
      "At Smilu, community goes beyond social change makers. It is an ecosystem where supporters, ambassadors, and institutions committed to childhood come together. Local associations, schools, foundations, and organizations working with vulnerable children find in Smilu a transparent space to channel support and showcase their impact.\n\nBy joining, you don't just become part of a global network of caring people—you also collaborate with entities that directly understand children's needs and ensure that every toy and every smile reaches the right place. In this way, the Smilu community doesn't just fund; it supports, amplifies, and strengthens social impact.",
  }

  const perksData = [
    {
      discount: "15% off",
      category: "Libraries",
      description: "With NFT+Token+Certificate",
    },
    {
      discount: "10% off",
      category: "Restaurants",
      description: "With NFT+Token+Certificate",
    },
  ]

  const openModal = (modalType: string) => {
    setActiveModal(modalType)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const openCoupon = (couponType: string) => {
    setActiveCoupon(couponType)
  }

  const closeCoupon = () => {
    setActiveCoupon(null)
  }

  const openBuyModal = () => {
    setShowBuyModal(true)
  }

  const closeBuyModal = () => {
    setShowBuyModal(false)
    setTokenAmount(1)
  }

  const handleConfirmPurchase = () => {
    setShowBuyModal(false)
    setShowPaymentConfirmed(true)
  }

  const closePaymentConfirmed = () => {
    setShowPaymentConfirmed(false)
  }

  const toggleRolesPopup = () => {
    setShowRolesPopup(!showRolesPopup)
  }

  const closeRolesPopup = () => {
    setShowRolesPopup(false)
  }

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
            <img src="/dashboard-icon-new.png" alt="Dashboard" className="w-[100px] h-[100px] object-contain" />
          </div>
        </Link>

        {/* Art Shelf Button */}
        <Link href="/art-shelf">
          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-[#bbdce5] transition-colors duration-200 cursor-pointer">
            <img src="/art-shelf-icon-new.png" alt="Art Shelf" className="w-[100px] h-[100px] object-contain" />
          </div>
        </Link>

        {/* Leaderboard Button */}
        <Link href="/leaderboard">
          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-[#bbdce5] transition-colors duration-200 cursor-pointer">
            <img src="/leaderboard-icon-new.png" alt="Leaderboard" className="w-[100px] h-[100px] object-contain" />
          </div>
        </Link>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* User/Settings Icon */}
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
        className={`flex-1 flex flex-col ${activeModal || activeCoupon || showBuyModal || showPaymentConfirmed ? "blur-sm" : ""} transition-all duration-300`}
        onClick={showRolesPopup ? closeRolesPopup : undefined}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%282%29-75jPo6UeWy3HJc1BvNOXe3xsZkNOUZ.png"
            alt="Smilu"
            className="h-16 w-auto"
          />
          <Link href="/login">
            <Button className="bg-[#b8e6b8] hover:bg-[#a8d6a8] text-[#4a5c4a] px-6 py-2 rounded-full text-sm font-medium">
              Log-In
            </Button>
          </Link>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          {/* Golden Token */}
          <div className="flex items-center justify-center mb-8 w-[300px] h-[200px]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agregar%20un%20subt%C3%ADtulo%20%282%29-WEtfLgFop1T90VkEiEMEYuFCL3znU2.png"
              alt="Smilu Token"
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className="text-black text-2xl font-bold mb-8 font-nunito">1 Token = 1 New toy delivered</h1>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 mb-12">
            <Button
              onClick={openBuyModal}
              className="bg-[#a8d5d8] hover:bg-[#96c9cc] text-white px-8 py-3 rounded-full text-lg font-medium flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M12 8V20" stroke="currentColor" strokeWidth="2" />
                <path d="M8 8C8 6 9 4 12 4C15 4 16 6 16 8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              Buy
            </Button>
            <Button className="bg-[#a8d5d8] hover:bg-[#96c9cc] text-white px-8 py-3 rounded-full text-lg font-medium flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  fill="currentColor"
                />
              </svg>
              My smiles
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#8b6f47] text-sm font-medium">3/120 Smiles</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3">
              <div className="bg-[#a8d5d8] h-3 rounded-full" style={{ width: "2.5%" }}></div>
            </div>
          </div>

          {/* Why Smilu Section */}
          <div className="w-full max-w-4xl mt-16">
            <h2 className="text-[#55361e] text-2xl font-bold text-center mb-8 font-nunito">Why Smilu</h2>
            <div className="flex items-center justify-center space-x-8">
              {/* Child History Button */}
              <button
                onClick={() => openModal("Child History")}
                className="bg-white border-2 border-gray-300 rounded-3xl px-8 py-6 flex flex-col items-center space-y-3 hover:border-[#a8d5d8] transition-colors duration-200 min-w-[200px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#8b6f47" strokeWidth="2" fill="none" />
                    <circle cx="9" cy="9" r="1" fill="#8b6f47" />
                    <circle cx="15" cy="9" r="1" fill="#8b6f47" />
                    <path d="M8 15s1.5 2 4 2 4-2 4-2" stroke="#8b6f47" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <span className="text-[#8b6f47] font-medium">Child History</span>
              </button>

              {/* Perks Button */}
              <button
                onClick={() => openModal("Perks")}
                className="bg-white border-2 border-gray-300 rounded-3xl px-8 py-6 flex flex-col items-center space-y-3 hover:border-[#a8d5d8] transition-colors duration-200 min-w-[200px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="12" rx="2" stroke="#8b6f47" strokeWidth="2" fill="none" />
                    <rect x="4" y="8" width="4" height="4" fill="#8b6f47" />
                    <rect x="10" y="8" width="4" height="4" fill="#8b6f47" />
                    <rect x="16" y="8" width="4" height="4" fill="#8b6f47" />
                  </svg>
                </div>
                <span className="text-[#8b6f47] font-medium">Perks</span>
              </button>

              {/* Community Button */}
              <button
                onClick={() => openModal("Community")}
                className="bg-white border-2 border-gray-300 rounded-3xl px-8 py-6 flex flex-col items-center space-y-3 hover:border-[#a8d5d8] transition-colors duration-200 min-w-[200px]"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="7" r="4" stroke="#8b6f47" strokeWidth="2" fill="none" />
                    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="#8b6f47" strokeWidth="2" />
                    <circle cx="16" cy="11" r="3" stroke="#8b6f47" strokeWidth="2" fill="none" />
                    <path d="M21 21v-2a4 4 0 0 0-3-3.87" stroke="#8b6f47" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-[#8b6f47] font-medium">Community</span>
              </button>
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
