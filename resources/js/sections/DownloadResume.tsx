import React from 'react';

export default function DownloadResume() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Download My Resume
      </h2>
      <p className="mb-8 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        Get a copy of my up-to-date resume for your review.
      </p>
      <a
        href="/cv/CV of Cliff.pdf"
        download="Cliff-Mathebula-Resume.pdf"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
      >
        Download Resume (PDF)
      </a>
    </section>
  );
}
