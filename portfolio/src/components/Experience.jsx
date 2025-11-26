import React from 'react'

const Experience = () => {
  const experiences = [
    {
      company: "SYNILOGIC TECH PRIVATE LIMITED",
      position: "Full Stack Web Developer",
      duration: "May 2025 - Jul 2025",
      location: "Kota, Rajasthan, India",
      description: "Developed robust backend microservices and RESTful APIs for astrology-based web applications.",
      achievements: [
        "Built and thoroughly tested RESTful APIs using Node.js, Firebase, and SQL",
        "Worked on AstroNode backend modules: product, service, and payment APIs",
        "Developed scalable backend microservices for astrology platforms",
        "Collaborated with the team to deliver production-ready backend systems"
      ],
      technologies: ["Node.js", "Firebase", "SQL", "REST APIs", "Microservices", "JavaScript"]
    },
    {
      company: "DOOPER HEALTH TECHNOLOGY PRIVATE LIMITED",
      position: "Frontend Web Developer",
      duration: "Jul 2024 - Aug 2024",
      location: "Kota, Rajasthan, India",
      description: "Created responsive healthcare web applications and contributed to AI-based health bot development.",
      achievements: [
        "Developed responsive healthcare pages using Tailwind & JavaScript",
        "Built dynamic forms and complex UI modules in React",
        "Enhanced multiple React projects with strong SEO optimizations",
        "Contributed to AI health bot dataset, UI workflow, and integrations"
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript", "PWA", "SEO", "AI Integration"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey in software development, showcasing growth and achievements across different roles.
          </p>
        </div>

        <div className="relative">

          {/* Timeline vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-200"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 
                  w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
                }`}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">

                    {/* Position + Duration */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>

                      {/* Company + Location */}
                      <h4 className="text-lg font-semibold text-gray-700">{exp.company}</h4>
                      <p className="text-gray-500 flex items-center mt-1">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {exp.location}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "0.6", label: "Years Experience" },
            { number: "5+", label: "Projects Completed" },
            { number: "15+", label: "Technologies Mastered" },
            { number: "8.5", label: "CGPA Score" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
