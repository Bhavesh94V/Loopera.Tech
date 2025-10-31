'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ServicesCTA () {
  return (
    <section className='py-20 bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-10 left-10 w-20 h-20'>
          <svg
            viewBox='0 0 100 100'
            className='w-full h-full animate-spin-slow'
          >
            <circle
              cx='50'
              cy='50'
              r='40'
              fill='none'
              stroke='white'
              strokeWidth='2'
              strokeDasharray='10,5'
            />
          </svg>
        </div>
        <div className='absolute bottom-10 right-10 w-16 h-16'>
          <svg viewBox='0 0 100 100' className='w-full h-full animate-pulse'>
            <path
              d='M25 50 C25 25, 75 25, 75 50 C75 75, 25 75, 25 50'
              fill='none'
              stroke='white'
              strokeWidth='2'
            />
          </svg>
        </div>
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='space-y-8'>
          <div className='flex justify-center'>
            <Zap className='w-16 h-16 text-white animate-pulse' />
          </div>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight'>
            Let's Build. Automate. Scale.
          </h2>

          <p className='text-xl text-white/90 max-w-2xl mx-auto leading-relaxed'>
            You're building something bold — we bring the code, the
            intelligence, and the momentum to make it real. Partner with
            LOOPERA.tech and launch smarter, faster.
          </p>

          <div className='pt-4'>
            <Link href='/consultation'>
              <Button
                size='lg'
                className='bg-white text-[#1E90FF] hover:bg-gray-100 
             px-8 py-4 text-lg font-semibold rounded-full 
             shadow-lg hover:shadow-xl transition-all duration-300 
             transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer group'
              >
                GET QUOTE
                <ArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-1' />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
