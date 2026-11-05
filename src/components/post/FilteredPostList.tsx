'use client';

import { useSearchParams } from 'next/navigation';

import { EmptyPosts, PostListHeader } from '@/components/post/PostList';
import VirtualPostList from '@/components/post/VirtualPostList';
import type { PostMeta } from '@/types';

type FilteredPostListProps = {
  posts: PostMeta[];
  tags: { tag: string; count: number }[];
};

/** URL 의 ?tag= 값으로 글을 필터링한다. 페이지는 정적 생성을 유지하고 필터만 클라이언트에서 처리. */
const FilteredPostList = ({ posts, tags }: FilteredPostListProps) => {
  const tagParam = useSearchParams().get('tag');
  const activeTag = tagParam && tags.some(({ tag }) => tag === tagParam) ? tagParam : null;
  const filtered = activeTag ? posts.filter((post) => post.tags.includes(activeTag)) : posts;

  return (
    <>
      <PostListHeader total={posts.length} filteredCount={filtered.length} tags={tags} activeTag={activeTag} />
      {/* 필터가 바뀌면 key 로 리마운트해서 불러온 개수·측정값을 초기화 */}
      {filtered.length > 0 ? <VirtualPostList key={activeTag ?? 'all'} posts={filtered} /> : <EmptyPosts />}
    </>
  );
};

export default FilteredPostList;
