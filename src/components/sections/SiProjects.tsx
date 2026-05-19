import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { siProjects } from "@/data/siProjects";

export default function SiProjects() {
  return (
    <section id="si-projects" className="bg-bg py-[80px]">
      <div className="max-w-[880px] mx-auto px-[48px]">
        <RevealWrapper>
          <SectionLabel>SI Projects</SectionLabel>
        </RevealWrapper>
        <RevealWrapper delay={100}>
          <p className="text-[14px] text-muted leading-[1.8] mb-[44px] max-w-[580px]">
            ㈜ 아와소프트 재직 기간(2020 — 2025) 동안 수행한 프로젝트입니다.
            금융·공공 도메인에서 프론트엔드와 백엔드를 함께 개발했습니다.
          </p>
        </RevealWrapper>

        <div className="flex flex-col">
          {siProjects.map((project, i) => (
            <RevealWrapper key={project.id} delay={(i % 3) * 100}>
              <div className="flex gap-0">
                {/* 타임라인 */}
                <div className="flex flex-col items-center w-[20px] flex-shrink-0 mr-[28px]">
                  <div
                    className="w-[9px] h-[9px] rounded-full flex-shrink-0 mt-[5px] border-[2px] border-bg"
                    style={{
                      background: project.dimmed ? "#C8BFB0" : "#2B4A8C",
                      boxShadow: project.dimmed
                        ? "0 0 0 1px #C8BFB0"
                        : "0 0 0 1px #2B4A8C",
                    }}
                  />
                  {i < siProjects.length - 1 && (
                    <div className="w-[1px] flex-1 bg-sand-l mt-[4px] min-h-[20px]" />
                  )}
                </div>

                {/* 콘텐츠 */}
                <div className="flex-1 pb-[40px]">
                  <div className="flex items-start justify-between gap-[16px] mb-[10px] flex-wrap">
                    <p className="text-[15px] font-medium text-navy">
                      {project.name}
                    </p>
                    <div className="flex items-center gap-[8px] flex-shrink-0">
                      <span className="text-[10px] bg-tag-bg text-muted rounded-[3px] px-[8px] py-[2px] border border-sand-l">
                        {project.domain}
                      </span>
                      <span className="font-mono text-[11px] text-light">
                        {project.period}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] mb-[12px]">
                    {project.bullets.map((bullet, j) => (
                      <p
                        key={j}
                        className="text-[13px] text-muted pl-[14px] relative leading-[1.7] before:content-['·'] before:absolute before:left-[4px] before:text-sand before:text-[16px] before:leading-[1.4]"
                      >
                        {bullet}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-[5px]">
                    {project.tags.map((tag) => (
                      <Tag
                        key={tag}
                        name={tag}
                        highlight={project.highlight.includes(tag)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
