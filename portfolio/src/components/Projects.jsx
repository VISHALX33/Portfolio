import React, { useState } from 'react'
import elite from '../assets/elite.png'
import note from '../assets/note.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Elite-Crew (Service+Product)",
      description: "A comprehensive service and product-based platform where users can book services, purchase products, write blogs, and review services in a mobile-app-like responsive interface.",
      image: elite,
      category: "fullstack",
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Razorpay"],
      liveUrl: "https://elite-crew.netlify.app/",
      githubUrl: "https://github.com/VISHALX33/elite-crew",
      features: ["Service Booking", "Product Purchase", "Blog System", "Payment Gateway", "User Reviews", "Responsive Design"]
    },
    {
      id: 2,
      title: "Note-Nest (Notes sharing platform)",
      description: "A full-stack note-sharing app with real-time chat and personal productivity tools, featuring secure file uploads/downloads and dynamic note pinning.",
      image: note,
      category: "fullstack",
      technologies: ["MERN Stack", "JWT", "Real-time Chat", "File Upload", "Tailwind CSS"],
      liveUrl: "https://notenests.netlify.app/dashboard",
      githubUrl: "https://github.com/VISHALX33/NodeNest-main",
      features: ["Note Sharing", "Real-time Chat", "File Upload/Download", "Dynamic Pinning", "User Authentication", "Responsive Design"]
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Here are some of the projects I've worked on using the MERN stack.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-black hover:bg-gray-200 border border-gray-400'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 border border-black text-black text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-black mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="text-black mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200 text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white border border-black text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 text-center"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
