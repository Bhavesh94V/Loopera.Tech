'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import Image from 'next/image'

interface Testimonial {
  id: number
  quote: string
  rating: number
  clientName: string
  clientTitle: string
  clientCompany: string
  clientImage: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Loopera Tech transformed our operations with smart AI solutions. Their automation and analytics helped us make faster, data-driven decisions.",
    rating: 5,
    clientName: "Arjun K.",
    clientTitle: "Head of Growth",
    clientCompany: "TechNova",
    clientImage:
      "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=2000",
  },
  {
    id: 2,
    quote:
      "We integrated AI workflows seamlessly into our business thanks to Loopera. Their approach is collaborative, efficient, and truly innovative.",
    rating: 4,
    clientName: "Meera S.",
    clientTitle: "Operations Manager",
    clientCompany: "SmartWorks",
    clientImage:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000",
  },
  {
    id: 3,
    quote:
      "Loopera's team built solutions that simplified complex processes. Our productivity improved drastically and we now have more time to focus on growth.",
    rating: 5,
    clientName: "Rohan P.",
    clientTitle: "CTO",
    clientCompany: "NextGen Solutions",
    clientImage:
      "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=2000",
  },
]

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'fill-[#1E90FF] text-[#1E90FF]' : 'text-gray-300'}
      />
    ))}
  </div>
)

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-left md:text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
            TESTIMONIALS
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            What Our <span className="text-[#1E90FF]">Partners</span> Say
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-left md:text-center">
            See how Loopera Tech is transforming businesses with intelligent AI solutions.
          </p>
        </div>


        {/* Featured Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 relative">
          {/* Quote Card */}
          <div className="bg-gradient-to-br from-white via-[#f0f8ff] to-white rounded-3xl p-10 md:p-14 shadow-xl border border-gray-100 relative overflow-hidden flex flex-col justify-center">
            {/* Decorative Large Quote */}
            <div className="absolute top-4 left-4 text-gray-200 text-[8rem] font-serif select-none pointer-events-none -z-10">
              “
            </div>

            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
              {currentTestimonial.quote.split(' ').map((word, i) => {
                // Highlight some keywords dynamically
                const highlightWords = ['Loopera', 'automation', 'analytics', 'AI']
                if (highlightWords.some((hw) => word.includes(hw))) {
                  return (
                    <span key={i} className="font-semibold text-[#1E90FF]">
                      {word}{' '}
                    </span>
                  )
                }
                return word + ' '
              })}
            </p>

            <div className="mb-6">
              <StarRating rating={currentTestimonial.rating} />
            </div>

            {/* Client Info */}
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200">
              <Image
                src={currentTestimonial.clientImage}
                alt={currentTestimonial.clientName}
                width={60}
                height={60}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[#1E90FF]">{currentTestimonial.clientName}</p>
                <p className="text-gray-500 text-sm">
                  {currentTestimonial.clientTitle} at {currentTestimonial.clientCompany}
                </p>
              </div>
            </div>
          </div>

          {/* Image Card */}
          <div className="rounded-3xl overflow-hidden shadow-lg h-80 md:h-auto">
            <Image
              src={currentTestimonial.clientImage}
              alt={currentTestimonial.clientName}
              width={500}
              height={400}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer ${index === currentIndex ? 'ring-2 ring-[#1E90FF]' : ''
                }`}
            >
              {/* Star Rating */}
              <div className="mb-5">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-base leading-relaxed mb-7">{testimonial.quote}</p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.clientImage || '/placeholder.svg'}
                  alt={testimonial.clientName}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#1E90FF] text-sm">{testimonial.clientName}</p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.clientTitle} at {testimonial.clientCompany}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
