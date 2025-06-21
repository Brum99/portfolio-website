'use client';
import Link from 'next/link';
import Image from 'next/image';
import { workData } from '../../assets/assets';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';

export default function ProjectsPage() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="w-full px-[12%] pt-24 pb-10 grid grid-cols-auto gap-8">
        {workData.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="border rounded-lg overflow-hidden group"
          >
            <div className="w-full aspect-video relative">
              <Image src={project.bgImage} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-1" style={{ color: 'var(--text-color)' }}>
                {project.title}
              </h2>
              <p className="text-gray-700" style={{ color: 'var(--text-color)' }}>
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
