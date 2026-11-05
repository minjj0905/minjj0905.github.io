'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { useWindowVirtualizer } from '@tanstack/react-virtual';

import PostCard from '@/components/post/PostCard';
import type { PostMeta } from '@/types';

/** 무한 스크롤로 한 번에 추가하는 글 수 */
const PAGE_SIZE = 10;
/** 카드 높이 추정값(px). 실제 높이는 measureElement 로 측정해 보정된다. */
const ESTIMATED_CARD_HEIGHT = 150;
/** 카드 사이 간격(px) — 정적 목록의 gap-2 와 맞춤 */
const CARD_GAP = 8;

/**
 * 무한 스크롤 + 가상 스크롤 글 목록.
 * - 무한 스크롤: PAGE_SIZE 개씩 불러오고, 불러온 마지막 글이 렌더 범위에 들어오면 다음 페이지를 붙인다.
 * - 가상 스크롤: 불러온 글 중 뷰포트(+overscan) 근처의 카드만 DOM 에 렌더링한다.
 */
const VirtualPostList = ({ posts }: { posts: PostMeta[] }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [loadedCount, setLoadedCount] = useState(PAGE_SIZE);
  const [scrollMargin, setScrollMargin] = useState(0);

  // 목록 시작 위치(문서 기준). 태그 칩 줄바꿈 등으로 바뀔 수 있어 리사이즈 때 다시 잰다.
  useLayoutEffect(() => {
    const measure = () => {
      if (listRef.current) setScrollMargin(listRef.current.getBoundingClientRect().top + window.scrollY);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const loaded = posts.slice(0, loadedCount);
  const hasMore = loadedCount < posts.length;

  const virtualizer = useWindowVirtualizer({
    count: loaded.length,
    estimateSize: () => ESTIMATED_CARD_HEIGHT,
    gap: CARD_GAP,
    overscan: 5,
    scrollMargin,
  });

  const items = virtualizer.getVirtualItems();
  const lastIndex = items.at(-1)?.index ?? -1;

  useEffect(() => {
    if (hasMore && lastIndex >= loaded.length - 1) setLoadedCount((count) => count + PAGE_SIZE);
  }, [hasMore, lastIndex, loaded.length]);

  return (
    <ul ref={listRef} className="relative" style={{ height: virtualizer.getTotalSize() }}>
      {items.map((item) => {
        const post = loaded[item.index];
        return (
          <PostCard
            key={post.slug}
            post={post}
            data-index={item.index}
            ref={virtualizer.measureElement}
            className="absolute left-0 top-0 w-full"
            style={{ transform: `translateY(${item.start - virtualizer.options.scrollMargin}px)` }}
          />
        );
      })}
    </ul>
  );
};

export default VirtualPostList;
