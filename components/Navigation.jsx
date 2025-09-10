"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react" // hamburger & close icons

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between h-full px-6 md:px-10">
        {/* Logo */}
        <div className="flex tracking-[6px] items-center">
          <p className="md:text-3xl text-xl text-pink-600">FIOR</p>
          <p className="md:text-3xl text-xl">ELLO</p>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center items-center gap-5 lg:gap-10 flex-1 ">
          <li><Link href="/" className="hover:text-xl hover:text-pink-500">Home</Link></li>
          <li><Link href="/about" className="hover:text-xl hover:text-pink-500">About</Link></li>
          <li><Link href="/serverComp" className="hover:text-xl hover:text-pink-500">ServerComp</Link></li>
          <li><Link href="/service" className="hover:text-xl hover:text-pink-500">Service</Link></li>
          <li><Link href="/contact" className="hover:text-xl hover:text-pink-500">Contact</Link></li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex justify-end">
          <Link  href="/">
          <button className="h-10 w-30 px-4 rounded-lg bg-pink-400 text-white hover:bg-pink-600 transition text-[18px] cursor-pointer">
            Get started
          </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-20 left-0 w-full">
          <ul className="flex flex-col justify-center items-center gap-6 py-6">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/serverComp" onClick={() => setIsOpen(false)}>Server Component</Link></li>
            <li><Link href="/service" onClick={() => setIsOpen(false)}>Service</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          
              <button className="h-10 px-4 rounded-lg   cursor-hand bg-pink-400 text-white hover:bg-pink-600 transition">
                Get started
              </button>
         
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navigation
