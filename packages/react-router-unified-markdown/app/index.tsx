import { readFile } from "node:fs/promises";
import { useLoaderData } from "react-router";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export const loader = async () => {
  const markdown = await readFile(`${process.cwd()}/README.md`);
  const parsedMarkdown = await unified().use(remarkParse).use(remarkRehype).use(rehypeStringify).process(markdown);
  const content = parsedMarkdown.value;

  return {
    content,
  };
};

export default function R() {
  const loaderData = useLoaderData<typeof loader>();
  const content = loaderData.content;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
