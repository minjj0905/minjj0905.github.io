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

- 작성한 세션과 **별개의 에이전트**(`feature-dev:code-reviewer`)가 리뷰한다. 리뷰 에이전트는 shell이 없을 수 있으므로 작성 세션이 다음을 맡는다.
  1. `gh pr diff <번호>` 결과(또는 `git diff main...HEAD`)를 확인하고, 리뷰 에이전트에게 **PR 번호와 리뷰 범위(PR 전체 diff)** 를 명시해 넘긴다.
  2. 반환된 결과를 `gh pr comment <번호>` 로 PR에 게시한다(지적 없음이면 그 사실만 간단히).
- 보는 기준: 버그·로직 오류, 보안, 접근성, 다크/라이트 양쪽 동작, SSR/하이드레이션, 성능, 이 문서와 기존 코드 컨벤션.
- 지적사항은 같은 브랜치에 커밋을 추가해 고치고 푸시한다. 고친 뒤에는 3장의 검증(`pnpm typecheck && pnpm lint`, 해당 시 `pnpm build`)을 다시 통과시키고, **최종 HEAD를 포함하도록 다시 리뷰**한다.
- 버그·보안·접근성 지적은 모두 수정하거나, 반영하지 않는 이유를 PR 코멘트로 남겨야 "해결"로 본다. 사소한 스타일 제안은 판단해서 반영 여부를 정하고 결과를 코멘트로 남긴다.

## 6. 머지

머지 전에 아래를 **모두** 만족해야 에이전트가 직접 머지한다. 하나라도 어긋나면 머지하지 않는다.

1. 최종 푸시된 HEAD 기준으로 `pnpm typecheck && pnpm lint`(해당 시 `pnpm build`)가 통과했다.
2. 마지막 에이전트 리뷰가 최종 HEAD를 포함하고, 해결되지 않은 지적이 없다(5장 기준).
3. 사용자가 "머지하지 마" 같은 보류 지시를 하지 않았다.
4. 아래 **사용자 확인 필요 변경**에 해당하지 않는다. 해당하거나 판단이 애매하면 사용자에게 먼저 묻고 승인받은 뒤 머지한다.

사용자 확인 필요 변경 (머지 전에 먼저 묻는다)

- 배포·환경 설정: `vercel.json`, `next.config.*`, `.env*`, 도메인·DNS
- 의존성: `package.json` 의존성 추가·삭제·버전 변경, `pnpm-lock.yaml` 변경
- 저장소 설정: `.github/**`, 브랜치 보호 등 GitHub 설정
- 이 문서(`CLAUDE.md`)나 `.claude/` 설정의 변경
- 리뷰에서 의견이 갈려 반영 여부가 애매한 항목이 남은 경우
- 그 밖에 되돌리기 어렵거나 운영에 영향이 큰 변경

```bash
gh pr merge <번호> --squash --delete-branch --subject "<PR 제목> (#<번호>)" --body ""
```

- Squash 머지이고 커밋 제목은 `<PR 제목> (#<번호>)` 로 명시한다. 본문은 비워 `Co-Authored-By` 가 붙지 않게 한다.
- 레포 설정 `delete_branch_on_merge` 가 켜져 있어 머지된 원격 브랜치는 자동 삭제된다. `--delete-branch` 는 로컬 브랜치까지 정리한다.
- 머지 후: `git checkout main && git pull --ff-only` 로 로컬 `main` 을 최신으로 맞춘다.
