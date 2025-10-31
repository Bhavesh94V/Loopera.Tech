import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import {
  ArrowLeft,
  Briefcase,
  DollarSign,
  GraduationCap,
  Factory,
  Bot,
  Brain,
  Cog,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ExpertiseSection from '@/components/expertise-section'
import LoopIntellect from '@/public/servicesimg/6.png'
import Image from 'next/image'


export default function AIAutomationPage() {
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
              <div className='inline-flex items-center bg-[purple-50] text-[#1E90FF] px-4 py-2 rounded-full text-sm font-medium mb-6'>
                <Brain className='w-4 h-4 mr-2' />
                AI Services
              </div>
              <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance'>
                AI Services for Cross-Industry Solutions
              </h1>
              <p className='text-xl text-gray-600 mb-8 text-pretty'>
                This document outlines the AI-based services your company can
                provide across industries, including small businesses, real
                estate, colleges, and industries. These services can be
                showcased on your website and implemented offline for maximum
                profitability.
              </p>
              <Button
                className='bg-[#1E90FF] hover:bg-[#3c9dff] text-white px-8 py-3 text-lg 
             rounded-full font-semibold cursor-pointer 
             transition-all duration-300 hover:shadow-lg hover:shadow-[#1E90FF]/40'
              >
                Explore Our Solutions
              </Button>
            </div>
            {/* <div className='relative'>
              <div className='bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 h-96 flex items-center justify-center'>
                <Bot className='w-32 h-32 text-[#1E90FF]' />
              </div>
            </div> */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl h-96 flex items-center overflow-hidden justify-center">
                <Image
                  src={LoopIntellect}
                  alt="Web Development Illustration"
                  className="object-cover h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Our AI Solutions by Industry
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                icon: <Briefcase className='w-6 h-6 text-[#1E90FF]' />,
                title: 'Small Businesses (Shops, Startups, SMEs)',
                items: [
                  'AI Chatbot Integration (24/7 customer support, WhatsApp/website chatbot)',
                  'Smart Inventory Management (stock alerts, demand prediction)',
                  'Billing & Accounting AI tools (GST-ready invoices, expense tracker)',
                  'AI Digital Marketing (ads optimization, social media post generator)'
                ]
              },
              {
                icon: <Zap className='w-6 h-6 text-[#1E90FF]' />,
                title: 'Real Estate',
                items: [
                  'Property Recommendation System (AI-based search & filter for buyers)',
                  'Virtual Tours (AI + VR)',
                  'Lead Scoring AI (filter best potential buyers)',
                  'Price Prediction Tool (market analysis, resale value prediction)'
                ]
              },
              {
                icon: <GraduationCap className='w-6 h-6 text-[#1E90FF]' />,
                title: 'Colleges / Education',
                items: [
                  'AI Learning Management System (personalized learning, student analytics)',
                  'AI Exam Monitoring / Proctoring',
                  'Automated Attendance & Reports',
                  'Career Counseling AI (skill-based career suggestions)'
                ]
              },
              {
                icon: <Factory className='w-6 h-6 text-[#1E90FF]' />,
                title: 'Industries (Manufacturing / Services)',
                items: [
                  'Predictive Maintenance (AI alerts for machine failures)',
                  'AI Quality Control (defect detection with Vision AI)',
                  'Process Automation (RPA + AI for tasks)'
                ]
              }
            ].map((category, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow'
              >
                <div className='flex items-center mb-4'>
                  <div className='bg-purple-50 w-10 h-10 rounded-full flex items-center justify-center mr-3'>
                    {category.icon}
                  </div>
                  <h3 className='font-semibold text-xl'>{category.title}</h3>
                </div>
                <ul className='list-disc pl-5 text-gray-600 space-y-2'>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            General & Offline Services
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {[
              {
                icon: <Cog className='w-6 h-6 text-[#1E90FF]' />,
                title: 'General / Cross-Industry',
                items: [
                  'AI Data Analytics Dashboard (business insights, reports)',
                  'Voice AI Solutions (voice commands, IVR systems)',
                  'AI Document Processing (OCR, invoice automation, contract analysis)',
                  'AI Security Solutions (CCTV anomaly detection, fraud detection)'
                ]
              },
              {
                icon: <DollarSign className='w-6 h-6 text-[#1E90FF]' />,
                title: 'Offline Services (Profit Model)',
                items: [
                  'Consulting Fees – AI solution planning',
                  'Implementation Fees – System setup, chatbot installation, dashboards',
                  'Subscription Model – Monthly maintenance charges',
                  'Training Workshops – AI workshops & training for colleges/industries',
                  'Customized Projects – Tailor-made solutions for premium clients'
                ]
              }
            ].map((category, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow'
              >
                <div className='flex items-center mb-4'>
                  <div className='bg-purple-50 w-10 h-10 rounded-full flex items-center justify-center mr-3'>
                    {category.icon}
                  </div>
                  <h3 className='font-semibold text-xl'>{category.title}</h3>
                </div>
                <ul className='list-disc pl-5 text-gray-600 space-y-2'>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Removed as per new content, keeping the structure for future use if needed */}
      {/* <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AI Automation?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-purple-600" />,
                title: "Save Time",
                desc: "Automate repetitive tasks and focus on what matters most",
              },
              {
                icon: <Brain className="w-8 h-8 text-purple-600" />,
                title: "Reduce Errors",
                desc: "AI-powered processes eliminate human error and inconsistencies",
              },
              {
                icon: <Cog className="w-8 h-8 text-purple-600" />,
                title: "Scale Efficiently",
                desc: "Handle more work without proportionally increasing costs",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto text-center px-4'>
          <h2 className='text-3xl font-bold mb-6'>
            Ready to Explore Our AI Services?
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Let's discuss how our cross-industry AI solutions can benefit your
            business.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button
                className='bg-[#1E90FF] hover:bg-purple-700 text-white px-8 py-3 
               rounded-full font-semibold cursor-pointer 
               transition-all duration-300 hover:shadow-lg hover:shadow-[#1E90FF]/40'
              >
                Get a Consultation
              </Button>
            </Link>

            <Link href='/portfolio'>
              <Button
                variant='outline'
                className='border-[#1E90FF] text-[#1E90FF] hover:bg-[#f0f8ff] px-8 py-3 
               rounded-full font-semibold cursor-pointer 
               transition-all duration-300 hover:shadow-md'
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
