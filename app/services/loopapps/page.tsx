import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ArrowLeft, Smartphone, Zap, Users, Shield } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ExpertiseSection from '@/components/expertise-section'
import LoopApps from '@/public/servicesimg/5.png'
import Image from 'next/image'


export default function MobileAppPage() {
  return (
    <main className='min-h-screen bg-white'>
      <Navigation />

      {/* Hero Section */}
      <section className='pt-32 pb-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <Link
            href='/services'
            className='inline-flex items-center text-[#1E90FF] hover:text-[#1E90FF] mb-8 transition-colors'
          >
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to Services
          </Link>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center bg-blue-50 text-[#1E90FF] px-4 py-2 rounded-full text-sm font-medium mb-6'>
                <Smartphone className='w-4 h-4 mr-2' />
                Mobile App Development
              </div>
              <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance'>
                From Concept to Launch — Fast, Beautiful Apps
              </h1>
              <p className='text-xl text-gray-600 mb-8 text-pretty'>
                We build cross-platform mobile apps (iOS + Android) that are
                scalable, fast, and easy to maintain — whether you need a
                product MVP or a full-fledged app with AI integrations.
              </p>
              <Button
                className='bg-blue-600 hover:bg-[#1E90FF] text-white px-8 py-3 text-lg 
             rounded-full font-semibold cursor-pointer 
             transition-all duration-300 hover:shadow-lg hover:shadow-[#1E90FF]/40'
              >
                Build Your App
              </Button>
            </div>
            {/* <div className='relative'>
              <div className='bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 h-96 flex items-center justify-center'>
                <Smartphone className='w-32 h-32 text-[#1E90FF]' />
              </div>
            </div> */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl h-96 flex items-center overflow-hidden justify-center">
                <Image
                  src={LoopApps}
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
              { name: 'Flutter', desc: 'Cross-platform framework' },
              { name: 'React Native', desc: 'Native performance' },
              { name: 'Firebase', desc: 'Backend services' },
              { name: 'Supabase', desc: 'Open source backend' }
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

      {/* AI Features Section */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            AI-Powered Features
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: 'Voice Interfaces',
                desc: 'Natural language processing for voice commands and interactions'
              },
              {
                title: 'Smart Chat',
                desc: 'Intelligent chatbots that understand context and provide helpful responses'
              },
              {
                title: 'Push Personalization',
                desc: 'AI-driven notifications based on user behavior and preferences'
              },
              {
                title: 'Recommendation Engines',
                desc: 'Smart suggestions that improve user engagement and retention'
              },
              {
                title: 'Auto-Categorization',
                desc: 'Automatically organize content and data using machine learning'
              },
              {
                title: 'Smart Search',
                desc: 'Intelligent search that understands user intent and context'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow'
              >
                <h3 className='font-semibold text-lg mb-3'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className='py-16 bg-gradient-to-r from-blue-50 to-blue-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Types of Apps We Build
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                title: 'E-commerce & Marketplace Apps',
                desc: 'Like Zomato or Uber - complete with payments, tracking, and user management',
                features: [
                  'Real-time tracking',
                  'Payment integration',
                  'Order management',
                  'Chat systems'
                ]
              },
              {
                title: 'Business & Productivity Apps',
                desc: 'Internal tools, CRMs, and workflow management applications',
                features: [
                  'User authentication',
                  'Dashboard analytics',
                  'Team collaboration',
                  'File management'
                ]
              },
              {
                title: 'Social & Community Apps',
                desc: 'Social platforms with feeds, messaging, and user interactions',
                features: [
                  'Social feeds',
                  'Real-time messaging',
                  'User profiles',
                  'Content sharing'
                ]
              },
              {
                title: 'On-Demand Service Apps',
                desc: 'Service booking platforms with provider matching and scheduling',
                features: [
                  'Service booking',
                  'Provider matching',
                  'Calendar integration',
                  'Review system'
                ]
              }
            ].map((appType, index) => (
              <div key={index} className='bg-white p-6 rounded-xl shadow-sm'>
                <h3 className='font-semibold text-xl mb-3'>{appType.title}</h3>
                <p className='text-gray-600 mb-4'>{appType.desc}</p>
                <ul className='space-y-2'>
                  {appType.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className='flex items-center text-sm text-gray-600'
                    >
                      <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Why Choose Our Mobile Development?
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                icon: <Zap className='w-8 h-8 text-[#1E90FF]' />,
                title: 'Fast Development',
                desc: 'Cross-platform approach means faster time to market'
              },
              {
                icon: <Users className='w-8 h-8 text-[#1E90FF]' />,
                title: 'User-Centric Design',
                desc: 'Intuitive interfaces that users love to interact with'
              },
              {
                icon: <Shield className='w-8 h-8 text-[#1E90FF]' />,
                title: 'Scalable Architecture',
                desc: 'Built to handle growth from MVP to millions of users'
              }
            ].map((benefit, index) => (
              <div key={index} className='text-center'>
                <div className='bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                  {benefit.icon}
                </div>
                <h3 className='font-semibold text-xl mb-3'>{benefit.title}</h3>
                <p className='text-gray-600'>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto text-center px-4'>
          <h2 className='text-3xl font-bold mb-6'>Ready to Launch Your App?</h2>
          <p className='text-xl text-gray-600 mb-8'>
            From MVP to full-scale application, we'll help you bring your mobile
            app idea to life.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/consultation'>
              <Button
                className='bg-[#1E90FF] hover:bg-[#1E90FF] text-white px-8 py-3 
               rounded-full font-semibold cursor-pointer 
               transition-all duration-300 hover:shadow-lg hover:shadow-[#1E90FF]/40'
              >
                Start App Development
              </Button>
            </Link>

            <Link href='/portfolio'>
              <Button
                variant='outline'
                className='border-[#1E90FF] text-[#1E90FF] px-8 py-3 
               rounded-full font-semibold cursor-pointer 
               transition-all duration-300 hover:bg-[#f0f8ff] hover:shadow-md'
              >
                View App Portfolio
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
