import Link from 'next/link';

import PostCard from '@/components/post/PostCard';
import { getAllPosts } from '@/lib/posts';

const HomePage = async () => {
  const posts = await getAllPosts();
  const recent = posts.slice(0, 5);

  return (
    <div>
      <section>
        <div className="mb-6 flex items-baseline justify-between">
          <h1 className="text-xl font-bold">최근 글</h1>
          <Link href="/posts" className="text-sm text-text-tertiary transition-colors hover:text-primary">
            더보기 →
          </Link>
        </div>

        {recent.length > 0 ? (
          <ul className="flex flex-col gap-2">
            {recent.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </ul>
        ) : (
          <p className="text-text-tertiary">아직 작성된 글이 없습니다.</p>
        )}
      </section>
    </div>
  );
};

export default HomePage;
