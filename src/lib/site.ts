export const siteConfig = {
  name: 'minjj.log',
  title: 'minjj.log',
  description: '편리하고 아름다운 서비스를 만들어 나가고 싶은 개발자의 기록.',
  url: 'https://minjj.dev',
  author: 'Minjeong Kim',
  githubId: 'minjj0905',
  email: 'minjj.dev@gmail.com',
  gaId: 'G-4H7T3BVTSP',
  nav: [
    { label: 'Posts', href: '/posts' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
  ],
} as const;

/**
 * 내용이 준비될 때까지 임시로 숨기는 페이지.
 * 여기 있는 경로는 GNB·sitemap 에서 빠지고, 직접 접속하면 404 가 된다. 다시 열려면 배열에서 지우면 된다.
 */
const hiddenRoutes: readonly string[] = ['/portfolio', '/about'];

export const isHiddenRoute = (href: string) => hiddenRoutes.includes(href);
