'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Building,
  Heart,
  GraduationCap,
  ShoppingCart,
  Plane,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const industries = [
  {
    id: 'real-estate',
    icon: Building,
    title: 'Real Estate & Construction',
    description:
      'Transform property management, automate lead generation, and streamline construction workflows with AI-powered CRM systems, virtual property tours, and intelligent project management tools.',
    features: [
      'AI-powered property matching',
      'Automated lead qualification',
      'Virtual property tours',
      'Construction project management',
      'Smart contract automation',
      'Market analytics dashboards'
    ],
    technologies: ['React', 'AI/ML', '3D Visualization', 'IoT Integration']
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Healthcare & Social Care',
    description:
      'Revolutionize patient care with intelligent scheduling systems, AI-powered diagnostics support, telemedicine platforms, and comprehensive patient management solutions that prioritize both efficiency and care quality.',
    features: [
      'Intelligent patient scheduling',
      'AI diagnostic support',
      'Telemedicine platforms',
      'Electronic health records',
      'Care coordination systems',
      'Compliance management'
    ],
    technologies: [
      'HIPAA Compliant',
      'AI Diagnostics',
      'Secure APIs',
      'Real-time Data'
    ]
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education & Career',
    description:
      'Enhance learning experiences with personalized AI tutoring systems, career matching platforms, skill assessment tools, and comprehensive learning management systems that adapt to individual needs.',
    features: [
      'Personalized learning paths',
      'AI-powered tutoring',
      'Career matching algorithms',
      'Skill assessment tools',
      'Progress tracking systems',
      'Interactive learning platforms'
    ],
    technologies: [
      'LMS Integration',
      'AI Tutoring',
      'Analytics',
      'Mobile Learning'
    ]
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'Ecommerce & Retail',
    description:
      'Boost sales with intelligent recommendation engines, automated inventory management, personalized shopping experiences, and AI-powered customer service that drives conversion and retention.',
    features: [
      'Smart product recommendations',
      'Automated inventory management',
      'Personalized shopping experiences',
      'AI customer service',
      'Dynamic pricing optimization',
      'Supply chain automation'
    ],
    technologies: [
      'E-commerce Platforms',
      'AI Recommendations',
      'Payment Integration',
      'Analytics'
    ]
  },
  {
    id: 'travel',
    icon: Plane,
    title: 'Tours & Travel',
    description:
      'Create unforgettable travel experiences with AI-powered itinerary planning, smart booking systems, personalized recommendations, and comprehensive travel management platforms.',
    features: [
      'AI itinerary planning',
      'Smart booking systems',
      'Personalized travel recommendations',
      'Real-time travel updates',
      'Expense management',
      'Customer experience optimization'
    ],
    technologies: [
      'Booking APIs',
      'Location Services',
      'AI Planning',
      'Mobile Apps'
    ]
  }
]

export default function IndustriesList () {
  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='space-y-16'>
          {industries.map((industry, index) => (
            <Card
              key={industry.id}
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ${
                  index % 2 === 1 ? 'lg:grid-cols-2' : ''
                }`}
              >
                {/* Content Column */}
                <div className='space-y-6'>
                  <CardHeader className='p-0'>
                    <div className='flex items-center space-x-4 mb-4'>
                      <div className='w-16 h-16 bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                        <industry.icon className='w-8 h-8 text-white' />
                      </div>
                      <CardTitle className='text-2xl font-bold text-gray-900 group-hover:text-[#1E90FF] transition-colors'>
                        {industry.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className='p-0'>
                    <p className='text-gray-600 leading-relaxed mb-6 text-lg'>
                      {industry.description}
                    </p>

                    <div className='mb-6'>
                      <h4 className='font-semibold text-gray-900 mb-3 text-lg'>
                        Technologies We Use:
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {industry.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='px-3 py-1 bg-[#1E90FF]/10 text-[#1E90FF] text-sm rounded-full font-medium'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href='/consultation'>
                      <Button
                        className='bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] 
             text-white px-8 py-4 rounded-full font-semibold 
             cursor-pointer flex items-center justify-center gap-2 
             transition-all duration-300 
             hover:from-[#1E90FF]/90 hover:to-[#6FBFFF]/90 
             hover:shadow-lg hover:shadow-[#1E90FF]/50 group'
                      >
                        Explore Solutions
                        <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                      </Button>
                    </Link>
                  </CardContent>
                </div>

                {/* Features Grid Column */}
                <div className='space-y-4'>
                  <h4 className='text-xl font-semibold text-gray-900 mb-4'>
                    Key Solutions
                  </h4>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {industry.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className='flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-[#1E90FF]/20 hover:shadow-md transition-all duration-300'
                      >
                        <div className='w-2 h-2 bg-[#10B981] rounded-full mt-2 flex-shrink-0'></div>
                        <span className='text-sm text-gray-700 font-medium'>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className='mt-20 text-center'>
          <div className='bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] rounded-2xl p-12'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Don't See Your Industry?
            </h3>
            <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
              We work across all sectors. Let's discuss how we can bring
              AI-powered solutions to your specific industry.
            </p>
            <Button
              size='lg'
              className='bg-white text-[#1E90FF] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full group cursor-pointer'
            >
              Get Custom Solutions
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
