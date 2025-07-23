"use client"

import { ArrowRight, Star, Users, Calendar } from "lucide-react"
import { Link } from "react-router-dom"
import Travel from "../assets/Traveltheworld.jpg"
import DestinationWedding from "../assets/destinationwedding.jpg"
import Happyhoiday from "../assets/happyholiday.jpg"
import Carrental from "../assets/carrental.jpg"



export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="animate-slideUp text-4xl lg:text-6xl font-bold leading-tight mb-6 ">
                Your <p className="text-yellow-400 font-style: italic ml-1">Gateway</p> to Seamless Travel & Events
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Experience hassle-free travel planning and event management with Happiness Plans. We turn your dreams
                into unforgettable memories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="bg-gradient-to-br from-black-1000 to-blue-900 text-white-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 transition-transform duration-200 hover:scale-110"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-gradient-to-br from-black-1000 to-blue-900 text-white-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 transition-transform duration-200 hover:scale-110"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src={Travel}
                alt="Travel and Events"
                className="rounded-lg shadow-2xl w-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Since 2021</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.9 Stars</h3>
              <p className="text-gray-600">Customer Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto ">
              From travel planning to event management, we provide comprehensive solutions for all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 ">
            <div className="bg-gradient-to-br from-black to-blue-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center transition-transform duration-200 hover:scale-110">
              <img
                src={Carrental}
                alt="Car Rental"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-white mb-3">Car & Chauffeur Rentals</h3>
              <p className="text-white">Professional transportation services for all occasions</p>
            </div>

            <div className="bg-gradient-to-br from-black to-blue-900  p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center transition-transform duration-200 hover:scale-110">
              <img
                src={Happyhoiday}
                alt="Holiday Planning"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-white mb-3">Holiday & Tour Planning</h3>
              <p className="text-white">Customized travel experiences tailored to your preferences</p>
            </div>

            <div className="bg-gradient-to-br from-black to-blue-900  p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center transition-transform duration-200 hover:scale-110">
              <img
                src={DestinationWedding}
                alt="Destination Wedding"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-white mb-3">Destination Weddings</h3>
              <p className="text-white">Make your special day unforgettable with our expertise</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="bg-gradient-to-br from-black to-blue-900  text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center space-x-2 transition-transform duration-200 hover:scale-110"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-black to-blue-900  text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Plan Your Next Adventure?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you create memories that will last a lifetime. Contact us today to start planning your perfect
            trip or event.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-br from-black-1000 to-blue-900 text-black-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center space-x-2 transition-transform duration-200 hover:scale-110"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
