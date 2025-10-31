"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Palette, Rocket, HeadphonesIcon } from "lucide-react"

const processSteps = [
  {
    number: "1",
    icon: Users,
    title: "We Understand",
    description:
      "We start by listening. From discovery calls to deep-dive workshops, we understand your goals, users, and pain points — aligning on outcomes before writing a single line of code.",
  },
  {
    number: "2",
    icon: Palette,
    title: "We Design",
    description:
      "We translate strategy into experience. Through wireframes, user flows, and high-fidelity prototypes, we ensure every interaction is intuitive, functional, and aligned with your brand.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "We Deliver",
    description:
      "We ship fast, and we ship smart. Our development approach is agile, transparent, and scalable — ensuring your product is built for performance and growth from day one.",
  },
  {
    number: "4",
    icon: HeadphonesIcon,
    title: "We Support",
    description:
      "Post-launch, we remain your tech partner. From updates and maintenance to feature rollouts and AI fine-tuning, we help your product evolve as your business scales.",
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">OUR PROCESS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that transforms ideas into intelligent digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white"
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>

              <CardContent className="p-6 pt-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1E90FF]/10 to-[#6FBFFF]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-[#1E90FF]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1E90FF] transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </CardContent>

              {/* Connecting Line (except for last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] transform -translate-y-1/2 z-10"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
