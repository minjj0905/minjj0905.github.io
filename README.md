# minjj.log

개인 블로그 겸 포트폴리오. https://minjj.dev

## 스택

- **Next.js 15** (App Router) + React 19 + TypeScript
- **Tailwind CSS 3** — 디자인 토큰은 `src/styles/globals.css`의 CSS 변수로 관리
- **마크다운 파이프라인** — `unified` + `remark` / `rehype`, 코드 하이라이팅은 `rehype-pretty-code`(Shiki)
- **Vercel** 배포

## 실행

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # 프로덕션 빌드
pnpm lint
pnpm typecheck
```

## 글 쓰기

`content/posts/<slug>.md` 파일을 만들면 `/posts/<slug>` 로 자동 생성됩니다.

```markdown
---
title: '글 제목'
date: '2026-07-23'
tags: ['Next.js', 'React']
summary: '목록에 노출될 한 줄 요약'
published: true
---

본문...
```

- `published: false` 면 목록·빌드에서 제외됩니다 (초안).
- 이미지는 `public/posts/<slug>/` 에 두고 `![](/posts/<slug>/image.png)` 로 참조합니다.

## 포트폴리오

`src/data/projects.ts` 배열을 수정하면 `/portfolio` 에 반영됩니다.
