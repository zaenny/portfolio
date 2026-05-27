export const projects = [
  {
    id: 1,
    name: "taskmate_fe",
    period: "2026.03 — 2026.04",
    desc: "팀 협업 그룹웨어 · Codeit Sprint FESI-13 팀 프로젝트",
    team: "프론트엔드 3명 · 백엔드 2명 · 디자이너 1명",
    bullets: [
      "백엔드와 프론트 도메인이 달라 토큰을 직접 설정할 수 없는 구조적 제약을 해결하기 위해 Next.js 서버를 BFF로 구성, 토큰을 HttpOnly 쿠키로 전환해 클라이언트 노출 없이 인증 처리",
      "토큰 만료 시 서버에서 자동 갱신 후 재요청하는 인터셉터 구현 — 사용자가 로그인 상태 끊김 없이 서비스 이용 가능",
      "구글·카카오 소셜 로그인 통합, 로그인·회원가입 화면 전담 개발",
      "cva 기반 Input, SearchInput 컴포넌트 설계로 일관된 UI 유지",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS v4",
      "BFF",
      "OAuth",
    ],
    highlight: ["Next.js", "TypeScript", "TanStack Query", "Zustand"],
    github: "https://github.com/zaenny/taskmate_fe",
    featured: true,
  },
];
