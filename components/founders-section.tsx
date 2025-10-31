"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Linkedin, Instagram, Globe } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6";

const founders = [
  {
    name: "Yuvraj Singh",
    role: "CEO & Co-Founder",
    quote:
      "At LOOPERA.tech, we strive to create digital solutions that not only meet business goals but also inspire innovation. Every project is an opportunity to push the boundaries of technology.",
    image: "Founders/yuvraj.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/yuvrajsingh",
      FaXTwitter: "https://x.com/yuvrajsingh",
      instagram: "https://www.instagram.com/yuvrajsingh",
      website: "https://loopera.tech",
    },
  },
  {
    name: "Alok Panchal",
    role: "CEO & Co-Founder",
    quote:
      "Innovation and creativity are at the heart of what we do. We believe in building products that simplify complex problems and create meaningful experiences for users.",
    image: "Founders/alok.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/alokpanchal",
      FaXTwitter: "https://x.com/alokpanchal",
      instagram: "https://www.instagram.com/alokpanchal",
      website: "https://loopera.tech",
    },
  },
]

export default function FoundersSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            FOUNDERS
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the visionaries behind LOOPERA.tech who are passionate about building the future of digital experiences
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {founders.map((founder, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg bg-white overflow-hidden rounded-2xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-96 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {founder.name}
                  </h3>
                  <p className="text-[#1E90FF] font-medium mt-1 text-sm sm:text-base">
                    {founder.role}
                  </p>
                </div>

                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#1E90FF]/20 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed italic pl-6 text-sm sm:text-base">
                    {founder.quote}
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-5">
                  <a
                    href={founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-[#0077b5] hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={founder.socials.FaXTwitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition-colors duration-300"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href={founder.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-500 hover:text-white transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={founder.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
