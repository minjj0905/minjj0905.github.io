import fs from 'node:fs/promises';
import path from 'node:path';

import matter from 'gray-matter';
import rehypeAutolinkHeadings, { type Options as AutolinkOptions } from 'rehype-autolink-headings';
import rehypePrettyCode, { type Options as PrettyCodeOptions } from 'rehype-pretty-code';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import type { Post, PostMeta } from '@/types';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

/** 한국어 기준 대략적인 읽기 시간(분) */
const readingTime = (raw: string) => Math.max(1, Math.round(raw.replace(/\s/g, '').length / 500));

const parseFrontmatter = (slug: string, file: string): { meta: PostMeta; body: string } => {
  const { data, content } = matter(file);

  return {
    meta: {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ''),
      summary: String(data.summary ?? ''),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      published: data.published !== false,
      thumbnail: data.thumbnail ? String(data.thumbnail) : null,
      readingTime: readingTime(content),
    },
    body: content,
  };
};

/** 발행된 글 목록을 최신순으로 반환 */
export const getAllPosts = async (): Promise<PostMeta[]> => {
  const files = await fs.readdir(POSTS_DIR);

  const posts = await Promise.all(
    files
      .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
      .map(async (name) => {
        const slug = name.replace(/\.mdx?$/, '');
        const file = await fs.readFile(path.join(POSTS_DIR, name), 'utf8');
        return parseFrontmatter(slug, file).meta;
      }),
  );

  return posts
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
};

export const getAllTags = async (): Promise<{ tag: string; count: number }[]> => {
  const posts = await getAllPosts();
  const counts = new Map<string, number>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1));
  });

  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
};

const autolinkOptions: AutolinkOptions = {
  behavior: 'append',
  properties: { className: ['heading-anchor'], ariaHidden: 'true', tabIndex: -1 },
  content: { type: 'text', value: '#' },
};

const prettyCodeOptions: PrettyCodeOptions = {
  theme: { light: 'github-light', dark: 'github-dark-dimmed' },
  keepBackground: false,
};

const markdownToHtml = async (markdown: string): Promise<string> => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, autolinkOptions)
    .use(rehypePrettyCode, prettyCodeOptions)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return String(file);
};

/** 단일 글을 HTML까지 렌더링해 반환. 없으면 null */
export const getPost = async (slug: string): Promise<Post | null> => {
  for (const ext of ['md', 'mdx']) {
    try {
      const file = await fs.readFile(path.join(POSTS_DIR, `${slug}.${ext}`), 'utf8');
      const { meta, body } = parseFrontmatter(slug, file);

      if (!meta.published) return null;

      return { ...meta, html: await markdownToHtml(body) };
    } catch {
      // 다음 확장자 시도
    }
  }

  return null;
};
