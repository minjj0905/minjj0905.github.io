export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  published: boolean;
  thumbnail: string | null;
  /** 예상 읽기 시간(분) */
  readingTime: number;
};

export type Post = PostMeta & {
  html: string;
};

export type Project = {
  title: string;
  period: string;
  role: string;
  summary: string;
  stack: string[];
  highlights: string[];
  links?: { label: string; href: string }[];
};
