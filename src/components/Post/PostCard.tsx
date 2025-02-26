import { Post } from '@/types';
import dayjs from 'dayjs';
import { Link } from 'gatsby';

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const formattedDate = dayjs(post.frontmatter.date).format('YYYY년 M월 D일');

  return (
    <Link to={post.fields.slug}>
      <li className="mb-4 rounded-2xl bg-c-bg-primary p-4 hover:bg-c-bg-secondary">
        <div className="mb-2 flex flex-wrap items-baseline gap-2">
          <h2 className="break-words break-keep text-xl font-semibold">{post.frontmatter.title}</h2>
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
