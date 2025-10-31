// 'use client'

// import type React from 'react'

// import Navigation from '@/components/navigation'
// import Footer from '@/components/footer'
// import { Calendar, Clock, CheckCircle, Phone, Mail, Video } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { useState } from 'react'
// import { IndianRupee } from "lucide-react";

// export default function ConsultationPage () {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     phone: '',
//     projectType: '',
//     budget: '',
//     timeline: '',
//     description: '',
//     preferredTime: '',
//     contactMethod: ''
//   })

//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     try {
//       const response = await fetch('http://localhost:5000/api/consultation', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           fullName: formData.name,
//           email: formData.email,
//           company: formData.company,
//           phone: formData.phone,
//           service: formData.projectType,
//           budget: formData.budget,
//           timeline: formData.timeline,
//           projectDetails: formData.description,
//           callTime: formData.preferredTime,
//           contactMethod: formData.contactMethod
//         })
//       })

//       const data = await response.json()

//       if (data.success) {
//         console.log('✅ Consultation request sent:', data.message)
//         setIsSubmitted(true)
//         setFormData({
//           name: '',
//           email: '',
//           company: '',
//           phone: '',
//           projectType: '',
//           budget: '',
//           timeline: '',
//           description: '',
//           preferredTime: '',
//           contactMethod: ''
//         })
//       } else {
//         alert('❌ Failed to send: ' + data.error)
//       }
//     } catch (error) {
//       console.error('⚠️ Error submitting consultation form:', error)
//       alert('Something went wrong. Please try again later.')
//     }
//   }

//   if (isSubmitted) {
//     return (
//       <main className='min-h-screen bg-white'>
//         <Navigation />
//         <section className='pt-32 pb-16 px-4'>
//           <div className='max-w-2xl mx-auto text-center'>
//             <div className='bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
//               <CheckCircle className='w-10 h-10 text-green-600' />
//             </div>
//             <h1 className='text-3xl font-bold text-gray-900 mb-4'>
//               Thank You!
//             </h1>
//             <p className='text-xl text-gray-600 mb-8'>
//               We've received your consultation request. Our team will get back
//               to you within 24 hours to schedule your free consultation.
//             </p>
//             <div className='bg-blue-50 p-6 rounded-xl mb-8'>
//               <h3 className='font-semibold text-lg mb-3'>What happens next?</h3>
//               <ul className='text-left space-y-2 text-gray-600'>
//                 <li className='flex items-center'>
//                   <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
//                   We'll review your project requirements
//                 </li>
//                 <li className='flex items-center'>
//                   <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
//                   Our team will contact you within 24 hours
//                 </li>
//                 <li className='flex items-center'>
//                   <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
//                   We'll schedule a free 30-minute consultation
//                 </li>
//                 <li className='flex items-center'>
//                   <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
//                   Receive a detailed project proposal
//                 </li>
//               </ul>
//             </div>
//             <Button
//               onClick={() => setIsSubmitted(false)}
//               variant='outline'
//               className='border-blue-600 text-blue-600 hover:bg-blue-50'
//             >
//               Schedule Another Consultation
//             </Button>
//           </div>
//         </section>
//         <Footer />
//       </main>
//     )
//   }

//   return (
//     <main className='min-h-screen bg-white'>
//       <Navigation />

