import type { Metadata } from 'next';

import PostCard from '@/components/post/PostCard';
import { getAllPosts, getAllTags } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Posts',
  description: '개발하며 배우고 정리한 글 모음.',
  alternates: { canonical: '/posts' },
};

const PostsPage = async () => {
  const [posts, tags] = await Promise.all([getAllPosts(), getAllTags()]);

  return (
    <div className="animate-fade-up">
      <header className="py-4">
        <h1 className="font-gmarket text-3xl font-bold">Posts</h1>
        <p className="mt-2 text-text-secondary">총 {posts.length}개의 글</p>
      </header>

      {tags.length > 0 && (
        <ul className="mb-8 mt-4 flex flex-wrap gap-1.5">
          {tags.map(({ tag, count }) => (
            <li
              key={tag}
              className="rounded-md border border-line/70 bg-bg-subtle/70 px-2.5 py-1 text-xs text-text-tertiary"
            >
              {tag} <span className="text-text-tertiary/70">{count}</span>
            </li>
          ))}
        </ul>
      )}

      {posts.length > 0 ? (
        <ul className="flex flex-col gap-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </ul>
      ) : (
        <p className="text-text-tertiary">아직 작성된 글이 없습니다.</p>
      )}
    </div>
  );
};

export default PostsPage;
