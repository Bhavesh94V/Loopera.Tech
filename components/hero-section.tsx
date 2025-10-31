'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Hero3DBackground } from '@/components/hero-3d-background'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 overflow-hidden'>
      <Hero3DBackground />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center lg:items-start'>
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='space-y-6 pt-5 sm:space-y-8 text-start flex flex-col w-full lg:w-1/2'
          >
            {/* Main Header */}
            <div className='space-y-2 sm:space-y-4'>
              <h1 className='text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mt-16 sm:mt-16 lg:mt-20'>
                <span className='block sm:inline text-black font-semibold'>
                  WE{' '}
                </span>
                <span className='block sm:inline text-blue-500 font-semibold'>
                  DEVELOP
                </span>
                <span className='block text-black font-semibold'>SO YOU </span>
                <span className='block text-blue-500 font-semibold'>
                  LEVEL UP!
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className='text-xl sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-relaxed'>
              We build digital experiences so smooth, even your competitors will
              zoom in to see how you did it.
            </p>

            {/* CTA Button */}
            <div className='pb-4'>
              <Link href='/consultation'>
                <Button
                  size='lg'
                  className='bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white px-6 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-4 text-md sm:text-base md:text-lg lg:text-lg font-normal rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer w-auto'
                >
                  Start Your Project
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className='flex mt-auto items-center justify-center w-full lg:w-1/2'
          >
            <div className='relative w-full h-48 sm:h-64 md:h-80 lg:h-[500px] rounded-2xl overflow-hidden'>
              <Image
                src='servicesimg/1.png'
                alt='Development illustration'
                fill
                className='object-cover'
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
