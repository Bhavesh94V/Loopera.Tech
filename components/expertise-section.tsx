'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const technologies = {
  'Backend Languages': [
    { name: 'Ruby', img: '/tech-logos/ruby.png' },
    { name: 'Python', img: '/tech-logos/python.png' },
    { name: 'Go', img: '/tech-logos/go.png' },
    { name: 'NodeJS', img: '/tech-logos/nodejs.png' }
  ],
  'Backend Frameworks': [
    { name: 'Ruby on Rails', img: '/tech-logos/rails.png' },
    { name: 'FastAPI', img: '/tech-logos/fastapi.png' },
    { name: 'Django', img: '/tech-logos/django.png' }
  ],
  Frontend: [
    { name: 'ReactJS', img: '/tech-logos/react.png' },
    { name: 'VueJS', img: '/tech-logos/vue.png' },
    { name: 'NextJS', img: '/tech-logos/nextjs.png' }
  ],
  Mobile: [
    { name: 'React Native', img: '/tech-logos/react-native.png' },
    { name: 'Expo', img: '/tech-logos/expo.png' }
  ],
  Databases: [
    { name: 'PostgreSQL', img: '/tech-logos/postgresql.png' },
    { name: 'Redis', img: '/tech-logos/redis.png' },
    { name: 'MongoDB', img: '/tech-logos/mongodb.png' },
    { name: 'MySQL', img: '/tech-logos/mysql.png' }
  ],
  Infrastructure: [
    { name: 'Firebase', img: '/tech-logos/firebase.png' },
    { name: 'Brevo', img: '/tech-logos/brevo.png' },
    { name: 'Prisma', img: '/tech-logos/prisma.png' },
    { name: 'Vercel', img: '/tech-logos/vercel.png' },
    { name: 'Stripe', img: '/tech-logos/stripe.png' },
    { name: 'AWS', img: '/tech-logos/aws.png' },
    { name: 'Google Cloud', img: '/tech-logos/google-cloud.png' },
    { name: 'Docker', img: '/tech-logos/docker.png' }
  ]
}

export default function ExpertiseSection () {
  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            OUR EXPERTISE
          </h2>
          <p className='text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto'>
            We leverage cutting-edge technologies and frameworks to build
            scalable, high-performance solutions tailored to your business
            needs.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className='space-y-12'>
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className='space-y-6'>
              <h3 className='text-xl font-bold text-gray-800 text-left'>
                {category}
              </h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {techs.map(tech => (
                  <div
                    key={tech.name}
                    className='border rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center'
                  >
                    <div className='w-12 h-12 sm:w-16 sm:h-16 relative'>
                      <Image
                        src={tech.img}
                        alt={tech.name}
                        fill
                        className='object-contain'
                        sizes='(max-width: 640px) 3rem, (max-width: 768px) 4rem, 4rem'
                        priority
                      />
                    </div>
                    <span className='text-sm sm:text-base font-semibold mt-2 text-center'>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className='text-center mt-16'>
          <Link href='/consultation'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] 
             hover:from-[#1E90FF]/90 hover:to-[#6FBFFF]/90 
             text-white px-8 py-4 rounded-full font-semibold cursor-pointer 
             flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#1E90FF]/40'
            >
              Get Quote
              <ArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-1' />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
