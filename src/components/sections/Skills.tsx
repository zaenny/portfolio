import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-bg-s py-[80px] border-t border-b border-sand-l"
    >
      <div className="max-w-[880px] mx-auto px-[48px]">
        <RevealWrapper>
          <SectionLabel>Skills</SectionLabel>
        </RevealWrapper>
        <div className="flex flex-col gap-[28px]">
          {skills.map((group, i) => (
            <RevealWrapper key={group.label} delay={i * 100}>
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-light mb-[10px]">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-[8px]">
                  {group.items.map((item) => (
                    <Tag
                      key={item.name}
                      name={item.name}
                      highlight={item.highlight}
                    />
                  ))}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
