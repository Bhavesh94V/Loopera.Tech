import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import {
  ArrowLeft,
  CheckCircle,
  Code,
  Globe,
  Smartphone,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ExpertiseSection from '@/components/expertise-section'
import loopsiteImg from '@/public/servicesimg/3.png'
import Image from "next/image";

export default function WebDevelopmentPage() {
  return (
    <main className='min-h-screen bg-white'>
      <Navigation />

      {/* Hero Section */}
      <section className='pt-32 pb-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <Link
            href='/services'
            className='inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors'
          >
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to Services
          </Link>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6'>
                <Globe className='w-4 h-4 mr-2' />
                Web Development
              </div>
              <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance'>
                Modern, Responsive & AI-Enhanced Websites
              </h1>
              <p className='text-xl text-gray-600 mb-8 text-pretty'>
                Whether you're a startup or an established brand, we create
                lightning-fast, SEO-optimized websites with stunning design and
                intelligent functionality — including AI-powered forms, smart
                recommendations, and chatbot integrations.
              </p>
              <Button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/40'>
                Get Quote for Web Development
              </Button>
            </div>
            {/* <div className='relative'>
              <div className='bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-96 flex items-center justify-center'>
                <Code className='w-32 h-32 text-blue-600' />
              </div>
            </div> */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl h-96 flex items-center overflow-hidden justify-center">
                <Image
                  src={loopsiteImg}
                  alt="Web Development Illustration"
                  className="object-cover h-full"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      

      {/* Technologies Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Technologies We Use
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              { name: 'React', desc: 'Modern UI library' },
              { name: 'Next.js', desc: 'Full-stack framework' },
              { name: 'WordPress', desc: 'Content management' },
              { name: 'TailwindCSS', desc: 'Utility-first CSS' }
            ].map((tech, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow'
              >
                <h3 className='font-semibold text-lg mb-2'>{tech.name}</h3>
                <p className='text-gray-600'>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>What You Get</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                icon: <Zap className='w-8 h-8 text-blue-600' />,
                title: 'Lightning Fast Performance',
                desc: 'Optimized for speed with modern frameworks and best practices'
              },
              {
                icon: <Smartphone className='w-8 h-8 text-blue-600' />,
                title: 'Mobile-First Design',
                desc: 'Responsive layouts that work perfectly on all devices'
              },
              {
                icon: <CheckCircle className='w-8 h-8 text-blue-600' />,
                title: 'SEO Optimized',
                desc: 'Built with search engine optimization in mind from day one'
              }
            ].map((feature, index) => (
              <div key={index} className='text-center'>
                <div className='bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                  {feature.icon}
                </div>
                <h3 className='font-semibold text-xl mb-3'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Add-ons Section */}
      <section className='py-16 bg-gradient-to-r from-blue-50 to-purple-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            AI-Powered Add-ons
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                title: 'AI Chatbot Integration',
                desc: 'Smart customer support that learns and improves over time'
              },
              {
                title: 'Voice Search',
                desc: 'Enable users to search your site using voice commands'
              },
              {
                title: 'Dynamic Content',
                desc: 'Personalized content that adapts to user behavior'
              }
            ].map((addon, index) => (
              <div key={index} className='bg-white p-6 rounded-xl shadow-sm'>
                <h3 className='font-semibold text-lg mb-3'>{addon.title}</h3>
                <p className='text-gray-600'>{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto text-center px-4'>
          <h2 className='text-3xl font-bold mb-6'>
            Ready to Build Your Website?
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Let's create a website that not only looks great but drives results
            for your business.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/consultation'>
              <Button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/40 cursor-pointer'>
                Start Your Project
              </Button>
            </Link>

            <Link href='/portfolio'>
              <Button
                variant='outline'
                className='border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-md cursor-pointer'
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <ExpertiseSection />
      <Footer />
    </main>
  )
}
