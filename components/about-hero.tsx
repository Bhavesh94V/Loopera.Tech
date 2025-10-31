"use client"

import { Hero3DBackground } from "./hero-3d-background"


export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 overflow-hidden">
      <Hero3DBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Innovating{" "}
            <span className="bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] bg-clip-text text-transparent">
              Beyond the Build
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We don't just code — we craft scalable, AI-first digital solutions that help you automate, grow, and lead.
          </p>
        </div>
      </div>
    </section>
  )
}
