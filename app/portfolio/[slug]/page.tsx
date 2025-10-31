import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import {
  ExternalLink,
  ArrowLeft,
  Calendar,
  Clock,
  User,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { notFound } from 'next/navigation'

const projectsData = {
  'ready-for-udaan': {
    id: 2,
    title: 'Ready For Udaan - Global Opportunities Platform',
    category: 'Education & Immigration',
    type: 'Consulting Service',
    description:
      'A complete platform helping students and professionals secure work permits, study visas, and global opportunities abroad with end-to-end guidance.',
    longDescription:
      'Ready For Udaan is a comprehensive consulting and management system that assists students and working professionals in pursuing their dreams abroad. From career counseling and university selection to visa processing and work permit approvals, the platform ensures a smooth journey towards global opportunities. The system integrates real-time updates on immigration policies, automated document management, and AI-driven eligibility checks to maximize success rates for applicants.',
    technologies: [
      'React.js',
      'Node.js',
      'MongoDB',
      'PostgreSQL',
      'Tailwind CSS'
    ],
    features: [
      'AI-driven career and university guidance',
      'Automated document verification',
      'Real-time immigration policy updates',
      'Work permit and study visa tracking',
      'Secure applicant data handling',
      'Multi-language support',
      'End-to-end counseling and support',
      'Mobile responsive design'
    ],
    results: {
      efficiency: '50% faster visa application processing',
      satisfaction: '97% client satisfaction rate',
      approvals: '85% success rate in visa & work permit approvals',
      reach: 'Students placed across 10+ countries'
    },
    challenges: [
      'Frequent immigration policy changes',
      'Handling diverse country-specific requirements',
      'Ensuring security of sensitive applicant documents',
      'Building trust with international aspirants'
    ],
    solutions: [
      'Integrated real-time policy update system',
      'Country-specific document workflows',
      'End-to-end encryption for applicant data',
      '24/7 counseling and AI-driven support tools'
    ],
    image: '/ready-for-udaan-global-opportunities.png',
    liveUrl: 'https://ready4udaan.netlify.app/',
    year: '2025',
    duration: '6 months',
    client: 'Ready For Udaan Pvt. Ltd.',
    testimonial: {
      text: 'Ready For Udaan guided me step by step through my study visa process. Thanks to their support, I am now pursuing my master’s in Canada without stress.',
      author: 'Rohit Mehta',
      position: 'Student, Canada'
    }
  },
  'flourish-alliance': {
    id: 3,
    title: 'Flourish Alliance - Overseas Education & Work Permit Services',
    category: 'Education & Immigration',
    type: 'Consulting Platform',
    description:
      'End-to-end overseas consulting platform helping students and professionals with study visas, work permits, and career opportunities abroad.',
    longDescription:
      'Flourish Alliance is a comprehensive overseas education and immigration consulting platform that empowers students and professionals to achieve their global aspirations. The platform offers personalized counseling, automated visa and document processing, and real-time immigration updates. With a strong focus on trust and transparency, Flourish Alliance ensures a seamless experience for clients looking to study, work, or settle abroad. The system is designed to handle complex visa requirements across multiple countries while maintaining secure applicant data management.',
    technologies: [
      'React.js',
      'Javascript',
      'MongoDB',
      'TailwindCSS',
      'PostgreSQL',
      'Framer Motion'
    ],
    features: [
      'Personalized career and university counseling',
      'Automated visa & work permit processing',
      'Real-time immigration policy updates',
      'Secure cloud-based document management',
      'Multi-country support workflows',
      'AI-driven eligibility assessment',
      'End-to-end application tracking',
      'Mobile responsive applicant portal'
    ],
    results: {
      approvals: '500+ successful visa & work permit approvals',
      satisfaction: '96% client satisfaction rate',
      processing: '40% faster document processing',
      reach: 'Applicants placed across 15+ countries'
    },
    challenges: [
      'Frequent changes in immigration policies',
      'Managing diverse country-specific visa requirements',
      'Ensuring data security and compliance',
      'Building trust with international aspirants'
    ],
    solutions: [
      'Integrated real-time policy monitoring system',
      'Developed country-specific document workflows',
      'Implemented enterprise-grade data encryption',
      'Launched AI-powered guidance chatbot for 24/7 support'
    ],
    image: '/flourish-alliance-education-consulting.png',
    liveUrl: 'https://flourishalliance25.netlify.app/',
    year: '2025',
    duration: '5 months',
    client: 'Flourish Alliance Pvt. Ltd.',
    testimonial: {
      text: 'Flourish Alliance made my dream of studying abroad a reality. Their guidance and support through the visa process was seamless and stress-free.',
      author: 'Aditi Sharma',
      position: 'Student, UK'
    }
  },
  'navkar-bhavsar-platform': {
    id: 3,
    title: 'Navkar Bhavsar - Financial Compliance & Advisory Platform',
    category: 'Accounting & Business Advisory',
    type: 'Web Application',
    description:
      'Developed a comprehensive digital platform for Navkar Bhavsar & Co., a Chartered Accountants and Company Secretaries firm, to streamline client management, tax filings, and business compliance workflows with secure automation and analytics.',
    longDescription:
      'The Navkar Bhavsar Financial Compliance & Advisory Platform was built to modernize how accounting and compliance firms operate. It automates recurring compliance tasks such as tax filing, ROC submissions, and client documentation while offering real-time dashboards for monitoring financial performance. Designed for both internal teams and clients, it ensures accuracy, transparency, and faster decision-making through intelligent process automation.',
    technologies: [
      'Next.js',
      'Node.js',
      'MongoDB',
      'AWS',
      'Automation Scripts',
      'Cloud Storage',
      'Tailwind CSS'
    ],
    features: [
      'Client dashboard with document tracking',
      'Automated tax and compliance reminders',
      'Secure document upload and e-signing',
      'Multi-user role management',
      'Real-time financial and compliance analytics',
      'Audit tracking and history logs',
      'Cloud backup and encryption',
      'Performance overview dashboard'
    ],
    results: {
      efficiency: '60% faster client data processing',
      accuracy: '98% accuracy in compliance and tax reporting',
      productivity: '50% reduction in manual tasks',
      satisfaction: '40% increase in client satisfaction and retention rate'
    },
    challenges: [
      'Managing diverse client compliance data securely',
      'Automating complex filing and reminder processes',
      'Ensuring 100% data accuracy across departments',
      'Maintaining client confidentiality in cloud environment'
    ],
    solutions: [
      'Implemented automation pipelines for compliance tracking',
      'Integrated secure AWS-based document storage',
      'Created real-time dashboards for CA and CS teams',
      'Built client portal for transparent document exchange'
    ],
    image: '/navkar-bhavsar-finance-dashboard.png',
    liveUrl: 'https://navkarbhavsarandco.com/',
    year: '2025',
    duration: '2 months',
    client: 'Navkar Bhavsar & Co.',
    testimonial: {
      text: 'The new digital platform streamlined our client management and compliance processes. It has significantly improved efficiency and accuracy across departments.',
      author: 'CA Navkar Bhavsar',
      position: 'Founder, Navkar Bhavsar & Co.'
    }
  },
  'globuz-india-suite': {
    id: 4,
    title: 'Globuz India - Retail & Activation Automation Suite',
    category: 'Retail & Brand Activation',
    type: 'AI + Web Platform',
    description:
      'An end-to-end digital platform for Globuz India to streamline brand activations, merchandising workflows and field deployments with smart tracking, analytics and automation.',
    longDescription:
      'Globuz India Suite brings together the power of AI, web dashboards and mobile field-tools to optimise brand-visibility and in-store execution. From planning activations, managing POSM (Point-of-Sale Materials), tracking installations nationwide to analysing performance data in real time — the platform empowers brands and agencies for faster decision-making and higher ROI.',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'AWS',
      'Mobile Field-App (React Native)',
      'Data Analytics Pipeline'
    ],
    features: [
      'Nationwide field-agent deployment tracking',
      'POSM inventory & installation management',
      'Automated scheduling & reminders for activations',
      'Real-time performance dashboard for brand-managers',
      'Interactive maps & geolocation for site monitoring',
      'AI-driven analytics for merchandising efficiency',
      'Multi-user roles for agency, client and field-teams',
      'Secure cloud document & image upload from field'
    ],
    results: {
      reach: '200% growth in field activation coverage',
      efficiency: '70% reduction in manual coordination time',
      visibility: '50% higher brand-visibility across stores',
      cost: '30% reduction in logistics & POSM wastage'
    },
    challenges: [
      'Coordinating field activities across multiple cities',
      'Real-time data collection from distributed field staff',
      'Managing large inventory of POS materials with installations',
      'Providing actionable insights quickly for brand teams'
    ],
    solutions: [
      'Built mobile app for field-agents with offline support',
      'Developed unified API layer for real-time sync & dashboard',
      'Created AI-analytics module to highlight under-performing zones',
      'Implemented cloud inventory system with automated alerts'
    ],
    image: '/globuz-india-retail-dashboard.png',
    liveUrl: 'https://globuz.in/',
    year: '2024',
    duration: '5 months',
    client: 'Globuz India',
    testimonial: {
      text: 'The platform transformed how we plan, deploy and monitor our brand activations — the visibility and efficiency gains have been remarkable.',
      author: 'Ms. Aditi Sharma',
      position: 'Head of Operations, Globuz India'
    }
  }
}

