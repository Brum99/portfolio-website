import Link from 'next/link';
import Image from 'next/image';
import { workData } from '../../assets/assets';

export default function ProjectsPage() {
  return (
    <div className="w-full px-[12%] py-10 flex flex-col gap-8">
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
            <h2 className="text-2xl font-semibold mb-1" style={{color: 'var(--text-color)'}}>{project.title}</h2>
            <p className="text-gray-700" style={{color: 'var(--text-color)'}}>{project.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
