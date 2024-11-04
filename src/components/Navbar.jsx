'use client'

import { useState, useEffect } from "react"
import { close, menu, profilePic } from "../assets"
import { navLinks } from "../constants"
import { scrollToSection } from "../lib/helperFunctions"

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`w-full flex justify-between items-center p-1 fixed top-6 left-0 right-10 z-[100] transition-all duration-300 mx-auto ${
      scrolled
      ? "bg-gray-900/70 backdrop-blur-md border-gray-800"
      : "bg-transparent border-gray-600"
  } border rounded-xl`}
>

      <div className="flex items-center">
        <img src={profilePic} alt="Manikandan" className="w-[50px] h-[50px] rounded-full mr-3" />
        <div>
          <p className="text-white font-bold">Manikandan</p>
          <p className="text-gray-400 text-sm">Developer</p>
        </div>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 space-x-6">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="text-white hover:text-teal-200 cursor-pointer font-medium transition-colors duration-300"
            onClick={() => scrollToSection(nav.id)}
          >
            {nav.title}
          </li>
        ))}
        <li>
          <button className="px-4 py-2 border border-gray-600 text-white rounded-full hover:bg-teal-600 transition-colors duration-300">
            Hire Me!
          </button>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-gray-900/90 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
        >
          <ul className="list-none flex flex-col items-center">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="text-white py-2 cursor-pointer hover:text-teal-200 transition-colors duration-300"
                onClick={() => scrollToSection(nav.id)}
              >
                {nav.title}
              </li>
            ))}
            <li className="mt-4">
              <button className="px-4 py-2 border border-gray-600 text-white rounded-full hover:bg-teal-600 transition-colors duration-300">
                Hire Me!
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
