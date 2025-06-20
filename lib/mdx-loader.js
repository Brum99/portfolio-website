import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc'; // ✅ assuming you're using App Router
import { customComponents } from './mdx-components';

export async function loadProjectMdx(filename) {
  const fullPath = path.join(process.cwd(), 'projectContent', filename);
  const mdxContent = fs.readFileSync(fullPath, 'utf-8');

  return (
    <article className="prose dark:prose-invert">
      <MDXRemote source={mdxContent} components={customComponents} />
    </article>
  );
}
