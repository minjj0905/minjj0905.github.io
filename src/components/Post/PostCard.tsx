import { Post } from '@/types';
import dayjs from 'dayjs';
import { Link } from 'gatsby';
import React from 'react';

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const formattedDate = dayjs(post.frontmatter.date).format('YYYY년 M월 D일');
  console.log(post);

  return (
    <Link to={post.fields.slug}>
      <li className="p-4 rounded-2xl mb-4 bg-c-bg-primary hover:bg-c-bg-secondary">
        <div className="flex flex-wrap gap-2 items-baseline mb-2">
          <h2 className="font-semibold text-xl break-words break-keep">{post.frontmatter.title}</h2>
          <time className="text-sm text-c-text-tertiary" dateTime={post.frontmatter.date}>
            {formattedDate}
          </time>
        </div>
        <p className="mb-2">{post.frontmatter.summary}</p>
        <ul className="flex flex-wrap gap-2 text-sm">
          {post.frontmatter.tags.map((tag: string) => (
            <li key={tag}>
              <span className="text-c-primary">#</span>
              <span className="text-c-text-secondary">{tag}</span>
            </li>
          ))}
        </ul>
      </li>
    </Link>
  );
};

export default PostCard;
