import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaCss3Alt, 
  FaHtml5, 
  FaJsSquare, 
  FaGitAlt, 
  FaGithub,
  FaPython,
  FaDatabase,
  FaFigma,
  FaAws
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiExpress, 
  SiMongodb, 
  SiMysql,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiRender,
  SiNpm,
  SiPostman,
  SiFilezilla
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-4xl mb-4" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl mb-4" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-600 text-4xl mb-4" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-4xl mb-4" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl mb-4" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-600 text-4xl mb-4" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl mb-4" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-4xl mb-4" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl mb-4" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl mb-4" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-4xl mb-4" /> },
    { name: "Python", icon: <FaPython className="text-blue-500 text-4xl mb-4" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-600 text-4xl mb-4" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 text-4xl mb-4" /> },
    { name: "VS Code", icon: <TbBrandVscode className="text-blue-500 text-4xl mb-4" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500 text-4xl mb-4" /> },
    { name: "Figma", icon: <FaFigma className="text-purple-500 text-4xl mb-4" /> },
    { name: "Vercel", icon: <SiVercel className="text-black text-4xl mb-4" /> },
    { name: "Netlify", icon: <SiNetlify className="text-green-500 text-4xl mb-4" /> },
    { name: "Render", icon: <SiRender className="text-blue-500 text-4xl mb-4" /> },
    { name: "npm", icon: <SiNpm className="text-red-500 text-4xl mb-4" /> },
    { name: "FileZilla", icon: <SiFilezilla className="text-orange-500 text-4xl mb-4" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I've worked with a variety of technologies to create robust and scalable applications. 
            Here are the skills I've developed through my projects and experience.
          </p>
        </div>

        <div className="p-10 bg-white shadow-md rounded-lg mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                {skill.icon}
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
            <p className="text-blue-100 mb-6">
              Beyond technical skills, I bring strong interpersonal and problem-solving abilities.
            </p>
            <div className="flex flex-wrap text-black justify-center gap-4">
              {[
                'Effective Communication',
                'Team Work', 
                'Leadership',
                'Quick Learning',
                'Problem Solving'
              ].map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 