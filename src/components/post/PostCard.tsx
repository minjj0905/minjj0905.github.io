import Link from 'next/link';

import { formatDate } from '@/lib/utils';
import type { PostMeta } from '@/types';

const PostCard = ({ post }: { post: PostMeta }) => (
  <li>
    <Link
      href={`/posts/${post.slug}`}
      className="glass group block rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30"
    >
      <div className="flex items-center gap-2 text-xs text-text-tertiary">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime}분</span>
      </div>

      <h2 className="break-keep-ko mt-2 text-xl font-semibold text-text-primary transition-colors group-hover:text-primary">
        {post.title}
      </h2>

      {post.summary && <p className="break-keep-ko mt-2 text-[0.95rem] text-text-secondary">{post.summary}</p>}

      {post.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
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
    </Link>
  </li>
);

export default PostCard;
