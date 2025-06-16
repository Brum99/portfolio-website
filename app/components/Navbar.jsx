'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';




const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when theme changes or when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (pathname === '/') {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      ref={navRef}
      className={`
        fixed top-0 left-0 right-0 z-50 
        main-nav
        ${isScrolled ? 'nav-blur-bg' : 'nav-light-bg'}
        transition-all duration-400 ease-in-out
      `}
      style={{
        backgroundColor: isScrolled 
          ? 'var(--nav-blur-bg-color)' 
          : 'var(--nav-bg-color)',
        backdropFilter: isScrolled ? 'blur(16px)' : 'blur(8px)',
        boxShadow: isDarkMode ? 'none' : 'var(--nav-shadow)'
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Fixed to left */}
          <div className="flex-shrink-0">
            <Link
              href={pathname === '/' ? '#header' : '/#header'}
              className="text-xl font-bold"
              style={{ color: 'var(--text-color)' }}
              onClick={(e) => handleNavClick(e, 'header')}
            >
              Samuel.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { name: 'Home', id: 'header' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Work', id: 'work' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <Link
                  key={item.id}
                  href={pathname === '/' ? `#${item.id}` : `/#${item.id}`}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-theme-hover"
                  style={{ color: 'var(--text-color)' }}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/projects"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-theme-hover"
                style={{ color: 'var(--text-color)' }}
              >
                Projects
              </Link>
              </div>
            </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md transition-colors duration-200 hover:bg-theme-hover"
              style={{ color: 'var(--text-color)' }}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md transition-colors duration-200 hover:bg-theme-hover"
                style={{ color: 'var(--text-color)' }}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-opacity-20" style={{ borderColor: 'var(--text-color)' }}>
              {[
                { name: 'Home', id: 'header' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Work', id: 'work' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <Link
                  key={item.id}
                  href={pathname === '/' ? `#${item.id}` : `/#${item.id}`}
                  className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-theme-hover"
                  style={{ color: 'var(--text-color)' }}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/projects"
                className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-theme-hover"
                style={{ color: 'var(--text-color)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;