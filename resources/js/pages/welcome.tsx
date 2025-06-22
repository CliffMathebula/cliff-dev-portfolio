import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import NavBar from '@/components/nav-bar';
import HeroSection from '@/sections/HeroSection';
import PortfolioSection from '@/sections/PortFolio';
import ExperienceSection from '@/sections/ExperienceSection';
import EducationSection from '../sections/EducationSection';
import ContactSection from '@/sections/ContactSection';
import BlogSection from '@/sections/BlogSection';
import YouTubeSection from '@/sections/YouTubeSection';
import DownloadResume from '@/sections/DownloadResume';
import Footer from '@/sections/FooterSection';

export default function Welcome() {
  const { auth } = usePage<SharedData>().props;

  // Set dark mode by default when component mounts
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.add('light');
    }
  }, []);

  return (
    <>
      <Head title="Welcome Cliff Mathebula Portfolio" />

      {/* Main wrapper with dark mode by default */}
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        {/* Render the navbar */}
        <NavBar />

        {/* Main content area */}
        <main className="flex-grow">
          <HeroSection />
          <PortfolioSection />
          <ExperienceSection />
          <EducationSection />
          <DownloadResume />
          <ContactSection />
          <BlogSection />
          <YouTubeSection />
          <Footer/>
        </main>


      </div>
    </>
  );
}