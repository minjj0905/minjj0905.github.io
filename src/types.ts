export type Post = {
  id: string;
  html: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    [key: string]: any;
  };
};
