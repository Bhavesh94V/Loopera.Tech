import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ArrowLeft, Palette, Eye, Layers, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ExpertiseSection from '@/components/expertise-section'
import loopdesign from '@/public/servicesimg/7.png'
import Image from 'next/image'


export default function CreativeDesignPage() {
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
                <Palette className='w-4 h-4 mr-2' />
                Creative Designing
              </div>
              <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance'>
                Where Aesthetics Meet Performance
              </h1>
              <p className='text-xl text-gray-600 mb-8 text-pretty'>
                We don't just design pretty interfaces — we design experiences
                that convert. From brand identity to UI/UX for your website or
                app, our design-first approach keeps both humans and algorithms
                happy.
              </p>
              <Button
                className='bg-blue-600 hover:bg-[#1E90FF] text-white px-8 py-3 text-lg 
             rounded-full font-semibold cursor-pointer 
             transition-all duration-300 hover:shadow-lg hover:shadow-[#1E90FF]/40'
              >
                Start Design Project
              </Button>
            </div>
            {/* <div className='relative'>
              <div className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center'>
                <Palette className='w-32 h-32 text-[#1E90FF]' />
              </div>
            </div> */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl h-96 flex items-center overflow-hidden justify-center">
                <Image
                  src={loopdesign}
                  alt="Web Development Illustration"
                  className="object-cover h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            What We Offer
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                icon: <Sparkles className='w-8 h-8 text-[#1E90FF]' />,
                title: 'Brand & Logo Design',
                desc: 'Complete brand identity including logo, color palette, typography, and brand guidelines that make you memorable.'
              },
              {
                icon: <Eye className='w-8 h-8 text-[#1E90FF]' />,
                title: 'UI/UX for Web & Mobile',
                desc: 'User-centered design that focuses on conversion, engagement, and seamless user experiences across all devices.'
              },
              {
                icon: <Layers className='w-8 h-8 text-[#1E90FF]' />,
                title: 'Motion Graphics & AI Visuals',
                desc: 'Animated graphics, micro-interactions, and AI-generated visuals that bring your brand to life.'
              },
              {
                icon: <Palette className='w-8 h-8 text-[#1E90FF]' />,
                title: 'Design Systems + Prototyping',
                desc: 'Comprehensive design systems and interactive prototypes that ensure consistency and streamline development.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow'
              >
                <div className='bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  {service.icon}
                </div>
                <h3 className='font-semibold text-lg mb-3'>{service.title}</h3>
                <p className='text-gray-600'>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Our Design Process
          </h2>
          <div className='grid md:grid-cols-4 gap-8'>
            {[
              {
                step: '01',
                title: 'Research',
                desc: 'Understanding your brand, audience, and competitive landscape'
              },
              {
                step: '02',
                title: 'Concept',
                desc: 'Creating initial concepts and exploring different design directions'
              },
              {
                step: '03',
                title: 'Design',
                desc: 'Developing high-fidelity designs with attention to every detail'
              },
              {
                step: '04',
                title: 'Refine',
                desc: 'Iterating based on feedback and testing for optimal results'
              }
            ].map((process, index) => (
              <div key={index} className='text-center'>
                <div className='bg-blue-100 text-[#1E90FF] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold'>
                  {process.step}
                </div>
                <h3 className='font-semibold text-lg mb-3'>{process.title}</h3>
                <p className='text-gray-600'>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Types */}
      <section className='py-16 bg-gradient-to-r from-pink-50 to-purple-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Types of Design Projects
          </h2>
          <div className='grid lg:grid-cols-3 gap-8'>
            {[
              {
                title: 'Brand Identity Design',
                desc: 'Complete brand packages including logo, colors, fonts, and brand guidelines',
                deliverables: [
                  'Logo variations',
                  'Color palette',
                  'Typography guide',
                  'Brand guidelines',
                  'Business card design',
                  'Social media templates'
                ]
              },
              {
                title: 'Website UI/UX Design',
                desc: 'Conversion-focused web design that balances aesthetics with user experience',
                deliverables: [
                  'User research',
                  'Wireframes',
                  'High-fidelity mockups',
                  'Interactive prototypes',
                  'Responsive designs',
                  'Style guide'
                ]
              },
              {
                title: 'Mobile App Design',
                desc: 'Native mobile app interfaces optimized for touch interactions and platform guidelines',
                deliverables: [
                  'User flow diagrams',
                  'App wireframes',
                  'UI mockups',
                  'Interactive prototypes',
                  'Icon design',
                  'App store assets'
                ]
              }
            ].map((designType, index) => (
              <div key={index} className='bg-white p-6 rounded-xl shadow-sm'>
                <h3 className='font-semibold text-xl mb-3'>
                  {designType.title}
                </h3>
                <p className='text-gray-600 mb-4'>{designType.desc}</p>
                <h4 className='font-medium mb-3'>Deliverables:</h4>
                <ul className='space-y-2'>
                  {designType.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className='flex items-center text-sm text-gray-600'
                    >
                      <div className='w-2 h-2 bg-[#1E90FF] rounded-full mr-3'></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Our Design Principles
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                title: 'User-Centered',
                desc: 'Every design decision is made with the end user in mind, ensuring intuitive and enjoyable experiences.'
              },
              {
                title: 'Conversion-Focused',
                desc: 'Beautiful designs that drive results - from increased engagement to higher conversion rates.'
              },
              {
                title: 'Brand-Consistent',
                desc: 'Designs that strengthen your brand identity and create memorable experiences across all touchpoints.'
              },
              {
                title: 'Performance-Optimized',
                desc: 'Designs that look great and load fast, optimized for both user experience and search engines.'
              },
              {
                title: 'Accessibility-First',
                desc: 'Inclusive designs that work for everyone, meeting WCAG guidelines and best practices.'
              },
              {
                title: 'Future-Proof',
                desc: 'Scalable design systems that grow with your business and adapt to new technologies.'
              }
            ].map((principle, index) => (
              <div key={index} className='text-center'>
                <h3 className='font-semibold text-lg mb-3'>
                  {principle.title}
                </h3>
                <p className='text-gray-600'>{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto text-center px-4'>
          <h2 className='text-3xl font-bold mb-6'>
            Ready to Create Something Beautiful?
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Let's design experiences that not only look amazing but drive real
            business results.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/consultation'>
              <Button
                className='bg-[#1E90FF] hover:bg-[#1E90FF] text-white px-8 py-3 
               rounded-full font-semibold cursor-pointer 
               transition-all duration-300 hover:shadow-lg hover:shadow-[#1E90FF]/40'
              >
                Start Design Project
              </Button>
            </Link>

            <Link href='/portfolio'>
              <Button
                variant='outline'
                className='border-[#1E90FF] text-[#1E90FF] px-8 py-3 
               rounded-full font-semibold cursor-pointer bg-transparent 
               transition-all duration-300 hover:bg-[#f0f8ff] hover:shadow-md'
              >
                View Design Portfolio
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
