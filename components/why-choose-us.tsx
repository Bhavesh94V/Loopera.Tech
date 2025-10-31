'use client'

import { useState, useEffect } from 'react'
import { Brain, Palette, Workflow, Layers, Server } from 'lucide-react'
import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI-Native Intelligence',
    description:
      'We build with intelligence at the foundation, embedding AI-driven systems that elevate speed, accuracy, and user experience to the next level.',
    icon: Brain
  },
  {
    title: 'Conversion-Led Design',
    description:
      'Our design philosophy is not just about aesthetics — it’s about intent. Every pixel, flow, and motion is engineered to convert attention into measurable business growth.',
    icon: Palette
  },
  {
    title: 'Process Transparency',
    description:
      "From pricing to timelines, we maintain full visibility at every stage — ensuring you're informed, involved, and in control.",
    icon: Layers
  },
  {
    title: 'Seamless Automation',
    description:
      'We leverage scalable no-code and low-code automation that optimizes operations, eliminates repetitive work, and amplifies productivity.',
    icon: Workflow
  },
  {
    title: 'Trusted, Scalable Stack',
    description:
      'Our tech stack is modular, future-proof, and documented — allowing your platform to evolve seamlessly with your business.',
    icon: Server
  }
]

export default function WhyChooseUs () {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const regularFeatures = features.filter((_, i) => i !== currentIndex)
  const featuredFeature = features[currentIndex]

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          className="mb-12 text-left md:text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            WHY CHOOSE US?
          </h2>
          <h1 className="text-3xl md:text-6xl font-bold text-foreground">
            Why We’re the <span className="text-[#1e90ff]">Smarter Choice</span> for You?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            We create smart, scalable, and high-performing digital solutions built to grow with your business.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Column - Regular Feature Boxes */}
          <div className='lg:col-span-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {regularFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className='relative p-8 rounded-2xl border border-[#1E90FF]/40 bg-white 
                    hover:shadow-lg transition-all duration-300 overflow-hidden group'
                  >
                    {/* Faded Background Icon */}
                    <div className='absolute right-4 bottom-4 opacity-10 text-[#1E90FF]'>
                      <Icon size={120} />
                    </div>

                    {/* Content */}
                    <div className='relative z-10 flex items-start space-x-5'>
                      <div className='flex-shrink-0 text-[#1E90FF]'>
                        <Icon size={36} />
                      </div>
                      <div>
                        <h3 className='text-xl font-bold text-gray-900 mb-2'>
                          {feature.title}
                        </h3>
                        <p className='text-gray-600 leading-relaxed text-[15px]'>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Auto Slider Highlight */}
          <div className='lg:col-span-1'>
            <div
              className='h-full p-8 rounded-2xl border border-[#1E90FF]/40 bg-[#1E90FF]/5 
              text-gray-900 flex flex-col justify-between shadow-md transition-all duration-500 
              relative overflow-hidden'
            >
              {/* Faded Background Icon */}
              <div className='absolute right-6 bottom-6 opacity-10 text-[#1E90FF]'>
                <featuredFeature.icon size={150} />
              </div>

              <div className='relative z-10 flex flex-col justify-between h-full'>
                <div>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full mb-6 bg-[#1E90FF]/10'>
                    <featuredFeature.icon className='w-8 h-8 text-[#1E90FF]' />
                  </div>
                  <h3 className='text-2xl font-bold mb-4 text-gray-900'>
                    {featuredFeature.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed mb-8'>
                    {featuredFeature.description}
                  </p>
                </div>

                <button
                  className='inline-flex items-center justify-center px-6 py-3 
                  bg-[#1E90FF] text-white font-semibold rounded-full 
                  w-full transition-all duration-300 transform 
                  hover:scale-105 hover:shadow-md cursor-pointer gap-2'
                >
                  Start Your Project
                  <span className='ml-2'>→</span>
                </button>
              </div>

              {/* Dots Navigation */}
              <div className='flex justify-center mt-6 space-x-2 relative z-10'>
                {features.map((_, i) => (
                  <span
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      i === currentIndex ? 'bg-[#1E90FF]' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
