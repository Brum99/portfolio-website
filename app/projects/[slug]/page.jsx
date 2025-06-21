import { workData } from '../../../assets/assets';
import { loadProjectMdx } from '../../../lib/mdx-loader';
import ProjectDetailsClient from './ProjectDetailsClient';

export default async function ProjectDetails({ params }) {
  const { slug } = params;
  const project = workData.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-10 text-red-600">🚫 Project not found.</div>;
  }

  const mdxContent = await loadProjectMdx(project.contentPath);

  return <ProjectDetailsClient project={project} mdxContent={mdxContent} />;
}
