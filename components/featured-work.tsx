"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, TrendingUp, Users, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    title: 'Ready For Udaan',
    description:
      'Developed a consulting platform that streamlined study visa and work permit processes, helping 500+ students and professionals pursue opportunities abroad.',
    image: '/ready-for-udaan-global-opportunities.png',
    tags: ['React.js', 'Node.js', 'MongoDB', 'TailwindCSS', 'PostgreSQL'],
    client: 'Ready For Udaan Pvt. Ltd.',
    industry: 'Education & Immigration',
    results: {
      approvals: '85% visa & work permit success rate',
      processing: '40% faster application processing',
      satisfaction: '97% client satisfaction rate'
    },
    duration: '6 months',
    teamSize: '6 consultants & developers',
    caseStudyUrl: '/portfolio/ready-for-udaan'
  },
  {
    title: 'Flourish Alliance',
    description:
      'End-to-end overseas consulting platform helping students and professionals with study visas, work permits, and career opportunities abroad.',
    image: '/flourish-alliance-education-consulting.png',
    tags: [
      'React.js',
      'JavaScript',
      'MongoDB',
      'TailwindCSS',
      'PostgreSQL',
      'Framer Motion'
    ],
    client: 'Flourish Alliance Pvt. Ltd.',
    industry: 'Education & Immigration',
    results: {
      approvals: '500+ successful visa & work permit approvals',
      satisfaction: '96% client satisfaction rate',
      processing: '40% faster document processing'
    },
    duration: '5 months',
    teamSize: '5 developers',
    caseStudyUrl: '/portfolio/flourish-alliance'
  },
  {
    title: 'Financial Compliance & Advisory Platform',
    description:
      'Developed a comprehensive digital platform for Navkar Bhavsar & Co., a Chartered Accountants and Company Secretaries firm, to streamline client management, tax filings, and business compliance processes. The platform improves collaboration, automates document tracking, and enhances financial reporting accuracy.',
    image: '/navkar-bhavsar-finance-dashboard.png',
    tags: ['Next.js', 'Automation', 'Cloud Integration'],
    client: 'Navkar Bhavsar & Co.',
    industry: 'Accounting & Business Advisory',
    results: {
      efficiency: '60% faster client data processing',
      accuracy: '98% accuracy in compliance reporting',
      satisfaction: 'Improved client satisfaction and retention rate by 40%'
    },
    duration: '4 months',
    teamSize: '3 developers, 1 designer, 1 business analyst',
    caseStudyUrl: '/portfolio/navkar-bhavsar-platform'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function FeaturedWork() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate projects every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const featuredProject = projects[currentIndex]
  const otherProjects = projects.filter((_, idx) => idx !== currentIndex)

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#1E90FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#1E90FF]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
         
          <div>
            <div className='mb-5 text-left md:text-center'>
              <h2 className='text-xl md:text-2xl font-semibold text-muted-foreground mb- uppercase tracking-wider'>
                OUR PORTFOLIO
              </h2>
              <h1 className='text-3xl md:text-6xl font-bold text-foreground'>
                Featured <span className='text-[#1e90ff]'>Work</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-left md:text-center">
              Discover how we've transformed businesses with intelligent, scalable solutions that drive real results
            </p>
          </div>

        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Featured Project - Large card spanning 2 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="group relative h-full overflow-hidden rounded-3xl bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-[#1E90FF]/15 transition-all duration-500">
              <div className="relative overflow-hidden h-96">
                <img
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <span className="flex items-center gap-2 font-medium">
                    <Users className="w-4 h-4 text-[#1E90FF]" /> {featuredProject.client}
                  </span>
                  <span className="flex items-center gap-2 font-medium">
                    <TrendingUp className="w-4 h-4 text-[#1E90FF]" /> {featuredProject.duration}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#1E90FF] transition-colors duration-300">
                  {featuredProject.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{featuredProject.description}</p>

                <div className="mb-6 space-y-3">
                  {Object.values(featuredProject.results).map((result, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#1E90FF] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm font-medium">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#1E90FF]/10 text-[#1E90FF] text-xs rounded-full font-semibold border border-[#1E90FF]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={featuredProject.caseStudyUrl}>
                  <Button className="w-full bg-gradient-to-r from-[#1E90FF] to-[#0066CC] hover:from-[#1E90FF]/90 hover:to-[#0066CC]/90 text-white font-bold py-3 rounded-xl transition-all duration-300 group/btn cursor-pointer shadow-lg hover:shadow-xl hover:shadow-[#1E90FF]/30">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Other Projects - Vertical stack on right */}
          <div className="space-y-6">
            {otherProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-100 shadow-md hover:shadow-xl hover:shadow-[#1E90FF]/15 transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="p-6 flex flex-col h-full">
                    <div className="relative overflow-hidden rounded-xl mb-4 w-full h-40">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40"></div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-[#1E90FF] bg-[#1E90FF]/10 px-3 py-1 rounded-full border border-[#1E90FF]/30">
                            {project.industry}
                          </span>
                          <span className="text-xs text-gray-500 font-medium">{project.duration}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1E90FF] transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <div className="flex gap-1 flex-wrap">
                          {project.tags.slice(0, 2).map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-xs text-[#1E90FF] bg-[#1E90FF]/10 px-2 py-1 rounded font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <motion.div whileHover={{ scale: 1.2, rotate: 45 }} className="text-[#1E90FF] cursor-pointer">
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/portfolio">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#1E90FF] to-[#0066CC] 
               hover:from-[#1E90FF]/90 hover:to-[#0066CC]/90 
               text-white px-10 py-6 rounded-full font-bold text-lg
               group cursor-pointer shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300"
            >
              <span className="mr-2">VIEW ALL PROJECTS</span>
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
