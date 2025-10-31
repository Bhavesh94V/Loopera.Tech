"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, Zap, Code, Smartphone, Palette } from "lucide-react"

const faqCategories = [
  {
    name: "AI Automation",
    icon: Zap,
    faqs: [
      {
        question: "Can you integrate AI automation into my existing CRM or ERP system?",
        answer:
          "Yes. We can embed AI tools into your current CRM, ERP, or internal workflows — such as lead scoring, smart data entry, or predictive analytics — without disrupting your current setup.",
      },
      {
        question: "What kind of tasks can you automate using AI?",
        answer:
          "We automate customer support with chatbots, lead qualification, invoice processing, HR workflows, email marketing sequences, and more using LLMs and rule-based logic.",
      },
      {
        question: "What technologies do you use for AI solutions?",
        answer:
          "We are technology-agnostic and choose tools based on the use case. That said, we're proficient in Python for AI workflows, LangChain and OpenAI APIs for LLMs, React and Vue.js for frontend, and Ruby on Rails or Node.js for backend. For scalability, we rely on AWS and Google Cloud, along with Zapier and Make for automation.",
      },
      {
        question: "Will I be able to manage the AI tools after the project ends?",
        answer:
          "Definitely. We build solutions with transparency and handoff in mind — including clean documentation, admin dashboards, and knowledge transfers.",
      },
    ],
  },
  {
    name: "Web Development",
    icon: Code,
    faqs: [
      {
        question: "Do you build custom web apps with login, dashboards, and admin panels?",
        answer:
          "Absolutely. We build full-stack web applications with user authentication, real-time dashboards, admin controls, and scalable architecture using frameworks like React, Next.js, and Node.js.",
      },
      {
        question: "I want an app like Zomato or Uber — can you build that?",
        answer:
          "Yes. We've developed food delivery, ride-hailing, and marketplace-style apps with real-time tracking, payments, order flows, and chat systems. We use Flutter or React Native for cross-platform performance.",
      },
    ],
  },
  {
    name: "Mobile Apps",
    icon: Smartphone,
    faqs: [
      {
        question: "Will my mobile app support AI features like voice commands or smart search?",
        answer:
          "Yes. We integrate AI features like NLP-based voice commands, auto-categorization, recommendation engines, and smart search into your apps.",
      },
      {
        question: "Can your custom tools work offline or on low-internet areas?",
        answer:
          "Yes. We offer Progressive Web App (PWA) or hybrid mobile solutions with offline-first functionality, sync logic, and caching.",
      },
    ],
  },
  {
    name: "Custom Software",
    icon: Code,
    faqs: [
      {
        question: "Can you build internal tools tailored for my business (e.g., inventory, attendance, reports)?",
        answer:
          "Definitely. We build custom internal systems — from automated reporting dashboards to inventory and operations tracking tools — optimized for your workflows and team size.",
      },
    ],
  },
  {
    name: "Creative Design",
    icon: Palette,
    faqs: [
      {
        question: "Do you only do web design or also branding like logo and colors?",
        answer:
          "We do both. From UX/UI design of digital products to visual branding (logo, typography, color palette, social templates), our team creates a complete design system for your brand.",
      },
      {
        question: "Will I get responsive designs that work on all devices?",
        answer:
          "Yes. Every design we deliver is responsive — mobile, tablet, and desktop friendly — tested across breakpoints before handover.",
      },
    ],
  },
]

export default function FAQsSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const currentCategory = faqCategories[activeCategory]
  const CategoryIcon = currentCategory.icon

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked <span className="text-[#1E90FF]">Questions</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, technologies, and processes
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {faqCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveCategory(idx)
                    setOpenIndex(null)
                  }}
                  className={`flex items-center cursor-pointer gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === idx
                      ? "bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] text-white shadow-lg shadow-[#1E90FF]/50"
                      : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#1E90FF] hover:text-[#1E90FF]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* FAQs List */}
        <div className="space-y-4 mb-16">
          {currentCategory.faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border-2 border-gray-100 hover:border-[#1E90FF]/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#1E90FF]/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex items-start justify-between gap-4 cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#1E90FF] transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? "bg-[#1E90FF] text-white"
                          : "bg-gray-100 text-gray-600 group-hover:bg-[#1E90FF]/20 group-hover:text-[#1E90FF]"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="pt-4 border-t-2 border-gray-100">
                    <p className="text-gray-600 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#1E90FF]/10 via-[#6FBFFF]/10 to-[#1E90FF]/10 rounded-2xl border-2 border-[#1E90FF]/30 p-12 text-center backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Can't find the answer you're looking for? Our team is here to help you understand how we can bring your
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/consultation">
              <button className="bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] hover:from-[#1E90FF]/90 hover:to-[#6FBFFF]/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#1E90FF]/30 hover:shadow-xl hover:shadow-[#1E90FF]/50">
                Schedule a Call
              </button>
            </a>
            <a href="/contact">
              <button className="border-2 border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Send us a Message
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