export function generateStaticParams() {
  return Object.keys(projectsData).map(slug => ({
    slug
  }))
}

export default function CaseStudyPage({
  params
}: {
  params: { slug: string }
}) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <main className='min-h-screen bg-white'>
      <Navigation />

      {/* Hero Section */}
      <section className='pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50'>
        <div className='max-w-6xl mx-auto'>
          <Link
            href='/portfolio'
            className='inline-flex items-center text-blue-600 hover:text-blue-800 mb-8'
          >
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to Portfolio
          </Link>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='flex items-center gap-4 mb-4'>
                <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                  {project.category}
                </span>
                <span className='text-gray-500'>{project.type}</span>
              </div>
              <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance'>
                {project.title}
              </h1>
              <p className='text-xl text-gray-600 mb-8 text-pretty'>
                {project.longDescription}
              </p>

              <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                <Link
                  href={project.liveUrl}
                  target='_blank'
                  className='inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white 
             px-6 py-3 rounded-full font-medium transition-all duration-300 
             hover:shadow-lg hover:shadow-blue-600/40'
                >
                  <ExternalLink className='w-4 h-4 mr-2' />
                  View Live Demo
                </Link>

                {/* <Button
                  variant='outline'
                  className='inline-flex items-center border border-gray-300 hover:bg-gray-50 
             bg-transparent px-6 py-3 rounded-full font-medium transition-all duration-300 
             hover:shadow-md'
                >
                  Download Case Study PDF
                </Button> */}
              </div>

              <div className='grid grid-cols-3 gap-6'>
                <div className='flex items-center'>
                  <Calendar className='w-5 h-5 text-gray-400 mr-2' />
                  <div>
                    <div className='text-sm text-gray-500'>Year</div>
                    <div className='font-semibold'>{project.year}</div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <Clock className='w-5 h-5 text-gray-400 mr-2' />
                  <div>
                    <div className='text-sm text-gray-500'>Duration</div>
                    <div className='font-semibold'>{project.duration}</div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <User className='w-5 h-5 text-gray-400 mr-2' />
                  <div>
                    <div className='text-sm text-gray-500'>Client</div>
                    <div className='font-semibold'>{project.client}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <img
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                className='w-full rounded-2xl shadow-2xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className='py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Key Results</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {Object.values(project.results).map((result, index) => (
              <div
                key={index}
                className='text-center bg-white p-6 rounded-xl shadow-sm border'
              >
                <div className='text-2xl font-bold text-blue-600 mb-2'>
                  {result.split(' ')[0]}
                </div>
                <div className='text-gray-600'>
                  {result.split(' ').slice(1).join(' ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className='py-16 px-4 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Technologies Used
          </h2>
          <div className='flex flex-wrap justify-center gap-4'>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className='bg-white text-gray-700 px-4 py-2 rounded-lg shadow-sm font-medium'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-3xl font-bold mb-8'>Key Features</h2>
              <div className='space-y-4'>
                {project.features.map((feature, index) => (
                  <div key={index} className='flex items-start'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className='text-3xl font-bold mb-8'>
                Challenges & Solutions
              </h2>
              <div className='space-y-6'>
                {project.challenges.map((challenge, index) => (
                  <div key={index} className='bg-gray-50 p-6 rounded-lg'>
                    <h3 className='font-semibold text-gray-900 mb-2'>
                      Challenge:
                    </h3>
                    <p className='text-gray-600 mb-3'>{challenge}</p>
                    <h3 className='font-semibold text-gray-900 mb-2'>
                      Solution:
                    </h3>
                    <p className='text-gray-600'>{project.solutions[index]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className='py-16 px-4 bg-blue-50'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8'>Client Testimonial</h2>
          <blockquote className='text-xl text-gray-700 mb-8 italic'>
            "{project.testimonial.text}"
          </blockquote>
          <div>
            <div className='font-semibold text-gray-900'>
              {project.testimonial.author}
            </div>
            <div className='text-gray-600'>{project.testimonial.position}</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-6'>
            Ready to Start Your Project?
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Let's discuss how we can help you achieve similar results for your
            business.
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
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
