// components/EducationSection.tsx
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

export default function EducationSection() {
  const education = [
    {
      degree: 'Diploma in Information Technology',
      institution: 'University of South Africa (UNISA)',
      year: '2017',
    },
    {
      degree: 'Matric',
      institution: 'Majeje High School, Limpopo',
      year: '2009',
    },
    {
      degree: 'Project Management Certification',
      institution: 'PMP with Jira (Online)',
      year: 'N/A',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          <FaGraduationCap className="inline-block mr-2 text-indigo-500" />
          Education & Certifications
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <FaUniversity className="text-indigo-500 text-xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.degree}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{item.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
