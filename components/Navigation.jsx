import Link from "next/link" 
import Image from "next/image"

const Navigation = () => {
  return (
    <header className="grid grid-cols-3  items-center fixed top-0 left-0 w-full h-20  z-50 bg-white">
      {/* Logo */}
      <div className="pl-10 flex tracking-[6px]">
        <p className="text-3xl text-pink-600">FIOR</p>
        <p className="text-3xl">ELLO </p>
       </div>

      {/* Navigation Links */}
      <ul className="flex justify-center gap-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/serverComp">Server Component</Link>
        </li>
        <li>
          <Link href="/service">Service</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Button aligned to the right */}
      <div className="flex justify-end pr-10">
        <button className="h-10 px-4 rounded-lg bg-pink-400 text-white hover:bg-pink-600 transition cursor-pointer">
          Get started
        </button>
      </div>
    </header>
  )
}

export default Navigation
