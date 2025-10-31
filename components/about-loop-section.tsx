'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import looperalogo from '@/public/favicon.ico'

export default function AboutLoopSection () {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const loopSteps = [
    {
      letter: 'L',
      word: 'Learn',
      description: 'Understanding your unique challenges'
    },
    {
      letter: 'O',
      word: 'Optimize',
      description: 'Streamlining processes for efficiency'
    },
    {
      letter: 'O',
      word: 'Operate',
      description: 'Implementing solutions seamlessly'
    },
    {
      letter: 'P',
      word: 'Progress',
      description: 'Continuous improvement and growth'
    }
  ]

  return (
    <section className='py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden'>
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
            What{' '}
            <span className='relative inline-block'>
              <span className='bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent'>
                LOOP
              </span>
              <div className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transform scale-x-0 animate-pulse'></div>
            </span>{' '}
            Stands For
          </h2>

          <p className='text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto font-light'>
            The{' '}
            <span className='font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
              "LOOP"
            </span>{' '}
            represents our systematic approach to digital transformation—a
            continuous cycle of innovation, optimization, and growth.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
          {/* Left side - LOOP letters with dynamic content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            {loopSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center space-x-6 p-6 rounded-2xl transition-all duration-500 ${
                  currentStep === index
                    ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-lg scale-105'
                    : 'bg-white/50 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl transition-all duration-500 ${
                    currentStep === index
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {step.letter}
                </div>
                <div className='flex-1'>
                  <h3
                    className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                      currentStep === index ? 'text-blue-600' : 'text-gray-800'
                    }`}
                  >
                    {step.word}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Enhanced visual element */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className='relative'>
              <div className='w-80 h-80 rounded-full bg-gradient-to-tr from-blue-100 via-white to-cyan-100 flex items-center justify-center shadow-2xl relative overflow-hidden'>
                {/* Animated rings */}
                <div
                  className='absolute inset-4 rounded-full border-2 border-blue-200 animate-spin'
                  style={{ animationDuration: '20s' }}
                ></div>
                <div
                  className='absolute inset-8 rounded-full border-2 border-cyan-200 animate-spin'
                  style={{
                    animationDuration: '15s',
                    animationDirection: 'reverse'
                  }}
                ></div>
                <div
                  className='absolute inset-12 rounded-full border border-blue-100 animate-spin'
                  style={{ animationDuration: '10s' }}
                ></div>

                {/* Center content */}
                <div className='relative z-10 text-center'>
                  <div className=' flex items-center justify-center'>
                    <div className='w-32 h-32 relative'>
                      <Image
                        src={looperalogo}
                        alt='Loopera Logo'
                        fill
                        className='object-contain scale-125'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-1000'></div>
              <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full animate-bounce delay-2000'></div>
              <div className='absolute top-1/2 -left-8 w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-3000'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
