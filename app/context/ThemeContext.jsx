'use client';

import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') setIsDarkMode(true);
    else setIsDarkMode(false);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('theme-transition');

    if (isDarkMode) {
      root.classList.add('theme-dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('theme-dark');
      localStorage.setItem('theme', 'light');
    }

    const timeout = setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 400);

    return () => clearTimeout(timeout);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
