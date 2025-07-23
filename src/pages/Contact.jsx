"use client"

import ContactForm from "../components/ContactForm"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to plan your next adventure or event? Get in touch with our team and let us help you create
            unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              We're here to help you with all your travel and event management needs. Reach out to us through any of the
              following channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-gradient-to-br from-black to-blue-900 rounded-lg  transition-transform duration-200 hover:scale-110">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg bg-gradient-to-br from-black to-blue-900 ">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <p className="text-white">0822-480-3424</p>
                  <p className="text-sm text-white">Mon-Sat 9:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gradient-to-br from-black to-blue-900 rounded-lg  transition-transform duration-200 hover:scale-110">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg bg-gradient-to-br from-black to-blue-900 ">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-white">info@happinessplans.com</p>
                  <p className="text-sm text-white">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gradient-to-br from-black to-blue-900 rounded-lg  transition-transform duration-200 hover:scale-110">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg bg-gradient-to-br from-black to-blue-900 ">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                  <p className="text-white">
                    408, Apollo Premier
                    <br />
                    Vijay Nagar Square
                    <br />
                    Indore, Madhya Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gradient-to-br from-black to-blue-900 rounded-lg  transition-transform duration-200 hover:scale-110">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg bg-gradient-to-br from-black to-blue-900 ">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                  <p className="text-white">
                    Monday - Saturday: 9:00 AM - 7:00 PM
                    <br />
                    Sunday: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Us</h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0929194896!2d75.8777!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdcc0c2b7c0b%3A0x11ed9334c4e8f6b4!2sVijay%20Nagar%20Square%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Happiness Plans Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-black to-blue-900  text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Create Something Amazing Together</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether it's a dream vacation, corporate event, or special celebration, we're here to make it happen.
            Contact us today!
          </p>
          <a
            href="tel:0822-480-3424"
            className="bg-gradient-to-br from-black-1000 to-blue-900 text-black-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center space-x-2 transition-transform duration-200 hover:scale-110"
          >
            Call Now: 0822-480-3424
          </a>
        </div>
      </section>
    </div>
  )
}
