"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">OUR STORY</h2>
        </div>

        <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50/50">
          <CardContent className="p-12">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Born out of a passion for problem-solving, LOOPERA.tech was founded to bridge the gap between powerful
                design, robust development, and next-gen AI solutions.
              </p>

              <p>
                What started as a small dev studio has grown into a team of strategists, designers, engineers, and AI
                tinkerers — united by one belief:{" "}
                <span className="font-semibold text-[#1E90FF]">tech should create leverage, not complexity.</span>
              </p>

              <p>
                Today, we partner with forward-thinking businesses to build intelligent digital experiences that don't
                just meet current needs, but anticipate future opportunities. Every line of code we write, every
                interface we design, and every AI system we implement is crafted with scalability, performance, and user
                delight in mind.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
