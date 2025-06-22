import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Let’s Get in Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10">
          I’m always open to new opportunities and collaborations. Whether it’s a job, a freelance project, or just a tech chat — feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-5">
            <div className="flex items-center text-gray-800 dark:text-gray-200 space-x-3">
              <FaEnvelope className="text-indigo-500" />
              <span>climathe1@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-800 dark:text-gray-200 space-x-3">
              <FaPhoneAlt className="text-indigo-500" />
              <span>+27 65 905 6171</span>
            </div>
            <div className="flex items-center text-gray-800 dark:text-gray-200 space-x-3">
              <FaLinkedin className="text-indigo-500" />
              <a href="https://www.linkedin.com/in/cliff-mathebula" target="_blank" className="hover:underline">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center text-gray-800 dark:text-gray-200 space-x-3">
              <FaGithub className="text-indigo-500" />
              <a href="https://github.com/cliffmathebula" target="_blank" className="hover:underline">
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Optional Contact Form */}
          <form className="space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
              <input type="text" className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
              <input type="email" className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100" />
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition duration-200">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
