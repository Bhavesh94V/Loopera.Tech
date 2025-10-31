'use client'

import { useState } from 'react'
import { ArrowRight, MoveRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion';

interface Service {
  id: string
  number: string
  mainhead: string
  title: string
  description: string
  image: string
  slug: string
}

const services: Service[] = [
  {
    id: '1',
    number: '01',
    mainhead: 'LoopSites:',
    title: 'Web Development',
    description:
      `From landing pages to full-scale digital
ecosystems — we build lightning- fast,
  scalable, and design - forward websites that
turn browsers into believers.
`,
    image:
      'servicesimg/3.png',
    slug: 'web-development'
  },
  {
    id: '2',
    number: '02',
    mainhead: 'LoopSystems:',
    title: 'Software Development',
    description:
      `We build future-ready software, engineered
for performance, scalability, and precision.
From SaaS platforms to enterprise solutions,
every line of code is crafted to empower your
business with speed, intelligence, and
seamless user experience.
`,
    image:
      'servicesimg/4.png',
    slug: 'custom-software'
  },
  {
    id: '3',
    number: '03',
    mainhead: 'LoopApps:',
    title: 'Mobile Application',
    description:
      `We design and develop intuitive applications
that blend technology with purpose.
From mobile to web, our apps deliver
exceptional performance, intelligent UX, and
measurable business impact, built to scale
effortlessly with your growth.
`,
    image:
      'servicesimg/5.png',
    slug: 'mobile-app'
  },
  {
    id: '4',
    number: '04',
    mainhead: 'LoopIntellect:',
    title: 'AI Automation & Integration',
    description:
      `We bring the power of automation and
artificial intelligence to your workflow — saving
hours, reducing costs, and unlocking smarter
business decisions.`,
    image:
      'servicesimg/6.png',
    slug: 'ai-automation'
  },
  {
    id: '5',
    number: '05',
    mainhead: 'LoopDesigns:',
    title: 'Creative Designing',
    description:
      `We craft brands that stand out and interfaces
that feel effortless. Every visual and interaction
is built to evoke emotion and drive
connection.
`,
    image:
      'servicesimg/7.png',
    slug: 'creative-design'
  }
]

export default function ServiceSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className='w-full py-12 md:py-24 px-4 bg-background'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-20 text-left md:text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
            OUR SERVICES
          </h2>
          <h1 className="text-3xl md:text-6xl font-bold text-foreground">
            What We Do <span className="text-[#1e90ff]">BEST</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            We deliver cutting-edge websites, apps, and AI-driven solutions designed to help your business grow fast and scale smart.
          </p>
        </motion.div>

        <div className='flex items-center justify-center mb-15 overflow-hidden h-60'>
          <img className='rounded-2xl h-full w-full object-cover' src="servicesimg/2.png" alt="" />
        </div>

        {/* Services List */}
        <div className='space-y-6 md:space-y-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className='group block rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50'
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
                delay: index * 0.15, // stagger effect
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Mobile Layout */}
              <div className='md:hidden bg-[#1e90ff]'>
                <div className='p-8 text-primary-foreground'>
                  <div className='text-5xl font-bold mb-4 opacity-90'>
                    {service.number}
                  </div>
                  <h3 className='text-2xl font-bold'>{service.mainhead}</h3>
                  <h3 className='text-2xl font-bold mb-4'>{service.title}</h3>
                  <p className='text-primary-foreground/90 leading-relaxed mb-6 text-sm'>
                    {service.description}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className='inline-flex p-1 items-center gap-0 bg-primary-foreground rounded-full transition-transform duration-300 self-start'
                  >
                    <span className='text-[#1e90ff] font-normal text-md tracking-wide px-4 py-3 sm:px-8 sm:pr-4'>
                      Learn More
                    </span>
                    <div className='w-20 h-12 sm:w-20 sm:h-12 rounded-[50px] border-[3px] border-[#1e90ff] flex items-center justify-center'>
                      <p className='text-[#1e90ff] font-semibold scale-200'>→</p>
                    </div>
                  </Link>
                </div>

                <div className='relative h-64 overflow-hidden bg-primary-foreground/10'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Desktop Layout */}
              <div className='hidden md:flex bg-[#1e90ff]'>
                <div className={`flex w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className='relative w-2/5 h-full overflow-hidden bg-primary-foreground/10'>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className='flex-1 p-12 flex flex-col justify-center text-primary-foreground'>
                    <div className='text-6xl font-bold mb-4 opacity-20'>
                      {service.number}
                    </div>
                    <h3 className='text-4xl font-bold'>{service.mainhead}</h3>
                    <h3 className='text-4xl font-bold mb-4'>{service.title}</h3>
                    <p className='text-primary-foreground/90 leading-relaxed mb-8'>
                      {service.description}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      className='flex p-1 items-center gap-0 bg-primary-foreground rounded-full transition-transform duration-300 self-start'
                    >
                      <span className='text-[#1e90ff] font-normal text-md tracking-wide px-4 py-3 sm:px-8 sm:pr-4'>
                        Learn More
                      </span>
                      <div className='w-20 h-12 sm:w-20 sm:h-12 rounded-[60px] border-[3px] border-[#1e90ff] flex items-center justify-center'>
                        <p className='text-[#1e90ff] font-bold scale-150'>→</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* View All Services Link */}
        <div className='mt-12 text-center'>
          <Link
            href='/services'
            className='inline-flex items-center gap-3 bg-[#1e90ff] text-white font-semibold text-lg px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300'
          >
            View All Services
            <ArrowRight className='w-5 h-5' />
          </Link>
        </div>
      </div>
    </section>
  )
}















// export default function ServiceSection() {
//   const [hoveredId, setHoveredId] = useState<string | null>(null)

//   return (
//     <section className='w-full py-12 md:py-24 px-4 bg-background'>
//       <div className='max-w-7xl mx-auto'>
//         {/* Header */}
//         <motion.div
//           className="mb-12 md:mb-20 text-left md:text-center"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
//             OUR SERVICES
//           </h2>
//           <h1 className="text-3xl md:text-6xl font-bold text-foreground">
//             What We Do <span className="text-[#1e90ff]">BEST</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
//             We deliver cutting-edge websites, apps, and AI-driven solutions designed to help your business grow fast and scale smart.
//           </p>
//         </motion.div>

//         <div className='flex items-center justify-center mb-15 overflow-hidden h-60'>
//           <img className='rounded-2xl h-full w-full object-cover' src="servicesimg/2.png" alt="" />
//         </div>

//         {/* Services List */}
//         <div className='space-y-6 md:space-y-8'>
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               onMouseEnter={() => setHoveredId(service.id)}
//               onMouseLeave={() => setHoveredId(null)}
//               className='group block rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50'
//             >
//               {/* Mobile Layout */}
//               <div className='md:hidden bg-[#1e90ff]'>
//                 <div className='p-8 text-primary-foreground'>
//                   <div className='text-5xl font-bold mb-4 opacity-90'>
//                     {service.number}
//                   </div>
//                   <h3 className='text-2xl font-bold'>{service.mainhead}</h3>
//                   <h3 className='text-2xl font-bold mb-4'>{service.title}</h3>
//                   <p className='text-primary-foreground/90 leading-relaxed mb-6 text-sm'>
//                     {service.description}
//                   </p>

//                   {/* Learn More Button (clickable only) */}
//                   <Link
//                     href={`/services/${service.slug}`}
//                     className='inline-flex p-1 items-center gap-0 bg-primary-foreground rounded-full overflow-visible transition-transform duration-300 group-hover:translate-x-2 self-start'
//                   >
//                     <span className='text-[#1e90ff] font-normal text-md tracking-wide px-4 py-3 sm:px-8 sm:pr-4'>
//                       Learn More
//                     </span>
//                     <div className='w-20 h-12 sm:w-20 sm:h-12 rounded-[50px] border-[3px] border-[#1e90ff] flex items-center justify-center'>
//                       <p className='text-[#1e90ff] font-semibold scale-200'>→</p>
//                     </div>
//                   </Link>
//                 </div>

//                 <div className='relative h-64 overflow-hidden bg-primary-foreground/10'>
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className={`w-full h-full object-cover transition-all duration-500 ${hoveredId === service.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//                       }`}
//                   />
//                   <div
//                     className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hoveredId === service.id ? 'opacity-0' : 'opacity-100'
//                       }`}
//                   >
//                     <div className='w-20 h-20 rounded-full border-4 border-primary-foreground/30 flex items-center justify-center'>
//                       <ArrowRight className='w-10 h-10 text-primary-foreground/50' />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Desktop Layout */}
//               <div className='hidden md:flex bg-[#1e90ff]'>
//                 <div
//                   className={`flex w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
//                     }`}
//                 >
//                   <div className='relative w-2/5 h-full overflow-hidden bg-primary-foreground/10'>
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className={`w-full h-full object-cover transition-all duration-500 ${hoveredId === service.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//                         }`}
//                     />
//                     <div
//                       className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hoveredId === service.id ? 'opacity-0' : 'opacity-100'
//                         }`}
//                     >
//                       <div className='w-20 h-20 rounded-full border-4 border-primary-foreground/30 flex items-center justify-center'>
//                         <ArrowRight className='w-10 h-10 text-primary-foreground/50' />
//                       </div>
//                     </div>
//                   </div>

//                   <div className='flex-1 p-12 flex flex-col justify-center text-primary-foreground'>
//                     <div className='text-6xl font-bold mb-4 opacity-20'>
//                       {service.number}
//                     </div>
//                     <h3 className='text-4xl font-bold transition-colors duration-300'>
//                       {service.mainhead}
//                     </h3>
//                     <h3 className='text-4xl font-bold mb-4 transition-colors duration-300'>
//                       {service.title}
//                     </h3>
//                     <p className='text-primary-foreground/90 leading-relaxed mb-8'>
//                       {service.description}
//                     </p>

//                     {/* Learn More Button (clickable only) */}
//                     <Link
//                       href={`/services/${service.slug}`}
//                       className='flex p-1 items-center gap-0 bg-primary-foreground rounded-full overflow-visible transition-transform duration-300 group-hover:translate-x-2 self-start'
//                     >
//                       <span className='text-[#1e90ff] font-normal text-md tracking-wide px-4 py-3 sm:px-8 sm:pr-4'>
//                         Learn More
//                       </span>
//                       <div className='w-20 h-12 overflow-hidden sm:w-20 sm:h-12 rounded-[60px] border-[3px] border-[#1e90ff] flex items-center justify-center'>
//                         <p className='text-[#1e90ff] font-bold scale-150'>→</p>
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//         </div>

//         {/* View All Services Link */}
//         <div className='mt-12 text-center'>
//           <Link
//             href='/services'
//             className='inline-flex items-center gap-3 bg-[#1e90ff] text-white font-semibold text-lg px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300'
//           >
//             View All Services
//             <ArrowRight className='w-5 h-5' />
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }