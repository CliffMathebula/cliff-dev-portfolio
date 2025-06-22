import React, { useEffect, useState } from 'react';
import { usePage, Link } from '@inertiajs/react';
import { type SharedData } from '@/types';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const siteTitle = "CM."; // change as needed

export default function NavBar() {
  const { auth } = usePage<SharedData>().props;

  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'My CV', href: '/cv' },
  ];

  const projectLinks = [1, 2, 3].map(i => ({
    label: `Project ${i}`,
    href: `/projects/${i}`,
  }));

  const authLinks = auth.user
    ? [{ label: 'Dashboard', href: '/dashboard' }]
    : [
        { label: 'Log in', href: '/login' },
        { label: 'Register', href: '/register' },
      ];

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-100 dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo / Title */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 dark:text-white tracking-tight hover:scale-105 transition-transform"
        >
          {siteTitle}
        </Link>

        {/* Mobile Controls */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="rounded-full bg-gray-200 dark:bg-gray-700 p-2 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none mr-2"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <FaSun className="h-5 w-5 text-yellow-400" />
            ) : (
              <FaMoon className="h-5 w-5 text-gray-800 dark:text-white" />
            )}
          </button>
          <Button
            onClick={toggleMobileMenu}
            variant="ghost"
            size="icon"
            className="hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-5 w-5 text-gray-800 dark:text-white" />
            ) : (
              <FaBars className="h-5 w-5 text-gray-800 dark:text-white" />
            )}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6 items-center">
              {navLinks.map(({ label, href }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink
                    href={href}
                    className="text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-300 font-medium text-base transition-colors"
                  >
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-300 font-medium text-base">
                  Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg space-y-2 min-w-[160px] border border-gray-200 dark:border-gray-700">
                    {projectLinks.map(({ label, href }) => (
                      <NavigationMenuLink
                        key={href}
                        href={href}
                        className="block px-3 py-2 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                      >
                        {label}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {authLinks.map(({ label, href }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink
                    href={href}
                    className="text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-300 font-medium text-base transition-colors"
                  >
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuIndicator className="bg-indigo-500 h-[2px] rounded-full" />
            </NavigationMenuList>
          </NavigationMenu>

          <button
            onClick={toggleDarkMode}
            className="ml-4 rounded-full bg-gray-200 dark:bg-gray-700 p-2 hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <FaSun className="h-5 w-5 text-yellow-400" />
            ) : (
              <FaMoon className="h-5 w-5 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 py-4 transition-all duration-300">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col space-y-2 px-4">
              {[...navLinks, ...projectLinks, ...authLinks].map(({ label, href }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-300 font-medium rounded-md transition-colors"
                  >
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </nav>
  );
}
