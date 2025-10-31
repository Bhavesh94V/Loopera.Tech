"use client"

import { Hero3DBackground } from "./hero-3d-background"


export default function IndustriesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 overflow-hidden">
      <Hero3DBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Industries We{" "}
            <span className="bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] bg-clip-text text-transparent">
              Transform
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From healthcare to real estate, we bring AI-powered solutions and cutting-edge technology to industries
            ready for digital transformation.
          </p>
        </div>
      </div>
    </section>
  )
}
