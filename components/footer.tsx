'use client';

import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import { SiX } from "react-icons/si";
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className='relative bg-[#1E90FF] text-footer-text overflow-hidden rounded-[24px] md:rounded-[40px] mx-2 sm:mx-4 md:mx-12 my-2 sm:my-4'>
      {/* Background glow effects */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-0 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
      </div>

      <div className='relative z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10'>
          {/* Main content - responsive grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-left'>
            {/* Logo + Description */}
            <div className='space-y-3 sm:space-y-4'>
              <div className='flex items-center gap-2'>
                <img src='/footer-logo.png' alt='Loopera Logo' className='w-48 h-16 object-contain' />
              </div>
              <p className='text-white/90 leading-relaxed text-base sm:text-lg'>
                We craft scalable, AI-first digital solutions that help you automate, grow, and lead in your industry.
              </p>
            </div>

            {/* Services */}
            <div className='space-y-3 sm:space-y-4'>
              <h3 className='text-xl sm:text-2xl md:text-2xl font-semibold text-white'>Services</h3>
              <ul className='space-y-2'>
                {['LoopSites', 'LoopSystems', 'LoopApps', 'LoopIntellect', 'LoopDesign'].map((service, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/services/${service.toLowerCase()}`}
                      className='text-white text-sm sm:text-md hover:text-[#6FBFFF] transition-colors duration-300'
                    >
                      {service}
                    </Link>
                  </li>

                ))}
              </ul>
            </div>

            {/* Company */}
            <div className='space-y-3 sm:space-y-4'>
              <h3 className='text-xl sm:text-2xl md:text-2xl font-semibold text-white'>Company</h3>
              <ul className='space-y-2'>
                {['About Us', 'Industries', 'Portfolio', 'Blog', 'FAQs'].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className='text-white text-sm sm:text-md hover:text-[#6FBFFF] transition-colors duration-300'
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div className='space-y-3 sm:space-y-4'>
              <h3 className='text-xl sm:text-2xl md:text-2xl font-semibold text-white'>Get in Touch</h3>
              <div className='space-y-3'>
                {[
                  { Icon: Mail, text: 'info@loopera.tech', href: 'mailto:info@loopera.tech' },
                  { Icon: Phone, text: '+91 91163 85785', href: 'tel:+919116385785' },
                  { Icon: MapPin, text: 'Ahmedabad', href: '#' }
                ].map(({ Icon, text, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className='flex items-center space-x-3 group'
                  >
                    <div className='w-10 h-10 bg-black/20 rounded-lg flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300'>
                      <Icon className='w-5 h-5 text-white' />
                    </div>
                    <span className='text-white text-sm sm:text-md'>{text}</span>
                  </a>
                ))}
              </div>

              <Link href='/consultation' className='block'>
                <Button className='bg-white text-[#1E90FF] hover:bg-footer-btn/90 font-medium text-sm sm:text-md w-full rounded-full px-6 sm:px-8 py-4 sm:py-5 mt-2 flex items-center justify-center gap-2 transition-all duration-300'>
                  Start Your Project <ArrowRight className='w-4 h-4' />
                </Button>
              </Link>

              {/* Social Media Icons */}
              <div className='flex justify-start space-x-3 pt-2'>
                {[
                  { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                  { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { Icon: SiX, href: 'https://twitter.com', label: 'Twitter' }
                ].map(({ Icon, href, label }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={label}
                    className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center hover:bg-white text-white hover:text-[#1E90FF] transition-all duration-300'
                  >
                    <Icon className='w-5 h-5 sm:w-6 sm:h-6' />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-white/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8'>
            <div className='flex flex-col sm:flex-row justify-between items-center sm:items-center gap-3 sm:gap-4'>
              <p className='text-white text-sm sm:text-sm'>
                © 2025 Loopera.tech. All rights reserved.
              </p>
              <div className='flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-6 text-sm sm:text-sm'>
                {['Privacy Policy', 'Terms & Condition', 'Sitemap'].map((link, idx) => (
                  <Link
                    key={idx}
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className='text-white hover:text-accent transition-colors duration-300'
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
