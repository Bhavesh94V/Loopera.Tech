"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
    setServicesOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent backdrop-blur-0 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-40 overflow-hidden max-h-28 mt-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo-1.png"
                alt="Loopera Logo"
                width={180}
                height={120}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-800 hover:text-[#1E90FF] transition-colors duration-300 font-medium flex items-center">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Link
                  href="/services"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E90FF] transition-colors duration-200 rounded-t-lg font-medium"
                >
                  All Services
                </Link>
                <div className="border-t border-gray-100"></div>
                <Link
                  href="/services/loopsites"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E90FF]"
                >
                  Web Development
                </Link>
                <Link
                  href="/services/loopsystems"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E90FF]"
                >
                  AI Automation
                </Link>
                <Link
                  href="/services/loopapps"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E90FF]"
                >
                  Mobile App Development
                </Link>
                <Link
                  href="/services/loopintellect"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E90FF]"
                >
                  Custom Software
                </Link>
                <Link
                  href="/services/loopdesign"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E90FF] rounded-b-lg"
                >
                  Creative Design
                </Link>
              </div>
            </div>

            <Link
              href="/industries"
              className="text-gray-800 hover:text-[#1E90FF] transition-colors duration-300 font-medium"
            >
              Industries
            </Link>
            <Link
              href="/about-us"
              className="text-gray-800 hover:text-[#1E90FF] transition-colors duration-300 font-medium"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-[#1E90FF] transition-colors duration-300 font-medium"
            >
              Contact Us
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-gray-800 hover:text-[#1E90FF] transition-colors duration-300 font-medium flex items-center">
                Resources
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Link
                  href="/blog"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E90FF]"
                >
                  Blog
                </Link>
                <Link
                  href="/portfolio"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E90FF]"
                >
                  Portfolio
                </Link>
                <Link
                  href="/faqs"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E90FF] rounded-b-lg"
                >
                  FAQs
                </Link>
              </div>
            </div>

            <Link href="/consultation">
              <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-800 hover:text-[#1E90FF] hover:bg-gray-100 transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl md:hidden z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 border-b border-gray-100">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-700 hover:text-[#1E90FF]"
          >
            <X size={24} />
          </button>
        </div>

        <div className="py-4 px-4 flex flex-col space-y-4 text-[#1E90FF]">
          {/* Services Menu */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="font-medium py-2 flex items-center justify-between w-full"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  href="/services"
                  onClick={handleLinkClick}
                  className="block text-sm hover:text-[#1E90FF]"
                >
                  All Services
                </Link>
                <Link
                  href="/services/loopsites"
                  onClick={handleLinkClick}
                  className="block text-sm hover:text-[#1E90FF]"
                >
                  Web Development
                </Link>
                <Link
                  href="/services/loopsystems"
                  onClick={handleLinkClick}
                  className="block text-sm hover:text-[#1E90FF]"
                >
                  AI Automation
                </Link>
                <Link
                  href="/services/loopapps"
                  onClick={handleLinkClick}
                  className="block text-sm hover:text-[#1E90FF]"
                >
                  Mobile App Development
                </Link>
                <Link
                  href="/services/LoopIntellect"
                  onClick={handleLinkClick}
                  className="block text-sm hover:text-[#1E90FF]"
                >
                  Custom Software
                </Link>
                <Link
                  href="/services/loopdesign"
                  onClick={handleLinkClick}
                  className="block text-sm hover:text-[#1E90FF]"
                >
                  Creative Design
                </Link>
              </div>
            )}
          </div>

          {/* Other Links */}
          {[
            { href: "/industries", label: "Industries" },
            { href: "/about-us", label: "About Us" },
            { href: "/contact", label: "Contact Us" },
            { href: "/blog", label: "Blog" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/faqs", label: "FAQs" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={handleLinkClick}
              className="font-medium py-2 hover:text-[#1E90FF]"
            >
              {label}
            </Link>
          ))}

          <Link href="/consultation" onClick={handleLinkClick}>
            <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white w-full mt-4 shadow-lg rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
