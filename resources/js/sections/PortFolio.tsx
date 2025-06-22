import React from 'react';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projects = [
  {
    title: 'SA Quick Jobs',
    url: 'https://saquickjobs.co.za',
    image: '/images/projects/saquickjobs.png',
    tech: ['Laravel', 'React', 'TailwindCSS']
  },
  {
    title: 'SA Job Connect',
    url: 'https://sajobconnect.com/',
    image: '/images/projects/sajobconnect.png',
    tech: ['Vue.js', 'Laravel', 'MySQL']
  },
  {
    title: 'Auto Pedigree',
    url: 'https://autopedigree.co.za',
    image: '/images/projects/autopedigree.png',
    tech: ['PHP', 'Symfony', 'Bootstrap']
  },
  {
    title: 'Nerdw',
    url: 'https://nerdw.com',
    image: '/images/projects/nerdw.png',
    tech: ['Node.js', 'Next.js', 'MongoDB']
  },
  {
    title: 'Exclusive Auto Works',
    url: 'https://exclusiveautoworks.co.za/',
    image: '/images/projects/exclusiveautoworks.png',
    tech: ['PHP', 'Bootstrap', 'jQuery']
  },
  {
    title: 'Bright Eagles',
    url: 'https://brighteagles.co.za/',
    image: '/images/projects/brighteagles.png',
    tech: ['Laravel', 'Blade', 'CSS3']
  },
  {
    title: 'Ledwaba Moabelo Attorneys',
    url: 'https://www.ledwabamoabelo.co.za/',
    image: '/images/projects/ledwaba.png',
    tech: ['WordPress', 'Elementor', 'SEO']
  },
  {
    title: 'WitechConnect',
    url: 'https://www.witechconnect.co.za/',
    image: '/images/projects/witechconnect.png',
    tech: ['WordPress', 'Elementor', 'SEO']
  }
];

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  Visit Site <FaExternalLinkAlt className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
