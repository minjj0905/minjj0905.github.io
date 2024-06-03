export type Post = {
  id: string;
  html: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    summary: string;
    tags: Array<string>;
    published: boolean;
  };
};
