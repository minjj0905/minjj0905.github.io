import type { ComponentProps } from 'react';

import Link from 'next/link';

import TagList from '@/components/post/TagList';
import { formatDate } from '@/lib/utils';
import type { PostMeta } from '@/types';

type PostCardProps = ComponentProps<'li'> & { post: PostMeta };

const PostCard = ({ post, ...liProps }: PostCardProps) => (
  <li {...liProps}>
    <Link
      href={`/posts/${post.slug}`}
      className="group -mx-4 block rounded-2xl p-4 transition-colors hover:bg-bg-subtle"
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

      {post.tags.length > 0 && <TagList tags={post.tags} className="mt-4" />}
    </Link>
  </li>
);

export default PostCard;
