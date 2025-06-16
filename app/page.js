'use client';
import React, { useEffect, useState } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    // Add transition helper class
    root.classList.add('theme-transition');

    // Apply or remove dark mode
    if (isDarkMode) {
      root.classList.add('theme-dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('theme-dark');
      localStorage.theme = '';
    }

    // Remove helper class after transition duration
    const timeout = setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 400); // Match the CSS transition duration

    return () => clearTimeout(timeout);
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
