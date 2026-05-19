import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-bg-s py-[80px] border-t border-b border-sand-l"
    >
      <div className="max-w-[880px] mx-auto px-[48px]">
        <RevealWrapper>
          <SectionLabel>Experience</SectionLabel>
        </RevealWrapper>

        {/* Codeit Sprint */}
        <RevealWrapper>
          <div className="flex gap-[40px] py-[32px] border-b border-sand-l">
            <div className="w-[160px] flex-shrink-0">
              <p className="font-mono text-[11px] text-light mb-[4px]">
                2026.02 — 2026.04
              </p>
              <p className="text-[11px] text-light">교육 과정</p>
            </div>
            <div className="flex-1">
              <p className="text-[16px] font-medium text-navy mb-[4px]">
                Codeit Sprint FESI-13
              </p>
              <p className="text-[13px] text-muted mb-[14px]">
                프론트엔드 엔지니어링 과정
              </p>
              <div className="flex flex-wrap gap-[6px] mb-[14px]">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "TanStack Query",
                  "Tailwind CSS v4",
                  "Zustand",
                  "GitHub Actions",
                ].map((tag) => (
                  <Tag
                    key={tag}
                    name={tag}
                    highlight={[
                      "Next.js",
                      "React",
                      "TypeScript",
                      "TanStack Query",
                    ].includes(tag)}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-[5px]">
                {[
                  "taskmate_fe — 팀 협업 그룹웨어 · BFF 아키텍처 설계 · 인증 시스템 구현 · CI/CD 구축",
                  "reading-log — 독서 기록 개인 프로젝트 · f-lab 멘토링 진행 중",
                ].map((bullet, i) => (
                  <p
                    key={i}
                    className="text-[13px] text-muted pl-[14px] relative leading-[1.65] before:content-['—'] before:absolute before:left-0 before:text-sand before:text-[11px] before:top-[2px]"
                  >
                    {bullet}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* 아와소프트 */}
        <RevealWrapper delay={100}>
          <div className="flex gap-[40px] py-[32px]">
            <div className="w-[160px] flex-shrink-0">
              <p className="font-mono text-[11px] text-light mb-[4px]">
                2020.06 — 2025.07
              </p>
              <p className="text-[11px] text-light">정규직 · 5년 1개월</p>
            </div>
            <div className="flex-1">
              <p className="text-[16px] font-medium text-navy mb-[4px]">
                ㈜ 아와소프트
              </p>
              <p className="text-[13px] text-muted mb-[14px]">
                스마트금융사업부 / 모바일솔루션팀 · 대리
              </p>
              <div className="flex flex-wrap gap-[6px] mb-[14px]">
                {[
                  "JavaScript",
                  "jQuery",
                  "JSP",
                  "Java",
                  "Spring",
                  "Android",
                  "AJAX",
                ].map((tag) => (
                  <Tag key={tag} name={tag} />
                ))}
              </div>
              <div className="flex flex-col gap-[5px]">
                {[
                  "금융·공공 도메인 프로젝트 9건 수행 (신한은행, 손해보험협회, 한국도로공사, KBIZ 등)",
                  "프론트엔드 개발 · 백엔드 유지보수 · 안드로이드 앱 유지보수 담당",
                  "네이버 OAuth 2.0 인증, OCR 솔루션, JasperSoft 보고서 등 외부 솔루션 연동 다수 경험",
                ].map((bullet, i) => (
                  <p
                    key={i}
                    className="text-[13px] text-muted pl-[14px] relative leading-[1.65] before:content-['—'] before:absolute before:left-0 before:text-sand before:text-[11px] before:top-[2px]"
                  >
                    {bullet}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
