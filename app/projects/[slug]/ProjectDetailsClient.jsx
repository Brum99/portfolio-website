'use client';

import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

export default function ProjectDetailsClient({ project, mdxContent }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('theme-transition');
    if (isDarkMode) {
      root.classList.add('theme-dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('theme-dark');
      localStorage.theme = '';
    }

    const timeout = setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 400);

    return () => clearTimeout(timeout);
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="w-full px-[12%] pt-24 pb-10 flex flex-col items-start gap-6">
        <div className="w-full aspect-video relative">
          <Image
            src={project.bgImage}
            alt={project.title}
            fill
            className="object-cover w-full h-auto rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-semibold" style={{ color: 'var(--text-color)' }}>
          {project.title}
        </h1>
        <p style={{ color: 'var(--text-color)' }}>{project.description}</p>

        <div className="mt-8 w-full">{mdxContent}</div>
      </div>
    </>
  );
}
