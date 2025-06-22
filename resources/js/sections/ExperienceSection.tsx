import React from 'react';

export default function ExperienceSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
          Experience & Background
        </h2>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Professional Summary</h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Highly experienced and results-driven Full Stack Developer and DevOps Specialist with over 6 years of expertise in designing, developing,
            and deploying robust web applications. Skilled in Spring Boot, Laravel, Symfony, Node.js, Go, and Ruby on Rails. Proficient in Docker,
            Kubernetes, OpenShift, Jenkins, AWS, and CI/CD automation. Strong database knowledge (PostgreSQL, MongoDB, MySQL), and secure systems
            with JWT authentication. Passionate about building scalable, secure, and maintainable systems.
          </p>
        </div>

        {/* Timeline Experience */}
        <div className="space-y-10">
          <ExperienceCard
            title="Software Developer"
            company="SITA SOC"
            period="April 2023 – Present"
            bullets={[
              "Built enterprise systems with Java (Spring Boot) and JWT-secured APIs.",
              "Managed PostgreSQL, MongoDB, and MySQL for high availability.",
              "Optimized CI/CD pipelines with OpenShift and Jenkins, reducing deployment time by 40%.",
              "Implemented FreePBX telephony system, improving communication by 30%.",
            ]}
            stack="Java, Angular, PHP (Symfony), Node.js, Docker, OpenShift, GitLab CI, Jenkins"
          />

          <ExperienceCard
            title="Full-Stack Developer"
            company="Nerdware"
            period="Feb 2022 – Mar 2023"
            bullets={[
              "Developed web apps with Laravel and Symfony.",
              "Improved performance and added security layers.",
            ]}
            stack="PHP, Laravel, Symfony, MySQL, TailwindCSS, Git"
          />

          <ExperienceCard
            title="Full-Stack Developer & Web Admin"
            company="Finbar Hosting"
            period="Oct 2020 – Jan 2022"
            bullets={[
              "Handled web hosting, DB management, and Dockerized deployments.",
            ]}
            stack="PHP, Python, Django, Laravel, Angular, Docker, C#"
          />

          <ExperienceCard
            title="Software Developer"
            company="Prepaid Meters"
            period="Sep 2019 – Sep 2020"
            bullets={[
              "Built full-stack solutions and managed deployments via Docker/OpenShift.",
              "Awarded Employee of the Month for optimizing key systems.",
            ]}
            stack="PHP (OOP), Laravel, Angular, Docker, OpenShift"
          />

          <ExperienceCard
            title="Software Developer"
            company="Motor Accident Group"
            period="Jun 2018 – Aug 2019"
            bullets={[
              "Developed back-end and front-end apps in Laravel and Symfony.",
            ]}
            stack="Laravel, Symfony, Vue.js, C#, .NET"
          />
        </div>

        {/* Other Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 dark:text-gray-300">
          <div>
            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Education</h4>
            <p>🎓 Diploma in IT - UNISA (2017)</p>
            <p>🎓 Matric - Majeje High School (2009)</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Certifications</h4>
            <p>✅ Project Management Professional with Jira</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Key Achievements</h4>
            <ul className="list-disc list-inside">
              <li>🚀 Cut CI/CD deployment time by 40% using OpenShift & Jenkins</li>
              <li>📞 Improved communication by 30% via FreePBX integration</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Availability</h4>
            <p>🕒 Four weeks' notice</p>
            <p>📍 Willing to relocate</p>
            <p>📧 <a href="mailto:climathe1@gmail.com" className="underline">climathe1@gmail.com</a></p>
            <p>📞 +27 65 905 6171</p>
            <p>
              🔗 <a href="https://www.linkedin.com/in/yourprofile" className="underline">LinkedIn</a> |{' '}
              <a href="https://github.com/yourusername" className="underline">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ title, company, period, bullets, stack }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h4>
        <span className="text-sm text-gray-500 dark:text-gray-400">{period}</span>
      </div>
      <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">{company}</p>
      <ul className="list-disc list-inside mb-3 space-y-1">
        {bullets.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-500 dark:text-gray-400">Stack: {stack}</p>
    </div>
  );
}
