"use client"

import { Award, Users, Heart, Target } from "lucide-react"
import Travel from "../assets/Traveltheworld.jpg"
import Founder from "../assets/founder.jpeg"
import Teams from "../assets/teams.jpeg"

export default function About() {
  const teamMembers = [
    {
      name: "Harshit Tated",
      position: "Founder & Managing Director (CEO)",
      image: Founder,
      description:
        "With over 10 years in travel industry, Rajesh leads our vision of creating exceptional experiences.",
    },
    {
      name: "Team",
      position: "Team of Happiness Plans✈️",
      image: Teams,
      description: "A passionate Team of Happiness Plans✈️.",
    },
  ]

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Happiness Plans</h1>
          <p className="text-xl text-gray-909 max-w-3xl mx-auto leading-relaxed">
            We are a premier travel and event management company based in Indore, dedicated to creating unforgettable
            experiences for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={Travel}
              alt="Happiness Plans Office"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-900 mb-6 leading-relaxed">
              Happiness Plans is a travel and event management company in Indore, providing exceptional travel
              experiences, reliable car rentals, and comprehensive event logistics with a customer-first approach.
            </p>
            <p className="text-gray-900 mb-6 leading-relaxed">
              Since our inception in 2021, we have been committed to delivering personalized services that exceed
              expectations. Our team of experienced professionals works tirelessly to ensure every journey and event is
              memorable.
            </p>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="bg-gradient-to-br from-black to-blue-900 text-center p-4 bg-blue-50 rounded-lg transition-transform duration-200 hover:scale-110">
                <div className=" text-2xl font-bold text-white">150+</div>
                <div className="text-sm text-white">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg bg-gradient-to-br from-black to-blue-900 transition-transform duration-200 hover:scale-110 ">
                <div className="text-2xl font-bold text-white">4.9★</div>
                <div className="text-sm text-white">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 bg-gradient-to-br from-black to-blue-900 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-white max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center transition-transform duration-200 hover:scale-110">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Customer First</h3>
              <p className="text-white">Your satisfaction is our top priority in everything we do.</p>
            </div>

            <div className="text-center transition-transform duration-200 hover:scale-110">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-white">We strive for excellence in every service we provide.</p>
            </div>

            <div className="text-center transition-transform duration-200 hover:scale-110">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Teamwork</h3>
              <p className="text-white">Collaboration and teamwork drive our success.</p>
            </div>

            <div className="text-center transition-transform duration-200 hover:scale-110">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 ">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-white">We continuously innovate to serve you better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-900 max-w-2xl mx-auto">
              The passionate professionals behind Happiness Plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto  ">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-110">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-blue-600 text-white py-20 bg-gradient-to-br from-black to-blue-900 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Happiness Plans?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2021</div>
              <div className="text-blue-100">Operating Since</div>
              <p className="mt-4 text-blue-100">Years of dedicated service in travel and event management</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-blue-100">Customer Rating</div>
              <p className="mt-4 text-blue-100">Consistently high ratings from satisfied customers</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Happy Clients</div>
              <p className="mt-4 text-blue-100">Successful projects and satisfied customers across India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
