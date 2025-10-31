'use client'

import { useState, useEffect } from "react"
import { X, Phone, Code, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z" />
  </svg>
)

interface WhatsAppWidgetProps {
  isOpen: boolean
  onClose: () => void
}

export default function WhatsAppWidget({ isOpen, onClose }: WhatsAppWidgetProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const whatsappMessage = encodeURIComponent(
    "Hello! Welcome to Loopera Tech 🚀\n\nI'm interested in your technology services. Please let me know how you can help digitize my business?\n\n• Web Development\n• Mobile Apps\n• Digital Marketing\n• E-commerce Solutions"
  )

  if (!isOpen) return null

  return (
    <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300 border border-blue-100">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] px-4 py-3 flex items-center justify-between text-white">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm">Loopera Tech</h3>
            <p className="text-xs text-white/90 flex items-center gap-1">
              <Zap className="w-3 h-3" /> Quick Response Guaranteed
            </p>
          </div>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-full p-1">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-r from-[#E6F0FF] to-[#D9F0FF] rounded-lg p-3 border border-[#B3D4FF]">
          <p className="text-sm text-gray-700">
            <span className="text-base">🚀</span> Hello! Welcome to <strong className="text-[#1E90FF]">Loopera Tech</strong>
          </p>
          <p className="text-sm text-gray-600 mt-1">How can we help digitize your business?</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-[#E6F0FF] rounded-lg p-2 text-center border border-[#B3D4FF]">
            <Code className="w-5 h-5 text-[#1E90FF] mx-auto mb-1" />
            <p className="text-xs font-medium text-[#1E90FF]">Web Development</p>
          </div>
          <div className="bg-[#F0E6FF] rounded-lg p-2 text-center border border-[#D9B3FF]">
            <Zap className="w-5 h-5 text-[#6FBFFF] mx-auto mb-1" />
            <p className="text-xs font-medium text-[#6FBFFF]">Mobile Apps</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
            Contact us instantly:
          </h4>
          <div className="space-y-2">
            <a href={`https://wa.me/918218485785?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white rounded-xl py-3 h-auto flex items-center justify-between group transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">Chat on WhatsApp</div>
                    <div className="text-xs text-green-100">Get instant response</div>
                  </div>
                </div>
              </Button>
            </a>

            <a href="tel:+919116385785" className="block">
              <Button variant="outline" className="w-full border-2 border-[#1E90FF] text-[#1E90FF] hover:bg-[#E6F0FF] rounded-xl py-3 h-auto flex items-center justify-between group transition-all duration-300 bg-transparent hover:border-[#6FBFFF]">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#E6F0FF] rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#1E90FF]" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">Call Now</div>
                    <div className="text-xs text-gray-500">+91 8218485785</div>
                  </div>
                </div>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
