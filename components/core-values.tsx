"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Eye, Users, Brain, Shield, Palette } from "lucide-react"

const values = [
  {
    icon: Eye,
    title: "Transparency First",
    description: "No jargon, no fluff. Clear communication at every step.",
  },
  {
    icon: Users,
    title: "Client-Centric Mindset",
    description: "We co-create with you, not for you.",
  },
  {
    icon: Brain,
    title: "AI-First Thinking",
    description: "We integrate smart automation where it matters.",
  },
  {
    icon: Shield,
    title: "Reliable & Scalable Code",
    description: "Performance is built in, not added later.",
  },
  {
    icon: Palette,
    title: "Design with Purpose",
    description: "Every pixel is intentional, every interaction intuitive.",
  },
]

export default function CoreValues() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">OUR CORE VALUES</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide every decision we make and every solution we build
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#1E90FF] transition-colors">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
