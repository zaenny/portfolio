import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-bg py-[80px]">
      <div className="max-w-[880px] mx-auto px-[48px]">
        <RevealWrapper>
          <SectionLabel>Projects</SectionLabel>
        </RevealWrapper>
        <div className="flex flex-col gap-[20px]">
          {projects.map((project, i) => (
            <RevealWrapper key={project.id} delay={i * 100}>
              <div
                className={`bg-bg-c rounded-[12px] p-[28px_32px] border transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(27,42,74,0.08)] ${
                  project.featured ? "border-[#B8CCE4]" : "border-sand-l"
                }`}
              >
                <div className="flex items-start justify-between gap-[16px] mb-[10px]">
                  <p className="text-[17px] font-medium text-navy">
                    {project.name}
                  </p>
                  <p className="font-mono text-[11px] text-light flex-shrink-0 pt-[3px]">
                    {project.period}
                  </p>
                </div>
                <p className="text-[13px] text-muted leading-[1.8] mb-[14px]">
                  {project.desc}
                </p>
                <p className="text-[13px] text-muted leading-[1.8] mb-[6px]">
                  {project.desc}
                </p>
                {project.team && (
                  <p className="font-mono text-[11px] text-light mb-[14px]">
                    👥 {project.team}
                  </p>
                )}
                <div className="flex flex-col gap-[5px] mb-[14px]">
                  {project.bullets.map((bullet, j) => (
                    <p
                      key={j}
                      className="text-[13px] text-muted pl-[14px] relative leading-[1.7] before:content-['·'] before:absolute before:left-[4px] before:text-sand before:text-[16px] before:leading-[1.4]"
                    >
                      {bullet}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-[6px] mb-[16px]">
                  {project.tags.map((tag) => (
                    <Tag
                      key={tag}
                      name={tag}
                      highlight={project.highlight.includes(tag)}
                    />
                  ))}
                </div>
                <div className="pt-[16px] border-t border-sand-l">
                  <a
                    href={project.github}
                    target="_blank"
                    className="font-mono text-[11px] text-navy-l hover:underline"
                  >
                    ↗ GitHub
                  </a>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
