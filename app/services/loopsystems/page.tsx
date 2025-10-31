import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import {
  ArrowLeft,
  Settings,
  Database,
  BarChart3,
  Workflow
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ExpertiseSection from '@/components/expertise-section'
import Image from 'next/image'
import loopsystems from '@/public/servicesimg/4.png'

export default function CustomSoftwarePage() {
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
                <Settings className='w-4 h-4 mr-2' />
                Custom Software Development
              </div>
              <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance'>
                Tailored Solutions That Solve Real Business Problems
              </h1>
              <p className='text-xl text-gray-600 mb-8 text-pretty'>
                Have a unique process or a product idea that doesn't fit the
                mold? We build backend dashboards, CRMs, portals, and SaaS tools
                tailored to your exact needs — with AI embedded where it
                matters.
              </p>
              <Button
                className='bg-blue-600 hover:bg-[#1E90FF] text-white px-8 py-3 text-lg 
             rounded-full font-semibold cursor-pointer 
             transition-all duration-300 hover:shadow-lg hover:shadow-[#1E90FF]/40'
              >
                Build Custom Solution
              </Button>
            </div>
            {/* <div className='relative'>
              <div className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center'>
                <Settings className='w-32 h-32 text-[#1E90FF]' />
              </div>
            </div> */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl h-96 flex items-center overflow-hidden justify-center">
                <Image
                  src={loopsystems}
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
            Custom Software Services
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                icon: <Workflow className='w-8 h-8 text-[#1E90FF]' />,
                title: 'Business Workflow Automation',
                desc: 'Streamline your unique business processes with custom automation tools that integrate with your existing systems.'
              },
              {
                icon: <BarChart3 className='w-8 h-8 text-[#1E90FF]' />,
                title: 'Custom Dashboards',
                desc: 'Real-time analytics and reporting dashboards tailored to your specific KPIs and business metrics.'
              },
              {
                icon: <Settings className='w-8 h-8 text-[#1E90FF]' />,
                title: 'Internal Tools',
                desc: 'Employee portals, inventory management, HR systems, and other internal tools designed for your team.'
              },
              {
                icon: <Database className='w-8 h-8 text-[#1E90FF]' />,
                title: 'API Integrations',
                desc: 'Connect your systems with third-party services, legacy software, and modern cloud platforms.'
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

      {/* Use Cases Section */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Common Use Cases
          </h2>
          <div className='grid lg:grid-cols-3 gap-8'>
            {[
              {
                title: 'Custom CRM Systems',
                desc: 'Tailored customer relationship management with your specific sales process, lead scoring, and reporting needs.',
                features: [
                  'Lead management',
                  'Sales pipeline',
                  'Custom fields',
                  'Automated workflows'
                ]
              },
              {
                title: 'Inventory Management',
                desc: 'Track products, manage suppliers, automate reordering, and integrate with your existing accounting systems.',
                features: [
                  'Stock tracking',
                  'Supplier management',
                  'Auto-reordering',
                  'Barcode scanning'
                ]
              },
              {
                title: 'Employee Portals',
                desc: 'Internal platforms for HR management, time tracking, document sharing, and team collaboration.',
                features: [
                  'Time tracking',
                  'Document management',
                  'Team chat',
                  'Performance reviews'
                ]
              },
              {
                title: 'Financial Dashboards',
                desc: 'Real-time financial reporting, budget tracking, and automated invoice processing with AI insights.',
                features: [
                  'Real-time reporting',
                  'Budget tracking',
                  'Invoice automation',
                  'AI insights'
                ]
              },
              {
                title: 'Project Management Tools',
                desc: 'Custom project tracking with your specific workflow, client portals, and automated reporting.',
                features: [
                  'Project tracking',
                  'Client portals',
                  'Time logging',
                  'Automated reports'
                ]
              },
              {
                title: 'Data Processing Systems',
                desc: 'Automated data collection, processing, and analysis tools with AI-powered insights and predictions.',
                features: [
                  'Data collection',
                  'AI processing',
                  'Predictive analytics',
                  'Custom reports'
                ]
              }
            ].map((useCase, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow'
              >
                <h3 className='font-semibold text-lg mb-3'>{useCase.title}</h3>
                <p className='text-gray-600 mb-4'>{useCase.desc}</p>
                <ul className='space-y-2'>
                  {useCase.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className='flex items-center text-sm text-gray-600'
                    >
                      <div className='w-2 h-2 bg-[#1E90FF] rounded-full mr-3'></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className='py-16 bg-gradient-to-r from-orange-50 to-red-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Our Technology Stack
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                category: 'Frontend',
                techs: ['React', 'Vue.js', 'Angular', 'TypeScript']
              },
              {
                category: 'Backend',
                techs: ['Node.js', 'Python', 'Ruby on Rails', 'PHP']
              },
              {
                category: 'Database',
                techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
              },
              {
                category: 'Cloud',
                techs: ['AWS', 'Google Cloud', 'Azure', 'Vercel']
              }
            ].map((stack, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-xl shadow-sm text-center'
              >
                <h3 className='font-semibold text-lg mb-4'>{stack.category}</h3>
                <ul className='space-y-2'>
                  {stack.techs.map((tech, idx) => (
                    <li key={idx} className='text-gray-600'>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Our Development Process
          </h2>
          <div className='grid md:grid-cols-4 gap-8'>
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'We analyze your current processes and identify automation opportunities'
              },
              {
                step: '02',
                title: 'Design',
                desc: 'Create wireframes and prototypes that match your workflow requirements'
              },
              {
                step: '03',
                title: 'Develop',
                desc: 'Build your custom solution with regular updates and feedback loops'
              },
              {
                step: '04',
                title: 'Deploy',
                desc: 'Launch your system with training, documentation, and ongoing support'
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

      {/* CTA Section */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto text-center px-4'>
          <h2 className='text-3xl font-bold mb-6'>
            Ready to Build Your Custom Solution?
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Let's discuss your unique requirements and build software that
            perfectly fits your business needs.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/consultation'>
              <Button
                className='bg-[#1E90FF] hover:bg-[#1E90FF] text-white px-8 py-3 
               rounded-full font-semibold cursor-pointer 
               transition-all duration-300 hover:shadow-lg hover:shadow-[#1E90FF]/40'
              >
                Start Custom Project
              </Button>
            </Link>

            <Link href='/portfolio'>
              <Button
                variant='outline'
                className='border-[#1E90FF] text-[#1E90FF] px-8 py-3 
               rounded-full font-semibold cursor-pointer bg-transparent 
               transition-all duration-300 hover:bg-[#f0f8ff] hover:shadow-md'
              >
                View Case Studies
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
