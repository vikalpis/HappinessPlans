"use client"

import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-blue-400 transition-transform duration-200 hover:scale-110" />
              <span className="text-xl font-bold transition-transform duration-200 hover:scale-110">HappiNe$$ <p className="ml-13 text-yellow-400 font-style: italic">Plans</p></span>
            </div>
            <p className="text-gray-300 mb-4">
              Your gateway to seamless travel & events. Creating memorable experiences since 2021.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors transition-transform duration-200 hover:scale-150" onClick={()=>{
                window.open("https://www.facebook.com/happinessplans/", "_blank")
              }} />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors transition-transform duration-200 hover:scale-150" onClick={()=>{
                window.open("https://www.instagram.com/happiness.plans?igsh=MTJodzJmdTFudTNkdg==","_blank")
              }} />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors transition-transform duration-200 hover:scale-150" onClick={()=>{
                window.open("https://x.com/HappinessPlans","_blank")
              }}/>
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors transition-transform duration-200 hover:scale-150" onClick={()=>{
                window.open("https://www.linkedin.com/company/happiness-plan/","_blank")
              }}/>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">0822-480-3424</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@happinessplans.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">408, Apollo Premier, Vijay Nagar Square, Indore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Happiness Plans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
