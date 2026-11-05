import { Suspense } from 'react';
import type { Metadata } from 'next';

import FilteredPostList from '@/components/post/FilteredPostList';
import PostList from '@/components/post/PostList';
import { getAllPosts, getAllTags } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Posts',
  description: '개발하며 배우고 정리한 글 모음.',
  alternates: { canonical: '/posts' },
};

const PostsPage = async () => {
  const [posts, tags] = await Promise.all([getAllPosts(), getAllTags()]);

  return (
    <div>
      <header className="py-4">
        <h1 className="text-3xl font-bold">Posts</h1>
      </header>

      {/* 정적 HTML 에는 전체 목록을 넣어두고, 브라우저에서는 ?tag= 필터 + 무한/가상 스크롤 목록으로 교체 */}
      <Suspense fallback={<PostList posts={posts} tags={tags} />}>
        <FilteredPostList posts={posts} tags={tags} />
      </Suspense>
    </div>
  );
};

export default PostsPage;
