import { ProjectDetail } from "@/components/ui/ProjectModal";

export const projects: {
  id: number;
  name: string;
  period: string;
  desc: string;
  team: string;
  bullets: string[];
  tags: string[];
  highlight: string[];
  github: string;
  featured: boolean;
  detail: ProjectDetail;
}[] = [
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
    detail: {
      showBffDiagram: true,
      background:
        "프론트엔드 3명, 백엔드 2명, 디자이너 1명으로 구성된 팀에서 약 6주간 팀 협업 그룹웨어를 개발했습니다. 저는 인증 시스템 전반과 BFF 아키텍처 설계를 담당했습니다.",
      challenge:
        "백엔드와 프론트엔드의 도메인이 달라 백엔드에서 직접 쿠키를 설정할 수 없었습니다. 그렇다고 클라이언트에 토큰을 저장하면 XSS 공격에 노출될 위험이 있었고, 처리 로직이 각 컴포넌트에 분산되는 문제도 있었습니다.",
      solution:
        "Next.js 서버를 BFF로 구성해 백엔드에서 받은 토큰을 HttpOnly 쿠키로 변환했습니다. JavaScript로 접근이 불가한 쿠키에 토큰을 보관해 XSS 위험을 제거했고, 토큰 만료 시 서버에서 자동으로 갱신 후 원래 요청을 재시도하는 인터셉터를 구현했습니다.",
      outcome:
        "인증 관련 코드가 BFF 레이어에 집중되어 팀원들이 인증 로직을 신경 쓰지 않고 개발할 수 있는 구조가 만들어졌습니다. 클라이언트에 토큰이 노출되지 않는 보안 구조도 함께 완성했습니다.",
    },
  },
];
