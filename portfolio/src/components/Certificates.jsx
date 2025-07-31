import React from 'react'

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "December 2023",
      image: "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=React+Certification",
      credentialId: "META-REACT-2023-001",
      description: "Comprehensive React development certification covering modern React patterns, hooks, and best practices.",
      skills: ["React", "JavaScript", "Component Architecture", "State Management"],
      verificationUrl: "https://example.com/verify",
      category: "frontend"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "November 2023",
      image: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Full+Stack+Certification",
      credentialId: "FCC-FSWD-2023-002",
      description: "Complete full-stack development certification including frontend, backend, and database technologies.",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      verificationUrl: "https://example.com/verify",
      category: "fullstack"
    },
    {
      id: 3,
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "October 2023",
      image: "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=AWS+Certification",
      credentialId: "AWS-DEV-2023-003",
      description: "AWS cloud development certification covering serverless, containers, and cloud-native applications.",
      skills: ["AWS Lambda", "DynamoDB", "API Gateway", "CloudFormation"],
      verificationUrl: "https://example.com/verify",
      category: "cloud"
    },
    {
      id: 4,
      title: "MongoDB Database Administrator",
      issuer: "MongoDB University",
      date: "September 2023",
      image: "https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=MongoDB+Certification",
      credentialId: "MDB-DBA-2023-004",
      description: "MongoDB database administration and development certification.",
      skills: ["MongoDB", "Database Design", "Performance Optimization", "Security"],
      verificationUrl: "https://example.com/verify",
      category: "database"
    },
    {
      id: 5,
      title: "TypeScript Fundamentals",
      issuer: "Microsoft",
      date: "August 2023",
      image: "https://via.placeholder.com/300x200/06B6D4/FFFFFF?text=TypeScript+Certification",
      credentialId: "MS-TS-2023-005",
      description: "TypeScript programming language certification covering advanced types and patterns.",
      skills: ["TypeScript", "Type Safety", "Advanced Types", "Decorators"],
      verificationUrl: "https://example.com/verify",
      category: "frontend"
    },
    {
      id: 6,
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "July 2023",
      image: "https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Docker+Certification",
      credentialId: "DOCKER-CA-2023-006",
      description: "Docker containerization and orchestration certification.",
      skills: ["Docker", "Containerization", "Docker Compose", "Best Practices"],
      verificationUrl: "https://example.com/verify",
      category: "devops"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Certificates', count: certificates.length },
    { id: 'frontend', label: 'Frontend', count: certificates.filter(c => c.category === 'frontend').length },
    { id: 'fullstack', label: 'Full Stack', count: certificates.filter(c => c.category === 'fullstack').length },
    { id: 'cloud', label: 'Cloud', count: certificates.filter(c => c.category === 'cloud').length },
    { id: 'database', label: 'Database', count: certificates.filter(c => c.category === 'database').length },
    { id: 'devops', label: 'DevOps', count: certificates.filter(c => c.category === 'devops').length }
  ]

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Continuous learning is key to staying current in technology. Here are the certifications 
            I've earned to validate my skills and knowledge.
          </p>
        </div>

        {/* Certificate Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <div key={category.id} className="text-center">
              <div className="bg-blue-50 rounded-lg px-4 py-2">
                <span className="text-sm font-medium text-blue-800">{category.label}</span>
                <div className="text-xs text-blue-600 mt-1">{category.count} certificates</div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Verified
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{certificate.title}</h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {certificate.category}
                  </span>
                </div>
                
                <p className="text-sm font-semibold text-blue-600 mb-2">{certificate.issuer}</p>
                <p className="text-sm text-gray-600 mb-4">{certificate.description}</p>

                {/* Credential ID */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500">Credential ID:</p>
                  <p className="text-sm font-mono text-gray-700">{certificate.credentialId}</p>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Date and Verification */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{certificate.date}</span>
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
                  >
                    Verify Certificate
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Additional Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6+</div>
                <div className="text-blue-100">Professional Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Hours of Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Skills Validated</div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">My Learning Journey</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I believe in continuous learning and staying updated with the latest technologies. 
            These certifications represent my commitment to professional growth and expertise in various domains.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Certificates 