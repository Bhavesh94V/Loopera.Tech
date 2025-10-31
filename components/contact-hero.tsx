"use client"

import { Hero3DBackground } from "./hero-3d-background"


export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 overflow-hidden">
      <Hero3DBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Tell Us What You Need
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We work with teams and founders who are building the next big thing — and need a reliable partner for
            design, development, or AI integration. Drop us a line. We'll get back within 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}