//       {/* Hero Section */}
//       <section className='pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50'>
//         <div className='max-w-4xl mx-auto text-center'>
//           <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance'>
//             Schedule Your Free Consultation
//           </h1>
//           <p className='text-xl text-gray-600 mb-8 text-pretty'>
//             Ready to transform your business with intelligent technology? Let's
//             discuss your project and explore how we can help you achieve your
//             goals.
//           </p>
//           <div className='grid md:grid-cols-3 gap-6 max-w-3xl mx-auto'>
//             {[
//               {
//                 icon: <Calendar className='w-6 h-6 text-blue-600' />,
//                 title: 'Free 30-Min Call',
//                 desc: 'No commitment, just insights'
//               },
//               {
//                 icon: <Clock className='w-6 h-6 text-blue-600' />,
//                 title: 'Quick Response',
//                 desc: "We'll get back within 24 hours"
//               },
//               {
//                 icon: <CheckCircle className='w-6 h-6 text-blue-600' />,
//                 title: 'Custom Proposal',
//                 desc: 'Tailored solution for your needs'
//               }
//             ].map((benefit, index) => (
//               <div key={index} className='bg-white p-4 rounded-xl shadow-sm'>
//                 <div className='bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3'>
//                   {benefit.icon}
//                 </div>
//                 <h3 className='font-semibold mb-2'>{benefit.title}</h3>
//                 <p className='text-sm text-gray-600'>{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Form Section */}
//       <section className='py-16 px-4'>
//         <div className='max-w-7xl mx-auto'>
//           <div className='grid lg:grid-cols-2 gap-12'>
//             {/* Form */}
//             <div className='bg-white p-8 rounded-2xl shadow-lg'>
//               <h2 className='text-2xl font-bold mb-6'>
//                 Tell Us About Your Project
//               </h2>
//               <form onSubmit={handleSubmit} className='space-y-6'>
//                 <div className='grid md:grid-cols-2 gap-4'>
//                   <div>
//                     <label
//                       htmlFor='name'
//                       className='block text-sm font-medium text-gray-700 mb-2'
//                     >
//                       Full Name *
//                     </label>
//                     <input
//                       type='text'
//                       id='name'
//                       name='name'
//                       required
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                       placeholder='Your full name'
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor='email'
//                       className='block text-sm font-medium text-gray-700 mb-2'
//                     >
//                       Email Address *
//                     </label>
//                     <input
//                       type='email'
//                       id='email'
//                       name='email'
//                       required
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                       placeholder='name@company.com'
//                     />
//                   </div>
//                 </div>

//                 <div className='grid md:grid-cols-2 gap-4'>
//                   <div>
//                     <label
//                       htmlFor='company'
//                       className='block text-sm font-medium text-gray-700 mb-2'
//                     >
//                       Company / Brand Name
//                     </label>
//                     <input
//                       type='text'
//                       id='company'
//                       name='company'
//                       value={formData.company}
//                       onChange={handleInputChange}
//                       className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                       placeholder='Your company name'
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor='phone'
//                       className='block text-sm font-medium text-gray-700 mb-2'
//                     >
//                       Phone Number
//                     </label>
//                     <input
//                       type='tel'
//                       id='phone'
//                       name='phone'
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                       placeholder='+1 (555) 123-4567'
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor='projectType'
//                     className='block text-sm font-medium text-gray-700 mb-2'
//                   >
//                     What do you need help with? *
//                   </label>
//                   <select
//                     id='projectType'
//                     name='projectType'
//                     required
//                     value={formData.projectType}
//                     onChange={handleInputChange}
//                     className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                   >
//                     <option value=''>Select a service</option>
//                     <option value='web-development'>Web Development</option>
//                     <option value='ai-automation'>AI Automation</option>
//                     <option value='mobile-app'>Mobile App Development</option>
//                     <option value='custom-software'>
//                       Custom Software Development
//                     </option>
//                     <option value='creative-design'>
//                       Creative Design & Branding
//                     </option>
//                     <option value='multiple'>Multiple Services</option>
//                     <option value='not-sure'>Not sure - need guidance</option>
//                   </select>
//                 </div>

//                 <div className='grid md:grid-cols-2 gap-4'>
//                   <div>
//                     <label
//                       htmlFor='budget'
//                       className='block text-sm font-medium text-gray-700 mb-2'
//                     >
//                       Project Budget Range
//                     </label>
//                     <select
//                       id='budget'
//                       name='budget'
//                       value={formData.budget}
//                       onChange={handleInputChange}
//                       className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                     >
//                       <option value=''>Select budget range</option>
//                       <option value='under-10k'>Under ₹10,000</option>
//                       <option value='10k-25k'>₹10,000 - ₹25,000</option>
//                       <option value='25k-50k'>₹25,000 - ₹50,000</option>
//                       <option value='50k-100k'>₹50,000 - ₹100,000</option>
//                       <option value='over-100k'>Over ₹100,000</option>
//                       <option value='discuss'>Let's discuss</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label
//                       htmlFor='timeline'
//                       className='block text-sm font-medium text-gray-700 mb-2'
//                     >
//                       Preferred Timeline
//                     </label>
//                     <select
//                       id='timeline'
//                       name='timeline'
//                       value={formData.timeline}
//                       onChange={handleInputChange}
//                       className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                     >
//                       <option value=''>Select timeline</option>
//                       <option value='asap'>ASAP (Rush project)</option>
//                       <option value='1-2-months'>1-2 months</option>
//                       <option value='3-4-months'>3-4 months</option>
//                       <option value='5-6-months'>5-6 months</option>
//                       <option value='flexible'>Flexible timeline</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor='description'
//                     className='block text-sm font-medium text-gray-700 mb-2'
//                   >
//                     Tell us more about your project *
//                   </label>
//                   <textarea
//                     id='description'
//                     name='description'
//                     required
//                     rows={4}
//                     value={formData.description}
//                     onChange={handleInputChange}
//                     className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                     placeholder='Brief description of your project, goals, challenges, or any specific requirements...'
//                   />
//                 </div>

