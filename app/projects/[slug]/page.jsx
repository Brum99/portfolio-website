import { workData } from '../../../assets/assets';
import Navbar from '../../components/Navbar';
import { loadProjectMdx } from '../../../lib/mdx-loader';

export default async function ProjectDetails({ params }) {
  const { slug } = params;
  const project = workData.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-10 text-red-600">🚫 Project not found.</div>;
  }

  const mdxContent = await loadProjectMdx(project.contentPath);

  return (
    <>
      <Navbar />

      <div className="w-full px-[12%] pt-24 pb-10 flex flex-col items-start gap-6">
        <div className="w-full aspect-video relative">
          <img src={project.bgImage} alt={project.title} className="object-cover w-full h-auto rounded-lg" />
        </div>
        <h1 className="text-4xl font-semibold" style={{ color: 'var(--text-color)' }}>
          {project.title}
        </h1>
        <p style={{ color: 'var(--text-color)' }}>{project.description}</p>

        {/* 🧠 This is where the MDX content renders */}
        <div className="mt-8 w-full">{mdxContent}</div>
      </div>
    </>
  );
}
