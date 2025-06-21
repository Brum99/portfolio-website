'use client';

import { useTheme } from '../../context/ThemeContext';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

export default function ProjectDetailsClient({ project, mdxContent }) {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="w-full px-[12%] pt-24 pb-10 flex flex-col items-start gap-6">
          <div className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden">
            <Image
              src={project.headerImage}
              alt={project.title}
              className="w-full h-auto max-h-[320px] object-cover"
              width={1200}
              height={600}
              priority
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
