# minjj.log 작업 프로세스

`main`은 **배포 브랜치**다(머지되는 즉시 Vercel이 배포). `main`에 직접 커밋·푸시하지 않고, 모든 변경은 PR → 에이전트 리뷰 → 머지 순서로 반영한다.

## 1. 브랜치

- `main`에서 새 브랜치를 만든다: `<type>/<kebab-case-요약>` (예: `feat/theme-toggle-animation`)
- type: `feat` `fix` `refactor` `style` `perf` `chore` `docs`

## 2. 커밋

- 형식: `<type>: <subject>` (제목 50자 내외, 한국어), 필요하면 빈 줄 뒤 본문
- `Co-Authored-By` 는 넣지 않는다.

## 3. 푸시 전 검증

```bash
pnpm typecheck && pnpm lint
```

- 설정·의존성·라우트를 건드렸으면 `pnpm build` 도 통과시킨다.
- UI 변경은 `pnpm dev` 로 띄워서 claude-in-chrome 으로 직접 확인한다(확인한 탭은 닫는다).

## 4. PR 생성

```bash
git push -u origin <branch>
gh pr create --base main --title "<커밋과 같은 형식의 제목>" --body-file <본문 파일>
```

- 본문은 `.github/PULL_REQUEST_TEMPLATE.md`(작업 내용 / 참고 사항 / 기타 사항)를 채워 한국어로 쓴다.
- UI 변경이면 확인한 방법과 결과를 기타 사항에 적는다.

## 5. 에이전트 리뷰

- PR을 만들면 **작성한 세션과 별개의 에이전트**(`feature-dev:code-reviewer`)에게 PR diff(`gh pr diff <번호>`) 리뷰를 맡긴다.
- 보는 기준: 버그·로직 오류, 접근성, 다크/라이트 양쪽 동작, SSR/하이드레이션, 성능, 이 문서의 컨벤션.
- 리뷰 결과는 `gh pr comment <번호>` 로 PR에 남긴다(지적 없음이면 그 사실만 간단히).
- 지적사항은 같은 브랜치에 커밋을 추가해 고치고 푸시한 뒤, 고친 부분만 다시 리뷰한다. 반영하지 않기로 한 항목은 이유를 PR 코멘트로 남긴다.

## 6. 머지

머지는 아래를 모두 만족할 때 에이전트가 직접 한다.

- 에이전트 리뷰에 미해결 지적이 없다.
- 푸시 전 검증이 통과했다.
- 사용자가 "머지하지 마" 같은 보류 지시를 하지 않았다.

```bash
gh pr merge <번호> --squash --delete-branch
```

- Squash 머지, 커밋 제목은 PR 제목을 그대로 쓴다(`Co-Authored-By` 금지).
- 레포 설정 `delete_branch_on_merge` 가 켜져 있어 머지된 원격 브랜치는 자동 삭제된다. `--delete-branch` 는 로컬 브랜치까지 정리한다.
- 머지 후: `git checkout main && git pull --ff-only` 로 로컬 `main` 을 최신으로 맞춘다.

## 예외 — 머지 전에 사용자에게 먼저 묻는다

- 환경 변수, 도메인, 배포 설정, 의존성 대량 변경처럼 되돌리기 어렵거나 운영에 영향이 큰 변경
- 에이전트 리뷰에서 의견이 갈려 반영 여부가 애매한 항목이 남은 경우
