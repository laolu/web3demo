"use client"

import { ThemeToggle } from "./ThemeToggle"
import { Menu } from "lucide-react"
import { useState } from "react"
import { ConnectButton } from '@rainbow-me/rainbowkit'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b">
      <div className="container mx-auto">
        {/* 桌面导航 */}
        <div className="hidden md:flex h-16 items-center px-4">
          <div className="text-xl font-bold">Web3 App</div>
          <div className="ml-auto flex items-center space-x-4">
            <ConnectButton chainStatus="icon" showBalance={false} />
            <ThemeToggle />
          </div>
        </div>

        {/* 移动导航 */}
        <div className="md:hidden">
          <div className="flex h-14 items-center justify-between px-4">
            <div className="text-lg font-bold">Web3 App</div>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-accent rounded-md"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
          
          {isOpen && (
            <div className="border-t px-4 py-3 space-y-3">
              <div className="flex justify-center">
                <ConnectButton chainStatus="icon" showBalance={false} />
              </div>
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}