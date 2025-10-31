"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Brain, Smartphone, Code, Palette, CheckCircle, ArrowRight, Zap, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    id: "loopsites",
    number: "01",
    icon: Globe,
    head: "LoopSites:",
    title: "Web Development",
    subtitle: "Modern, responsive, and AI-enhanced websites.",
    description:
      "Whether you're a startup or an established brand, we create lightning-fast, SEO-optimized websites with stunning design and intelligent functionality — including AI-powered forms, smart recommendations, and chatbot integrations.",
    image:
      "servicesimg/3.png",
    technologies: ["React", "Next.js", "WordPress", "TailwindCSS", "Headless CMS"],
    addons: ["AI chatbot", "voice search", "dynamic content"],
    features: [
      "Lightning-fast performance",
      "SEO-optimized structure",
      "Mobile-first responsive design",
      "AI-powered functionality",
      "Smart recommendations engine",
      "Integrated chatbot systems",
    ],
  },
  {
    id: "loopsystems",
    number: "02",
    icon: Code,
    head: "LoopSystems:",
    title: "Software Development",
    subtitle: "Tailored solutions that solve real business problems.",
    description:
      "Have a unique process or a product idea that doesn't fit the mold? We build backend dashboards, CRMs, portals, and SaaS tools tailored to your exact needs — with AI embedded where it matters.",
    image: "servicesimg/4.png",
    services: ["Business workflow automation", "Custom dashboards", "Internal tools", "API integrations"],
    features: [
      "Custom workflow automation",
      "Real-time dashboards",
      "Tailored internal tools",
      "Seamless API integrations",
      "Scalable SaaS solutions",
      "AI-embedded functionality",
    ],
  },
  {
    id: "Loopapps",
    number: "03",
    icon: Smartphone,
    head: "loopApps:",
    title: "Mobile Application",
    subtitle: "From concept to launch — fast, beautiful apps.",
    description:
      "We build cross-platform mobile apps (iOS + Android) that are scalable, fast, and easy to maintain — whether you need a product MVP or a full-fledged app with AI integrations.",
    image: "servicesimg/5.png",
    technologies: ["Flutter", "React Native", "Firebase", "Supabase"],
    aiFeatures: ["Voice interfaces", "smart chat", "push personalization"],
    features: [
      "Cross-platform compatibility",
      "Scalable architecture",
      "Fast performance optimization",
      "AI voice interfaces",
      "Smart chat integration",
      "Personalized push notifications",
    ],
  },
  {
    id: "loopintellect",
    number: "04",
    icon: Brain,
    head: "LoopIntellect:",
    title: "AI Automation & Integration",
    subtitle: "Let AI do the heavy lifting.",
    description:
      "We integrate AI tools like OpenAI, Langchain, Make, and Zapier into your business processes — automating responses, document generation, scheduling, and more. Save time, reduce errors, and boost efficiency.",
    image: "servicesimg/6.png",
    technologies: ["OpenAI", "Langchain", "Make", "Zapier"],
    useCases: [
      "Automated customer support",
      "Lead qualification via chatbots",
      "Internal tools powered by LLMs",
      "AI-generated content workflows",
    ],
    features: [
      "Intelligent customer support automation",
      "Smart lead qualification systems",
      "Document generation workflows",
      "Automated scheduling systems",
      "Error reduction protocols",
      "Efficiency optimization tools",
    ],
  },
  {
    id: "loopdesign",
    number: "05",
    icon: Palette,
    head: "LoopDesigns:",
    title: "Creative Designing",
    subtitle: "Where aesthetics meet performance.",
    description:
      "We don't just design pretty interfaces — we design experiences that convert. From brand identity to UI/UX for your website or app, our design-first approach keeps both humans and algorithms happy.",
    image: "servicesimg/7.png",
    offerings: [
      "Brand & logo design",
      "UI/UX for web & mobile",
      "Motion graphics & AI visuals",
      "Design systems + prototyping",
    ],
    features: [
      "Conversion-focused design",
      "Complete brand identity",
      "User experience optimization",
      "Motion graphics creation",
      "AI-generated visuals",
      "Comprehensive design systems",
    ],
  },
]