//                 <div className='grid md:grid-cols-2 gap-4'>
//                   <div>
//                     <label
//                       htmlFor='preferredTime'
//                       className='block text-sm font-medium text-gray-700 mb-2'
//                     >
//                       Preferred Call Time
//                     </label>
//                     <select
//                       id='preferredTime'
//                       name='preferredTime'
//                       value={formData.preferredTime}
//                       onChange={handleInputChange}
//                       className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                     >
//                       <option value=''>Select preferred time</option>
//                       <option value='morning'>Morning (9 AM - 12 PM)</option>
//                       <option value='afternoon'>
//                         Afternoon (12 PM - 5 PM)
//                       </option>
//                       <option value='evening'>Evening (5 PM - 8 PM)</option>
//                       <option value='flexible'>I'm flexible</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label
//                       htmlFor='contactMethod'
//                       className='block text-sm font-medium text-gray-700 mb-2'
//                     >
//                       Preferred Contact Method *
//                     </label>
//                     <select
//                       id='contactMethod'
//                       name='contactMethod'
//                       required
//                       value={formData.contactMethod}
//                       onChange={handleInputChange}
//                       className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                     >
//                       <option value=''>Select contact method</option>
//                       <option value='zoom'>Zoom / Google Meet</option>
//                       <option value='phone'>Phone Call</option>
//                       <option value='whatsapp'>WhatsApp</option>
//                       <option value='email'>Email First</option>
//                     </select>
//                   </div>
//                 </div>

//                 <Button
//                   type='submit'
//                   className='w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg cursor-pointer'
//                 >
//                   Schedule Free Consultation →
//                 </Button>

//                 <p className='text-sm text-gray-500 text-center'>
//                   By submitting this form, you agree to our privacy policy.
//                   We'll never share your information.
//                 </p>
//               </form>
//             </div>

//             {/* Info Sidebar */}
//             <div className='space-y-8'>
//               <div className='bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl'>
//                 <h3 className='text-xl font-bold mb-4'>What to Expect</h3>
//                 <ul className='space-y-4'>
//                   {[
//                     {
//                       title: 'Project Discovery',
//                       desc: "We'll discuss your goals, challenges, and vision in detail"
//                     },
//                     {
//                       title: 'Technical Assessment',
//                       desc: 'Our experts will evaluate the best approach for your needs'
//                     },
//                     {
//                       title: 'Custom Proposal',
//                       desc: 'Receive a detailed proposal with timeline and pricing'
//                     },
//                     {
//                       title: 'Next Steps',
//                       desc: 'Clear roadmap to get your project started'
//                     }
//                   ].map((item, index) => (
//                     <li key={index} className='flex items-start'>
//                       <div className='bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5'>
//                         {index + 1}
//                       </div>
//                       <div>
//                         <h4 className='font-semibold text-gray-900'>
//                           {item.title}
//                         </h4>
//                         <p className='text-gray-600 text-sm'>{item.desc}</p>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className='bg-white p-6 rounded-xl shadow-sm border'>
//                 <h3 className='font-bold mb-4'>Contact Information</h3>
//                 <div className='space-y-3'>
//                   <div className='flex items-center'>
//                     <Mail className='w-5 h-5 text-blue-600 mr-3' />
//                     <span className='text-gray-600'>hello@loopera.tech</span>
//                   </div>
//                   <div className='flex items-center'>
//                     <Phone className='w-5 h-5 text-blue-600 mr-3' />
//                     <span className='text-gray-600'>+1 (555) 123-4567</span>
//                   </div>
//                   <div className='flex items-center'>
//                     <Video className='w-5 h-5 text-blue-600 mr-3' />
//                     <span className='text-gray-600'>
//                       Available for video calls
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className='bg-green-50 p-6 rounded-xl'>
//                 <h3 className='font-bold text-green-800 mb-2'>
//                   Free Consultation Includes:
//                 </h3>
//                 <ul className='space-y-2 text-green-700'>
//                   <li className='flex items-center'>
//                     <CheckCircle className='w-4 h-4 mr-2' />
//                     Project feasibility assessment
//                   </li>
//                   <li className='flex items-center'>
//                     <CheckCircle className='w-4 h-4 mr-2' />
//                     Technology recommendations
//                   </li>
//                   <li className='flex items-center'>
//                     <CheckCircle className='w-4 h-4 mr-2' />
//                     Timeline and budget estimates
//                   </li>
//                   <li className='flex items-center'>
//                     <CheckCircle className='w-4 h-4 mr-2' />
//                     Next steps roadmap
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }













