import React from 'react'
import ProfileImage from '../assets/Vishalppp.png'
import ResumePDF from '../assets/Vishal_Prajapati_Resume.pdf'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  ///
  ///
  ///
  ////
  ///
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Text Content */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
          Hi, I'm <span className="text-gray-700">Vishal Prajapati</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Full Stack Web Developer
        </h2>

        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          Passionate about creating robust and scalable web applications using 
          modern technologies. I love turning ideas into reality through clean, 
          efficient code and innovative solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            onClick={() => scrollToSection('#projects')}
            className="bg-black hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg"
          >
            View My Work
          </button>

          <button
            onClick={() => scrollToSection('#contact')}
            className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            Get In Touch
          </button>

          <a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg"
            style={{ display: 'inline-block' }}
          >
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center lg:justify-start space-x-6 mt-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 ..."/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554 ..."/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 ..."/>
            </svg>
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-black to-gray-700 p-2">
            <div className="w-full h-full rounded-full bg-white p-2">
              <img
                src={ProfileImage}
                alt="Vishal Prajapati"
                className="w-full h-full rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* Floating Elements — now grayscale */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-300 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
      </div>

    </div>
  </div>
</section>

  )
}

export default Hero 