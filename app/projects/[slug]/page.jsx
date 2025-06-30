import { workData } from '../../../assets/assets';
import { loadProjectMdx } from '../../../lib/mdx-loader';
import ProjectDetailsClient from './ProjectDetailsClient';

export const dynamic = 'force-static'; // Ensures static generation

// Optional: prebuild routes
export async function generateStaticParams() {
  return workData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetails(props) {
  const { slug } = await props.params;

  const project = workData.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-10 text-red-600">🚫 Project not found.</div>;
  }

  const mdxContent = await loadProjectMdx(project.contentPath);

  return <ProjectDetailsClient project={project} mdxContent={mdxContent} />;
}
