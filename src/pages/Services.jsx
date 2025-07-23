"use client"

import ServiceCard from "../components/ServiceCard"
import { Car, Plane, Calendar, Heart, GraduationCap, MapPin } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Car className="h-6 w-6 text-blue-600 " />,
      title: "Car & Chauffeur Rentals",
      description:
        "Professional and reliable car rental services with experienced chauffeurs for all your transportation needs, from airport transfers to city tours.",
    },
    {
      icon: <Plane className="h-6 w-6 text-blue-600" />,
      title: "Airport Transfers",
      description:
        "Hassle-free airport pickup and drop-off services ensuring you reach your destination comfortably and on time, every time.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Event Transport Management",
      description:
        "Comprehensive transportation solutions for events, conferences, and corporate gatherings with fleet management and logistics coordination.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
      title: "Holiday & Tour Planning",
      description:
        "Customized holiday packages and tour planning services covering domestic and international destinations with complete itinerary management.",
    },
    {
      icon: <Heart className="h-6 w-6 text-blue-600" />,
      title: "Destination Weddings",
      description:
        "Complete destination wedding planning and management services, creating magical moments at stunning locations across India and abroad.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      title: "Study Abroad Assistance",
      description:
        "Comprehensive support for students planning to study abroad, including visa assistance, accommodation, and travel arrangements.",
    },
  ]

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 ">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Comprehensive travel and event management solutions tailored to meet your unique needs. From transportation
            to destination planning, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-900 max-w-2xl mx-auto">
              Our simple and efficient process ensures a smooth experience from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            <div className="text-center transition-transform duration-200 hover:scale-110">
              <div className="bg-gradient-to-br from-black to-blue-900 flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-900">
                We understand your requirements and preferences through detailed consultation.
              </p>
            </div>

            <div className="text-center transition-transform duration-200 hover:scale-110">
              <div className="bg-gradient-to-br from-black to-blue-900 flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-900">
                Our experts create a customized plan tailored to your specific needs and budget.
              </p>
            </div>

            <div className="text-center transition-transform duration-200 hover:scale-110">
              <div className="bg-gradient-to-br from-black to-blue-900 flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Execution</h3>
              <p className="text-gray-900">
                We handle all the logistics and coordination to ensure flawless execution.
              </p>
            </div>

            <div className="text-center transition-transform duration-200 hover:scale-110">
              <div className="bg-gradient-to-br from-black to-blue-900 flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-900">24/7 support throughout your journey to ensure everything goes smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20 bg-gradient-to-br from-black to-blue-900 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your travel or event requirements. Our team is ready to help you create an
            unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-br from-black-1000 to-blue-900 text-black-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center space-x-2 transition-transform duration-200 hover:scale-110"
            >
              Get a Quote
            </a>
            <a
              href="tel:0822-480-3424"
              className="bg-gradient-to-br from-black-1000 to-blue-900 text-black-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center space-x-2 transition-transform duration-200 hover:scale-110"
            >
              Call Now: 0822-480-3424
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
