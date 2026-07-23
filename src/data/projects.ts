import type { Project } from '@/types';

/**
 * 포트폴리오 항목. 내용은 자유롭게 수정해서 채우면 됩니다.
 * 별도 CMS 없이 이 파일만 고치면 /portfolio 에 반영됩니다.
 */
export const projects: Project[] = [
  {
    title: '프로젝트 이름',
    period: '2025.01 – 2025.06',
    role: 'Frontend',
    summary: '한두 문장으로 프로젝트가 무엇이고 어떤 문제를 풀었는지 적어주세요.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      '내가 맡은 역할과 성과를 수치와 함께 적으면 좋습니다.',
      '기술적으로 고민했던 지점과 선택의 근거를 적어주세요.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/minjj0905' }],
  },
];
