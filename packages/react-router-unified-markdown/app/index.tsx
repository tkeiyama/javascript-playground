import { readFile } from "node:fs/promises";
import { useLoaderData } from "react-router";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export const loader = async () => {
  const markdown = await readFile(`${process.cwd()}/app/index.md`);
  const file = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkParseFrontmatter)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);

  const metadata = file.data.frontmatter as Record<string, string>;
  const content = file.value;

  return {
    metadata,
    content,
  };
};

export default function R() {
  const loaderData = useLoaderData<typeof loader>();
  const metadata = loaderData.metadata;
  const content = loaderData.content;

  return (
    <div>
      <h2>Metadata</h2>
      {Object.entries(metadata).map(([key, value]) => (
        <div key={key}>
          <span>{key}: {value}</span>
        </div>
      ))}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
