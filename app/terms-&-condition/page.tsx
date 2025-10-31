import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Loopera',
  description:
    'Terms and Conditions for Loopera - Website Development, AI Automation, Application Development, Software Development, and Creative Designing services.'
}

export default function TermsPage () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Terms and Conditions
            </h1>
            <p className='text-lg text-gray-600'>Last Updated: [Date]</p>
          </div>

          <div className='prose prose-lg max-w-none'>
            <div className='mb-8'>
              <p className='text-gray-700 leading-relaxed'>
                Welcome to Loopera ("we," "our," "us"). By accessing or using
                our website{' '}
                <a
                  href='https://www.loopera.tech'
                  className='text-blue-600 hover:text-blue-800'
                >
                  [www.loopera.tech]
                </a>{' '}
                or engaging our services (Website Development, AI Automation,
                Application development, Software Development and Creative
                designing), you agree to comply with and be bound by these Terms
                & Conditions. Please read them carefully.
              </p>
            </div>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2'>
                1. Acceptance of Terms
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                By using our website or services, you confirm that you are at
                least 18 years old and legally capable of entering into binding
                contracts. If you do not agree with these Terms, you must
                discontinue use of our website and services.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2'>
                2. Services Provided
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Loopera offers:
              </p>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
                <li>Website development</li>
                <li>AI automation solutions</li>
                <li>Software development</li>
                <li>Application development</li>
                <li>Creative designing</li>
              </ul>
              <p className='text-gray-700 leading-relaxed mt-4'>
                We reserve the right to modify, suspend, or discontinue any
                service at our discretion.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2'>
                3. User Responsibilities
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                When using our services, you agree to:
              </p>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
                <li>Provide accurate, current, and complete information.</li>
                <li>
                  Do not use our services for illegal, fraudulent, or harmful
                  purposes.
                </li>
                <li>
                  Respect intellectual property rights of Loopera and third
                  parties.
                </li>
                <li>
                  Maintain the confidentiality of any account credentials (if
                  applicable).
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2'>
                4. Intellectual Property
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                All content on our website (designs, text, graphics, logos,
                software) is the property of Loopera unless otherwise stated.
                You may not copy, distribute, modify, or reuse any content
                without prior written consent.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2'>
                5. Payments & Refunds
              </h2>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
                <li>
                  Payments for services must be made according to agreed terms.
                </li>
                <li>
                  Unless otherwise specified, payments are non-refundable once
                  services are delivered.
                </li>
                <li>
                  We reserve the right to suspend or terminate services if
                  payments are delayed or incomplete.
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2'>
                6. Limitation of Liability
              </h2>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
                <li>
                  Loopera is not liable for any indirect, incidental, or
                  consequential damages resulting from use of our services or
                  website.
                </li>
                <li>
                  We make reasonable efforts to ensure quality but do not
                  guarantee error-free or uninterrupted services.
                </li>
                <li>
                  You acknowledge that use of AI automation and software
                  development carries inherent risks, and Loopera is not
                  responsible for outcomes beyond agreed deliverables.
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2'>
                7. Third-Party Services
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Our website or services may integrate with or link to
                third-party tools. Loopera is not responsible for the content,
                reliability, or practices of third-party providers.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2'>
                8. Termination
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                We may suspend or terminate access to our website or services if
                you violate these Terms, engage in unlawful activity, or harm
                our systems or reputation.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2'>
                9. Governing Law
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                These Terms shall be governed by and construed under the laws of{' '}
                <span className='font-semibold'>India</span> (or your company's
                jurisdiction, if different). Any disputes will be subject to the
                exclusive jurisdiction of the courts in{' '}
                <span className='font-semibold'>Ahmedabad, Gujarat</span>.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2'>
                10. Changes to Terms
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                We may update these Terms at any time. Updates will be posted
                with a revised "Last Updated" date. Continued use of our website
                or services indicates acceptance of changes.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2'>
                11. Contact Us
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                For any questions or concerns about these Terms, please contact:
              </p>
              <div className='bg-blue-50 p-6 rounded-lg'>
                <p className='text-gray-800 font-semibold'>Loopera</p>
                <p className='text-gray-700'>Email: info@loopera.tech</p>
                <p className='text-gray-700'>Website: www.loopera.tech</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
