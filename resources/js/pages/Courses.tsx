import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
// Using the original NavBar component as requested
import NavBar from '@/components/nav-bar';
import Footer from '@/sections/FooterSection';

const courses = [
    {
        title: 'Spring Boot Foundations',
        slug: 'spring-boot-beginners',
        description: 'Master the fundamentals of Spring Boot with hands-on projects and real-world applications.',
        price: 'Free',
        type: 'free',
        duration: '1.5 hours',
        students: '12,500+',
        level: 'Beginner',
        icon: '🚀'
    },
    {
        title: 'Advanced Spring Boot Architecture',
        slug: 'advanced-spring-boot',
        description: 'Design scalable microservices with advanced Spring Boot patterns and best practices.',
        price: 'Premium',
        type: 'premium',
        duration: '5.5 hours',
        students: '8,200+',
        level: 'Advanced',
        icon: '🧠'
    },
    {
        title: 'React.js Professional Certification',
        slug: 'react-js-guide',
        description: 'Build production-ready React applications with hooks, context, and modern tooling.',
        price: 'Premium',
        type: 'premium',
        duration: '8.5 hours',
        students: '15,300+',
        level: 'Intermediate',
        icon: '⚛️'
    },
    {
        title: 'DevOps with Docker & Kubernetes',
        slug: 'devops-docker-kubernetes',
        description: 'Containerize applications and deploy to Kubernetes clusters with CI/CD pipelines.',
        price: 'Premium',
        type: 'premium',
        duration: '6 hours',
        students: '9,700+',
        level: 'Intermediate',
        icon: '🐳'
    },
    {
        title: 'Python for Data Science',
        slug: 'python-data-science',
        description: 'Analyze and visualize data with Pandas, NumPy, and Matplotlib.',
        price: 'Free',
        type: 'free',
        duration: '3 hours',
        students: '18,900+',
        level: 'Beginner',
        icon: '🐍'
    },
    {
        title: 'AWS Certified Solutions Architect',
        slug: 'aws-certification',
        description: 'Prepare for the AWS certification with real-world cloud architecture scenarios.',
        price: 'Premium',
        type: 'premium',
        duration: '10 hours',
        students: '6,500+',
        level: 'Advanced',
        icon: '☁️'
    }
];

export default function Courses() {
    const [filter, setFilter] = useState('all');
    // Initialize dark mode from localStorage or default to false
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('theme');
            return savedMode === 'dark' ? true : false;
        }
        return false;
    });

    // Effect to apply/remove 'dark' class on the HTML element
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const filteredCourses = filter === 'all'
        ? courses
        : courses.filter((course) => course.type === filter);

    return (
        <>
            <Head title="Professional Courses" />

            <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen flex flex-col">
                {/* Using the imported NavBar and passing dark mode props */}
                <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

                {/* Hero Section */}
                <div className="bg-gray-800 dark:bg-gradient-to-r dark:from-indigo-900 dark:to-gray-900 py-20 px-6 shadow-md dark:shadow-xl">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-12">
                            Professional Development Courses in Java, PHP, Spring Boot & DevOps
                        </h1>
                        <p className="text-xl text-indigo-100 dark:text-gray-300 max-w-3xl mx-auto">
                            Advance your technical expertise with our comprehensive, industry-relevant curriculum designed and delivered by seasoned professionals
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <section className="max-w-7xl mx-auto px-6 py-16 flex-grow">
                    {/* Filter Tabs */}
                    <div className="mb-12 flex flex-wrap gap-3 justify-center">
                        <button
                            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 border ${filter === 'all'
                                ? 'bg-indigo-600 text-white shadow-lg border-indigo-600'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                            onClick={() => setFilter('all')}
                        >
                            All Courses
                        </button>
                        <button
                            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 border ${filter === 'premium'
                                ? 'bg-indigo-600 text-white shadow-lg border-indigo-600'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                            onClick={() => setFilter('premium')}
                        >
                            Premium Courses
                        </button>
                        <button
                            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 border ${filter === 'free'
                                ? 'bg-indigo-600 text-white shadow-lg border-indigo-600'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                            onClick={() => setFilter('free')}
                        >
                            Free Courses
                        </button>
                    </div>

                    {/* Course Cards */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course, i) => (
                                <div
                                    key={i}
                                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform"
                                >
                                    <div className="p-6">
                                        <div className="flex items-start mb-4">
                                            <span className="text-2xl mr-3">{course.icon}</span>
                                            <div>
                                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                                    {course.title}
                                                </h2>
                                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${course.type === 'free'
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                                                    }`}
                                                >
                                                    {course.price}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-gray-700 dark:text-gray-300 mb-5 text-sm min-h-[3rem]">
                                            {course.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-3 mb-5 text-xs">
                                            <div className="text-gray-600 dark:text-gray-400">
                                                <div className="font-medium">Duration</div>
                                                <div className="text-gray-900 dark:text-white">{course.duration}</div>
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                <div className="font-medium">Students</div>
                                                <div className="text-gray-900 dark:text-white">{course.students}</div>
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                <div className="font-medium">Level</div>
                                                <div className="text-gray-900 dark:text-white">{course.level}</div>
                                            </div>
                                        </div>

                                        <Link
                                            href={`/courses/${course.slug}`}
                                            className={`block text-center w-full py-2.5 rounded-lg text-sm font-medium transition-all ${course.type === 'free'
                                                ? 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                                                : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md'
                                                }`}
                                        >
                                            {course.type === 'free' ? 'Start Learning' : 'Enroll Now'}
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-600 dark:text-gray-400 text-lg mt-8">
                                No courses found for the selected filter.
                            </p>
                        )}
                    </div>
                </section>

                {/* Stats Section */}
                <div className="bg-gray-100 dark:bg-gray-900 py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                            Our Learning Impact
                        </h2>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {/* Stat 1 */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-sm">
                                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                                    50K+
                                </div>
                                <div className="text-gray-600 dark:text-gray-300 text-sm">
                                    Students Enrolled
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-sm">
                                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                                    120+
                                </div>
                                <div className="text-gray-600 dark:text-gray-300 text-sm">
                                    Hours of Content
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-sm">
                                <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                                    98%
                                </div>
                                <div className="text-gray-600 dark:text-gray-300 text-sm">
                                    Satisfaction Rate
                                </div>
                            </div>

                            {/* Stat 4 */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-sm">
                                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                                    15+
                                </div>
                                <div className="text-gray-600 dark:text-gray-300 text-sm">
                                    Industry Experts
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-indigo-700 dark:bg-gradient-to-r dark:from-indigo-900 dark:to-purple-900 py-16 text-center shadow-md dark:shadow-xl">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Transform Your Career?
                        </h2>
                        <p className="text-indigo-100 dark:text-gray-300 mb-8 text-lg">
                            Join thousands of developers who've accelerated their careers with our courses
                        </p>
                        <Link
                            href="/courses" // Assuming this links to the main courses page
                            className="px-8 py-3 bg-white text-indigo-700 dark:bg-gray-100 dark:text-indigo-900 font-bold rounded-lg hover:bg-gray-100 dark:hover:bg-white transition-all shadow-lg"
                        >
                            Browse All Courses
                        </Link>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}