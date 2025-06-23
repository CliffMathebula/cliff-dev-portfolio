import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import NavBar from '@/components/nav-bar';
import Footer from '@/sections/FooterSection';
import { FaPlayCircle, FaDownload, FaCertificate, FaChartLine, FaClock, FaUserGraduate } from 'react-icons/fa';

export default function CourseDetail() {
    const { slug } = usePage().props as unknown as { slug: string };
    const courseTitle = slug.replace(/-/g, ' ');

    // Mock course data - replace with your actual data
    const courseData = {
        title: courseTitle,
        description: `Master ${courseTitle} with our comprehensive course designed for all skill levels. Learn from industry experts and gain hands-on experience through practical projects.`,
        duration: '8 weeks',
        students: '1,200+',
        level: 'Intermediate',
        lessons: 24,
        resources: 18,
        instructor: {
            name: 'Dr. Sarah Johnson',
            bio: 'Senior Developer with 10+ years of industry experience',
            avatar: '/images/instructor.jpg'
        },
        features: [
            'Hands-on projects',
            'Certificate of completion',
            'Lifetime access',
            'Community support',
            'Q&A sessions'
        ]
    };

    return (
        <>
            <Head title={`${courseData.title} Course`} />

            <NavBar />

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-2/3">
                            <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
                                Premium Course
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white capitalize mb-6">
                                {courseData.title}
                            </h1>
                            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                                {courseData.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                    <FaClock className="text-indigo-500" />
                                    <span>{courseData.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                    <FaUserGraduate className="text-indigo-500" />
                                    <span>{courseData.students} enrolled</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                    <FaChartLine className="text-indigo-500" />
                                    <span>{courseData.level}</span>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center gap-2">
                                    <FaPlayCircle /> Enroll Now
                                </button>
                                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center gap-2">
                                    <FaDownload /> Download Syllabus
                                </button>
                            </div>
                        </div>
                        
                        <div className="lg:w-1/3">
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                                <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                                    <FaPlayCircle className="text-white text-6xl opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Course Features</h3>
                                    <ul className="space-y-3">
                                        {courseData.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                                <span className="text-indigo-500 mt-1">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                        <div className="flex items-center gap-4">
                                            <img 
                                                src={courseData.instructor.avatar} 
                                                alt={courseData.instructor.name} 
                                                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-200 dark:border-indigo-800"
                                            />
                                            <div>
                                                <h4 className="font-medium text-gray-900 dark:text-white">Instructor</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{courseData.instructor.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Content Section */}
                <section className="max-w-7xl mx-auto px-6 py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm mb-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                            What You'll Learn
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Core Concepts</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start gap-2">• Fundamental principles</li>
                                    <li className="flex items-start gap-2">• Best practices</li>
                                    <li className="flex items-start gap-2">• Industry standards</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Hands-on Projects</h3>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start gap-2">• Real-world applications</li>
                                    <li className="flex items-start gap-2">• Practical exercises</li>
                                    <li className="flex items-start gap-2">• Portfolio-worthy work</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 border border-indigo-100 dark:border-indigo-900/30">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded-full">
                                    <FaCertificate className="text-indigo-600 dark:text-indigo-400 text-4xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Earn a Certificate</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Complete this course to receive an official certificate that you can share with your professional network.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}