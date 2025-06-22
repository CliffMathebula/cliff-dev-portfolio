import React from 'react';

const videos = [
  {
    title: "🚀 Build Your Developer Portfolio with Laravel + React",
    url: "https://www.youtube.com/embed/xvbBaqGFcJI",
    description: "A complete walkthrough for setting up your Laravel + React dev portfolio project.",
  },
  {
    title: "🔥 CI/CD Setup with Jenkins & OpenShift",
    url: "https://www.youtube.com/embed/abcd1234", // Replace with your real video ID
    description: "Deploy Java and PHP apps faster with CI/CD pipelines using Jenkins and OpenShift.",
  },
  {
    title: "🧠 Secure APIs with Spring Boot & JWT",
    url: "https://www.youtube.com/embed/wxyz5678", // Replace with your real video ID
    description: "Secure your backend using JWT authentication in Spring Boot.",
  },
];

export default function YouTubeSection() {
  return (
    <section id="videos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          📺 YouTube Videos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all hover:shadow-2xl"
            >
              <div className="aspect-video">
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
