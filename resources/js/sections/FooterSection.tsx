import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in Java (Spring Boot), PHP (Laravel, Symfony), JavaScript frameworks (React, Angular, Vue), and DevOps tools like Docker, Kubernetes, Jenkins, and OpenShift."
    },
    {
      question: "Are you open to remote work or relocation?",
      answer: "Yes, I am willing to relocate and open to remote opportunities."
    },
    {
      question: "How can I contact you for projects or job offers?",
      answer: "You can contact me via the form in the Contact section or through social media links below."
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError('');
    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // Here you would normally integrate with a newsletter service
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* FAQs */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">FAQs</h3>
          <dl className="space-y-4">
            {faqs.map(({ question, answer }, idx) => (
              <div key={idx}>
                <dt className="font-medium">{question}</dt>
                <dd className="text-gray-400 mt-1">{answer}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Newsletter</h3>
          {subscribed ? (
            <p className="text-green-400">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
             <input
  type="email"
  placeholder="Your email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="flex-grow px-4 py-2 text-white-900 bg-transparent border-b-2 border-gray-400 focus:border-indigo-600 focus:outline-none"
  required
/>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-md py-2 font-semibold"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Connect with me</h3>
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:climathe1@gmail.com"
              className="hover:text-indigo-500 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      <p className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} Cliff Mathebula. All rights reserved.
      </p>
    </footer>
  );
}