"use client"

import type React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, Clock, CheckCircle, Phone, Mail, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitConsultation, resetConsultation } from "@/components/redux/actions/consultationActions"

export default function ConsultationPage() {
  const dispatch = useDispatch()
  const { loading, success, error } = useSelector((state: any) => state.consultation)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    preferredTime: "",
    contactMethod: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(submitConsultation(formData) as any)
  }

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          projectType: "",
          budget: "",
          timeline: "",
          description: "",
          preferredTime: "",
          contactMethod: "",
        })
        dispatch(resetConsultation() as any)
      }, 2000)
    }
  }, [success, dispatch])

  if (success) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8">
              We've received your consultation request. Our team will get back to you within 24 hours to schedule your
              free consultation.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="font-semibold text-lg mb-3">What happens next?</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  We'll review your project requirements
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Our team will contact you within 24 hours
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  We'll schedule a free 30-minute consultation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Receive a detailed project proposal
                </li>
              </ul>
            </div>
            <Button
              onClick={() => dispatch(resetConsultation() as any)}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Schedule Another Consultation
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Schedule Your Free Consultation
          </h1>
          <p className="text-xl text-gray-600 mb-8 text-pretty">
            Ready to transform your business with intelligent technology? Let's discuss your project and explore how we
            can help you achieve your goals.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: <Calendar className="w-6 h-6 text-blue-600" />,
                title: "Free 30-Min Call",
                desc: "No commitment, just insights",
              },
              {
                icon: <Clock className="w-6 h-6 text-blue-600" />,
                title: "Quick Response",
                desc: "We'll get back within 24 hours",
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                title: "Custom Proposal",
                desc: "Tailored solution for your needs",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Tell Us About Your Project</h2>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">{error}</div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    What do you need help with? *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="custom-software">Custom Software Development</option>
                    <option value="creative-design">Creative Design & Branding</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="not-sure">Not sure - need guidance</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under ₹10,000</option>
                      <option value="10k-25k">₹10,000 - ₹25,000</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹100,000</option>
                      <option value="over-100k">Over ₹100,000</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush project)</option>
                      <option value="1-2-months">1-2 months</option>
                      <option value="3-4-months">3-4 months</option>
                      <option value="5-6-months">5-6 months</option>
                      <option value="flexible">Flexible timeline</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us more about your project *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief description of your project, goals, challenges, or any specific requirements..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Call Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                      <option value="flexible">I'm flexible</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method *
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      required
                      value={formData.contactMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select contact method</option>
                      <option value="zoom">Zoom / Google Meet</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="email">Email First</option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg cursor-pointer disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Schedule Free Consultation →"}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Project Discovery",
                      desc: "We'll discuss your goals, challenges, and vision in detail",
                    },
                    {
                      title: "Technical Assessment",
                      desc: "Our experts will evaluate the best approach for your needs",
                    },
                    {
                      title: "Custom Proposal",
                      desc: "Receive a detailed proposal with timeline and pricing",
                    },
                    {
                      title: "Next Steps",
                      desc: "Clear roadmap to get your project started",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="font-bold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-600">hello@loopera.tech</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Video className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-600">Available for video calls</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-bold text-green-800 mb-2">Free Consultation Includes:</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Project feasibility assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Technology recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Timeline and budget estimates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Next steps roadmap
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
