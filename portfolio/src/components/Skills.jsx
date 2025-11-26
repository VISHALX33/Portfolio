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

  // ---------- FRONTEND ----------
  const frontend = [
    { name: "HTML5", icon: <FaHtml5 className="text-black text-4xl mb-4" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-black text-4xl mb-4" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-black text-4xl mb-4" /> },
    { name: "React", icon: <FaReact className="text-black text-4xl mb-4" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl mb-4" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-black text-4xl mb-4" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-black text-4xl mb-4" /> },
    { name: "Figma", icon: <FaFigma className="text-black text-4xl mb-4" /> },
  ];

  // ---------- BACKEND ----------
  const backend = [
    { name: "Node.js", icon: <FaNodeJs className="text-black text-4xl mb-4" /> },
    { name: "Express.js", icon: <SiExpress className="text-black text-4xl mb-4" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-black text-4xl mb-4" /> },
    { name: "MySQL", icon: <SiMysql className="text-black text-4xl mb-4" /> },
    { name: "Python", icon: <FaPython className="text-black text-4xl mb-4" /> },
    { name: "AWS", icon: <FaAws className="text-black text-4xl mb-4" /> },
  ];

  // ---------- TOOLS ----------
  const tools = [
    { name: "Git", icon: <FaGitAlt className="text-black text-4xl mb-4" /> },
    { name: "GitHub", icon: <FaGithub className="text-black text-4xl mb-4" /> },
    { name: "VS Code", icon: <TbBrandVscode className="text-black text-4xl mb-4" /> },
    { name: "Postman", icon: <SiPostman className="text-black text-4xl mb-4" /> },
    { name: "Vercel", icon: <SiVercel className="text-black text-4xl mb-4" /> },
    { name: "Netlify", icon: <SiNetlify className="text-black text-4xl mb-4" /> },
    { name: "Render", icon: <SiRender className="text-black text-4xl mb-4" /> },
    { name: "npm", icon: <SiNpm className="text-black text-4xl mb-4" /> },
    { name: "FileZilla", icon: <SiFilezilla className="text-black text-4xl mb-4" /> },
  ];

  const renderSection = (title, data) => (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-black mb-6 text-center">{title}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-200"
          >
            {skill.icon}
            <h3 className="text-xl font-semibold text-black">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A clean and categorized view of the tech I use to build modern applications.
          </p>
        </div>

        {renderSection("Frontend Development", frontend)}
        {renderSection("Backend Development", backend)}
        {renderSection("Tools & Deployment", tools)}

        {/* Soft Skills */}
        <div className="mt-16 bg-black rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
            <p className="text-gray-300 mb-6">
              Clear communication, teamwork, leadership, and problem-solving.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Communication",
                "Team Work",
                "Leadership",
                "Quick Learning",
                "Problem Solving"
              ].map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-full text-sm font-medium"
                >
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
