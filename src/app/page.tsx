import Link from 'next/link';

import PostCard from '@/components/post/PostCard';
import { getAllPosts } from '@/lib/posts';
import { siteConfig } from '@/lib/site';

const HomePage = async () => {
  const posts = await getAllPosts();
  const recent = posts.slice(0, 5);

  return (
    <div className="animate-fade-up">
      <section className="py-6">
        <p className="text-sm font-medium text-primary">안녕하세요 👋</p>
        <h1 className="break-keep-ko mt-3 font-gmarket text-3xl font-bold leading-snug sm:text-4xl">
          기록하며 성장하는 개발자
          <br />
          <span className="text-primary">{siteConfig.author}</span>입니다.
        </h1>
        <p className="break-keep-ko mt-4 max-w-xl text-text-secondary">{siteConfig.description}</p>

        <div className="mt-7 flex flex-wrap gap-2">
          <Link
            href="/portfolio"
            className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            포트폴리오 보기
          </Link>
          <Link
            href="/posts"
            className="glass rounded-xl px-4 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:border-primary/30"
          >
            전체 글 보기
          </Link>
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-5 flex items-baseline justify-between">
          <h2 className="font-gmarket text-xl font-bold">최근 글</h2>
          <Link href="/posts" className="text-sm text-text-tertiary transition-colors hover:text-primary">
            더보기 →
          </Link>
        </div>

        {recent.length > 0 ? (
          <ul className="flex flex-col gap-3">
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
