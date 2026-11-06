'use client';

import { useEffect, useState } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { useTheme } from 'next-themes';

// 아이콘이 하늘의 호를 따라 뜨고 지도록, 아이콘보다 아래쪽에 회전축을 둔다.
const ORBIT = 'absolute inset-0 origin-[50%_190%] motion-reduce:!animate-none';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // 첫 로드에서는 애니메이션 없이 최종 상태만 보여주고, 클릭한 뒤부터 뜨고 지는 모션을 켠다.
  const [animated, setAnimated] = useState(false);

  // 서버 렌더 시점에는 테마를 알 수 없으므로 aria-label만 마운트 후에 확정한다.
  // 아이콘 상태는 html의 .dark 클래스(dark: 변형)로 결정되어 첫 페인트부터 올바르다.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => {
        setAnimated(true);
        setTheme(isDark ? 'light' : 'dark');
      }}
      aria-label={mounted ? (isDark ? '라이트 모드로 전환' : '다크 모드로 전환') : '테마 전환'}
      className="text-text-secondary transition-colors hover:text-text-primary"
    >
      <span className="relative block h-5 w-5 overflow-hidden" aria-hidden="true">
        {/* 해: 라이트에서 떠 있다가 다크로 바뀌면 오른쪽으로 진다 */}
        <span
          className={`${ORBIT} rotate-0 opacity-100 dark:rotate-[75deg] dark:opacity-0 ${
            animated ? 'animate-sun-rise dark:animate-sun-set' : ''
          }`}
        >
          <SunIcon className="h-5 w-5" />
        </span>
        {/* 달: 라이트에서는 왼쪽 아래에 숨어 있다가 다크로 바뀌면 떠오른다 */}
        <span
          className={`${ORBIT} -rotate-[75deg] opacity-0 dark:rotate-0 dark:opacity-100 ${
            animated ? 'animate-moon-set dark:animate-moon-rise' : ''
          }`}
        >
          <MoonIcon className="h-5 w-5" />
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
