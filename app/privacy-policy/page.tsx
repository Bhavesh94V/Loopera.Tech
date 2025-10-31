import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Loopera',
  description:
    'Privacy Policy for Loopera - How we collect, use, and protect your information when using our website development, AI automation, and software development services.'
}

export default function PrivacyPage () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Privacy Policy
            </h1>
            <p className='text-lg text-gray-600'>Last Updated: [Date]</p>
          </div>

          <div className='prose prose-lg max-w-none'>
            <div className='mb-8'>
              <p className='text-gray-700 leading-relaxed'>
                Loopera ("we," "our," "us") values your trust and respects your
                privacy. This Privacy Policy explains how we collect, use,
                store, and protect your information when you visit our website{' '}
                <a
                  href='https://www.loopera.tech'
                  className='text-green-600 hover:text-green-800'
                >
                  [www.loopera.tech]
                </a>{' '}
                and use our services, including website development, AI
                automation, and software development.
              </p>
            </div>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-200 pb-2'>
                1. Information We Collect
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                We may collect the following types of information:
              </p>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, company name, billing details (when you request
                  a service or contact us).
                </li>
                <li>
                  <strong>Non-Personal Information:</strong> Browser type,
                  device information, IP address, location data, and website
                  usage statistics.
                </li>
                <li>
                  <strong>Cookies & Tracking:</strong> To improve website
                  performance, user experience, and marketing.
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-200 pb-2'>
                2. How We Use Your Information
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Your information may be used to:
              </p>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
                <li>
                  Provide and manage our services (website development, AI
                  automation, Application development, Creative designing and
                  software development).
                </li>
                <li>Respond to your inquiries and support requests.</li>
                <li>Improve our website, user experience, and offerings.</li>
                <li>
                  Send service-related communications, updates, and promotional
                  content (if you opt-in).
                </li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-200 pb-2'>
                3. Sharing of Information
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                We do not sell or rent your personal information. However, we
                may share information with:
              </p>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
                <li>
                  <strong>Service Providers:</strong> Trusted third parties who
                  assist in hosting, analytics, or payment processing.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> If required to comply with
                  applicable laws or government requests.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In case of a merger,
                  acquisition, or restructuring.
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-200 pb-2'>
                4. Data Security
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                We implement industry-standard measures (encryption, firewalls,
                access controls) to protect your data. However, no method of
                transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-200 pb-2'>
                5. Your Rights
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Depending on your location, you may have the right to:
              </p>
              <ul className='list-disc list-inside text-gray-700 space-y-2 ml-4'>
                <li>Access, update, or delete your personal data.</li>
                <li>Opt-out of marketing communications.</li>
                <li>Request restriction or objection to data processing.</li>
                <li>Withdraw consent at any time.</li>
              </ul>
              <p className='text-gray-700 leading-relaxed mt-4'>
                To exercise these rights, contact us at{' '}
                <a
                  href='mailto:info@loopera.tech'
                  className='text-green-600 hover:text-green-800'
                >
                  [info@loopera.tech]
                </a>
                .
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-200 pb-2'>
                6. Cookies & Tracking Technologies
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Our website uses cookies to enhance functionality and analyse
                usage. You can manage or disable cookies in your browser
                settings.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-200 pb-2'>
                7. Third-Party Links
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Our website may contain links to external sites. We are not
                responsible for the privacy practices or content of third-party
                websites.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-200 pb-2'>
                8. Children's Privacy
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Our services are not directed to children under 13. We do not
                knowingly collect personal information from minors.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-200 pb-2'>
                9. Changes to this Policy
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                We may update this Privacy Policy from time to time. Updates
                will be posted with a revised "Last Updated" date.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-200 pb-2'>
                10. Contact Us
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                If you have questions about this Privacy Policy or how your data
                is handled, please contact:
              </p>
              <div className='bg-green-50 p-6 rounded-lg'>
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