export default function ServicesPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-3 tracking-tight">OUR SERVICES</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to transform your business with cutting-edge technology and creative
            excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 lg:p-8">
                  {/* Left Column - Number and Title */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-start gap-4 mb-6">
                        <span className="text-5xl md:text-6xl font-bold text-[#1E90FF]/20 group-hover:text-[#1E90FF]/40 transition-colors duration-300">
                          {service.number}
                        </span>
                        <div className="w-16 h-16 bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <Link href={`/services/${service.id}`}>
                        <h3 className="text-2xl md:text-3xl font-bold text-black group-hover:text-[#1E90FF] transition-colors duration-300 cursor-pointer">
                          {service.head}
                        </h3>
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-[#1E90FF] transition-colors duration-300 cursor-pointer">
                          {service.title}
                        </h3>
                      </Link>
                      <p className="text-sm md:text-base text-[#1E90FF] font-medium mb-4">{service.subtitle}</p>
                    </div>
                  </div>

                  {/* Middle Column - Description and Details */}
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{service.description}</p>

                    {/* Technologies */}
                    {service.technologies && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-[#10B981] mr-2" />
                          Tech Stack:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-[#1E90FF]/10 text-[#1E90FF] text-xs rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Image and CTA */}
                  <div className="flex flex-col justify-between items-end">
                    {hoveredId === service.id ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#1E90FF]/20 mb-4"
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E90FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ) : (
                      <div className="w-16 h-16 rounded-full border-2 border-[#1E90FF] flex items-center justify-center transition-all duration-300 group-hover:bg-[#1E90FF] group-hover:shadow-lg group-hover:scale-110 mb-4">
                        <ArrowUpRight className="w-6 h-6 text-[#1E90FF] group-hover:text-white transition-colors duration-300" />
                      </div>
                    )}

                    <Link href={`/services/${service.id}`}>
                      <Button className="bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] hover:from-[#1E90FF]/90 hover:to-[#6FBFFF]/90 text-white group w-full">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Features Grid - Bottom */}
                <div className="border-t border-gray-100 p-6 lg:p-8 bg-gray-50/30">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Key Features</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {service.features.slice(0, 6).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 p-2 rounded-lg hover:bg-white transition-colors duration-300"
                      >
                        <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                        <span className="text-xs md:text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// export default function ServicesPage() {
//   const [hoveredId, setHoveredId] = useState<string | null>(null)

//   return (
//     <section className="w-full py-20 px-4 bg-gradient-to-b from-white via-white to-slate-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <h1 className="text-5xl md:text-6xl font-bold text-black mb-3 tracking-tight">OUR SERVICES</h1>
//           <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive solutions tailored to transform your business with cutting-edge technology and creative
//             excellence
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="space-y-6">
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               onMouseEnter={() => setHoveredId(service.id)}
//               onMouseLeave={() => setHoveredId(null)}
//               className="group"
//               style={{
//                 animation: `slideIn 0.6s ease-out ${index * 0.1}s both`,
//               }}
//             >
//               <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50">
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 lg:p-8">
//                   {/* Left Column - Number and Title */}
//                   <div className="flex flex-col justify-between">
//                     <div>
//                       <div className="flex items-start gap-4 mb-6">
//                         <span className="text-5xl md:text-6xl font-bold text-[#1E90FF]/20 group-hover:text-[#1E90FF]/40 transition-colors duration-300">
//                           {service.number}
//                         </span>
//                         <div className="w-16 h-16 bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                           <service.icon className="w-8 h-8 text-white" />
//                         </div>
//                       </div>
//                       <Link href={`/services/${service.id}`}>
//                         <h3 className="text-2xl md:text-3xl font-bold text-black group-hover:text-[#1E90FF] transition-colors duration-300 cursor-pointer">
//                           {service.head}
//                         </h3>
//                         <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-[#1E90FF] transition-colors duration-300 cursor-pointer">
//                           {service.title}
//                         </h3>
//                       </Link>
//                       <p className="text-sm md:text-base text-[#1E90FF] font-medium mb-4">{service.subtitle}</p>
//                     </div>
//                   </div>

//                   {/* Middle Column - Description and Details */}
//                   <div className="space-y-4">
//                     <p className="text-gray-600 leading-relaxed text-sm md:text-base">{service.description}</p>

//                     {/* Technologies */}
//                     {service.technologies && (
//                       <div>
//                         <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
//                           <CheckCircle className="w-4 h-4 text-[#10B981] mr-2" />
//                           Tech Stack:
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                           {service.technologies.map((tech, idx) => (
//                             <span
//                               key={idx}
//                               className="px-3 py-1 bg-[#1E90FF]/10 text-[#1E90FF] text-xs rounded-full font-medium"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Add-ons */}
//                     {service.addons && (
//                       <div>
//                         <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
//                           <Zap className="w-4 h-4 text-[#A855F7] mr-2" />
//                           Add-ons:
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                           {service.addons.map((addon, idx) => (
//                             <span
//                               key={idx}
//                               className="px-3 py-1 bg-[#10B981]/10 text-[#10B981] text-xs rounded-full font-medium"
//                             >
//                               {addon}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Right Column - Image and CTA */}
//                   <div className="flex flex-col justify-between items-end">
//                     {hoveredId === service.id ? (
//                       <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#1E90FF]/20 mb-4 animate-in fade-in duration-300">
//                         <img
//                           src={service.image || "/placeholder.svg"}
//                           alt={service.title}
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-[#1E90FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                       </div>
//                     ) : (
//                       <div className="w-16 h-16 rounded-full border-2 border-[#1E90FF] flex items-center justify-center transition-all duration-300 group-hover:bg-[#1E90FF] group-hover:shadow-lg group-hover:scale-110 mb-4">
//                         <ArrowUpRight className="w-6 h-6 text-[#1E90FF] group-hover:text-white transition-colors duration-300" />
//                       </div>
//                     )}

//                     <Link href={`/services/${service.id}`}>
//                       <Button className="bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] hover:from-[#1E90FF]/90 hover:to-[#6FBFFF]/90 text-white group w-full">
//                         Learn More
//                         <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>

//                 {/* Features Grid - Bottom */}
//                 <div className="border-t border-gray-100 p-6 lg:p-8 bg-gray-50/30">
//                   <h4 className="text-sm font-semibold text-gray-900 mb-4">Key Features</h4>
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                     {service.features.slice(0, 6).map((feature, idx) => (
//                       <div
//                         key={idx}
//                         className="flex items-start space-x-2 p-2 rounded-lg hover:bg-white transition-colors duration-300"
//                       >
//                         <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
//                         <span className="text-xs md:text-sm text-gray-700 font-medium">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   )
// }
