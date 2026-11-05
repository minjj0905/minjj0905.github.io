import Link from 'next/link';

import PostCard from '@/components/post/PostCard';
import { cn } from '@/lib/utils';
import type { PostMeta } from '@/types';

type TagCount = { tag: string; count: number };

const chipClass = (active: boolean) =>
  cn(
    'block rounded-md px-2 py-0.5 text-xs transition-colors',
    active ? 'bg-primary/10 text-primary' : 'bg-bg-subtle text-text-secondary hover:text-text-primary',
  );

type PostListHeaderProps = {
  total: number;
  filteredCount: number;
  tags: TagCount[];
  activeTag: string | null;
};

/** 글 개수 + 태그 필터 칩 */
export const PostListHeader = ({ total, filteredCount, tags, activeTag }: PostListHeaderProps) => (
  <>
    <p className="mt-2 text-text-secondary">
      {activeTag ? `#${activeTag} 태그의 글 ${filteredCount}개` : `총 ${total}개의 글`}
    </p>

    {tags.length > 0 && (
      <ul className="mb-8 mt-6 flex flex-wrap gap-1.5">
        <li>
          <Link href="/posts" scroll={false} className={chipClass(activeTag === null)}>
            전체 <span className="opacity-60">{total}</span>
          </Link>
        </li>
        {tags.map(({ tag, count }) => {
          const active = tag === activeTag;
          return (
            <li key={tag}>
              <Link
                href={active ? '/posts' : `/posts?tag=${encodeURIComponent(tag)}`}
                scroll={false}
                aria-current={active ? 'true' : undefined}
                className={chipClass(active)}
              >
                <span className="text-primary">#</span>
                {tag} <span className="opacity-60">{count}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    )}
  </>
);

export const EmptyPosts = () => <p className="text-text-tertiary">아직 작성된 글이 없습니다.</p>;

/**
 * 전체 글을 그대로 렌더링하는 정적 목록.
 * 빌드 HTML(SEO, JS 미실행 환경)용 fallback 으로 쓰고, 브라우저에서는 VirtualPostList 로 교체된다.
 */
const PostList = ({ posts, tags }: { posts: PostMeta[]; tags: TagCount[] }) => (
  <>
    <PostListHeader total={posts.length} filteredCount={posts.length} tags={tags} activeTag={null} />
    {posts.length > 0 ? (
      <ul className="flex flex-col gap-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </ul>
    ) : (
      <EmptyPosts />
    )}
  </>
);

export default PostList;
