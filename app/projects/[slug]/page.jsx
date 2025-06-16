import Image from 'next/image';
import { workData } from '../../../assets/assets';

export default function ProjectDetails({ params }) {
  const project = workData.find((p) => p.slug === params.slug);

  if (!project) {
    return <div className="p-10">Project not found.</div>;
  }

  return (
    <div className="w-full px-[12%] py-10 flex flex-col items-start gap-6">
      <div className="w-full aspect-video relative">
        <Image src={project.bgImage} alt={project.title} fill className="object-cover" />
      </div>
      <h1 className="text-4xl font-semibold" style={{color: 'var(--text-color)'}}>{project.title}</h1>
      <p style={{color: 'var(--text-color)'}}>{project.description}</p>
    </div>
  );
}
