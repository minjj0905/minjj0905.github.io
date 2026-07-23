import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { getAllPosts, getPost } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

type PageProps = { params: Promise<{ slug: string }> };

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/posts/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.summary,
      url: `/posts/${post.slug}`,
      publishedTime: post.date,
      tags: [...post.tags],
      images: post.thumbnail ? [{ url: post.thumbnail }] : undefined,
    },
  };
};

const PostPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <article className="animate-fade-up">
      <header className="border-b border-line/70 pb-8">
        <div className="flex items-center gap-2 text-sm text-text-tertiary">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime}분 분량</span>
        </div>

        <h1 className="break-keep-ko mt-3 font-gmarket text-3xl font-bold leading-snug sm:text-4xl">{post.title}</h1>

        {post.summary && <p className="break-keep-ko mt-3 text-text-secondary">{post.summary}</p>}

        {post.tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-line/70 bg-bg-subtle/70 px-2 py-0.5 text-xs text-text-tertiary"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* 콘텐츠는 빌드 시점에 unified 파이프라인으로 생성된 신뢰 가능한 HTML */}
      <div className="prose-post mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />

      <nav className="mt-16 border-t border-line/70 pt-6">
        <Link href="/posts" className="text-sm text-text-tertiary transition-colors hover:text-primary">
          ← 목록으로
        </Link>
      </nav>
    </article>
  );
};

export default PostPage;
