import Link from 'next/link';

import { cn } from '@/lib/utils';

type TagListProps = {
  tags: readonly string[];
  className?: string;
  /** true 면 각 태그가 /posts?tag= 필터 링크가 된다. 다른 링크 안에서는 false 로 둘 것. */
  linked?: boolean;
};

const chipClass = 'block rounded-md bg-bg-subtle px-2 py-0.5 text-xs text-text-secondary';

const TagList = ({ tags, className, linked = false }: TagListProps) => (
  <ul className={cn('flex flex-wrap gap-1.5', className)}>
    {tags.map((tag) => {
      const label = (
        <>
          <span className="text-primary">#</span>
          {tag}
        </>
      );

      return (
        <li key={tag}>
          {linked ? (
            <Link
              href={`/posts?tag=${encodeURIComponent(tag)}`}
              className={cn(chipClass, 'transition-colors hover:text-text-primary')}
            >
              {label}
            </Link>
          ) : (
            <span className={chipClass}>{label}</span>
          )}
        </li>
      );
    })}
  </ul>
);

export default TagList;
