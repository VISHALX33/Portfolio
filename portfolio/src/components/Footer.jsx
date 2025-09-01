import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    sections: [
      {
        title: "Navigation",
        links: [
          { name: "Home", href: "#home" },
          { name: "About", href: "#about" },
          { name: "Skills", href: "#skills" },
          { name: "Projects", href: "#projects" },
          { name: "Contact", href: "#contact" }
        ]
      },
      {
        title: "Services",
        links: [
          { name: "Web Development", href: "#" },
          { name: "Full Stack Development", href: "#" },
          { name: "UI/UX Design", href: "#" },
          { name: "API Development", href: "#" },
          { name: "Database Design", href: "#" }
        ]
      },
      {
        title: "Resources",
        links: [
          { name: "Portfolio", href: "#projects" },
          { name: "Resume", href: "#" },
          { name: "GitHub", href: "https://github.com/VISHALX33" },
          { name: "LinkedIn", href: "https://www.linkedin.com/in/vishal-prajapati-445799289/" },
          { name: "Contact", href: "#contact" }
        ]
      }
    ]
  }

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/VISHALX33", icon: <FaGithub className="w-6 h-6" /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vishal-prajapati-445799289/", icon: <FaLinkedin className="w-6 h-6" /> },
    { name: "Twitter", url: "https://x.com/VishalPraja89", icon: <FaTwitter className="w-6 h-6" /> },
    { name: "Instagram", url: "https://www.instagram.com/vishal_20_03/", icon: <FaInstagram className="w-6 h-6" /> },
    { name: "LeetCode", url: "https://leetcode.com/u/vishalprajapati2303/", icon: <SiLeetcode className="w-6 h-6" /> },
   ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Vishal Prajapati</h3>
            <p className="text-gray-300 mb-6">
              Full Stack Web Developer passionate about creating robust and scalable web applications 
              using the MERN stack and modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          scrollToSection(link.href)
                        }
                      }}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Vishal Prajapati. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection('#home')}
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50"
        title="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}

export default Footer 