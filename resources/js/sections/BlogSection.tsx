import React from 'react';

const blogPosts = [
  {
    title: "Mastering CI/CD with GitLab & OpenShift",
    date: "May 2024",
    tags: ["DevOps", "CI/CD"],
    link: "https://medium.com/@climathe1/mastering-cicd",
    excerpt: "Explore how to set up efficient CI/CD pipelines using GitLab CI and OpenShift to streamline deployments.",
  },
  {
    title: "Building Secure APIs with Spring Boot & JWT",
    date: "Feb 2024",
    tags: ["Java", "Security"],
    link: "https://dev.to/cliffmathebula/spring-jwt-security",
    excerpt: "A step-by-step guide to implementing secure token-based authentication in your Spring Boot backend.",
  },
  {
    title: "Why Laravel & Vue Make the Perfect Duo",
    date: "Dec 2023",
    tags: ["Laravel", "Vue.js"],
    link: "https://cliffmathebula.hashnode.dev/laravel-vue-setup",
    excerpt: "Combining Laravel with Vue can fast-track your full-stack app delivery. Here's how to set them up right.",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Latest Blog Posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {post.date} · {post.tags.join(", ")}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                {post.excerpt}
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
