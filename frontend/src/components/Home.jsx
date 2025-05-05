import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 md:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">

        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-4 text-center lg:text-left tracking-tight">
            Social Book
          </h1>
          <h2 className="text-4xl font-bold text-white mb-4 text-center lg:text-left">
            Contact Management
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center lg:text-left">
            Start getting things done together with revolutionary contact management features.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              to="/add"
              className="relative inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl ring-1 ring-indigo-500 hover:ring-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <span className="z-10">Add Now</span>
              <span className="absolute inset-0 bg-indigo-700 opacity-0 rounded-lg transition-opacity duration-300 group-hover:opacity-10" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="con-alpha.png"
            alt="contacts placeholder"
            className="w-full max-w-md rounded-xl shadow-2xl border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Home