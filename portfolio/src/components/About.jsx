import React from 'react'

const About = () => {
  const highlights = [
    { icon: "🎯", title: "Full Stack Expertise", description: "Proficient in MERN stack development with scalable solutions" },
    { icon: "🚀", title: "Problem Solver", description: "Strong DSA skills with consistent LeetCode practice" },
    { icon: "🤝", title: "Team Player", description: "Effective communication in English and Hindi" },
    { icon: "💡", title: "Quick Learner", description: "Adapts quickly to new technologies and frameworks" }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Who I Am
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Full Stack Web Developer with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js). 
              I specialize in building robust and scalable web applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With experience in both frontend and backend development, I enjoy working across the entire 
              stack and bringing innovative ideas to life through clean, efficient code.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm currently pursuing my BTech in Computer Science at Arya College of Engineering with a CGPA of 8.5/10, 
              and I'm actively involved in hackathons and coding competitions to enhance my skills.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl">{highlight.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{highlight.title}</h4>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats/Info Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Experience</span>
                  <span className="font-semibold text-gray-900">2+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Projects Completed</span>
                  <span className="font-semibold text-gray-900">5+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Technologies</span>
                  <span className="font-semibold text-gray-900">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">CGPA</span>
                  <span className="font-semibold text-gray-900">8.5/10</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Education</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-900">BTech in Computer Science</p>
                  <p className="text-sm text-gray-600">Arya College of Engineering • 2022-2026</p>
                  <p className="text-sm text-blue-600 font-medium">CGPA: 8.5/10</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {['Full Stack Development', 'DSA & Problem Solving', 'Hackathons', 'Web Technologies', 'AI/ML'].map((interest, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 